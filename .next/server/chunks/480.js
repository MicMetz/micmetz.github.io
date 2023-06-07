"use strict";
exports.id = 480;
exports.ids = [480];
exports.modules = {

/***/ 480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const InvisiblesFeature = ({
  illustrator,
  imageURL,
  sourceURL,
  sourceTitle,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(InvisiblesFeatureContainer, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h4", {
        children: illustrator
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
        href: sourceURL,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h4", {
          children: sourceTitle
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
        children: children
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
      alt: sourceTitle,
      src: imageURL
    })]
  });
};

const InvisiblesFeatureContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "InvisiblesFeature__InvisiblesFeatureContainer",
  componentId: "zyy1n8-0"
})(["grid-column:1/4;display:grid;grid-template-columns:repeat(2,minmax(220px,1fr));grid-gap:var(--space-l);max-width:1000px;margin:var(--space-m) auto var(--space-l);justify-content:center;font-family:var(--font-body);@media (max-width:768px){grid-template-columns:repeat(1,minmax(200px,1fr));grid-gap:var(--space-xs);}h4{margin-top:0;}img{border-radius:5px;@media (max-width:768px){max-width:100%;width:500px;margin:inherit auto;}}p{margin-bottom:var(--space-xs);}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvisiblesFeature);

/***/ })

};
;