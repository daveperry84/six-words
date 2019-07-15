import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SetupGameComponent } from './pages/setup-game/setup-game.component';
import { PlayGameComponent } from './pages/play-game/play-game.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
