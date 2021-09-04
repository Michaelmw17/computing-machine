(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/common/ButtonMains/ButtonMain.js":
/*!**********************************************!*\
  !*** ./src/common/ButtonMains/ButtonMain.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OutlinedButtons; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.css */ \"./src/common/ButtonMains/button.css\");\n/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      '& > *': {\n        margin: theme.spacing(1),\n        position: \"relative\",\n        height: \"110px\",\n        cursor: \"pointer\",\n        borderRadius: \"20%\",\n        marginTop: \"150px\",\n        display: \"block\",\n        marginRight: \" auto\",\n        width: \"50%\",\n        marginLeft: \"90px\"\n      }\n    }\n  };\n});\nfunction OutlinedButtons() {\n  var classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"example1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"example11\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Click to Enter\",\n    variant: \"outlined\",\n    color: \"primary\",\n    id: \"MainButton\",\n    style: {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"display\": \"block\",\n      \"width\": \"150%\",\n      \"height\": \"60%\",\n      \"borderRadius\": \"20%\",\n      \"background\": \"linear-gradient(to bottom right, white, rgba(220,220,220,.5)), white\",\n      \"boxShadow\": \"rgba(0, 23, 25, 0.2) 0px 19px 38px, #71d9ff 0px 5px 22px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"display\": \"block\",\n      \"width\": \"45%\",\n      \"height\": \"10%\",\n      \"background\": \"#66ffff\",\n      \"borderRadius\": \"20%\",\n      \"boxShadow\": \"0 0 50px #71d9ff,\\n    inset 0 0 50px #71d9ff,\\n    inset 0 1px 1px #000,\\n    0 0 0 1px #000,\\n    0 0 0 1px #000,\\n    0 0  1px #000\",\n      \"marginLeft\": \"13px\",\n      \"marginTop\": \"20px\"\n    }\n  })))));\n}\n\n//# sourceURL=webpack:///./src/common/ButtonMains/ButtonMain.js?");

/***/ }),

/***/ "./src/common/ButtonMains/button.css":
/*!*******************************************!*\
  !*** ./src/common/ButtonMains/button.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common/ButtonMains/button.css?");

/***/ }),

/***/ "./src/components/Toggler.js":
/*!***********************************!*\
  !*** ./src/components/Toggler.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_ButtonMains_ButtonMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/ButtonMains/ButtonMain */ \"./src/common/ButtonMains/ButtonMain.js\");\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\n\n\n\nvar Toggle = function Toggle(_ref) {\n  _objectDestructuringEmpty(_ref);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonMains_ButtonMain__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toggle);\n\n//# sourceURL=webpack:///./src/components/Toggler.js?");

/***/ }),

/***/ "./src/pages/Home/homeStyles.css":
/*!***************************************!*\
  !*** ./src/pages/Home/homeStyles.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/Home/homeStyles.css?");

/***/ }),

/***/ "./src/pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/pages/Home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Toggler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Toggler */ \"./src/components/Toggler.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_simple_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-simple-tooltip */ \"./node_modules/react-simple-tooltip/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _homeStyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeStyles.css */ \"./src/pages/Home/homeStyles.css\");\n/* harmony import */ var _homeStyles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_homeStyles_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n // import {ThemeProvider} from \"styled-components\";\n// import  {useDarkMode} from \"../../components/useDarkMode\"\n// import { GlobalStyles } from \"../../globalStyles\";\n// import { lightTheme, darkTheme } from \"../../components/Themes\"\n\n\n\n\nvar Container = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../../common/Container */ \"./src/common/Container/index.js\"));\n});\n\nvar styles = function styles(theme) {\n  return {\n    fab: {\n      margin: theme.spacing(1)\n    },\n    extendedIcon: {\n      marginRight: theme.spacing(1)\n    }\n  };\n};\n\nvar Home = function Home(props, i) {\n  // const [theme, themeToggler, mountedComponent] = useDarkMode();\n  // const themeMode = theme === 'light' ? lightTheme : darkTheme ;\n  // if(!mountedComponent) return <div/>\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"IntroContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/About\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"AppCon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_simple_tooltip__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    arrow: 8,\n    background: \"rgb(209, 29, 50)\",\n    border: \"#0e1111\",\n    color: \"#FFF\",\n    content: \"Click to Enter JDP Electrical\",\n    fadeDuration: 3,\n    fadeEasing: \"linear\",\n    fixed: false,\n    fontFamily: \"inherit\",\n    fontSize: \"inherit\",\n    offset: 0,\n    padding: 16,\n    placement: \"bottom\",\n    radius: 3,\n    zIndex: 1,\n    customCss: Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n                            white-space: nowrap;\\n                            word-break: break-all;\\n                          \"])))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toggler__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/About\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    style: {\n      textAlign: 'center',\n      color: 'white',\n      paddingTop: '25px'\n    }\n  }, \"Enter JDP Electrical Services\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])()(Home));\n\n//# sourceURL=webpack:///./src/pages/Home/index.js?");

/***/ })

}]);