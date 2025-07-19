import fs from 'fs';
import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');

export const POP_POSTS_PATH = path.join(process.cwd(), 'posts', 'pop');

export const POP_POSTS_NOT_TO_DISPLAY_ON_PAGE: string[] = [
  'mumbai-a-year-review-public-infra.mdx',
];

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const popPostFilePaths = fs
  .readdirSync(POP_POSTS_PATH)
  // Only include md(x) starting with pop files
  .filter((path) => /\.mdx?$/.test(path));

export const personalDescriptonAdjectives: string[] = [
  'a Developer',
  'Passionate',
  'a Runner',
  'an Artist',
  'a Speaker',
  'Dumb and Foolish',
  'Restless',
  'and much more ....',
];
export const personalDescriptonAdjectivesLength: number[] = [
  11, 10, 8, 9, 9, 16, 8, 18,
];
