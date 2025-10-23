function fetchResource(name, shouldFail = false, delay = 300) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldFail ? reject(`❌ ${name} failed`) : resolve(`✅ ${name} done`);
    }, delay);
  });
}

console.log("⏳ Start");

Promise.all([
  fetchResource("User"),
  fetchResource("Posts"),
  fetchResource("Settings"),
])
  .then(console.log)
  .catch((err) => console.error("🔥 Caught error:", err));
