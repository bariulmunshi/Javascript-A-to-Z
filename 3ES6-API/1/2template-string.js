/* Template string, multiple line string, dynamic string */
const person='Adam Sand'; // use of single quotation 
const person2="Ben White"; //use of double quotation
const person3=`Donald Trump`; //use of backtick

const multiLine='First Line text \n'+ //declare multiLine string
'Second Line text \n'+
'Third Line text \n'+
'Fourth Line of String';
// console.log(multiLine);

//alternative way to declare multiline
const newMultiLine=`First Line of text 
Second Line of string
third line of text
fourth line of text`;
// console.log(newMultiLine);  


const a=10;
const b=20;
const summary='Sum of :'+ a + ' and ' + b + ' is: ' + (a+b);
// console.log(summary);  

//dynamic string
const newSummary=`sum of ${a} and ${b} is: ${a+b}`;
// console.log(newSummary);

//in array
const nums=[43,34,35,23,65];
const array=`math of ${a} and ${nums.length} is: ${a+b}`;
console.log(array);