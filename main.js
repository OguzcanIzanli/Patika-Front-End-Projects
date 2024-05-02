// Adding Projects From Data and Navbar Buttons
let arr = [];
const projectContainer = document.querySelector(".projects");
async function getData() {
  await fetch("./data.json")
    .then((res) => res.json())
    .then((data) => arr.push(...data)); // Data are fetched from local json file

  const keys = Object.keys(arr[0]);

  let projects = keys.map((key) => {
    return arr[0][key].map((item) => {
      return `<div class="container">
      <div class="projectContainer">
        <div class="website">
          <img src=${item.imgSrc} alt="gif" />
          <a class="websiteLink" href=${item.pageLink} target="_blank">
            Go Page
          </a>
        </div>
        <div class="readme">
          <a
            class="readmeLink"
            href="https://github.com/OguzcanIzanli/Patika-Front-End-Projects/tree/main/${item.gitHub}" target="_blank"
          >
            ${item.name}
          </a>
          <p>${item.desc}</p>
        </div>
      </div>
  </div>`;
    });
  });

  function separateStrings(keys) {
    const result = keys.map((str) => {
      const match = str.match(/([a-zA-Z]+)(\d+)/); // Match letters followed by numbers
      if (match) {
        return {
          name: match[1].charAt(0).toUpperCase() + match[1].slice(1), // Extract letters
          number: parseInt(match[2]), // Extract numbers
        };
      }
    });
    return result;
  }

  const separatedObjects = separateStrings(keys);

  const allContainer = separatedObjects.map((header, index) => {
    return `<h2 id=${header.name.toLowerCase()}${header.number}>Patika ${
      header.name
    } <span>${header.number}</span></h2>${projects[index].join("")}`;
  });

  projectContainer.innerHTML = allContainer.join("");
}
getData();

// Navbar Dropdown Menu Actions
const dropdownBtn = document.querySelector(".navbarDropdownBtn");
const navbarBtns = document.querySelector(".navbarBtns");
const navbarDropdownBtnIcon = document.querySelector(".navbarDropdownBtn i");

dropdownBtn.addEventListener("click", () => {
  navbarBtns.classList.toggle("navbarOpen");
  const isOpen = navbarBtns.classList.contains("navbarOpen");

  navbarDropdownBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
});

// Smooth transition between sections on the page
document.querySelectorAll('a[href^="#"]').forEach((navBtn) => {
  navBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let sectionId = e.target.getAttribute("href");

    navbarBtns.classList.remove("navbarOpen");
    navbarDropdownBtnIcon.classList = "fa-solid fa-bars";

    document.querySelector(`${sectionId}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});
