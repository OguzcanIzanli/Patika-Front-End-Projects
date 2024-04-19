const input = document.querySelector("input");
const list = document.querySelector(".list");
const toastBox = document.querySelector(".toastBox");
const dayDOM = document.querySelector(".day");
const monthDOM = document.querySelector(".month");

let dateOfMonth = new Date().getDate();
let dayOfWekk = new Date().getDay();
let month = new Date().getMonth();
let year = new Date().getFullYear();

// ADD TEXT TO THE LIST
function addList() {
    if (input.value && input.value.trim()) {
        let li = document.createElement("li"); // Create li element
        li.innerHTML = input.value;
        list.appendChild(li);

        let xMark = document.createElement("i"); // Create close button of li element
        xMark.classList.add("fa-regular", "fa-circle-xmark");

        let date = document.createElement("time");
        date.innerHTML = `${dateOfMonth}/${month + 1}/${year}`;

        li.appendChild(date);
        li.appendChild(xMark);
        save();
        toastMessage("Saved successfully");
    } else {
        toastMessage("Cannot be blank");
    }
    input.value = "";
}

// DELETE AND CHECK ACTIONS OF LIST ELEMENTS
list.addEventListener("click", (e) => {
    e.target.tagName == "LI"
        ? e.target.classList.toggle("checked")
        : e.target.tagName == "I"
        ? e.target.parentElement.remove()
        : "";
    save();
});

// LOCAL STORAGE SET AND GET DATA
function save() {
    localStorage.setItem("data", list.innerHTML);
}
function getList() {
    list.innerHTML = localStorage.getItem("data");
}
getList();

// TOAST
function toastMessage(msg) {
    toastBox.innerHTML = msg;
    toastBox.classList.add("active");

    setTimeout(() => {
        toastBox.classList.remove("active");
    }, 2000);

    setTimeout(() => {
        toastBox.classList.remove("blank", "success");
    }, 2300);

    msg.includes("blank")
        ? toastBox.classList.add("blank")
        : toastBox.classList.add("success");
}

// TIME
const datesOfMonth = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
    "23rd",
    "24th",
    "25th",
    "26th",
    "27th",
    "28th",
    "29th",
    "30th",
    "31st",
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesdey",
    "Thursday",
    "Friday",
    "Saturday",
];

function date() {
    dayDOM.innerHTML = `${daysOfWeek[dayOfWekk]}, ${
        datesOfMonth[dateOfMonth - 1]
    }`;
    monthDOM.innerHTML = `${months[month]}`;
}
date();
