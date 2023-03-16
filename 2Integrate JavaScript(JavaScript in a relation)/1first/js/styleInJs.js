// Styling dom properties, add and remove css class using JS
const sections= document.querySelectorAll('section');
for (const section of sections){
   section.style.border= '3px solid blue';
   section.style.marginBottom='5px';
   section.style.borderRadius='15px';
   section.style.paddingLeft='7px';
   section.style.background='lightgray';
}
/* const placesContainer=document.getElementById('places-container');
placesContainer.style.background='blue'; */

/* Add,remove class */
const placesContainer=document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');
placesContainer.classList.remove('large-text');