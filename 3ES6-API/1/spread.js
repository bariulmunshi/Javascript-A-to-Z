/* Spread operator, array max, copy arrays */
const max=Math.max(12,134,34,65);
// console.log(max);
const numbers=[23,12,43,54,45]; 
const largest=Math.max(...numbers);
console.log(...numbers); // we set ... to get number from array
console.log(largest);

const num2=[...numbers];
num2.push(333);
console.log(num2);
const num3=[12,1212,12, ...numbers, 12122,111,122233];
console.log(num3);