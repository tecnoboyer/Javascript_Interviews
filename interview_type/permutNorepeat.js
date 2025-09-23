function permAlone(str) {
  // Base case
  if (str.length <= 1) return 1;

  // Generate all permutations
  function getPermutations(s) {
    if (s.length <= 1) return [s];
    let result = [];
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      let remain = s.slice(0, i) + s.slice(i + 1);
      for (let perm of getPermutations(remain)) {
        result.push(char + perm);
      }
    }
    return result;
  }

  // Filter out permutations with repeated consecutive letters
  const allPerms = getPermutations(str);
  const filtered = allPerms.filter(word => !/(.)\1/.test(word));
  return filtered.length;
}

// Example usage:
console.log(permAlone('aba')); // Output: 2
