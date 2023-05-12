import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { TfiBriefcase } from 'react-icons/tfi';
import { SlDocs } from 'react-icons/sl';
import { BiInfoCircle } from 'react-icons/bi';
import NextLink from 'next/link';

export default function NavMenu() {
  return (
    <>
      <Show below='md'>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <Link
              as={NextLink}
              href='/'>
              <MenuItem icon={<SlDocs />}>Blogs</MenuItem>
            </Link>
            <Link
              as={NextLink}
              href='/projects'>
              <MenuItem icon={<TfiBriefcase />}>Projects</MenuItem>
            </Link>
            <Link
              as={NextLink}
              href='/'>
              <MenuItem icon={<BiInfoCircle />}>Info</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Show>
    </>
  );
}
