import { RecordModel } from 'pocketbase';

export type Project = RecordModel & {
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  github_link?: string;
  url_link?: string;
  blog_file: string[];
};
