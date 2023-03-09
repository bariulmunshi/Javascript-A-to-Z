// use of if
var isFoodReady = true;
if (isFoodReady == true) {
  //   console.log("mama!! I Wil eat now");
}
// or
if (isFoodReady == false) {
  // console.log("mama!! I Wil eat now");
}

var carPrice=1000000;
var myBudget=800000;
//if car price is less than my budget then I will buy the car otherwise I can't buy the car
/*
  here condition is: if(car price is less than my budget){
    execution code: I will buy the car
  }
  else{
    execution code: I can't buy the car
  }
*/
       //Use of if (single condition)
if(carPrice<myBudget){
  console.log('I will buy the car');
}
     // (multi condition)
var permissionBuyCar=true;
if(carPrice<myBudget || permissionBuyCar==true){
      console.log("I will buy the car");
}
// use of if else(single-condition)
if (carPrice<myBudget){
  console.log("I will buy the car");
}
else{
  console.log("I can't buy the car");
}
      //multi-condition
      if (carPrice<myBudget && permissionBuyCar==true){
        console.log("I will buy the car");
      }
      else{
        console.log("I can't buy the car");
      }

if (isFoodReady == false) {
  console.log("mama!! I Wil eat now");
} else {
  // console.log("mama!! I Won't eat now");
}

// multi condition
var gotJob = true;
var hasFlat = false;
var hasHouse = true;
var moneySave = 500000;
if ((gotJob == true && moneySave > 200000) || hasHouse == true) {
  console.log("cholo biye kore feli");
} else {
  console.log("Tor kopale biye nai");
}

// nested (if ,else if...,if)
var danisPrice = 50;
var butterPrice = 25;
var toastPrice = 10;
var myBudgetPrice = 100;
if (toastPrice > myBudgetPrice) {
  console.log("I can buy toast");
} else if (danisPrice < myBudgetPrice) {
  console.log("I can buy danish");
} else if (butterPrice > myBudget) {
  console.log("I can buy butter");
} else {
  console.log("No,problem I can't buy anything");
}

// or
var packetWell = false;
if (danisPrice < myBudgetPrice) {
  if (packetWell == true) {
    console.log("I will buy");
  } else {
    console.log("I won't buy");
  }
}


// console.log(6 >= 6);

// Exercise-প্রাকটিস চ্যালেঞ্জ -১:

/* ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?*/

// ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

// ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

// ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

// ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

// ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.

var marks = 50;
if (marks >= 90 && marks <= 100) {
  console.log("Your friend Got: A++");
} else if (marks >= 80 && marks <= 90) {
  console.log("Your friend Got: C");
} else if (marks >= 70 && marks <= 80) {
  console.log("Your friend Got: D");
} else if (marks >= 60 && marks <= 70) {
  console.log("Your friend Got: E");
} else if (marks >= 50 && marks <= 60) {
  console.log("Your friend Got: E");
} else {
  console.log("Your friend Got: F");
}

// প্রাকটিস প্রব্লেম-২:

// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।

var signal = "yellow";
if (signal == "red") {
  console.log("Danger");
} else if (signal == "green") {
  console.log("Please,cross the road");
} else if (signal == "yellow") {
  console.log("Please, Stop");
}
