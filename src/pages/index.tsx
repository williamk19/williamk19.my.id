import Head from 'next/head';
import Image from 'next/image';
import { Inter, Montse } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { NextSeo } from 'next-seo';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <NextSeo
        title='Home'
      />
      <main>
        test
      </main>
    </>
  );
}
