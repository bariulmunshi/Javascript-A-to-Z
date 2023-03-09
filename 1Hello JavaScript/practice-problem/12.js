/* 
1.show output from 1-50
2.if the number is divisible by 3 then instead of the number show 'foo'
3.if the number is divisible by 5 then instead of the number show 'bar'
4.if the number is divisible by 3 and 5 both then instead of the number show 'foobar'
 */
/* for(let i=1;i<=50;i++){
  if(i%3==0 && i%5==0){
    console.log('foobar');
  }
  else if(i%3==0){
    console.log('foo');
  }
  else if(i%5==0){
    console.log('bar');
  }
  else{
    console.log(i);
  }
} */

/* fixed per item chair requirements
1. chair---3 cft
2. table---10 cft
3. bed-----50 cft
 
vary quantity*/
/* function woodCalculator(chairQuantity, tableQuantity,bedQuantity){
  const perChairWood=3;
  const perTableWood=10;
  const perBedWood=50;
  const chairWood=perChairWood*chairQuantity;
  const tableWood=perTableWood*tableQuantity;
  const bedWood=perBedWood*bedQuantity;
  const totalWood=chairWood+tableWood+bedWood;
  return totalWood;
}
const totalWood=woodCalculator(1,0,0);
console.log(totalWood); */

// Find the cheapest phone from an array of phone objects
/* const phones=  [
  {name:'xiaomi', camera:12,storage:'32gb',price:3600,color:'silver '},
  {name:'Samsung', camera:12,storage:'32gb',price:3500,color:'silver '},
  {name:'iphone', camera:12,storage:'32gb',price:3200,color:'silver '},
  {name:'oppo', camera:12,storage:'32gb',price:3000,color:'silver '},
  {name:'Nokia', camera:12,storage:'32gb',price:3300,color:'silver '},
  {name:'HTC', camera:12,storage:'32gb',price:3100,color:'silver '},
  {name:'Tecno', camera:12,storage:'32gb',price:3900,color:'silver '},
  {name:'Walton', camera:12,storage:'32gb',price:3700,color:'silver '},
];
function cheapestPhone(phones){
  let cheapest=phones[0];
  for(let i=0; i<phones.length; i++){
    const phone=phones[i];
    if(phone.price<cheapest.price){
      cheapest=phone;
    }
  }
  return cheapest;
}
const mySelection=cheapestPhone(phones);
console.log(mySelection);
 */

// Calculate the total cost of the products in a shopping cart
/* const shoppingCart=[  
  {name:'shoe', price:1200},
  {name:'shirt', price:2200},
  {name:'pant', price:2300},
  {name:'belt', price:600},
];
function totalCostProduct(products){
  let sum=0;
  for(let i=0;i<products.length; i++){
    const product=  products[i];
    sum=sum+product.price;
    // console.log(product);
  }
  return sum;
}
const expense=totalCostProduct(shoppingCart);
console.log('Total expense today:',expense); */

//Quantity of cart
/* const shoppingCart=[  
  {name:'shoe', price:1200, quantity:2},
  {name:'shirt', price:2200, quantity:4},
  {name:'pant', price:2300, quantity:3},
  {name:'belt', price:600, quantity:7}
];
function totalCostProduct(products){
  let sum=0;
  for(let i=0;i<products.length; i++){
    const product=  products[i];
    const productTotal=product.price*product.quantity;
    sum=sum+productTotal;
    // console.log(product);
  }
  return sum;
}
const expense=totalCostProduct(shoppingCart);
console.log('Total expense today:',expense); */

// Multi-layer discount price calculation
/* 
1.If ticket number  less than 100, per  ticket price:100
2.if  ticket number is more than 100, but less than 200. First 100  tickets will be 100/ticket.
rest tickets will be 90tk per pice
3.if you purchase more than 200 tickets
first 100--->100tk
101-200----->90tk
200+--------->70tk
*/
/* function ticketPrice(ticketQuantity){
  const first100rate=100;
  const second100rate=90;
  const restTicketrate=70;
  if(ticketQuantity<=100){
    const price=ticketQuantity*first100rate;
    return price;
  }
  else if(ticketQuantity<=200){
    const first100price=100*first100rate;
    const restTicketQuantity=ticketQuantity-100;
    const restTicketPrice=restTicketQuantity*second100rate;
    const totalPrice=first100price+restTicketPrice;
    return totalPrice;
  }
  else{
    const first100price=100*first100rate;
    const second100Price=100*second100rate;
    const restTicketQuantity=ticketQuantity-200;
    const restTicketPrice=restTicketQuantity*restTicketrate;
    const totalCost=first100price+second100Price+restTicketPrice;
    return totalCost;
  }
}
const price=ticketPrice(110);
console.log('Price:',price); */
