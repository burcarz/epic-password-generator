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
    // checks to see if the user has checked any of the 4 available check boxes, add characters if yes
    getLower.checked ? (full += lowerCase) : "";
    getUpper.checked ? (full += upperCase) : "";
    getNumbers.checked ? (full += numbers) : "";
    getSymbols.checked ? (full += symbols) : "";

      return full;
}

// Write password to the #password input
function writePassword() {
  // create fresh instance of full incase user removed desired characters from new password.
  full = '';

  // call the global empty string full as characters
  let checker = checkBox();
  let characters = full;

  let password = generatePassword(length.value, characters);
  let passwordText = document.querySelector("#password");
  passwordText.value = generatePassword(length.value, characters);

  if (length.value < 8 || length.value > 128) {
    // push new string reminding user to input a valid number option
    passwordText.value = "Passwords must be between 8 and 128 characters";
  }
  // checking to see if all checkboxes are unchecked
  if (!getLower.checked
    && !getUpper.checked
    && !getNumbers.checked
    && !getSymbols.checked) {
      // push new string to take html placeholder text's place 
    passwordText.value = "You need at least one character type checked to generate a password!";
    }
    console.log(full);
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