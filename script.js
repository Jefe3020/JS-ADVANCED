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

// Function to prompt user for password options
// collection user prefrences
function getPasswordOptions() {
  var amountOfLetters = prompt ("How many characters in your password")
  console.log('amountOfLetters', amountOfLetters);

  if (isNaN(amountOfLetters)) {
    alert ("Hey this is not a number");
    getPasswordOptions();
  }

  if (amountOfLetters < 8 || amountOfLetters > 128) {
    alert ("Hey your password needs to be between 8 and 128 characters")
    getPasswordOptions()

  } 
var useUpper = confirm ("Do you want to use upper case Letters?")
var useLowerCase = confirm ("Do you want to use lower case Letters?")
var specialCharacters = confirm ("Do you want to use special characters?")

// if statement to make sure user says true to at least one character type
// store all of the variables in an object
// return that object
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var userData = getPasswordOptions();






  // end result of this function will be your password

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);