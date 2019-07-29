import { Route } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { SetupGameComponent } from "./pages/setup-game/setup-game.component";
import { PlayGameComponent } from "./pages/play-game/play-game.component";

export const APP_ROUTES: Array<Route> = [
    { path: '', component: HomeComponent },
    { path: 'setup', component: SetupGameComponent },
    { path: 'play', component: PlayGameComponent }
];