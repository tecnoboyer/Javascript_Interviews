setTimeout(() => {
  console.log("1️⃣ setTimeout 0");
}, 0);

Promise.resolve().then(() => {
  console.log("2️⃣ Promise 1");
  setTimeout(() => {
    console.log("3️⃣ setTimeout inside promise");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("4️⃣ Promise 2");
});

console.log("5️⃣ End of script");
