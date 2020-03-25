/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contantContent = document.querySelector('#content');\n\n\nconst contactHeader = (text) => {\n  const contact = document.createElement('h1');\n  contact.textContent = text;\n\n  return contact;\n};\n\nconst contactDetails = (text) => {\n  const addressDetails = document.createElement('h2');\n  addressDetails.innerHTML = text;\n\n  return addressDetails;\n};\n\nconst contactNumber = (text) => {\n  const number = document.createElement('p');\n  number.textContent = text;\n\n  return number;\n};\n\nconst contactPage = () => {\n  const contact = contactHeader('Contact us');\n  const addressDetails = contactDetails('We are located in: <br> Foothil, West, 22786 - 3534, <br> riverside drive.');\n  const number = contactNumber('For deliveries or queries. Call us on: +122345567');\n\n\n  contantContent.innerHTML = '';\n  // contantContent.classList.remove('backddrop');\n  contantContent.appendChild(contact);\n  contantContent.appendChild(addressDetails);\n  contantContent.appendChild(number);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactPage);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst homeContent = document.querySelector('#content');\nconst homePageLogo = document.querySelector('#logo');\n\n\nconst logoName = (text) => {\n  const logo = document.createElement('h1');\n  logo.textContent = text;\n\n  return logo;\n};\nconst headlinerPhrase = (text) => {\n  const headliner = document.createElement('h2');\n  headliner.innerHTML = text;\n\n  return headliner;\n};\n\nconst miniHeadlinerPhrase = (text) => {\n  const phrase = document.createElement('p');\n  phrase.textContent = text;\n\n  return phrase;\n};\n\nconst homePage = () => {\n  const logo = logoName('Gabriel\\'s place');\n  const headliner = headlinerPhrase('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');\n  const phrase = miniHeadlinerPhrase(' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');\n\n\n  homePageLogo.innerHTML = '';\n  homePageLogo.classList.remove('backddrop');\n  homePageLogo.appendChild(logo);\n\n  homeContent.innerHTML = '';\n  homeContent.classList.remove('backdrop');\n  homeContent.appendChild(headliner);\n  homeContent.appendChild(phrase);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (homePage);\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n// header child-nodes\nconst toggles = document.querySelectorAll('.nav-item');\nconst homeToggle = document.querySelector('#home-toggle');\nconst menuToggle = document.querySelector('#menu-toggle');\nconst contactToggle = document.querySelector('#contact-toggle');\n\nconst selectToggle = (toggleButton) => {\n  toggles.forEach(toggle => {\n    if (toggle === toggleButton) {\n      toggle.classList.add('nav-item-selected');\n    } else {\n      toggle.classList.remove('nav-item-selected');\n    }\n  });\n};\n\n// event handlers\nhomeToggle.addEventListener('click', function home() {\n  selectToggle(this);\n  Object(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nmenuToggle.addEventListener('click', function menu() {\n  selectToggle(this);\n  Object(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\ncontactToggle.addEventListener('click', function contact() {\n  selectToggle(this);\n  Object(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\nObject(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menuContent = document.querySelector('#content');\n\nconst FOODLIST = [\n  ['Original Double ‘N Cheese Steakburger – Steak ‘N Shake',\n    'You can’t go wrong with two Steakburgers topped with melted cheese, lettuce, tomato, grilled onions, jalapeños, and mayo all found on a sourdough bun. The original double ‘n cheese steakburger at Steak ‘N Shake comes with a side of fries and, when you wash it all down with a chocolate shake, you’re sure to walk away smiling.'],\n  ['Cheese Biscuits – Red Lobster',\n    'When you first sit down at Red Lobster, you’re in for a real treat almost immediately: cheese biscuits. Anyone who has ever been to this chain seafood restaurants knows that you go for the lobster, but stay for the biscuits. This is a simple dish, basically biscuits with cheese baked right into the batter, but sometimes the simplest things are what make us the happiest.'],\n  ['Spicy Grilled Shrimp Tacos – Chili’s',\n    'Head on down to Chili’s and order this delicious take on a traditional Mexican dish: the Spicy Grilled Shrimp Taco. When you do, you’ll experience three tortillas stuffed with grilled shrimp, pico de gallo salsa, and sliced avocados for balance. This unique take on a traditional Mexican dish will have you begging for seconds – guaranteed.'],\n  ['Chang’s Chicken Lettuce Wraps – P.F. Chang’s',\n    'Everyone loves a trip to P.F. Chang’s. Next time you stop by, be sure and give the chain’s Chicken Lettuce Wraps a try. You’ll be served crisp lettuce cups stuffed with chicken, mushrooms, green onions, and water chestnuts. You’ll almost certainly be fighting the rest of your party to get every bite of this unique and tasty dish.'],\n];\n\nconst fillTableData = (foodListMenu) => {\n  const tableData = document.createElement('td');\n  tableData.textContent = foodListMenu;\n  return tableData;\n};\n\nconst fillTableRow = (food) => {\n  const tableRow = document.createElement('tr');\n  tableRow.appendChild(fillTableData(food[0]));\n  tableRow.appendChild(fillTableData(food[1]));\n  return tableRow;\n};\n\nconst fillMenuItems = menuTable => {\n  FOODLIST.forEach(food => {\n    menuTable.appendChild(fillTableRow(food));\n  });\n};\n\nconst fillMenuHeadings = (menuTable) => {\n  const tableRow = document.createElement('tr');\n  const tableHeadingFood = document.createElement('th');\n  const tableHeadingDescription = document.createElement('th');\n\n  tableHeadingFood.textContent = 'Food';\n  tableHeadingDescription.textContent = 'Description';\n\n  tableRow.appendChild(tableHeadingFood);\n  tableRow.appendChild(tableHeadingDescription);\n\n  menuTable.appendChild(tableRow);\n};\n\nconst fillMenuTable = () => {\n  const menuTable = document.createElement('table');\n  menuTable.classList.add('menu-table');\n  fillMenuHeadings(menuTable);\n  fillMenuItems(menuTable);\n\n  return menuTable;\n};\n\nconst MenuPage = () => {\n  const container = document.createElement('div');\n  container.classList.add('menu-container');\n  const menuTable = fillMenuTable();\n  container.appendChild(menuTable);\n\n  menuContent.classList.add('backdrop');\n  menuContent.innerHTML = '';\n  menuContent.appendChild(container);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuPage);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });