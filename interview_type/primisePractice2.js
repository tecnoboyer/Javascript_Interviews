console.log("1️⃣ Start");

Promise.resolve().then(() => {
  console.log("2️⃣ Promise microtask");
});

setTimeout(() => {
  console.log("3️⃣ setTimeout macrotask");
}, 0);

console.log("4️⃣ End");
