// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  

let value = Math.floor(Math.random() * 10) + 1; // 1 ile 10 arasında rastgele bir tam sayı üretir
const guess = prompt('Guess the number between 1 and 10 inclusive');

if (parseInt(guess) === value) {
  document.getElementById("demo").innerHTML =
  "Tahmin doğru: " + guess;
} else {
  document.getElementById("demo").innerHTML =
  "Tahmin yanlış: " + value;
}
