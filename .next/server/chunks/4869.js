"use strict";
exports.id = 4869;
exports.ids = [4869];
exports.modules = {

/***/ 4869:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TooltipLink)
/* harmony export */ });
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9958);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MISC_Tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8860);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__]);
_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function TooltipLink({
  href,
  children,
  noStyling
}) {
  if (href.startsWith("http")) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ExternalLink, {
      href: href,
      noStyling: noStyling,
      children: children
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(InternalLink, {
    href: href,
    noStyling: noStyling,
    children: children
  });
}

function InternalLink({
  href,
  children,
  noStyling
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_MISC_Tooltip_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    maxWidth: 420,
    content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StyledExternalUrl, {
      href: href,
      children: href
    }),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StyledContainer, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StyledLink, {
        internal: true,
        noStyling: noStyling,
        href: href,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          children: children
        })
      })
    })
  });
}

function ExternalLink({
  href,
  children,
  noStyling
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_MISC_Tooltip_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    maxWidth: 420,
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
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StyledLink, {
        noStyling: noStyling,
        href: href,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          children: children
        })
      })
    })
  });
}

const StyledExternalUrl = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
  displayName: "TooltipLink__StyledExternalUrl",
  componentId: "aca6oi-0"
})(["color:var(--color-gray-600);transition:color 0.2s ease-in-out;text-align:center;word-break:break-all;max-width:420px;svg{margin:0 !important;}&:hover{color:var(--color-bright-crimson);}"]);
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "TooltipLink__StyledContainer",
  componentId: "aca6oi-1"
})(["display:inline-block;align-items:center;justify-content:center;position:relative;left:0px;top:0px;"]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
  displayName: "TooltipLink__StyledLink",
  componentId: "aca6oi-2"
})(["cursor:pointer;position:relative;white-space:nowrap;outline:none;word-break:break-all;&:focus{outline:2px solid darkblue;border-radius:2px;}&::before{@media (min-width:550px){content:\"\";display:", ";transform-origin:50% 100%;background:var(--color-gray-300);transition:clip-path 0.3s,transform 0.3s cubic-bezier(0.2,1,0.8,1);position:absolute;width:100%;height:1px;top:105%;left:0;pointer-events:none;clip-path:polygon( 0% 0%,0% 100%,50% 100%,50% 0,50% 0,50% 100%,50% 100%,0 100%,100% 100%,100% 0% );}}&:hover::before{@media (min-width:550px){display:", ";transform:translate3d(0,3px,0) scale3d(1,2,1);background:", ";clip-path:polygon( 0% 0%,0% 100%,50% 100%,50% 0,50% 0,50% 100%,50% 100%,0 100%,100% 100%,100% 0% );}}span{display:inline-block;white-space:normal;transition:all 0.5s cubic-bezier(0.2,1,0.8,1);word-break:break-all;color:", ";text-decoration:", ";@media (min-width:550px){text-decoration:none;}}&:hover span{transform:translate3d(0,-1px,0);color:", ";}"], props => props.noStyling ? "none" : "inline-block", props => props.noStyling ? "none" : "inline-block", props => props.internal ? "var(--color-bright-crimson)" : "var(--color-sea-blue)", props => props.internal ? "var(--color-medium-sea-blue)" : "var(--color-bright-crimson)", props => props.noStyling ? "none" : "underline", props => props.internal ? "var(--color-dark-sea-blue)" : "var(--color-crimson)");
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;