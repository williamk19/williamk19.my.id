import { ProjectAttr } from '@/types/project.type';
import { Box, Flex, Link, Text, useColorMode } from '@chakra-ui/react';
// import { Image } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import { RiGithubFill } from 'react-icons/ri';
import { ImLink } from 'react-icons/im';
import { Key } from 'readline';

type IndexProjectCardProps = {
  id: Key;
  attributes: ProjectAttr;
};

const IndexProjectCard: FC<IndexProjectCardProps> = ({ attributes }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        border={`2px solid`}
        borderColor={`${colorMode === 'light' ? 'black' : 'cyan.400'}`}
        borderRadius={'lg'}
        boxShadow='md'
        overflow={'hidden'}
        transition={'transform 0.4s ease-out'}
        sx={{
          ':hover': {
            transform: 'scale(1.045)',
          },
        }}>
        <Image
          src={`${process.env.NEXT_PUBLIC_FILE_URL}${attributes.thumbnail.data.attributes.url}`}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
          alt={`${attributes.title.toLowerCase()}-thumb`}
        />
        <Box
          px={4}
          py={5}>
          <Text
            fontSize='xl'
            fontWeight='bold'
            mb={2}>
            {attributes.title}
          </Text>
          <Text
            fontSize='md'
            fontWeight='medium'
            mb={3}>
            {attributes.description}
          </Text>
          <Flex
            gap={3}
            mb={3}>
            {attributes.tags.map((tag, idx) => (
              <Text
                key={idx}
                fontSize='sm'
                fontWeight='medium'>
                {`#${tag}`}
              </Text>
            ))}
          </Flex>
          <Flex gap={3}>
            {attributes.github_link && (
              <Link
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                href={attributes.github_link}
                target='_blank'>
                <RiGithubFill size={'24px'} />
              </Link>
            )}
            {attributes.prod_link && (
              <Link
                height={'24px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                href={attributes.prod_link}
                target='_blank'>
                <ImLink size={'18px'} />
              </Link>
            )}
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default IndexProjectCard;
