/* Promise, Aync/Await */
const getData =new Promise((resolve,reject)=>{
  const num=Math.random()*10;
  console.log(num);
  if(num<5){
    
    resolve(1218);
  }
  else{
    reject('No Data Available')
  }
})
getData
  .then(data=>console.log(data+22))     //resolve
  .catch(err=>console.error('ERR:',err  )) //reject
// console.log(getData+56)
// getData.then(data=>console.log(data+22))
 