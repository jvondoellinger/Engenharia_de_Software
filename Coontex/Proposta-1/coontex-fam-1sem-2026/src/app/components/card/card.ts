import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input({ required: true })
  public title!: string;

  @Input({ required: true })
  public students!: number;

  /**
   * Média atual da turma
   * Ex: 7.6
   */
  @Input({ required: true })
  public currentAverage!: number;

  /**
   * Média anterior
   * Ex: 7.0
   */
  @Input({ required: true })
  public previousAverage!: number;

  @Input({ required: true })
  public evaluations!: number;

  @Input({ required: true })
  public alerts!: number;

  /*
   * PERFORMANCE %
   */
  protected get performance(): number {
    return Math.round((this.currentAverage / 10) * 100);
  }

  /*
   * EVOLUÇÃO %
   */
  protected get evolution(): number {
    return Math.round(((this.currentAverage - this.previousAverage) / this.previousAverage) * 100);
  }

  /*
   * STATUS
   */
  protected get status(): string {
    if (this.performance >= 75) return 'Bom';

    if (this.performance >= 60) return 'Regular';

    return 'Atenção';
  }

  /*
   * COR
   */
  protected get color(): string {
    if (this.performance >= 75) return '#1456ff';

    if (this.performance >= 60) return '#f59e0b';

    return '#e11d48';
  }
}
