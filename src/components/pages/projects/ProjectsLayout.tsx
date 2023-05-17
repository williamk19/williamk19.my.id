import { Project } from '@/types/project.type';
import { Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import ProjectsCard from '../../core/projectsCard/ProjectsCard';

type ProjectsLayoutProps = {
  projects: Project[];
};

const ProjectsLayout = ({ projects }: ProjectsLayoutProps) => {
  return (
    <>
      <Container
        maxW='container.md'
        px={0}
        py={['10', '10', '16']}>
        <Heading mb={'2'}>Projects</Heading>
        <Text
          fontSize={'xl'}
          mb={'6'}>{`Projects i've made so far`}</Text>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={'8'}>
          {projects?.map((project) => (
            <GridItem key={project.id as number}>
              <ProjectsCard
                {...project}
                usingImage={true}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProjectsLayout;
