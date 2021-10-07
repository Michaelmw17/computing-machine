(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css":
/*!************************************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css?");

/***/ }),

/***/ "./node_modules/react-webp-image/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-webp-image/es/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/tylerwolff/dev/react-webp-image/src/index.js\";\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var webp = _ref.webp,\n      src = _ref.src,\n      rest = _objectWithoutPropertiesLoose(_ref, [\"webp\", \"src\"]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"picture\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"source\", {\n    srcSet: webp,\n    type: \"image/webp\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"source\", {\n    srcSet: src,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", _extends({\n    src: src\n  }, rest, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  })));\n});\n\n//# sourceURL=webpack:///./node_modules/react-webp-image/es/index.js?");

/***/ }),

/***/ "./src/components/MyCompMain/myComp.js":
/*!*********************************************!*\
  !*** ./src/components/MyCompMain/myComp.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner/dist/loader/css/react-spinner-loader.css */ \"./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css\");\n/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/components/MyCompMain/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_webp_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-webp-image */ \"./node_modules/react-webp-image/es/index.js\");\n\n\n\n // import imgPath from \"assets/photo.png\";\n// import webpPath from \"../../../public/images/light3_768.webp\";\n\nvar MyComp = function MyComp() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_webp_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    src: process.env.PUBLIC_URL + '/images/light3.jpg',\n    srcSet: process.env.PUBLIC_URL + '/images/light3_768.jpg 768w',\n    webp: process.env.PUBLIC_URL + '/images/light3_768.webp',\n    alt: \"Lighting JDP Electrical Services\",\n    className: \"light\",\n    loading: \"lazy\",\n    \"max-age\": \"31536000\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyComp);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/node-libs-browser/node_modules/process/browser.js */ \"./node_modules/node-libs-browser/node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/components/MyCompMain/myComp.js?");

/***/ }),

/***/ "./src/components/MyCompMain/styles.css":
/*!**********************************************!*\
  !*** ./src/components/MyCompMain/styles.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/MyCompMain/styles.css?");

/***/ })

}]);