// Question
// In a CMS like CNN’s, articles are processed to extract metadata and 
// format content for display. Write a JavaScript function that processes 
// a list of raw article data and returns formatted output for use in a CMS.
//  The function should handle the following requirements:

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

/*processes a list of raw article data and returns formatted output 
 * for use in a CMS
 * @param {Object}articles = {id:number  ,rawContent:string, author  }
 * @returns{Object} = {
 *                      id: Same as input.
 *                      title: First 50 characters of rawContent 
 *                             (trimmed, with “…” appended if truncated).
 *                      tags: Array of hashtags extracted from 
 *                            rawContent (e.g., [“politics”, “breaking”]).
 *                      author: Same as input.
 *                      createdAt: Converted to a readable format (e.g., “July 24, 2025”).}
 * 
*/

function formatArticles(articles) {

    let proceseed =[];



    articles.forEach(element => {
        let rawTag = element.rawContent.split('#');
        let preTitle= rawTag.shift();
        const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];

        //Formating date
        let stringDate =element.createdAt;
        let preDate= new Date(stringDate);
        let month = "";
        let day="";
        let year="";
        let createdAt ="";

        //Formatting the date
        let monthIndex = preDate.getMonth();
        if (!isNaN(monthIndex) && monthIndex >= 0 && monthIndex <= 11) {
            month = monthNames[monthIndex];
            day= preDate.getDay();
            year = preDate.getFullYear();
            createdAt= month +' '+day+','+' '+year;
        }

        //Formatting the title 
        let trimmedContent = preTitle.trim();
        let truncatedContent = trimmedContent.length > 50 
            ? trimmedContent.slice(0, 50) + "…"
            : trimmedContent;

        let subSet= {
            id:element.id,
            title:truncatedContent,
            author: element.author,
            tags:rawTag,
            createdAt
        }
        proceseed.push(subSet);        
    });

    return proceseed
  }


const articles = [
  { id: 1, rawContent: "This is a news article that has more than 50 letters in it. Bet jus because of that it doesn. #politics #breaking", author: "Jane Doe", createdAt: "2025-07-24T12:00:00Z" },
  { id: 2, rawContent: "", author: "John Smith", createdAt: "invalid" },
  { id: 3, rawContent: "Economy grows in Q2. #finance", author: "Alice Brown", createdAt: "2025-07-23T10:00:00Z" }
];

console.dir(formatArticles(articles));