/* function sumOfNumbers(number){
   let sum=0;
  for(let i=1; i<= 7;i++){
    sum=sum+i;
    console.log(i,sum);
  }
  return sum;
}
const number=6;
const result=sumOfNumbers(number); */

// Find out value of 5! & 6! Using function and for loop by multiple call
function getFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
let firstFactorialNumber = 5;
let valueFactorialOfMy = getFactorial(firstFactorialNumber);
console.log("factorial value of 5 is:", valueFactorialOfMy);
let secondFactorialNumber = 7;
let valueFactorialOfHer = getFactorial(secondFactorialNumber);
console.log("factorial value of 6 is:", valueFactorialOfHer);

// Find out value of 5! & 6! Using function and while loop by multiple call
/* function getFactorial(value) {
  let result = 1;
  let i = 1;
  while (i <= value) {
    result = result * i;
    i++;
  }
  return result;
}
const myFactorial = 5;
const myFactorialresult = getFactorial(myFactorial);
console.log("Value of 5! is:", myFactorialresult);
const herFactorial = 6;
const herFactorialresult = getFactorial(herFactorial);
console.log("Value of 6! is:", herFactorialresult); */

// For loop reverse
/* function getFactorial3(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
let myfactorialValue1 = 5;
let myfactorialValueresult1 = getFactorial3(myfactorialValue1);
console.log("Value of 5! reverse is:", myfactorialValueresult1); */
