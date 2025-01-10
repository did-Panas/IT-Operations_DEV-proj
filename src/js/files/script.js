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

// ===== EBLOG-LISTING ============================================================

initializePanels();

function initializePanels() {
	const btns = document.querySelectorAll('.blog-listing__ctrl-btn');
	const btnClose = document.querySelector('.filter__close');
	const panelFilter = document.querySelector('.filter');
	const panelSearch = document.querySelector('.search');

	if (btns) {
		activatePanels(btns, btnClose, panelFilter, panelSearch);
	}

}

function activatePanels(btns, btnClose, panelFilter, panelSearch) {


	btns.forEach(elem => {
		elem.addEventListener("click", function (e) {
			const btnActive = e.currentTarget.dataset.btn;
			const panelActive = document.querySelector(`.${btnActive}`);


			btns.forEach(btn => {
				btn.classList.remove('active');
				panelFilter.classList.remove('active');
				panelSearch.classList.remove('active');


			});

			e.currentTarget.classList.add('active');

			if (panelActive.classList.contains('active')) {
				panelActive.classList.remove('active');
			} else {
				panelActive.classList.add('active');
			}


			if (e.currentTarget.dataset.btn == `filter` && panelFilter.classList.contains('active')) {
				btnClose.addEventListener("click", function () {
					panelFilter.classList.remove('active');
				});
			}

			if (panelFilter.classList.contains('active') || panelSearch.classList.contains('active')) {
				adjustCheckboxes();
			}

		});
	});





}

function adjustCheckboxes() {
	const checkboxInputs = panelActive.querySelectorAll('.checkbox__inp');
	const checkboxLabels = panelActive.querySelectorAll('.checkbox__lbl');
	const checkbAll = panelActive.querySelector('#c_1');


}



// ---------------------------------

// document.querySelector('#checkbox').addEventListener('change', function() {
// 	console.log(`Чекбокс ${this.checked ? 'выбран' : 'не выбран'}.`);
//  });

// function adjustCheckboxes(panelActive) {
// 	const checkboxInputs = panelActive.querySelectorAll('.checkbox__inp');
// 	const checkboxLabels = panelActive.querySelectorAll('.checkbox__lbl');
// 	const checkbAll = panelActive.querySelector('#c_1');

// 	checkboxInputs.forEach(element => {
// 		element.addEventListener("change", function (e) {

// 		});


// 	});

// }