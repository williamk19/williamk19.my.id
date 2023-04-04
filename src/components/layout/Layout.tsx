// import Footer from './footer';
import { Container, Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Box transition='0.5s ease-out'>
      <Container
        maxW='container.lg'
        // border='1px solid #000'
      >
        <Navbar />
        <main>{children}</main>
      </Container>
    </Box>
  );
}
