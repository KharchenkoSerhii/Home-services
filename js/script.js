'use ctrict';

// функция ibg=======================================================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage =
				'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
// функция ibg=======================================================

let burger = document.querySelector(".burger-menu");
let menuBody = document.querySelector(".menu__body");
burger.addEventListener('click', function (event){
	burger.classList.toggle("menu-open");
	menuBody.classList.toggle("menu-open");
});



























