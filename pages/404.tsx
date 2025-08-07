import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: '404. Page not available. But Saurabh is.',
      }}
    >
      <h1 className="text-8xl rainbow-text">
        <strong>404. Page not available.</strong>
        <br></br>
        <strong>But Saurabh is.</strong>
      </h1>
      <p className="text-1xl">
        Saurabh is a social developer, occasional tech blogger & fun
        side-hustler who likes his Bullet (read BULT), Weekend songs &
        Dostoevsky. When he is not coding or pushing pixels, you&apos;ll find
        him in the gym or playing cards, or just casually riding or may be
        dreaming of buying a new bike (again). He is always up for
        collaborations on interesting & fun side-hustles. Got a project idea? He
        is sitting behind saurabh-pal-dn [at] gmail.com Explore his blogs and an
        open dashboard of his life while you are here.
      </p>
    </Layout>
  );
};

export default About;
