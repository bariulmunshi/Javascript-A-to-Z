document.getElementById('submit-deposite').addEventListener('click',function(){
  //for input 
  const  depositeField= document.getElementById('deposite-input');
  // const newdepositeAmount =depositeField.value;
  // depositeField.value;
  //for output
  const depositeTotalElement=document.getElementById('deposite-total');
  // const previousdepositeTotal=depositeTotalElement.innerText;
  const currentDepositTotal=depositeField.value+depositeTotalElement.innerText;
  depositeTotalElement.innerText= currentDepositTotal;
 
  //clear the deposit field
  depositeField.value='';
})