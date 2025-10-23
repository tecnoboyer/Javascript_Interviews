console.log("1️⃣ Start");

const p1 = Promise.resolve("✅ A");
const p2 = Promise.reject("❌ B");
const p3 = Promise.resolve("✅ C");

Promise.all([p1, p2, p3])
  .then(values => console.log("2️⃣ All resolved:", values))
  .catch(err => console.log("3️⃣ Rejected:", err));

console.log("4️⃣ End");
