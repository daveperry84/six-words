import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SetupGameService } from 'src/app/services/setup-game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    private _router: Router;
    private _setupGameService: SetupGameService;

    constructor(router:Router, setupGameService: SetupGameService) {
      this._router = router;
      this._setupGameService = setupGameService;
    }

    public setupNewGame = (): void => {
      this._router.navigate(['setup']);
    }

    public randomiseGame = (): void => {
      // Randomise game logic here.
      this._setupGameService.generateGameId().subscribe((gameId) => {        
        this._router.navigate(['play'], { queryParams: { gameId: gameId }});
      })
    }

    public scrollToRules = (): void => {
      const element = document.getElementById("firstRule").offsetTop;
      window.scrollTo({ top: element, behavior: 'smooth' });
    }
}
