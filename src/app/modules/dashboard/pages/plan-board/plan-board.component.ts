import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { PlanCard } from '../../models/plan-card';
import { PlanBoardHeaderComponent } from '../../components/plan-board/plan-board-header/plan-board-header.component';
import { PlanBoardCardComponent } from '../../components/plan-board/plan-board-card/plan-board-card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-plan-board',
  templateUrl: './plan-board.component.html',
  standalone: true,
  imports: [PlanBoardHeaderComponent, PlanBoardCardComponent, NgIf, NgFor, CdkDropList, CdkDrag],
})
export class PlanBoardComponent implements OnInit {
  planCards: Array<PlanCard>;

  constructor() {
    this.planCards = [
      {
        id: 123,
        title: 'Daily Check 1',
        tags: [],
        description: 'Test for plan 1',
        image: './assets/images/img-01.jpg',
      },
      {
        id: 124,
        title: 'Daily Check 2',
        tags: [],
        description: 'Test for plan 2',
        image: './assets/images/img-01.jpg',
      },
      {
        id: 125,
        title: 'Daily Check 3',
        tags: [],
        description: 'Test for plan 3',
        image: './assets/images/img-01.jpg',
      },
      {
        id: 126,
        title: 'Daily Check 4',
        tags: [],
        description: 'Test for plan 4',
        image: './assets/images/img-01.jpg',
      },
    ];
  }

  ngOnInit(): void {}

  drop(event: CdkDragDrop<PlanCard[]>) {
    moveItemInArray(this.planCards, event.previousIndex, event.currentIndex);
  }
}
