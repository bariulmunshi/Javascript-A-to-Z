/* Intro to JSON, JSON Structure, parse, stringify */
const user ={
  id:1,
  name:'gorib amir',
  job: 'actor'
};
const stringified=JSON.stringify(user);
// console.log(user);  
// console.log(stringified);
/* 
{ id: 1, name: 'gorib amir', job: 'actor' } //js
{"id":1,"name":"gorib amir","job":"actor"}  //jSON
*/

const shop={
  owner:'Alia',
  address:{
    street:'Khocukhet Voot er Goli',
    city: 'Ranbir',
    country:'BD'
  },
  products:['Laptop','Mic','monitor','Keyboard'],
  revenue:45000,
  isOpen:true,
  isNew:false
}
// console.log(shop);
const shopJSON=JSON.stringify(shop);  //convert object to JSON using stringify
// console.log(shopJSON);

const shopObject=JSON.parse(shopJSON); //convert JSON to Object using parse
// console.log(shopObject);




