let main = document.querySelector(".main-container");
let clock = document.querySelector(".clock");
let hr = document.querySelector(".hour-hand");
let min = document.querySelector(".minute-hand");
let sec = document.querySelector(".second-hand");
let p = document.querySelector("p#demo");

// // console.log(`${hours}:${minutes}:${seconds}`);

let runTime = setInterval(() => {
    let d = new Date();

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let tilt = 0;

    if (minutes >= 0 && minutes <= 11) {
        tilt = 0;
    } else if (minutes >= 12 && minutes <= 23) {
        tilt = 6;
    } else if (minutes >= 24 && minutes <= 35) {
        tilt = 12;
    } else if (minutes >= 36 && minutes <= 47) {
        tilt = 18;
    } else if (minutes >= 48 && minutes <= 59) {
        tilt = 24;
    }

    hr.style.transform = `rotate(${((hours > 12 ? hours - 12 : hours) * 30) - 90 + (tilt)}deg`;
    min.style.transform = `rotate(${(minutes * 6) - 90}deg)`;
    sec.style.transform = `rotate(${(seconds * 6) - 90}deg)`;

    // console.log(`${hours}:${minutes}:${seconds}`);
    p.innerText = `${(hours > 12 ? ((hours - 12) < 10 ? "0" + (hours - 12) : hours - 12) : hours)}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`

}, 1)

