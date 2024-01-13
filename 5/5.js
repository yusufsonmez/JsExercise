//Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

let str = "w3resource";
const lastChar = str.charAt(str.length-1);
const rotatedString = str.slice(0, -1);
const resultString = lastChar + rotatedString;

console.log(resultString);