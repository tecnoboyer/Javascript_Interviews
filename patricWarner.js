const word1='This is a sample text. It contains some words that may repeat. This is just an example.'
var word2=''

word2=word1.replace(/[.,]/g,'');

// Splitting the text into and ARRAY OF WORDS
const words = word2.split(' ');
const wordFrequency = {};

// // Counting word repetitions
for (word of words) {if (word in wordFrequency) { //it count the number for appearances, if not exist, the count is setted 1
    wordFrequency[word]++;
  } else {
    wordFrequency[word] = 1; // it enhance the json format!!!
  }
}
console.log(wordFrequency) //{This: 2,is: 2,a: 1,sample: 1,text: 1,It: 1,contains: 1,some: 1,words: 1,that: 1,may: 1,repeat: 1,just: 1,an: 1,example: 1}


