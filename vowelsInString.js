const word = 'paralerepidedo';

let vowels = 0;
let consonants = 0;

for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();

    if (char === 'a' || char === 'e') {
        vowels++;
    } else if (char >= 'a' && char <= 'z') {
        consonants++;
    }
}

if (vowels > 0) {
    console.log('The vowel number:', vowels);
} else {
    console.log('No vowels in the word');
}

console.log('Number of consonants:', consonants);