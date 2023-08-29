// # Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// # You may assume that each input would have exactly one solution, and you may not use the same element twice.
// # You can return the answer in any order.
    
var i,j =1;
let x =[2,7,11,15];
let tarjet=9;

var long=x.length;

for(i=0;i<long;i++){
    for(j=0;j<long;j++){
        if((i!=j)&(x[i]+x[j]==tarjet)){
            console.log(i + " " + j );
            // console.log(j);
            break
        }
    }
    break
}