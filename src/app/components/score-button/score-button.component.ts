import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategoryField } from 'src/app/shared/types/category-field.interface';

@Component({
  selector: 'score-button',
  templateUrl: './score-button.component.html',
  styleUrls: ['./score-button.component.scss']
})
export class ScoreButtonComponent {

  @Input() public control: ICategoryField;

  @Output() public calculateScore: EventEmitter<void> = new EventEmitter<void>();

  public setScoreForField(control: ICategoryField): void {
    switch(control.score) {
      case 10:
        control.score = 5;
        break;
      case 5:
        control.score = 2;
        break;
      case 2:
        control.score = 1;
        break;
      case 1:
        control.score = 0;
        break;
      case 0:
        control.score = 10;
        break;
      default:
        control.score = 10;
    }

    this.calculateScore.emit();
  }

}
