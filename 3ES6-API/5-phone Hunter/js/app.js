/* part-1: Load data using Phone Hunter API */
/* part-2: Display phones and implement search functionality */
/* part-3: Toggle no phone found message based on search result */
/* part-4: Show and hide loading spinner while loading API data */
/* part-5: Implement Show All button to display all data */
/* part-6: Dynamic API Data Load and search on keyboard enter button */
/* part-7: Show Phone Details data on a Modal */
/* part-8: Common API related mistakes and asynchronous Javascript */
const loadPhones = async (searchText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, dataLimit);
}
const displayPhones = (phones, dataLimit) => {
  //console.log(phones);
  //step-1: container element
  const phonesContainer = document.getElementById('phone-container');
  phonesContainer.innerContent = '';
  //display 10 phones only
  const showAll = document.getElementById('show-all');
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAll.classList.remove('d-none');
  }
  else {
    showAll.classList.add('d-none');
  }

  //display no phone found
  const noPhone = document.getElementById('no-found-message')
  if (phones.length === 0) {
    noPhone.classList.remove('d-none');
  }
  else {
    noPhone.classList.add('d-none');
  }
  //display all phones
  phones.forEach(phone => {
    //step-2: create child for each element
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    //step-3: set content of the child
    phoneDiv.innerHTML = `
    <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details </button>
      </div>
    </div>
    `
    //step-4: Append child
    phonesContainer.appendChild(phoneDiv);

  });
  /* stop loader or spinner */
  toggleSpinner(false);
}

const processSearch = (dataLimit) => {
  toggleSpinner(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhones(searchText, dataLimit);
}
//add event handler of search button
document.getElementById('btn-search').addEventListener('click', function () {
  /* start loader */
  processSearch(10);
})

//search input field key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
  //console.log(e.key);
  if (e.key === 'Enter') {
    processSearch(10);
  }
})

const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('loader');
  if (isLoading) {
    loaderSection.classList.remove('d-none')
  }
  else {
    loaderSection.classList.add('d-none');
  }
}

//not the best way load show all
document.getElementById('btn-showAll').addEventListener('click', function () {
  processSearch();
})

const loadPhoneDetails = async id => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone => {
  console.log(phone);
  const modalTitle = document.getElementById('phoneDetailModalLabel')
  modalTitle.innerText = phone.name;
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = `
<p>Release Date: ${phone.releaseDate ? phone.releaseDate: 'No release date found' }</p> 
<p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No storage information found'}
 <p>Others: ${ phone.others ? phone.others.Bluetooth : 'No bluetooth information'}
`
}
loadPhones('apple');