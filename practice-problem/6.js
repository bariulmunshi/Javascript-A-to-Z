/* Problelm-1: Standard height of a volleyball player is 7 feet. Jim wants to join the volleyball team, so decided to measure his height to see if he meets the standard. Calculate his height in feet
input: Jim heiht 84 inch  */

/* function inchToFeet(inches){
  // console.log('Jim height in inch:',inches);
  const result=inches/12;
  return result;
}
const jimInches=84;
const jimFeet=inchToFeet(jimInches); */
// console.log(jimFeet);
 
/* Problem-2: John is web developer, and he cycles to work.He knows the distance between his  office in miles. John wants to measure the distance in km. Calculate the distance in km
Input: distance=2miles */
//1mile=1.60934km
/* function milesToKilometer(miles){
  const km=miles*1.60934;
  return km;
}
const milesOfficeToHouse=2;
const kmOfficeToHouse=milesToKilometer(milesOfficeToHouse);
console.log(kmOfficeToHouse); */

/* Problem-3: Peter's school teacher asked him to write a program that would return true if a number is even and false  if a number is odd. Help Peter write the program.
Input: 98 and 117 */
/* function numberCheck(num){
  if(num%2==0){
    return true;
  }
  else{
    return false;
  }
}
const firstNum=numberCheck(98);
console.log(firstNum);
const secondNum=numberCheck(117);
console.log(secondNum); 
 */
/* Problem-3: Year check is leap year or not
Formula: If year is divisible by 4 then it will be leap year other not */
/* function isLeapYear(year){
  if(year%4==0){
    console.log(year,'is Leap Year');
  }
  else{
    console.log(year,'is Not Leap Year');
  }
}

isLeapYear(1933);
isLeapYear(1934) */

/* Problem-4: Write a function findOddSum() that will take the array[5,7,8,10,45,35] as the input parameter and will return the  sum   of the odd numbers  */
function findOddSum(arr) {
  let sum = 0;  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const arr = [5, 7, 8, 10, 45, 35];
const oddSum = findOddSum(arr);
console.log(oddSum); // Output: 92 (5 + 7 + 45 + 35 = 92)
