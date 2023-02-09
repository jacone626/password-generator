// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//If you click on the button, then prompt for password length, include lowercase, include uppercase, numbers, and special characters.
//once input is validated, password is generated on page or in alert

generateBtn.addEventListener("click", passwordPrompt);

/*var numberOfCharacters = 129
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacter = "!@#$%^&*()"*/

function passwordPrompt() {
  var numberOfCharacters = prompt("How many characters?")

  if (numberOfCharacters > 7 && numberOfCharacters < 129) {
    numberOfCharacters == true
  }
  else {
    numberOfCharacters == false
    alert("The password must be between 8 and 128 characters")
  }

  var uppercase = prompt("Do you want uppercase letters? (yes or no)")

  if(uppercase == "yes") {
    uppercase == "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  
  if (uppercase == "no") {
    uppercase == ""
  }

var lowercase = prompt("Do you want lowercase letters? (yes or no)")


if(lowercase == "yes") {
  lowercase == "abcdefghijklmnopqrstuvwxyz"
}

if (lowercase == "no") {
  lowercase == ""
}

var numbers = prompt("Do you want numbers? (yes or no)")

if(numbers == "yes") {
  numbers == "0123456789"
}

if (numbers == "no") {
  numbers == ""
}

var specialCharacter = prompt("Do you want any special characters? (yes or no)")

if(specialCharacter== "yes") {
  specialCharacter == "0!@#$%^&*()"
}

if (specialCharacter == "no") {
  specialCharacter == ""
}
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
  var length = 129,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
      retVal = "";
  for (var i = 0, n = charset.length; i < length && i > 7; i++) {
      retVal += charset.charAt(Math.random() * n);
  }
  return retVal;
}

console.log(generatePassword)


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var password = generateString(8);
var passwordText = document.querySelector("#password");

passwordText.value = password;