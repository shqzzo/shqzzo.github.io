var timeTable = document.createElement('div');

document.body.appendChild(timeTable);
timeTable.innerHTML = '00 : 00 : 00 : 000';
timeTable.classList.add('col-md-12', 'h1');
timeTable.setAttribute('type', 'button');

var startButton = document.createElement('button');

document.body.appendChild(startButton);
startButton.classList.add('btn', 'btn-success', 'col-md-1');
startButton.setAttribute('type', 'button');
startButton.innerHTML = 'Start';
startButton.addEventListener("click", startTimer);

var resetButton = document.createElement('button');

document.body.appendChild(resetButton);
resetButton.classList.add('btn', 'btn-danger', 'col-md-1');
resetButton.setAttribute('type', 'button');
resetButton.innerHTML = 'Reset';
resetButton.addEventListener("click", resetTimer);

var zero = new Date(0, 0);
var seconds = 0;
var minutes = 0;
var hours = 0;
var timer;
var time;

function DisplayTimer() {
    zero.setMilliseconds(zero.getMilliseconds() + 4);
    var milliseconds = zero.getMilliseconds();

    if (milliseconds >= 996) {
        seconds++;
    }

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    if (seconds < 10) {
        secondsNum = '0' + seconds;
    } else {
        secondsNum = seconds;
    }

    if (minutes < 10) {
        minutesNum = '0' + minutes;
    } else {
        minutesNum = minutes;
    }

    if (hours < 10) {
        hoursNum = '0' + hours;
    } else {
        hoursNum = hours;
    }

    time = hoursNum + ' : ' + minutesNum + ' : ' + secondsNum + ' : ' + milliseconds;
    timeTable.innerHTML = time;
}

function startTimer() {
    startButton.classList.add('btn', 'btn-success');
    startButton.innerHTML = 'Pause';
    timer = setInterval(DisplayTimer, 4);
    startButton.removeEventListener("click", startTimer);
    startButton.addEventListener("click", pauseTimer);
}

function pauseTimer() {
    startButton.innerHTML = 'Continue';
    clearInterval(timer);
    timeTable.innerHTML = time;
    startButton.removeEventListener("click", pauseTimer);
    startButton.addEventListener("click", startTimer);
}

function resetTimer() {
    startButton.innerHTML = 'Start';
    timeTable.innerHTML = '00 : 00 : 00 : 000';
    clearInterval(timer);
    startButton.removeEventListener("click", pauseTimer);
    startButton.addEventListener("click", startTimer);
    seconds = 0;
    minutes = 0;
    hours = 0;
}