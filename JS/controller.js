import quotes from './quotes-data.js';

let selectedCategory = "science";
let quoteIndex = 0;
let selectedQuoteList = quotes.filter(q => q.category === selectedCategory);

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("quoted-by");
const toggleSwitch = document.querySelector("#toggle-switch input");

function displayQuote(currentQuote) {
  quoteText.innerText = currentQuote.quote;
  authorText.innerText = `-- ${currentQuote.author}`;
}

function generateRandomQuote() {
  let randomIndex;
  const randomQuotes = quotes; 

  do {
    randomIndex = Math.floor(Math.random() * randomQuotes.length);
  } while (randomIndex === quoteIndex);

  quoteIndex = randomIndex;
  const currentQuote = randomQuotes[randomIndex];
  displayQuote(currentQuote); 
}

function nextQuote() {
  quoteIndex = (quoteIndex + 1) % selectedQuoteList.length;
  displayQuote(selectedQuoteList[quoteIndex]);
}

function previousQuote() {
  quoteIndex = (quoteIndex - 1 + selectedQuoteList.length) % selectedQuoteList.length;
  displayQuote(selectedQuoteList[quoteIndex]);
}

function categoryChange(select) {
  selectedCategory = select.value;
  selectedQuoteList = quotes.filter(q => q.category === selectedCategory);
  quoteIndex = 0;
  displayQuote(selectedQuoteList[quoteIndex]);
}

function fontChange(action) {
  const currentSize = parseFloat(window.getComputedStyle(quoteText).fontSize);
  if (action === 'add') {
    quoteText.style.fontSize = `${currentSize + 2}px`;
  } else if (action === 'sub') {
    quoteText.style.fontSize = `${currentSize - 2}px`;
  }
}

function copyQuote() {
  const fullQuote = `${quoteText.innerText} ${authorText.innerText}`;
  navigator.clipboard.writeText(fullQuote).then(() => {
    alert("Quote copied!");
  });
}

toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

window.previousQuote = previousQuote;
window.nextQuote = nextQuote;
window.generateRandomQuote = generateRandomQuote;
window.categoryChange = categoryChange;
window.copyQuote = copyQuote;
window.fontChange = fontChange;

displayQuote(selectedQuoteList[quoteIndex]);
