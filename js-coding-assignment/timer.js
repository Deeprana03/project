let time = 3600;
let timer;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("timer").innerText =
    minutes + ":" + seconds;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(timer);
        document.getElementById("message").innerText = "Time's Up!";
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  time = 3600;
  updateDisplay();
  document.getElementById("message").innerText = "";
}

updateDisplay();