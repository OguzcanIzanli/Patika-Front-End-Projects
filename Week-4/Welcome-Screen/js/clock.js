// Username
let userName = prompt("Lütfen İsminizi Giriniz");
let userNameDOM =  document.querySelector("#myName");

userName.length === 0 ? userNameDOM.innerText = "Misafir" : userNameDOM.innerText = userName;

// Clock
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = time.getDay();

    let weekDays= ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = `${hour}:${min}:${sec} ${weekDays[day-1]}`
    document.querySelector("#myClock").innerHTML = currentTime;
}
showTime();