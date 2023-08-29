const word = 'toreverse';
const dec=word.length-1;
var colector='';
for(i in word){
    colector+=word[dec-i]
    
}

console.log(colector);

