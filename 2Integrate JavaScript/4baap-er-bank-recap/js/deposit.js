//for btn
document.getElementById('btn-deposit').addEventListener('click',function(){
  //input
  const newDepositAmount=getInputFieldValueById('deposit-field');
  //output
  const previousDepositTotal=getOutputValueById('deposit-total')
  const newDepositTotal=previousDepositTotal+newDepositAmount;
  setTextOutputValueByID('deposit-total',newDepositTotal);

  //output for balance
  const previousBalanceTotal=getOutputValueById('balance-total');
  const newBalanceTotal=previousBalanceTotal+newDepositAmount;
  setTextOutputValueByID('balance-total',newBalanceTotal);
})