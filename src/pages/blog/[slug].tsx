import BlogLayout from '@/components/pages/blogs/BlogLayout';
import { loadBlogs, loadBlogsBySlug } from '@/lib/loadBlogs';
import { Blog } from '@/types/blogs.type';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

type BlogPageProps = {
  blog: Blog;
};

type ParamsType = {
  slug: string;
};

export default function Page({ blog }: BlogPageProps) {
  return (
    <>
      <NextSeo
        title={blog.attributes.title}
        description={blog.attributes.blog_text.split(' ').slice(0, 20).join(' ')}
        canonical={`williamk19.com/blog/${blog.attributes.slug}`}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: blog.attributes.publishedAt.toString(),
            modifiedTime: blog.attributes.updatedAt.toString(),
            authors: ['https://williamk19.com'],
            tags: ['Tag A', 'Tag B', 'Tag C'],
          },
          url: `williamk19.com/blog/${blog.attributes.slug}`,
        }}
      />
      <BlogLayout blog={blog} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: blogs } = await loadBlogs();

  const paths = blogs.map((blog: Blog) => {
    return {
      params: { slug: blog.attributes.slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ParamsType;
  const { data: blog } = await loadBlogsBySlug(slug);

  return {
    props: {
      blog: blog[0],
    },
  };
};
