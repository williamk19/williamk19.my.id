import { FC } from 'react';
import { Project } from '@/types/project.type';
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import IndexProjectCard from './IndexProjectCard';

type IndexProjectsProps = {
  projects: Project[];
};

const IndexProjects: FC<IndexProjectsProps> = ({ projects }) => {
  return (
    <>
      <Container
        maxW='container.md'
        px={0}
        py={['10', '10', '16']}>
        <Heading mb={'6'}>Projects</Heading>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={'8'}>
          {projects?.map((project) => (
            <GridItem key={project.id as number}>
              <IndexProjectCard {...project} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default IndexProjects;
