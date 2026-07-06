let timeLeft = 60 * 60; // 1 hour

const timer = document.getElementById("timer");

function updateTimer() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    timer.textContent =
        `${String(hours).padStart(2,'0')}:` +
        `${String(minutes).padStart(2,'0')}:` +
        `${String(seconds).padStart(2,'0')}`;

    if (timeLeft <= 0) {
        clearInterval(interval);
        timer.textContent = "00:00:00";
        return;
    }

    timeLeft--;
}

updateTimer();
const interval = setInterval(updateTimer, 1000);
