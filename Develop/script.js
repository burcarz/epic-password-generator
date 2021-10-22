// an alert/prompt box free password generator. Giving the user all possible
// password options up front.

// WHAT THIS CODE DOES

// The user verfies what they would like their password contain,
// this is ran through a check function that recognizes the character types chosen
// these are called from global strings
// the checks are called from their corresponding html id
// the password is created from a for loop that chooses a random character from the
// generated 'full' character string.
// the length varaiable references the desired password length and is used in the function.
// Finally two additionally checks are made before revealing the password
// if no boxes are check, the password.text area is filled with an error message telling the user they must check
// at least one box. if a number below 8 or above 128 is inputted in Length, a seperate error is pushed.


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

// checkBox function that checks which checkBoxes are checked!
function checkBox() {
    // checks to see if the user has checked any of the 4 available check boxes
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
  if (length < 8 || length > 128) {
    // push new string reminding user to input a valid number option
    passwordText.value = "You need at least one character type checked to generate a password!";
  }
  else {
    // reveal generated password
    passwordText.value = password;
  }
  // checking to see if all checkboxes are unchecked
  if (!getLower.checked
    && !getUpper.checked
    && !getNumbers.checked
    && !getSymbols.checked) {
      // push new string to take html placeholder text's place 
    passwordText.value = "You need at least one character type checked to generate a password!";
    }
    else {
      // reveal generated password.
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
      // Math.random to randomize a string of approved characters of the user's desired length.
      Math.floor(Math.random() * characters.length)
      );
  }
  return password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Event listener to refresh button
refreshBtn.addEventListener("click", refreshPage);

function refreshPage() {
  // let okRefresh = confirm("do you want to reset the password generator?");
  // if (okRefresh) {
  setTimeout("location.reload(true);",100)
  ;

};