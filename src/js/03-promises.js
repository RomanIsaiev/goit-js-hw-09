import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const setOptionsForm = document.querySelector('.form');
setOptionsForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  let userDelay = Number(form.elements.delay.value);
  const userStep = Number(form.elements.step.value);
  const userAmount = Number(form.elements.amount.value);

  for (let i = 1; i <= userAmount; i += 1) {
    const counterDelay = userDelay + userStep * (i - 1);
    createPromise(i, counterDelay)
      .then(() => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${i} in ${counterDelay}ms`
        );
      })
      .catch(() => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${i} in ${counterDelay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
