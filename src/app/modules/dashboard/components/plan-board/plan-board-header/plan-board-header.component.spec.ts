import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBoardHeaderComponent } from './plan-board-header.component';

describe('NftHeaderComponent', () => {
  let component: PlanBoardHeaderComponent;
  let fixture: ComponentFixture<PlanBoardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanBoardHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanBoardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
