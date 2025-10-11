console.log("1️⃣ Start");

Promise.resolve()
  .then(() => console.log("2️⃣ Microtask 1"))
  .then(() => { throw new Error("💥 inside microtask"); })
  .catch(err => console.error("3️⃣ Caught in microtask:", err));

setTimeout(() => console.log("4️⃣ Macrotask (setTimeout)"), 0);

console.log("5️⃣ End");
