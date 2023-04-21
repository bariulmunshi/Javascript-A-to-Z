/*  Load posts and display on the website with CSS */
function loadPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
/* 
1.get container element where you want to  add new element
2.create child element
3.set innerText or innerHTML
4.appendChild
*/
function displayPost(posts) {
  const postsContainer = document.getElementById('post-container');
  for (const post of posts) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post')
    postDiv.innerHTML = `
      <h4>User-${post.userId}</h4>
      <h5>Post: ${post.title}</h5>
      <p>Post Description: ${post.body}</p>
      `;
    postsContainer.appendChild(postDiv);
  }
}
loadPost();

