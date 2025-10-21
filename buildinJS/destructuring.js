const user = { name: 'Alice', age: 30, city: 'Paris' };

// Destructuring assignment 

const {name,city }=user;
console.log(` the name is: ${name}, and the location is in : ${city} `);


// Array destructuring
const colors = ['red', 'green', 'blue'];

const [first,third]=colors;
console.log(` the first color is: ${first}, and the third color is : ${third} `);


const colorcompletion =[...colors,'black'];
console.dir( colorcompletion);