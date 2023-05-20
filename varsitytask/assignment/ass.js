// Define an array of quiz data (word and corresponding definition)
const quizData = [
  { word: "Apple", definition: "A fruit that is typically red or green" },
  { word: "Car", definition: "A road vehicle with an engine" },
  { word: "Book", definition: "A written or printed work consisting of pages" },
  // Add more quiz data as needed
];

let currentQuizIndex = 0; // Index to keep track of the current quiz

// Function to fetch a new word and display it
function fetchWord() {
  // Get the elements from the HTML page
  const wordElement = document.getElementById("word");
  const guessElement = document.getElementById("guess");

  // Clear the guess input field
  guessElement.value = "";

  // Check if there are more quizzes available
  if (currentQuizIndex < quizData.length) {
      // Get the word from the quiz data and display it
      const word = quizData[currentQuizIndex].word;
      wordElement.textContent = word;
  } else {
      // If all quizzes have been completed, display a message
      wordElement.textContent = "Quiz completed!";
      guessElement.disabled = true; // Disable the input field
  }
}

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  const guess = document.getElementById("guess").value;

  // Get the correct definition for the current word
  const definition = quizData[currentQuizIndex].definition;

  // Check if the guess matches the definition
  if (guess.toLowerCase() === definition.toLowerCase()) {
      alert("You are correct!");
  } else {
      alert("You are incorrect!");
  }

  currentQuizIndex++; // Move to the next quiz
  fetchWord(); // Fetch and display the next word
}

// Initial setup: Fetch and display the first word
window.onload = fetchWord;


function doSomething(){
  console.log("Halt!");
  debugger;
  console.log('continue')
}
doSomething();