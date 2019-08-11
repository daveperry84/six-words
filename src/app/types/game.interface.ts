import { ICategory } from "./category.interface";

export interface IGame {
    categories: Array<ICategory>;
    letter: string;
}