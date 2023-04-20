import { NextSeo } from 'next-seo';
import IndexHero from '@/components/pages/index/IndexHero';
import IndexExperience from '@/components/pages/index/IndexExperience';
import { supabase } from '@/lib/supabaseClient';

export default function Home({ experience }: any) {
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

export async function getServerSideProps() {
  let { data: experience, error } = await supabase.from('experience').select(`
    *, experience_type (type_name), experience_description (description_text)`);

  return {
    props: {
      experience,
    },
  };
}
