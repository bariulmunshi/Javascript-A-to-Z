/* Single-threaded, Asynchronous vs Synchronous */
//set timeout and fetch not working sequentially but function call and console log work
console.log(1);
console.log(2);
setTimeout(()=>{
  console.log('Lazy logged')
},4000 )
console.log(4);

function doSomething(){
  console.log(3);
}