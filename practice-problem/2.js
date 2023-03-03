                  //Based On Array and condition

/* Problem-1: You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */
 var fruits=['Apple', 'Banana', 'Orange'];
 console.log(fruits.indexOf('Banana'));
fruits[1]='Mango';
 console.log(fruits);

/* Problem-2: You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using if-else. */
// Define the total score for each student
let yourTotalScore = 85;
let tomTotalScore = 66;
let janeTotalScore = 95;
let peterTotalScore = 56;
let johnTotalScore = 40;

// Calculate and print the grade for each student
if (yourTotalScore >= 80) {
  console.log("Your grade: A");
} else if (yourTotalScore >= 60) {
  console.log("Your grade: B");
} else if (yourTotalScore >= 50) {
  console.log("Your grade: C");
} else if (yourTotalScore >= 40) {
  console.log("Your grade: D");
} else {
  console.log("Your grade: F");
}

if (tomTotalScore >= 80) {
  console.log("Tom's grade: A");
} else if (tomTotalScore >= 60) {
  console.log("Tom's grade: B");
} else if (tomTotalScore >= 50) {
  console.log("Tom's grade: C");
} else if (tomTotalScore >= 40) {
  console.log("Tom's grade: D");
} else {
  console.log("Tom's grade: F");
}

if (janeTotalScore >= 80) {
  console.log("Jane's grade: A");
} else if (janeTotalScore >= 60) {
  console.log("Jane's grade: B");
} else if (janeTotalScore >= 50) {
  console.log("Jane's grade: C");
} else if (janeTotalScore >= 40) {
  console.log("Jane's grade: D");
} else {
  console.log("Jane's grade: F");
}

if (peterTotalScore >= 80) {
  console.log("Peter's grade: A");
} else if (peterTotalScore >= 60) {
  console.log("Peter's grade: B");
} else if (peterTotalScore >= 50) {
  console.log("Peter's grade: C");
} else if (peterTotalScore >= 40) {
  console.log("Peter's grade: D");
} else {
  console.log("Peter's grade: F");
}

if (johnTotalScore >= 80) {
  console.log("John's grade: A");
} else if (johnTotalScore >= 60) {
  console.log("John's grade: B");
} else if (johnTotalScore >= 50) {
  console.log("John's grade: C");
} else if (johnTotalScore >= 40) {
  console.log("John's grade: D");
} else {
  console.log("John's grade: F");
}




/* Problem-3: You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.*/
// Define the three numbers
let num1 = 13;
let num2 = 79;
let num3 = 45;

// Check which number is largest using if-else
if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the largest number.");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is the largest number.");
} else {
  console.log(num3 + " is the largest number.");
}



/*Problem-4 You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
Isosceles => two sides are equal */
// Define the sides of the triangle
let side1 = 9;
let side2 = 8;
let side3 = 9;

// Check if the triangle is isosceles using if-else
if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("The triangle is isosceles.");
} else {
  console.log("The triangle is not isosceles.");
}
