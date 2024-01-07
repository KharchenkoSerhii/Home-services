'use ctrict';
// ==================================================================
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
// ==================================================================




// ==================================================================
// burger============================================================
let burger = document.querySelector(".burger-menu");
let menuBody = document.querySelector(".menu__body");
burger.addEventListener('click', function (event){
	burger.classList.toggle("menu-open");
	menuBody.classList.toggle("menu-open");
});
// burger============================================================
// ==================================================================




// ==================================================================
// anchors===========================================================
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}
// anchors===========================================================
// ==================================================================

















