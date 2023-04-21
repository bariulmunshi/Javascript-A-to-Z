//JavaScript Array includes()
/* const namelist=['habib','hasib','rakib','sumi'];
namelist.includes('habib');
console.log(namelist); */
const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.includes('Mango'));

//array concat
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);

//array slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3) 
console.log(citrus);
const friend=[23,35,33,34,35,32,22,55];
const partial=friend.slice(1,3)
// console.log(partial); 
/* It lets you change the content of your array by removing or replacing existing elements with new ones */
const partials=friend.splice(3,5);
console.log(friend);



// isArray, includes, concat

const friends=[23,35,33,34,35];
//console.log(friends.includes(23)); //inlcudes
/* const newFriensAge=[21,32,31];
const allfriends=newFriensAge.concat(friends); //concat
console.log(allfriends); */

// another way to check includes
/* if(friends.indexOf(213)!==-1){
  console.log('yes')
}
else{
  
  console.log('No')
} */

              //Remove duplicate items from an array
/* const names=['abul','babul','asif','fokir','abul','babul','monir']
function remoteDuplicate(names){
  const unique=[];
  for(let i=0; i<names.length;i++){
    const name=names[i];
    if(unique.includes(name)===false){
      unique.push(name);
    }
  }
  return unique;
}
const uniqueNames=remoteDuplicate(names);
console.log(uniqueNames); */


// Find the matching product by searching products
const phones=  [
  {name:'xiaomi node 7', camera:12,storage:'32gb',price:3600,color:'silver '},
  {name:'Samsung node 11', camera:12,storage:'32gb',price:3500,color:'silver '},
  {name:'iphone node 12', camera:12,storage:'32gb',price:3200,color:'silver '},
  {name:'oppo node 33', camera:12,storage:'32gb',price:3000,color:'silver '},
  {name:'Nokia node 12', camera:12,storage:'32gb',price:3300,color:'silver '},
  {name:'HTC node 2', camera:12,storage:'32gb',price:3100,color:'silver '},
  {name:'Tecno node 1', camera:12,storage:'32gb',price:3900,color:'silver '},
  {name:'Walton node 9', camera:12,storage:'32gb',price:3700,color:'silver '},
];
// for (const phone of phones){
//   console.log(phone);
// }
function matchedProduct(phones,search){
  const matched=[];
  for (const phone of phones){
    console.log(phone.name.includes(search));{
      matched.push(phone);
    }
    return matched;
  }
}
const result5=matchedProduct(phones,'name');
console.log(result5);
function compare(a, b) {

  if (a == b) {
 
  return true;
 
  } else {
 
  return false;
 
  }
 
 }
 
 const result2 = compare(15, "15");
 
 console.log(result2);
 
 function compare(a, b) {

  if (a.toString() === b) {
 
  return true;
 
  } else {
 
  return false;
 
  }
 
 }
 
 const result = compare(25, 25);
 
 console.log(result);
 
 const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);