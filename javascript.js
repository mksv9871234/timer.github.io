    let countdown;
    let timeLeft = 0; // Time in seconds
    const timerDisplay = document.getElementById('timer');

    function displayTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
        timerDisplay.textContent = display;
    }

    function startTimer() {
        displayTime(timeLeft); // Display initial time
        countdown = setInterval(() => {
            timeLeft++;
            displayTime(timeLeft);
        }, 1000);
    }

    function stopTimer() {
        clearInterval(countdown);
    }