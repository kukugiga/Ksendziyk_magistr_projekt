
let age = prompt('Сколько вам лет?', 14);

if (age > 13) {
	alert('Вы можете завести питомца'); 
} else {
	alert('Не можете завести питомца');
	menuButt.textContent = 'нет 18 лет';
	menuButt2.textContent = 'нет 18 лет';
	menuButt3.textContent = 'нет 18 лет';
}

const ElemToHover = document.getElementById('button');
const ElemToPopup = document.getElementById('img-pop');

ElemToHover.addEventListener('mouseenter', Popup);

function Popup() {
	ElemToPopup.style.display = 'block'
}

ElemToHover.addEventListener('mouseleave', PopupClose);

function PopupClose() {
	ElemToPopup.style.display = 'none'
}

// __________________________

const ElemToHover2 = document.getElementById('button2');
const ElemToPopup2 = document.getElementById('img-pop2');

ElemToHover2.addEventListener('mouseenter', Popup2);

function Popup2() {
	ElemToPopup2.style.display = 'block'
}

ElemToHover2.addEventListener('mouseleave', PopupClose2);

function PopupClose2() {
	ElemToPopup2.style.display = 'none'
}

// __________________________

const ElemToHover3 = document.getElementById('button3');
const ElemToPopup3 = document.getElementById('img-pop3');

ElemToHover3.addEventListener('mouseenter', Popup3);

function Popup3() {
	ElemToPopup3.style.display = 'block'
}

ElemToHover3.addEventListener('mouseleave', PopupClose3);

function PopupClose3() {
	ElemToPopup3.style.display = 'none'
}