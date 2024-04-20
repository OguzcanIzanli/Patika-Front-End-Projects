const url = "https://dummyjson.com/users?limit=40";

let ulDOM = document.querySelector(".list");
let input = document.querySelector("input");
input.addEventListener("input", inputChanges);

let users = [];

fetch(url)
    .then((response) => response.json())
    .then((data) => users.push(...data.users))
    .then(() => matchUsers(users, "")); // After the fecthing data from api, the function called

function inputChanges() {
    let regex = new RegExp(this.value, "gi");
    matchUsers(users, regex);
}

function matchUsers(users, regex) {
    let matchList = [];

    users
        .filter((user) => user.address.city.match(regex))
        .forEach((user) =>
            matchList.push(
                `<li><span>User:</span> ${user.firstName} ${user.lastName}<span>City:</span> ${user.address.city}<img height="30px" src="${user.image}" alt=""></li>`
            )
        );

    ulDOM.innerHTML = matchList.join("");
}
