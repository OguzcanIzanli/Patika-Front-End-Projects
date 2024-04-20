const panels = document.querySelectorAll(".panel");

panels.forEach((event) => event.addEventListener("click", handleClick))  

function handleClick () {
    panels.forEach((event) => this.id != event.id ? event.classList.remove("open") : "")
    this.classList.toggle("open")
}