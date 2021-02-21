// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompts and loops
function generatePassword() {
  var pwLength = (prompt("How many characters long would you like your password to be?"));

  while(pwLength < 8 || pwLength > 128) {
    alert("Your password must be at least 8 characters long and no more than 128.");
    var pwLength = (prompt("How many characters would you like your password to be?"));
    }

    alert("Your password will be " + pwLength + " characters long.");
  
  var upperCaseConfirm = (confirm("Would you like your password to contain uppercase letters? \n\nClick OK for Yes; Cancel for No."));
    
  var lowerCaseConfirm = (confirm("Would you like your password to contain lowercase letters? \n\nClick OK for Yes; Cancel for No."));

  var specialConfirm = (confirm("Would you like your password to contain special characters? \n\nClick OK for Yes; Cancel for No."));

  var numberConfirm = (confirm("Would you like your password to contain numbers? \n\nClick OK for Yes; Cancel for No."));

    if(upperCaseConfirm === false && lowerCaseConfirm === false && specialConfirm === false && numberConfirm === false) {
      alert("You must select at least one of the following: \nUppercase, Lowercase, Special Character, or Number.");
      var upperCaseConfirm = (confirm("Would you like your password to contain uppercase letters?\n\nClick OK for yes; Cancel for No."));
      
      var lowerCaseConfirm = (confirm("Would you like your password to contain lowercase letters?\n\nClick OK for yes; Cancel for No."));

      var specialConfirm = (confirm("Would you like your password to contain special characters?\n\nClick OK for yes; Cancel for No."));

      var numberConfirm = (confirm("Would you like your password to contain numbers?\n\nClick OK for yes; Cancel for No."));
    }
  
  var pwCharacters = []; // empty array for the concatenated arrays below to be passed into
  
  if(upperCaseConfirm) {
    pwCharacters = pwCharacters + upperCase;
  }  

  if(lowerCaseConfirm) {
    pwCharacters = pwCharacters + lowerCase;
  }

  if(specialConfirm) {
    pwCharacters = pwCharacters + special;
  }

  if(numberConfirm) {
    pwCharacters = pwCharacters + number;
  }

  console.log(pwCharacters);

  var completePassword = ""; // empty string for the results of the below randomizer to be passed through to
  
    for (var i = 0; i < pwLength; i++) {
      completePassword = completePassword + pwCharacters[Math.floor(Math.random() * pwCharacters.length)];
    }
    return completePassword;
}

// Arrays
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var special = ["~`!@#$%^&*()_-{}[]|,.<>/?';:"];
var number = ["0123456789"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}