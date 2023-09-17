import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', '');

flatpickr(refs.inputDate, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    refs.startBtn.addEventListener('click', startTimer);

    const userDateSelected = selectedDates[0].getTime();
    const currentDate = new Date();

    if (selectedDates[0] < currentDate) {
      refs.startBtn.setAttribute('disabled', '');
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } else {
      refs.startBtn.removeAttribute('disabled', '');
    }

    function startTimer() {
      refs.startBtn.setAttribute('disabled', '');
      refs.inputDate.setAttribute('disabled', '');
      const intervaId = setInterval(() => {
        const { days, hours, minutes, seconds } = convertMs(
          userDateSelected - Date.now()
        );

        refs.days.textContent = addLeadingZero(days);
        refs.hours.textContent = addLeadingZero(hours);
        refs.minutes.textContent = addLeadingZero(minutes);
        refs.seconds.textContent = addLeadingZero(seconds);

        if (userDateSelected - Date.now() <= 1000) {
          clearInterval(intervaId);
          refs.inputDate.removeAttribute('disabled', '');
        }
      }, 1000);
    }

    function addLeadingZero(value) {
      return String(value).padStart(2, '0');
    }
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds, total };
}
