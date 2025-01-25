// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// ==================================================================================
// ===== BLOCKING SUBMIT-BTN with empty input (before validating) ===================

// const inputSubscript = document.querySelector('.subscribe-form__input');
// const btnSubmit = document.querySelector('.subscribe-form__btn');

// if (inputSubscript) {
// 	inputSubscript.addEventListener("blur", function (e) {

// 		if (inputSubscript.value.length > 0) {
// 			btnSubmit.disabled = false;
// 		} else {
// 			btnSubmit.disabled = true;
// 		}

// 	});
// }

// ===============
// ++++!!!!!!
// Валідація форм (З ВРАХУВАННЯМ ПУСТОГО ІНПУТУ + В КІНЦІ КОД БЛОКУВАННЯ BTN-SUBMIT)
// (вставити до formValidate в файл - forms.js)

// validateInput(formRequiredItem) {
// 	let error = 0;
// 	if (formRequiredItem.dataset.required === "email") {
// 		formRequiredItem.value = formRequiredItem.value.replace(" ", "");
// 		if ((this.emailTest(formRequiredItem)) && (formRequiredItem.value !== "")) {
// 			this.addError(formRequiredItem);
// 			error++;
// 		} else {
// 			this.removeError(formRequiredItem);
// 		}
// 	}
// 	else if (formRequiredItem.dataset.required === "uaphone") {
// 		formRequiredItem.value = formRequiredItem.value.replace(" ", "");
// 		if ((this.phoneTest(formRequiredItem)) && (formRequiredItem.value !== "")) {
// 			this.addError(formRequiredItem);
// 			error++;
// 		} else {
// 			this.removeError(formRequiredItem);
// 		}
// 	}
// 	else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
// 		this.addError(formRequiredItem);
// 		error++;
// 	} else {
// 		if (!formRequiredItem.value.trim()) {
// 			this.addError(formRequiredItem);
// 			error++;
// 		} else {
// 			this.removeError(formRequiredItem);
// 		}
// 	}
// 	return error;
// },

// ==========================

// ============ >>>>>>>BLOCKING SUBMIT-BTN with empty input (before validating) =====

// else if (formRequiredItem.tagName === "SELECT" && Number(formRequiredItem.value) == 1) {
// 	this.addError(formRequiredItem);
// 	error++;
// }

// ================================================================================

// ===== MULTILEVEL MENU ==========================================================

let arrow = document.querySelectorAll('.arrow');

