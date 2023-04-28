/* Module introduction Different way to Create Object */
/* there have to things in object { 1. properties and 2. Methods} and 5 ways to create object given below */
const player={}; //1.create object using object literals(important)
player.name= 'small nirob';
player.specialty='Batsman';
player.bat=function(){           //method
  console.log('swing your bat');
}
//console.log(player);
//player.bat();

const student={ 
  name:'Pandey',
  job:'cricketer',
  ball:function(){
    console.log('throw the ball')
  },
  salary: 1000
}

//2.object constructor with empty object
const person=new Object();
console.log(person);
//3.object create method
//const item= object.create(null);
const atel= Object.create(student);
//console.log(atel.name);

//4.class(important)
class Person{
  name='A';
  address='Sod Ghat';
  constructor(age){
    this.age=age;
  }
}
const person1=new Person(59);
console.log(person1);

//5. Function 
function car(model,price){
  this.model=model;
  this.price= price;
}

const tesla=new car('Elon Musk',34);