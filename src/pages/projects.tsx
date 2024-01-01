import ProjectsLayout from '@/components/pages/projects/ProjectsLayout';
import { loadProjects } from '@/lib/loadProjects';
import { Project } from '@/types/project.type';
import { NextSeo } from 'next-seo';

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <NextSeo title='Projects' />
      <main>
        <ProjectsLayout projects={projects} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { data: projects } = await loadProjects();

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}
