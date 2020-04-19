import { ICategory } from "../types/category.interface";
import { of, Observable } from "rxjs";
import { CATEGORIES } from "../data/game-categories";
import { Injectable } from "@angular/core";

@Injectable()
export class GameCategoriesService {
    private _categories: Array<ICategory> = CATEGORIES;

    public getCategories(): Array<ICategory> {
        return this._categories;
    }

    public generateRandomCategories(): Array<number> {
        let idList = [];

        while (idList.length < 6) {
            const index = Math.floor(Math.random() * this._categories.length);
            const id = this._categories[index].id;

            if(idList.indexOf(id) === -1) {
                idList = [...idList, id];
            }
        }

        return idList
    }

    public getCategoryById(id: number): ICategory {
        return this._categories.find((category) => {
            return category.id === id;
        })
    }
}