import { Key } from 'react';

export type Thumbnail = {
  data: {
    id: Key;
    attributes: {
      url: string;
    };
  };
};

export type ProjectAttr = {
  createdAt: Date;
  description: string;
  github_link?: string;
  prod_link?: string;
  publishedAt: Date;
  tags: string[];
  thumbnail: Thumbnail;
  title: string;
  updatedAt: Date;
};

export type Project = {
  id: Key;
  attributes: ProjectAttr;
};
