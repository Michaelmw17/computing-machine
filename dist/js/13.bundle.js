(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./src/common/MyListCommercial/Clist.js":
/*!**********************************************!*\
  !*** ./src/common/MyListCommercial/Clist.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PinnedSubheaderList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/esm/List/index.js\");\n/* harmony import */ var _Cstyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cstyle.css */ \"./src/common/MyListCommercial/Cstyle.css\");\n/* harmony import */ var _Cstyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Cstyle_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar words = ['Maintenance and repairs', 'Lighting and power ', 'Testing and tagging ', 'Data points  ', 'Smoke detectors', 'Emergency lighting'];\nvar items = words.map(function (word, e) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: e\n  }, word);\n});\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      width: '100%',\n      maxWidth: 360,\n      backgroundColor: 'RGB(209, 29, 50)',\n      position: 'relative',\n      maxHeight: 300,\n      color: '#FFF'\n    },\n    listSection: {\n      backgroundColor: 'RGB(209, 29, 50)'\n    },\n    ul: {\n      backgroundColor: 'RGB(209, 29, 50)',\n      padding: 0,\n      paddingRight: 50\n    }\n  };\n});\nfunction PinnedSubheaderList() {\n  var classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.root,\n    subheader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: classes.ul\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"list-unstyled\"\n  }, items)));\n}\n\n//# sourceURL=webpack:///./src/common/MyListCommercial/Clist.js?");

/***/ }),

/***/ "./src/common/MyListCommercial/Cstyle.css":
/*!************************************************!*\
  !*** ./src/common/MyListCommercial/Cstyle.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common/MyListCommercial/Cstyle.css?");

/***/ }),

/***/ "./src/common/MyListResidential/RStyle.css":
/*!*************************************************!*\
  !*** ./src/common/MyListResidential/RStyle.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common/MyListResidential/RStyle.css?");

/***/ }),

/***/ "./src/common/MyListResidential/list.js":
/*!**********************************************!*\
  !*** ./src/common/MyListResidential/list.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PinnedSubheaderList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/esm/List/index.js\");\n/* harmony import */ var _RStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RStyle.css */ \"./src/common/MyListResidential/RStyle.css\");\n/* harmony import */ var _RStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RStyle_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar words = ['Repairs & Maintenance', 'Renovations & New Builds', 'Clipsal Cbus Automation', 'Switchboard Upgrades', 'Safety Switch protection', '  Smoke Detectors', 'General Power Outlets', 'LED Lighting upgrade', 'Security & Garden Lighting', 'Ceiling Sweep Fans', 'Appliance installations & Repairs', 'TV – DATA – Communications'];\nvar items = words.map(function (word, e) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: e\n  }, word);\n});\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      width: '100%',\n      maxWidth: 360,\n      backgroundColor: 'rgb(209, 29, 50)',\n      position: 'relative',\n      maxHeight: 300,\n      color: '#FFF'\n    },\n    listSection: {\n      backgroundColor: 'rgb(209, 29, 50)'\n    },\n    ul: {\n      backgroundColor: 'rgb(209, 29, 50)',\n      padding: 0,\n      paddingRight: 20,\n      borderRadius: '15px'\n    }\n  };\n});\nfunction PinnedSubheaderList() {\n  var classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.root,\n    subheader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: classes.ul\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"list-unstyled\"\n  }, items)));\n}\n\n//# sourceURL=webpack:///./src/common/MyListResidential/list.js?");

/***/ }),

/***/ "./src/common/MyListStrata/list.js":
/*!*****************************************!*\
  !*** ./src/common/MyListStrata/list.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PinnedSubheaderList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/esm/List/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/common/MyListStrata/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar words = ['Maintenance and repairs', 'General power outlets', 'Lighting control systems', 'Main switchboards upgrades', 'Switches and circuit breakers ', 'Light and power points ', 'Appliance installations and repairs  ', 'Hot water repairs ', ' Preventative maintenance'];\nvar items = words.map(function (word, e) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: e\n  }, word);\n});\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      width: '100%',\n      maxWidth: 360,\n      backgroundColor: \"RGB(209, 29, 50)\",\n      position: 'relative',\n      maxHeight: 300,\n      color: '#FFF'\n    },\n    listSection: {\n      backgroundColor: 'RGB(209, 29, 50)'\n    },\n    ul: {\n      backgroundColor: 'RGB(209, 29, 50)',\n      padding: 0,\n      paddingRight: 30\n    }\n  };\n});\nfunction PinnedSubheaderList() {\n  var classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.root,\n    subheader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: classes.ul\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"list-unstyled\"\n  }, items)));\n}\n\n//# sourceURL=webpack:///./src/common/MyListStrata/list.js?");

/***/ }),

/***/ "./src/common/MyListStrata/style.css":
/*!*******************************************!*\
  !*** ./src/common/MyListStrata/style.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common/MyListStrata/style.css?");

/***/ }),

