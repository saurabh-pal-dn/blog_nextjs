import React from 'react';
import Layout from '../components/Layout';

export const PopCulture = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Pop Culture',
      }}
    >
      <h1>
        <strong>Pop Culture</strong>
      </h1>
    </Layout>
  );
};

export default PopCulture;
