import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { POSTS_PATH, POP_POSTS_PATH, POP_POSTS_NOT_TO_DISPLAY_ON_PAGE } from '../utils/mdxUtils';

type PostItems = {
  [key: string]: string;
};

function checkForPopMdx(fullPath: string): boolean {
  return /.pop.mdx$/.test(fullPath);
}

function getPostHelperFunction(posts: PostItems[]) {
  return posts
    .filter((post) => !!post)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

function sanitizeFields(ctx: {
  fields: string[];
  fullPath: string;
  slug: string;
}) {
  const { fields, fullPath, slug } = ctx;
  const items: PostItems = {};
  const realSlug = slug.replace(/\.mdx$/, '');

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH);
}

function filterPopPostSlugs(popPostSlugs: string[]): string[] {
    return popPostSlugs.filter((popPostSlug: string)=>{
      return POP_POSTS_NOT_TO_DISPLAY_ON_PAGE.includes(popPostSlug.split('/').pop())
    })
}


function getPopPostSlugs(): string[] {
  const popPostSlugs = fs.readdirSync(POP_POSTS_PATH);
  return filterPopPostSlugs(popPostSlugs);
}

function getPostBySlug(slug: string, fields: string[] = []): PostItems {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  if (checkForPopMdx(fullPath)) return null;
  return sanitizeFields({ fields, fullPath, slug });
}

function getPopPostBySlug(slug: string, fields: string[] = []): PostItems {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POP_POSTS_PATH, `${realSlug}.mdx`);
  return sanitizeFields({ fields, fullPath, slug });
}

export function getAllPosts(fields: string[] = []): PostItems[] {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  return getPostHelperFunction(posts);
}

export function getAllPopPosts(fields: string[] = []): PostItems[] {
  const slugs = getPopPostSlugs();
  const posts = slugs.map((slug) => getPopPostBySlug(slug, fields));
  return getPostHelperFunction(posts);
}
