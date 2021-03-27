// Assignment Code
var generateBtn = document.querySelector("#generate");


 // Variables with the characters the password might have
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "f", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z",];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "|", "}", "{", "[", "]", "\\", ":", "?", ">", "<", ".", "/", "-", "=", ];



// function with the variables
function createPassword () {
  var passwordLength = prompt('How many characters do you want your password to be?');

  if (passwordLength < 8 || passwordLength > 128 ) {
    alert('Password must be between 8 and 128 characters');
    createPassword();
  }
  if (isNaN(passwordLength)=== true) { 
    alert('This needs to be a number');
    createPassword();
  }

  if (passwordLength >= 8 && passwordLength <= 128) {
    confirm('Your password is being created with ' + passwordLength + ' characters');
  }

  var containsLowercase = confirm('Do you want your password to contain lowercase?');
  var containsUppercase = confirm('Do you want your password to contain uppercase?');
  var containsNumbers = confirm('Do you want your password to contain numbers?');
  var containsSpecialCharacters = confirm('Do you want your password to contain special characters?');

  if (
    containsLowercase === false &&
    containsUppercase === false &&
    containsNumbers === false &&
    containsSpecialCharacters === false 
  ) {
    alert("Select at least one character");
    createPassword();
  }

  var userChoices = {
    passwordLength: passwordLength,
    containsLowercase: containsLowercase,
    containsUppercase: containsUppercase,
    containsNumbers: containsNumbers,
    containsSpecialCharacters: containsSpecialCharacters
  };
  return userChoices;
}

// Random function for each character the password might have

function randomLowercase () {
  var lowerletter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "f", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z",];
  return lowerletter[(Math.floor(Math.random() * lowerletter.length))];
}

function randomUppercase () {
  var upperletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];
  return upperletter[(Math.floor(Math.random() * upperletter.length))];
}

function randomNumbers () {
  var quantity = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
  return quantity[(Math.floor(Math.random() * quantity.length))];
}

function randomCharacters () {
  var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "|", "}", "{", "[", "]", "\\", ":", "?", ">", "<", ".", "/", "-", "=", ];
  return characters[(Math.floor(Math.random() * characters.length))];
}

// Funcion to write the password based in the user input
// Write password to the #password input //password is undefined
    
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordCharacters = createPassword();
  var password = "";
  var userResults = 0;
  var passwordLength = passwordCharacters.passwordLength;
  console.log(passwordLength)
  var containsLowercase = passwordCharacters.containsLowercase;
  console.log(containsLowercase);
  var containsUppercase = passwordCharacters.containsUppercase;
  console.log(containsUppercase);
  var containsNumbers = passwordCharacters.containsNumbers;
  console.log(containsNumbers);
  var containsSpecialCharacters = passwordCharacters.containsSpecialCharacters; 

  for(var i = 0; i < passwordLength; i++){
    if (containsLowercase) { 
      password += randomLowercase();
      userResults++;
    }
    if (containsUppercase) { 
      password += randomUppercase();
      userResults++;
    }
    if (containsNumbers) { 
      password += randomNumbers();
      userResults++;
    }
    if (containsSpecialCharacters) { 
      password += randomCharacters();
      userResults++;
    }
    userResults = password.slice(0, passwordLength);
    console.log(userResults);
  }
  return userResults;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);