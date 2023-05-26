import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { TfiBriefcase } from 'react-icons/tfi';
import { SlDocs } from 'react-icons/sl';
import { BiMessageDetail } from 'react-icons/bi';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { linkMenuStyles } from '@/styles/styles';

export default function NavMenu() {
  const { pathname } = useRouter();
  const { colorMode } = useColorMode();

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
              _hover={{ textDecoration: 'none' }}
              as={NextLink}
              href='/'>
              <MenuItem
                sx={linkMenuStyles(pathname, '/blogs', colorMode)}
                icon={<SlDocs />}>
                Blogs
              </MenuItem>
            </Link>
            <Link
              _hover={{ textDecoration: 'none' }}
              as={NextLink}
              href='/projects'>
              <MenuItem
                sx={linkMenuStyles(pathname, '/projects', colorMode)}
                icon={<TfiBriefcase />}>
                Projects
              </MenuItem>
            </Link>
            <Link
              _hover={{ textDecoration: 'none' }}
              as={NextLink}
              href='/message'>
              <MenuItem
                sx={linkMenuStyles(pathname, '/message', colorMode)}
                icon={<BiMessageDetail />}>
                Message
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Show>
    </>
  );
}
