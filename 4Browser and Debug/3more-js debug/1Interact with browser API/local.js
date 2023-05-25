/* How to set and get objects to local storage */
const hello=localStorage.getItem('Hello');
console.log(hello);

const setAge=()=>{
  window.localStorage.setItem('age',31);
}