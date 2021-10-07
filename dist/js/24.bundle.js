(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./src/components/Block/index.js":
/*!***************************************!*\
  !*** ./src/components/Block/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Block/styles.js\");\n\n\n\nvar Block = function Block(_ref) {\n  var title = _ref.title,\n      content = _ref.content;\n  return /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], null, /*#__PURE__*/React.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    left: true\n  }, /*#__PURE__*/React.createElement(\"h3\", null, title), /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"TextWrapper\"], null, /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Content\"], null, content))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Block);\n\n//# sourceURL=webpack:///./src/components/Block/index.js?");

/***/ }),

/***/ "./src/components/Block/styles.js":
/*!****************************************!*\
  !*** ./src/components/Block/styles.js ***!
  \****************************************/
/*! exports provided: Content, Container, TextWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextWrapper\", function() { return TextWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  margin-top: -5.5rem;\\n  margin-left: 0.8rem;\\n  font-size: 20px\\n\"])));\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  position: relative;\\n  max-width: 700px;\\n\"])));\nvar TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  border-radius: 3rem;\\n  max-width: 600px;\\n\"])));\n\n//# sourceURL=webpack:///./src/components/Block/styles.js?");

/***/ })

}]);