         // Math, abs, pow, round, ceil, floor, and random number

const result=Math.pow(5,2); //math
// console.log(result);

const num1=23;
const num2=43;
 const gap=Math.abs(num1 -num2); //math.abs
//  console.log(gap);
 if(gap<5){
  // console.log('You guys can be friend');
 }
 else{
  // console.log('you guys can stay apart');
 }

 const number =21.2442;
 const fullNumber=Math.round(number); //round
//  console.log(fullNumber);

const result2=Math.ceil(2.00002); //celi
// console.log(result2);

const result3=Math.floor(2.00002); //celi
// console.log(result3);

// console.log(Math.random()); //random
// const random=Math.random()*100; //random*100
const random=Math.round(Math.random()*6); //round random
// console.log(random);
for(let i=0; i<20;i++){
  const random=Math.round(Math.random()*6); //round random
  // console.log(random);
}

// console.log(Math.PI); //PI


                // Swap variable, swap without temp, destructing
let first=5;
let second=7;
console.log(first,second);
//This is wrong approach 
// first=second;
// second=first;

//approach1
// const temp=first;
// first=second;
// second=temp;

//approach2===Destructuring
[first, second]=[second,first];
console.log(first,second);


