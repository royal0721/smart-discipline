import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBoardComponent } from './plan-board.component';

describe('NftComponent', () => {
  let component: PlanBoardComponent;
  let fixture: ComponentFixture<PlanBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanBoardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
