// string is immuteable(unchanging over the time/unable to change)
/* let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
text.length; //length 
text[2]; //  */

/* let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length); */

/* const unserName='blackPink';
const unserInput='blackPinK';
console.log(unserInput.toUpperCase()); //for make value uppercase
console.log(unserInput.toLowerCase()); //for make value lowercase
if(unserName.toLowerCase==unserInput.toLowerCase){
  console.log('valid user');
}
else{
  console.log('Invalid User');
} */

/* // JavaScript String includes()
let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result); */

/* // JavaScript String includes() and fixed search string and exiting string lower case then search
let text = "Hello World, welcome to the universe.";
let texts='WOrld';
let teLowerCase = text.toLowerCase();
let tesLowerCase = texts.toLowerCase();
let doesExist=tesLowerCase.includes(tesLowerCase);
console.log(doesExist); */

/* //indexOf()
let tex = "Hello world, welcome to the universe.";
// let results = tex.indexOf("welcome");
// console.log(results);
if(tex.indexOf('welcome')!==-1){
  console.log('exist inside the string');
}
else{
  console.log('not exits');
} */

/* let text = "Hello world, welcome to the universe.";
let haveIt=text.startsWith("Hello");
console.log(haveIt); */

/* //endwith
const fileName='mycv.pdf';
const otherFile='mypic.png';
const hasIt=fileName.endsWith('.pdf');
console.log(hasIt); */
 
let text = "How are you doing today?";
const eachLetter=text.split(''); //spilt in letter
const myArray = text.split(" "); //spilt in word
const sentences=text.split('.') //spilt in sentence
// console.log(eachLetter); 

const partial= text.slice(5,8); //slice
// console.log(partial);

const partial2=text.substring(5,8); //substring
// console.log(partial2);

let text1 = "sea";
let text2 = "food";
let result = text1.concat(' ',text2); //concat
// console.log(result);

const lines=["How are you doing today?",
"How are you doing today?",
"How are you doing today?",
"How are you doing today?"];
const newPara= lines.join(':'); //join
// console.log(newPara);


             // Reverse a string and Reverse words in a sentence
/* 
//Reverse a string
function reverseString(text){
  let reversed='';
  for(let i=text.length-1; i>=0;i--){
    const element=text[i];
    reversed=reversed+element;
    console.log(element,reversed);
  }
  return reversed;
}
const myString= 'I am a good boy';
const reversed=reverseString(myString);
console.log('Reversed output string:',reversed); */

// Reverse words in a sentence
/* function reversedWords(str){
  const words=str.split(' ');
  const result=[];
  for(let i=words.length-1; i>=0; i--){
    const element=  words[i];
    result.push(element);
  }
  console.log(result);
}
const myString= 'I am a good boy';
reversedWords(myString); */