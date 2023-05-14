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
import { useRouter } from 'next/router';

export default function NavMenu() {
  const { pathname } = useRouter();

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
              <MenuItem
                background={pathname === `/blogs` ? `whiteAlpha.200` : ``}
                _hover={{
                  background: `whiteAlpha.200`,
                }}
                icon={<SlDocs />}>
                Blogs
              </MenuItem>
            </Link>
            <Link
              as={NextLink}
              href='/projects'>
              <MenuItem
                background={pathname === `/projects` ? `whiteAlpha.200` : ``}
                _hover={{
                  background: `whiteAlpha.200`,
                }}
                icon={<TfiBriefcase />}>
                Projects
              </MenuItem>
            </Link>
            <Link
              as={NextLink}
              href='/'>
              <MenuItem
                background={pathname === `/info` ? `whiteAlpha.200` : ``}
                _hover={{
                  background: `whiteAlpha.200`,
                }}
                icon={<BiInfoCircle />}>
                Info
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Show>
    </>
  );
}
