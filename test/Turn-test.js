const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store the user\'s guess', function() {
    const turn = new Turn('spongebob');
    expect(turn.userGuess).to.equal('spongebob');
  });

  it('should store the current card', function() {
    const card = new Card();
    const turn = new Turn('spongebob', card);
    expect(turn.currentCard).to.deep.equal(card);
  });
  
  it('should return the user\'s guess', function() {
    const card = new Card();
    const turn = new Turn('spongebob', card);
    const userGuess = turn.returnGuess();
    expect(userGuess).to.equal('spongebob');
  });

  it('should return the current card', function() {
    const card = new Card();
    const turn = new Turn('spongebob', card);
    const currentCard = turn.returnCard();
    expect(currentCard).to.deep.equal(card);
  });

  it('should evaluate whether the guess is true or false', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('yellow', card);
    const evaluateGuess1 = turn1.evaluateGuess();
    const evaluateGuess2 = turn2.evaluateGuess();
    expect(evaluateGuess1).to.be.true;
    expect(evaluateGuess2).to.be.false;
  });

  it('should tell the user whether their guess is correct or incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('yellow', card);
    const feedbackTurn1 = turn1.giveFeedback();
    const feedbackTurn2 = turn2.giveFeedback();
    expect(feedbackTurn1).to.equal('correct!');
    expect(feedbackTurn2).to.equal('incorrect!');
  });
});