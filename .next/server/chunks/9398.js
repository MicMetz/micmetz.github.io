"use strict";
exports.id = 9398;
exports.ids = [9398];
exports.modules = {

/***/ 9398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TalkSlide)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(658);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function TalkSlide({
  imgSrc,
  children,
  video
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledSlide, {
    children: [!video && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledBasicImage, {
      src: imgSrc
    }), video && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledVideo, {
      src: imgSrc
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(TextContainer, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        children: children
      })
    })]
  });
}
const StyledSlide = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TalkSlide__StyledSlide",
  componentId: "sc-13uc1p8-0"
})(["max-width:100%;grid-column:1 / 4 !important;display:grid;grid-template-columns:5fr 4fr;margin:var(--space-l) auto;padding:0 var(--space-xs);@media (max-width:1200px){max-width:100%;grid-template-columns:1fr;grid-gap:var(--space-s);margin:var(--space-m) auto;}"]);
const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TalkSlide__TextContainer",
  componentId: "sc-13uc1p8-1"
})(["align-items:center;display:grid;p{padding:0 var(--space-m);margin:0 auto;@media (max-width:1200px){padding:0;max-width:60ch;width:100%;}}p:not(:last-child){margin-bottom:1rem;}"]);
const StyledBasicImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TalkSlide__StyledBasicImage",
  componentId: "sc-13uc1p8-2"
})(["border-radius:var(--border-radius-sm);@media (max-width:1200px){max-width:100%;width:900px;}"]);
const StyledVideo = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Video__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "TalkSlide__StyledVideo",
  componentId: "sc-13uc1p8-3"
})(["border-radius:var(--border-radius-sm);@media (max-width:1200px){max-width:100%;}"]);

/***/ })

};
;