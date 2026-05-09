import { Component } from '@angular/core';
import { Card } from '../card/card';

interface CourseCard {
  title: string;
  students: number;
  currentAverage: number;
  previousAverage: number;
  evaluations: number;
  alerts: number;
}

@Component({
  selector: 'app-cards-grid-dashboard',
  imports: [Card],
  templateUrl: './card-grid-dashboard.html',
  styleUrl: './card-grid-dashboard.css',
})
export class CardGridDashboard {
  protected cards: CourseCard[] = [
    {
      title: 'Engenharia de Software',
      students: 148,
      currentAverage: 8.9,
      previousAverage: 8.1,
      evaluations: 32,
      alerts: 2,
    },

    {
      title: 'Ciência da Computação',
      students: 212,
      currentAverage: 9.1,
      previousAverage: 8.7,
      evaluations: 41,
      alerts: 1,
    },

    {
      title: 'Engenharia de IA',
      students: 97,
      currentAverage: 7.4,
      previousAverage: 7.1,
      evaluations: 19,
      alerts: 6,
    },

    {
      title: 'Cyber Security',
      students: 84,
      currentAverage: 8.1,
      previousAverage: 7.5,
      evaluations: 26,
      alerts: 4,
    },

    {
      title: 'Arquitetura de Sistemas',
      students: 61,
      currentAverage: 6.8,
      previousAverage: 6.4,
      evaluations: 15,
      alerts: 8,
    },

    {
      title: 'Computação em Nuvem',
      students: 126,
      currentAverage: 8.5,
      previousAverage: 8.0,
      evaluations: 24,
      alerts: 3,
    },
  ];
}
