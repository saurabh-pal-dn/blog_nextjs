import React from 'react';
import Layout from '../components/Layout';

export const Blog = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Blog',
      }}
    >
      <h1>
        <strong>Blog</strong>
      </h1>
    </Layout>
  );
};

export default Blog;
