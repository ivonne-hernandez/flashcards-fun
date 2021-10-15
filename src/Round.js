const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
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
    let elapsedTimeSeconds = (Date.now() - this.startTime) / 1000;
    let seconds = elapsedTimeSeconds % 60;
    let minutes = (elapsedTimeSeconds - seconds) / 60;
    let minutesDisplay = `minute`;
    let secondsDisplay = `second`;
    
    if (minutes !== 1) {
      minutesDisplay += `s`;
    }

    if (parseInt(seconds) !== 1) {
      secondsDisplay += `s`;
    }

    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    console.log(`Time to complete the game: ${minutes} ${minutesDisplay} and ${parseInt(seconds)} ${secondsDisplay}`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;