                          //Based on simple operation(introduction)

/* Problem-1: Harry's Mother gave him money and asked him to buy some oranges and apples. Write program to help Harry calculate how much money the shopkeeper will return.
Input:
Harry's Mother gave him 1000tk and the cost of orrange & apple is 700. */
var givenTkByHarryMother= 1000;
var costOfOrrangeAndApple=700;
var shopkeeperReturnMoney=givenTkByHarryMother-costOfOrrangeAndApple;
console.log(shopkeeperReturnMoney);

/* Problem-2: Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.  
Input: 75.25, 65, 80, 35.45, 99.50 is the marks of the five subjects mentioned above, respectively. */
var Mathematics=75.25;
var Biology=65;
var Chemistry=80;
var Physics=35.45;
var Bangla=99.50;
var averageMarks=(Mathematics+Biology+Chemistry+Physics+Bangla)/5;
averageMarks=averageMarks.toFixed(2);
averageMarks=parseFloat(averageMarks);
console.log(averageMarks);

/* Problem-3: John's teacher gave him two variables. Each variable contains a string. John's teacher asked him to combine these two strings and print them in one line. Help john write the program
Input: 
First string: 'I am going to be'
second string: 'an awesome web developer' */
var firstString='I am going to be';
var secondString='an awesome web developer';
var totalString=firstString+' '+secondString;
console.log(totalString);

/*Problem-4: Sarah's mother is teaching her mathematics. She gave sarah a number and asked her what the remainder would be If she divided by the number 5. Help Sarah write the program
Input: Given number:119*/
var givenNumber=119;
var dividedBy=5;
var remainder=givenNumber%dividedBy;
console.log(remainder);

