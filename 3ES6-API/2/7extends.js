/* Inheritance, extends class, super, class method */
/* The extends keyword is used in class declarations or class expressions to create a class that is a child of another class. */
class TeamMember{ //parent of Instructor class
  name; //dynamic properties different from every object
  location; //dynamic properties different from every object
  constructor(name,location){
    this.name=name;
    this.location=location;
  }
  provideFeedback(){
    console.log(`${this.name} thank you for your feedback.`)
  }
}

class Instructor extends TeamMember{
  designation='web course instructor'
  team='team web'
  constructor(name,location){
    super(name,location); //super means constructor of TeamMember(parent)
  }
  starSupportSession(time){ // method or function in class
    console.log(`start the support session at ${time}`) 
  }
  createQuiz(module){ //method or function in class
    console.log(`Please create quiz for module ${module}`)
  }
}

class Developer extends TeamMember{
  designation='web course instructor'
  team='team web'
  tech;
  constructor(name,location,tech){
    super(name,location);
    this.tech=tech;
  }
  developFeature(feature){ // method or function in class
    console.log(`Please develop the feature ${feature}`) 
  }
  release(version){ //method or function in class
    console.log(`Please release the version${version}`)
  }
}

class JobPlacement extends TeamMember{
  designation='Job Placement commandos'
  team='Job Placement team'
  region;
  constructor(name,location,region){
    super(name,location)
    this.region=region;
  }
  provideResume(feature){ // method or function in class
    console.log(`Please develop the feature ${feature}`) 
  }
  prepareStudents(version){ //method or function in class
    console.log(`Please release the version${version}`)
  }
}
const alia= new Developer('Alia vatt','Dhaka','React');
// console.log(alia);
const bipasha=new JobPlacement('Bepasha','Kolkata','India');
console.log(bipasha);