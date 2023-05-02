import { Key } from 'react';

export type ExperienceAttr = {
  workplace: string;
  job_desc: string;
  location: string | null;
  date_start: Date;
  date_end: Date | null;
  type: string;
  description: string[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

export type Experience = {
  id: Key;
  attributes: ExperienceAttr;
};
