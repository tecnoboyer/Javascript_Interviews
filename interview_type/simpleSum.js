// Given an array of integers nums and an integer target, return indices of 
// the two numbers such that they add up to target.


 let nums = [11,2,7,15];
 let target = 9 ;


 let twoSum = function(nums, target){

    for(let i=0;i<nums.length-1;i++){ 
        for (let j=i+1 ; j<nums.length ; j++){
            if (nums[i]+nums[j]===target){
                return [i,j];
            }

        }
    }

 }

 console.log(twoSum(nums,target));
