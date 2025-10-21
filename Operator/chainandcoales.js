const user = {
  profile: {
    name: 'Bob',
    settings: {
      theme: null
    }
  }
};

// Optional chaining — safe access
console.log(user.profile?.settings?.theme); // null (no error)

// Nullish coalescing — fallback only for null/undefined
const theme = user.profile?.settings?.theme ?? 'light';
console.log(theme); // 'light'

// vs logical OR (which treats 0, '', false as falsy)
const count = 0;
console.log(count || 10);   // 10 (wrong if 0 is valid!)
console.log(count ?? 10);   // 0 (correct!)