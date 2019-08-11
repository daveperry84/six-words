import { BehaviorSubject, Observable } from "rxjs";
import { ICategoryField } from "../types/category-field.interface";

export class GameScoreService {
    private _totalScoreSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    public getTotalScore(): Observable<number> {
        return this._totalScoreSubject.asObservable();
    }

    public calculateTotalScore(fields: Array<ICategoryField>): void {
        let score = 0;

        fields.forEach((field) => {
          score += field.score;
        })
  
        this._totalScoreSubject.next(score);
    }
}