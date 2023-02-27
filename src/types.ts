import {z} from 'zod';
import { TaskStatus } from './API';

export type CreateTaskField = {
  title: string;
  date: Date;
  time: Date;
  sessions: number;
  longBreak: number;
  shortBreak: number;
};

export type UpdateTaskField = {
  id: string;
  startAt?: Date;
  breakAt?: Date;
  remainingSessions?: number;
  remainingSeconds?: number;
  status?: TaskStatus
};

export const CreateTaskFieldSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  date: z.date({
    required_error: 'Date is required',
  }),
  time: z.date({
    required_error: 'Time is required',
  }),
  sessions: z.number(),
  longBreak: z.number(),
  shortBreak: z.number(),
});
