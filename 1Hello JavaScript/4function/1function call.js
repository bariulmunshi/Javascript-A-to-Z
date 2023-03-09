// function declaration and multiple declaration
function startFan() {
  console.log("walk to the switch ");                                                                                   
  console.log("press the switch");
}
startFan();
console.log("Let's play video Game");
console.log("Let's go to the market ");
startFan();
startFan();

// Now inch to feet conversations by function call
function inchesToFeet(inches) {
  var feet = inches / 12;
  return feet;
}
var mySetInches = 154;
var feet = inchesToFeet(mySetInches);
console.log("My set Feet", feet);

var hisSetInches = 500;
var feet = inchesToFeet(hisSetInches);
console.log("His set Feet", feet);

var herSetInches = 1000;
var feet = inchesToFeet(herSetInches);
console.log("Her set Feet", feet);

/* You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using if-else. */
// Define the total score for each student
let myTotalScore = 85;
let tomTotalScore = 66;
let janeTotalScore = 95;
let peterTotalScore = 56;
let johnTotalScore = 40;

// Define a function to calculate the grade based on the total score
function calculateGrade(totalScore) {
  if (totalScore >= 80) {
    return "A";
  } else if (totalScore >= 60) {
    return "B";
  } else if (totalScore >= 50) {
    return "C";
  } else if (totalScore >= 40) {
    return "D";
  } else {
    return "F";
  }
}

// Calculate and print the grade for each student
console.log("My grade: " + calculateGrade(myTotalScore));
console.log("Tom's grade: " + calculateGrade(tomTotalScore));
console.log("Jane's grade: " + calculateGrade(janeTotalScore));
console.log("Peter's grade: " + calculateGrade(peterTotalScore));
console.log("John's grade: " + calculateGrade(johnTotalScore));
