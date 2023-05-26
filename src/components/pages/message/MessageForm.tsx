import { Text, Button, Input, Textarea, Box } from '@chakra-ui/react';

export default function MessageForm() {
  return (
    <>
      <Box>
        <label>
          <Text
            mb={1}
            fontSize={'small'}>
            Name
          </Text>
        </label>
        <Input
          borderColor={'gray.500'}
          type='email'
          shadow='sm'
          borderRadius={'md'}
          size='sm'
          placeholder='Johnny Doe'
        />
      </Box>
      <Box>
        <label>
          <Text
            mb={1}
            fontSize={'small'}>
            Email
          </Text>
        </label>
        <Input
          borderColor={'gray.500'}
          shadow='sm'
          size='sm'
          borderRadius={'md'}
          placeholder='johndoe@gmail.com'
        />
      </Box>
      <Box>
        <label>
          <Text
            mb={1}
            fontSize={'small'}>
            Message
          </Text>
        </label>
        <Textarea
          borderColor={'gray.500'}
          shadow='sm'
          placeholder='Hi william 👋, ...'
          size='sm'
          height={'32'}
          borderRadius={'md'}
          resize='none'
        />
      </Box>
      <Button
        shadow='lg'
        mt='4'
        size={'sm'}
        colorScheme='telegram'>
        Send Message
      </Button>
    </>
  );
}
