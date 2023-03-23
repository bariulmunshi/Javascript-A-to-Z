/* Object and Array Destructuring */
/* const fish={
  name:'Hilsha king',
  address:'chadpur',
  color:'silver',
  phone: '32323232',
  price:1212 
}
const phone=fish.phone;
console.log(phone);
console.log(phone);
console.log(phone);  

const {age, name}=  {
  age: 12,
  name:'almas',
  profession:'makeup artist'
}
console.log(age); */

//for array destructuring
const [first,another]=[323,232,23,12];
console.log(another);

//another way
const nayoks=['shakib','Bappa','Raz'];
const [king, lost, notun]=nayoks;
console.log(notun);

//using function
function  getNames(){
  return ['alim','halim'];
}
const [baba,chaca]=getNames();
console.log(chaca,baba);