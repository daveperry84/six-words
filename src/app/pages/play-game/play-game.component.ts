import { Component, OnInit } from '@angular/core';
import { FormControl, Form } from '@angular/forms';
import { RandomLetterService } from 'src/app/services/random-letter.service';
import { GameTimerService } from 'src/app/services/game-timer.service';

export interface ICategoryField {
  id: string;
  title: string;
  field: FormControl;
  score: number;
}

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {
    private _letterService: RandomLetterService;
    private _gameTimerService: GameTimerService;
    private _categories: Array<any> = [
        { id: 'boys', title: 'Boys Name' },
        { id: 'girls', title: 'Girls Name' },
        { id: 'movie', title: 'Movie' },
        { id: 'location', title: 'Location' },
        { id: 'animal', title: 'Animal' },
        { id: 'fruitveg', title: 'Fruit or Vegetable' },
    ];

    public formControls: Array<ICategoryField> = [];
    public randomLetter: string = '?';
    public gameStarted: boolean = false;
    public gameEnded: boolean = false;
    public totalScore: number;

    constructor(letterService: RandomLetterService, gameTimerService: GameTimerService) {
        this._letterService = letterService;
        this._gameTimerService = gameTimerService;
    }

    ngOnInit() {
      this._gameTimerService.gameStarted().subscribe((gameStarted) => {
        this.gameStarted = gameStarted;
        if(gameStarted) {
          this.randomLetter = this._letterService.getRandomLetter();
        }
      });

      this._gameTimerService.gameEnded().subscribe((gameEnded) => {
        this.gameEnded = gameEnded;
        this.calculateScore();
      });

      this._categories.forEach(category => {
        let field = {
          id: category.id,
          title: category.title,
          field: new FormControl(''),
          score: 10
        }

        this.formControls = [...this.formControls, field];
      });
    }

    public calculateScore(): void {
      let score = 0;

      this.formControls.forEach((control) => {
        score += control.score;
      })

      this.totalScore = score;
    }

}
