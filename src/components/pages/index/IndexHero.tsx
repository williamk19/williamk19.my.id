import { ChatIcon, DownloadIcon, SunIcon } from '@chakra-ui/icons';
import { RiCommunityFill } from 'react-icons/ri';
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function IndexHero() {
  return (
    <>
      <Container
        maxW='container.md'
        px={0}
        pt={['14', '14', '32']}
        pb={['10', '10', '16']}>
        <Flex
          gap='10'
          direction={['column-reverse', 'column-reverse', 'row']}>
          <Flex direction={'column'}>
            <Heading
              fontWeight='black'
              letterSpacing='wide'>
              William Kurniawan
            </Heading>
            <Text
              letterSpacing='wider'
              fontSize={'xl'}
              fontWeight={'semibold'}>
              Software Engineer 💻 | Frontend
            </Text>
            <Text
              mt={'3'}
              fontSize={['sm', 'sm', 'md']}>
              Fresh graduated software engineering student at Institut Teknologi
              Telkom Surabaya. Focusing on Web Development Technologies.
              Currently study about Frontend Engineering with React.js and
              Next.js. Want to learned more about other frontend technologies in
              the future and collaborating on open source projects.
            </Text>
            <Button
              width={'32'}
              mt={'5'}
              colorScheme='telegram'>
              <Link href={`/assets/william-resume.pdf`}>
                Resume
                <DownloadIcon ml={'2'} />
              </Link>
            </Button>
          </Flex>
          <Flex pr='5'>
            <Avatar
              boxShadow='2xl'
              size='2xl'
              src='/images/profile-pic.png '>
              <Tooltip
                label='Hello 👋!'
                aria-label='A tooltip'
                placement='left-end'>
                <AvatarBadge
                  boxSize='0.7em'
                  border={'2px solid #fff'}
                  bg='gray.700'>
                  <ChatIcon w={'1rem'} />
                </AvatarBadge>
              </Tooltip>
            </Avatar>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
