import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGridDashboard } from './card-grid-dashboard';

describe('CardGridDashboard', () => {
  let component: CardGridDashboard;
  let fixture: ComponentFixture<CardGridDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGridDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(CardGridDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
