"use strict";
exports.__esModule = true;
var card_1 = require("./card");
var card_2 = require("./card");
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.generateFreshDeck();
    }
    Deck.prototype.generateFreshDeck = function () {
        // Construct fresh 52-card deck
        this.cards = [];
        for (var _i = 0, cardSuits_1 = card_2.cardSuits; _i < cardSuits_1.length; _i++) {
            var suit = cardSuits_1[_i];
            for (var _a = 0, cardValues_1 = card_2.cardValues; _a < cardValues_1.length; _a++) {
                var value = cardValues_1[_a];
                if (this.cards.length < 52) {
                    this.cards.push(new card_1["default"](value, suit));
                }
            }
        }
        return this.cards;
    };
    Deck.prototype.printDeck = function () {
        for (var _i = 0, _a = this.cards; _i < _a.length; _i++) {
            var card_3 = _a[_i];
            console.log(card_3.getPrintString() + ": " + card_3.getScore());
        }
    };
    return Deck;
}());
exports["default"] = Deck;
var s = new Deck();
console.log(s.generateFreshDeck().length);
