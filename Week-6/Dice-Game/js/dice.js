const result = document.querySelector(".result");
const button = document.querySelector("button");
const diceP1DOM = document.querySelector("#diceP1");
const diceP2DOM = document.querySelector("#diceP2");

const diceArray = ["one", "two", "three", "four", "five", "six"];

button.addEventListener("click", () => {
    player1Number = randomDice();
    player2Number = randomDice();

    diceActions(diceP1DOM, player1Number);
    diceActions(diceP2DOM, player2Number);

    if (player1Number == player2Number) {
        result.innerHTML = "Draw! &#129309";
    } else if (player1Number > player2Number) {
        result.innerHTML = "&#128526 Player 1 Wins ";
    } else {
        result.innerHTML = "Player 2 Wins &#128526";
    }
});

function randomDice() {
    let number = Math.floor(Math.random() * 6);
    return number;
}

function diceActions(diceDOM, playerNumber) {
    diceDOM.classList.remove(
        "dice-one",
        "dice-two",
        "dice-three",
        "dice-four",
        "dice-five",
        "dice-six"
    );
    diceDOM.innerHTML = "";

    diceDOM.classList.add(`dice-${diceArray[playerNumber]}`);

    diceArray.slice(0, playerNumber + 1).forEach((dice) => {
        let diceDiv = document.createElement("div");
        diceDiv.classList.add(`${dice}`);
        diceDOM.appendChild(diceDiv);
    });
}
