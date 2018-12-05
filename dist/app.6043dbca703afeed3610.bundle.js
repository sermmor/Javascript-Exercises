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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/01ArrayOperations.js":
/*!*************************************!*\
  !*** ./src/js/01ArrayOperations.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Head.
const head = ([a, ...rest]) => a; // Tail.


const tail = ([a, ...rest]) => rest; // Init.


const init = l => l.slice(0, l.length - 1); // Last.


const last = l => l[l.length - 1]; // -------- Show tests in console.


let listToShow = [20, 42, 61, 57, 64, 98];
console.log("-- 1. Array Operations --");
console.log("Head result of [20, 42, 61, 57, 64, 98]: " + head(listToShow));
console.log("Tail result of [20, 42, 61, 57, 64, 98]: " + tail(listToShow));
console.log("Init result of [20, 42, 61, 57, 64, 98]: " + init(listToShow));
console.log("Last result of [20, 42, 61, 57, 64, 98]: " + last(listToShow));

/***/ }),

/***/ "./src/js/02Concat.js":
/*!****************************!*\
  !*** ./src/js/02Concat.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const concat = (a, b) => [...a, ...b]; // -------- Show tests in console.


console.log("-- 2. Concat --");
let list1 = [20, 42, 61, 57];
let list2 = [64, 98, 4];
console.log("Concat result of [20, 42, 61, 57] + [64, 98, 4]: " + concat(list1, list2));

/***/ }),

/***/ "./src/js/03CloneMerge.js":
/*!********************************!*\
  !*** ./src/js/03CloneMerge.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function clone(source) {
  let result = {};

  for (const key in source) {
    result[key] = source[key];
  }
} // -------- Show tests in console.


let objToShow = {
  name: "Cactuar",
  race: "plant",
  strenght: 100,
  magic: 0,
  defense: 100,
  agility: 255,
  spirit: 100,
  luck: 255,
  hp: 2950,
  mp: 35,
  resistanceElements: ["ice", "water"],
  resistanceStatus: ["stone"],
  specialAttack: "1000 Needles",
  hasSpecialItem: false,
  experience: 255,
  gil: 24
};
console.log("-- 3. Clone Merge --");
let objToShowClone = clone(objToShow);
console.log("Clone result: ");
console.dir(objToShowClone);
console.log("(¿Are origin equals to clone?)" + (objToShowClone === objToShow));

/***/ }),

/***/ "./src/js/04ReadBooks.js":
/*!*******************************!*\
  !*** ./src/js/04ReadBooks.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/05SlotMachine.js":
/*!*********************************!*\
  !*** ./src/js/05SlotMachine.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi ./src/js/01ArrayOperations.js ./src/js/02Concat.js ./src/js/03CloneMerge.js ./src/js/04ReadBooks.js ./src/js/05SlotMachine.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/01ArrayOperations.js */"./src/js/01ArrayOperations.js");
