//step-1: add click event handler with the submit btn
document.getElementById('submit-btn').addEventListener('click',function(){
  //step-2: email address inside the email input field 
  const emailField=document.getElementById('user-email');
  const email=emailField.value;
  const passwordField=document.getElementById('user-password');
  const password=passwordField.value;
  //don't verify email and password on the client side
  //step-3: verify email and password
  if(email==='bariulsoft@gmail.com' && password==='bariulsoft'){
    // console.log('valid user');
    window.location.href='bank.html';
  }
  else{
   alert('invalid User');
  }
})
