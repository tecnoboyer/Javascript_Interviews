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

function multiply(a: number, b: number): number {
    return a * b;
}   
console.log(multiply(4, 5)); // 20
