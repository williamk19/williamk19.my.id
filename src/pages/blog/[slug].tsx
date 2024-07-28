import BlogLayout from '@/components/pages/blogs/BlogLayout';
import pb from '@/lib/pocketbase';
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
        title={blog.title}
        description={blog.blog_text.split(' ').slice(0, 20).join(' ')}
        canonical={`williamk19.com/blog/${blog.slug}`}
        openGraph={{
          title: blog.title,
          description: blog.blog_text.split(' ').slice(0, 20).join(' '),
          type: 'article',
          url: `williamk19.com/blog/${blog.slug}`,
          article: {
            publishedTime: blog.published.toString(),
            modifiedTime: blog.updated.toString(),
            authors: ['https://williamk19.com'],
            tags: [...blog.tags],
          },
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_API_URL}/api/files/${blog.collectionId}/${blog.id}/${blog.blog_file[0]}`,
              width: 1200,
              height: 630,
              alt: `${blog.slug}-picture`,
            },
          ],
        }}
      />
      <BlogLayout blog={blog} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await pb.collection<Blog>('blogs').getFullList({
    sort: '-created',
  });

  const paths = blogs.map((blog: Blog) => {
    return {
      params: { slug: blog.slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ParamsType;
  const blog = await pb
    .collection<Blog>('blogs')
    .getFirstListItem(`slug="${slug}"`);

  return {
    props: {
      blog: blog,
    },
    revalidate: 600,
  };
};
