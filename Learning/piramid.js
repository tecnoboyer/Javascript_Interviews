// // Problem statement: "Print a pyramid pattern using the # character, where the pyramid has n rows, and each row is centered with appropriate spacing."
let character='#';
function padRow( numeric) {
    let i=0;
    for (i;i<=numeric;i++){
             console.log(".".repeat(numeric-i)  + character.repeat(2*i+1) + ".".repeat(numeric-i)) ;
    }
    
  }
padRow(3);


