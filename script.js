// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = ""

// Write password to the #password input

//If you click on the button, then prompt for password length, include lowercase, include uppercase, numbers, and special characters.
//once input is validated, password is generated on page or in alert

generateBtn.addEventListener("click", passwordPrompt);

/*
var numberOfCharacters = 129
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacter = "!@#$%^&*()?/"
*/

function passwordPrompt() {
  var numberOfCharacters = 0;

  while (numberOfCharacters < 8 || numberOfCharacters > 128) {
    numberOfCharacters = prompt("How many characters?")
    if (numberOfCharacters < 8) {
      alert("The password must contain at least 8 characters.");
    }

    else if (numberOfCharacters > 128) {
      alert("The password must contain fewer than 129 characters")
    }
  }

  var uppercase = confirm("Click OK to confirm uppercase characters?")

  if (uppercase == true) {
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  else {
    uppercase = ""
  }

  var lowercase = confirm("Click OK to confirm lowercase characters?")


  if (lowercase == true) {
    lowercase = "abcdefghijklmnopqrstuvwxyz"
  }
  else {
    lowercase = ""
  }

  var numbers = confirm("Click OK to include numeric characters?")

  if (numbers == true) {
    numbers = "0123456789"
  }
  else {
    numbers = ""
  }

  var specialCharacter = confirm("Click OK to include special characters?")

  if (specialCharacter == true) {
    specialCharacter = "!@#$%^&*()/?"
  }

  else {
    specialCharacter = ""
  }

characters = (uppercase + lowercase + numbers + specialCharacter)

writePassword(numberOfCharacters);
}


function writePassword(numberOfCharacters) {
  var password = generateString(numberOfCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generateString(length) {
  var result = "";
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
