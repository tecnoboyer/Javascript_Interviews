const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users', (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    try {
      const users = JSON.parse(data);
      const firstUser = users[0];

      // Second nested callback:
      https.get(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`, (resPosts) => {
        let postData = '';

        resPosts.on('data', (chunk) => {
          postData += chunk;
        });

        resPosts.on('end', () => {
          try {
            const posts = JSON.parse(postData);
            console.log(`Posts by ${firstUser.name}:`, posts);
          } catch (e) {
            console.error('Error parsing posts JSON:', e.message);
          }
        });
      }).on('error', (e) => {
        console.error('Error fetching posts:', e.message);
      });
    } catch (e) {
      console.error('Error parsing users JSON:', e.message);
    }
  });
}).on('error', (e) => {
  console.error('Error fetching users:', e.message);
});
