import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { NextSeo } from 'next-seo';
import IndexHero from '@/components/pages/index/IndexHero';

export default function Home() {
  return (
    <>
      <NextSeo
        title='Home'
      />
      <main>
        <IndexHero />
      </main>
    </>
  );
}
