import { Component, Input, OnInit } from '@angular/core';
import { GameTimerService } from 'src/app/shared/services/game-timer.service';

@Component({
  selector: 'play-game-fixed-footer',
  templateUrl: './play-game-fixed-footer.component.html',
  styleUrls: ['./play-game-fixed-footer.component.scss']
})
export class PlayGameFixedFooterComponent implements OnInit {
  
  @Input() public letter: string;
  @Input() public totalScore: number;

  private _gameTimerService: GameTimerService;

  public gameEnded: boolean;

  constructor(gameTimerService: GameTimerService) {
    this._gameTimerService = gameTimerService;
  }
  
  ngOnInit(): void {
    this._gameTimerService.gameEnded().subscribe((gameEnded) => {
      this.gameEnded = gameEnded;
    });
  }
}
