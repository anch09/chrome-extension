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
startButton.style.left = '25%';
startButton.style.position = 'relative';
startButton.style.top = '9.5px';
startButton.style['border-radius'] = "8px";
startButton.style.padding = "10px";
startButton.style['background-color'] = "#e8c349";
startButton.style.color = 'black';
startButton.addEventListener('click', timer);

pomodoro.appendChild(startButton);

const minutes = document.createElement('span');
const semicolon = document.createElement('span');
const seconds = document.createElement('span');

counter.setAttribute('id', 'counter');
minutes.innerText = '25';
semicolon.innerText = ':'
seconds.innerText = '00';
counter.style.fontSize = '50px';
counter.style.position = 'absolute';
counter.style.height = '60px'
counter.style.left = '45%';
counter.style.top = '-10px';
counter.style.color = 'white';

counter.appendChild(minutes);
counter.appendChild(semicolon);
counter.appendChild(seconds);

pomodoro.appendChild(counter);

endButton.setAttribute('id', 'endButton');
endButton.innerText = "Stop timer";
endButton.style.padding = "10px";
endButton.style.border = 'none';
endButton.style.left = '60%';
endButton.style.position = 'relative';
endButton.style.top = '9.5px';
endButton.style['border-radius'] = "8px";
endButton.style.padding = "10px";
endButton.style['background-color'] = "rgb(181,81,74)";
endButton.style.color = 'white';
// endButton.addEventListener('click', stop);

pomodoro.appendChild(endButton);

const gif = document.createElement('img');
gif.setAttribute('id', 'homergif');
gif.setAttribute('src', 'https://c.tenor.com/1yn3cUEhDx4AAAAC/homer-simpson-the-simpsons.gif');
gif.style.position = 'sticky';
gif.style.width = '50%';
gif.style.height = '60%';
gif.style.left = '25%';
gif.style.top = '200px';
gif.style['z-index'] = '200';

function timer(){
    let countDownTime25 = 3000;
    let countDownTime5 = 3000;
    function modifier(){
        if(countDownTime5 < 0) {
            countDownTime25 = 1500000;
            countDownTime5 = 300000;
            body.removeChild(document.querySelector('#homergif'));
        }
        if(countDownTime25 > 0){
            minutes.innerText = Math.floor((countDownTime25 % (1000 * 60 * 60)) / (1000 * 60)) < 10 ? `0${Math.floor((countDownTime25 % (1000 * 60 * 60)) / (1000 * 60))}` : Math.floor((countDownTime25 % (1000 * 60 * 60)) / (1000 * 60));
            seconds.innerText = Math.floor((countDownTime25 % (1000 * 60)) / 1000) < 10 ? `0${Math.floor((countDownTime25 % (1000 * 60)) / 1000)}` : Math.floor((countDownTime25 % (1000 * 60)) / 1000);
            countDownTime25 -= 1000;
            console.log(countDownTime25);
        } else {
            minutes.innerText = Math.floor((countDownTime5 % (1000 * 60 * 60)) / (1000 * 60)) < 10 ? `0${Math.floor((countDownTime5 % (1000 * 60 * 60)) / (1000 * 60))}` : Math.floor((countDownTime5 % (1000 * 60 * 60)) / (1000 * 60));
            seconds.innerText = Math.floor((countDownTime5 % (1000 * 60)) / 1000) < 10 ? `0${Math.floor((countDownTime5 % (1000 * 60)) / 1000)}` : Math.floor((countDownTime5 % (1000 * 60)) / 1000);
            console.log(countDownTime5);
            countDownTime5 -= 1000;
            body.prepend(gif);
        }
        let timeourID = setTimeout(modifier, 1000);
        endButton.onclick = () => {
            clearTimeout(timeourID);
        };
    }
    modifier();
   setTimeout(timer, 1800000);
}

// function stop(timeID){
//     clearTimeout(timeID);
// }




