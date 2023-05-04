/* Borrow method from object and use it on another object */
const KodomAli={
  name: 'Kodom Ali',
  Money:5000,
  subject: 'Math',
  study: ['calculus','Aljebra','goemetry'],
  exam: function(){
    return this.name + ' is participating in an exam';
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
const result=KodomAli.exam();
const badamAli={
  name: 'Kacha Bandam',
  Money: 8000
}
const result2=KodomAli.exam.call(badamAli);
console.log(result2)
const badamMoney=KodomAli.treatDey.call(badamAli,400,40);
console.log(badamMoney);
const badamMoney2=KodomAli.treatDey.apply(badamAli, [1000,100]);
console.log(badamMoney2);
const badamAliTreat=KodomAli.treatDey.bind(badamAli);
const remaining=badamAliTreat(1000,100);
console.log(remaining);