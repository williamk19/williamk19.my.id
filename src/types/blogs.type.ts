import { RecordModel } from 'pocketbase';

export type Blog = RecordModel & {
  title: string;
  slug: string;
  tags: string[];
  published: Date;
  blog_text: string;
  blog_file: string[];
};
