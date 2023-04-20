import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import IndexExperienceCard from './IndexExperienceCard';

export default function IndexExperience({ experience }: any) {
  const workExperience = experience.filter((exp: any) => exp.type === 1);
  const orgExperience = experience.filter((exp: any) => exp.type === 2);

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
}
