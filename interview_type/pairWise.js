function pairwise(arr, arg) {
  let sumOfIndices = 0;
  let usedIndices = new Set(); // Use a Set for efficient lookups of used indices

  for (let i = 0; i < arr.length; i++) {
    // Skip if the current index has already been used in a pair
    if (usedIndices.has(i)) {
      continue;
    }

    for (let j = i + 1; j < arr.length; j++) {
      // Skip if the second index has already been used
      if (usedIndices.has(j)) {
        continue;
      }

      // Check if the pair sums to the target
      if (arr[i] + arr[j] === arg) {
        sumOfIndices += i + j;
        usedIndices.add(i);
        usedIndices.add(j);
        break; // Break the inner loop since we found a pair for arr[i]
      }
    }
  }

  return sumOfIndices;
}

console.log(pairwise([1,4,2,3,0,5], 7));
console.log(pairwise([1, 3, 2, 4], 4));
console.log(pairwise([1, 1, 1], 2));
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
console.log(pairwise([], 100));
