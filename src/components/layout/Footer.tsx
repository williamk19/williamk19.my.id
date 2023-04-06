import {
  Box,
  Flex,
  Text,
  Link,
  useColorMode,
  useBreakpoint,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import FooterLink from './FooterLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { colorMode } = useColorMode();
  const breakpoint = useBreakpoint({ ssr: true });

  return (
    <>
      <Box
        h='1'
        background={`${
          colorMode === 'light'
            ? 'gray.600'
            : 'linear-gradient(270deg, #14dddf, #a365dd)'
        }`}
        animation={`line-anim 3s ease infinite alternate`}
        backgroundSize={'400% 400%'}
        sx={{
          '@keyframes line-anim': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '50% 50%' },
            '100%': { backgroundPosition: '100% 50%' },
          },
        }}
      />
      <Flex
        pt='12'
        pb={['12', '24', '24']}
        px='5'
        width='full'>
        <Flex
          direction={['column-reverse', 'row']}
          justifyContent='space-between'
          rowGap='10'
          w='full'>
          <Box
            textAlign={['center', 'left']}
            w={['full', '3xs', 'lg']}
            fontSize='sm'
            fontWeight='semibold'>
            <Text>Made with Next.js & Chakra UI.</Text>
            <Text>MIT License © {currentYear}</Text>
          </Box>
          {breakpoint === 'base' && (
            <Flex
              w='full'
              textAlign={'left'}
              gap='20'>
              <FooterLink />
            </Flex>
          )}
          {breakpoint !== 'base' && <FooterLink />}
        </Flex>
      </Flex>
    </>
  );
}
