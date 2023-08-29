// # Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// # You may assume that each input would have exactly one solution, and you may not use the same element twice.
// # You can return the answer in any order.


function pairMagic(arrleg,mostk){
    var left=0,pivot=0;
    var result=[];
    var inpu=arrleg;
    var right=(inpu.length)-1;
    const goal=mostk;
    var sum= -Infinity;
    var acSum = -Infinity;
    while(left<right){
        arrleg.map(()=>{
            for(pivot=left+1;pivot<=right;pivot++){
                sum=inpu[left]+inpu[pivot];
                if((sum<=goal)&(sum>acSum)){
                    acSum=inpu[left]+inpu[pivot];
                    result=[inpu[left],inpu[pivot]];
                }
                if(result[0]==undefined){
                    result=[-1,-1]
                }
            }
            left++;
        });        
    };
    console.log("So, the solution is : ");
    return result;
}

console.log(pairMagic([5, 7, 1, 20, 4, 11, 70, 6],12 ))
