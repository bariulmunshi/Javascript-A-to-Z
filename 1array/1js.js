// Declare Array, array length
var friendsage = [23, 22, 20, 20];
var murichanacurFee = [20, 25, 20, 30];
var name = ["Hila", "Lila", "Mila", "Tila"];
var oddNumbers = ["1", "3", "5", "7", "9"];
var vowels = ["a", "e", "i", "o", "u"];
// console.log(friendsage);
// console.log(oddNumbers);
// console.log(name);
// console.log(vowels.length);

// array index position findout
var bookPackages = ["Hablu", "bolod", "hjem", "ej"];
// var bolodindex = bookPackages.indexOf("bolod");
//or,
// console.log(bookPackages.indexOf("bolod"));
var numbers = [12, 21, 22, 44, 44];
// console.log(numbers.indexOf(22));

// get value by index numbers
// console.log(numbers[0]);

// set value by  index numbers or change array value by index
numbers[1] = 100;
// console.log(numbers);

// push element to array
var nakies = ["Hila", "Lila", "Mila", "Tila"];
nakies.push("Pori-Moni");
nakies.push("Katrina");
// console.log(nakies);

var friendsage = [23, 22, 20, 20];
friendsage.push(12);
// console.log(friendsage);

// pop an element from an array
var friendsage = [23, 22, 20, 20];
friendsage.pop();
// friendsage.pop();
// lastItem = friendsage.pop();
// console.log(friendsage);
// console.log(lastItem);

// remove and insert element
var friendsage = [23, 22, 20, 20];
friendsage[1]=12;
console.log(friendsage);

// in javascript Remove first item from an Array and add array element in the beginning
var friends = ["Anik", "Naim", "Plabon", "Naimur", "Rakib", "Minhaz"];
friends.shift(); 
//console.log(friends); //remove
var friends = ["Anik", "Naim", "Plabon", "Naimur", "Rakib", "Minhaz"];
friends.unshift("Numan");
// console.log(friends);

