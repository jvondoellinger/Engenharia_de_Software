import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardBase } from '../../models/CardModels';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input({ required: true })
  public card!: CardBase;
  /*@Input({ required: true })
  public title!: string;

  @Input({ required: true })
  public students!: number;

  /!**
   * Média atual da turma
   * Ex: 7.6
   *!/
  @Input({ required: true })
  public currentAverage!: number;

  /!**
   * Média anterior
   * Ex: 7.0
   *!/
  @Input({ required: true })
  public previousAverage!: number;

  @Input({ required: true })
  public evaluations!: number;

  @Input({ required: true })
  public alerts!: number;*/

  @Output()
  public detailsClicked = new EventEmitter<void>();

  protected onDetailsClick(): void {
    this.detailsClicked.emit();
  }

  protected get performance(): number {
    return Math.round((this.card.currentAverage / 10) * 100);
  }

  protected get evolution(): number {
    return Math.round(((this.card.currentAverage - this.card.previousAverage) / this.card.previousAverage) * 100);
  }

  protected get status(): string {
    if (this.performance >= 75) return 'Bom';

    if (this.performance >= 60) return 'Regular';

    return 'Atenção';
  }

  protected get color(): string {
    if (this.performance >= 75) return '#1456ff';

    if (this.performance >= 60) return '#f59e0b';

    return '#e11d48';
  }
}
