
// Question
// In a CMS like CNN’s, articles are processed to extract metadata and format content for display. Write a JavaScript function that processes a list of raw article data and returns formatted output for use in a CMS. The function should handle the following requirements:

// Input: An array of article objects, each with fields:

// id (number),
// rawContent (string, e.g., “This is a news article. #politics #breaking”),
// author (string),
// createdAt (ISO date string, e.g., “2025-07-24T12:00:00Z”).
// Output: An array of formatted article objects with:

// id: Same as input.
// title: First 50 characters of rawContent (trimmed, with “…” appended if truncated).
// tags: Array of hashtags extracted from rawContent (e.g., [“politics”, “breaking”]).
// author: Same as input.
// createdAt: Converted to a readable format (e.g., “July 24, 2025”).



function formatArticles(articles) {
  let targs = articles.forEach(element => {
    let rawsub=element.rawContent.split ('#');
    let title = rawsub.shift();
    let newid=element.id;
    let newAutor=element.author;
    let createdAt= element.createdAt;
    let out ={
      id:newid,
      title,
      author:newAutor,
      tags:rawsub,
      createdAt
    };

    return out;

  });

  return targs;
}


// Test input
const articles = [
  { id: 1, rawContent: "This is a news article. #politics #breaking", author: "Jane Doe", createdAt: "2025-07-24T12:00:00Z" },
  { id: 2, rawContent: "", author: "John Smith", createdAt: "invalid" },
  { id: 3, rawContent: "Economy grows in Q2. #finance", author: "Alice Brown", createdAt: "2025-07-23T10:00:00Z" }
];

/*
const sampleExpectedOutput = [
  { id: 1, title: "This is a news article...", tags: ["politics", "breaking"], author: "Jane Doe", createdAt: "July 24, 2025" },
    { id: 2, title: "", tags: [], author: "John Smith", createdAt: "July 24, 2025" },
      { id: 3, title: "Economy grows in Q2...", tags: ["finance"], author: "Alice Brown", createdAt: "July 23, 2025" }
      ]
*/

// Run your function
console.dir(formatArticles(articles));
