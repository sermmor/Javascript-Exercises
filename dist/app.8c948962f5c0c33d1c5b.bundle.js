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


const listToShow = [20, 42, 61, 57, 64, 98];
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

// Concat.
const concat = (a, b) => [...a, ...b]; // -------- Show tests in console.


console.log("-- 2. Concat --");
const list1 = [20, 42, 61, 57];
const list2 = [64, 98, 4];
console.log("Concat result of [20, 42, 61, 57] + [64, 98, 4]: " + concat(list1, list2));

/***/ }),

/***/ "./src/js/03CloneMerge.js":
/*!********************************!*\
  !*** ./src/js/03CloneMerge.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Clone.
function clone(source) {
  const result = {};

  for (const key in source) {
    result[key] = source[key];
  }

  return result;
} // Merge.


function merge(source, target) {
  const result = clone(target);

  for (const key in source) {
    result[key] = source[key];
  }

  return result;
} // -------- Show tests in console.


const objToMerge = {
  name: "Jumbo Cactuar",
  hp: 330000,
  agility: 3,
  luck: 50,
  specialAttack: "10000 Needles",
  isABoss: true,
  numberOfAttacksByTurn: 2,
  isInmmuneToStatus: true,
  specialItem: "Guardian Force Cactuar"
};
const objToCloneMerge = {
  name: "Cactuar",
  race: "plant",
  strenght: 160,
  magic: 123,
  defense: 81,
  spirit: 142,
  agility: 200,
  speed: 18,
  luck: 155,
  hp: 2950,
  mp: 35,
  resistanceElements: ["ice", "water"],
  resistanceStatus: ["stone"],
  specialAttack: "1000 Needles",
  isABoss: false,
  experience: 255,
  gil: 24
};
console.log("-- 3. Clone Merge --");
let objCloned = clone(objToCloneMerge);
console.log("Clone result: ");
console.dir(objCloned);
console.log("(¿Are origin equals to clone? " + (objCloned === objToCloneMerge) + ")");
console.log("Merge result: ");
console.dir(merge(objToMerge, objToCloneMerge));

/***/ }),

