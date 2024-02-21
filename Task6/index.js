let startTime;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date().getTime();
    Stopwatch();
  }
}

function Stopwatch() {
  if (isRunning) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);

    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('stopwatch').innerText = formattedTime;

    setTimeout(Stopwatch, 1000);
  }
}

function resetStopwatch() {
  isRunning = false;
  document.getElementById('stopwatch').innerText = '0:00';
}