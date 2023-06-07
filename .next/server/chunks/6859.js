"use strict";
exports.id = 6859;
exports.ids = [6859];
exports.modules = {

/***/ 109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NextImage)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function NextImage({
  width,
  height,
  src,
  alt,
  margin,
  props,
  showalt,
  sourceUrl,
  sourceTitle
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Container, _objectSpread(_objectSpread({
    width: width,
    margin: margin
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledImage, {
      width: width,
      height: height,
      alt: alt,
      src: src
    }), showalt ? sourceUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("figcaption", {
      children: [alt, " \u2013 Source: ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        href: sourceUrl,
        children: sourceTitle
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("figcaption", {
      children: alt
    }) : null]
  }));
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "NextImage__Container",
  componentId: "sc-1ybkm5b-0"
})(["margin:", ";width:", ";max-width:100%;text-align:center;figcaption{font-family:var(--font-sans);max-width:100%;font-size:var(--font-size-sm);color:var(--color-gray-600);line-height:1.5;width:", ";margin-top:var(--space-xs);}"], props => props.margin || "1rem 0 2.5rem", props => props.width, props => props.width || "100%");
const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({
  displayName: "NextImage__StyledImage",
  componentId: "sc-1ybkm5b-1"
})(["border-radius:var(--border-radius-sm);margin:1rem auto 2rem;max-width:100%;"]);

/***/ })

};
;