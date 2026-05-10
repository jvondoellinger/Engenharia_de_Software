import { Routes } from '@angular/router';
import { RenderMode } from '@angular/ssr';
import { CardGridDashboard } from './pages/cards-grid-dashboard/card-grid-dashboard';
import { StudentsDashboard } from './pages/students-dashboard/students-dashboard';

export const routes: Routes = [
  {
    path: '',
    component: CardGridDashboard,
  },
  {
    path: 'students/:course',
    component: StudentsDashboard,
  },
];
