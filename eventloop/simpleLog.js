console.log("one");
console.log("two");

function logThree() {
    console.log("three");
}
function logThreeandFour() {
    logThree();
    console.log("four");
}

logThreeandFour();  
