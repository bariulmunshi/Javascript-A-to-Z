// addition of two numbers by using function
function addTwoNumbers(number1, number2) {
  console.log("Entered two numbers:", number1, number2);
  var tatal = number1 + number2;
  return tatal;
}
var firstNumber = 25;
var secondNumber = 25;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log("Total  after Addition of Two numbers:", result);

// multiplication of two numbers by using function

function multiplyTwoNumbers(number1, number2) {
  console.log("Entered two numbers:", number1, number2);
  var result = number1 * number2;
  return result;
}
var firstNumber = 10;
var secondNumber = 10;
var resultOfTwoNumbers = multiplyTwoNumbers(firstNumber, secondNumber);
console.log("Total  after Multiplication of Two numbers:", resultOfTwoNumbers);
