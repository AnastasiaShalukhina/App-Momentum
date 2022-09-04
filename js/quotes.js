"use strict";
const quotesContainer = document.querySelector(".quote-container");
const changeQuoteBtn = document.querySelector(".change-quote");
let textQoute = document.querySelector(".quote");
let authorQuote = document.querySelector(".author");
let quotes;
function getLang() {
  if (russianLang.classList.contains("activeLang")) {
    quotes = "quotesRu.json";
    getQuotes();
  } else if (englishLang.classList.contains("activeLang")) {
    quotes = "quotesEn.json";
    getQuotes();
  }
}
getLang();

async function getQuotes() {
  try {
    const response = await fetch(quotes);
    const data = await response.json();

    function getRandomInInterval(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadQuote() {
      let randomQuoteNum = Math.round(getRandomInInterval(0, 10));
      textQoute.textContent = data[randomQuoteNum].text;
      authorQuote.textContent = data[randomQuoteNum].author;
    }
    loadQuote();
    changeQuoteBtn.addEventListener("click", loadQuote);
  } catch (error) {
    return false;
  }
}
getQuotes();
window.addEventListener("load", getQuotes);

russianLang.addEventListener("click", () => {
  quotes = "quotesRu.json";
  getQuotes();
});
englishLang.addEventListener("click", () => {
  quotes = "quotesEn.json";
  getQuotes();
});
