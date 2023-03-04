var shoppingCart={
books: 3,
sunglass:1,
keyboard:4,
mouse: 3,
pen:3,
shoes:3
}
 const keys=Object.keys(shoppingCart);
 console.log(keys); //get object properties 
 const values=Object.values(shoppingCart); //get object values
 console.log(values);

 /* for(var i=0;i< keys.length;i++){
  console.log(keys[i]); //get object property
 } */

//  object property and value get together by using loop
 for(var i=0;i< keys.length;i++){
   var propertyName=keys[i];
   var propertyValue=shoppingCart[propertyName];
   console.log(propertyName,propertyValue);
 }
//  or
//  for in loop
for(var propertyName in shoppingCart){
  const value =shoppingCart[propertyName];
  console.log(propertyName,value);
}