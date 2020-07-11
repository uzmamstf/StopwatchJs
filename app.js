let min = 0;
let sec = 0;
let msec = 0;
let minHeading = document.getElementById("min");
let secHeading = document.getElementById("sec");
let msecHeading = document.getElementById("mSec");
let interval;

function timer() {
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        sec = 0;
        minHeading.innerHTML = min;
    }
}

function start() {
    clearInterval(interval);

    interval = setInterval(timer, 10);

}

function stop() {
    clearInterval(interval);
}

function reset() {
    min = 00;
    sec = 00;
    msec = 00;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();

}