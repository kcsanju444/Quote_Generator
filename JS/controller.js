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




