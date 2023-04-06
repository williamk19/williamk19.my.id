import { Box, Flex, Show, Text, useColorMode } from '@chakra-ui/react';

export default function IndexExperienceCard(props: any) {
  const { colorMode } = useColorMode();

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
              {props.companyName}
            </Text>
            <Text>{props.jobDesc}</Text>
          </Box>
          <Flex
            mt={['2', '0']}
            direction={['row', 'column']}
            gap={['1', '0']}
            textAlign={['left', 'right']}
            fontSize='sm'>
            <Text>{props.rangeTime}</Text>
            <Show below='sm'>|</Show>
            <Text>{props?.location}</Text>
          </Flex>
        </Flex>
        {props.description?.map((d: string, idx: number) => (
          <Text
            key={idx}
            fontSize='sm'>
            {`◦ ${d}`}
          </Text>
        ))}
      </Box>
    </>
  );
}
