import React from 'react';
import Layout from '../components/Layout';
import { IndexProps } from '.';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getAllPosts } from '../lib/api';
import ViewCounter from '../components/ViewCounter';

export const Blog = ({ techPosts }: IndexProps): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Blog',
      }}
    >
      <h1>
        <strong>Blog</strong>
      </h1>

      {techPosts.map((post) => (
        <article key={post.slug} className="mt-12">
          <div className="flow-root">
            <p className="mb-1 float-left text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </p>
            <p className="mb-1 float-right text-sm text-gray-500 dark:text-gray-400">
              <ViewCounter slug={post.slug} />
            </p>
          </div>
          <h1 className="mb-2 text-xl">
            <Link
              as={`/posts/${post.slug}`}
              href={`/posts/[slug]`}
              className="text-gray-900 dark:text-white dark:hover:text-blue-400"
              legacyBehavior>

              {post.title}

            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              Read More
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps = () => {
  const techPosts = getAllPosts(['date', 'description', 'slug', 'title']);
  return {
    props: { techPosts },
  };
};

export default Blog;
