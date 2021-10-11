(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/react-webp-image/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-webp-image/es/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/tylerwolff/dev/react-webp-image/src/index.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var webp = _ref.webp,\n      src = _ref.src,\n      rest = _objectWithoutPropertiesLoose(_ref, [\"webp\", \"src\"]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"picture\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"source\", {\n    srcSet: webp,\n    type: \"image/webp\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"source\", {\n    srcSet: src,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", _extends({\n    src: src\n  }, rest, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  })));\n});\n\n//# sourceURL=webpack:///./node_modules/react-webp-image/es/index.js?");

/***/ }),

/***/ "./src/components/LazyImages/index.js":
/*!********************************************!*\
  !*** ./src/components/LazyImages/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/components/LazyImages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_webp_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webp-image */ \"./node_modules/react-webp-image/es/index.js\");\n\n\n\n\nvar MyImage = function MyImage(_ref) {\n  var image = _ref.image;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_webp_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    src: process.env.PUBLIC_URL + '/images/IMG_1050.jpg',\n    srcSet: process.env.PUBLIC_URL + '/images/IMG_1050_768.jpg 768w',\n    webp: process.env.PUBLIC_URL + '/images/IMG_1050_768.webp',\n    alt: \"Joe and Dominic\",\n    className: \"Joe-image\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyImage);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/components/LazyImages/index.js?");

/***/ }),

/***/ "./src/components/LazyImages/styles.css":
/*!**********************************************!*\
  !*** ./src/components/LazyImages/styles.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/LazyImages/styles.css?");

/***/ })

}]);