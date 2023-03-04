// 19-7 (optional) Javascript switch case break and default  condition
var colors = "yellow";
if (colors == " red") {
  console.log("The color is red");
} else if (colors == " green") {
  console.log("The color is green");
} else if (colors == "blue") {
  console.log("The color is blue");
} else if (colors == "white") {
  console.log("The color is white");
} else if (colors == " black") {
  console.log("The color is black");
} else {
  console.log("The color is not set");
}

/* switch syntax:
switch(expression){
    case a:
    code block
    break;
    case b:
    code block
    break;
    Default:
    code block
    }
 */
switch ("yellow") {
  case "red":
    console.log("The color is red");
    break;
  case "green":
    console.log("The color is green");  
    break;
  case "blue":
    console.log("The color is blue");
    break;
  case "white":
    console.log("The color is white");
    break;
  case "black":
    console.log("The color is balck");
    break;
  default:
    console.log("The color is not set");
}
