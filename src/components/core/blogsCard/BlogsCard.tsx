import { Blog } from '@/types/blogs.type';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Image from 'next/image';

type BlogCardProps = {
  blog: Blog;
};

export default function BlogsCard({ blog }: BlogCardProps) {
  const { colorMode } = useColorMode();

  const getPreviewText = (text: string): string => {
    const firstParagraph = text.split(' ').slice(0, 20).join(' ') + ' ...';
    return firstParagraph;
  };

  const getPublishedDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <>
      <Card
        mb={2}
        bg={'transparent'}
        border={`3px solid`}
        borderColor={`${colorMode === 'light' ? 'black' : 'cyan.800'}`}
        borderRadius={'lg'}
        boxShadow='md'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'>
        <Box
          height={{ base: '28vw', sm: 'unset' }}
          width={{ base: '100%', sm: '100%' }}
          maxWidth={{base: 'unset', sm: '200px'}}
          position={'relative'}>
          <Image
            style={{
              objectFit: 'cover',
            }}
            fill
            src={`${process.env.NEXT_PUBLIC_FILE_URL}${blog.attributes.blogs_media.data[0].attributes.url}`}
            alt={`${blog.attributes.slug}-heading-image`}
          />
        </Box>
        <Stack>
          <CardBody>
            <Heading size='md'>{blog.attributes.title}</Heading>
            <Text py='1'>
              {getPublishedDate(blog.attributes.published_date)}
            </Text>
            <Text py='2'>{getPreviewText(blog.attributes.blog_text)}</Text>
          </CardBody>
          <CardFooter pt={0}>
            <Button
              as={NextLink}
              href={`blog/${blog.attributes.slug}`}
              variant='link'
              colorScheme='telegram'>
              Read More
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
