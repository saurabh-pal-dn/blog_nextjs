import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/blog">
        <a className="text-gray-900 dark:text-white px-6 py-4">Blog</a>
      </Link>
      <Link href="/dashboard">
        <a className="text-gray-900 dark:text-white px-6 py-4">Dashboard</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link>
      <Link href="/pop">
        <a className="text-gray-900 dark:text-white px-6 py-4">Pop Culture</a>
      </Link>
    </nav>
  );
};

export default Navigation;
