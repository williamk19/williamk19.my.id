import { Flex, Hide, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function NavLink() {
  return (
    <>
      <Hide below='sm'>
        <Link
          as={NextLink}
          fontSize='lg'
          fontWeight='semibold'
          href='/'>
          Blogs
        </Link>
        <Link
          as={NextLink}
          fontSize='lg'
          fontWeight='semibold'
          href='/'>
          Projects
        </Link>
        <Link
          as={NextLink}
          fontSize='lg'
          fontWeight='semibold'
          href='/'>
          Info
        </Link>
      </Hide>
    </>
  );
}
