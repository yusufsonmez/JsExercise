// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

 function leapyear(year) {
    // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyear(2016)); // Expected output: true
console.log(leapyear(2000)); // Expected output: true
console.log(leapyear(1700)); // Expected output: false
console.log(leapyear(1800)); // Expected output: false
console.log(leapyear(100));  // Expected output: false