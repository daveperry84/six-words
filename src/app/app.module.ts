import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SetupGameComponent } from './pages/setup-game/setup-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayGameComponent } from './pages/play-game/play-game.component';
import { FixedFooterComponent } from './components/fixed-footer/fixed-footer.component';
import { GameTimerComponent } from './components/game-timer/game-timer.component';
import { ScoreButtonComponent } from './components/score-button/score-button.component';
import { APP_ROUTES } from './app.routes';
import { RandomLetterService } from './services/random-letter.service';
import { GameTimerService } from './services/game-timer.service';
import { GameScoreService } from './services/game-score.service';
import { GameCategoriesService } from './services/game-categories.service';
import { SetupGameService } from './services/setup-game.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetupGameComponent,
    PlayGameComponent,
    FixedFooterComponent,
    GameTimerComponent,
    ScoreButtonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    RandomLetterService,
    GameTimerService,
    GameScoreService,
    GameCategoriesService,
    SetupGameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
