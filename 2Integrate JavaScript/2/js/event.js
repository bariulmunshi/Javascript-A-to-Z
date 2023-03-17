/* option-2:onclik function (we will use it) */
function makeRed(){
  document.body.style.backgroundColor='red';
}

/* Option-3:onclick */
const makeBlueBtn=document.getElementById('make-blue');
makeBlueBtn.onclick=makeBlue;
function makeBlue() {
  document.body.style.backgroundColor='yellow';
}
/* Option-3:another onclick */
const purpleButton=document.getElementById('make-purple')
purpleButton.onclick=function makePurple(){
  document.body.style.background='purple';
}
  
/* option-4: onclick */
const pinkBtn=document.getElementById('make-pink');
pinkBtn.addEventListener('click',makePink);
function makePink(){
  document.body.style.backgroundColor='pink';
}
/* option-4:another onclick */
const greenBtn=document.getElementById('make-green');
greenBtn.addEventListener('click',function makeGreen(){
  document.body.style.backgroundColor='green';
})
/* option-4: final onclick (important we will use it) */
document.getElementById('make-goldenRod').addEventListener('click',function (){
  document.body.style.backgroundColor='goldenrod';
})

/* Most common ways to set Event Handlers */
//option-1  
function handleOnClick(){
  // console.log('button onclick');
  const handlerStatus=document.getElementById('handlers-status');
  handlerStatus.innerText='Handled by  function attached on click attribute';
}
// option-2
document.getElementById('event-listener').addEventListener('click',function(){
  const handlerStatus=document.getElementById('handlers-status');
  handlerStatus.innerText='Text updated by addEvent listener btn';
})
//option-2:recap
document.getElementById('btn-update').addEventListener('click',function(){
  // console.log('updated btn');
  const inputField=document.getElementById('input-field');
  // console.log('is it available');
  const inputText=inputField.value;
  const p=document.getElementById('input-text-display');
  p.innerText=inputText;
  inputField.value ='';
})