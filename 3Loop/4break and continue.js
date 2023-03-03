// loop break
/* for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
} */
// array break and continue
/* var numbers = [12, 124, 433, 33, 3, 32, 13, 43, 23, 100, 43];
for (i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  console.log(number);
  if (number > 1000) {
    break;
  }
} */
var numbers = [12, 124, 433, 33, 3, 32, 13, 43, 23, 100, 43];
for (i = 0; i < numbers.length; i++) {
  var number = numbers[i];

  if (number > 120) {
    continue; 
  }
  console.log(number);
}
