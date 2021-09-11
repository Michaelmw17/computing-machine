(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/common/Container/index.js":
/*!***************************************!*\
  !*** ./src/common/Container/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./src/common/Container/styles.js\");\n\n\nvar Container = function Container(_ref) {\n  var padding = _ref.padding,\n      border = _ref.border,\n      children = _ref.children;\n  return /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_0__[\"Container\"], {\n    padding: padding,\n    border: border\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\n//# sourceURL=webpack:///./src/common/Container/index.js?");

/***/ }),

/***/ "./src/common/Container/styles.js":
/*!****************************************!*\
  !*** ./src/common/Container/styles.js ***!
  \****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: relative;\\n  width: 100%;\\n  margin-right: auto;\\n  margin-left: auto;\\n  padding: \", \";\\n  overflow: hidden;\\n  border-top: \", \";\\n  @media only screen and (max-width: 1024px) {\\n    max-width: 950px;\\n  }\\n  @media only screen and (max-width: 768px) {\\n    max-width: 700px;\\n  }\\n  @media only screen and (max-width: 414px) {\\n    max-width: 670px;\\n  }\\n \\n\"])), function (props) {\n  return props.padding ? \"2.9rem\" : \"0 15px\";\n}, function (props) {\n  return props.border ? \"1px solid #CDD1D4\" : \"\";\n});\n\n//# sourceURL=webpack:///./src/common/Container/styles.js?");

/***/ })

}]);