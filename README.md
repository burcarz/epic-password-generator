# An alert/prompt box free password generator. Giving the user all possible password options up front.

I was asked to create a password generator for class that allows the user to select a variety of options that will determine the outputted password.

## WHAT THIS CODE DOES

- The user verfies what they would like their password contain,
- this is ran through a check function that recognizes the character types chosen
- these are called from global strings
- the checks are called from their corresponding html id
- the password is created from a for loop that chooses a random character from the generated 'full' character string.
- the length varaiable references the desired password length and is used in the function.
- Finally two additionally checks are made before revealing the password
- if no boxes are check, the password.text area is filled with an error message telling the user they must check
- at least one box. if a number below 8 or above 128 is inputted in Length, a seperate error is pushed.
