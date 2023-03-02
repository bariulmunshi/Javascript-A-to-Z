/*There have two type data in Javascript
1.Primitive{numbers, strings, Boolean, Undefined} 
2.Non-Primitive/Composite{Object, Arrays, Function} */

var price =200;
//console.log(typeof price); //number
var price ='100';
// console.log(typeof price); //string
var isHappy=true;
// console.log(typeof isHappy); //boolean
var romantic;
console.log(typeof romantic); //undefined 

//toFixed
var num1 =0.2;
var num2 =0.3;
var sum =num1 + num2;
//sum = sum.toFixed(1); /* how much number I want to see after decimal that have to fixed and that's return  to string value */
sum =parseFloat(sum); //to fixed string value
console.log(sum);


