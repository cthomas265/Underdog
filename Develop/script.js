// Assignment code here
 //variables
var lower = "abcdefdhijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "1234567890"
var symbol = "!@#$&{}*()_-+=[];:'`~%^<,>.?/|"
var passLength
var uppercase
var symbolCheck
var numberCheck
var setChar = lower;
console.log(setChar)


var generateBtn = document.querySelector("#generate");

// collect options, loop if not valid
function lengthEl(){
  passLength = prompt("Enter a number between 8 and 128 for password length.");
  if (isNaN(passLength)) {
    alert("Please enter a number between 8 and 128.");
    lengthEl();
  } else if (passLength<8 || passLength>128) {
    alert("That is not between 8 and 128.");
    lengthEl();
  }
}


function setUpper() {
  uppercase = prompt("Would you like your password to include uppercase?");
  if (uppercase === "YES" || uppercase === "yes" || uppercase === "Yes") {
    uppercase = true;
    return uppercase;
  } else if (uppercase === "NO" || uppercase === "no" || uppercase === "No") {
  uppercase = false;
  return uppercase;
  } else {
  alert("Yes ... or ... No");
  setUpper();
  }
  return uppercase
}
function setSymbol() {
  symbolCheck = prompt("How about symbols?");
  if (symbolCheck === "YES" || symbolCheck === "yes" || symbolCheck === "Yes") {
    symbolCheck = true;
    return symbolCheck;
  } else if (symbolCheck === "NO" || symbolCheck === "no" || symbolCheck === "No") {
    symbolCheck = false;
    return symbolCheck;
  } else {
  alert("Please respond with Yes or No.");
  setSymbol();
  }
  return symbolCheck
}
function setNumber() {
  numberCheck = prompt("Numbers?");
  if (numberCheck === "YES" || numberCheck === "yes" || numberCheck === "Yes") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "NO" || numberCheck === "no" || numberCheck === "No") {
    numberCheck = false;
    return numberCheck;
  } else {
    alert("Please respond with Yes or No.");
  setNumber();
  }
  return numberCheck
}

function generatePassword() {
  lengthEl();
  console.log(lengthEl);
  setUpper();
  console.log(setUpper);
  setSymbol();
  console.log(setSymbol);
  setNumber();
  console.log(setNumber);
   // verify
  if (numberCheck) {
    setChar += number;
  } 
  if (uppercase) {
    setChar += upper;
  }
  if (symbolCheck) {
    setChar += symbol;
  }
  console.log(setChar)

  var result = "";
  for(var i = 0; i < passLength; i++) {
    result += setChar.charAt(Math.floor(Math.random() * setChar.length))
  } 
  console.log(result)
  return result;
}

// Write password to the #password input
  function writePassword() {
    var password = [];
    console.log(password)
  password = generatePassword();
  console.log(password)
  // password = password.replace('[object HTMLTextAreaElement]', '');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }


// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
