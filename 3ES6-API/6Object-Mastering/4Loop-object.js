/* Loop through an object using for in, for of, object entries */

const numbers= [12,123,22,35,62,13]
for(const number of numbers){ //1.for of  loop
  //console.log(number);
}
//for of can't used with object
const bottle={color: 'yellow',price:230,isClean:true,capacity:1};


//first option to loop through an object
const keys=Object.keys(bottle); 
// console.log(keys);
/* 3 ways to read object properties value
  1. bottle.color
  2.bottle['color']
  3.bottle[key]
*/
for(const key of keys){
  //console.log(key,bottle[key]);
}
//2. for in loop 
for(const key in bottle ){
  const value=bottle[key];
  // console.log(key,value);
}

//advanced
const pair=Object.entries(bottle);
console.log(pair);
for(const [key,value] of Object.entries(bottle)){
  console.log(key,value);
}