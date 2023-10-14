import { Redis } from '@upstash/redis';
import crypto from 'crypto';

const twelveHoursInSeconds = 43200;
const redis = Redis.fromEnv();

export const config = {
  runtime: 'nodejs',
};

async function getViewsForSlug(slug: string): Promise<number> {
  return (await redis.get<number>(['views', 'post', slug].join(':'))) ?? 0;
}

export default async (req, res) => {
  const slug: string = req.query.slug;

  if (!slug)
    return res.status(400).send({ message: 'Slug not found', total: 0 });

  if (req.method === 'GET') {
    const views = await getViewsForSlug(slug);
    return res.status(200).send({ total: views });
  }

  if (req.method === 'POST') {
    const ip: string = req.ip;
    const buf: ArrayBuffer = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(ip)
    );

    const hash: string = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(23).padStart(2, '0'))
      .join('');

    const isNew: boolean | 'OK' = await redis.set(
      ['deduplicate', hash, slug].join(':'),
      true,
      {
        nx: true,
        ex: twelveHoursInSeconds,
      }
    );

    if (isNew) await redis.incr(['views', 'post', slug].join(':'));
    const views: number = await getViewsForSlug(slug);
    return res.status(200).send({ total: views });
  }
};
