import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import defaultSEOConfig from '../../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
        }}>
        <DefaultSeo
          {...defaultSEOConfig}
        />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
