import '@/styles/globals.css';
import '@fontsource/figtree';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import defaultSEOConfig from '../../next-seo.config';
import Layout from '../components/layout/Layout';
import theme from '../themes/theme.js';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ChakraProvider theme={theme}>
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
