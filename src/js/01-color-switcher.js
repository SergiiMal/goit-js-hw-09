const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = setInterval(getRandomHexColor, 1000);

btnStart.addEventListener('click', startChangeColor);
btnStop.addEventListener('click', stopChangeColor);

function updateBodyColor() {	
	document.body.style.backgroundColor = getRandomHexColor();
}

function startChangeColor(){	
	// 
	btnStart.disabeld = true;
	btnStop.disabeld = false;
	intervalId = setInterval(updateBodyColor, 1000);
}

function stopChangeColor(){
	btnStop.disabeld = true;
	btnStart.disabeld = false;
	clearInterval(intervalId) 
}