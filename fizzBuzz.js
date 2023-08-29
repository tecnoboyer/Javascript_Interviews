// Given an integer n (running over he first 10 numbers), return a string array answer (1-indexed) where:
// "FizzBuzz" if i is divisible by 3 and 5.
// "Fizz" if i is divisible by 3.
// "Buzz" if i is divisible by 5.


var n =1;
var flag1="none";
var flag2="none";

for (n=1;n<=15;n++){
    ((n%3==0)?flag1="Fizz":flag1="none");
    ((n%5==0)?flag2="Buzz":flag2="none");

    if(flag1=="Fizz" ){
        if(flag2=="Buzz"){
             console.log("FizzBuzz : "+n);
             flag1="none";
             flag2="none";
        }
        else {
            console.log("Fizz : "+n);
            flag1="none";
            flag2="none";
        }
    }

    if(flag2=="Buzz" ){
        if(flag1=="Fizz"){
             console.log("FizzBuzz: "+n);
             flag1="none";
             flag2="none";
        }
        else {
            console.log("Buzz : "+n);
            flag1="none";
            flag2="none";
        } 
    }


}



