/* part-1: Load data using Phone Hunter API */
/* part-2: Display phones and implement search functionality */

const loadPhones = async() =>{
  const url= `https://openapi.programming-hero.com/api/phones?search=iphone`
  const res=await fetch(url);
  const data= await res.json();
  displayPhones(data.data);
}
const displayPhones=phones=>{
  //console.log(phones);
  //step-1: container element
  const phonesContainer=document.getElementById('phone-container');
  phones.forEach(phone=>{
    //step-2: create child for each element
    const phoneDiv=document.createElement('div');
    phoneDiv.classList.add('col');
    //step-3: set content of the child
    phoneDiv.innerHTML=`
    <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
    `
    //step-4: Append child
    phonesContainer.appendChild(phoneDiv);

  })
}
loadPhones();