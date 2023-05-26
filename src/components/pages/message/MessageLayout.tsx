import { Flex, Heading, Text } from '@chakra-ui/react';
import MessageForm from './MessageForm';

export default function MessageLayout() {
  return (
    <>
      <Flex
        direction='column'
        gap={'2'}
        paddingX={['1', '2', '16']}
        paddingY='16'>
        <Heading size={'lg'}>Message Me</Heading>
        <Text>Drop me some message</Text>
        <MessageForm />
      </Flex>
    </>
  );
}
