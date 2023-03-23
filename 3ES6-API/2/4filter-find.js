/* Implement filter, find on an array of objects */

                 /* =========filter========= */
const numbers=[12,23,34,65,76,8,3,67,7,34];
const bigNumbers=numbers.filter(number=>number>20);
const tinyNumbers=numbers.filter(number=>number<20);
const evenNumbers=numbers.filter(number=>number%2===0);
// console.log(bigNumbers);
// console.log(tinyNumbers);
// console.log(evenNumbers);

const products=[
  {id:1, name:'Laptop', price:1200},
  {id:2, name:'Mobile', price:5200},
  {id:3, name:'Watch', price:4500},
  {id:4, name:'Tablet', price:21200},
];
const expensive= products.filter(product=>product.price>5000);
// console.log(expensive);

                   /* ==========find=========== */
const numbers1=[16,23,34,65,76,8,3,67,7,34];
const eight=numbers1.find(number=>number%8===0);
// console.log(eight); //get first one 

const products1=[
  {id:1, name:'Laptop', price:1200},
  {id:1, name:'Laptop', price:1000},
  {id:2, name:'Mobile', price:5200},
  {id:3, name:'Watch', price:4500},
  {id:4, name:'Tablet', price:21200},
];
const cheap=products1.find(product=>product.price<4000);
console.log(cheap); //get the first one