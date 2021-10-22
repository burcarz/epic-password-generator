// Get references html elements
let generateBtn = document.querySelector("#generate");
// calling html checkbox elements to avoid using alertboxes/prompts
let length = document.getElementById("length");
let getUpper = document.getElementById("uppercase");
let getLower = document.getElementById("lowercase");
let getNumbers = document.getElementById("numbers");
let getSymbols = document.getElementById("symbols");

// declaring strings incl- numbers, symbols and upr/lwr case letters
let numbers = [false, '1234567890'];
let symbols = [false, '!@#$%^&*?'];
let upperCase = [false, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let lowerCase = [true, 'abcdefghijklmnopqrstuvwxyz'];


// Write password to the #password input
function writePassword() {
  // call the global letters variable characters
  let characters = lowerCase;

  // verify to see that the user has checked any of the checkboxes
  // if (getLower.checked && getUpper.checked) {
  //   characters = (characters += upperCase);
  // }
  // if (getUpper.checked && !getLower.checked) {
  //   characters = (upperCase);
  // }
  // else {
  //   characters = (characters);
  // }

  // if (getNumbers.checked && get.Symbols.checked) {
  //   characters = ()
  // }

  // getNumbers.checked ? (characters += numbers) : "";
  // getSymbols.checked ? (characters += symbols) : "";

  let checkboxes = document.getElementsByName("checkbox");
  let selected = [];
  for (let i = 0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected.push(checkboxes[i].value);
    }
    console.log(checkboxes[i].value);
    console.log(selected);
  }
  if (selected = 'on') {
    console.log(true)
  }
  else if (selected = 'off') {
    console.log(false);
  }
  console.log(checkboxes);

  var password = generatePassword(length.value, characters);
  var passwordText = document.querySelector("#password");

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
let generatePassword = function(length, characters) {
  // password starts as empty string
  let password = "";
  // for loop calls the length parameter (verified by user through the html form)
  for (let i = 0; i < length; i++) {
    // for loop calls the characters parameter
    password += characters.charAt(Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
