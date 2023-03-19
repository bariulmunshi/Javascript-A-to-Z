//for btn
document.getElementById('btn-withdraw').addEventListener('click',function(){
  //input
  const newWithdrawAmount=getInputFieldValueById('withdraw-field');
  //output
  const previousWithdrawTotal=getOutputValueById('withdraw-total')
  const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
   setTextOutputValueByID('withdraw-total',newWithdrawTotal);

  //output for balance
  const previousBalanceTotal=getOutputValueById('balance-total');
  const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
  setTextOutputValueByID('balance-total',newBalanceTotal);
})