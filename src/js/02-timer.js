import flatpickr from "flatpickr";
import Notiflix from "notiflix";
import 'flatpickr/dist/flatpickr.min.css';

const button = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let selectedDate = null;
let intervalId = null;

button.disabled = true;
const now = new Date();




const countDiff = obj => {	 
	selectedDate = new Date(obj[0]); 	
	if (selectedDate < now) {
		return Notiflix.Notify.failure('Please choose a date in the future');
	}
	button.disabled = false;
}
// console.log(selectedDate)

const hendleButtonBehaviour = e => {	
	if (!selectedDate) return;
	intervalId = setInterval(count, 1000);
}



function count() {
	const diff = selectedDate - new Date();	
	if (diff < 0) {
		 clearInterval(intervalId);
	} else {
		const converted = convertMs(diff);
	days.textContent = converted.days;
	hours.textContent = addLeadingZero(converted.hours);
	minutes.textContent = addLeadingZero(converted.minutes);
	seconds.textContent = addLeadingZero(converted.seconds);
	button.disabled = true;
	}
}
button.addEventListener('click', hendleButtonBehaviour)
	
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: countDiff,
};

flatpickr('#datetime-picker', options)

function convertMs(ms) {  
 
 	const second = 1000;
  	const minute = second * 60;
 	const hour = minute * 60;
  	const day = hour * 24;
	
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);  
  const minutes = Math.floor(((ms % day) % hour) / minute); 
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
	return String(value).padStart(2, 0);
}