import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { GameTimerService } from 'src/app/services/game-timer.service';
import { GameScoreService } from 'src/app/services/game-score.service';
import { ICategoryField } from 'src/app/types/category-field.interface';
import { ICategory } from 'src/app/types/category.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SetupGameService } from 'src/app/services/setup-game.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {
    private _gameTimerService: GameTimerService;
    private _gameScoreService: GameScoreService;
    private _setupGameService: SetupGameService;
    private _route: ActivatedRoute;
    private _router: Router;
    private _randomLetter: string;

    public formControls: Array<ICategoryField> = [];
    public gameStarted: boolean = false;
    public gameEnded: boolean = false;
    public totalScore: number;
    public gameLetter: string = '?';

    constructor(gameTimerService: GameTimerService, 
      gameScoreService: GameScoreService,
      setupGameService: SetupGameService,
      activatedRoute: ActivatedRoute,
      router:Router) {
        this._gameTimerService = gameTimerService;
        this._gameScoreService = gameScoreService;
        this._setupGameService = setupGameService;
        this._route = activatedRoute;
        this._router = router;
    }

    ngOnInit(): void {
      this._route.queryParams.subscribe((params) => {
        const gameId = params['gameId'];

        this._setupGameService.getGameFromGameId(gameId).subscribe((game) => {
          this.generateFormControls(game.categories);
          this._randomLetter = game.letter;
        });
      });

      this._gameTimerService.gameStarted().subscribe((gameStarted) => {
        this.gameStarted = gameStarted;
        if(gameStarted) {
          this.gameLetter = this._randomLetter;
        }
      });

      this._gameTimerService.gameEnded().subscribe((gameEnded) => {
        this.gameEnded = gameEnded;
        if(gameEnded) {
          this.validateAnswersAndCalculate();
        }
      });

      this._gameScoreService.getTotalScore().subscribe((score) => this.totalScore = score);
    }

    public validateAnswersAndCalculate(): void {
      this.formControls.forEach((control) => {
        const answer = control.field.value.trim().toLowerCase();

        if(!(answer && answer.charAt(0) === this._randomLetter.toLowerCase())) {
          control.score = 0;
          control.valid = false;
        }
      })

      this.calculateScore();
    }

    public calculateScore(): void {
      this._gameScoreService.calculateTotalScore(this.formControls);
    }

    public randomiseNewGame(): void {
      this._setupGameService.generateGameId().subscribe((gameId) => {
        this.gameLetter = '?';
        this._router.navigate(['play'], { queryParams: { gameId: gameId }});
      })
    }

    public setupNewGame(): void {
      this._router.navigate(['setup']);
    }

    private generateFormControls(categories: Array<ICategory>): void {
      this.formControls = [];

      categories.forEach(category => {
        let field = {
          id: category.id,
          title: category.title,
          field: new UntypedFormControl(''),
          score: 10,
          valid: true
        }

        this.formControls = [...this.formControls, field];
      });
    }
}
