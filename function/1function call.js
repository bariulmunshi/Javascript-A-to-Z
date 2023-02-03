// function declaration and multiple declaration
function startFan() {
  console.log("walk to the switch ");
  console.log("press the switch");
}
startFan();
console.log("Let's play video Game");
console.log("Let's go to the market ");
startFan();
startFan();
// Now inch to feet conversations by function call
function inchesToFeet(inches) {
  var feet = inches / 12;
  return feet;
}
var mySetInches = 154;
var feet = inchesToFeet(mySetInches);
console.log("My set Feet", feet);

var hisSetInches = 500;
var feet = inchesToFeet(hisSetInches);
console.log("His set Feet", feet);

var herSetInches = 1000;
var feet = inchesToFeet(herSetInches);
console.log("Her set Feet", feet);
