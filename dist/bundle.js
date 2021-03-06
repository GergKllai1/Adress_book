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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar renderContacts = function renderContacts() {\n    console.log('I am being rendered');\n    var storage = window.localStorage;\n    var contacts = JSON.parse(storage.getItem('contacts'));\n    var div = document.querySelector('.contentt');\n\n    if (contacts) {\n        div.innerHTML = '';\n        contacts.forEach(function (contact) {\n            var p = document.createElement('p');\n            if (contact.gender == 'Male') {\n                p.innerHTML = '\\n                <div class=\"rounded-lg\">\\n                <div class=\"w-64  rounded overflow-hidden shadow-lg flex flex-col justify-around\">\\n                    <img class=\"w-32 h-32 self-center\" src=\"./images/man-grey.png\" alt=\"Profile picture\">\\n                    <div class=\"px-6 py-4 \">\\n                        <h2> ' + contact.name + ' </h2>\\n                        <h4><u>Works at:</u>  </h4>\\n                        <h4 class=\"h-12 overflow-auto\">' + contact.company + ' </h4>\\n                        <br>\\n                        <p><u>Mobil:</u>  ' + contact.phone + ' </p> \\n                        <p><u>Email:</u> ' + contact.email + '</p>\\n                        <p><u>Twitter:</u> <a href =\"https://www.twitter.com/' + contact.twitter + '\">@' + contact.twitter + '</a></p>\\n                        <br>\\n                        <p><u>About him:</u></p>                 \\n                        <p class=\"h-16 overflow-auto\">' + contact.notes + ' </p>\\n                    </div>\\n                </div>\\n            </div>\\n            ';\n            } else if (contact.gender == \"Female\") {\n                p.innerHTML = '\\n            <div>\\n            <div class=\"w-64  rounded overflow-hidden shadow-lg flex flex-col justify-around\">\\n                <img class=\"w-32 h-31 self-center\" src=\"./images/woman-grey.png\" alt=\"Profile picture\">\\n                <div class=\"px-6 py-4 \">\\n                    <h2> ' + contact.name + ' </h2>\\n                    <h4><u>Works at:</u>  </h4>\\n                    <h4 class=\"h-12 overflow-auto\">' + contact.company + ' </h4>\\n                    <br>\\n                    <p><u>Mobil:</u>  ' + contact.phone + ' </p> \\n                    <p><u>Email:</u> ' + contact.email + '</p>\\n                    <p><u>Twitter:</u> <a href =\"https://www.twitter.com/' + contact.twitter + '\">@' + contact.twitter + '</a></p>\\n                    <br>\\n                    <p><u>About her:</u></p>                 \\n                    <p class=\"h-16 overflow-auto\">' + contact.notes + ' </p>\\n                </div>\\n            </div>\\n        </div>\\n            ';\n            }\n            div.appendChild(p);\n        });\n    } else {\n        div.innerHTML = '<p> You have no contacts in your address book </p>';\n    }\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    renderContacts();\n    var addContactForm = document.querySelector('.new-contact-form');\n    addContactForm.addEventListener('submit', function (event) {\n        event.preventDefault();\n        var storage = window.localStorage;\n\n        var _addContactForm$eleme = addContactForm.elements,\n            name = _addContactForm$eleme.name,\n            gender = _addContactForm$eleme.gender,\n            email = _addContactForm$eleme.email,\n            phone = _addContactForm$eleme.phone,\n            company = _addContactForm$eleme.company,\n            notes = _addContactForm$eleme.notes,\n            twitter = _addContactForm$eleme.twitter;\n\n\n        var contact = {\n            id: Date.now(),\n            name: name.value,\n            gender: gender.value,\n            email: email.value,\n            phone: phone.value,\n            company: company.value,\n            notes: notes.value,\n            twitter: twitter.value\n        };\n\n        console.log('Saving the following contact: ' + JSON.stringify(contact));\n        var formcontacts = JSON.parse(storage.getItem('contacts')) || [];\n        formcontacts.push(contact);\n        storage.setItem('contacts', JSON.stringify(formcontacts));\n        renderContacts();\n        addContactForm.reset();\n    });\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });