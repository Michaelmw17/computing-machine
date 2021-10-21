(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@material-ui/icons/BuildSharp.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/BuildSharp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M12.09 2.91C10.08.9 7.07.49 4.65 1.67l4.34 4.34-3 3-4.34-4.34C.48 7.1.89 10.09 2.9 12.1c1.86 1.86 4.58 2.35 6.89 1.48l9.82 9.82 3.71-3.71-9.78-9.79c.92-2.34.44-5.1-1.45-6.99z\"\n}), 'BuildSharp');\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/BuildSharp.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/Business.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Business.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar React = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(\"path\", {\n  d: \"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z\"\n}), 'Business');\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/Business.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PinnedSubheaderList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/esm/List/index.js\");\n/* harmony import */ var _RStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RStyle.css */ \"./src/common/MyListResidential/RStyle.css\");\n/* harmony import */ var _RStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RStyle_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar words = ['Repairs & Maintenance', 'Renovations & New Builds', 'Clipsal Cbus Automation', 'Switchboard Upgrades', 'Safety Switch protection', '  Smoke Detectors', 'General Power Outlets', 'LED Lighting upgrade', 'Security & Garden Lighting', 'Ceiling Sweep Fans', 'Appliance installations & Repairs', 'TV – DATA – Communications'];\nvar items = words.map(function (word, e) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: e\n  }, word);\n});\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      width: '100%',\n      maxWidth: 360,\n      backgroundColor: 'rgb(209, 29, 50)',\n      position: 'relative',\n      maxHeight: 266,\n      color: '#FFF'\n    },\n    listSection: {\n      backgroundColor: 'rgb(209, 29, 50)'\n    },\n    ul: {\n      backgroundColor: 'rgb(209, 29, 50)',\n      padding: 0,\n      paddingRight: 25,\n      borderRadius: '15px'\n    }\n  };\n});\nfunction PinnedSubheaderList() {\n  var classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.root,\n    subheader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: classes.ul\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"list-unstyled\"\n  }, items)));\n}\n\n//# sourceURL=webpack:///./src/common/MyListResidential/list.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: relative;\\n  width: 100%;\\n  margin-right: auto;\\n  margin-left: auto;\\n  padding: \", \";\\n  overflow: hidden;\\n  border-top: \", \";\\n  @media only screen and (min-width: 1024px) {\\n    max-width: 1025px;\\n    max-height: 800px;\\n  }\\n  @media only screen and (max-width: 958px) {\\n    max-width: 340px;\\n    padding: \", \";\\n  }\\n  @media only screen and (max-width: 414px) {\\n    max-width: 340px;\\n    width: 328px;\\n    padding: \", \";\\n  }\\n\"])), function (props) {\n  return props.padding ? \"2.9rem\" : \"1rem 1rem 1rem 3rem \";\n}, function (props) {\n  return props.border ? \"1px solid #CDD1D4\" : \"\";\n}, function (props) {\n  return props.padding ? \"2.9rem\" : \"0rem 1.5rem 1rem 1.5rem\";\n}, function (props) {\n  return props.padding ? \"2.9rem\" : \"0rem 1.5rem 1rem 1.5rem\";\n});\n\n//# sourceURL=webpack:///./src/components/ContainerCardFlip/styles.js?");

/***/ }),

/***/ "./src/components/FlippingCards/index.js":
/*!***********************************************!*\
  !*** ./src/components/FlippingCards/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_MyListResidential_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/MyListResidential/list */ \"./src/common/MyListResidential/list.js\");\n/* harmony import */ var _common_MyListCommercial_Clist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/MyListCommercial/Clist */ \"./src/common/MyListCommercial/Clist.js\");\n/* harmony import */ var _common_MyListStrata_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/MyListStrata/list */ \"./src/common/MyListStrata/list.js\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Home */ \"./node_modules/@material-ui/icons/Home.js\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Business */ \"./node_modules/@material-ui/icons/Business.js\");\n/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_BuildSharp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/BuildSharp */ \"./node_modules/@material-ui/icons/BuildSharp.js\");\n/* harmony import */ var _material_ui_icons_BuildSharp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BuildSharp__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _components_ContainerCardFlip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ContainerCardFlip */ \"./src/components/ContainerCardFlip/index.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.css */ \"./src/components/FlippingCards/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar FlipperCards = function FlipperCards() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContainerCardFlip__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"ContainerFlipper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"Grid\"], {\n    container: true,\n    spacing: 2,\n    justifycontent: \"flex-start\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 12,\n    md: 6,\n    lg: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[\"Row\"], {\n    justify: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-front\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"Title\"\n  }, \"Residential\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    style: {\n      fontSize: 230\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-back\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"Title-Two\"\n  }, \"Residential\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"social-icons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_MyListResidential_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 12,\n    md: 6,\n    lg: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[\"Row\"], {\n    justify: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-front\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"Title-Two\"\n  }, \"Strata / Property Maintenance\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BuildSharp__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    style: {\n      fontSize: 185,\n      padding: '35px 0 0'\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-back\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"Title-Two\"\n  }, \"Strata / Property Maintenance\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"social-icons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_MyListStrata_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 12,\n    md: 12,\n    lg: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[\"Row\"], {\n    justify: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-front\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"Title\"\n  }, \"Commercial\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    style: {\n      fontSize: 200\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-back\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"Title-Two\"\n  }, \"Commercial\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"social-icons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_MyListCommercial_Clist__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlipperCards);\n\n//# sourceURL=webpack:///./src/components/FlippingCards/index.js?");

/***/ }),

/***/ "./src/components/FlippingCards/styles.css":
/*!*************************************************!*\
  !*** ./src/components/FlippingCards/styles.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/FlippingCards/styles.css?");

/***/ })

}]);