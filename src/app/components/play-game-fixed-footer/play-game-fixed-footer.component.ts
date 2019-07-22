import { Component, Input } from '@angular/core';

@Component({
  selector: 'play-game-fixed-footer',
  templateUrl: './play-game-fixed-footer.component.html',
  styleUrls: ['./play-game-fixed-footer.component.scss']
})
export class PlayGameFixedFooterComponent {

  @Input() public letter: string;

}
