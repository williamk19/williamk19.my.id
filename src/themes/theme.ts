import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import '@fontsource/figtree';

const theme = extendTheme({
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
  config: {
    disableTransitionOnChange: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('white', 'gray.800')(props),
        color: mode('black', 'white')(props),
        fontFamily: 'Figtree',
      },
    }),
  },
});

export default theme;