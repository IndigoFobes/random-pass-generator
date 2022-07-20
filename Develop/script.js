// Assignment code here
  //User choices for password
var userChoice = {
  passLength: 8,
  uppercase: true,
  lowercase: true,
  numbers: true,
  specialChar: true,
}
  // Arrays for each key-value listed above
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] 
var special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
  //generatePassword function needs to be defined

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Define generatePassword
function generatePassword() {
  var userLength = window.prompt("Please enter how long you would like your password to be. It must be between 8 and 128 characters.");

  // If user clicks cancel, end prompt.
  if (!userLength) {
    return;
  }

  if (userLength >= 8 && userLength <= 128) {
    var userUpper = window.confirm("Please confirm: Would you like to include uppercase letters in your password?")
  }
  else {
    return;
  }


}




  //what is the number they chose? 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// JUST PRACTICING to get the hang of this
console.log(upper.length)

console.log(upper[1])

console.log(lower[7])

console.log(special[2])

console.log(special.length)

console.log(special[24])

//console.log(num.length) 