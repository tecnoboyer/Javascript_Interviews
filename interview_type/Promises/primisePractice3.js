console.log("1️⃣ Start");

Promise.resolve("Step A")
  .then(val => {
    console.log("2️⃣", val);
    return "Step B";
  })
  .then(val => {
    console.log("3️⃣", val);
    throw new Error("💥 Oops in chain");
  })
  .then(val => {
    console.log("4️⃣ Never runs");
  })
  .catch(err => {
    console.log("5️⃣ Caught:", err.message);
  });

console.log("6️⃣ End");