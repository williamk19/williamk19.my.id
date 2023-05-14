import { Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function FooterLink() {
  return (
    <>
      <Flex direction='column'>
        <Link
          as={NextLink}
          href='/'>
          Blogs
        </Link>
        <Link
          as={NextLink}
          href='/projects'>
          Projects
        </Link>
        <Link
          as={NextLink}
          href='/'>
          Info
        </Link>
      </Flex>
      <Flex direction='column'>
        <Link
          target='_blank'
          as={NextLink}
          href='https://linkedin.com/in/williamk19'>
          <Text>Linkedin</Text>
        </Link>
        <Link
          target='_blank'
          as={NextLink}
          href='https://github.com/williamk19'>
          Github
        </Link>
        <Link
          target='_blank'
          as={NextLink}
          href='mailto:williamkurniawan@gmail.com?subject=Hello%20William%2C%20%F0%9F%91%8B!'>
          Email
        </Link>
      </Flex>
    </>
  );
}
