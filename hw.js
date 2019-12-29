
PART 1: 

A) 
var swapCase = function(string) {
  return string.split('').map(x => x.toUpperCase()).join('');
  };
  console.log(swapCase('hello stranger , what do we have today? '));[]

​

B) 
var shiftLetters = string => (Array.prototype.map.call)(string,(x) => String.fromCharCode(x.charCodeAt(0)+1)).join("")
console.log(shiftLetters('hello'));






PART 2: 

A) 
var cards = []
var suits = ["clubs","diamonds","hearts","spades"]
var values = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]

suits.forEach(suit => {
  values.forEach(value => {
  cards.push(value + " of " +suit);
});
});
console.log(cards)




B) 
var newArray =[];
var wordPlay = (sentence) => {
  var arr = sentence.split(" ")
  arr.forEach(word => {
    if (word.length >=3){
      newArray.push(word)
    }
  });
  return console.log(newArray.reverse());
}

console.log(wordPlay("Hi Good Mornig My name is Razan"))



