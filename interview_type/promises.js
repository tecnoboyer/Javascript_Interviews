function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("👤 User data"), 300);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("📝 User posts"), 600);
  });
}

function fetchSettings() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("⚠️ Failed to load settings"), 900);
  });
}
console.log(fetchPosts()); // Promise { <pending> } meaning that the promise is still in progress
// by the time the log is executed, the promise has not yet resolved or rejected.

fetchPosts().then(value => {
  console.log(value);
});
fetchSettings()
    .then(value => {
        console.log(value);
    })
    .catch(error => {console.log(error)});