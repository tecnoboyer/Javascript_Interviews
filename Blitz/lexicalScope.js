let x = 10; // Global scope

function outer() {
  let y = 20; // outer's scope

  function inner() {

    // inner's scope
    console.log(x); // Looks outside inner, finds x=10 in global scope.
    console.log(y); // Looks outside inner, finds y=20 in outer's scope.
  }

  return inner;
}

const myInner = outer(); // outer is done executing, but myInner (the inner function)
myInner();              // *still* remembers the environment where it was *defined*
// Output: 10
// Output: 20