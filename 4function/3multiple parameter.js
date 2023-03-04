           // without return
/* function sum(a,b,c,d,e){
  console.log(a,b,c,d,e);
  var sum=a+b+c+d+e;
  console.log(sum);
}
sum(12,12,23,34) */
// and 
/* function sum(a,b,c,d,e){
  console.log(a,b,c,d,e);
  var sum=a+b+c+d+e;
  console.log(sum);
}
sum(12,12,23,34,1) */

// addition of two numbers by using function with return
function addTwoNumbers(number1, number2) {
  console.log("Entered two numbers:", number1, number2);
  var total = number1 + number2;
  return total;
}
var firstNumber = 25;
var secondNumber = 25;
// var result = addTwoNumbers(firstNumber, secondNumber);
// console.log("Total  after Addition of Two numbers:", result);
// or
console.log("Total  after Addition of Two numbers:",addTwoNumbers(firstNumber, secondNumber));

// multiplication of two numbers by using function

/* function multiplyTwoNumbers(number1, number2) {
  console.log("Entered two numbers:", number1, number2);
  var result = number1 * number2;
  return result;
}
var firstNumber = 10;
var secondNumber = 10;
var resultOfTwoNumbers = multiplyTwoNumbers(firstNumber, secondNumber);
console.log("Total  after Multiplication of Two numbers:", resultOfTwoNumbers); */
