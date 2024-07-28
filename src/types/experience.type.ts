import { RecordModel } from 'pocketbase';

export type Experience = RecordModel & {
  workplace: string;
  position: string;
  location?: string | null;
  started_date: Date;
  ended_date?: Date | null;
  type: string;
  description: string[];
};
