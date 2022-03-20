// Assignment code here
 //set up variables - length, upper, lower, numbers, characters
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ['!', '\"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', "/", ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', "`", "{", '|', "}", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var password = "";
var passArray = [];

 //set up window prompts
function generatePassword() {

  //prompt length
  function lengthEl () {
  var lengthEl = window.prompt("Enter a number between 8-128 for length of password.");

  if (lengthEl < 8 || lengthEl > 128 || isNaN(lengthEl) || lengthEl === "") {
    alert("Please enter a number between 8 and 128.");
    lengthEl();
  } else
  console.log(lengthEl);
  trueLower();
}

 // verify
  function trueLower () {
  var truelower = confirm('Click OK if lowercase is wanted.');
  if (trueLower) {
    console.log("include lowercase.");
    trueUpper();
  } else {
    console.log("do not include lowercase");
    trueUpper();
  }
  }
  function trueUpper () {
  var trueupper = confirm('Click OK if uppercase is wanted.');
  if (trueUpper) {
    console.log("include uppercase.");
    trueNumber();
  } else {
    console.log("do not include uppercase");
    trueNumber();
  }
  }
  function trueNumber () {
  var truenumber = confirm('Click OK if a number is wanted.');
  if (trueNumber) {
    console.log("include a number.");
    trueSymbol();
  } else {
    console.log("do not include a number");
    trueSymbol();
  }
  }
  function trueSymbol () {
  var symbol = confirm('Click OK if symbols is wanted.');
  if (trueSymbol) {
    console.log("include symbols.");
  } else {
    console.log("do not include symbols");
  }  
  }

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);