/***/ "./src/components/ContainerCardFlip/index.js":
/*!***************************************************!*\
  !*** ./src/components/ContainerCardFlip/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./src/components/ContainerCardFlip/styles.js\");\n\n\nvar ContainerCard = function ContainerCard(_ref) {\n  var padding = _ref.padding,\n      border = _ref.border,\n      children = _ref.children;\n  return /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_0__[\"Container\"], {\n    padding: padding,\n    border: border\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContainerCard);\n\n//# sourceURL=webpack:///./src/components/ContainerCardFlip/index.js?");

/***/ }),

/***/ "./src/components/ContainerCardFlip/styles.js":
/*!****************************************************!*\
  !*** ./src/components/ContainerCardFlip/styles.js ***!
  \****************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: relative;\\n  width: 100%;\\n  margin-right: auto;\\n  margin-left: auto;\\n  padding: \", \";\\n  overflow: hidden;\\n  border-top: \", \";\\n  @media only screen and (min-width: 1024px) {\\n    max-width: 1550px;\\n    max-height: 2550px;\\n  }\\n  @media only screen and (max-width: 768px) {\\n    max-width: 530px;\\n  }\\n  @media only screen and (max-width: 414px) {\\n    max-width: 670px;\\n    padding: \", \";\\n  }\\n \\n\"])), function (props) {\n  return props.padding ? \"2.9rem\" : \"1rem 1rem 1rem 5rem \";\n}, function (props) {\n  return props.border ? \"1px solid #CDD1D4\" : \"\";\n}, function (props) {\n  return props.padding ? \"2.9rem\" : \"0rem 0rem 1rem 0.5rem \";\n});\n\n//# sourceURL=webpack:///./src/components/ContainerCardFlip/styles.js?");

/***/ }),

/***/ "./src/components/ServicesSection/ReactCardFlipper.jsx":
/*!*************************************************************!*\
  !*** ./src/components/ServicesSection/ReactCardFlipper.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/MichaelWatt/COMPLETE ANNA/computing-machine/src/components/ServicesSection/ReactCardFlipper.jsx: Missing semicolon. (5:4)\\n\\n\\u001b[0m \\u001b[90m 3 |\\u001b[39m \\u001b[36mimport\\u001b[39m classNames \\u001b[36mfrom\\u001b[39m \\u001b[32m\\\"classnames\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 |\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 5 |\\u001b[39m type \\u001b[33mProps\\u001b[39m \\u001b[33m=\\u001b[39m { \\u001b[0m\\n\\u001b[0m \\u001b[90m   |\\u001b[39m     \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 |\\u001b[39m   width\\u001b[33m:\\u001b[39m string\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 |\\u001b[39m   height\\u001b[33m:\\u001b[39m string\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 |\\u001b[39m    behavior\\u001b[33m:\\u001b[39m string\\u001b[33m,\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/MichaelWatt/COMPLETE ANNA/computing-machine/node_modules/@babel/parser/lib/index.js:810:17)\\n    at Object.raiseWithData (/Users/MichaelWatt/COMPLETE ANNA/computing-machine/node_modules/@babel/parser/lib/index.js:803:17)\\n    at Object.raise (/Users/MichaelWatt/COMPLETE ANNA/computing-machine/node_modules/@babel/parser/lib/index.js:764:17)\\n    at Object.semicolon (/Users/MichaelWatt/COMPLETE ANNA/computing-machine/node_modules/@babel/parser/lib/index.js:9950:10)\\n    at Object.parseExpressionStatement (/Users/MichaelWatt/COMPLETE ANNA/computing-machine/node_modules/@babel/parser/lib/index.js:13143:10)\\n    at Object.parseStatementContent (/Users/MichaelWatt/COMPLETE ANNA/computing-machine/node_modules/@babel/parser/lib/index.js:12732:19)\\n    at Object.parseStatement (/Users/MichaelWatt/COMPLETE ANNA/computing-machine/node_modules/@babel/parser/lib/index.js:12596:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/MichaelWatt/COMPLETE ANNA/computing-machine/node_modules/@babel/parser/lib/index.js:13185:25)\\n    at Object.parseBlockBody (/Users/MichaelWatt/COMPLETE ANNA/computing-machine/node_modules/@babel/parser/lib/index.js:13176:10)\\n    at Object.parseProgram (/Users/MichaelWatt/COMPLETE ANNA/computing-machine/node_modules/@babel/parser/lib/index.js:12519:10)\");\n\n//# sourceURL=webpack:///./src/components/ServicesSection/ReactCardFlipper.jsx?");

/***/ }),

