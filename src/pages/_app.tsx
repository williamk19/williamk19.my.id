import '@/styles/globals.css';
import '@fontsource/figtree';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import defaultSEOConfig from '../../next-seo.config';
import Layout from '../components/layout/Layout';
import theme from '../themes/theme.js';
import NextNProgress from 'nextjs-progressbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='manifest'
          href='/site.webmanifest'></link>
      </Head>
      <ChakraProvider theme={theme}>
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
          <NextNProgress
            height={4}
            color='#086F83'
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
