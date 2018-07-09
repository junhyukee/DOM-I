let tens = document.getElementById('secondTens');
let ones = document.getElementById('secondOnes');
let msH = document.getElementById('msHundreds');
let msT = document.getElementById('msTens');
let all = document.querySelectorAll('.digit');
let time = 0;

let start = document.getElementById('start');
let reset = document.getElementById('reset');


start.addEventListener('click', () => {
	let count = setInterval(function(){
		time += 1;
		timeStr = `${0000 + time}`;
		start.setAttribute('disabled', 'disabled');
		if (time < 10) {
			msT.innerText = `${timeStr[0]}`;
		}
		if (time > 10 && time < 100) {
			msH.innerText = `${timeStr[0]}`;
			msT.innerText = `${timeStr[1]}`;
		}
		if (time > 100 && time < 1000) {
			tens.innerText = `0`;
			ones.innerText = `${timeStr[0]}`;
			msH.innerText = `${timeStr[1]}`;
			msT.innerText = `${timeStr[2]}`;
		}
		if (time >= 1000) {
			clearInterval(count);
			tens.innerText = `${timeStr[0]}`;
			ones.innerText = `${timeStr[1]}`;
			msH.innerText = `${timeStr[2]}`;
			msT.innerText = `${timeStr[3]}`;
			all.forEach((element)=>{
				element.style.color = 'red';
			})
			start.removeAttribute('disabled');
		}
	}, 10);
});

reset.addEventListener('click', () => {
	time = 0;
	tens.innerText = `-`;
	ones.innerText = `-`;
	msH.innerText = `-`;
	msT.innerText = `-`;
	all.forEach((element)=>{
		element.style.color = 'black';
	})
});