"use strict";
exports.id = 5588;
exports.ids = [5588];
exports.modules = {

/***/ 5588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FullWidthSection)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function FullWidthSection({
  children,
  margin,
  width,
  background
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Container, {
    margin: margin,
    width: width,
    background: background,
    children: children
  });
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "FullWidthSection__Container",
  componentId: "gb7rhz-0"
})(["width:100%;max-width:", ";z-index:0;grid-column:1 / 4 !important;margin:", ";background:", ";display:flex;flex-direction:column;align-items:center;"], props => props.width || "1000vw", props => props.margin || "var(--space-2xs) auto var(--space-m)", props => props.background || "inherit");

/***/ })

};
;