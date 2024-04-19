const p = document.querySelector("p");
const button = document.querySelector("button");

function jokes() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((joke) => (p.innerHTML = joke.value));
}

button.addEventListener("click", () => jokes());

jokes();
