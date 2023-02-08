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

document.querySelector("generate").addEventListener("click", writePassword);

function writePassword() {
  var passwordPrompt = prompt("Please provide a password");
  alert(passwordPrompt)
}