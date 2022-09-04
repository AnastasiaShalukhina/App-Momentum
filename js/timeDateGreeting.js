"use strict";

const russianLang = document.querySelector(".russian");
const englishLang = document.querySelector(".english");
const timeScreen = document.querySelector(".time");
const dateScreen = document.querySelector(".date");
let greetingScreen = document.querySelector(".greeting");
let greetingInput = document.querySelector(".greetingName");

russianLang.addEventListener("click", () => {
  russianLang.classList.add("activeLang");
  englishLang.classList.remove("activeLang");
});
englishLang.addEventListener("click", () => {
  englishLang.classList.add("activeLang");
  russianLang.classList.remove("activeLang");
});

russianLang.addEventListener("click", function () {
  document.getElementById("greetingName").placeholder = "Введите имя";
  settingsTitle.textContent = "Настройки";
  langChooseTitle.textContent = "Выбрать язык";
  settingsblocksTitle.textContent = "Показать/скрыть блоки";
  settingsBlockTime.textContent = "время";
  settingsBlockDate.textContent = "дата";
  settingsBlockGreeting.textContent = "приветствие";
  settingsBlockQuote.textContent = "цитата";
  settingsBlockWeather.textContent = "погода";
  settingsBlockAudio.textContent = "аудио";
  settingsBlockToDoList.textContent = "список дел";
});
englishLang.addEventListener("click", function () {
  document.getElementById("greetingName").placeholder = "Enter your name";
  settingsTitle.textContent = "Settings";
  langChooseTitle.textContent = "Choose language";
  settingsblocksTitle.textContent = "Show/hide blocks";
  settingsBlockTime.textContent = "time";
  settingsBlockDate.textContent = "date";
  settingsBlockGreeting.textContent = "greeting";
  settingsBlockQuote.textContent = "quote";
  settingsBlockWeather.textContent = "weather";
  settingsBlockAudio.textContent = "audio";
  settingsBlockToDoList.textContent = "to Do List";
});

function showTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString("ru-Ru");
  timeScreen.textContent = currentTime; // time output to the screen

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const currentDateRus = now.toLocaleDateString("ru-Ru", options);
  let spaceIndexRus = currentDateRus.lastIndexOf(" ");
  let monthRus = currentDateRus.slice(spaceIndexRus + 1);
  let monthCapitalRus = monthRus[0].toUpperCase() + monthRus.slice(1);

  const currentDateEn = now.toLocaleDateString("en-En", options);
  let spaceIndexEn = currentDateEn.lastIndexOf(" ");
  let monthEn = currentDateEn.slice(spaceIndexEn + 1);
  let monthCapitalEn = monthEn[0].toUpperCase() + monthEn.slice(1);

  // date output to the screen with capitalization of month and weekday
  if (russianLang.classList.contains("activeLang")) {
    dateScreen.textContent =
      currentDateRus[0].toUpperCase() +
      currentDateRus.slice(1, spaceIndexRus + 1) +
      monthCapitalRus;
  } else if (englishLang.classList.contains("activeLang")) {
    dateScreen.textContent =
      currentDateEn[0].toUpperCase() +
      currentDateEn.slice(1, spaceIndexEn + 1) +
      monthCapitalEn;
  }

  let hours = now.getHours();
  let greetingRus;
  if (hours >= 0 && hours < 6) {
    greetingRus = "Доброй ночи";
  } else if (hours >= 6 && hours < 12) {
    greetingRus = "Доброе утро";
  } else if (hours >= 12 && hours < 18) {
    greetingRus = "Добрый день";
  } else if (hours >= 18 && hours < 24) {
    greetingRus = "Добрый вечер";
  }
  let greetingEn;
  if (hours >= 0 && hours < 6) {
    greetingEn = "Good night";
  } else if (hours >= 6 && hours < 12) {
    greetingEn = "Good morning";
  } else if (hours >= 12 && hours < 18) {
    greetingEn = "Good afternoon";
  } else if (hours >= 18 && hours < 24) {
    greetingEn = "Good evening";
  }

  if (russianLang.classList.contains("activeLang")) {
    greetingScreen.textContent = greetingRus;
  } else if (englishLang.classList.contains("activeLang")) {
    greetingScreen.textContent = greetingEn;
  }
  setTimeout(showTime, 500);
}

showTime();

function storeName() {
  let inputForName = document.querySelector(".name");
  inputForName.addEventListener("input", keepUserName); // listen for every change in input
  window.addEventListener("beforeunload", keepUserName); // listen for leaving page or upload the page
  window.addEventListener("load", getLocalStorage); // listen for load the page

  function keepUserName() {
    let nameUser = inputForName.value;
    localStorage.setItem("username", nameUser);
  }

  function getLocalStorage() {
    if (localStorage.getItem("username")) {
      inputForName.value = localStorage.getItem("username");
    }
  }
}

storeName();
