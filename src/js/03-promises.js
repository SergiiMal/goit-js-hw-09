import Notiflix from "notiflix";

const form = document.querySelector('.form');


function onSubmitForm(e) {  
  e.preventDefault();
  
  let delay = Number(e.currentTarget.delay.value);
  const step = Number(e.currentTarget.step.value);
  const amount = Number(e.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then()
          .catch();
            delay += step;
  }
  form.reset();
}

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
         if (shouldResolve) {
            resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
          );        
         }else {
         reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`
         )
       );
     } 
   }, delay);       
  });
} 

form.addEventListener('submit', onSubmitForm);