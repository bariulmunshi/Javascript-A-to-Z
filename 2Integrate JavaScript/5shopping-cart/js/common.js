function getTextOutputById(OutputId){
  const phoneTotalOutput=document.getElementById(OutputId);
  const currentPhoneTotalString=phoneTotalOutput.innerText;
  const currentPhoneTotal=parseInt(currentPhoneTotalString); 
  
  return currentPhoneTotal;
}
function setTextOutputById(outputId,value){
  const subTotalOutput=document.getElementById(outputId);
  subTotalOutput.innerText=value;
}
function calculateSubTotal(){
  const currentPhoneTotal=getTextOutputById('phone-total');
  const currentCaseTotal=getTextOutputById('case-total');
  const currentSubTotal= currentPhoneTotal+currentCaseTotal;
  setTextOutputById('sub-total',currentSubTotal);

  // calculate tax
  const taxAmountString=(currentSubTotal*0.1).toFixed(2);
  const taxAmount=parseFloat(taxAmountString);
  setTextOutputById('tax-amount',taxAmount);
  const finalAmount=currentSubTotal+taxAmount;
  setTextOutputById('final-total',finalAmount);
}