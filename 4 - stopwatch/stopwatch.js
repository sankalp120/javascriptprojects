let elapsedMs = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value){
    return String(value).padStart(2, "0");
}

function setTime(){
    const totalSeconds = Math.floor(elapsedMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((elapsedMs % 1000) / 10); 
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}:${padStart(milliseconds)}`;
}

function timer(){
    elapsedMs += 10; 
    setTime();
}

function startClock(){
    if (interval) stopClock();
    interval = setInterval(timer, 10); 
}

function stopClock(){
    clearInterval(interval);
    interval = null;
}

function resetClock(){
    stopClock();
    elapsedMs = 0;
    setTime();
}
