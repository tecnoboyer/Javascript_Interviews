// Given a string s, find the length of the longest 
// substring
//  without repeating characters.


// example:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
 
var s = "abcabcbb";
var numString=[];
var sh= 0 ;

for (var i =0 ; i<s.length ; i++){
    for(var j=0 ; j<s.length; j++){
        if( (i!=j)&(s[i]==s[j])){
            sh++;
        }
       
        // numString[j]=sh;
        
    }
    numString[i]=sh;
    sh=0;
    console.log(`in ${i} the count it is ${sh}`)    
}
console.log(numString);