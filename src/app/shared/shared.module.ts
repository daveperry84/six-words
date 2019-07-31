import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RandomLetterService } from "./services/random-letter.service";
import { GameTimerService } from "./services/game-timer.service";
import { GameScoreService } from "./services/game-score.service";
import { HeaderComponent } from "./components/header/header.component";
import { GameCategoriesService } from "./services/game-categories.service";
import { SetupGameService } from "./services/setup-game.service";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    RandomLetterService,
    GameTimerService,
    GameScoreService,
    GameCategoriesService,
    SetupGameService
  ],
  exports: [
      HeaderComponent
  ]
})
export class SharedModule { }
