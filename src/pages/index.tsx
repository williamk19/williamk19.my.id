import { NextSeo } from 'next-seo';
import IndexHero from '@/components/pages/index/IndexHero';
import IndexExperience from '@/components/pages/index/IndexExperience';
import { supabase } from '@/lib/supabaseClient';
import { Experience } from '../types/experience.type';
import { FC } from 'react';

type HomeProps = {
  experience: Experience[];
};

const Home: FC<HomeProps> = ({ experience }) => {
  console.log(experience);

  return (
    <>
      <NextSeo title='Home' />
      <main>
        <IndexHero />
        <IndexExperience experience={experience} />
      </main>
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  const { data: experience } = await fetch(
    `${process.env.API_URL}/experiences`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  )
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: {
      experience,
    },
  };
}
