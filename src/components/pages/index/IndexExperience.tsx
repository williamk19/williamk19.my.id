import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import IndexExperienceCard from './IndexExperienceCard';
import { Experience } from '@/types/experience.type';
import { FC } from 'react';

type IndexExperienceProps = {
  experience: Experience[];
};

const IndexExperience: FC<IndexExperienceProps> = ({ experience }) => {
  const compareDate = (a: Experience, b: Experience) => {
    if (a.attributes.date_end && b.attributes.date_end) {
      if (a.attributes.date_end > b.attributes.date_end) {
        return 1;
      } else {
        return -1;
      }
    } else if (!a.attributes.date_end || !b.attributes.date_end) {
      if (a.attributes.date_start < b.attributes.date_start) {
        return 1;
      } else {
        return -1;
      }
    }

    return 0;
  };

  const workExperience = experience
    .filter((exp: any) => exp.attributes.type === 'work')
    .sort(compareDate);

  const orgExperience = experience
    .filter((exp: any) => exp.attributes.type === 'organization')
    .sort(compareDate);

  return (
    <>
      <Container
        maxW='container.md'
        px={0}
        py={['10', '10', '16']}>
        <Heading mb={'6'}>Experience</Heading>
        <Text
          fontSize='xl'
          fontWeight='semibold'
          mb={'3'}>
          Working Experience
        </Text>
        <Flex
          direction='column'
          px={[0, 0, 2]}
          gap='5'>
          {workExperience.map((w: any, idx: number) => (
            <IndexExperienceCard
              key={idx}
              {...w}
            />
          ))}
        </Flex>
        <Text
          fontSize='xl'
          fontWeight='semibold'
          mt={'6'}
          mb={'3'}>
          Organizational
        </Text>
        <Flex
          direction='column'
          px={[0, 0, 2]}
          gap='5'>
          {orgExperience.map((w: any, idx: number) => (
            <IndexExperienceCard
              key={idx}
              {...w}
            />
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default IndexExperience;
