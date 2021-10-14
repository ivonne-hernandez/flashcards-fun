const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(userGuess) {
    const turn = new Turn(userGuess, this.returnCurrentCard());
    this.turns += 1;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor((this.turns - this.incorrectGuesses.length) / 
    this.turns * 100);
  }

  endRound() {
   console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
   return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }

}

module.exports = Round;