import { ICategory } from "../types/category.interface";

export class GameCategoriesFactory {
    public categories: Array<ICategory> = [
        { id: 'boys', title: 'Boys Name' },
        { id: 'girls', title: 'Girls Name' },
        { id: 'location', title: 'Location' },
        { id: 'fruitveg', title: 'Fruit or Vegetable' },
        { id: 'movie', title: 'Movie' },
        { id: 'tv', title: 'TV Program' },
        { id: 'animal', title: 'Animal' },
        { id: 'colour', title: 'Colour' },
        { id: 'book', title: 'Book Title' },
        { id: 'clothes', title: 'Item of Clothing' },
        { id: 'music', title: 'Music Artist or Band' },
        { id: 'home', title: 'Found in the Home' },
        { id: 'work', title: 'Found at School/ Work' },
        { id: 'holiday', title: 'Holiday Item' },
        { id: 'drink', title: 'Drink' },
        { id: 'sweets', title: 'Chocolate and Sweets' },
        { id: 'sport', title: 'Sports and Games' },
        { id: 'christmas', title: 'Christmas Item' },
        { id: 'character', title: 'Fictional Character' },
        { id: 'brand', title: 'Brand Name' }
    ];
}