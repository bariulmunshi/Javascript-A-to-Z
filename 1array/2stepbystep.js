/* What's Array?
An array in JavaScript is a type of global object used to store multiple values in a single variable.*/
//Example:
var myArray = ["John", "Paul", "Ringo", "George"];


//1.print your 5 friends age using Array
var firendsAge =[20,23,25,22,21,24];
console.log(firendsAge);

//2.print your 5 friends name using Array
var friendsName =['Hasibul','Rokibul','Shawon','Anik','Plabon'];
console.log(friendsName);

//3.show Vowels and count the number of it using Array
var vowels =['a','e','i','o','u'];
console.log(vowels);
console.log(vowels.length);

//4. ['a','e','i','o','u']  findout the index position of o and findout value of 0 index.
var vowels =['a','e','i','o','u'];
console.log(vowels.indexOf('o')); //or var oIndex=vowels.indexof('o');
console.log(vowels[0]);

//5.[20,23,25,22,21,24] updates 0 index value and set it 21.
var value =[20,23,25,22,21,24];
value[0]=21;
console.log(value);
                        /* Use of pop and push */
//6. ["Hila", "Lila", "Mila", "Tila"] in this Array remove 'Mila','Tila' and entery new name 'Bariul' from the Array.
var nameCollection=["Hila", "Lila", "Mila", "Tila"];
nameCollection.pop()
nameCollection.pop()
nameCollection.push('Bariul');
console.log(nameCollection);
                         /* Use of shift */
//7.In javascript Remove first item from an Array and add array element in the beginning
var friends = ["Anik", "Naim", "Plabon", "Naimur", "Rakib", "Minhaz"];
friends.shift(); //Remove first item
// console.log(friends);
var friends = ["Anik", "Naim", "Plabon", "Naimur", "Rakib", "Minhaz"];
friends.unshift("Numan"); //add array element in the beginning
//console.log(friends);





