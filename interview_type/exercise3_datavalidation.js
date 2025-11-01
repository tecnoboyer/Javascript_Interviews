/**
 * EXERCISE: E-Commerce Registration Form Data Sanitization
 * 
 * You're building a user registration system for an e-commerce platform.
 * Raw form data comes from various sources (web forms, mobile apps, APIs)
 * and needs thorough validation and sanitization before storing in the database.
 * 
 * REQUIREMENTS:
 * Implement the function processRegistrationData(rawUsers) that:
 * 
 * 1. CRITICAL VALIDATION (filter out entirely if fails):
 *    - username: required, 3-20 characters, alphanumeric + underscores only
 *    - email: required, valid email format
 *    - password: required, minimum 8 characters
 * 
 * 2. SANITIZATION:
 *    - username: trim whitespace, convert to lowercase
 *    - email: trim whitespace, convert to lowercase
 *    - firstName/lastName: trim whitespace, remove any numbers or special chars
 *    - phoneNumber: remove all non-digit characters, keep only digits
 *    - website: ensure it starts with http:// or https://, if not add https://
 * 
 * 3. STANDARDIZATION:
 *    - firstName/lastName: Convert to Title Case (default to empty string if missing)
 *    - age: Convert to integer, must be 18-120, filter out if invalid
 *    - accountType: Must be 'personal' or 'business' (default to 'personal')
 * 
 * 4. TRANSFORMATIONS:
 *    - Add a 'displayName' field: "FirstName LastName (@username)"
 *    - Add a 'registrationDate' field: current timestamp
 *    - Convert terms: true if string 'yes'/'true'/'1'/true, false otherwise
 *    - Create 'securityLevel' based on password strength:
 *      * 'weak' if < 10 chars
 *      * 'medium' if 10-15 chars
 *      * 'strong' if > 15 chars
 * 
 * 5. NESTED DATA (address object):
 *    - street: trim, Title Case
 *    - city: trim, Title Case
 *    - zipCode: remove non-alphanumeric, uppercase
 *    - country: trim, uppercase (ISO code format)
 *    - If any required field (street, city, country) is missing, set entire address to null
 */

// TEST DATA
const rawRegistrationData = [
  {
    username: "  JohnDoe123  ",
    email: "  JOHN.DOE@EXAMPLE.COM  ",
    password: "securePass123!",
    firstName: "john",
    lastName: "doe",
    age: "28",
    phoneNumber: "(555) 123-4567",
    website: "johndoe.com",
    accountType: "business",
    terms: "yes",
    address: {
      street: "123 main street",
      city: "new york",
      zipCode: "10001-1234",
      country: "us"
    }
  },
  {
    username: "jane_smith",
    email: "jane@TEST.com",
    password: "short", // Too short - should be filtered
    firstName: "Jane",
    lastName: "Smith",
    age: "32"
  },
  {
    username: "bob", // Valid
    email: "bob@example.com",
    password: "anotherSecurePassword123",
    firstName: "  robert123  ", // Has numbers
    lastName: "johnson!!!",
    age: "45",
    phoneNumber: "+1-555-987-6543",
    website: "https://bobjohnson.com",
    accountType: "personal",
    terms: true,
    address: {
      street: "456 oak avenue",
      city: "los angeles",
      zipCode: "90001",
      country: "usa"
    }
  },
  {
    username: "alice_w",
    email: "alice@company.org",
    password: "myVeryLongAndSecurePassword2024!",
    firstName: "alice",
    lastName: "williams",
    age: "17", // Too young - should be filtered
    phoneNumber: "555.444.3333"
  },
  {
    username: "invalid user!", // Invalid characters
    email: "invalid@example.com",
    password: "password123",
    firstName: "Invalid",
    lastName: "User",
    age: "30"
  },
  {
    username: "charlie_b",
    email: "not-an-email", // Invalid email
    password: "password123",
    firstName: "Charlie",
    lastName: "Brown",
    age: "25"
  },
  {
    username: "diana_p",
    email: "diana@example.com",
    password: "mediumPass1",
    firstName: "diana",
    lastName: "prince",
    age: "150", // Too old - should be filtered
    accountType: "premium", // Invalid type
    terms: "no"
  },
  {
    // Missing required fields
    email: "orphan@example.com",
    password: "somepassword",
    firstName: "Orphan",
    age: "25"
  },
  {
    username: "eve_adams",
    email: "  EVE@EXAMPLE.COM  ",
    password: "validPass123",
    firstName: "eve marie123",
    lastName: "adams-smith",
    age: "29",
    phoneNumber: "5556667777",
    accountType: "business",
    terms: "1",
    address: {
      street: "789 pine road",
      city: "", // Missing city - address should be null
      country: "ca"
    }
  }
];

