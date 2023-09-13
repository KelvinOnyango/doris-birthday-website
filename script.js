// Your girlfriend's birthday (Month is 0-based, so 10 represents November)
const birthday = new Date(2023, 8, 14);

function updateCountdown() {
    const now = new Date();
    const timeRemaining = birthday - now;

    if (timeRemaining <= 0) {
        // Countdown is over, trigger fireworks or other visual effect here
        displayFireworks();
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = padZero(days);
    document.getElementById('hours').innerText = padZero(hours);
    document.getElementById('minutes').innerText = padZero(minutes);
    document.getElementById('seconds').innerText = padZero(seconds);
}

function padZero(number) {
    return number < 10 ? `0${number}` : number;
}

function displayFireworks() {
    // Add your fireworks animation or other visual effect code here
    const fireworksElement = document.createElement('div');
    fireworksElement.classList.add('fireworks');
    document.body.appendChild(fireworksElement);

    // After a certain duration (e.g., 5 seconds), remove the fireworks element
    setTimeout(() => {
        fireworksElement.remove();
    }, 5000); // Adjust the duration as needed
}

// Initial call to update the countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
