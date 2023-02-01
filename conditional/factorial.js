// 7!==7 x 6 x 5 x 4 x 3 x 2 x 1
// Problem:Find out value of 7!
var factorial = 1;
for (var i = 1; i <= 7; i++) {
  console.log(i);
  factorial = factorial * i;
}
console.log(factorial);
