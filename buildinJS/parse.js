// JSON string (from an API, for example)
const jsonString = '[{"name": "Alice", "age": 20}, {"name": "Bob", "age": 25}]';

// // Step 1: Parse JSON → becomes a JS array
// const people = JSON.parse(jsonString);
// // console.dir(people);

// // Step 2: Now you can use array methods!
// const adults = people.filter(person => person.age > 20);

// console.log(adults);



// // IF the json represents an object :

const jsonStr = '{"users": [{"id": 1}, {"id": 2}]}';
const data = JSON.parse(jsonStr);

// Now data.users is an array → you can map over it:
const ids = data.users.map(u => u.id +3);
const ids2 = data.users.map(u => u.id);

console.log(ids);
console.log(ids2);