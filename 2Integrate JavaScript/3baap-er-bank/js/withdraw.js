document.getElementById('withDraw-btn').addEventListener('click',function(){
  //for input
  const withdrawField=document.getElementById('withDraw-input');
  const newWithdrawAmountString=withdrawField.value;
  const newWithdrawAmount=parseFloat(newWithdrawAmountString);
  withdrawField.value=''; //clear the deposit field

  //for output
  const withdrawTotalElement=document.getElementById('withdraw-total');
  const previousWithdrawTotalString=withdrawTotalElement.innerText;
  const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
  const currentWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
  withdrawTotalElement.innerText= currentWithdrawTotal;
   
  //output of balance total
  const balanceTotalElement=document.getElementById('total-balance');
  const previousBalanceTotalString=balanceTotalElement.innerText;
  const previousBalanceTotal=parseFloat(previousBalanceTotalString); 
  const currentBalanceTotal=previousBalanceTotal-newWithdrawAmount;
  balanceTotalElement.innerText=currentBalanceTotal;
})