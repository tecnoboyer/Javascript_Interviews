

// const neil = 'i';

// const sentence= 'neil armstrong is a good man';


// function countOccurrences(str, char) {
//     var count =0 ;
//     const clearedStr = str.replace(/[. ,]/g, '').toLowerCase();
//     const clearandnice = clearedStr.trim();
//     for (elem of clearandnice) {
//         if(elem ===neil){
//             count++;
//         }

//     }
//     return count;
        
//     }


// console.log(countOccurrences(sentence, neil));

/////////////////////////////////////////



// The target substring we want to count occurrences of.
// Changed from a single letter to the full name for clarity.

const textWithTabs = `Neil Armstrong was a good man.
\tHe was the first person to walk on the Moon.
Neil's achievement was a giant leap for mankind.
\tAnother line with Neil mentioned.`;

/**
 * Counts word occurrences in text with various whitespace characters.
 * Normalizes tabs, newlines, and multiple spaces into single spaces.
 * 
 * @param {string} str - The string to search within
 * @param {string} word - The word to count occurrences of
 * @returns {number} The count of how many times the word appears
 */
function countWordOccurrences(str, word) {
    if (word.length === 0) return 0;
    
    // 1. Normalize whitespace: replace tabs, newlines, and multiple spaces with single spaces
    const whitespaceNormalized = str.replace(/[\t\n\r]+/g, ' ').replace(/\s+/g, ' ');
    
    // 2. Remove punctuation and normalize case
    const cleanedStr = whitespaceNormalized.toLowerCase().replace(/[.,?!'"()-]/g, '');
    
    // 3. Split into words and count occurrences
    const words = cleanedStr.split(' ');
    const normalizedWord = word.toLowerCase();
    
    return words.filter(w => w === normalizedWord).length;
}

// Test with different search terms
console.log('Text with tabs and newlines:');
console.log(textWithTabs);

console.log('\n--- Word Occurrence Results ---');
console.log('Occurrences of "neil":', countWordOccurrences(textWithTabs, 'neil'));
console.log('Occurrences of "a":', countWordOccurrences(textWithTabs, 'a'));
console.log('Occurrences of "man":', countWordOccurrences(textWithTabs, 'man'));
console.log('Occurrences of "was":', countWordOccurrences(textWithTabs, 'was'));
console.log('Occurrences of "the":', countWordOccurrences(textWithTabs, 'the'));
console.log('Occurrences of "an":', countWordOccurrences(textWithTabs, 'an')); // This will be 0