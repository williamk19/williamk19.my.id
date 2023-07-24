export async function loadBlogs() {
  const blogs = await fetch(
    `${process.env.API_URL}/blogs?&populate[0]=blogs_media`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );

  const data = await blogs.json();
  return data;
}

export async function loadBlogsBySlug(slug: string) {
  const blogs = await fetch(
    `${process.env.API_URL}/blogs?filters[slug][$eq]=${slug}&populate[0]=blogs_media`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );

  const data = await blogs.json();
  return data;
}
