/* JSON, Fetch, keys, values, array add or remove using dots. */
//1.JSON =>1. stringify 2. Parse
const student = {
  name: "Bariul",
  age: 25,
  movies: ['King Kong', 'Fast']
};
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON)
const studentObject = JSON.parse(studentJSON);
// console.log(studentObject);


//2.fetch
fetch('url')
  .then(res => res.json())
  .then(data => console.log(data));


//keys, values
const keys = object.keys(student);
const values = object.values(student);

//for
const numbers = [23, 23, 344, 234, 33, 24];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

//for of on array like object
//loop on an object using for in 


//add or remove from an array
const products = [
  { name: 'Laptop', price: 22000, brand: 'Dell', color: 'Silver' },
  { name: 'Phone', price: 220000, brand: 'Iphone', color: 'Golden' },
  { name: 'Watch', price: 2333, brand: 'Casio', color: 'Black' },
  { name: 'Sunglass', price: 399, brand: 'Rib', color: 'Red' },
  { name: 'Camera', price: 220099, brand: 'canon', color: 'Gray' },
];
const newProduct = { name: 'webcam', price: 1213, brand: 'lal' };
//copy products array and then add newProduct
const newProducts = [...products, newProduct];

//create a new array without one specific item
//remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');
