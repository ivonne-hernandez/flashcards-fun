const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', 
      ['sea otter', 'pug', 'capybara'], 
      'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 
      'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });
  
  it('should instantiate a round with a deck and default properties', 
    function() {
      expect(round.deck).to.deep.equal(deck);
      expect(round.turns).to.equal(0);
      expect(round.incorrectGuesses).to.deep.equal([]);
    }
  );

  it('should return the current card', function() {
    const expected = card1;
    const result = round.returnCurrentCard();
    expect(result).to.deep.equal(expected);
  });

  it('should handle turns with incorrect guesses', function() {
    const expectedTurns = round.turns + 1;
    const expectedIncorrectGuesses = [round.returnCurrentCard().id];
    const expectedFeedback = `incorrect!`;

    const feedback = round.takeTurn(`wrong answer`);
    
    expect(round.turns).to.equal(expectedTurns);
    expect(round.incorrectGuesses).to.deep.equal(expectedIncorrectGuesses);
    expect(feedback).to.equal(expectedFeedback);
  });

  it('should handle turns with correct guesses', function() {
    const expectedTurns = round.turns + 1;
    const expectedIncorrectGuesses = [];
    const expectedFeedback = `correct!`;

    const feedback = round.takeTurn(`sea otter`);

    expect(round.turns).to.equal(expectedTurns);
    expect(round.incorrectGuesses).to.deep.equal(expectedIncorrectGuesses);
    expect(feedback).to.equal(expectedFeedback);
  });

  it('should calculate and return the percentage of correct guesses', 
    function() {
      round.takeTurn(`sea otter`);
      round.takeTurn(`gallbladder`);
      round.takeTurn(`wrong answer`);

      const expectedCorrGuesses = Math.floor(
        (round.turns - round.incorrectGuesses.length) / round.turns * 100);
      
      const result = round.calculatePercentCorrect();

      expect(result).to.equal(expectedCorrGuesses);
    }
  );

  it('should return a message that includes the percentage of questions answered correctly', function() {
    round.takeTurn(`sea otter`);
    round.takeTurn(`gallbladder`);
    round.takeTurn(`wrong answer`);
    round.calculatePercentCorrect();
    const expected = `** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`;

    const result = round.endRound();
    
    expect(result).to.equal(expected);
  });
});