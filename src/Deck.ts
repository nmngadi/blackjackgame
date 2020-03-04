import card from "./card";
import { cardSuits, cardValues } from "./card";

export default class Deck {
  private cards: card[] = [];

  constructor() {
    this.generateFreshDeck();
  }

  public generateFreshDeck() {
    // Construct fresh 52-card deck
    this.cards = [];

    for (let suit of cardSuits) {
      for (let value of cardValues) {
        if (this.cards.length < 52) {
          this.cards.push(new card(value, suit));
        }
      }
    }
    return this.cards;
  }

  printDeck() {
    for (let card of this.cards) {
      console.log(`${card.getPrintString()}: ${card.getScore()}`);
    }
  }
}
const s = new Deck();
console.log(s.generateFreshDeck());