if (arrow) {
	for (let i = 0; i < arrow.length; i++) {
		let subMenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];

		arrow[i].addEventListener('click', function () {
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}

// ================================================================================

// ===== PHONE INPUT MASK (IMASK) =================================================

import IMask from 'imask';

const elementMask = document.getElementById('phone-mask');

if (elementMask) {
	const maskOptions = {
		mask: '+{42\\0} 000 000 000'
	};
	const mask = IMask(elementMask, maskOptions);
}


// ================================================================================

// ===== ELEMENTS NUMBER CHECKING for GUIDE BLOCK =================================

const guideList = document.querySelector('.guide__list');

if (guideList) {
	document.addEventListener("DOMContentLoaded", function (e) {

		if (guideList.children.length < 3) {
			guideList.classList.add('guide__list_lg-items');
		} else {
			guideList.classList.remove('guide__list_lg-items');
		}

	});
}


// ================================================================================

// ===== BLOG-LISTING ============================================================

initializePanels();

function initializePanels() {
	const btns = document.querySelectorAll('.blog-listing__ctrl-btn');
	const btnFilter = document.querySelector('.blog-listing__ctrl-btn_filter');
	const btnClose = document.querySelector('.filter__close');
	const panelFilter = document.querySelector('.filter');
	const panelSearch = document.querySelector('.search');

	if (btns) {
		activatePanels(btns, btnFilter, btnClose, panelFilter, panelSearch);
	}

}

function activatePanels(btns, btnFilter, btnClose, panelFilter, panelSearch) {

	btns.forEach(elem => {
		elem.addEventListener("click", function (e) {
			const btnActive = e.currentTarget.dataset.btn;
			const panelActive = document.querySelector(`.${btnActive}`);

			if (e.currentTarget.classList.contains('active')) {
				e.currentTarget.classList.remove('active');
				panelActive.classList.remove('active');
			} else {
				disactivateAll(btns, panelFilter, panelSearch);
				e.currentTarget.classList.add('active');
				panelActive.classList.add('active');
			}

			if (e.currentTarget.dataset.btn == 'filter' && panelFilter.classList.contains('active')) {
				btnClose.addEventListener("click", function () {
					panelFilter.classList.remove('active');
					btnFilter.classList.remove('active');
				});
			}

			if (panelFilter.classList.contains('active') || panelSearch.classList.contains('active')) {

				adjustCheckboxes(panelActive);
			}

		});
	});

}

function disactivateAll(btns, panelFilter, panelSearch) {
	btns.forEach(btn => {
		btn.classList.remove('active');
	});

	panelFilter.classList.remove('active');
	panelSearch.classList.remove('active');
}

function adjustCheckboxes(panelActive) {
	const checkboxInputs = panelActive.querySelectorAll('.checkbox__inp');
	const checkboxLabels = panelActive.querySelectorAll('.checkbox__lbl');
	const inpAll = panelActive.querySelector('.checkbox__inp_all');

	checkboxLabels.forEach(element => {
		const inp = element.previousElementSibling;

		element.addEventListener("click", function (e) {
			const txt = e.target.closest('span');
			const labelAllClicked = e.target.closest('.checkbox__lbl_all');

			e.preventDefault();

			if (txt) {
				clearAllCheckboxes(checkboxInputs, inp);
				activateThisCheckb(inp);
			} else if (labelAllClicked) {
				clearAllCheckboxes(checkboxInputs, inp);
				activateThisCheckb(inp);
			} else if (!labelAllClicked) {
				inpAll.checked = false;
				inpAll.removeAttribute('checked');
				activateThisCheckb(inp);
			}

		});
	});

}

function clearAllCheckboxes(checkboxInputs, inp) {
	checkboxInputs.forEach(inp => {
		inp.removeAttribute('checked');
		inp.checked = false;
	});
}

function activateThisCheckb(inp) {
	inp.setAttribute('checked', '');
	inp.checked = true;
}

// ================================================================================

// ===== ABOUT-US SECTION - TEAM - BLOCK ==========================================

// FONT-SIZE RESIZING -----

const computedFontSize = ({
	el,
	maxFontSize = 60,
	stepFontSize = 0.5,
	onlyDecrease = false
}) => {
	el.style.visibility = "hidden"; // hiding unpleasant visual effects
	el.innerHTML = `<div class="container"><div class="wrapper">${el.innerHTML}</div></div>`;
	const container = el.querySelector(".container");
	const wrapper = el.querySelector(".wrapper");
	if (!onlyDecrease) el.style.fontSize = `${maxFontSize}px`;

	for (
		let i = maxFontSize;
		i > 0 && container.offsetHeight < wrapper.offsetHeight;
		i -= stepFontSize
	) {
		el.style.fontSize = `${i}px`;
	}
	el.innerHTML = wrapper.innerHTML;
	el.style.removeProperty("visibility");
};

const teamCards = document.querySelectorAll('.hover-txt');
const teamBlock = document.querySelector('.team');

if (teamBlock) {
	document.addEventListener("DOMContentLoaded", function (e) {
		teamCards.forEach(example => {
			computedFontSize({ el: example, onlyDecreade: true });

		});
	});

	window.addEventListener("resize", function (e) {
		teamCards.forEach(example => {
			computedFontSize({ el: example, onlyDecreade: true });

		});
	});

	initializeTeamBtns(); // team cards adjusting
}


//  TEAM CARDS ADJUSTING -----

function initializeTeamBtns() {
	const teamBtns = document.querySelectorAll('.team__ctrl-panel button');




	teamBtns.forEach(teamBtn => {
		teamBtn.classList.remove('active');

		teamBtn.addEventListener("click", function (e) {
			const btnActive = e.currentTarget.dataset.btn;
			const cardsActive = document.querySelectorAll(`.${btnActive}`);

			teamBtn.classList.toggle('active');

			if (e.currentTarget.classList.contains('active')) {

				activateCards(cardsActive);
			} else {
				disactivateCards(cardsActive);
			}

		});

	});


	function activateCards(cardsActive) {
		cardsActive.forEach(card => {
			card.classList.add('active');
		});
	}

	function disactivateCards(cardsActive) {
		cardsActive.forEach(card => {
			card.classList.remove('active');
		});
	}

}




// ================================================================================