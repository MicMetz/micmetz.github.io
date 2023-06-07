"use strict";
exports.id = 9090;
exports.ids = [9090];
exports.modules = {

/***/ 9090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResourceBook)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // A single book, or multiple books stacked on top of each other
// To layout books in a 2 column grid, use the BookGrid component




function ResourceBook({
  url,
  title,
  author,
  image,
  small,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledBookCard, {
    small: small,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      style: {
        height: small ? "228px" : "319px",
        width: small ? "158px" : "220px",
        flexShrink: 0,
        boxShadow: "var(--box-shadow-lg)"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        width: small ? 158 : 220,
        height: small ? 228 : 319,
        alt: title,
        src: image
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Metadata, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        href: url,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
          children: title
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        children: author
      }), children && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("svg", {
          width: "40",
          height: "3",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
            width: "40",
            height: "3",
            fill: "var(--color-gray-300)"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
          children: children
        })]
      })]
    })]
  });
}
const StyledBookCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ResourceBook__StyledBookCard",
  componentId: "sc-1n9jcau-0"
})(["margin:var(--space-l) auto;border-radius:var(--border-radius-lg);display:flex;flex-direction:row;flex-shrink:1;justify-content:center;align-items:", ";gap:var(--space-l);height:content-min;cursor:pointer;img{border-radius:var(--border-radius-sm);}@media (max-width:768px){flex-direction:column;align-items:center;justify-content:center;gap:var(--space-m);height:content-min;text-align:center;}"], props => props.small ? "center" : "inherit");
const Metadata = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ResourceBook__Metadata",
  componentId: "sc-1n9jcau-1"
})(["display:flex;flex-direction:column;flex-shrink:1;width:34ch;@media (max-width:768px){width:100%;max-width:36ch;}h3,p,span{margin:0;font-family:var(--font-body);}span{color:var(--color-gray-600);}h3{font-family:var(--font-body);font-size:var(--font-size-md);margin-bottom:var(--space-3xs);color:var(--color-gray-800);transition:all 0.2s ease-in-out;line-height:var(--leading-tight);flex-shrink:1;}p{font-family:var(--font-sans);font-size:var(--font-size-sm);line-height:var(--leading-loose);color:var(--color-gray-800);flex-shrink:1;}svg{margin:var(--space-s) 0;@media (max-width:768px){margin:var(--space-s) auto;}}&:hover{h3{color:var(--color-bright-crimson);}}"]);

/***/ })

};
;