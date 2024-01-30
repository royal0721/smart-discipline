import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PlanCard } from '../../../models/plan-card';

@Component({
  selector: 'app-plan-board-card',
  templateUrl: './plan-board-card.component.html',
  standalone: true,
  imports: [AngularSvgIconModule],
})
export class PlanBoardCardComponent implements OnInit, OnDestroy {
  @Input() cardData!: PlanCard;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
