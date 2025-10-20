// let x = 10; // Global scope

// function outer() {
//   let y = 20; // outer's scope

//   function inner() {
//     var example='lexical scope';
//     let unnowmed='example of lexical scope';

//     // inner's scope
//     console.log(x); // Looks outside inner, finds x=10 in global scope.
//     console.log(y); // Looks outside inner, finds y=20 in outer's scope.
//   }

//   return inner;
// }

// const myInner = outer(); // outer is done executing, but myInner (the inner function)
// myInner();              // *still* remembers the environment where it was *defined*
// // Output: 10
// // Output: 20
// // console.log('example:' + example);
// console.log('unnowmed:' + unnowmed);



// for (var i = 0; i < 3; i++) {
//     console.log(i); 
// }
// console.log('final value of i:' + i);


// for (let j = 0; j < 3; j++) {  
//     console.log(j); 
// }
// console.log('fjnal value of j:' + j);
// console.log(a);
// var a = 10;

// // let b = 5;
// function makeCounter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }
// const counter = makeCounter();
// console.log(counter()); // ?
// console.log(counter()); // ?


function createCounters() {
  const counters = [];
  
  for (let i = 0; i < 3; i++) {
    let j = 0;  // New j for each iteration
    counters.push(function() {
      return ++j;
    });
  }
  
  return counters;
}

const myCounters = createCounters();
console.log(myCounters[0]()); // 1
console.log(myCounters[0]()); // 2
console.log(myCounters[1]()); // 1 (fresh counter)