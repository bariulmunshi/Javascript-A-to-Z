/* Jim is a meritorious student. He secures first place in his class all the time. This year, Dela has joined his class. She was also a topper at her previous school. On the day of result publication, the teacher comes into the class with a delicious cake and says that "Jim and Dela,whoever is a topper, will get this tasty cake." Can you find out who will get this cake? 
Input-1-Jim got marks:84,75
Input-2-Dela got marks:69, 97*/

//compare between two
/* const jim=84;
const dela=75;
if(jim>dela){
  console.log('Jim will get the cake');
}
else{
  console.log('Dela you will get the cake');
} */

/* //compare between three
const jim=84;
const dela=99;
const chinku=77;

if(jim>dela && jim>chinku){
  console.log('Jim will get the cake');
}
else if(dela>jim && dela >chinku){
  console.log("Dela will get the cake");
}
else{
  console.log('chinku will get the cake');
} */

/* //find min max
var max=Math.max(32,64,3212,674,2345);
console.log(max);
var min =Math.min(23,25,44,245);
console.log(min); */


/* //write a function that will take 3 numbers will return the max number using if-elase
function findMax(num1, num2, num3) {
  let max = num1;
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }
  return max;
}
const max = findMax(10, 20, 15);
console.log(max); // Output: 20 */


/* //write a function that will take 3 numbers will return the max number using math.min and math.max
function findMax(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
const maxNum = findMax(13, 79, 45);
console.log(maxNum); // Output: 79 */




function add(a, b){
  return a + b;
}
console.log(add("adam" + "eve"))
