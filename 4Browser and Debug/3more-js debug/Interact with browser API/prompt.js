/* Browser alert, confirm, prompt */
// alert('How are you?')
const showAlert=()=>{
  alert('Dosto,  Taka aca dhar dite parbi 3999?')
}
 
const lendMoney=()=>{
  const result = confirm('Will you lend me 599TK?');
  console.log(result);
  if (result===true){
    alert('Tui amar Janer dosto!!!')
  }
  else{
    console.log('DGM...Toke ajkae Block dimu');
  }
}
const getInfo=()=>{
  //alert
  //confirm
  prompt('Tell me your name')
}
