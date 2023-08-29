function findMaxSum(arr, target) {
    let left = 0, right = arr.length - 1;
    let maxSum = -Infinity, result,result2 = [];
    let sum,sum2,sum3 = -Infinity;

  
    while (left < right) {
      sum = arr[left] + arr[right];
      if (sum <= target && sum > maxSum) {
        maxSum = sum;
        result = [arr[left], arr[right]];
      }
      if (sum > target) {
        right--;
        sum2 = arr[left] + arr[right];
        if (sum2 <= target && sum2 > maxSum) {
            maxSum = sum2;
            result = [arr[left], arr[right]];
            sum=sum2;
          }          
          else{
            right++;
            left++;
            sum = arr[left] + arr[right];
            sum3 = arr[left] + arr[right];
            
          }
          if (sum3 <= target && sum3 > maxSum) {
            maxSum = sum3;
            sum=sum3;
            console.log("HEre right: "+right + " left :"+ left + " result2: "+result2);
            result = [arr[left], arr[right]];
          }  


      } else {
        left++;
        console.log("Contnuin")
      }
    }
    if (!result){
        result=[-1,-1]
    }
    if (result[0]>result[1]){
        let trans=result[0];
        result[0]=result[1];
        result[1]=trans;

    } else return result;
  
    
  }

  console.log(findMaxSum([70, 10, 11, 2, 30, 15, 20, 8], 12))


//   It is returning solutions but not the optimal solution.