
//Example testing for template//

import { MyObject, MyCard, Cards } from './../src/dice-game.js'


describe('MyCard', () => {

    test('should record the front and back side of card from the user', () => {
      let myCard= new MyCard("Hello my friend", "You look nice");
      expect(myCard.frontSide).toEqual("Hello my friend");
      expect(myCard.backSide).toEqual("You look nice");

    });
});

describe('Cards', () => {
  test('this should hold all myCards', () => {
    let myCard= new MyCard("Hello my friend", "You look nice");
    let myCard2= new MyCard("oink", "pig");
    let cards = new Cards();
    cards.addCard(myCard.frontSide);
    cards.addCard(myCard.backSide);
    cards.addCard(myCard2.frontSide);
    cards.addCard(myCard2.backSide);

    expect(cards.completedCards).toEqual(["Hello my friend", "You look nice","oink", "pig"]);
  });


});








//Example testing for template//
