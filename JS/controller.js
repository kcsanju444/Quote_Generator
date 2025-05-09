import quotes from './quotes-data.js';

let selectedCategory = "science";
let quoteIndex = 0;
let selectedQuoteList = quotes.filter(q => q.category === selectedCategory);

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("quoted-by");
const toggleSwitch = document.querySelector("#toggle-switch input");

function displayQuote() {
  const current = selectedQuoteList[quoteIndex];
  quoteText.innerText = current.quote;
  authorText.innerText = `-- ${current.author}`;
}
function generateRandomQuote() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * selectedQuoteList.length);
    } while (randomIndex === quoteIndex);
    quoteIndex = randomIndex;
    displayQuote();
  }
  
  function nextQuote() {
    quoteIndex = (quoteIndex + 1) % selectedQuoteList.length;
    displayQuote();
  }
  
  function previousQuote() {
    quoteIndex = (quoteIndex - 1 + selectedQuoteList.length) % selectedQuoteList.length;
    displayQuote();
  }
  
  window.previousQuote = previousQuote;
  window.nextQuote = nextQuote;
  window.generateRandomQuote = generateRandomQuote;
  window.categoryChange = categoryChange;
  displayQuote();
  


