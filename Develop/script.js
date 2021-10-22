// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
let numbers = '1234567890';
let specialCharacters = ['!@#$%^&*?'];
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let main = (numbers + specialCharacters + letters);
// let charactersLength = passwordLength();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


};
let passwordLength = function() {
let characters = window.prompt("How many character's do you want your password to be?");
let charLength = parseInt(characters);
        if (charLength < 8 || charLength > 128) {
        alert("The password needs to be between 8 and 128 characters!");
        return passwordLength();
        } else {
        return characters
}
}

// ask the user if they'd like upper or lower case letters in their password
let upperSelect = function () {
  let upperCase = confirm("would you like uppercase letters in your password?");

    console.log(upperCase);
    return(upperCase);
};

let lowerSelect = function() {
  let lowerCase = confirm("Would you like lowercase letters in your password?");

    console.log(lowerCase);
    return(lowerCase);
};

let verifySelect = function() {
  let number = confirm("Would you like numbers in your password?");

  let special = confirm("Would you like special characters in your password?");
  if (special === true && number === true) {
    main = (letters += numbers += specialCharacters);
    console.log(main);
    return main
  }
  else if (special === true && number === false) {
    main = (letters += specialCharacters);
    console.log(main);
    return main
  }
  else if (number === true && special === false) {
    main = (letters += numbers);
    console.log(main);
    return main
  }
  else {
    main = letters;
    console.log(main);
    return main
  }
}

let generatePassword = function() {
  // use the passwordLength function to create a password of the desired length (string of letters)
  let characterLength = passwordLength();
  let numberSpecial = verifySelect();

    let makeLength = function(length) {
    let result = '';
    var passwordLength = main.length;
    for ( let i = 0; i < length; i++) {
      result += main.charAt(Math.floor(Math.random() * passwordLength));
    }
    console.log(result);
    return result;
  }
  console.log(makeLength(passwordLength));

  // call the makeLength function, refer to as (password)details
  let details = makeLength(passwordLength);
  console.log(details);

  // lowercase and uppercase selection
  let upper = upperSelect();
  let lower = lowerSelect();
  if (upper === true && lower === true) {
    console.log(makeLength(characterLength));
    return details;
  }

  else if (upper === false && lower === true) {
    console.log(details.toLowerCase());
    return details.toLowerCase();
  }

  else if (upper === true && lower === false) {
    console.log(details.toUpperCase());
    return details.toUpperCase();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
