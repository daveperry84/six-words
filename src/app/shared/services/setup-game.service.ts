import { of, Observable } from "rxjs";
import { GameCategoriesService } from "./game-categories.service";
import { RandomLetterService } from "./random-letter.service";
import { IGame } from "../types/game.interface";
import { GameTimerService } from "./game-timer.service";

export class SetupGameService {
    private _gameCategoriesService: any;
    private _randomLetterService: RandomLetterService;
    private _gameTimerService: GameTimerService;

    constructor(gameCategoriesService: GameCategoriesService, 
        randomLetterService: RandomLetterService,
        gameTimerService: GameTimerService) {
        this._gameCategoriesService = gameCategoriesService;
        this._randomLetterService = randomLetterService;
        this._gameTimerService = gameTimerService;
    }

    public generateGameId(categoryList: Array<number> = null): Observable<string> {
        const categories = categoryList ? categoryList : this._gameCategoriesService.generateRandomCategories().join();
        const letter = this._randomLetterService.generateRandomLetter();

        const gameId = btoa(`${letter}-${categories}`);

        this._gameTimerService.resetTimer();

        return of(gameId);
    }

    public getGameFromGameId(gameId: string): Observable<IGame> {
        const gameDecode = atob(gameId);
        const gameDetails = gameDecode.split('-');
        const categoryIdList = gameDetails[1].split(',');

        let categories = [];

        categoryIdList.forEach((id) => {
            categories = [...categories, this._gameCategoriesService.getCategoryById(parseInt(id))];
        })

        return of({
            categories: categories,
            letter: gameDetails[0]
        })
    }
}