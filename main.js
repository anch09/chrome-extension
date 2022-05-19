const pomodoro = document.createElement('div');
const body = document.querySelector('body');
const startButton = document.createElement('button');
const endButton = document.createElement('button');

pomodoro.setAttribute('id', 'pomodoro');
pomodoro.style.width = '100%';
pomodoro.style.height = '60px';
body.prepend(pomodoro);
pomodoro.style.backgroundColor = '#724lef';

startButton.innerText = "Start timer";
startButton.style.padding = "5px";
startButton.setAttribute('id', 'startButton');
pomodoro.appendChild(startButton);
const startButton = document.querySelector('#startButton');
startButton.style.left = '40%';
startButton.style.position = 'relative';
startButton.style.top = '12.5px';
startButton.style['border-radius'] = "8px";
startButton.style.padding = "10px";
startButton.style.backgroundColor = "e8c349";




