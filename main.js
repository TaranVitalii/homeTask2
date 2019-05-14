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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/import.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/first1.js":
/*!***********************!*\
  !*** ./src/first1.js ***!
  \***********************/
/*! exports provided: yearsArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsArr", function() { return yearsArr; });
'usestrict';


function yearsArr(){ 
let res1 = prompt('enter first year',2019);
let res2 = prompt('enter second year',2019);


if (isNaN(res1)){
	res1 = 2019;
}else if(isNaN(res2)){
	res2=2019;
} else if(res1>res2){
	res1=2019;
	res2=2019;
}
let res3 = Math.floor(res2/4);
let res4 = Math.ceil(res1/4);
let arr=[];

for (; res4 <= res3 ;res4++){
	let newRes1 = res4*4;
	arr.push(newRes1);
}
return arr;

}
window.yearsArr=yearsArr();




/***/ }),

/***/ "./src/first2.js":
/*!***********************!*\
  !*** ./src/first2.js ***!
  \***********************/
/*! exports provided: randomArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomArray", function() { return randomArray; });

function randomArray(){
	let arr=[];

	while (arr.length <50) {
		let randomValue = Math.floor(Math.random()*100);
		while(arr.indexOf(randomValue) < 0){
			arr.push(randomValue);
		}

	}
	arr.sort((a,b)=> a-b )
	return arr;
	}


/***/ }),

/***/ "./src/first3.js":
/*!***********************!*\
  !*** ./src/first3.js ***!
  \***********************/
/*! exports provided: evenOddValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evenOddValue", function() { return evenOddValue; });

function evenOddValue(){ 
	let arr=[];

	while (arr.length <50) {
		let randomValue = Math.floor(Math.random()*100);
		while(arr.indexOf(randomValue) < 0){
			arr.push(randomValue);
		}

	}
	

const evenArr = [];
const oddArr = [];

	for (let i = 0; i < arr.length; i++ ) {
		let elementArray = arr[i];
		let evenOrOdd = elementArray%2;
			
		if(evenOrOdd > 0) {
			oddArr.push(elementArray)
		} else {evenArr.push(elementArray)}
	}
arr.sort((a,b)=> a-b )

let evenValue = Math.max(...evenArr);
let oddValue = Math.max(...oddArr);
let evenOddValue = [evenValue,oddValue ];
return evenOddValue;
}



/***/ }),

/***/ "./src/first4.js":
/*!***********************!*\
  !*** ./src/first4.js ***!
  \***********************/
/*! exports provided: newObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newObject", function() { return newObject; });
function newObject() { 
let users = [
  {
    id: 1,
   name: 'Mihail'
  },
  {
    id: 2,
   name: 'Marina'
  },
  {
    id: 3,
   name: 'Andrew'
  },
  {
    id: 4,
   name: 'Ilya'
  },
];


let newObject= users.reduce((acc, item, index) => {
    acc[index]=item.name;
    return acc;
}, {});
return  newObject;
}




/***/ }),

/***/ "./src/first5.js":
/*!***********************!*\
  !*** ./src/first5.js ***!
  \***********************/
/*! exports provided: isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
function isEmpty(obj) {
	for(let property in obj){
		return false;
	}
	return true;
}




/***/ }),

/***/ "./src/first6.js":
/*!***********************!*\
  !*** ./src/first6.js ***!
  \***********************/
/*! exports provided: factorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factorial", function() { return factorial; });
function factorial(n) {
	if (n===1) {
		return 1;
	} else {
	return n * factorial(n-1);
 }
}


/***/ }),

/***/ "./src/import.js":
/*!***********************!*\
  !*** ./src/import.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _first1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first1 */ "./src/first1.js");
/* harmony import */ var _first2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first2 */ "./src/first2.js");
/* harmony import */ var _first3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first3 */ "./src/first3.js");
/* harmony import */ var _first4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first4 */ "./src/first4.js");
/* harmony import */ var _first5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first5 */ "./src/first5.js");
/* harmony import */ var _first6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first6 */ "./src/first6.js");








const button1 = document.querySelector('first');
const button2 = document.querySelector('second');
const button3 = document.querySelector('three');
const button4 = document.querySelector('four');
const button5 = document.querySelector('five');
const button6 = document.querySelector('six');



button1.onclick = () => {
	console.log(_first1__WEBPACK_IMPORTED_MODULE_0__["yearsArr"])

};
button2.onclick = () => {

};
button3.onclick = () => {

};
button4.onclick = () => {

};
button5.onclick = () => {

};
button6.onclick = () => {

};

/***/ })

/******/ });