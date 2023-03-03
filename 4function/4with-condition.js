// Even Number checking
function isNumberEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
let mynumber = 200;
const isMyNumberEven = isNumberEven(mynumber);
console.log("is my number even:", isMyNumberEven);

let hernumber = 201;
const isHerNumberEven = isNumberEven(hernumber);
console.log("is her number even:", isHerNumberEven);

// odd Number checking
function isNumberOdd(number) {
  if (number % 2 != 0) {
    return true;
  }
  return false;
}
let myNumber = 200;
const isMyNumberOdd = isNumberOdd(myNumber);
console.log("is my number odd:", isMyNumberOdd);

let herNumber = 201;
const isHerNumberOdd = isNumberOdd(herNumber);
console.log("is her number odd:", isHerNumberOdd);

// Is this year is a leap year or not
function isLeapYear(year) {
  if (year % 4 == 0) {
    return true;
  }
  return false;
}
const myYear = 2023;
const isMyYearleapYear = isLeapYear(myYear);
console.log("is my year leap year:", isMyYearleapYear);

const herYear = 2024;
const isHerYearleapYear = isLeapYear(herYear);
console.log("is her year leap year:", isHerYearleapYear);
