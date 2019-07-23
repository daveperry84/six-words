import { Component, OnInit } from '@angular/core';
import { FormControl, Form } from '@angular/forms';
import { RandomLetterService } from 'src/app/services/random-letter.service';
import { GameTimerService } from 'src/app/services/game-timer.service';

interface ICategoryField {
  id: string;
  title: string;
  field: FormControl;
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

    constructor(letterService: RandomLetterService, gameTimerService: GameTimerService) {
        this._letterService = letterService;
        this._gameTimerService = gameTimerService;
    }

    ngOnInit() {
      this._gameTimerService.gameStarted().subscribe((gameStarted) => {
        if(gameStarted) {
          this.randomLetter = this._letterService.getRandomLetter();
        }
      });

      this._categories.forEach(category => {
        let field = {
          id: category.id,
          title: category.title,
          field: new FormControl('')
        }

        this.formControls = [...this.formControls, field];
      });
    }

}
