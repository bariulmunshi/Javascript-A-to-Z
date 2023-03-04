// Get specific object’s  property name syntax:
var computer = {
  prices: "60k",
  processor: "ryzen 3400G",
  monitor: "Bnq",
  ram: "8Gb",
  storage: "1gb",
  ssd: "available 250gb",
  ssdBrand: "HP",
};
console.log(computer.monitor); //more convinient
// or,
var computerMonitor = computer.monitor; 
// console.log(computerMonitor);
// set a object property value
computer.monitor = "samsung"; //more convinient
// or,
// computer["monitor"] = "XIAOMI";
// or,
// var newMonitorUpadatedBrand = "monitor";
// computer[newMonitorUpadatedBrand] = "Asus";
console.log(computer);