/***/ "./src/js/05SlotMachine.js":
/*!*********************************!*\
  !*** ./src/js/05SlotMachine.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ts/04ReadBooks.ts":
/*!*******************************!*\
  !*** ./src/ts/04ReadBooks.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function isBookRead(books, titleToSearch) {
  const bookSearched = books.filter(b => b.title === titleToSearch);
  return bookSearched.length == 0 ? false : bookSearched[0].isRead;
} // -------- Show tests in console.


const books = [{
  title: "Hablemos de Langostas",
  isRead: true
}, {
  title: "Rebelión en la Granja",
  isRead: false
}, {
  title: "Alguien que anda por ahí",
  isRead: true
}];
console.log(isBookRead(books, "Alguien que anda por ahí")); // true

console.log(isBookRead(books, "Rebelión en la Granja")); // false

console.log(isBookRead(books, "Los Pilares que la Tierra")); // false

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi ./src/js/01ArrayOperations.js ./src/js/02Concat.js ./src/js/03CloneMerge.js ./src/ts/04ReadBooks.ts ./src/js/05SlotMachine.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/01ArrayOperations.js */"./src/js/01ArrayOperations.js");
__webpack_require__(/*! ./src/js/02Concat.js */"./src/js/02Concat.js");
__webpack_require__(/*! ./src/js/03CloneMerge.js */"./src/js/03CloneMerge.js");
__webpack_require__(/*! ./src/ts/04ReadBooks.ts */"./src/ts/04ReadBooks.ts");
module.exports = __webpack_require__(/*! ./src/js/05SlotMachine.js */"./src/js/05SlotMachine.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzLzAxQXJyYXlPcGVyYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy8wMkNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvMDNDbG9uZU1lcmdlLmpzIiwid2VicGFjazovLy8uL3NyYy90cy8wNFJlYWRCb29rcy50cyJdLCJuYW1lcyI6WyJoZWFkIiwiYSIsInJlc3QiLCJ0YWlsIiwiaW5pdCIsImwiLCJzbGljZSIsImxlbmd0aCIsImxhc3QiLCJsaXN0VG9TaG93IiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsImIiLCJsaXN0MSIsImxpc3QyIiwiY2xvbmUiLCJzb3VyY2UiLCJyZXN1bHQiLCJrZXkiLCJtZXJnZSIsInRhcmdldCIsIm9ialRvTWVyZ2UiLCJuYW1lIiwiaHAiLCJhZ2lsaXR5IiwibHVjayIsInNwZWNpYWxBdHRhY2siLCJpc0FCb3NzIiwibnVtYmVyT2ZBdHRhY2tzQnlUdXJuIiwiaXNJbm1tdW5lVG9TdGF0dXMiLCJzcGVjaWFsSXRlbSIsIm9ialRvQ2xvbmVNZXJnZSIsInJhY2UiLCJzdHJlbmdodCIsIm1hZ2ljIiwiZGVmZW5zZSIsInNwaXJpdCIsInNwZWVkIiwibXAiLCJyZXNpc3RhbmNlRWxlbWVudHMiLCJyZXNpc3RhbmNlU3RhdHVzIiwiZXhwZXJpZW5jZSIsImdpbCIsIm9iakNsb25lZCIsImRpciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFD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RCxFQUFhVSxlQUFiLENBQWpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREEsU0FBUyxVQUFULENBQW9CLEtBQXBCLEVBQW9DLGFBQXBDLEVBQTBEO0FBRXRELFFBQU0sWUFBWSxHQUFZLEtBQUssQ0FBQyxNQUFOLENBQWMsQ0FBRCxJQUFPLENBQUMsQ0FBQyxLQUFGLEtBQVksYUFBaEMsQ0FBOUI7QUFDQSxTQUFPLFlBQVksQ0FBQyxNQUFiLElBQXVCLENBQXZCLEdBQTJCLEtBQTNCLEdBQW1DLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0IsTUFBMUQ7QUFDSCxDLENBRUQ7OztBQUNBLE1BQU0sS0FBSyxHQUFHLENBQ1Y7QUFBQyxPQUFLLEVBQUUsdUJBQVI7QUFBaUMsUUFBTSxFQUFFO0FBQXpDLENBRFUsRUFFVjtBQUFDLE9BQUssRUFBRSx1QkFBUjtBQUFpQyxRQUFNLEVBQUU7QUFBekMsQ0FGVSxFQUdWO0FBQUMsT0FBSyxFQUFFLDBCQUFSO0FBQW9DLFFBQU0sRUFBRTtBQUE1QyxDQUhVLENBQWQ7QUFNQSxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVUsQ0FBQyxLQUFELEVBQVEsMEJBQVIsQ0FBdEIsRSxDQUE0RDs7QUFDNUQsT0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFVLENBQUMsS0FBRCxFQUFRLHVCQUFSLENBQXRCLEUsQ0FBeUQ7O0FBQ3pELE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBVSxDQUFDLEtBQUQsRUFBUSwyQkFBUixDQUF0QixFLENBQTZELFEiLCJmaWxlIjoiYXBwLjhjOTQ4OTYyZjVjMGMzM2QxYzViLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEhlYWQuXHJcbmNvbnN0IGhlYWQgPSAoW2EsIC4uLnJlc3RdKSA9PiBhO1xyXG5cclxuLy8gVGFpbC5cclxuY29uc3QgdGFpbCA9IChbYSwgLi4ucmVzdF0pID0+IHJlc3Q7XHJcblxyXG4vLyBJbml0LlxyXG5jb25zdCBpbml0ID0gKGwpID0+IGwuc2xpY2UoMCwgbC5sZW5ndGggLSAxKTtcclxuXHJcbi8vIExhc3QuXHJcbmNvbnN0IGxhc3QgPSAobCkgPT4gbFtsLmxlbmd0aCAtIDFdO1xyXG5cclxuLy8gLS0tLS0tLS0gU2hvdyB0ZXN0cyBpbiBjb25zb2xlLlxyXG5jb25zdCBsaXN0VG9TaG93ID0gWzIwLCA0MiwgNjEsIDU3LCA2NCwgOThdO1xyXG5jb25zb2xlLmxvZyhcIi0tIDEuIEFycmF5IE9wZXJhdGlvbnMgLS1cIik7XHJcbmNvbnNvbGUubG9nKFwiSGVhZCByZXN1bHQgb2YgWzIwLCA0MiwgNjEsIDU3LCA2NCwgOThdOiBcIiArIGhlYWQobGlzdFRvU2hvdykpO1xyXG5jb25zb2xlLmxvZyhcIlRhaWwgcmVzdWx0IG9mIFsyMCwgNDIsIDYxLCA1NywgNjQsIDk4XTogXCIgKyB0YWlsKGxpc3RUb1Nob3cpKTtcclxuY29uc29sZS5sb2coXCJJbml0IHJlc3VsdCBvZiBbMjAsIDQyLCA2MSwgNTcsIDY0LCA5OF06IFwiICsgaW5pdChsaXN0VG9TaG93KSk7XHJcbmNvbnNvbGUubG9nKFwiTGFzdCByZXN1bHQgb2YgWzIwLCA0MiwgNjEsIDU3LCA2NCwgOThdOiBcIiArIGxhc3QobGlzdFRvU2hvdykpO1xyXG4iLCIvLyBDb25jYXQuXHJcbmNvbnN0IGNvbmNhdCA9IChhLCBiKSA9PiBbLi4uYSwgLi4uYl07XHJcblxyXG4vLyAtLS0tLS0tLSBTaG93IHRlc3RzIGluIGNvbnNvbGUuXHJcbmNvbnNvbGUubG9nKFwiLS0gMi4gQ29uY2F0IC0tXCIpO1xyXG5jb25zdCBsaXN0MSA9IFsyMCwgNDIsIDYxLCA1N107XHJcbmNvbnN0IGxpc3QyID0gWzY0LCA5OCwgNF07XHJcbmNvbnNvbGUubG9nKFwiQ29uY2F0IHJlc3VsdCBvZiBbMjAsIDQyLCA2MSwgNTddICsgWzY0LCA5OCwgNF06IFwiICsgY29uY2F0KGxpc3QxLCBsaXN0MikpO1xyXG4iLCJcclxuLy8gQ2xvbmUuXHJcbmZ1bmN0aW9uIGNsb25lKHNvdXJjZSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gTWVyZ2UuXHJcbmZ1bmN0aW9uIG1lcmdlKHNvdXJjZSwgdGFyZ2V0KSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjbG9uZSh0YXJnZXQpO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2Vba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tIFNob3cgdGVzdHMgaW4gY29uc29sZS5cclxuY29uc3Qgb2JqVG9NZXJnZSA9IHtcclxuICAgIG5hbWU6IFwiSnVtYm8gQ2FjdHVhclwiLFxyXG4gICAgaHA6IDMzMDAwMCxcclxuICAgIGFnaWxpdHk6IDMsXHJcbiAgICBsdWNrOiA1MCxcclxuICAgIHNwZWNpYWxBdHRhY2s6IFwiMTAwMDAgTmVlZGxlc1wiLFxyXG4gICAgaXNBQm9zczogdHJ1ZSxcclxuICAgIG51bWJlck9mQXR0YWNrc0J5VHVybjogMixcclxuICAgIGlzSW5tbXVuZVRvU3RhdHVzOiB0cnVlLFxyXG4gICAgc3BlY2lhbEl0ZW06IFwiR3VhcmRpYW4gRm9yY2UgQ2FjdHVhclwiLFxyXG59O1xyXG5jb25zdCBvYmpUb0Nsb25lTWVyZ2UgPSB7XHJcbiAgICBuYW1lOiBcIkNhY3R1YXJcIixcclxuICAgIHJhY2U6IFwicGxhbnRcIixcclxuICAgIHN0cmVuZ2h0OiAxNjAsXHJcbiAgICBtYWdpYzogMTIzLFxyXG4gICAgZGVmZW5zZTogODEsXHJcbiAgICBzcGlyaXQ6IDE0MixcclxuICAgIGFnaWxpdHk6IDIwMCxcclxuICAgIHNwZWVkOiAxOCxcclxuICAgIGx1Y2s6IDE1NSxcclxuICAgIGhwOiAyOTUwLFxyXG4gICAgbXA6IDM1LFxyXG4gICAgcmVzaXN0YW5jZUVsZW1lbnRzOiBbXCJpY2VcIiwgXCJ3YXRlclwiXSxcclxuICAgIHJlc2lzdGFuY2VTdGF0dXM6IFtcInN0b25lXCJdLFxyXG4gICAgc3BlY2lhbEF0dGFjazogXCIxMDAwIE5lZWRsZXNcIixcclxuICAgIGlzQUJvc3M6IGZhbHNlLFxyXG4gICAgZXhwZXJpZW5jZTogMjU1LFxyXG4gICAgZ2lsOiAyNCxcclxufTtcclxuXHJcbmNvbnNvbGUubG9nKFwiLS0gMy4gQ2xvbmUgTWVyZ2UgLS1cIik7XHJcbmxldCBvYmpDbG9uZWQgPSBjbG9uZShvYmpUb0Nsb25lTWVyZ2UpO1xyXG5jb25zb2xlLmxvZyhcIkNsb25lIHJlc3VsdDogXCIpO1xyXG5jb25zb2xlLmRpcihvYmpDbG9uZWQpO1xyXG5jb25zb2xlLmxvZyhcIijCv0FyZSBvcmlnaW4gZXF1YWxzIHRvIGNsb25lPyBcIiArIChvYmpDbG9uZWQgPT09IG9ialRvQ2xvbmVNZXJnZSkgKyBcIilcIik7XHJcbmNvbnNvbGUubG9nKFwiTWVyZ2UgcmVzdWx0OiBcIik7XHJcbmNvbnNvbGUuZGlyKG1lcmdlKG9ialRvTWVyZ2UsIG9ialRvQ2xvbmVNZXJnZSkpO1xyXG4iLCIvLyBSZWFkIEJvb2tzLlxyXG5pbnRlcmZhY2UgQm9vayB7XHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgaXNSZWFkOiBCb29sZWFuLFxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Jvb2tSZWFkKGJvb2tzIDogQm9va1tdLCB0aXRsZVRvU2VhcmNoIDogc3RyaW5nKVxyXG57XHJcbiAgICBjb25zdCBib29rU2VhcmNoZWQgOiBCb29rW10gPSBib29rcy5maWx0ZXIoKGIpID0+IGIudGl0bGUgPT09IHRpdGxlVG9TZWFyY2gpO1xyXG4gICAgcmV0dXJuIGJvb2tTZWFyY2hlZC5sZW5ndGggPT0gMCA/IGZhbHNlIDogYm9va1NlYXJjaGVkWzBdLmlzUmVhZDtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0gU2hvdyB0ZXN0cyBpbiBjb25zb2xlLlxyXG5jb25zdCBib29rcyA9IFtcclxuICAgIHt0aXRsZTogXCJIYWJsZW1vcyBkZSBMYW5nb3N0YXNcIiwgaXNSZWFkOiB0cnVlfSxcclxuICAgIHt0aXRsZTogXCJSZWJlbGnDs24gZW4gbGEgR3JhbmphXCIsIGlzUmVhZDogZmFsc2V9LFxyXG4gICAge3RpdGxlOiBcIkFsZ3VpZW4gcXVlIGFuZGEgcG9yIGFow61cIiwgaXNSZWFkOiB0cnVlfSxcclxuXTtcclxuXHJcbmNvbnNvbGUubG9nKGlzQm9va1JlYWQoYm9va3MsIFwiQWxndWllbiBxdWUgYW5kYSBwb3IgYWjDrVwiKSk7IC8vIHRydWVcclxuY29uc29sZS5sb2coaXNCb29rUmVhZChib29rcywgXCJSZWJlbGnDs24gZW4gbGEgR3JhbmphXCIpKTsgLy8gZmFsc2VcclxuY29uc29sZS5sb2coaXNCb29rUmVhZChib29rcywgXCJMb3MgUGlsYXJlcyBxdWUgbGEgVGllcnJhXCIpKTsgLy8gZmFsc2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==