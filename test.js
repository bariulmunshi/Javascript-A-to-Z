// Define the array of words
const words = ['alter', 'maze', 'striker', 'ladder', 'kernel', 'gem'];

// Loop through each element in the array
for (let i = 0; i < words.length; i++) {
  // Check if the element contains the sequence 'er'
  if (words[i].includes('er')) {
    // Remove the element from the array
    words.splice(i, 1);
    // Decrement the loop counter to adjust for the removed element
    i--;
  }
}

// Convert the remaining words to upper case
const uppercaseWords = words.map(word => word.toUpperCase());

// Function to display the uppercase words when the button is clicked
function displayUppercaseWords() {
  // Get the element with ID 'output'
  const output = document.getElementById('output');
  // Set the text content of the element to the uppercase words
  output.textContent = uppercaseWords.join(', ');
}
