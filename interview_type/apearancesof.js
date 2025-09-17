

const neil = 'i';

const sentence= 'neil armstrong is a good man';


function countOccurrences(str, char) {
    var count =0 ;
    const clearedStr = str.replace(/[. ,]/g, '').toLowerCase();
    const clearandnice = clearedStr.trim();
    for (elem of clearandnice) {
        if(elem ===neil){
            count++;
        }

    }
    return count;
        
    }


console.log(countOccurrences(sentence, neil));