"use strict";
const player = document.querySelector(".player");

function playAudio() {
  const playPause = document.getElementById("play_pause");
  const audio = document.getElementById("audio");
  const trackNext = document.querySelector(".play-next");
  const trackPrev = document.querySelector(".play-prev");
  const trackList = document.querySelectorAll(".play-item");
  const trackTitleDiv = document.querySelector(".track-title");
  const trackDuration = document.querySelector(".time-duration");
  let audioProgress = document.querySelector(".progress-bar");
  const audioOnOff = document.querySelector(".volume-on-off");
  const volumeIcon = document.querySelector(".volume-icon");
  const volumeBar = document.querySelector(".volume-bar");
  const track01Btn = document.querySelector(".country");
  const track02Btn = document.querySelector(".women");
  const track03Btn = document.querySelector(".pants");
  const track04Btn = document.querySelector(".hypothetically");
  let isPlay = false;
  let playNum = 1;

  function playTrack() {
    if (!isPlay) {
      audio.play();
      playPause.classList.toggle("pause");
      isPlay = true;
    } else {
      audio.pause();
      playPause.classList.toggle("pause");
      isPlay = false;
    }
  }
  playPause.addEventListener("click", playTrack);

  function colorTrackItem() {
    for (let i = 0; i < 4; i++) {
      trackList[i].classList.remove("track-coloured");
    }
    trackList[+playNum - 1].classList.add("track-coloured");
  }

  function play() {
    audio.play();
    playPause.classList.add("pause");
    isPlay = true;
  }

  trackNext.addEventListener("click", () => {
    playNum = +playNum + 1;
    if (playNum > 4) {
      playNum = 1;
    }
    playNum = "0" + playNum;
    audio.src = `./assets/sounds/${playNum}.mp3`;
    play();
    colorTrackItem();
    getTrackName();
  });

  trackPrev.addEventListener("click", () => {
    playNum = +playNum - 1;
    if (playNum < 1) {
      playNum = 4;
    }
    playNum = "0" + playNum;
    audio.src = `./assets/sounds/${playNum}.mp3`;
    play();
    colorTrackItem();
    getTrackName();
  });

  function nonStop() {
    playNum = +playNum + 1;
    if (playNum > 4) {
      playNum = 1;
    }
    playNum = "0" + playNum;
    audio.src = `./assets/sounds/${playNum}.mp3`;
    play();
    colorTrackItem();
  }
  audio.addEventListener("ended", nonStop);

  function getTrackName() {
    if (+playNum === 1) {
      trackTitleDiv.textContent = "А в моей стране всё есть";
    } else if (+playNum === 2) {
      trackTitleDiv.textContent = "Женщина в лексусе";
    } else if (+playNum === 3) {
      trackTitleDiv.textContent = "Песня про трусы";
    } else if (+playNum === 4) {
      trackTitleDiv.textContent = "Чисто гипотетически";
    }
  }
  getTrackName();

  function getCurrentTrackTime() {
    let trackFullDuration = Math.floor(audio.duration);
    let trackCurrentDuration = Math.floor(audio.currentTime);
    if (trackCurrentDuration < 10) {
      trackCurrentDuration = "0" + trackCurrentDuration;
    }
    trackDuration.textContent = `0:${trackCurrentDuration} / 0:${trackFullDuration}`;
    let progressValue = Math.round(
      (+trackCurrentDuration / trackFullDuration) * 100
    );
    audioProgress.value = progressValue;

    audioProgress.addEventListener("input", function changeCurrentTrackTime() {
      audio.currentTime = (trackFullDuration * this.value) / 100;
    });

    setTimeout(getCurrentTrackTime, 1000);
  }
  getCurrentTrackTime();

  audioOnOff.addEventListener("click", () => {
    if (!audio.muted) {
      audio.muted = true;
      volumeIcon.src = "./assets/icons/volume-off.png";
    } else {
      audio.muted = false;
      volumeIcon.src = "./assets/icons/volume-on.png";
    }
  });
  function regulateVolume() {
    volumeBar.addEventListener("input", function getAudioVolume() {
      audio.volume = this.value;
    });
  }
  regulateVolume();

  track01Btn.addEventListener("click", () => {
    playNum = 1;
    playNum = "0" + playNum;
    audio.src = `./assets/sounds/${playNum}.mp3`;
    playTrack();
    colorTrackItem();
    getTrackName();
    track01Btn.classList.toggle("pause");
  });

  track02Btn.addEventListener("click", () => {
    playNum = 2;
    playNum = "0" + playNum;
    audio.src = `./assets/sounds/${playNum}.mp3`;
    playTrack();
    colorTrackItem();
    getTrackName();
    track02Btn.classList.toggle("pause");
  });

  track03Btn.addEventListener("click", () => {
    playNum = 3;
    playNum = "0" + playNum;
    audio.src = `./assets/sounds/${playNum}.mp3`;
    playTrack();
    colorTrackItem();
    getTrackName();
    track03Btn.classList.toggle("pause");
  });

  track04Btn.addEventListener("click", () => {
    playNum = 4;
    playNum = "0" + playNum;
    audio.src = `./assets/sounds/${playNum}.mp3`;
    playTrack();
    colorTrackItem();
    getTrackName();
    track04Btn.classList.toggle("pause");
  });
}
playAudio();

console.log(
  "1)Часы и календарь: все ок +15; 2) Приветствие тоже ок +10; 3)Смена фонового изображения: не всегда плавно меняются фото, когда отлистываюься обратно, то плавно +17,5; 4)Виджет погоды: ок +15; 5) Виджет цитата дня - ок +10; 6)Аудиоплеер: есть +15 7)Продвинутый аудиоплеер: треки можно запускать по кнопке рядом, но если сразу запустить следующий, то предыдущий не остановится, а если сначала нажать паузу, а потом следующий, то все ок. Реализация есть, но начислять полные баллы или нет, решать конечно тебе. По-моему, можно засчитать +20 8)Перевод реализован кнопками в правом верхнем углу и в настройках +15 9)API нету 10)Настройки - есть смена языка и отображение блоков +6 10)есть список дел +10. Итого, самооценка  133,5"
);
