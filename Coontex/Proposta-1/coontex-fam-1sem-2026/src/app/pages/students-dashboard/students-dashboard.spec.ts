import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDashboard } from './students-dashboard';

describe('StudentsDashboard', () => {
  let component: StudentsDashboard;
  let fixture: ComponentFixture<StudentsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
