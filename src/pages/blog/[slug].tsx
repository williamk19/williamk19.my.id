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
        description={blog.attributes.blog_text
          .split(' ')
          .slice(0, 20)
          .join(' ')}
        canonical={`williamk19.com/blog/${blog.attributes.slug}`}
        openGraph={{
          title: blog.attributes.title,
          description: blog.attributes.blog_text
            .split(' ')
            .slice(0, 20)
            .join(' '),
          type: 'article',
          url: `williamk19.com/blog/${blog.attributes.slug}`,
          article: {
            publishedTime: blog.attributes.publishedAt.toString(),
            modifiedTime: blog.attributes.updatedAt.toString(),
            authors: ['https://williamk19.com'],
            tags: [...blog.attributes.tags],
          },
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_FILE_URL}${blog.attributes.blogs_media.data[0].attributes.url}`,
              width: 1200,
              height: 630,
              alt: `${blog.attributes.slug}-picture`,
            },
          ],
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
