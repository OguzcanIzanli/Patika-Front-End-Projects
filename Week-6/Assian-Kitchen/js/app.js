let btnContainer = document.querySelector(".btn-container");
let menuArea = document.querySelector(".section-center");

let menu = [];

async function getData() {
    await fetch("menu.json")
        .then((res) => res.json())
        .then((data) => menu.push(...data)); // Data are fetched from local json file

    let categories = menu.reduce(
        // Reduce method was used to create array of different categories
        (acc, item) => {
            if (!acc) {
                acc = [];
            }
            if (!acc.includes(item["category"])) {
                acc.push(item["category"]);
            }
            return acc;
        },
        ["All"]
    );

    btnContainer.innerHTML = categories // Buttons were created according to category array
        .map((category) => {
            return `<button class="btn btn-outline-dark btn-item">${category}</button>`;
        })
        .join("");

    const filterBtns = document.querySelectorAll(".btn-item");

    filterBtns.forEach((btn) =>
        btn.addEventListener("click", (e) => {
            displayScreen(e.target.innerHTML);
        })
    );

    displayScreen();
}

getData();

function displayScreen(category) {
    let displayMenu = menu
        .filter((item) => {
            if (!category || category == "All") {
                return item;
            }
            return item.category == category;
        })
        .map((item) => {
            return `<div class="menu-items col-lg-6 col-sm-12">
                  <img
                    src=${item.img}
                    alt=${item.title}
                    class="photo"
                  />
                  <div class="menu-info">
                    <div class="menu-title">
                      <h4>${item.title}</h4>
                      <h4 class="price">${item.price}</h4>
                    </div>
                    <div class="menu-text">
                      ${item.desc}
                    </div>
                  </div>
                </div>`;
        });
    menuArea.innerHTML = displayMenu.join("");
}
