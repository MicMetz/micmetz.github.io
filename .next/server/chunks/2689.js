"use strict";
exports.id = 2689;
exports.ids = [2689];
exports.modules = {

/***/ 2689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const PartName = ({
  partName,
  href,
  focus
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(StyledPartName, {
    children: partName
  });
};

const StyledPartName = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "MultipartIntro__StyledPartName",
  componentId: "t358bs-0"
})([""]);

const MultipartIntro = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(MultipartContainer, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FocusedPartContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        children: "Part 1"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(PartName, {
        focus: true,
        partName: "A Metaphorical Introduction"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        children: "You are here"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(PartContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        children: "Part 2"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(PartName, {
        partName: "Cultural and Linguistic Research"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(PartContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        children: "Part 3"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(PartName, {
        partName: "Lateral Thinking and Creative Play"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(PartContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        children: "Part 4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(PartName, {
        partName: "Composition, Colour, and Completion"
      })]
    })]
  });
};

const MultipartContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "MultipartIntro__MultipartContainer",
  componentId: "t358bs-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:var(--space-xs);width:100%;grid-column:1/4;max-width:900px;justify-content:center;text-align:center;transition:0.6s;margin:var(--space-xl) auto var(--space-s);"]);
const PartContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "MultipartIntro__PartContainer",
  componentId: "t358bs-2"
})(["height:140px;display:block;transition:0.6s;margin-bottom:var(--space-m);border-top:2px solid var(--color-gray-100);padding:var(--space-xs) 0;p{transition:0.6s;line-height:var(--leading-base);align-self:center;color:var(--color-gray-500);padding:var(--space-xs) 0;margin:0;}span{color:var(--color-gray-500);align-self:start;font-family:sans-serif;font-size:var(--font-size-sm);display:block;transition:0.6s;}"]);
const FocusedPartContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PartContainer).withConfig({
  displayName: "MultipartIntro__FocusedPartContainer",
  componentId: "t358bs-3"
})(["padding:var(--space-xs) 0;align-items:center;transition:0.6s;border-top:2px solid var(--color-sea-blue);p{color:var(--color-gray-900);}span{color:var(--color-sea-blue);}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipartIntro);

/***/ })

};
;