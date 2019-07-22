import { Component, Input, OnInit } from '@angular/core';
import { GameTimerService, IGameTimer } from 'src/app/services/game-timer.service';

@Component({
  selector: 'play-game-fixed-footer',
  templateUrl: './play-game-fixed-footer.component.html',
  styleUrls: ['./play-game-fixed-footer.component.scss']
})
export class PlayGameFixedFooterComponent {
  
  @Input() public letter: string;

}
