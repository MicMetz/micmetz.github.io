"use strict";
exports.id = 3773;
exports.ids = [3773];
exports.modules = {

/***/ 3773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinkCard)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function LinkCard({
  children,
  url,
  title,
  author,
  image
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(StyledLinkCard, {
    children: [image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
      src: image,
      alt: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
      href: url,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
        children: title
      })
    }), author && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      children: author
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Children, {
      children: children
    })]
  });
}
const Children = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LinkCard__Children",
  componentId: "sc-1h9uk4r-0"
})(["p{font-family:var(--font-sans);font-size:var(--font-size-sm);line-height:var(--leading-base);margin:var(--space-3xs) 0;color:var(--color-gray-600);}"]);
const StyledLinkCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LinkCard__StyledLinkCard",
  componentId: "sc-1h9uk4r-1"
})(["margin:var(--space-3xs) auto var(--space-m);box-shadow:var(--box-shadow-sm);border-radius:var(--border-radius-lg);border:1px solid var(--color-tinted-cream);justify-content:center;padding:var(--space-s) var(--space-m);grid-column:1/4 !important;display:flex;flex-direction:column;flex-shrink:1;width:100%;color:var(--color-gray-800);transition:all 0.3s ease-in-out;img{width:100%;margin-bottom:1rem;}span{font-family:var(--font-sans);font-size:calc(var(--font-size-base) * 0.9);margin:var(--space-3xs) 0;color:var(--color-gray-600);}h3{transition:all 0.3s ease-in-out;color:var(--color-gray-800);font-family:var(--font-body);margin:var(--space-3xs) 0;line-height:var(--leading-snug);font-size:calc(var(--font-size-md) * 0.85);}&:hover{box-shadow:var(--box-shadow-lg);h3{color:var(--color-bright-crimson);}}"]);

/***/ })

};
;