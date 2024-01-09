// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var passwordLength= 10;
var choiceArr= [];


// Function to prompt user for password options

function getPasswordOptions(passwordLength,) {

  choiceArr = [];
  passwordLength = parseInt(prompt("How many characters would you like your password to be? (Must be between 8 to 128 characters)"))
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid, character length has to be a number, 8 - 128. Please try again");
    return false;
  }
  if (confirm("Do you want to include uppercase?")){
  choiceArr = choiceArr.concat(upperCasedCharacters);
  }
  if (confirm("Do you want to include lowercase?")) {
  choiceArr = choiceArr.concat(lowerCasedCharacters);
  }
  if(confirm("Do you want to include special numbers?")) {
  choiceArr = choiceArr.concat(specialCharacters);
  }
  if (confirm("Do you want to include numbers?")){
  choiceArr = choiceArr.concat(numericCharacters);
}

  return true;
}


//  // Function for getting a random element from an array
// function getRandom(arr) {
// }

 // Function to generate password with user input
function generatePassword() {
  var password = "";
for ( var index = 0; index < passwordLength; index++) {
     var randomIndex = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomIndex];
}
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var validPrompt= getPasswordOptions();
  var passwordText = document.querySelector('#password');
  if (validPrompt) {
  var newpassword = generatePassword();
  passwordText.value = newpassword;
  } else{
    passwordText.value = "";

  }
   
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


    