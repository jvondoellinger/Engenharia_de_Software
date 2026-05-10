import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-filters',
  imports: [FormsModule],
  templateUrl: './card-filters.html',
  styleUrl: './card-filters.css',
})
export class CardFilters {
  protected year = '2026';
  protected school = 'Todas';
  protected stage = 'Todas';
  protected teacher = 'Todos';
  protected status = 'Todas';

  @Input({ required: true })
  public schools: string[] = [];
  @Input({ required: true })
  public teachers: string[] = [];
  @Input({ required: true })
  public teachingStage: string[] = [];
  @Input({ required: true })
  public schoolYears: string[] = [];

  protected clearFilters(): void {
    this.year = '2026';
    this.school = 'Todas';
    this.stage = 'Todas';
    this.teacher = 'Todos';
    this.status = 'Todas';
  }

  protected applyFilters(): void {
    console.log({
      year: this.year,
      school: this.school,
      stage: this.stage,
      teacher: this.teacher,
      status: this.status,
    });
  }
}
