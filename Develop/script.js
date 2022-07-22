
  // Arrays for each key-value listed above
var fullList = {
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 
  special: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
}
var fullCharset = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// HERE'S THE BIG IF/ELSE FUNCTION
//Define generatePassword
function generatePassword() {
  var userLength = window.prompt("Please enter how long you would like your password to be. It must be between 8 and 128 characters.");

  // If user clicks cancel, end prompt.
  if (!userLength) {
    return;
  }

  // If the user selects a number between 8 and 128, we are good to move forward and inquire about uppercase letters. Otherwise, return.
  if (userLength >= 8 && userLength <= 128) {
    var userUpper = window.confirm("Please confirm: Would you like to include uppercase letters in your password?");
  }
  else {
    return;
  };

  // Whether or not the user includes uppercase, ask about lowercase next...
  if (userUpper == true || userUpper == false) {
    var userLower = window.confirm("Please confirm: Would you like to include lowercase letters in your password?");
  }

  // Whether or not the user includes lowercase, ask about numbers...
  if (userLower == true || userLower == false) {
    var userNumbers = window.confirm("Please confirm: Would you like to include numbers in your password?");
  }

  // Whether or not the user includes numbers, ask about special characters...
  if (userNumbers == true || userNumbers == false) {
    var userSpecial = window.confirm("Please confirm: Would you like to include special characters in your password?");
  }

  // If the user selects 'cancel' for each character type, they will be asked to try again.
  if (userUpper == false && userLower == false && userNumbers == false && userSpecial == false) {
    var errorMessage = window.confirm("You must select at least on kind of character to receive a password. Please try again.")
  }

// If the user includes any types of characters... add them to the fullCharset.
  if (userUpper == true) {
    fullCharset.push(...fullList.upper);
  }

  if (userLower == true) {
    fullCharset.push(...fullList.lower);
  }

  if (userNumbers == true) {
    fullCharset.push(...fullList.num);
  }

  if (userSpecial == true) {
    fullCharset.push(...fullList.special);
  }

    // console.log(fullCharset);


// Now the MATH.

for (var i = 0; i < fullCharset.length; i++) {
  password += fullCharset.charAt(math.floor(math.random() * fullCharset.length));
}

 // Error message moved from line 75. They either start over or return to the main screen.
if (errorMessage == true) {
  return generatePassword();
}
else {
  return;
}

}

  //what is the number they chose? 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

