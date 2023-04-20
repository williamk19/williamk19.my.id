import { Box, Flex, Show, Text, useColorMode } from '@chakra-ui/react';

export default function IndexExperienceCard(props: any) {
  const { colorMode } = useColorMode();

  const dateStart = new Date(props.date_start);
  const dateEnd = new Date(props.date_end);
  const monthYearStart = `${dateStart.toLocaleString('default', {
    month: 'short',
  })}, ${dateStart.getFullYear()}`;
  const monthYearEnd = `${dateEnd.toLocaleString('default', {
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
              {props.workplace}
            </Text>
            <Text>{props.job_desc}</Text>
          </Box>
          <Flex
            mt={['2', '0']}
            direction={['row', 'column']}
            gap={['1', '0']}
            fontWeight={['bold', 'bold', 'medium']}
            textAlign={['left', 'right']}
            fontSize={['xs', 'xs', 'sm']}>
            <Text>{`${monthYearStart} - ${monthYearEnd}`}</Text>
            {props.location && <Show below='sm'>|</Show>}
            <Text>{props?.location}</Text>
          </Flex>
        </Flex>
        {props.experience_description?.map((d: any, idx: number) => (
          <Text
            key={idx}
            fontSize='sm'>
            {`◦ ${d.description_text}`}
          </Text>
        ))}
      </Box>
    </>
  );
}
