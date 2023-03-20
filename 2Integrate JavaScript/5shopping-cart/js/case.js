function updateCaseNumber(isIncrease){
  const caseNumberField=document.getElementById('case-number-field');
  const caseNumberString=caseNumberField.value;
  const previousCaseNumber=parseInt(caseNumberString);
  
  let newCaseNumber;
  if(isIncrease===true){
    newCaseNumber=previousCaseNumber+1;
  }
  else{
    newCaseNumber=previousCaseNumber-1;
  }
  caseNumberField.value=newCaseNumber;
  return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){
  const caseTotalPrice=newCaseNumber*59;
  const caseTotalOutput=document.getElementById('case-total');
  caseTotalOutput.innerText=caseTotalPrice;
}
//for plus btn
document.getElementById('btn-case-plus').addEventListener('click',function(){
 const newCaseNumber=updateCaseNumber(true);

 updateCaseTotalPrice(newCaseNumber);
 calculateSubTotal();
})

//for plus btn
document.getElementById('btn-case-minus').addEventListener('click',function(){
  const newCaseNumber =updateCaseNumber(false);

  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
})
