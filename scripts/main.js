// Cash
let hours = document.querySelector("#hours"),
  minuets = document.querySelector("#minuets"),
  seconds = document.querySelector("#seconds"),
  startBtn = document.querySelector("#start"),
  stopBtn = document.querySelector("#stop"),
  resetBtn = document.querySelector("#reset");

let theTimeAction = "";

startBtn.addEventListener("click", () => {
  theTimeAction = setInterval(() => {
    if (seconds.innerHTML >= 60) {
      minuets.innerHTML++;
      seconds.innerHTML = 0;
    } else seconds.innerHTML++;

    if (minuets.innerHTML >= 60) {
      hours.innerHTML++;
      minuets.innerHTML = 0;
    }
    if (hours.innerHTML == 24) {
      hours.innerHTML = 0;
      minuets.innerHTML = 0;
      seconds.innerHTML = 0;
    }
    if (hours.innerHTML.length == 1) hours.innerHTML = `0${hours.innerHTML}`;
    if (minuets.innerHTML.length == 1)
      minuets.innerHTML = `0${minuets.innerHTML}`;
    if (seconds.innerHTML.length == 1)
      seconds.innerHTML = `0${seconds.innerHTML}`;
  }, 1000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(theTimeAction);
});
resetBtn.addEventListener("click", () => {
  clearInterval(theTimeAction);
  hours.innerHTML = "00";
  minuets.innerHTML = "00";
  seconds.innerHTML = "00";
});
