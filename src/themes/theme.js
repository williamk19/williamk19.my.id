import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
  config: {
    initialColorMode: 'system',
    disableTransitionOnChange: false,
  }
});

export default theme;