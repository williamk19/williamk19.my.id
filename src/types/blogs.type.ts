import { Key } from 'react';

export type BlogMedia = {
  data: {
    id: Key;
    attributes: {
      url: string;
    };
  }[];
};

export type BlogAttr = {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  published_date: Date;
  slug: string;
  tags: string[];
  blogs_media: BlogMedia;
  blog_text: string;
};

export type Blog = {
  id: Key;
  attributes: BlogAttr;
};
