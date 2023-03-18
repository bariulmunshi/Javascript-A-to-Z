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

/* Create a comment box and display comment */
    //step-1:addEventListener to the post button
    document.getElementById('btn-post').addEventListener('click',function(){
      //step-2: get the comment  inside the text area
    const commentBox=document.getElementById('new-comment');
    const newComment=commentBox.value;
    //step-3: set the comment inside the comment container
    const commentContainer=document.getElementById('comment-container');
    const p=document.createElement('p');
    p.innerText=newComment;
    commentContainer.appendChild(p);
    //step-4:clear the text area
    commentBox.value='';
    })    
    
    
     /* ==============Simple github like delete confirmation button============= */
    /* document.getElementById('text-field').addEventListener('focus',function (){
      console.log("event trigger inside the input field");
    })
    document.getElementById('text-field').addEventListener('blur',function (){
      console.log("event trigger inside the input blur");
    }) */
    /* document.getElementById('text-field').addEventListener('keydown',function (event){
      console.log(event.target.value);
    }) */
    /* document.getElementById('text-field').addEventListener('keydpress',function (event){
      console.log(event.target.value);
    }) */
    document.getElementById('text-field').addEventListener('keyup',function (event){
      console.log(event.target.value);
    })
    document.getElementById('btn-more').addEventListener('mousemove',function(){
      console.log('event')
    })
    /* Github */
    document.getElementById('delete-confirm').addEventListener('keyup',function(event){
      const text=event.target.value;
      const deleteBtn=document.getElementById('btn-delete');
      if(text==='delete'){
        deleteBtn.removeAttribute('disabled');
      }
      else{
        deleteBtn.setAttribute('disabled',true);
      }
    })
    document.getElementById('btn-delete').addEventListener('click',function(){
      const secret=document.getElementById('secret-info');
      secret.style.display=' none';
    })
    
/* Event bubble and Stop propagating */
document.getElementById('item-2').addEventListener('click',function(event){
  console.log('clickd-2')
  // event.stopImmediatePropagation();
 });
 document.getElementById('item-2').addEventListener('click',function(event){
  console.log('clickd-2.1')
 });
 document.getElementById('item-2').addEventListener('click',function(event){
  console.log('clickd-2.2')
 });
  document.getElementById('list-ul').addEventListener('click',function(){
    console.log('clicked ul')
  })
  document.getElementById('list-container').addEventListener('click',function(){
    console.log('clicked section-container')
  })
  document.getElementById('body').addEventListener('click',function(){
    console.log('clicked body-container')
  })

  