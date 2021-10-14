const chai = require('chai');
const Deck = require('../src/Deck');
const expect = chai.expect;
const Card = require('../src/Card');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should store an array of card objects', function() {
    expect(deck.cards).to.deep.equal([
      {id: 1, question:'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer:'sea otter'}, 
      {id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'}, 
      {id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'}]);
  });

  it('should know how many Cards are in the Deck', function() {
    const cardCount = deck.countCards();
    expect(cardCount).to.equal(3);
  });
});