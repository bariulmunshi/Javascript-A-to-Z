/* Array map to do one line loop magic */
const numbers=[12,2,3,4,6,7];

function getDoubles(numbers){
  const output=[];
  for(const number of numbers){
    const doubled=doubledIt(number);
    output.push(doubled);
  }
  return output;
}

/* function doubledItOld(num){
  return num*2;
} */

const doubledIt=num=>num*2;

const makeDouble=numbers.map(doubledIt); 
const makeDoubleDirect=numbers.map(num=>num*2);
const makeDouble2=numbers.map(x=>x*2);
// console.log(makeDouble2);//way-4
// console.log(makeDoubleDirect); //way-3
const fiveTimes=[1,2,3,4,5].map(x=>x*5); //best way(final way)
// console.log(fiveTimes);
/* 
Purpose:
1.get an array
2.for every elements of the array
3.store the result in an array
4. return the result array
*/

const result=getDoubles(numbers);
// console.log(result); //way-1
// console.log(makeDouble); //way-2

/* Map string array, array of objects map, foreach */
const numbers1=[12,13,23,5];
const half=numbers.map(n=>n/2);
const thirds=numbers.map(x=>x/3);
// console.log(thirds);
// console.log(half);
const friends=['Tom hanks','Tom curise', 'Tom Brady', 'Tom Sulaiman'];
const firstLetters=friends.map(friend=>friend[0]);
// console.log(firstLetters);
const nameLengths=friends.map(friend=>friend.length);
// console.log(nameLengths);

const products=[
  {id:1, name:'Laptop', price:1200},
  {id:2, name:'Mobile', price:5200},
  {id:3, name:'Watch', price:4500},
  {id:4, name:'Tablet', price:21200},
];
const items=products.map(product=>console.log(product.name));
const prices=products.map(p=>p.price);
console.log(prices);