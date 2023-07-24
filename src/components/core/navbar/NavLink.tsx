import { linkHoverStyles } from '@/styles/styles';
import { Hide, Link, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink() {
  const { pathname } = useRouter();
  const { colorMode } = useColorMode();

  return (
    <>
      <Hide below='md'>
        <Link
          as={NextLink}
          fontSize='md'
          fontWeight='semibold'
          href='/blog'
          sx={linkHoverStyles(pathname, '/blog', colorMode)}>
          Blogs
        </Link>
        <Link
          as={NextLink}
          fontSize='md'
          fontWeight='semibold'
          href='/projects'
          sx={linkHoverStyles(pathname, '/projects', colorMode)}>
          Projects
        </Link>
        <Link
          as={NextLink}
          fontSize='md'
          fontWeight='semibold'
          href='/message'
          sx={linkHoverStyles(pathname, '/message', colorMode)}>
          Message
        </Link>
      </Hide>
    </>
  );
}
