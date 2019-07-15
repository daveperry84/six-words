import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    private _router: Router;

    constructor(router:Router) {
      this._router = router;
    }

    public setupNewGame = (): void => {
        this._router.navigate(['setup']);
    }

    public randomiseGame = (): void => {
      // Randomise game logic here.
      this._router.navigate(['play']);
  }
}
