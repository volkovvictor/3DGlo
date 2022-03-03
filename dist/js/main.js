/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('26 February 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('.portfolio-content', '.portfolio-item', '.portfolio-dots');\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n   const calcBlock = document.querySelector('.calc-block');\r\n   const calcType = document.querySelector('.calc-type');\r\n   const calcSquare = document.querySelector('.calc-square');\r\n   const calcCount = document.querySelector('.calc-count');\r\n   const calcDay = document.querySelector('.calc-day');\r\n   const total = document.getElementById('total');\r\n\r\n   const countCalc = () => {\r\n      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n      const calcSquareValue = +calcSquare.value;\r\n\r\n      let totalValue = 0;\r\n      let calcCountValue = 1;\r\n      let calcDayValue = 1;\r\n      let interval;\r\n      let count = 0;\r\n\r\n      if(calcCount.value && calcCount.value > 1) {\r\n         calcCountValue += calcCount.value / 10;\r\n      }\r\n\r\n      calcDayValue = calcDay.value && calcDay.value < 5 ? 2 : \r\n      calcDay.value && calcDay.value < 10 ? 1.5 : calcDayValue;\r\n      \r\n\r\n      if(calcTypeValue && calcSquareValue) {\r\n         totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n      }\r\n\r\n      const animTotal = () => {\r\n         if(count > totalValue) {\r\n            clearInterval(interval);\r\n            return;\r\n         } \r\n\r\n         total.textContent = count;\r\n         count++;\r\n\r\n         interval = setInterval(animTotal, 50);\r\n      };\r\n\r\n      animTotal();\r\n   };\r\n\r\n   calcBlock.addEventListener('change', (e) => {\r\n      if(e.target === calcType || e.target === calcSquare || \r\n         e.target === calcCount || e.target === calcDay) {\r\n            countCalc();\r\n      }\r\n   });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n   const menu = document.querySelector('menu');\r\n   const body = document.querySelector('body');\r\n\r\n   const handlerMenu = () => {\r\n      menu.classList.toggle('active-menu');\r\n   };\r\n\r\n   body.addEventListener('click', (e) => {\r\n      if(e.target.closest('menu>ul>li>a') || \r\n      e.target.classList.contains('close-btn') || \r\n      e.target.closest('.menu')) {\r\n         handlerMenu();\r\n      } else if(!e.target.closest('menu')) {\r\n         menu.classList.remove('active-menu');\r\n      }\r\n   });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n   const popup = document.querySelector('.popup');\r\n   const popupBtns = document.querySelectorAll('.popup-btn');\r\n   const popupClose = popup.querySelector('.popup-close');\r\n   const popupContent = popup.querySelector('.popup-content');\r\n\r\n   let idAnimation;\r\n\r\n   const resizeWidth = () => {\r\n      if(window.innerWidth < 768) {\r\n         popupContent.style.opacity = '1';\r\n         popupContent.style.transition = 'none';\r\n         clearInterval(idAnimation);\r\n      } else {\r\n         popupContent.style.transition = `all 0.5s linear`;\r\n         popupContent.style.opacity = '0';\r\n      }\r\n   };\r\n\r\n   const animPopup = () => {\r\n      popupContent.style.opacity = '1';\r\n   };\r\n\r\n   const openPopup = () => {\r\n      resizeWidth();\r\n      popup.style.display = 'block';\r\n      requestAnimationFrame(animPopup);\r\n   };\r\n\r\n   const closePopup = () => {\r\n      popup.style.display = 'none';\r\n      popupContent.style.opacity = '0';\r\n   };\r\n\r\n   popupBtns.forEach(btn => {\r\n      btn.addEventListener('click', openPopup);\r\n   });\r\n\r\n   popupClose.addEventListener('click', closePopup);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n   const main = document.querySelector('main');\r\n   const menuLink = document.querySelectorAll('menu>ul>li>a');\r\n   const bottom = document.querySelector('main>a');\r\n\r\n   const animScroll = (link) => {\r\n      const el = document.querySelector(link.getAttribute('href'));\r\n\r\n      el.scrollIntoView({\r\n         behavior: 'smooth',\r\n         block: 'start'\r\n      });\r\n   };\r\n\r\n   menuLink.forEach(link => {\r\n      link.addEventListener('click', (event) => {\r\n         event.preventDefault();\r\n         animScroll(link);\r\n      });\r\n   });\r\n\r\n   bottom.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n      animScroll(bottom);\r\n   });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (sliderContent, sliderItems, sliderDots, activeClass = '-active') => {\r\n   const sliderBlock = document.querySelector(sliderContent);\r\n   const slides = document.querySelectorAll(sliderItems);\r\n   const dotsList = document.querySelector(sliderDots);\r\n\r\n   let dots;\r\n   let currentSlide = 0;\r\n   let interval;\r\n\r\n   if(!sliderBlock || slides.length === 0) return;\r\n\r\n   const prevSlide = (elems, index, strClass = elems[0].classList[0] + activeClass) => {\r\n      elems[index].classList.remove(strClass);\r\n   };\r\n\r\n   const nextSlide = (elems, index, strClass = elems[0].classList[0] + activeClass) => {\r\n      elems[index].classList.add(strClass);\r\n   };\r\n\r\n   const autoSlide = () => {\r\n      prevSlide(slides, currentSlide);\r\n      prevSlide(dots, currentSlide);\r\n\r\n      currentSlide++;\r\n\r\n      if(currentSlide >= slides.length) {\r\n         currentSlide = 0;\r\n      }\r\n\r\n      nextSlide(slides, currentSlide);\r\n      nextSlide(dots, currentSlide);\r\n   };\r\n\r\n   const startSlide = () => {\r\n      interval = setInterval(autoSlide, 2000);\r\n   };\r\n\r\n   const stopSlide = () => {\r\n      clearInterval(interval);\r\n   };\r\n\r\n   const addDots = () => {\r\n      for(let i = 0; i < slides.length; i++) {\r\n         const newDot = document.createElement('li');\r\n         newDot.classList.add('dot');\r\n         dotsList.append(newDot);\r\n      }\r\n\r\n      dots = sliderBlock.querySelectorAll('.dot');\r\n\r\n      dots[0].classList.add(dots[0].classList[0] + activeClass);\r\n   };\r\n\r\n   sliderBlock.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n\r\n      dots = sliderBlock.querySelectorAll('.dot');\r\n\r\n      if(!e.target.matches('.dot, .portfolio-btn')) {\r\n         return;\r\n      }\r\n\r\n      prevSlide(slides, currentSlide);\r\n      prevSlide(dots, currentSlide);\r\n\r\n      if(e.target.matches('#arrow-right')) {\r\n         currentSlide++;\r\n      }\r\n\r\n      if(e.target.matches('#arrow-left')) {\r\n         currentSlide--;\r\n      }\r\n\r\n      if(e.target.classList.contains('dot')) {\r\n         dots.forEach((dot, index) => {\r\n            if(e.target === dot) {\r\n               currentSlide = index;\r\n            }\r\n         });\r\n      }\r\n\r\n      if(currentSlide >= slides.length) {\r\n         currentSlide = 0;\r\n      }\r\n\r\n      if(currentSlide < 0) {\r\n         currentSlide = slides.length - 1;\r\n      }\r\n\r\n      nextSlide(slides, currentSlide);\r\n      nextSlide(dots, currentSlide);\r\n   });\r\n\r\n   sliderBlock.addEventListener('mouseenter', (e) => {\r\n      dots = sliderBlock.querySelectorAll('.dot');\r\n\r\n      if(e.target.matches('.dot, .portfolio-btn')) {\r\n         stopSlide();\r\n      }\r\n   }, true);\r\n\r\n   sliderBlock.addEventListener('mouseleave', (e) => {\r\n      dots = sliderBlock.querySelectorAll('.dot');\r\n\r\n      if(e.target.matches('.dot, .portfolio-btn')) {\r\n         startSlide();\r\n      }\r\n   }, true);\r\n   \r\n   addDots();\r\n   startSlide();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n   const serviceHeader = document.querySelector('.service-header');\r\n   const serviceTabs = document.querySelectorAll('.service-header-tab');\r\n   const serviceTabBlock = document.querySelectorAll('.service-tab');\r\n\r\n   serviceHeader.addEventListener('click', (e) => {\r\n      if(e.target.closest('.service-header-tab')) {\r\n         const thisTab = e.target.closest('.service-header-tab');\r\n\r\n         serviceTabs.forEach((btn, index) => {\r\n            if(btn === thisTab) {\r\n               btn.classList.add('active');\r\n               serviceTabBlock[index].classList.remove('d-none');\r\n            } else {\r\n               btn.classList.remove('active');\r\n               serviceTabBlock[index].classList.add('d-none');\r\n            }\r\n         });\r\n      }\r\n   });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n   const hours = document.getElementById('timer-hours');\r\n   const minutes = document.getElementById('timer-minutes');\r\n   const seconds = document.getElementById('timer-seconds');\r\n\r\n   let idInterval;\r\n\r\n   const getTimeRemaining = () => {\r\n      const dateStop = new Date(deadline).getTime();\r\n      const dateNow = new Date().getTime();\r\n      const timeRemaining = (dateStop - dateNow) / 1000;\r\n      const hours = Math.floor(timeRemaining / 60 / 60);\r\n      const minutes = Math.floor((timeRemaining / 60) % 60);\r\n      const seconds = Math.floor(timeRemaining % 60);\r\n\r\n      return {timeRemaining, hours, minutes, seconds};\r\n   };\r\n\r\n   const addZero = (num) => {\r\n      if(num.toString().length === 1) {\r\n         return '0' + num;\r\n      } else {\r\n         return num;\r\n      }\r\n   };\r\n\r\n   const updateTime = () => {\r\n      const getTime = getTimeRemaining();\r\n\r\n      hours.textContent = addZero(getTime.hours);\r\n      minutes.textContent = addZero(getTime.minutes);\r\n      seconds.textContent = addZero(getTime.seconds);\r\n\r\n      if(getTime.timeRemaining <= 0) {\r\n         clearInterval(idInterval);\r\n         hours.textContent = '00';\r\n         minutes.textContent = '00';\r\n         seconds.textContent = '00';\r\n      }\r\n   }\r\n\r\n   updateTime();\r\n\r\n   idInterval = setInterval(updateTime, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;