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

const element = document.getElementById('phone');
const maskOptions = {
	mask: '+{42\\0} 000 000 000'
};
const mask = IMask(element, maskOptions);

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
