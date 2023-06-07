"use strict";
exports.id = 9591;
exports.ids = [9591];
exports.modules = {

/***/ 9591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageFrame)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["src", "alt", "width", "margin", "showalt", "sourceUrl", "sourceTitle"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function ImageFrame(_ref) {
  let {
    src,
    alt,
    width,
    margin,
    showalt,
    sourceUrl,
    sourceTitle
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    srcSet
  } = props;
  delete props.srcSet;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Container, _objectSpread(_objectSpread({
    margin: margin
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(StyledImageFrame, {
      src: src,
      srcSet: srcSet,
      alt: alt,
      width: width || "100%"
    }), showalt ? sourceUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("figcaption", {
      children: [alt, " \u2013 Source: ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
        href: sourceUrl,
        children: sourceTitle
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("figcaption", {
      children: alt
    }) : null]
  }));
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().figure.withConfig({
  displayName: "ImageFrame__Container",
  componentId: "sc-1rezquj-0"
})(["max-width:100%;grid-column:1 / 4 !important;margin:", ";text-align:center;figcaption{margin-top:var(--space-xs);font-family:var(--font-sans);font-size:var(--font-size-sm);color:var(--color-gray-600);}"], props => props.margin || "var(--space-s) auto var(--space-xl)");
const StyledImageFrame = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "ImageFrame__StyledImageFrame",
  componentId: "sc-1rezquj-1"
})(["width:", ";border-radius:var(--border-radius-base);border:1px solid var(--color-tinted-cream);box-shadow:var(--box-shadow-lg);margin-bottom:var(--space-s);"], props => props.width || "1100px");

/***/ })

};
;