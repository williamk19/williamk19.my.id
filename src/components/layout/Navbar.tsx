import { Link, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import NavMenu from '../core/navbar/NavMenu';
import NavThemeToggle from '../core/navbar/NavThemeToggle';
import NavLink from '../core/navbar/NavLink';

export default function Navbar() {
  return (
    <>
      <Flex
        h={'16'}
        align='flex-end'
        justify='space-between'>
        <Flex
          h='20'
          align='flex-end'
          gap='10'>
          <Link
            as={NextLink}
            fontSize='2xl'
            href='/'
            fontWeight='bold'>
            williamk19
          </Link>
          <NavLink />
        </Flex>
        <Flex gap='2'>
          <NavThemeToggle />
          <NavMenu />
        </Flex>
      </Flex>
    </>
  );
}
