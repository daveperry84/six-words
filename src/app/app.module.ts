import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SetupGameComponent } from './pages/setup-game/setup-game.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayGameComponent } from './pages/play-game/play-game.component';
import { RandomLetterService } from './services/random-letter.service';

const ROUTES: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'setup', component: SetupGameComponent },
  { path: 'play', component: PlayGameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetupGameComponent,
    PlayGameComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    RandomLetterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
