let secondsHand = document.querySelector(".secondsHand");
let minutesHand = document.querySelector(".minutesHand");
let hoursHand = document.querySelector(".hoursHand");

const tickingClock = new Audio("./assets/audio/ticking_clock.wav"); // Clock sound

function setTime() {
    tickingClock.play(); // Play clock sound
    let time = new Date();

    // Seconds
    let seconds = time.getSeconds();
    let secondsDegrees = (seconds / 60) * 360 + 89;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Minutes
    let minutes = time.getMinutes();
    let minutesDegrees = (minutes / 60) * 360 + 89 + seconds / 10;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Hours
    let hours = time.getHours();
    let hoursDegrees = (hours / 12) * 360 + 89 + minutes / 2;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(() => setTime(), 1000);
