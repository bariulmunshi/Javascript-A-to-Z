/* Arrow function, multiple parameter, function body */
// Traditional function syntax
/* function add(a, b) {
  return a + b;
  }
  // Arrow function syntax
  const add = (a, b) => {
  return a + b;
  }; */
  // Arrow function syntax (shorter version with implicit return) const add = (a, b) => a + b;

//function declaration
function add(first, second){
  const total=first+second;
  return total;
}
//function expression in variable
const add1= function add1(first, second){
  const total=first+second;
  return total;
}
//function expression with anonymous function
const add2=function (first, second){
  const total=first+second;
  return total;
}

function add4(first,second){
  return first+second; 
}
const add5=function(first,second){
  return first+second;
}

// arrow function(shortcut)
const add6=(first,second)=>first+second;
const result=add6(12,12);
console.log(result);

/* More Arrow functions and big arrow function */
const getFullName=(first,last)=>first +' '+last;
const multiply=(a,b)=>a*b; 
const result1=multiply(7,8);
console.log(result1);

const addAll=(a,b,c,d,e,f,g)=a+b+c+d+e+f+g; //multi parameter arrow function
const getPie=()=>3.14; //no parameter arrow function
const doubleIt=(num)=>num*2; //one parameter

//one parameter simple version
const fiveTimes=num=>num*5;

//multiline arrow function with return(required)
const doMath=(x,y,z)=>{
  const firstSum=x+y;
  const secondSum=y+z;
  const multiplyResult=firstSum*secondSum;
  const result=multiplyResult/2;
  return result;
}
const y = x => x*x; 
const z = y(5);
console.log(z);