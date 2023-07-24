import BlogsLayout from '@/components/pages/blogs/BlogsLayout';
import { loadBlogs } from '@/lib/loadBlogs';
import { Blog } from '@/types/blogs.type';
import { NextSeo } from 'next-seo';

type BlogsProps = {
  blogs: Blog[];
}

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <>
      <NextSeo title='Blogs' />
      <BlogsLayout blogs={blogs} />
    </>
  );
}

export async function getStaticProps() {
  const { data: blogs } = await loadBlogs();

  return {
    props: {
      blogs,
    },
  };
}
