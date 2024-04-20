const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const image = document.querySelector("img");

inputs.forEach((event) => event.addEventListener("mousemove", handleUpdate)); // Mouse move event listener
inputs.forEach((event) => event.addEventListener("change", handleUpdate)); // When input change
button.addEventListener("click", changeImage); 

function handleUpdate() {
    let suffix = this.dataset.sizing || "" // this.dataset come from input data-sizing

    // this.name = :root variables, 
    // this.value = changed input values
    document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix);

}

function changeImage() {
    let randomNumber = Math.floor(Math.random()*500);
    image.src = `https://picsum.photos/id/${randomNumber}/640//480`
}