"use strict";

const weatherContainer = document.querySelector(".weather");
const erorWeather = document.querySelector(".weather-error");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const inputForCity = document.querySelector(".city");
let nameCity = inputForCity.value;

russianLang.addEventListener("click", () => {
  document.querySelector(".city").placeholder = "Минск";
  getWeatherRu();
});
englishLang.addEventListener("click", () => {
  document.querySelector(".city").placeholder = "Minsk";
  getWeatherEn();
});

async function getWeatherRu() {
  try {
    let url;
    if (!inputForCity.value) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=0ad8368c57b2030123cccd15b37dafe2&units=metric`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&lang=ru&appid=0ad8368c57b2030123cccd15b37dafe2&units=metric`;
    }

    const response = await fetch(url);
    const data = await response.json();
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Скорость ветра ${Math.round(data.wind.speed)} м/с`;
    humidity.textContent = `Влажность ${Math.round(data.main.humidity)}%`;
    erorWeather.textContent = "";
  } catch (e) {
    weatherIcon.textContent = "";
    temperature.textContent = "";
    weatherDescription.textContent = "";
    wind.textContent = "";
    humidity.textContent = "";
    erorWeather.textContent = "я не нашел такого города! Давай еще раз)";
  }
}
getWeatherRu();

async function getWeatherEn() {
  try {
    let url;
    if (!inputForCity.value) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=0ad8368c57b2030123cccd15b37dafe2&units=metric`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&lang=en&appid=0ad8368c57b2030123cccd15b37dafe2&units=metric`;
    }

    const response = await fetch(url);
    const data = await response.json();
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed ${Math.round(data.wind.speed)} m/sec`;
    humidity.textContent = `Humidity ${Math.round(data.main.humidity)}%`;
    erorWeather.textContent = "";
  } catch (e) {
    weatherIcon.textContent = "";
    temperature.textContent = "";
    weatherDescription.textContent = "";
    wind.textContent = "";
    humidity.textContent = "";
    erorWeather.textContent = "Didn't found! Come again:)";
  }
}

function storeCity() {
  inputForCity.addEventListener("input", keepCityName); // listen for every change in input
  inputForCity.addEventListener("input", () => {
    if (russianLang.classList.contains("activeLang")) {
      getWeatherRu();
    } else {
      getWeatherEn();
    }
  });
  window.addEventListener("beforeunload", keepCityName); // listen for leaving page or upload the page
  window.addEventListener("load", getCityFromLocalStorage); // listen for load the page

  function keepCityName() {
    nameCity = inputForCity.value;
    localStorage.setItem("city", nameCity);
  }

  function getCityFromLocalStorage() {
    inputForCity.value = localStorage.getItem("city");
  }
}

storeCity();
