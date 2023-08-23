let songIndex = 0;
let audioElement = new Audio("1.mp3.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songs = [
  {
    songName: "Night-Changes",
    filePath: "./pics/1.mp3.mp3",
    coverPath: "./pics/download(1).jpg",
  },
  {
    songName: "Night-Changes",
    filePath: "./pics/1.mp3.mp3",
    coverPath: "./pics/download(1).jpg",
  },
  {
    songName: "Night-Changes",
    filePath: "./pics/1.mp3.mp3",
    coverPath: "./pics/download(1).jpg",
  },
  {
    songName: "Night-Changes",
    filePath: "./pics/1.mp3.mp3",
    coverPath: "./pics/download(1).jpg",
  },
  {
    songName: "Night-Changes",
    filePath: "./pics/1.mp3.mp3",
    coverPath: "./pics/download(1).jpg",
  },
  {
    songName: "Night-Changes",
    filePath: "./pics/1.mp3.mp3",
    coverPath: "./pics/download(1).jpg",
  },
  {
    songName: "Night-Changes",
    filePath: "./pics/1.mp3.mp3",

    coverPath: "./pics/download(1).jpg",
  },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  }
});
