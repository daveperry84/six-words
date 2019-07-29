export class RandomLetterService {
  private _letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z'];

  generateRandomLetter() {
    return this._letters[Math.floor(Math.random() * 26)];
  }
}