import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPopPosts, getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Typewriter from 'typewriter-effect';

export type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <h1>
        <strong>Hey, welcome! This is Saurabh's Blog</strong>
      </h1>

      <h1>
        <strong>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('I am ')
                .pauseFor(900)
                .typeString(
                  'a <strong style="color: #27ae60;">Developer </strong>'
                )
                .pauseFor(1e3)
                .deleteChars(10)
                .typeString('<strong style="color: #6A7FDB;">Runner </strong>')
                .pauseFor(1e3)
                .deleteChars(10)
                .typeString(
                  'an <strong style="color: #3399ff;">Artist </strong>'
                )
                .pauseFor(1e3)
                .deleteChars(10)
                .typeString(
                  '<strong style="color: #00A8E8;">Restless </strong>'
                )
                .pauseFor(1e3)
                .deleteAll()
                .typeString(
                  '<strong style="color: #57E2E5;">and much more .... </strong>'
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

      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  console.log('here0');
  console.log(process.env.SPOTIFY_CLIENT_ID);
  console.log('here1');
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);
  const popPosts = getAllPopPosts(['date', 'description', 'slug', 'title']);
  const allPosts = posts.concat(popPosts);
  return {
    props: { posts: allPosts },
  };
};

export default Index;
