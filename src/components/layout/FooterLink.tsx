import { Avatar, Flex, Link, Text } from '@chakra-ui/react';
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
          href='/'>
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
          as={NextLink}
          href='https://linkedin.com/in/williamk19'>
          <Text>Linkedin</Text>
        </Link>
        <Link
          as={NextLink}
          href='https://github.com/williamk19'>
          Github
        </Link>
        <Link
          as={NextLink}
          href='mailto://williamkurniawan1144@gmail.com'>
          Email
        </Link>
      </Flex>
    </>
  );
}
