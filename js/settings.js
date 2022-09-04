"use strict";

let settingsTitle = document.querySelector(".settings-title");
let langChooseTitle = document.querySelector(".languageSwitch");
let settingsblocksTitle = document.querySelector(".settings-blocks-title"); // block settings starts
let settingsBlockTime = document.querySelector(".timeSwitch");
let settingsBlockDate = document.querySelector(".dateSwitch");
let settingsBlockGreeting = document.querySelector(".greetingSwitch");
let settingsBlockQuote = document.querySelector(".quoteSwitch");
let settingsBlockWeather = document.querySelector(".weatherSwitch");
let settingsBlockAudio = document.querySelector(".audioSwitch");
let settingsBlockToDoList = document.querySelector(".toDoListSwitch"); // block settings ends
const labelTimeOn = document.querySelector(".timeOn");
const labelTimeOff = document.querySelector(".timeOff");
const labelDateOn = document.querySelector(".dateOn");
const labelDateOff = document.querySelector(".dateOff");
const labelGreetingOn = document.querySelector(".greetingOn");
const labelGreetingOff = document.querySelector(".greetingOff");
const labelQuoteOn = document.querySelector(".quoteOn");
const labelQuoteOff = document.querySelector(".quoteOff");
const labelWeatherOn = document.querySelector(".weatherOn");
const labelWeatherOff = document.querySelector(".weatherOff");
const labelPlayerOn = document.querySelector(".audioOn");
const labelPlayerOff = document.querySelector(".audioOff");
const labelToDoListOn = document.querySelector(".toDoListOn");
const labelToDoListOff = document.querySelector(".toDoListOff");

labelTimeOn.addEventListener("click", () => {
  timeScreen.classList.remove("inactive");
});
labelTimeOff.addEventListener("click", () => {
  timeScreen.classList.add("inactive");
});

labelDateOn.addEventListener("click", () => {
  dateScreen.classList.remove("inactive");
});
labelDateOff.addEventListener("click", () => {
  dateScreen.classList.add("inactive");
});

labelGreetingOn.addEventListener("click", () => {
  greetingScreen.classList.remove("inactive");
  document.querySelector(".name").value = localStorage.getItem("username");
  if (russianLang.classList.contains("activeLang")) {
    document.getElementById("greetingName").placeholder = "Введите имя";
  } else {
    document.getElementById("greetingName").placeholder = "Enter your name";
  }
});
labelGreetingOff.addEventListener("click", () => {
  greetingScreen.classList.add("inactive");
  document.querySelector(".name").value = "";
  document.getElementById("greetingName").placeholder = "";
});

labelQuoteOn.addEventListener("click", () => {
  changeQuoteBtn.classList.remove("inactive");
  textQoute.classList.remove("inactive");
  authorQuote.classList.remove("inactive");
});
labelQuoteOff.addEventListener("click", () => {
  changeQuoteBtn.classList.add("inactive");
  textQoute.classList.add("inactive");
  authorQuote.classList.add("inactive");
});

labelWeatherOn.addEventListener("click", () => {
  inputForCity.classList.remove("inactive");
  weatherIcon.classList.remove("inactive");
  erorWeather.classList.remove("inactive");
  temperature.classList.remove("inactive");
  weatherDescription.classList.remove("inactive");
  wind.classList.remove("inactive");
  humidity.classList.remove("inactive");
});
labelWeatherOff.addEventListener("click", () => {
  inputForCity.classList.add("inactive");
  weatherIcon.classList.add("inactive");
  erorWeather.classList.add("inactive");
  temperature.classList.add("inactive");
  weatherDescription.classList.add("inactive");
  wind.classList.add("inactive");
  humidity.classList.add("inactive");
});

labelPlayerOn.addEventListener("click", () => {
  player.classList.remove("inactive");
});
labelPlayerOff.addEventListener("click", () => {
  player.classList.add("inactive");
});

labelToDoListOn.addEventListener("click", () => {
  toDoListContainer.classList.remove("inactive");
});
labelToDoListOff.addEventListener("click", () => {
  toDoListContainer.classList.add("inactive");
});

function getAllSettings() {
  const dropDownMain = document.querySelector(".settings-dropdown");
  const settingsContent = document.querySelector(".settings-content");
  const langDrop = document.querySelector(".langChooseDrop");
  const langChooseForm = document.querySelector(".settings-language");
  const labelRu = document.querySelector(".labelRu");
  const labelEn = document.querySelector(".labelEn");
  const dropDownBlocks = document.querySelector(".blocksDisplayNone");
  const blocksWithSettings = document.querySelector(".settings-block-wrapper");

  dropDownMain.addEventListener("click", showSettings);
  function showSettings() {
    settingsContent.classList.toggle("inactive");
    langChooseForm.classList.add("inactive");
    if (settingsContent.classList.contains("inactive")) {
      dropDown.src = "./assets/icons/drop-down-main.png";
    } else {
      dropDown.src = "./assets/icons/collapse-arrow.png";
    }
  }

  langDrop.addEventListener("click", showLangCoose);
  function showLangCoose() {
    langChooseForm.classList.toggle("inactive");

    if (langChooseForm.classList.contains("inactive")) {
      langDrop.src = "./assets/icons/drop-down-additional.png";
    } else {
      langDrop.src = "./assets/icons/collapse-arrow.png";
    }
  }

  dropDownBlocks.addEventListener("click", showSetingsBlocks);
  function showSetingsBlocks() {
    blocksWithSettings.classList.toggle("inactive");
    if (blocksWithSettings.classList.contains("inactive")) {
      dropDownBlocks.src = "./assets/icons/drop-down-additional.png";
    } else {
      dropDownBlocks.src = "./assets/icons/collapse-arrow.png";
    }
  }

  labelRu.addEventListener("click", () => {
    englishLang.classList.remove("activeLang");
    russianLang.classList.add("activeLang");
    getLang();
    getQuotes();
    document.getElementById("greetingName").placeholder = "Введите имя";
    document.querySelector(".city").placeholder = "Минск";
    getWeatherRu();
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
  labelEn.addEventListener("click", () => {
    russianLang.classList.remove("activeLang");
    englishLang.classList.add("activeLang");
    getLang();
    getQuotes();
    document.getElementById("greetingName").placeholder = "Enter your name";
    document.querySelector(".city").placeholder = "Minsk";
    getWeatherEn();
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
}
getAllSettings();
