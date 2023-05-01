import { Key } from 'react';

type ExperienceType = {
  type_name: string;
}

type ExperienceDescription = {
  description_text: string;
}

export type Experience = {
  id: Key;
  created_at: Date;
  workplace: string;
  job_desc: string;
  location: string;
  date_start: Date;
  type: number;
  date_end: Date;
  experience_type: ExperienceType;
  experience_description: ExperienceDescription[];
};
