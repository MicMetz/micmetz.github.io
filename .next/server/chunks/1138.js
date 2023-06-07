"use strict";
exports.id = 1138;
exports.ids = [1138];
exports.modules = {

/***/ 1138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReferencesLink)
/* harmony export */ });
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9958);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__]);
_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ReferencesLink({
  title,
  href,
  author
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ReferenceLinkContainer, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ForwardHoverLink, {
      href: href,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h4", {
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__.ArrowRightIcon, {
        width: "16",
        height: "16"
      })]
    }), author && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      className: "author",
      children: author
    })]
  });
}
const ForwardHoverLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
  displayName: "ReferencesLink__ForwardHoverLink",
  componentId: "sc-11oq3q-0"
})(["display:inline-block;align-items:center;justify-items:center;cursor:pointer;h4{display:inline-block;transition:all 0.3s cubic-bezier(0.2,1,0.8,1);color:var(--color-gray-800);}svg{position:relative;top:2.5px;left:6px;transition:all 0.3s cubic-bezier(0.2,1,0.8,1);color:var(--color-gray-300);}&:hover{svg{color:var(--color-sea-blue);left:9px;}h4{color:var(--color-bright-crimson);}"]);
const ReferenceLinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ReferencesLink__ReferenceLinkContainer",
  componentId: "sc-11oq3q-1"
})(["margin-bottom:var(--space-2xs);transition:all 1s cubic-bezier(0.2,1,0.8,1);h4,span{font-size:var(--font-size-sm);margin:0;}span.author{display:block;margin:0;font-family:var(--font-sans);color:var(--color-gray-500);}"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;