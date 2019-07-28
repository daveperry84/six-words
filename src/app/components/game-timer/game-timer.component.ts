import { Component, OnInit } from '@angular/core';
import { GameTimerService, IGameTimer } from 'src/app/services/game-timer.service';

@Component({
  selector: 'game-timer',
  templateUrl: './game-timer.component.html',
  styleUrls: ['./game-timer.component.scss']
})
export class GameTimerComponent implements OnInit {

  private _gameTimerService: GameTimerService;

  public gameTimer: IGameTimer;
  public gameStarted: boolean;
  public gameEnded: boolean;
  
  constructor(gameTimerService: GameTimerService) {
    this._gameTimerService = gameTimerService;
  }
  
  ngOnInit(): void {
    this._gameTimerService.getTime().subscribe((timer) => {
      this.gameTimer = timer;
    });

    this._gameTimerService.gameStarted().subscribe((gameStarted) => {
      this.gameStarted = gameStarted;
    });

    this._gameTimerService.gameEnded().subscribe((gameEnded) => {
      this.gameEnded = gameEnded;
    });
  }

  public startTimer(): void {
    this._gameTimerService.startTimer();
  }

}
