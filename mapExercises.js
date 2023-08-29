// //  Array squared
const input = [1, 2, 3, 4, 5];

const output=input.map(item=>item*item);
const output2= input.map((num) => Math.pow(num, 2));
// console.log(output2)

// // Sum of every positive element
// const input = [1, -4, 12, 0, -3, 29, -150]; // 42;

const inputEx2 = [1, -4, 12, 0, -3, 29, -150]
const outputEx2 = inputEx2.reduce((ac,item)=>{
    console.log('  and item is: ',item ,'ac is: ',ac );
    if(item>0){
        return ac + item
    }else{
        return ac
    }
},0)
console.log(outputEx2);

// const inputEx2 = [1, -4, 12, 0, -3, 29, -150];
// const outputEx2 = inputEx2.reduce((ac, item) => {
//     console.log('  and item is: ',item ,'ac is: ',ac );
//     if (item > 0) {
//         return ac + item;
//     }
//     return ac; // Important: Return the accumulator for non-positive numbers
// }, 0);
// console.log(outputEx2);


// const inputEx2 = [1, -4, 12, 0, -3, 29, -150];

// const result = inputEx2.reduce((acc, curr) => acc + Math.abs(curr), 0);

// console.log(result); // Output: 42


