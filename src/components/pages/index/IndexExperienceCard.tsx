import { ExperienceAttr } from '@/types/experience.type';
import { Box, Flex, Show, Text, useColorMode } from '@chakra-ui/react';
import { FC, Key } from 'react';

type IndexExperienceCardProps = {
  id: Key;
  attributes: ExperienceAttr;
};

const IndexExperienceCard: FC<IndexExperienceCardProps> = (props) => {
  const { colorMode } = useColorMode();
  const { attributes } = props;

  const dateStart = new Date(attributes.date_start);
  const dateEnd = attributes.date_end
    ? new Date(attributes.date_end)
    : 'Present';
  
  const monthYearStart = `${dateStart.toLocaleString('default', {
    month: 'short',
  })}, ${dateStart.getFullYear()}`;
  const monthYearEnd =
    dateEnd === 'Present'
      ? `Present`
      : `${dateEnd.toLocaleString('default', {
          month: 'short',
        })}, ${dateEnd.getFullYear()}`;

  return (
    <>
      <Box
        border={`1px solid`}
        borderColor={`${colorMode === 'light' ? 'black' : 'cyan.400'}`}
        boxShadow='md'
        borderRadius={'lg'}
        w='100%'
        p={4}
        transition={'transform 0.4s ease-out'}
        sx={{
          ':hover': {
            transform: 'scale(1.025)',
          },
        }}>
        <Flex
          direction={['column', 'row']}
          mb='3'
          alignItems={['start', 'center']}
          justifyContent={'space-between'}>
          <Box>
            <Text
              fontSize='xl'
              fontWeight='bold'>
              {attributes.workplace}
            </Text>
            <Text>{attributes.job_desc}</Text>
          </Box>
          <Flex
            mt={['2', '0']}
            direction={['row', 'column']}
            gap={['1', '0']}
            fontWeight={['bold', 'bold', 'medium']}
            textAlign={['left', 'right']}
            fontSize={['xs', 'xs', 'sm']}>
            <Text>{`${monthYearStart} - ${monthYearEnd}`}</Text>
            {attributes.location && <Show below='sm'>|</Show>}
            <Text>{attributes?.location}</Text>
          </Flex>
        </Flex>
        {attributes.description?.map((desc: string, idx: number) => (
          <Text
            key={idx}
            fontSize='sm'>
            {`◦ ${desc}`}
          </Text>
        ))}
      </Box>
    </>
  );
};

export default IndexExperienceCard;
