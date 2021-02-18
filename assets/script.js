// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompts and loops
function generatePassword() {
  var pwLength = (prompt("How many characerters would you like your password to be?"));

  while(pwLength <= 7 || pwLength >= 128) {
    alert("Your password must be at least 8 characters long, but less than 128.");
    var pwLength = (prompt("How many characters would you like your password to be?"));
    }

    alert("Your password will be " + pwLength + " characters long.");
  
  var pwUpperCase = (confirm("Would you like your password to contain uppercase letters? OK for yes; Cancel for No."));
    
  var pwLowerCase = (confirm("Would you like your password to contain lowercase letters? OK for yes; Cancel for No."));

  var pwSpecial = (confirm("Would you like your password to contain special characters? OK for yes; Cancel for No."));

  var pwNumber = (confirm("Would you like your password to contain numbers? OK for yes; Cancel for No."));

    if(pwUpperCase === false && pwLowerCase === false && pwSpecial === false && pwNumber === false) {
      alert("You must select at least one of the following: \r\n Uppercase, Lowercase, Special Character, or Number.");
      var pwUpperCase = (confirm("Would you like your password to contain uppercase letters? OK for yes; Cancel for No."));
      
      var pwLowerCase = (confirm("Would you like your password to contain lowercase letters? OK for yes; Cancel for No."));

      var pwSpecial = (confirm("Would you like your password to contain special characters? OK for yes; Cancel for No."));

      var pwNumber = (confirm("Would you like your password to contain numbers? OK for yes; Cancel for No."));
    }
  
    var pwCharacters = []; // empty array for the concatenated arrays below to be passed into
  
  if(pwUpperCase) {
    pwCharacters = pwCharacters.concat(upperCase);
  }  

  if(pwLowerCase) {
    pwCharacters = pwCharacters.concat(lowerCase);
  }

  if(pwSpecial) {
    pwCharacters = pwCharacters.concat(special);
  }

  if(pwNumber) {
    pwCharacters = pwCharacters.concat(number);
  }

  console.log(pwCharacters);

    var completePassword = ""; // empty string for the results of the below randomizer to be passed through to
  
    for (var i = 0; i < pwLength; i++) {
      completePassword = completePassword + pwCharacters[Math.floor(Math.random() * pwCharacters.length)];
    }
    return completePassword;
}

// Arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}