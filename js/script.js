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
// ----------------
// Плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]');
const headerHeight = document.querySelector('.header').offsetHeight;

for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		const targetBlock = document.querySelector(blockID);

		if (targetBlock) {
			const offsetTop = targetBlock.offsetTop - headerHeight;

			window.scrollTo({
				top: offsetTop,
				behavior: "smooth"
			});
		}
	});
}

// -----------------------
//  Этот код обрабатывает событие прокрутки страницы и устанавливает активный класс для ссылки в навигации (.header nav a), соответствующей текущему разделу на странице.
window.addEventListener('scroll', function () {
	let sections = document.querySelectorAll('section[id]');
	let scrollPosition = window.scrollY;

	sections.forEach(function (section) {
		let id = section.getAttribute('id');
		let sectionTop = section.offsetTop - headerHeight - 1;

		if (sectionTop < scrollPosition) {
			let navLink = document.querySelector('.header nav a[href="#' + id + '"]');
			if (navLink) {
				// Remove 'active' class from all links in .header
				document.querySelectorAll('.header a').forEach(function (link) {
					link.classList.remove('active');
				});

				// Add 'active' class to the current link
				navLink.classList.add('active');
			}
		}
	});
});
// anchors===========================================================
// ==================================================================


// ==================================================================
// slider-swiper=====================================================
const reviewsSlider = new Swiper('.reviews__slider', {
	speed: 400,

	// navigation: {
	// 	nextEl: '.reviews__button-next',
	// 	prevEl: '.reviews__button-prev',
	// },

	navigation: {
		nextEl: '.arrow-reviews.arrow-reviews__button-next',
		prevEl: '.arrow-reviews.arrow-reviews__button-prev',
	},

	pagination: {
		el: '.reviews-pagination',
		type: 'bullets',
		clickable: true,
	},
	// loop: true,
	autoHeight: true,
});







// slider-swiper=====================================================
// ==================================================================



// // Навигация
// .arrow - reviews {
// 	position: absolute;
// 	top: 50 %;
// 	transform: translate(0, -50 %);
// 	width: toRem(48);
// 	height: toRem(48);
// 	border - radius: 50 %;
// 	background: $bgColorLite url("../img/reviews/arrow_left.svg") center no - repeat;
// 	& --prev {
// 		left: 0;
// 	}
// 	& --next {
// 		right: 0;
// 		transform: rotate(180deg);
// 	}
// }