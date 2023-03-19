function getInputFieldValueById(inputTk){ //for input
  const inputField=document.getElementById(inputTk);
  const inputFieldValueString=inputField.value;
  const input=parseFloat(inputFieldValueString);
  inputField.value='';
  return input;
}
function getOutputValueById(outputTk){ //for output
  const outputValue=document.getElementById(outputTk);
  const outputValueString=outputValue.innerText;  
  const output=parseFloat(outputValueString);
  return output; 
}
function setTextOutputValueByID(elementId,newValue){
  const textOutput=document.getElementById(elementId);
  textOutput.innerText=newValue;
}