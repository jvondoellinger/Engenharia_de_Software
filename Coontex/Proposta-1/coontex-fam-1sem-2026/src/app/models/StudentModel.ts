import { UUID } from 'node:crypto';

export default interface StudentPerformance {
  id: UUID;
  course: string;
  name: string;
  attendance: number;
  currentAverage: number;
  previousAverage: number;
  evaluations: number;
  alerts: number;
  status: 'Excelente' | 'Bom' | 'Atenção' | 'Crítico';
}