/***/ "./src/components/ServicesSection/Services.js":
/*!****************************************************!*\
  !*** ./src/components/ServicesSection/Services.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ReactCardFlipper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReactCardFlipper */ \"./src/components/ServicesSection/ReactCardFlipper.jsx\");\n/* harmony import */ var _ReactCardFlipper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ReactCardFlipper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/lib/index.js\");\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_MyListResidential_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/MyListResidential/list */ \"./src/common/MyListResidential/list.js\");\n/* harmony import */ var _common_MyListCommercial_Clist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/MyListCommercial/Clist */ \"./src/common/MyListCommercial/Clist.js\");\n/* harmony import */ var _common_MyListStrata_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/MyListStrata/list */ \"./src/common/MyListStrata/list.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Home */ \"./node_modules/@material-ui/icons/Home.js\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Business */ \"./node_modules/@material-ui/icons/Business.js\");\n/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_BuildSharp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/BuildSharp */ \"./node_modules/@material-ui/icons/BuildSharp.js\");\n/* harmony import */ var _material_ui_icons_BuildSharp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BuildSharp__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _ServicesStyles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ServicesStyles.css */ \"./src/components/ServicesSection/ServicesStyles.css\");\n/* harmony import */ var _ServicesStyles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ServicesStyles_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_ContainerCardFlip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ContainerCardFlip */ \"./src/components/ContainerCardFlip/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar styles = {\n  root: {},\n  container: {\n    marginRight: \"auto\",\n    marginLeft: \"auto\",\n    transition: '.5s all ease',\n    transform: 'rotateX(10deg) scale(1)',\n    perspective: '900px'\n  }\n};\n\nvar TestApp = function TestApp(_ref) {\n  var classes = _ref.classes;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContainerCardFlip__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.container\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"main\",\n    className: \"containerS\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Services-section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"inner-width-services\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n    container: true,\n    spacing: 10,\n    justify: \"flex-start\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 12,\n    md: 6,\n    lg: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReactCardFlipper__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    width: \"300px\",\n    height: \"340px\",\n    behavior: \"hover\",\n    className: classes.root,\n    innerCardClass: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Services\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pie\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"p-naming\",\n    style: {\n      fontSize: 20,\n      paddingRight: \"20px\",\n      paddingBottom: 0\n    }\n  }, \"Residential\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    style: {\n      fontSize: 230,\n      paddingTop: 0,\n      paddingLeft: 10\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      marginLeft: 80,\n      fontSize: 20,\n      color: '#FFF',\n      textTransform: 'uppercase',\n      listStyleType: 'none'\n    }\n  }, \"Residential\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_MyListResidential_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 12,\n    md: 6,\n    lg: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReactCardFlipper__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    width: \"300px\",\n    height: \"340px\",\n    behavior: \"hover\",\n    className: classes.root,\n    innerCardClass: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Services\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pie\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"p-naming\",\n    style: {\n      fontSize: 20,\n      paddingRight: 35,\n      marginTop: -5\n    }\n  }, \"Strata / Property Maintenance\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BuildSharp__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    style: {\n      fontSize: 210,\n      paddingTop: 0,\n      color: \"#FFF\",\n      paddingLeft: 45\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      marginLeft: 10,\n      fontSize: 20,\n      color: '#FFF',\n      textTransform: 'uppercase',\n      textAlign: 'center'\n    }\n  }, \"Strata / Property Maintenance\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_MyListStrata_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 12,\n    md: 12,\n    lg: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReactCardFlipper__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    width: \"300px\",\n    height: \"340px\",\n    behavior: \"hover\",\n    className: classes.root,\n    innerCardClass: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Services\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pie\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"p-naming\",\n    style: {\n      fontSize: 20,\n      paddingLeft: 0,\n      paddingBottom: 15\n    }\n  }, \"Commercial\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    style: {\n      fontSize: 220,\n      paddingTop: 50,\n      color: \"#FFF\",\n      paddingLeft: 30\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      marginLeft: 80,\n      fontSize: 20,\n      color: '#FFF',\n      textTransform: 'uppercase',\n      listStyleType: 'none'\n    }\n  }, \"Commercial\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_MyListCommercial_Clist__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))))))))))));\n};\n\nvar styling = {\n  root: {\n    display: \"block\",\n    margin: \"50px\",\n    position: \"relative\"\n  },\n  card: {\n    border: \"1px solid #ccc\",\n    borderRadius: \"29px\",\n    padding: \"10px\",\n    marginBottom: \"50px\",\n    background: ' RGB(209, 29, 50)',\n    '-webkit-box-shadow': \"0 7px 8px rgba(0, 0, 0, 0.12)\",\n    '-moz-box-shadow': \"0 7px 8px rgba(0, 0, 0, 0.12)\",\n    'box-shadow': \" 0 7px 8px rgba(0, 0, 0, 0.12)\",\n    color: \"white\"\n  }\n};\nvar StyledApp = react_jss__WEBPACK_IMPORTED_MODULE_2___default()(styling)(TestApp);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"withStyles\"])(styles)(StyledApp));\n\n//# sourceURL=webpack:///./src/components/ServicesSection/Services.js?");

/***/ }),

/***/ "./src/components/ServicesSection/ServicesStyles.css":
/*!***********************************************************!*\
  !*** ./src/components/ServicesSection/ServicesStyles.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/ServicesSection/ServicesStyles.css?");

/***/ })

}]);