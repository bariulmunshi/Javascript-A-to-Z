/* truthy, false Ternary operator, shortcut and or */
//'abc', 5, true,{},[]
//'',0,false, null, undefined
let myVar=4;
//check any truthy 
if(myVar) {
  myVar=myVar*332;
}
else{
  myVar=0;
}
let myMoney=50;  
//you check negative or falsy anything
if (!myMoney){

}

const money=800;
let food;
if(money>100){
  food='biriyani';
}
else{
  food='cha biscut';
}

//ternary
let food1=money>100?'biriyani': 'cha biscut';
console.log(food1);


let drink=(money>100 && myVar>100)?'coke':'filter water';
console.log(drink);

//shortcut number to string conversation
const num1=52;
console.log(num1);
const numStr=num1+'';
console.log(numStr);

//string to number
const input='2342';
const inputNum=+input;
// console.log(inputNum);

//
let isActive=true;
const showUser=()=>console.log('display user');
const hideUser=()=>console.log('Hide user');
// isActive?showUser():hideUser();
//use &&  if the left side is true then right side will be executed
isActive && showUser();
//use || if the left side is false then right side will be executed 
isActive || hideUser();

//toggle boolean
isActive=!isActive;

