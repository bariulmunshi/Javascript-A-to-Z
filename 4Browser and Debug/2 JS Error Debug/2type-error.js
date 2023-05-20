/* Understand Reference errors and Type errors messages */
const numbs=5;
// numbs.push(32);

// let address;
// console.log(address.home); //Cannot read properties of undefined (reading 'home')
let address={city:'Dhaka',Postcode:233};
// console.log(address.home.building);
console.log(address?.home?.building);


const a ='Abul';
a='Babul';

