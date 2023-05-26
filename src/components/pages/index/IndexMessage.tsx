import { Flex, Heading, Text, Center } from '@chakra-ui/react';
import MessageForm from '../message/MessageForm';

export default function IndexMessage() {
  return (
    <>
      <Flex
        direction='column'
        gap={'2'}
        paddingX={['1', '2', '16']}
        paddingY={['10', '10', '16']}>
        <Center>
          <Flex
            alignItems='center'
            direction='column'
            mb='4'>
            <Heading size={'lg'}>Message Me</Heading>
            <Text>Drop me some message</Text>
          </Flex>
        </Center>
        <MessageForm />
      </Flex>
    </>
  );
}
