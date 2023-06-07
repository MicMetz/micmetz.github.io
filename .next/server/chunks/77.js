"use strict";
exports.id = 77;
exports.ids = [77];
exports.modules = {

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TwoColumn)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3056);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function TwoColumn({
  children,
  maxWidth,
  alignItems,
  gridTemplateColumns,
  gridTemplateColumnsMobile,
  gridGap,
  verticalGridGap,
  justifyItems,
  margin
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(TwoColumnContainer, {
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateColumnsMobile: gridTemplateColumnsMobile,
    alignItems: alignItems,
    maxWidth: maxWidth,
    gridGap: gridGap,
    verticalGridGap: verticalGridGap,
    justifyItems: justifyItems,
    margin: margin,
    children: children
  });
}
const TwoColumnContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TwoColumn__TwoColumnContainer",
  componentId: "sc-13y7hc4-0"
})(["width:100%;grid-column:1 / 4 !important;max-width:", ";margin:", ";display:grid;justify-items:", ";grid-template-columns:", ";grid-gap:", ";align-items:", ";padding:0 var(--space-3xs);@media ", "{align-items:start;grid-gap:", ";justify-items:center;grid-template-columns:", ";}div,img,figure{grid-column:auto !important;margin:0 auto;border-radius:var(--border-radius-base);}img{margin:var(--space-s) auto 0;}"], props => props.maxWidth || "1400px", props => props.margin || "var(--space-s) auto var(--space-l)", props => props.justifyItems || "center", props => props.gridTemplateColumns || "repeat(2, minmax(280px, 1fr))", props => props.gridGap || "var(--space-xs)", props => props.alignItems || "center", _constants_breakpoints__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.mediaSM */ .A.mediaSM, props => props.verticalGridGap || "var(--space-m)", props => props.gridTemplateColumnsMobile || "1fr");

/***/ })

};
;