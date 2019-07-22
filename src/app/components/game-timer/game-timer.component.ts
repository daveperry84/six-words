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
  
  constructor(gameTimerService: GameTimerService) {
    this._gameTimerService = gameTimerService;
  }
  
  ngOnInit(): void {
    this._gameTimerService.getTime().subscribe((timer) => {
      this.gameTimer = timer;
    })
  }

  public startTimer(): void {
    this._gameTimerService.startTimer();
  }

}
