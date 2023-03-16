console.log('e'); 
// Create HTML elements using Javascript and appendChild
//step-1:where to add
const placesList=document.getElementById('places-list');
// step-2: what to be added
const li=document.createElement('li');
li.innerText='pahartolibon';
// step-3: add the child
placesList.appendChild(li);

// 1-where to add
const mainContainer=document.getElementById('main-content');
// 2-what to be added 
const section=document.createElement('section');
mainContainer.appendChild(section);
const h1=document.createElement('h1');  //what to add
h1.innerText='My food list';
section.appendChild(h1);


//set inner html directly
const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1>My dress section</h1>
<ul>
  <li>T-shirt</li>
  <li>Lungi</li>
  <li>pajama</li>
</ul>
`
mainContainer.appendChild(sectionDress);