import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <SWRConfig
      value={{ fetcher: (url: string) => fetch(url).then((r) => r.json()) }}
    >
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
};

export default MyApp;
