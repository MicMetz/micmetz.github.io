"use strict";
exports.id = 1270;
exports.ids = [1270];
exports.modules = {

/***/ 1270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThreeColumn)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3056);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function ThreeColumn({
  children,
  maxWidth,
  gridGap,
  margin
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ThreeColumnContainer, {
    margin: margin,
    gridGap: gridGap,
    maxWidth: maxWidth,
    children: children
  });
}
const ThreeColumnContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ThreeColumn__ThreeColumnContainer",
  componentId: "drdpxs-0"
})(["width:100%;grid-column:1 / 4 !important;max-width:", ";margin:", ";display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:", ";justify-content:center;@media ", "{grid-template-columns:1fr 1fr;}@media ", "{grid-template-columns:1fr;}div,img,figure{grid-column:auto !important;}"], props => props.maxWidth || "1400px", props => props.margin || "var(--space-s) auto var(--space-l)", props => props.gridGap || "var(--space-s)", _constants_breakpoints__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.mediaMD */ .A.mediaMD, _constants_breakpoints__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.mediaSM */ .A.mediaSM);

/***/ })

};
;