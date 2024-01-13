// 9. Write a JavaScript program to calculate the days left before Christmas.  

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let christmasDay = new Date(currentYear,11,25);
var one_day = 1000 * 60 * 60 * 24; // a day as milisecond

if(currentDate.getMonth() == 11 && currentDate.getDate() > 25){
    currentDate.setFullYear(christmasDay.getFullYear() + 1);
}

console.log(Math.ceil((christmasDay.getTime() - currentDate.getTime()) / one_day)  + " days");