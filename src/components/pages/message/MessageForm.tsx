import { Text, Button, Input, Textarea, Box, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function MessageForm() {
  const [message, setMessage] = useState('');
  const [mailtoLink, setMailtoLink] = useState(
    'mailto:williamkurniawan1144@gmail.com',
  );

  useEffect(() => {
    if (message.length > 0) {
      const newLink = `mailto:williamkurniawan1144@gmail.com?body=${message}`;
      setMailtoLink(newLink);
    }
  }, [message]);

  return (
    <>
      <Box>
        <label>
          <Text
            mb={1}
            fontSize={'small'}>
            Message
          </Text>
        </label>
        <Textarea
          onChange={(e) => setMessage(e.target.value)}
          borderColor={'gray.500'}
          shadow='sm'
          placeholder='Hi william 👋, ...'
          size='sm'
          height={'32'}
          borderRadius={'md'}
          resize='none'
        />
      </Box>
      <Link
        href={mailtoLink}
        target='_blank'>
        <Button
          shadow='lg'
          mt='4'
          size={'sm'}
          colorScheme='telegram'>
          Send Message
        </Button>
      </Link>
    </>
  );
}
