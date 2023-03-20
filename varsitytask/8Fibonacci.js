/*write very simple Fibonacci  calculation using js code */
/* function fibonacci(n) {
  var fib = [0, 1];

  for (var i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}
console.log(fibonacci(10));  */
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

var n = 10; // The number of terms to calculate
var fib = [0, 1]; // Initialize the array with the first two terms

for (var i = 2; i <= n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2]; // Calculate the next term by adding the previous two terms
}

console.log(fib); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
