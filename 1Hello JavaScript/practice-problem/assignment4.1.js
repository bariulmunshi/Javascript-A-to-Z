/* ===============Problem-1: ============*/
/*Function-Description:
This function working with mathematical operation */
function mindGame(positiveNumber){
  
  if(typeof positiveNumber !=='number')
  {
    return 'Please enter a number';
  }else{
  let total=(positiveNumber*3+10)/2-5;
  return total;
  }
}        
const total=mindGame(33);
console.log(total);


/* =====================Problem-2:================*/
/*Function-Description:
This function working with conditon statement  */
function evenOdd(text){ 
  if(typeof text !=='string')
  {
    return 'Please enter a string';
  }else{
    let length = text.length;
  if(length%2!==0){
    return 'odd';
  }
  else{
    return 'even';
  }
}
}  
let text = 'Phero';
let myResult=evenOdd(text);
console.log(myResult);

/* ====================problem-3:===================== */
/*Function-Description:
This function working with condition and return value from the each condition */
function isLGSeven(number){ 
  if(typeof number !=='number')
  {
    return 'Please enter a number';
  }else{
    if(number<7){
      return -7+number;
    }
    else{
      return 2*number;
    }
  }
}
let getNum=6;
let result=isLGSeven(getNum);
console.log(result);

/* ======================Problem-4:===================== */
/*Function-Description:
This function working with loop and condion statement task */
function findingBadData(arr) {
  if(Array.isArray(arr))
  {
    let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
  }else{
    return 'Please enter a Array';
  }
}
const arr = [1, -2, -3, 4, -5, 6, -7];
// const arr = 2;
console.log(findingBadData(arr)); 

/* ==================Problem-5===================== */
/*Function-Description:
This function working with simple mathematical operationa and conditional statement togeter */
function gemsToDiamond(num1,num2,num3){
  if(typeof num1 !=='number' || typeof num2 !=='number' || typeof num3 !=='number')
  {
    return 'Please enter  numbers';
  }
  else{
  // return num1+num2; 
    let firstFriend=num1*21;
  let secondFriend=num2*32;
  let thirdFriend=num3*43;
  let total=firstFriend+secondFriend+thirdFriend; 
  if(total>1000*2){
    return total-2000;
  }   
  return total;
}
}
let num1=100;
let num2=5;
let num3=1;
let myResult2=gemsToDiamond(num1,num2,num3);
console.log(myResult2)