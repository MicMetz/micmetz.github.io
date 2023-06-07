"use strict";
exports.id = 7123;
exports.ids = [7123];
exports.modules = {

/***/ 7123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
 // TODO
// - Make the Footnote appear on hover.
// - Add smooth hover animations




const Footnote = ({
  idName,
  children,
  isClosed
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FootnoteContainer, {
    isClosed: isClosed,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("label", {
      htmlFor: idName,
      className: "margin-toggle footnote-number"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
      type: "checkbox",
      id: idName,
      className: "margin-toggle"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      className: "footnote",
      children: children
    })]
  });
};

const FootnoteContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().aside.withConfig({
  displayName: "Footnote__FootnoteContainer",
  componentId: "f7f31u-0"
})(["display:inline;.footnote{float:right;height:1rem;overflow:visible;clear:right;margin-right:-38%;width:33%;margin-top:0;margin-bottom:0;font-size:var(--font-size-sm);opacity:90%;line-height:var(--leading-base);vertical-align:baseline;position:relative;border-left:1px solid var(--color-gray-300);padding-left:1em;a::before,a:hover::before,a{background:none;transform:none;}a span{font-size:var(--font-size-sm);}}label{cursor:pointer;}.footnote-number{counter-increment:footnote-counter;}.footnote-number:after,.footnote:before{position:relative;vertical-align:baseline;}.footnote-number:after{content:counter(footnote-counter);padding:0.15rem;font-family:var(--font-sans);font-size:1rem;color:var(--color-sea-blue);font-weight:600;line-height:0;position:relative;top:-6px;left:2px;width:24px;height:24px;border-radius:50%;background:transparent;transition:all 0.25s ease-in-out;}.footnote:before{content:counter(footnote-counter);font-size:1rem;top:-0.1rem;font-weight:600;padding-right:var(--space-2xs);color:var(--color-sea-blue);font-family:var(--font-sans);}blockquote .footnote{margin-right:-82%;min-width:59%;text-align:left;}label.footnote-number{display:inline;padding-right:var(--space-3xs);}label.margin-toggle:not(.footnote-number){display:", ";}input.margin-toggle{display:none;}.footnote,.marginnote{display:", ";}.margin-toggle:checked + .footnote{display:", ";float:", ";left:", ";clear:", ";width:", ";margin:", ";height:", ";position:", ";}@media (max-width:1420px){label.margin-toggle:not(.footnote-number){display:inline;}.footnote,.marginnote{display:none;}.margin-toggle:checked + .footnote{display:block;float:left;left:0;clear:both;width:99%;margin:1rem;height:auto;position:relative;}}"], ({
  isClosed
}) => isClosed ? "inline" : "none", ({
  isClosed
}) => isClosed ? "none" : "unset", ({
  isClosed
}) => isClosed ? "block" : "unset", ({
  isClosed
}) => isClosed ? "left" : "unset", ({
  isClosed
}) => isClosed ? "0" : "unset", ({
  isClosed
}) => isClosed ? "both" : "unset", ({
  isClosed
}) => isClosed ? "99%" : "unset", ({
  isClosed
}) => isClosed ? "1rem 0" : "unset", ({
  isClosed
}) => isClosed ? "auto" : "unset", ({
  isClosed
}) => isClosed ? "relative" : "unset");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footnote);

/***/ })

};
;