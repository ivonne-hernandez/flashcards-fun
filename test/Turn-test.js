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