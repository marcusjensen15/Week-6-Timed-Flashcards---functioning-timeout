import { Cards, MyCard } from  './dice-game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

console.log("hi");

let myCard= new MyCard("Hello my friend", "You look nice");
let myCard2= new MyCard("oink", "pig");

console.log(myCard);
let cards = new Cards();
console.log(cards);
cards.addCard(myCard.frontSide);
cards.addCard(myCard.backSide);
cards.addCard(myCard2.frontSide);
cards.addCard(myCard2.backSide);

console.log(cards);


let howdy = [10,20,30,40];

//  const showCards = deck => {
//    let i = 0;
//     while (i < deck.length) {
//       setTimeout(function() {
//         alert(deck[i]);
//         i += 1;
//       }, 2000);
//     }
//
//
// };

// for(var i = 0; i < 5; i++){
//     (function(i){
//         setTimeout(function(){
//             console.log('value is ', i);
//         }, 3000);
//     })(i);
// }

const showCards = deck => {


   for (let i = 1; i <= deck.length; i++) {

     setTimeout(function() {
       alert(i) }, i*5000);
   }


};

// console.log(showCards(10));


// doSetTimeout();
showCards(howdy);
