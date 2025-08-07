import { useEffect } from 'react';
import useSWR from 'swr';

function getCounterText(views: number) {
  if (views > 1) return `${views.toLocaleString()} views`;

  return `${views.toLocaleString()} view`;
}

const ViewCounter = ({ slug }): JSX.Element => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views: number = data?.total ?? 0; // this is required because in the initial run, data is returned as undefined as the hook passes a promise, later data is populated

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, [slug]);
  const text = getCounterText(views);
  return <span>{text}</span>;
};

export default ViewCounter;
