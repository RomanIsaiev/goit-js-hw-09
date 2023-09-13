const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);

let timerId = null;

refs.stopBtn.setAttribute('disabled', '');

function start(event) {
  event.target = refs.startBtn.setAttribute('disabled', '');
  timerId = setInterval(setRandomBackgroundColor, 1000);
  refs.stopBtn.removeAttribute('disabled', '');
}

function stop(event) {
  event.target = refs.stopBtn.setAttribute('disabled', '');
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled', '');
}

function setRandomBackgroundColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
