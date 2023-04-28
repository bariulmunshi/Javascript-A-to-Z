/* Keys, values, entries, delete, seal, freeze */
/* Keys/properties, values(string,array,boolean,number,object), entries(properties and value together), delete, seal, freeze */

const bottle={color: 'yellow',price:230,isClean:true,capacity:1};

const keys=Object.keys(bottle); //1.how to get object key/properties
// console.log(keys);

const values=Object.values(bottle); //2.how  to get values
// console.log(values);

const pair=Object.entries(bottle); //3.to get properties and value together
//console.log(pair);

console.log(bottle);
//Object.seal(bottle);  //after seal of object then properties and value can't be delete and add
Object.freeze(bottle);   // noting can be update
delete bottle.isClean; //delete object properties and value
bottle.price=200;      //properties value can be modify
bottle.height=12;      //can't add new properties
console.log(bottle);