__webpack_require__(/*! ./src/js/02Concat.js */"./src/js/02Concat.js");
__webpack_require__(/*! ./src/js/03CloneMerge.js */"./src/js/03CloneMerge.js");
__webpack_require__(/*! ./src/js/04ReadBooks.js */"./src/js/04ReadBooks.js");
module.exports = __webpack_require__(/*! ./src/js/05SlotMachine.js */"./src/js/05SlotMachine.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzLzAxQXJyYXlPcGVyYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy8wMkNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvMDNDbG9uZU1lcmdlLmpzIl0sIm5hbWVzIjpbImhlYWQiLCJhIiwicmVzdCIsInRhaWwiLCJpbml0IiwibCIsInNsaWNlIiwibGVuZ3RoIiwibGFzdCIsImxpc3RUb1Nob3ciLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwiYiIsImxpc3QxIiwibGlzdDIiLCJjbG9uZSIsInNvdXJjZSIsInJlc3VsdCIsImtleSIsIm9ialRvU2hvdyIsIm5hbWUiLCJyYWNlIiwic3RyZW5naHQiLCJtYWdpYyIsImRlZmVuc2UiLCJhZ2lsaXR5Iiwic3Bpcml0IiwibHVjayIsImhwIiwibXAiLCJyZXNpc3RhbmNlRWxlbWVudHMiLCJyZXNpc3RhbmNlU3RhdHVzIiwic3BlY2lhbEF0dGFjayIsImhhc1NwZWNpYWxJdGVtIiwiZXhwZXJpZW5jZSIsImdpbCIsIm9ialRvU2hvd0Nsb25lIiwiZGlyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtB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WjtBQUNBLElBQUkwQixjQUFjLEdBQUdyQixLQUFLLENBQUNJLFNBQUQsQ0FBMUI7QUFDQVYsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQUQsT0FBTyxDQUFDNEIsR0FBUixDQUFZRCxjQUFaO0FBQ0EzQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FBb0MwQixjQUFjLEtBQUtqQixTQUF2RCxDQUFaLEUiLCJmaWxlIjoiYXBwLjYwNDNkYmNhNzAzYWZlZWQzNjEwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEhlYWQuXHJcbmNvbnN0IGhlYWQgPSAoW2EsIC4uLnJlc3RdKSA9PiBhO1xyXG5cclxuLy8gVGFpbC5cclxuY29uc3QgdGFpbCA9IChbYSwgLi4ucmVzdF0pID0+IHJlc3Q7XHJcblxyXG4vLyBJbml0LlxyXG5jb25zdCBpbml0ID0gKGwpID0+IGwuc2xpY2UoMCwgbC5sZW5ndGggLSAxKTtcclxuXHJcbi8vIExhc3QuXHJcbmNvbnN0IGxhc3QgPSAobCkgPT4gbFtsLmxlbmd0aCAtIDFdO1xyXG5cclxuLy8gLS0tLS0tLS0gU2hvdyB0ZXN0cyBpbiBjb25zb2xlLlxyXG5sZXQgbGlzdFRvU2hvdyA9IFsyMCwgNDIsIDYxLCA1NywgNjQsIDk4XTtcclxuY29uc29sZS5sb2coXCItLSAxLiBBcnJheSBPcGVyYXRpb25zIC0tXCIpO1xyXG5jb25zb2xlLmxvZyhcIkhlYWQgcmVzdWx0IG9mIFsyMCwgNDIsIDYxLCA1NywgNjQsIDk4XTogXCIgKyBoZWFkKGxpc3RUb1Nob3cpKTtcclxuY29uc29sZS5sb2coXCJUYWlsIHJlc3VsdCBvZiBbMjAsIDQyLCA2MSwgNTcsIDY0LCA5OF06IFwiICsgdGFpbChsaXN0VG9TaG93KSk7XHJcbmNvbnNvbGUubG9nKFwiSW5pdCByZXN1bHQgb2YgWzIwLCA0MiwgNjEsIDU3LCA2NCwgOThdOiBcIiArIGluaXQobGlzdFRvU2hvdykpO1xyXG5jb25zb2xlLmxvZyhcIkxhc3QgcmVzdWx0IG9mIFsyMCwgNDIsIDYxLCA1NywgNjQsIDk4XTogXCIgKyBsYXN0KGxpc3RUb1Nob3cpKTtcclxuIiwiY29uc3QgY29uY2F0ID0gKGEsIGIpID0+IFsuLi5hLCAuLi5iXTtcclxuXHJcbi8vIC0tLS0tLS0tIFNob3cgdGVzdHMgaW4gY29uc29sZS5cclxuY29uc29sZS5sb2coXCItLSAyLiBDb25jYXQgLS1cIik7XHJcbmxldCBsaXN0MSA9IFsyMCwgNDIsIDYxLCA1N107XHJcbmxldCBsaXN0MiA9IFs2NCwgOTgsIDRdO1xyXG5jb25zb2xlLmxvZyhcIkNvbmNhdCByZXN1bHQgb2YgWzIwLCA0MiwgNjEsIDU3XSArIFs2NCwgOTgsIDRdOiBcIiArIGNvbmNhdChsaXN0MSwgbGlzdDIpKTtcclxuIiwiZnVuY3Rpb24gY2xvbmUoc291cmNlKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLSBTaG93IHRlc3RzIGluIGNvbnNvbGUuXHJcbmxldCBvYmpUb1Nob3cgPSB7XHJcbiAgICBuYW1lOiBcIkNhY3R1YXJcIixcclxuICAgIHJhY2U6IFwicGxhbnRcIixcclxuICAgIHN0cmVuZ2h0OiAxMDAsXHJcbiAgICBtYWdpYzogMCxcclxuICAgIGRlZmVuc2U6IDEwMCxcclxuICAgIGFnaWxpdHk6IDI1NSxcclxuICAgIHNwaXJpdDogMTAwLFxyXG4gICAgbHVjazogMjU1LFxyXG4gICAgaHA6IDI5NTAsXHJcbiAgICBtcDogMzUsXHJcbiAgICByZXNpc3RhbmNlRWxlbWVudHM6IFtcImljZVwiLCBcIndhdGVyXCJdLFxyXG4gICAgcmVzaXN0YW5jZVN0YXR1czogW1wic3RvbmVcIl0sXHJcbiAgICBzcGVjaWFsQXR0YWNrOiBcIjEwMDAgTmVlZGxlc1wiLFxyXG4gICAgaGFzU3BlY2lhbEl0ZW06IGZhbHNlLFxyXG4gICAgZXhwZXJpZW5jZTogMjU1LFxyXG4gICAgZ2lsOiAyNCxcclxufTtcclxuXHJcbmNvbnNvbGUubG9nKFwiLS0gMy4gQ2xvbmUgTWVyZ2UgLS1cIik7XHJcbmxldCBvYmpUb1Nob3dDbG9uZSA9IGNsb25lKG9ialRvU2hvdyk7XHJcbmNvbnNvbGUubG9nKFwiQ2xvbmUgcmVzdWx0OiBcIik7XHJcbmNvbnNvbGUuZGlyKG9ialRvU2hvd0Nsb25lKTtcclxuY29uc29sZS5sb2coXCIowr9BcmUgb3JpZ2luIGVxdWFscyB0byBjbG9uZT8pXCIgKyAob2JqVG9TaG93Q2xvbmUgPT09IG9ialRvU2hvdykpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=