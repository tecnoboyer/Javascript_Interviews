// count the appearances of a word in a paragraph

const parag = 'this is a sample text. this is just an example';

// Clean from special characters and convert to lowercase
const clear_parag = parag.replace(/[.,]/g, '').toLowerCase();
const justwords = clear_parag.split(/\s+/);

const accumulator = {};
for (const word of justwords) {
    if (word in accumulator) {
        accumulator[word]++;
    } else {
        accumulator[word] = 1;
    }
}
 console.dir(accumulator);