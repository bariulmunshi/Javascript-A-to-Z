/* template string, arrow function, spread operator */
const numbers=[89,35,98,12];
const student={
  name:"Bariul",
  age:25,
  movies:['King Kong', 'Fast']
};

//1. Template String
const about=`My Name is  ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//2. Arrow Function
const getFiftyFive=()=>55; //simple arrow
const addSixtyFive=num=>num+65;
const isEven=x=>x%2===0; //single parameter
const addThree=(x,y,z)=>x+y+z;
const doMath=(num1,num2)=>{ //multiline
  const sum=num1+num2;
  return sum;
}

//3.spread operator
const newNumbers=[...numbers];

numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(numbers);
console.log(newNumbers);

//create a new array from an older array and add an element
const currentNumbers=[...numbers,55];
// console.log(currentNumbers);

/* Array methods map filter find forEach */
const products=[
  {name:'Laptop',price:22000,brand:'Dell',color:'Silver'},
  {name:'Phone',price:220000,brand:'Iphone',color:'Golden'},
  {name:'Watch',price:2333,brand:'Casio',color:'Black'},
  {name:'Sunglass',price:399,brand:'Rib',color:'Red'},
  {name:'Camera',price:220099,brand:'canon',color:'Gray'},
];
const brands=products.map(product=>product.brand);
// console.log(brands);
const prices=products.map(product=>product.price);
// console.log(prices);


//2.forEach
products.forEach(product=>console.log(product));
products.forEach(product=>console.log(product.color));

products.forEach(product=>{

})

//3.filter
const cheap=products.filter(product=>product.price<=220000);
// console.log(cheap);

const specificName=products.filter(p=>p.name.includes('n'));
// console.log(specificName);

//4.find
const special=products.find(p=>p.name.includes('n'));
console.log(special);

/* Array and Object Destructuring */
const numbers1=[12,23];
// const x=numbers[0];
// const y=numbers[1];
// const [x,y]=[12,23];
const [x,y]=numbers;
function boxify(num1,num2){
  const nums=[num1,num2];
  return nums;
}
// const [first,second]=[93,23]
const [first,second]=boxify[93,23];
console.log(boxify(23,22));

//object Destructuring
const {name,age}={name:'Bari',age:24};
const {name,age}={salary:23223, id:1,name:'Bari',age:24};
const employee={
  ide:'VS Code',
  Designation:'Developer',
  machine:'Mac',
  language:['html','js','python'],
  specification:{
    height:23,
    weight:66,
    address:'Kumarkhali',
    drink:'water',
    watch:{
      color:'black',
      price:234,
      brand:'Grameen'
    }
  }
}
const {machine,ide}=employee;
const {weight,address}=employee.specification;
const {brand}=employee.specification?.watch;




