
/* function functionName(parameters){
  //function body
  //return
} 
var returnedvalue =functionName{parameters value} // there function called to the variable ,,,
*/

//example:
/* function getAverage(assignment1,assignment2,assignment3){ //here arguments/parameters are assignment1,assigment2,assignment3
  console.log('Three numbers:',assignment1,assignment2,assignment3);
  const total=assignment1+assignment2+assignment3;
  const average=total/3;
  return average; 
}
var averageOfThree=getAverage(23,26,23); //averageOfThree get the return value after perform two task(1.set parameter value, 2.call function to the variable)
console.log('Three number average:',averageOfThree);
 */

/* Four format Function code: of javascript there one is (no return no parameter) and another is (has return no parameter) and another is (no return has parameter) and last one is (has parameter has return)
Example below: */
        //1. No return, no parameters:
function greet() {
  console.log('Hello!');
}
// call the function
greet(); // output: 'Hello!'

     /*   //2. Has return, no parameters:
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
// call the function
const randomNum = getRandomNumber();
console.log(randomNum); // output: a random number between 0 and 9 */

/*        //3. No return, has parameters:
function greet(name) {
  console.log(`Hello, ${name}!`);
}
// call the function
greet('Alice'); // output: 'Hello, Alice!' */

      /* //4. Has return, has parameters:
function sum(a, b) {
  return a + b;
}
// call the function
const result = sum(3, 5);
console.log(result); // output: 8 */
