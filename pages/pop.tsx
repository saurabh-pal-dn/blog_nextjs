import React from 'react';
import Layout from '../components/Layout';
import { IndexProps } from '.';
import { getAllPopPosts } from '../lib/api';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

export const PopCulture = ({ popPosts }: IndexProps): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Pop Culture',
      }}
    >
      <h1>
        <strong>Pop Culture</strong>
      </h1>

      {popPosts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/pop/${post.slug}`} href={`/posts/pop/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/pop/${post.slug}`} href={`/posts/pop/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps = () => {
  const popPosts = getAllPopPosts(['date', 'description', 'slug', 'title']);
  return {
    props: { popPosts },
  };
};

export default PopCulture;
