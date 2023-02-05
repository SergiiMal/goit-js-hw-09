// import Notiflix from "notiflix";

// const button = document.querySelector('button');

// const onSubmitform = e => {
//   e.preventDefault();

//   const delayInput = document.querySelector('input[name="delay"]').value;
//   const stepInput = document.querySelector('input[name="step"]').value;
//   const amountInput = document.querySelector('input[name="amount"]').value;

//   let counter = 0;
//   let intervalId = null;

//   setInterval(() => {
//     createPromise(counter, delayInput)
//       .then(value => {
//         Notiflix.Notify.success(value);
//       })
//       .catch(error => {
//         Notiflix.Notify.failure(error);
//       });
    
//     intervalId = setInterval(() => {
//       counter++;

//       if (counter + 1 === +amountInput) {
//         clearInterval(intervalId);
//       }
//       createPromise(counter, +delayInput + stepInput * counter)
//         .then(value => {
//           Notiflix.Notify.success(value);
//         })
//         .catch(error => {
//           Notiflix.Notify.failure(error);
//         });
//     }, stepInput);
//   }, delayInput);
// };
  
// button.addEventListener('click', onSubmitform)


// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
//     }
//     reject(`❌ Rejected promise ${position} in ${delay}ms`)
//   }); 
// }



import Notiflix from "notiflix";

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  let delay = Number(e.currentTarget.delay.value);
  const step = Number(e.currentTarget.step.value);
  const amount = Number(e.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const objectPromise = { position, delay };

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(objectPromise);
    }
    reject(objectPromise);
  });
}