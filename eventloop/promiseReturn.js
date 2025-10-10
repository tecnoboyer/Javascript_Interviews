Promise.resolve(1)
  .then(x => x + 1)           // Returns 2
  .then(x => Promise.resolve(x + 1)) // Returns Promise resolving to 3
  .then(x => { throw new Error("Oops!") }) // Rejects the chain
  .catch(err => {
    console.log("Caught error:", err.message); // "Oops!"
    return "Recovered"; // Chain continues with this value
  })
  .then(result => console.log(result)); // "Recovered"