// YOUR SOLUTION HERE
function processRegistrationData(rawUsers) {
    
    var user ='';
    var password ='';
    var email ='';
    var usersArray =[]; 
    rawUsers.forEach(element => {
        var dataComing= {};
        if (element.username) {
            // If it exists, call the function and assign the result
            if(isValidUsername(element.username)){
                user = isValidUsername(element.username);
            }else{
                return false;
            }
        } else {
        return false;
    }
        dataComing.username=user;

        // Sanitizing the email
        if(isValidEmail(element.email)){
            email = isValidEmail(element.email);
        }
        dataComing.email=email;

        if(element.password&&element.password.length>8){
            password = element.password;
        }else{
            return false ;
        }
        dataComing.password=password;

        /// Sanitization name surname
        element.firstName? dataComing.firstName=normalizeName(element.firstName) : "";
        element.lastName? dataComing.lastName=normalizeName(element.lastName) : "";
        element.phoneNumber? dataComing.phoneNumber=element.phoneNumber.replace(/\D/g, ""):'' ;


        usersArray.push(dataComing);

    });
    
  // TODO: Implement the validation, sanitization, and transformation logic
  // Return an array of cleaned user objects
  console.dir(usersArray);
  return [];
}

// HELPER FUNCTIONS (You may implement these or add your own)

function isValidEmail(email) {
    // console.log(email);
    var medlewareEmail= email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(medlewareEmail))
    {
        return medlewareEmail
    }
}

function isValidUsername(username) {
    var medlewareName= username.trim().toLowerCase();
    if (medlewareName.length>3 && medlewareName.length<20){
            const alphanumericUnderscoreRegex = /^\w+$/;
            // return medlewareName
            if(alphanumericUnderscoreRegex.test(medlewareName)){
                return medlewareName
            }else {
                return false ;
            }
    }else{
        return false ;
    }
}

function toTitleCase(str) {
  // TODO: Convert string to Title Case
}

function sanitizePhone(phone) {
  // TODO: Extract only digits from phone number
}

function normalizeWebsite(url) {
  // TODO: Ensure URL starts with http:// or https://
}
function normalizeName(name){
  var clean = name.replace(/[^a-zA-Z\s]/g, "").trim();
  var sep = clean.split(" ");
  var unif = sep.map (substring =>{
    return substring[0].toUpperCase()+substring.slice(1).toLowerCase()
  })
  const result = unif.join(' ');

  return result ;

}

function getPasswordStrength(password) {
  // TODO: Return 'weak', 'medium', or 'strong'
}

// TEST YOUR SOLUTION
console.log("=== Testing processRegistrationData ===");
const cleanedUsers = processRegistrationData(rawRegistrationData);
// console.log(`Total valid users: ${cleanedUsers.length}`);
// console.log("\nCleaned Users:");
// console.log(JSON.stringify(cleanedUsers, null, 2));

// EXPECTED OUTPUT CHECKLIST:
// ✓ Should have 3 valid users (JohnDoe123, bob, eve_adams)
// ✓ jane_smith filtered (password too short)
// ✓ alice_w filtered (age < 18)
// ✓ "invalid user!" filtered (invalid username)
// ✓ charlie_b filtered (invalid email)
// ✓ diana_p filtered (age > 120)
// ✓ orphan@example.com filtered (missing username)
// ✓ All emails lowercase and trimmed
// ✓ All names in Title Case with no special characters
// ✓ Phone numbers digits only
// ✓ Websites have proper protocol
// ✓ displayName properly formatted
// ✓ securityLevel correctly calculated
// ✓ eve_adams should have address: null (missing city)