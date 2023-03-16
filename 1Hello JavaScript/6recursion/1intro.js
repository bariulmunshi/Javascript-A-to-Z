/* Recursion
A function that calls itself is known as a recursive function and the approach  is called recursion.
Recursion makes the code clean, simpler and shorter.
কোন একটা ফাংশনের ভেতর থেকে সে ফাংশনকে যদি আবার কল করা হয় তাকে recursion bole.
 */
// Understand recursion using sum of numbers
/* let sum=0;
for(let i=1; i<=5;i++){
  sum=sum+i;
}
console.log(sum); */

/* let sum=0;
for(let i=5; i>=1;i--){
  sum=sum+i;
}
console.log(sum); */

/* function sum(i){ //main function
  if(i==1){
    return 1;
  }
  // console.log(i);
  return i+sum(i-1);  //sub function
}
const result=sum(5);
console.log(result); */

// Factorial Recursion using a for loop concept
// 7!==7 x 6 x 5 x 4 x 3 x 2 x 1
// Problem:Find out value of 7!
/* var factorial = 1;
for (var i = 1; i <= 5; i++) {
  console.log(i);
  factorial = factorial * i;
}
console.log(factorial); */

function factorial(i){
  if(i==1){
    return 1;
  }
  return i*factorial(i-1);
}
const result=factorial(5);
console.log(result);

