var i=3;
var n =1;
var flag=0; 
while(n<10){

for(let j=2; j<=i-1 ; j++){
    if(i%j==0){
        // console.log("estoy en un divisible i :"+i);
        // console.log("estoy en un divisible j :"+j)
        flag=0;
        break
    }
    else{
        flag=1;
    }
}
if(flag==0){
    // console.log("rompio con i "+i)
    i=i+1;
}
else{
    console.log("The first 10 prime numbers are : "+i)
    flag=0;
    i++;
    n++;
}

}
