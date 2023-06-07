"use strict";
exports.id = 8921;
exports.ids = [8921];
exports.modules = {

/***/ 8921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleCard)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SimpleCard({
  children,
  alignLeft,
  subtle,
  padding,
  margin,
  props
}) {
  if (subtle) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SubtleCard, _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }));
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(StyledCard, _objectSpread(_objectSpread({
      padding: padding,
      margin: margin,
      alignLeft: alignLeft
    }, props), {}, {
      children: children
    }));
  }
}
const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SimpleCard__StyledCard",
  componentId: "teb9nq-0"
})(["margin:", ";box-shadow:var(--box-shadow-lg);border-radius:var(--border-radius-base);border:1px solid var(--color-tinted-cream);display:flex;flex-direction:column;align-items:", ";justify-content:center;text-align:", ";padding:", ";grid-column:1/4 !important;max-width:848px;width:100%;h1,h2,h3,h4,h5,p,ol,ul .tweet{margin:var(--space-2xs) 0;}"], props => props.margin ? props.margin : "var(--space-3xs) auto var(--space-m)", props => props.alignLeft ? "" : "center", props => props.alignLeft ? "" : "center", props => props.padding ? props.padding : "var(--space-m) var(--space-l)");
const SubtleCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StyledCard).withConfig({
  displayName: "SimpleCard__SubtleCard",
  componentId: "teb9nq-1"
})(["margin:0 auto var(--space-s);box-shadow:var(--box-shadow-sm);"]);

/***/ })

};
;