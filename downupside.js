// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed 
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
//  Spaces will be included only when more than one word is present.

function spinWords(str) {
    let words = str.split(" ");
    let reversedWords = [];
    for (let word of words) {
      if (word.length >= 5) {
        reversedWords.push(word.split("").reverse().join(""));
      } else {
        reversedWords.push(word);
      }
    }
    return reversedWords.join(" ");
  }
  
console.log(typeof(spinWords('This is another test')))
console.log(spinWords('This is another test'));
