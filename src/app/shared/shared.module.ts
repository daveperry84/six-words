import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RandomLetterService } from "./services/random-letter.service";
import { GameTimerService } from "./services/game-timer.service";
import { GameScoreService } from "./services/game-score.service";
import { HeaderComponent } from "./components/header/header.component";
import { GameCategoriesService } from "./services/game-categories.service";
import { GameCategoriesFactory } from "./services/game-categories.factory";

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
    GameScoreService,
    GameCategoriesService,
    GameCategoriesFactory
  ],
  exports: [
      HeaderComponent
  ]
})
export class SharedModule { }
