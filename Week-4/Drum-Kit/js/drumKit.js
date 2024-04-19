const buttons = document.querySelectorAll(".btn");
let note;

document.getElementById("a").focus(); // When you access the page first time, keyboard event do not work without mouse click on button. Problem was solved like this.

const boom = new Audio("./assets/audio/boom.wav");
const clap = new Audio("./assets/audio/clap.wav");
const hihat = new Audio("./assets/audio/hihat.wav");
const kick = new Audio("./assets/audio/kick.wav");
const openhat = new Audio("./assets/audio/openhat.wav");
const ride = new Audio("./assets/audio/ride.wav");
const snare = new Audio("./assets/audio/snare.wav");
const tink = new Audio("./assets/audio/tink.wav");
const tom = new Audio("./assets/audio/tom.wav");

buttons.forEach((btn) =>
    ["click", "keydown"].forEach(
        (event) => btn.addEventListener(event, drum) // Multiple event listener
    )
);

function drum(e) {
    e.type == "click"
        ? (note = e.target.innerHTML) // From click event
        : (note = e.key.toUpperCase()); // From keydown event

    document.getElementById(`${note.toLowerCase()}`).classList.add("btnPressed"); // Add class to button
    setTimeout(() => document.querySelectorAll(".btn").forEach((event) => event.classList.remove("btnPressed")), 200) // Remove class from all buttons

    document.getElementById(`clip${note.toUpperCase()}`).classList.add("animation")
    setTimeout(() => document.querySelectorAll(".clip").forEach((event) => event.classList.remove("animation")) , 200 )

    switch (note) {
        case "A":
            playAudio(boom);
            break;
        case "S":
            playAudio(clap);
            break;
        case "D":
            playAudio(hihat);
            break;
        case "F":
            playAudio(kick);
            break;
        case "G":
            playAudio(openhat);
            break;
        case "H":
            playAudio(ride);
            break;
        case "J":
            playAudio(snare);
            break;
        case "K":
            playAudio(tink);
            break;
        case "L":
            playAudio(tom);
            break;
    }
}

function playAudio(audio) {
    audio.currentTime = 0;
    audio.play();
}
