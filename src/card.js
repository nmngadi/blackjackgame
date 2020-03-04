"use strict";
exports.__esModule = true;
exports.cardSuits = ["Hearts", "Club", "Diamond", "Spade"];
exports.cardValues = [
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
var Card = /** @class */ (function () {
    function Card(value, suit) {
        this.value = value;
        this.suit = suit;
        this.score = Card.valueStrToScore(value);
    }
    // Convert value string to a point score
    Card.valueStrToScore = function (value) {
        var score = parseInt(value);
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
                    score = 2;
                    break;
                default:
                //throw Error(`Card value ${value} is invalid`);
            }
        }
        return score;
    };
    Card.prototype.getPrintString = function () {
        return "" + this.value + (this.value === "10" ? "" : " ") + " " + this.suit + " ";
    };
    Card.prototype.getScore = function () {
        return this.score;
    };
    return Card;
}());
exports["default"] = Card;
