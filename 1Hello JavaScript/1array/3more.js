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
const newFriensAge=[21,32,31];
const allfriends=newFriensAge.concat(friends); //concat
console.log(allfriends);

// another way to check includes
if(friends.indexOf(213)!==-1){
  console.log('yes')
}
else{
  
  console.log('No')
}

              //Remove duplicate items from an array
const names=['abul','babul','asif','fokir','abul','babul','monir']
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
console.log(uniqueNames);
