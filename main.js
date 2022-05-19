const pomodoro = document.createElement('div');
const body = document.querySelector('body');
const startButton = document.createElement('button');
const endButton = document.createElement('button');
const counter = document.createElement('div');

pomodoro.setAttribute('id', 'pomodoro');
pomodoro.style.width = '100%';
pomodoro.style.height = '60px';
pomodoro.style['background-color'] = 'rgb(115,65,239)';
pomodoro.style.position = 'sticky';
pomodoro.style.top = '0';
pomodoro.style['z-index'] = '100';

body.prepend(pomodoro);

startButton.setAttribute('id', 'startButton');
startButton.innerText = "Start timer";
startButton.style.padding = "10px";
startButton.style.border = 'none';
startButton.style.left = '40%';
startButton.style.position = 'relative';
startButton.style.top = '9.5px';
startButton.style['border-radius'] = "8px";
startButton.style.padding = "10px";
startButton.style['background-color'] = "#e8c349";

pomodoro.appendChild(startButton);

const minutes = document.createElement('span');
const 
const seconds = document.createElement('span');

counter.setAttribute('id', 'counter');
counter.innerText = '25:00';
counter.style.fontSize = '15px';

pomodoro.appendChild(counter);

let counter = 0;

function timer(){
    const countDownTime25 = 1500000;
    const countDownTime5 = 300000;

    

    



    setTimeout(timer, 1800000);
}




