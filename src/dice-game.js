export class MyCard {
  constructor(frontSide,backSide){
    this.frontSide = frontSide;
    this.backSide = backSide;

  }

}

export class Cards {
  constructor(){

    this.completedCards = [];
    this.processedCards = [];

  }
  addCard(card){
    this.completedCards.push(card);

  }
  // selectWholeCard(beef){
  //   let returnArray = [];
  //   for(let j=0; j < beef.length;j++){
  //     let innerArrayLength = beef[j].length;
  //     for (let i = 0; i < innerArrayLength; i++){
  //       let here = beef[j][i]+ "1";
  //       returnArray.push(here);
  //     }
  //
  //   }
  //   this.processedCards.push(returnArray);
  // }

}

// export showCards = (deck) => {
//   return "hello";
//  for(let i = 0; i < deck.length; i ++){
//    console.log("in function");
//    setTimeout(function() { alert(deck[i]) }, 2000);
//
//  }
// };
