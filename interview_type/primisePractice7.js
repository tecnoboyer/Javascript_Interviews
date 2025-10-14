async function task() {
  console.log("1️⃣ Inside async function");

  setTimeout(() => console.log("2️⃣ setTimeout in async"), 0);

  await Promise.resolve(); //it pause the execution fo task here 
  console.log("3️⃣ After await");

  Promise.resolve().then(() => console.log("4️⃣ Promise after await"));
}

console.log("5️⃣ Before calling task");
task();
console.log("6️⃣ After calling task");
