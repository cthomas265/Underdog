// Assignment code here

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('result');
const symbolEl = document.getElementById('result');

// functions
const randomFunc = {
  lower: RandomLower,
  upper: RandomUpper,
  number: RandomNumber,
  symbol: RandomSymbols,
}

function RandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function RandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function RandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function RandomSymbols () {
  const symbols = '/*-+.?<>;:"|{[}]!@#%$^&'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateEl = document.querySelector("#generate");

const length = +lengthEl;
const hasLower = lowercaseEl;
const hasUpper = uppercaseEl;
const hasNumber = numberEl;
const hasSymbol = symbolEl;

// Add event listener to generate button
generateEl.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}



  // start window prompts
  function generatePassword () {

    let generatePassword = '';

    enter = window.prompt("How characters between 8 and 129?");
  
    if(!enter){
      alert("Value not accepted")
    } else if (enter < 8 || enter > 128) {
      window.prompt("Please enter a number between 8 and 129!")

    } else {
      window.prompt("Would you like lowercase letters?")

    } else {
      window.prompt("Would you like uppercase letters?")
    }

  }