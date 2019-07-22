import { Component, OnInit } from '@angular/core';
import { FormControl, Form } from '@angular/forms';
import { RandomLetterService } from 'src/app/services/random-letter.service';

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
    private _categories: Array<any> = [
        { id: 'boys', title: 'Boys Name' },
        { id: 'girls', title: 'Girls Name' },
        { id: 'movie', title: 'Movie' },
        { id: 'location', title: 'Location' },
        { id: 'animal', title: 'Animal' },
        { id: 'fruitveg', title: 'Fruit or Vegetable' },
    ];

    public formControls: Array<ICategoryField> = [];
    public randomLetter: string;

    constructor(letterService: RandomLetterService) {
        this._letterService = letterService;
    }

    ngOnInit() {
      this._categories.forEach(category => {
        let field = {
          id: category.id,
          title: category.title,
          field: new FormControl('')
        }

        this.formControls = [...this.formControls, field];
      });

      this.randomLetter = this._letterService.getRandomLetter();
    }

}
