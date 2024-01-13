// 1. Write a JavaScript program to display the current day and time in the following format.  

let day = new Date().getDay();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();
let hour = new Date().getHours();
console.log(day)

const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
console.log(days[day])
console.log(hour + ":" + minute + ":" + second);