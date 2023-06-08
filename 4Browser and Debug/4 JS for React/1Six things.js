// 1. How to declare a variable using let and const
const  fatherName='Sabbir';
let season='Rainy';
season='winter'

//2. Condition
// 6 basic condition >,<,===,!==,<=,>= 
// multiple conditions: &&, ||, 

//3. Array{index, length, push,}
const numbers=[89,35,98,12];
numbers=[0]=3;

//4. Loop

//5. Function
  function multiply(num1, num2){
    const result=num1*num2;
    return result;
  }
  const output=multiply(12,12);
//6. Object
//3 ways to access object properties
const student={
  name:"Bariul",
  age:25,
  movies:['King Kong', 'Fast']
}
const myVariable='age';
console.log(student.age); //direct by property
console.log(student['age']); //access via property name string
console.log(student[myVariable]); //access via Property name in a variable