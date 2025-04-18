function sym(...args) {
  // Create a frequency map to count occurrences of each element
  const frequency = {};

  // Iterate over each array
  args.forEach((arr, index) => {
    // Use a Set to avoid counting duplicates within the same array
    const uniqueElements = new Set(arr);
    uniqueElements.forEach(element => {
      if (frequency[element]) {
        frequency[element]++;
      } else {
        frequency[element] = 1;
      }
    });
  });

  // Collect elements that appear an odd number of times
  const result = [];
  for (const element in frequency) {
    if (frequency[element] % 2 !== 0) {
      result.push(parseInt(element, 10));
    }
  }
  console.log(' Frecuency object: ',frequency);

  return result;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])); // Output: [3, 5, 4]