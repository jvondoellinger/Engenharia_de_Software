import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import StudentPerformance from '../../models/StudentModel';
import StudentsMock from '../../mocks/StudentsMock';

@Component({
  selector: 'app-students-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './students-dashboard.html',
  styleUrl: './students-dashboard.css',
})
export class StudentsDashboard implements OnInit {
  protected courseName: string = '';

  protected students!: StudentPerformance[];

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.courseName = this.route.snapshot.paramMap.get('course') ?? '';
    this.students = new StudentsMock().students.filter(x => x.course == this.courseName);
    console.log('ROTA:', this.courseName);
    console.log('Valores:', this.students.length);
  }

  protected getStatusClass(status: string): string {
    switch (status) {
      case 'Excelente':
        return 'status-excellent';

      case 'Bom':
        return 'status-good';

      case 'Atenção':
        return 'status-warning';

      default:
        return 'status-critical';
    }
  }
}
