(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/components/MiddleBlockTwo/index.js":
/*!************************************************!*\
  !*** ./src/components/MiddleBlockTwo/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/MiddleBlockTwo/styles.js\");\n // import { withTranslation } from \"react-i18next\";\n\n\n\nvar Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {\n  return __webpack_require__.e(/*! import() | sula-antd */ \"vendors~sula-antd\").then(__webpack_require__.t.bind(null, /*! antd/lib/grid/row */ \"./node_modules/antd/lib/grid/row.js\", 7));\n});\nvar Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {\n  return __webpack_require__.e(/*! import() | sula-antd */ \"vendors~sula-antd\").then(__webpack_require__.t.bind(null, /*! antd/lib/grid/col */ \"./node_modules/antd/lib/grid/col.js\", 7));\n});\n\nvar MiddleBlock = function MiddleBlock(_ref) {\n  var title = _ref.title,\n      content = _ref.content,\n      button = _ref.button;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"MiddleBlock\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {\n    type: \"flex\",\n    justify: \"center\",\n    align: \"middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    bottom: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"ContentWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Col, {\n    lg: 24,\n    md: 24,\n    sm: 24,\n    xs: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Content\"], null, content))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiddleBlock);\n\n//# sourceURL=webpack:///./src/components/MiddleBlockTwo/index.js?");

/***/ }),

/***/ "./src/components/MiddleBlockTwo/styles.js":
/*!*************************************************!*\
  !*** ./src/components/MiddleBlockTwo/styles.js ***!
  \*************************************************/
/*! exports provided: MiddleBlock, Content, ContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MiddleBlock\", function() { return MiddleBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentWrapper\", function() { return ContentWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar MiddleBlock = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: relative;\\n  text-align: center;\\n  display: flex;\\n  justify-content: center;\\n\\n  @media screen and (max-width: 768px) {\\n    padding: 0.5rem 0 3rem;\\n  }\\n\"])));\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  padding: 0.75rem 2.1rem 0.1rem 2.35rem;\\n  font-size: 21px\\n\"])));\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  max-width: 770px;\\n\\n  @media only screen and (max-width: 768px) {\\n    max-width: 100%;\\n    max-width: 520px;\\n  }\\n\"])));\n\n//# sourceURL=webpack:///./src/components/MiddleBlockTwo/styles.js?");

/***/ })

}]);