// How Do You Find the Largest and Smallest Number in an Array of 1–100?
// Generate an array of all integers from 1 to 100.
// Have a variable for the largest and smallest numbers you have found so far, initialized to the smallest and largest integer, respectively.
// Loop through each value in the array and use Max and Min to assign if it is larger or smaller than the numbers you already have stored.
// These values contain the largest and smallest numbers in the array.
const myUpperLimit=100;
var min= 100000;
var max= -10000;



var wao=Array(myUpperLimit).fill().map(() => Math.round(Math.random() * myUpperLimit))
console.log('Input: ',wao);


 for(let i = 0 ; i<wao.length;i++){
    if(wao[i]<min){
        min=wao[i];
    }else{
         max=wao[i]
    }

 }

 console.log('Min : ',min,' Max : ',max);