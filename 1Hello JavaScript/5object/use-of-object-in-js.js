const student={
  name:'Bariul',
  id:201-15-3314,
  address:'Mirpur-1,Dhaka,Bangladesh',
  isMarried:false,
  friends:['Hasan','Benu','Rakib','Labib','Rasel'],
  movies: [{name:'No.1',year:2020},{name:'King khan',year:2018}],
  act:function(){
    console.log('Acting like shakib khan');
  },
  car:{
    brand:'tesla',
    price:40000000,
    made:2025,
    manufacturer:{
      name:'tesla',
      ceo:'Elon Mask',
      country:'USA'
    }
  }
}
// console.log(student.car);
console.log(student.act);
student.act()


