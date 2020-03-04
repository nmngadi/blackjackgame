const THOROUGH_SHUFFLE: number = 500;
const DEALER_STOP_VALUE: number = 17;

export let cardSuits: string[] = ["Hearts", "Club", "Diamond", "Spade"];
export let cardValues: string[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace"
];

export default class Card {
  private value: string;
  private suit: string;
  private score: number;
  // Convert value string to a point score
  private static valueStrToScore(value: string): number {
    let score: number = parseInt(value);
    if (isNaN(score)) {
      switch (value) {
        case "Jack":
          score = 10;
          break;
        case "Queen":
          score = 10;
          break;
        case "King":
          score = 10;
          break;
        case "Ace":
          score = 1; // score of 1 will have a special clause in the Hand class to handle the duality of the Ace
          break;
       
         case "2":
         score=2
         break;

         default:
        //throw Error(`Card value ${value} is invalid`);
      }
    }
    return score;
  }

  constructor(value: string, suit: string) {
    this.value = value;
    this.suit = suit;
    this.score = Card.valueStrToScore(value);
  }

  public getPrintString(): string {
    return `${this.value}${this.value === "10" ? "" : " "} ${this.suit} `;
  }

  public getScore(): number {
    return this.score;
  }

  
}
