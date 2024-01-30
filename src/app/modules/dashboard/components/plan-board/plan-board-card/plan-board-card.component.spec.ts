import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBoardCardComponent } from './plan-board-card.component';

describe('PlanBoardCardComponent', () => {
  let component: PlanBoardCardComponent;
  let fixture: ComponentFixture<PlanBoardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanBoardCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanBoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
