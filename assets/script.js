// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

const generateBtn = document.getElementById('generate');


const randomFunc = {
  upper: randomUpperCase,
  lower: randomLowerCase,
  special: randomSpecial,
  number: randomNumber
};

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const length = +generateBtn.value;

  console.log(typeof length);
});



// function
function randomUpperCase() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
}

function randomLowerCase() {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}

function randomSpecial() {
  const special = '!"#$%&*+,-./:;<=>?@[\]^_`{|}~';
  return special[Math.floor(Math.random() * special.length)];
}

function randomNumber() {
  const number = '0123456789';
  return number[Math.floor(Math.random() * number.length)];
}

console.log(randomNumber());


