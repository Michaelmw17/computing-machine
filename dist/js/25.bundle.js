(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./src/common/TextArea/index.js":
/*!**************************************!*\
  !*** ./src/common/TextArea/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/common/TextArea/styles.js\");\n\n\n\nvar TextArea = function TextArea(_ref) {\n  var name = _ref.name,\n      id = _ref.id,\n      placeholder = _ref.placeholder,\n      onChange = _ref.onChange,\n      t = _ref.t;\n  return /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], null, /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"TextArea\"], {\n    spellcheck: \"false\",\n    placeholder: t(placeholder),\n    id: name,\n    name: name,\n    onChange: onChange\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_0__[\"withTranslation\"])()(TextArea));\n\n//# sourceURL=webpack:///./src/common/TextArea/index.js?");

/***/ }),

/***/ "./src/common/TextArea/styles.js":
/*!***************************************!*\
  !*** ./src/common/TextArea/styles.js ***!
  \***************************************/
/*! exports provided: Container, TextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextArea\", function() { return TextArea; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  display: inline-block;\\n  width: 100%;\\n\"])));\nvar TextArea = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].textarea(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  outline: none;\\n  border-radius: 8px;\\n  padding: 1rem 1.25rem;\\n  resize: none;\\n  font-size: 0.875rem;\\n  height: 135px;\\n  transition: border-color 0.3s ease-in;\\n\\n  &:focus,\\n  &:hover {\\n    border-color: RGB(209, 29, 50);\\n  }\\n\"])));\n\n//# sourceURL=webpack:///./src/common/TextArea/styles.js?");

/***/ })

}]);