import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPopPosts, getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Typewriter from 'typewriter-effect';
import ViewCounter from '../components/ViewCounter';
import {
  personalDescriptonAdjectives,
  personalDescriptonAdjectivesLength,
} from '../constants/constants';

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
              typewriter
                .typeString('I am ')
                .pauseFor(900)
                .typeString(
                  `<strong style="color: #27ae60;">${personalDescriptonAdjectives[0]}</strong>`
                )
                .pauseFor(1e3)
                .deleteChars(personalDescriptonAdjectivesLength[0])
                .typeString(
                  `<strong style="color: #6A7FDB;">${personalDescriptonAdjectives[1]}</strong>`
                )
                .pauseFor(1e3)
                .deleteChars(personalDescriptonAdjectivesLength[1])
                .typeString(
                  `<strong style="color: #27ae60;">${personalDescriptonAdjectives[2]}</strong>`
                )
                .pauseFor(1e3)
                .deleteChars(personalDescriptonAdjectivesLength[2])
                .typeString(
                  `<strong style="color: #3399ff;">${personalDescriptonAdjectives[3]}</strong>`
                )
                .pauseFor(1e3)
                .deleteChars(personalDescriptonAdjectivesLength[3])
                .typeString(
                  `<strong style="color: #6A7FDB;">${personalDescriptonAdjectives[4]}</strong>`
                )
                .pauseFor(1e3)
                .deleteChars(personalDescriptonAdjectivesLength[4])
                .typeString(
                  `<strong style="color: #57E2E5;">${personalDescriptonAdjectives[5]}</strong>`
                )
                .pauseFor(1e3)
                .deleteChars(personalDescriptonAdjectivesLength[5])
                .typeString(
                  `<strong style="color: #00A8E8;">${personalDescriptonAdjectives[6]}</strong>`
                )
                .pauseFor(1e3)
                .deleteAll()
                .typeString(
                  `<strong style="color: #57E2E5;">and much more ....</strong>`
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
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
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
  const techPosts = getAllPosts(['date', 'description', 'slug', 'title']);
  const popPosts = getAllPopPosts(['date', 'description', 'slug', 'title']);
  return {
    props: { techPosts, popPosts },
  };
};

export default Index;
