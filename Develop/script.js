// Get references html elements
let generateBtn = document.querySelector("#generate");
let refreshBtn = document.querySelector("#refresh");
// calling html checkbox elements to avoid using alertboxes/prompts
let length = document.getElementById("length");
let getUpper = document.getElementById("uppercase");
let getLower = document.getElementById("lowercase");
let getNumbers = document.getElementById("numbers");
let getSymbols = document.getElementById("symbols");
let checkVerify = document.getElementsByName("checkbox");

// declaring strings incl- numbers, symbols and upr/lwr case letters
let full = '';
let numbers = '1234567890';
let symbols = '!@#$%^&*?';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';

function checkBox() {
 
    getLower.checked ? (full += lowerCase) : "" - lowerCase;
    getUpper.checked ? (full += upperCase) : "" - upperCase;
    getNumbers.checked ? (full += numbers) : "" - numbers,
    getSymbols.checked ? (full += symbols) : "" - symbols,

      console.log(full);
      return full;
}



// Write password to the #password input
function writePassword() {
  // call the global letters variable characters
  let checker = checkBox();
  let characters = full;

  let password = generatePassword(length.value, characters);
  let passwordText = document.querySelector("#password");
  passwordText.value = generatePassword(length.value, characters);

  // checking to see if user is attempting to generate a password that is too small or too large
  if (length.value < 8 || length.value > 128) {
    passwordText.value = "You need at least one character type checked to generate a password!"
  }
  else {
    passwordText.value = password;
  }
  // checking to see if all checkboxes are unchecked
  if (!getLower.checked
    && !getUpper.checked
    && !getNumbers.checked
    && !getSymbols.checked) {
    passwordText.value = "You need at least one character type checked to generate a password!"
    }
    else {
      passwordText.value = password;
    }

};

// A Math.random function that generates a random password based on user input
let generatePassword = (length, characters) => {
  // password starts as empty string
  let password = "";
  // for loop calls the length parameter (verified by user through the html form)
  for (let i = 0; i < length; i++) {
    // for loop calls the characters parameter
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
      );
  }
  return password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

refreshBtn.addEventListener("click", refreshPage);

function refreshPage() {
  // let okRefresh = confirm("do you want to reset the password generator?");
  // if (okRefresh) {
  setTimeout("location.reload(true);",100)
  ;

};