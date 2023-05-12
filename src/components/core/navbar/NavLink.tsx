import { Flex, Hide, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function NavLink() {
  return (
    <>
      <Hide below='md'>
        <Link
          as={NextLink}
          fontSize='md'
          fontWeight='semibold'
          href='/'>
          Blogs
        </Link>
        <Link
          as={NextLink}
          fontSize='md'
          fontWeight='semibold'
          href='/projects'>
          Projects
        </Link>
        <Link
          as={NextLink}
          fontSize='md'
          fontWeight='semibold'
          href='/'>
          Info
        </Link>
      </Hide>
    </>
  );
}
