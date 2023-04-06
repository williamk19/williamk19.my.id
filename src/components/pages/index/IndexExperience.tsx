import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import IndexExperienceCard from './IndexExperienceCard';

export default function IndexExperience() {
  const WORK_EXPERIENCE: Array<any> = [
    {
      companyName: 'IT Telkom Surabaya',
      jobDesc: 'Reasearch Assistant',
      description: [
        `Develop management system for students internship at IT Telkom Surabaya using codeigniter 4 framework.`,
        `Develop and implement AI software to maintain physical distancing among Dalegan Beach visitors using Python, Yolo, NVIDIA Jetson Nano.`,
      ],
      location: 'Surabaya, On Site',
      rangeTime: 'Jun 2021 - Oct 2022',
    },
    {
      companyName: 'PasarPolis',
      jobDesc: 'Software Engineer Intern (Frontend)',
      description: [
        `Develop and manage reusable components throughout the frontend web application.`,
        `Learn Next.js and other libraries to support web application development and performance.`,
        `Work on several bug fixes to improve user experience.`,
      ],
      location: 'South Jakarta, Remote',
      rangeTime: 'May 2022 - Aug 2022',
    },
  ];

  const ORG_EXPERIENCE: Array<Object> = [
    {
      companyName: 'CODER IT Telkom Surabaya',
      jobDesc: 'Member | Division Coordinator',
      description: [
        `Coordinator of Competitive Programming Division.`,
        `Participate in other organization initiative with internal software development competition.`,
      ],
      rangeTime: '2020 - 2023',
    },
  ];

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
          {WORK_EXPERIENCE.map((w, idx) => (
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
          {ORG_EXPERIENCE.map((w, idx) => (
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
