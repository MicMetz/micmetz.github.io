"use strict";
exports.id = 6826;
exports.ids = [6826];
exports.modules = {

/***/ 6826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponsiveImage)
/* harmony export */ });
/* harmony import */ var _BasicImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7546);
/* harmony import */ var _ImageFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9591);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function ResponsiveImage(props) {
  if (!props.src) {
    const message = "You need to pass a src attribute to a ResponsiveImage component";
    console.error(message);
    throw new Error(message); // Remove this if it gets annoying
  }

  let srcSet;
  const srcParts = props.src.split("/");

  if (srcParts[1] === "images" && srcParts[2] === "posts") {
    const postName = srcParts[3];
    const imageName = srcParts[4].split(".").slice(0, -1).join(".");
    const pathPrefix = "/images/posts";
    const widths = [440, 800, 1100, 1300, 1800];
    srcSet = widths.map(width => {
      const src = `${pathPrefix}/${postName}/${imageName}-${width}.jpg ${width}w`;
      return src;
    }).join(", ");
  }

  if (props.framed) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ImageFrame__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({
      srcSet: srcSet
    }, props));
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_BasicImage__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread({
    srcSet: srcSet
  }, props));
}

/***/ })

};
;