import { of, Observable } from "rxjs";
import { GameCategoriesService } from "./game-categories.service";
import { RandomLetterService } from "./random-letter.service";
import { IGame } from "../types/game.interface";

export class SetupGameService {
    private _gameCategoriesService: any;
    private _randomLetterService: RandomLetterService;

    constructor(gameCategoriesService: GameCategoriesService, randomLetterService: RandomLetterService) {
        this._gameCategoriesService = gameCategoriesService;
        this._randomLetterService = randomLetterService;
    }

    public generateRandomGameId(): Observable<string> {
        const categories = this._gameCategoriesService.generateRandomCategories().join();
        const letter = this._randomLetterService.generateRandomLetter();

        const gameId = btoa(`${letter}-${categories}`)

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