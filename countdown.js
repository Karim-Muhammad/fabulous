let countDownDiv = document.querySelector(".latest .clock");
let days = countDownDiv.querySelector(".day .value");
let hours = countDownDiv.querySelector(".hour .value");
let mintues = countDownDiv.querySelector(".minute .value");
let seconds = countDownDiv.querySelector(".second .value");
let eventDayDate = new Date("10/1/2022").getTime();
let countDown = setInterval(() => {
    // Date for Today
    // let todayDate = Date.now();
    let todayDate = new Date().getTime();

    // Net Time
    let timeE = eventDayDate - todayDate;

    // date parts
    let d = 1000 * 60 * 60 * 24;
    let h = 1000 * 60 * 60;
    let m = 1000 * 60;
    let s = 1000;

    if (timeE !== 0) {
        timeE -= 40;
        days.textContent = Math.floor(timeE / d);
        hours.textContent = Math.floor((timeE % d) / h);
        mintues.textContent = Math.floor((timeE % h) / m);
        seconds.textContent = Math.floor((timeE % m) / s);
    } else {
        clearInterval(countDown);
    }
}, 1000);

/**
// date parts
let eventDayDate = new Date("10/1/2022");
let todayDate = Date.now();
let timeE = eventDayDate - todayDate;
// let s = timeE / 1000;
setInterval(() => {
    let d = s / (60 * 60 * 24);
    let h = d * 24;
    let m = h * 60;
    if (Date.now() - new Date("10/1/2022") !== 0) {
        // 31 d : 3h : 30m : 20s
        days.textContent = Math.floor(d);
        hours.textContent = Math.floor((s % d) / 120);
        console.log(Math.floor((s % d) / 120));

        mintues.textContent = Math.floor((s % 120) / 60);
        seconds.textContent = Math.floor(s % 60);
        --s;
    }
}, 1000);


*/
