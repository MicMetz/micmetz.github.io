"use strict";
exports.id = 1016;
exports.ids = [1016];
exports.modules = {

/***/ 1016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageLink)
/* harmony export */ });
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9958);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MISC_Tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8860);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__]);
_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ImageLink({
  href,
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_MISC_Tooltip_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledExternalUrl, {
      href: href,
      children: [href, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__.ArrowTopRightOnSquareIcon, {
        width: "18",
        height: "18",
        style: {
          position: "relative",
          top: "3px"
        }
      })]
    }),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StyledContainer, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
        href: href,
        children: children
      })
    })
  });
}
const StyledExternalUrl = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
  displayName: "ImageLink__StyledExternalUrl",
  componentId: "sc-13onsps-0"
})(["color:var(--color-gray-600);transition:color 0.2s ease-in-out;text-align:center;&:hover{color:var(--color-bright-crimson);}"]);
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ImageLink__StyledContainer",
  componentId: "sc-13onsps-1"
})(["display:inline-block;align-items:center;justify-content:center;position:relative;left:0px;top:0px;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;