import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { ReactNode } from 'react';
import theme from '../../themes/theme';

type ChakraProps = {
  cookies: any,
  children: ReactNode
}

export function Chakra({ cookies, children }: ChakraProps) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
}
