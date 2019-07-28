import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RandomLetterService } from "./services/random-letter.service";
import { GameTimerService } from "./services/game-timer.service";
import { GameScoreService } from "./services/game-score.service";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    RandomLetterService,
    GameTimerService,
    GameScoreService
  ],
  exports: [
      HeaderComponent
  ]
})
export class SharedModule { }
