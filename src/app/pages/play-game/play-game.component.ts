import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RandomLetterService } from 'src/app/shared/services/random-letter.service';
import { GameTimerService } from 'src/app/shared/services/game-timer.service';
import { GameScoreService } from 'src/app/shared/services/game-score.service';
import { ICategoryField } from 'src/app/shared/types/category-field.interface';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {
    private _letterService: RandomLetterService;
    private _gameTimerService: GameTimerService;
    private _gameScoreService: GameScoreService;
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

    constructor(letterService: RandomLetterService, gameTimerService: GameTimerService, gameScoreService: GameScoreService) {
        this._letterService = letterService;
        this._gameTimerService = gameTimerService;
        this._gameScoreService = gameScoreService;
    }

    ngOnInit(): void {
      this._gameTimerService.gameStarted().subscribe((gameStarted) => {
        this.gameStarted = gameStarted;
        if(gameStarted) {
          this.randomLetter = this._letterService.getRandomLetter();
        }
      });

      this._gameTimerService.gameEnded().subscribe((gameEnded) => {
        this.gameEnded = gameEnded;
        this.validateAnswersAndCalculate();
      });

      this._gameScoreService.getTotalScore().subscribe((score) => this.totalScore = score);

      this._categories.forEach(category => {
        let field = {
          id: category.id,
          title: category.title,
          field: new FormControl(''),
          score: 10,
          valid: true
        }

        this.formControls = [...this.formControls, field];
      });
    }

    public validateAnswersAndCalculate(): void {
      this.formControls.forEach((control) => {
        const answer = control.field.value.trim().toLowerCase();        

        if(!(answer && answer.charAt(0) === this.randomLetter.toLowerCase())) {
          control.score = 0;
          control.valid = false;
        }
      })

      this.calculateScore();
    }

    public calculateScore(): void {
      this._gameScoreService.calculateTotalScore(this.formControls);
    }

}
