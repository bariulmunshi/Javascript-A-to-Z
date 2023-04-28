/* Object method access and set property values */
//object properties value can be number,string, boolean, Array,function..
const student={
  name: 'Kodom Ali',
  Money:5000,
  subject: 'Math',
  study: ['calculus','Aljebra','goemetry'],
  exam: function(){
    return this.name + 'is participating in an exam';
  },
  improveExam: function(subject){
    this.exam();
      return `${this.name } is taking  improvement exam on ${subject}`
  },
  treatDey: function(amount,tips){
    this.Money=this.Money- amount-tips;
    return this.Money;
  }
}
const output=student.exam();
//console.log(output);
const reExam=student.improveExam('Algebra');
// console.log(reExam);
const remaining= student.treatDey(1000,50);
console.log(remaining);
const dollarRemaining= student.treatDey(100,10);
console.log(dollarRemaining);