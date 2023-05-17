/*  setInterval and clearInterval with x++ and ++x  */
console.log(1);
console.log(2);
let num=0;
const setIntervalId= setInterval(()=>{
  console.log(++num)
  if (  num===10){
    clearInterval(intervalId);
  }
},1000)
console.log(4);
console.log(5);
console.log(6); 