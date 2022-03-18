// Assignment code here
//Generator functions - https://www.net-comber.com/charset.html

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('result');
const symbolEl = document.getElementById('result');
const generateEl = document.getElementById('result');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbols,
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbols () {
  const symbols = '/*-+.?<>;:"|{[}]!@#%$^&'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower())
