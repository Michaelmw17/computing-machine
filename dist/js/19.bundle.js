(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/components/First.js":
/*!*********************************!*\
  !*** ./src/components/First.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Services_Href__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/Href */ \"./src/components/Services/Href.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar testData = {\n  text: \"View on Google Maps\",\n  link: \"https://goo.gl/maps/hrBNba4G8a1EbgFg6\"\n};\nvar containerStyle = {\n  height: \"350px\",\n  width: '90%',\n  marginLeft: '20px',\n  marginRight: '20px',\n  marginTop: '10px',\n  maxWidth: '580px',\n  maxHeight: '530px',\n  borderRadius: '14px'\n};\nvar center = {\n  lat: -33.8097541497481,\n  lng: 151.14841320640292\n};\n\nfunction MyComponent(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isOpened = _useState2[0],\n      setOpened = _useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__[\"LoadScript\"], {\n    googleMapsApiKey: \"AIzaSyBWQPgM5WysP6GSH5Ay_Vm037aWajBpT6s\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__[\"GoogleMap\"], {\n    mapContainerStyle: containerStyle,\n    center: center,\n    zoom: 15\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__[\"Marker\"], {\n    title: \"JDP Electrical\",\n    position: center,\n    onClick: function onClick() {\n      setOpened(!isOpened);\n    }\n  }), isOpened && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__[\"OverlayView\"], {\n    position: center,\n    mapPaneName: _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__[\"OverlayView\"].OVERLAY_MOUSE_TARGET,\n    getPixelPositionOffset: function getPixelPositionOffset(width, height) {\n      return {\n        x: -(width / 2),\n        y: -(height / 330)\n      };\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      background: \"white\",\n      border: \"1px solid #ccc\",\n      padding: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, \"JDP Electrical \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, \" 17/4-6 Chaplin Dr, Lane Cove West NSW 2066\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"list-unstyled\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_Href__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    text: testData.text,\n    url: testData.link\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)));\n}\n\nvar MyFancyComponent = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(MyFancyComponent, _React$PureComponent);\n\n  var _super = _createSuper(MyFancyComponent);\n\n  function MyFancyComponent(props) {\n    var _this;\n\n    _classCallCheck(this, MyFancyComponent);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      isMarkerShown: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"delayedShowMarker\", function () {\n      setTimeout(function () {\n        _this.setState({\n          isMarkerShown: true\n        });\n      }, 3000);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleMarkerClick\", function () {\n      _this.setState({\n        isMarkerShown: false\n      });\n\n      _this.delayedShowMarker();\n    });\n\n    _this.delayedShowMarker = _this.props.componentDidMount;\n    return _this;\n  }\n\n  _createClass(MyFancyComponent, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyComponent, {\n        isMarkerShown: this.state.isMarkerShown,\n        onMarkerClick: this.handleMarkerClick\n      });\n    }\n  }]);\n\n  return MyFancyComponent;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MyFancyComponent));\n\n//# sourceURL=webpack:///./src/components/First.js?");

/***/ }),

/***/ "./src/components/Services/Href.js":
/*!*****************************************!*\
  !*** ./src/components/Services/Href.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styleLocation_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleLocation.css */ \"./src/components/Services/styleLocation.css\");\n/* harmony import */ var _styleLocation_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styleLocation_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Href = /*#__PURE__*/function (_Component) {\n  _inherits(Href, _Component);\n\n  var _super = _createSuper(Href);\n\n  function Href() {\n    _classCallCheck(this, Href);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Href, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          text = _this$props.text,\n          url = _this$props.url,\n          target = _this$props.target;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        rel: \"noopener\",\n        target: target,\n        href: url\n      }, text);\n    }\n  }]);\n\n  return Href;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n_defineProperty(Href, \"defaultProps\", {\n  target: '_blank',\n  text: '',\n  url: '#'\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Href);\n\n//# sourceURL=webpack:///./src/components/Services/Href.js?");

/***/ }),

/***/ "./src/components/Services/styleLocation.css":
/*!***************************************************!*\
  !*** ./src/components/Services/styleLocation.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Services/styleLocation.css?");

/***/ })

}]);