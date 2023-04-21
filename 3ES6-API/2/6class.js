//syntactic sugar
class Instructor{
  name; //dynamic properties different from every object
  designation='web course instructor'
  team='team web'
  location; //dynamic properties different from every object
  constructor(name,location){
    this.name=name;
    this.location=location; 
  }
  starSupportSession(time){ // method or function in class
    console.log(`start the support session at ${time}`) 
  }
  createQuiz(module){ //method or function in class
    console.log(`Please create quiz for module ${module}`)
  }
}
//create instance from instructor class 
const  amir=new Instructor(); //get object without constructor from class & required new keyword
console.log(amir);
const  aamir=new Instructor('aamir','mumbai'); //get object form class & required new keyword
console.log(aamir);

const sulaiman= new Instructor('sulaiman','Dhaka'); //get object from class & required new keyword
console.log(sulaiman); 

aamir.starSupportSession('9.20 pm'); //function call from class
aamir.createQuiz(60);//function call from class