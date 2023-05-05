import { NextSeo } from 'next-seo';
import IndexHero from '@/components/pages/index/IndexHero';
import IndexExperience from '@/components/pages/index/IndexExperience';
import { Experience } from '../types/experience.type';
import { FC } from 'react';
import { loadExperience } from '@/lib/loadExperience';

type HomeProps = {
  experience: Experience[];
};

const Home: FC<HomeProps> = ({ experience }) => {
  return (
    <>
      <NextSeo title='Home' />
      <main>
        <IndexHero />
        <IndexExperience experience={experience} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const { data: experience } = await loadExperience();

  return {
    props: {
      experience,
    },
  };
}

export default Home;