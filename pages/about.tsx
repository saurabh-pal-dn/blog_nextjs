import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Saurabh Pal',
      }}
    >
      <h1>
        <strong>About</strong>
      </h1>
      <p>
        Hey! I&apos;m a software developer working in Dept. of IT, RBI. I have
        deep interest in Finance and technology. I&apos;m working towards being
        a rock-star 🎸 in the Fin-Tech domain. In my free time I watch
        documentaries, movies and read history. You can read about it in{' '}
        <Link href="/pop">
          <a>Pop Cult</a>
        </Link>
      </p>
      <p>
        This blog is a collection of what I have learned in terms of technology
        and work experiences. My personal projects can be found on my github. Go
        have a look.
      </p>
      <p>
        I&apos;m planning on updating this blog as much as possible but
        can&apos;t promise anything 😛.
      </p>
    </Layout>
  );
};

export default About;
