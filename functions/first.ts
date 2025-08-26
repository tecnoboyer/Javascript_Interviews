// Create a function that takes in an integer.This function should return the given integer + 7 if the integer is less than 10. If the integer is greater than or equal to 10, it should return the given integer - 3.
// The name of the function should be addOrSubtract.

function addOrSubtract(num: number): number {
    if (num < 10) {
        return num + 7;
    } else {
        return num - 3;
    }
}

const addOrSubtract2 = (num: number): number => {
    return num < 10 ? num + 7 : num - 3;
}

// console.log(addOrSubtract(5)); // 12


// ******* exerccise 2 ********
// Write a function, named multiply, that takes two parameters 
// and returns their product.

// function multiply(a: number, b: number): number {
//     return a * b;
// }   
// console.log(multiply(4, 5)); // 20


// ******* exerccise 3 ********
// Write a function, named capitalize, that takes a string 
// as an parameter and returns a new string with the first 
// letter capitalized.
// function capitalize(str: string): string {
//     if (str.length === 0) return str;   
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(capitalize("hello")); // "Hello"

const capitalize = (word:string):string => {
  if ( word.length >1){
    return word[0].toUpperCase() + word.slice (1);
  }
  else return word;
}
console.log(capitalize("hello")); // "Hello"
