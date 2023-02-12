// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = ""


generateBtn.addEventListener("click", passwordPrompt);


//This function creates the different prompts for the password.
function passwordPrompt() {
  var numberOfCharacters = 0;

  while (numberOfCharacters < 8 || numberOfCharacters > 128) {
    numberOfCharacters = prompt("How many characters would you like your password to contain?")
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
