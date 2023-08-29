
// Pair Sum At Most K
// Given an array of integer numbers and a target sum, locate a pair of two numbers in the array which together produce the maximum sum that does not exceed the target.
// Your result should be an array of two numbers sorted ascending. If there are no numbers that produce a sum less than or equal to the target, return an array of [-1, -1] to indicate failure. If there are multiple pairs that produce the maximum sum, return any pair you wish.

function maxSumPair(arr, target) {
    arr.sort((a, b) => b - a);
    let left = 0;
    let right = arr.length - 1;
    let maxSum = -Infinity;
    let res = [-1, -1];
  
    while (left < right) {
      const currSum = arr[left] + arr[right];
      if (currSum > target) {
        right--;
      } else {
        if (currSum > maxSum) {
          maxSum = currSum;
          res = [arr[left], arr[right]];
        }
        left++;
      }
    }
    return res[0] === -1 ? res : res.sort((a, b) => a - b);
  }
console.log(maxSumPair([5, 7, 1, 20, 30, 11, 70, 40], 12))