import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SetupGameComponent } from './pages/setup-game/setup-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayGameComponent } from './pages/play-game/play-game.component';
import { PlayGameFixedFooterComponent } from './components/play-game-fixed-footer/play-game-fixed-footer.component';
import { GameTimerComponent } from './components/game-timer/game-timer.component';
import { ScoreButtonComponent } from './components/score-button/score-button.component';
import { SharedModule } from './shared/shared.module';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetupGameComponent,
    PlayGameComponent,
    PlayGameFixedFooterComponent,
    GameTimerComponent,
    ScoreButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
