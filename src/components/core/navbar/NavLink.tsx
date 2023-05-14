import { Hide, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink() {
  const { pathname } = useRouter();

  return (
    <>
      <Hide below='md'>
        <Link
          as={NextLink}
          fontSize='md'
          borderBottom={pathname === `/blogs` ? `2px solid` : `none`}
          fontWeight='semibold'
          href='/'
          sx={{
            '&:hover': {
              textDecoration: 'none',
              borderBottom: '2px solid',
            },
          }}>
          Blogs
        </Link>
        <Link
          as={NextLink}
          m='6'
          fontSize='md'
          borderBottom={pathname === `/projects` ? `2px solid` : `none`}
          fontWeight='semibold'
          href='/projects'
          sx={{
            '&:hover': {
              textDecoration: 'none',
              borderBottom: '2px solid',
            },
          }}>
          Projects
        </Link>
        <Link
          as={NextLink}
          fontSize='md'
          borderBottom={pathname === `/info` ? `2px solid` : `none`}
          fontWeight='semibold'
          href='/'
          sx={{
            '&:hover': {
              textDecoration: 'none',
              borderBottom: '2px solid',
            },
          }}>
          Info
        </Link>
      </Hide>
    </>
  );
}
