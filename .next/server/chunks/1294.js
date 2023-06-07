"use strict";
exports.id = 1294;
exports.ids = [1294];
exports.modules = {

/***/ 1294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockquoteCitation)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function BlockquoteCitation({
  children,
  author,
  title,
  url
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("figure", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Blockquote, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
        children: children
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("figcaption", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Cite, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
            children: [author, " \u2013"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
            href: url,
            children: title
          })]
        })
      })]
    })
  });
}
const Cite = styled_components__WEBPACK_IMPORTED_MODULE_0___default().cite.withConfig({
  displayName: "BlockquoteCitation__Cite",
  componentId: "sc-1jc12hk-0"
})(["font-size:var(--font-size-xs);color:var(--color-gray-600);font-family:var(--font-sans);font-weight:400;letter-spacing:0.01em;margin:0 auto;text-align:center;font-style:normal;max-width:300px;"]);
const Blockquote = styled_components__WEBPACK_IMPORTED_MODULE_0___default().blockquote.withConfig({
  displayName: "BlockquoteCitation__Blockquote",
  componentId: "sc-1jc12hk-1"
})(["p{font-size:var(--font-size-m);line-height:1.25;}& > p{margin:var(--space-m) auto var(--space-s) !important;}&::after{content:\"\";display:block;margin:var(--space-s) auto 0 !important;width:3rem;border-top:2px solid rgba(0,0,0,0.1);}"]);

/***/ })

};
;