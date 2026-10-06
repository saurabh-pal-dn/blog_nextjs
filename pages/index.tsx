import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPopPosts, getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Typewriter from 'typewriter-effect';
import ViewCounter from '../components/ViewCounter';
import { personalDescriptonAdjectives } from '../constants/constants';

const TYPED_ADJECTIVES = personalDescriptonAdjectives.slice(0, -1);
const TYPED_COLORS = [
  '#27ae60',
  '#6A7FDB',
  '#27ae60',
  '#3399ff',
  '#6A7FDB',
  '#57E2E5',
  '#00A8E8',
];
const LAST_ADJECTIVE = personalDescriptonAdjectives.slice(-1)[0];

export type IndexProps = {
  techPosts: PostType[];
  popPosts: PostType[];
};

export const Index = ({ techPosts, popPosts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <h1>
        <strong>Hey, welcome! This is Saurabh&apos;s Blog</strong>
      </h1>

      <h1>
        <strong>
          <Typewriter
            onInit={(typewriter): void => {
              typewriter.typeString('I am ').pauseFor(900);
              TYPED_ADJECTIVES.forEach((word, i) => {
                typewriter
                  .typeString(
                    `<strong style="color: ${TYPED_COLORS[i]};">${word}</strong>`
                  )
                  .pauseFor(1e3)
                  .deleteChars(word.length);
              });
              typewriter
                .typeString(
                  `<strong style="color: #57E2E5;">${LAST_ADJECTIVE}</strong>`
                )
                .pauseFor(1e3)
                .deleteAll()
                .start();
            }}
            options={{ loop: true, delay: 60 }}
          />
        </strong>
      </h1>

      <p>I write about technology, esoteric knowledge and pop culture </p>
      {popPosts.map((post: PostType) => (
        <article key={post.slug} className="mt-12">
          <div className="flow-root">
            <p className="mb-1 float-left text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date), 'MMMM dd, yyyy')} | ~
              {post.readDurationinMinutes} mins read
            </p>
            <p className="mb-1 float-right text-sm text-gray-500 dark:text-gray-400">
              <ViewCounter slug={post.slug} />
            </p>
          </div>
          <h1 className="mb-2 text-xl">
            <Link
              as={`/posts/pop/${post.slug}`}
              href={`/posts/pop/[slug]`}
              className="text-gray-900 dark:text-white dark:hover:text-blue-400"
            >
              {post.title}
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/pop/${post.slug}`} href={`/posts/pop/[slug]`}>
              Read More
            </Link>
          </p>
        </article>
      ))}

      {techPosts.map((post: PostType) => (
        <article key={post.slug} className="mt-12">
          <div className="flow-root">
            <p className="mb-1 float-left text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date), 'MMMM dd, yyyy')} | ~
              {post.readDurationinMinutes} mins read
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
            >
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

export const getStaticProps: GetStaticProps = async () => {
  const techPosts = getAllPosts([
    'date',
    'description',
    'slug',
    'title',
    'readDurationinMinutes',
  ]);
  const popPosts = getAllPopPosts([
    'date',
    'description',
    'slug',
    'title',
    'readDurationinMinutes',
  ]);
  return {
    props: { techPosts, popPosts },
  };
};

export default Index;
