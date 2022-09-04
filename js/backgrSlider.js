"use strict";

function estimateBackgrSlider() {
  let randomNumber;
  let TimeOfDay;
  let BackgroundURL;
  function fillBackgroungWithRandomImg() {
    const now = new Date();
    let hours = now.getHours();

    if (hours >= 0 && hours < 6) {
      TimeOfDay = "night";
    } else if (hours >= 6 && hours < 12) {
      TimeOfDay = "morning";
    } else if (hours >= 12 && hours < 18) {
      TimeOfDay = "afternoon";
    } else if (hours >= 18 && hours < 24) {
      TimeOfDay = "evening";
    }

    function getRandomInInterval(min, max) {
      return Math.random() * (max - min) + min;
    }
    randomNumber = Math.floor(getRandomInInterval(1, 21));
    if (randomNumber < 10) {
      randomNumber = "0" + randomNumber;
    }

    BackgroundURL = `url('https://raw.githubusercontent.com/AnastasiaShalukhina/stage1-tasks/assets/images/${TimeOfDay}/${randomNumber}.jpg')`;

    document.body.style.backgroundImage = BackgroundURL;
    document.body.style.backgroundSize = "cover";
  }

  window.addEventListener("DOMContentLoaded", fillBackgroungWithRandomImg);
  window.addEventListener("load", fillBackgroungWithRandomImg);

  function getSlideNext() {
    randomNumber = +randomNumber + 1;
    if (randomNumber > 20) {
      randomNumber = "1";
    }
    if (+randomNumber < 10) {
      randomNumber = "0" + randomNumber;
    }
  }

  let arrowRight = document.querySelector(".slide-next");
  arrowRight.addEventListener("click", function () {
    getSlideNext();
    BackgroundURL = `url('https://raw.githubusercontent.com/AnastasiaShalukhina/stage1-tasks/assets/images/${TimeOfDay}/${randomNumber}.jpg')`;
    document.body.style.backgroundImage = BackgroundURL;
  });

  function getSlidePrev() {
    randomNumber = +randomNumber - 1;
    if (+randomNumber < 1) {
      randomNumber = "20";
    }
    if (+randomNumber < 10) {
      randomNumber = "0" + randomNumber;
    }
  }

  let arrowLeft = document.querySelector(".slide-prev");
  arrowLeft.addEventListener("click", function () {
    getSlidePrev();
    BackgroundURL = `url('https://raw.githubusercontent.com/AnastasiaShalukhina/stage1-tasks/assets/images/${TimeOfDay}/${randomNumber}.jpg')`;
    document.body.style.backgroundImage = BackgroundURL;
  });
}

estimateBackgrSlider();
