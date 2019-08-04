import { Observable, BehaviorSubject } from "rxjs";
import { IGameTimer } from "../types/game-timer.interface";

export class GameTimerService {
  private _gameTimerSubject: BehaviorSubject<IGameTimer> = new BehaviorSubject<IGameTimer>({ minutes: 3, seconds: 0 });
  private _gameStartedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _gameEndedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _timer: any;
  private _gameTimer: IGameTimer;

  public getTime(): Observable<IGameTimer> {
    return this._gameTimerSubject.asObservable();
  }

  public gameStarted(): Observable<boolean> {
    return this._gameStartedSubject.asObservable();
  }

  public gameEnded(): Observable<boolean> {
    return this._gameEndedSubject.asObservable();
  }

  public startTimer(): void {
    this._gameTimer = this._gameTimerSubject.value;
    this._gameStartedSubject.next(true);

    this._timer = setInterval(() => {
      let minutes = this._gameTimer.minutes;
      let seconds = this._gameTimer.seconds;

      if(minutes === 0 && seconds === 0) {
        this.endTimer();
      } else if (seconds === 0) {
        this._gameTimer.minutes--;
        this._gameTimer.seconds = 59;
        this._gameTimerSubject.next(this._gameTimer);
      } else {
        this._gameTimer.seconds--;
        this._gameTimerSubject.next(this._gameTimer);
      }
    }, 1000)
  }

  public resetTimer(): void {
    this._gameStartedSubject.next(false);
    this._gameEndedSubject.next(false);
    this._gameTimerSubject.next({ minutes: 3, seconds: 0 });
  }

  private endTimer(): void {
    clearInterval(this._timer);
    this._gameEndedSubject.next(true);
  }
}