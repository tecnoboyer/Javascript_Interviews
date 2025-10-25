// The Goal
// Write a JavaScript function, cleanseUserData, that processes a raw list of user data. The function should validate, sanitize, and standardize the data, returning an array of cleaned user objects. Users that fail critical validation should be filtered out.
// Requirements
// Input
// An array of user objects, each with fields:
// id (string, required)
// fullName (string)
// email (string)
// preferences (object with nested data)
// theme (string, e.g., 'dark', 'light')
// notifications (string, e.g., 'on', 'off')
// lastActive (number, milliseconds since epoch)

// Output
// An array of formatted user objects with the following rules applied:
// Critical Validation & Filtering: Any user object missing an id or having 
// a non-string id must be filtered out entirely.
// Sanitization: The email should be converted to lowercase and trimmed of any leading/trailing whitespace.
// Standardization: The fullName should be converted to Title Case (e.g., "jane doe" becomes "Jane Doe"). If fullName is missing, use "Anonymous User".
// Defaulting: The preferences.theme should default to 'light' if it is missing or invalid. The preferences.notifications should default to false (boolean) if missing or set to anything other than the string 'on'.
// Transformation: The lastActive timestamp should be converted into a boolean field called isOnline, which is true if lastActive is within the last 15 minutes (900,000 milliseconds) from the current time of execution.

/**
 * Processes and cleanses raw user data according to validation,
 * sanitization, and transformation rules.
 *
 * @param {Array<Object>} rawUsers - Array of user objects.
 * @returns {Array<Object>} Array of cleaned, formatted user objects.
 */
function cleanseUserData(rawUsers) {
    let cleanedArray=[];

    rawUsers.forEach((theobject)=>{
        let newemail = theobject.email.toLowerCase().trim(' ');
        cleanedArray.push(newemail);
    });

    return cleanedArray

}

// --- Test Cases ---
const rawUserData = [
    { id: "u001", fullName: "ALICE brown", email: "  Alice.Brown@EXAMPLE.com ", preferences: { theme: 'dark', notifications: 'on' }, lastActive: Date.now() - 600000 }, // Active 10 min ago (Online)
    { id: "u002", fullName: "john smith", email: "john@test.com", preferences: { theme: 'invalid', notifications: 'off' }, lastActive: Date.now() - 1000000 }, // Active 16.6 min ago (Offline)
    { id: "u003", fullName: null, email: "bob@test.com", preferences: {} }, // Missing lastActive, Missing name (Offline, Anonymous)
    { id: 4, fullName: "Invalid ID", email: "fail@test.com", preferences: { theme: 'dark' }, lastActive: Date.now() }, // Invalid ID Type (Filtered out)
    { id: "u005", fullName: "test", email: "test@test.com" } // Missing lastActive (Offline)
];

console.dir(cleanseUserData(rawUserData), { depth: null });