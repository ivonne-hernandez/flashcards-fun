const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  let card;
  let turn1;
  let turn2;
  
  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn1 = new Turn('object', card);
    turn2 = new Turn('yellow', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceOf(Turn);
    expect(turn2).to.be.an.instanceOf(Turn);
  });

  it('should store the user\'s guess', function() {
    expect(turn1.userGuess).to.equal('object');
  });

  it('should store the current card', function() {
    expect(turn1.currentCard).to.deep.equal(card);
  });
  
  it('should return the user\'s guess', function() {
    const userGuess = turn1.returnGuess();
    expect(userGuess).to.equal('object');
  });

  it('should return the current card', function() {
    const currentCard = turn1.returnCard();
    expect(currentCard).to.deep.equal(card);
  });

  it('should evaluate whether the guess is true or false', function() {
    const evaluateGuess1 = turn1.evaluateGuess();
    const evaluateGuess2 = turn2.evaluateGuess();
    expect(evaluateGuess1).to.be.true;
    expect(evaluateGuess2).to.be.false;
  });

  it('should tell the user whether their guess is correct or incorrect', function() {
    const feedbackTurn1 = turn1.giveFeedback();
    const feedbackTurn2 = turn2.giveFeedback();
    expect(feedbackTurn1).to.equal('correct!');
    expect(feedbackTurn2).to.equal('incorrect!');
  });
});