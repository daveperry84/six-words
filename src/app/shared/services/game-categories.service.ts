import { ICategory } from "../types/category.interface";
import { of, Observable } from "rxjs";
import { CATEGORIES } from "../data/game-categories";

export class GameCategoriesService {
    private _categories: Array<ICategory> = CATEGORIES;

    public getRandomCategories(): Observable<Array<ICategory>> {
        let indexList = [];
        let categories = [];

        while (indexList.length < 6) {
            const index = Math.floor(Math.random() * this._categories.length);

            if(indexList.indexOf(index) === -1) {
                indexList = [...indexList, index];
            }
        }

        indexList.forEach((index) => {
            categories = [...categories, this._categories[index]];
        })

        return of(categories);
    }
}