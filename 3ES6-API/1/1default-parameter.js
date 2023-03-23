/* Function default parameter for not provided values*/
/* function add(first, second=10){
  const total=first+second;
  return total;
}
const result =add(10);
console.log(result); */

/* function fullName(first,last='Munshi'){
  const name=first+' '+last;
  return name;
}
const name=fullName('Bariul');
console.log(name);
 */
function greet(name = 'World', greeting = 'Hello') {
  console.log(`${greeting}, ${name}!`);
  }
  greet(); // Output: Hello, World!
  greet('Alice'); // Output: Hello, Alice!
  greet('Bob', 'Hi'); // Output: Hi, Bob!
  function getSum(a, b=9){
    return a+b;
  } 
  console.log(getSum(2, 7));