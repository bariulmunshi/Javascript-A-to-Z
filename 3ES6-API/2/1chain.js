/*  Access Value, nested object Optional chaining */ 
 const users=[{id:1,name:'Abul',job:'doctor'}];
console.log(users[0].name);

const data={
  count:5000,
  data:[
    {
      id:1, name:'Abdul', job:'teacher'
    },
    {
      id:2, name: 'Robi', job:'doctor'
    },
  ]
}
console.log(data.data[0].job);

const user={
  id:1,
  name:'Tomas Alva Adison',
  address:{
    street: {
      first:'35/A kochukhet lane',
      second:'Building-12',
      third:'third floor,right side'
    },
    postOffice:'cantonment',
    city:'Dhaka'
  }
}
const userFloor=user.address.street.third;
console.log(userFloor);


