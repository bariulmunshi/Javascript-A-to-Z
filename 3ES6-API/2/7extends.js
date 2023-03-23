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
  provideFeedback(){
    console.log(`${this.name} thank you for your feedback.`)
  }
}

class Developer extends TeamMember{
  name; //dynamic properties different from every object
  designation='web course instructor'
  team='team web'
  location; //dynamic properties different from every object
  constructor(name,location,tech){
    this.name=name;
    this.location=location; 
    this.tech=tech;
  }
  developFeature(feature){ // method or function in class
    console.log(`Please develop the feature ${feature}`) 
  }
  release(version){ //method or function in class
    console.log(`Please release the version${version}`)
  }
  provideFeedback(){
    console.log(`${this.name} thank you for your feedback.`)
  }
}

class JobPlacement{
  name; //dynamic properties different from every object
  designation='Job Placement commandos'
  team='Job Placement team'
  location; //dynamic properties different from every object
  constructor(name,location,tech){
    this.name=name;
    this.location=location; 
    this.tech=tech;
  }
  provideResume(feature){ // method or function in class
    console.log(`Please develop the feature ${feature}`) 
  }
  prepareStudents(version){ //method or function in class
    console.log(`Please release the version${version}`)
  }
  provideFeedback(){
    console.log(`${this.name} thank you for your feedback.`)
  }
}