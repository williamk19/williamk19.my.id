import { NextSeo } from 'next-seo';
import IndexHero from '@/components/pages/index/IndexHero';
import IndexExperience from '@/components/pages/index/IndexExperience';

export default function Home() {
  return (
    <>
      <NextSeo
        title='Home'
      />
      <main>
        <IndexHero />
        <IndexExperience />
      </main>
    </>
  );
}
