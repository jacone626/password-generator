// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//If you click on the button, then prompt for password length, include lowercase, include uppercase, numbers, and special characters.
//once input is validated, password is generated on page or in alert

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var passwordPrompt = prompt("Please provide a password");
  var numberOfCharacters = prompt("How many characters?")
  var uppercase = prompt("Do you want uppercase letters?")
  var lowercase = prompt("Do you want lowercase letters?")
  var numbers = prompt("Do you want numbers?")
  var specialCharacter = prompt("Do you want any special characters?")
  alert(passwordPrompt)

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

