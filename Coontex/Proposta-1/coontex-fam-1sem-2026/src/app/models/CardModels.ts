import { UUID } from 'node:crypto';

export interface CardBase {
  id: UUID;
  title: string;
  students: number;
  currentAverage: number;
  previousAverage: number;
  evaluations: number;
  alerts: number;
}

export interface CourseCard extends CardBase {}
export interface ClassesCard extends CardBase {}
