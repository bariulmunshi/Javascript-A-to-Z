// console.log(this);
const KodomAli={
  name: 'Kodom Ali',
  Money:5000,
  subject: 'Math',
  study: ['calculus','Aljebra','goemetry'],
  exam: function(){
    console.log(this);
    return this.name + ' is participating in an exam';
  },
  examArrow: ()=>{
    console.log(this);
  },
  examNested: ()=>{
    const arrow=()=>{
      console.log(this);
    }
    arrow();
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
KodomAli.exam();
const badamAli={
  name: 'Kacha Bandam',
  Money: 8000
}
badamAli.exam=KodomAli.exam;
badamAli.exam();
function clickHandler(){
 console.log('inside click handler',this);
}
document.getElementById('btn-click2').addEventListener('click',function(){
  console.log(this)
})