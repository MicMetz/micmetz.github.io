"use strict";
exports.id = 8290;
exports.ids = [8290];
exports.modules = {

/***/ 3056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ breakpoints)
/* harmony export */ });
const breakpoints = {
  mediaSM: `screen and (max-width: 768px)`,
  mediaMD: `screen and (min-width: 768px) and (max-width: 992px)`,
  mediaLG: `screen and (min-width: 992px) and (max-width: 1200px)`,
  mediaXL: `screen and (min-width: 1200px)`
};

/***/ }),

/***/ 8290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gn": () => (/* binding */ Title4),
/* harmony export */   "I6": () => (/* binding */ SmallCaps),
/* harmony export */   "M$": () => (/* binding */ SectionHeader),
/* harmony export */   "Rn": () => (/* binding */ Title2),
/* harmony export */   "fi": () => (/* binding */ Subheader),
/* harmony export */   "j3": () => (/* binding */ SmallTitle2),
/* harmony export */   "lb": () => (/* binding */ Subtext),
/* harmony export */   "wo": () => (/* binding */ Title1),
/* harmony export */   "y$": () => (/* binding */ Title3)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3056);



const SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h3.withConfig({
  displayName: "StyledTypography__SectionHeader",
  componentId: "or1hh4-0"
})(["font-family:var(--font-sans);font-size:var(--font-size-base);font-weight:600;color:var(--color-gray-800);display:flex;align-items:center;margin-bottom:var(--space-3xs);svg{transition:color 0.3s ease-in-out,margin-left 0.2s ease-in-out;position:relative;top:0px;margin-left:var(--space-3xs);}&:hover{transition:color 0.3s ease-in-out,margin-left 0.2s ease-in-out;color:var(--color-bright-crimson);cursor:pointer;svg{margin-left:var(--space-2xs);color:var(--color-sea-blue);}}"]);
const Subheader = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "StyledTypography__Subheader",
  componentId: "or1hh4-1"
})(["font-family:var(--font-sans);font-size:var(--font-size-base);font-weight:300;color:var(--color-gray-800);margin-bottom:var(--space-m);"]);
const Title1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.h1).withConfig({
  displayName: "StyledTypography__Title1",
  componentId: "or1hh4-2"
})(["font-size:var(--font-size-3xl);font-family:var(--font-serif);line-height:var(--leading-tighter);font-weight:", ";margin-bottom:var(--space-s);max-width:1200px;@media ", "{font-size:var(--font-size-2xl);max-width:100%;margin-bottom:var(--space-xs);}"], props => props.fontWeight || "normal", _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.mediaSM */ .A.mediaSM);
const Title2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.h2).withConfig({
  displayName: "StyledTypography__Title2",
  componentId: "or1hh4-3"
})(["font-size:calc(var(--font-size-xl) / 1.2);font-family:var(--font-serif);color:var(--color-gray-800);font-weight:100;line-height:var(--leading-tight);margin:var(--space-xs) 0 var(--space-2xs);transition:all 0.3s ease-in-out;@media ", "{font-size:var(--font-size-lg);}"], _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.mediaSM */ .A.mediaSM);
const SmallTitle2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.h2).withConfig({
  displayName: "StyledTypography__SmallTitle2",
  componentId: "or1hh4-4"
})(["font-family:var(--font-sans);font-size:var(--font-size-md);color:var(--color-gray-800);font-weight:300;line-height:var(--leading-loose);"]);
const Title3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.h3).withConfig({
  displayName: "StyledTypography__Title3",
  componentId: "or1hh4-5"
})(["font-size:var(--font-size-lg);font-family:var(--font-sans);color:var(--color-gray-800);line-height:var(--leading-tight);"]);
const Title4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.h4).withConfig({
  displayName: "StyledTypography__Title4",
  componentId: "or1hh4-6"
})(["font-size:var(--font-size-md);font-family:var(--font-sans);color:var(--color-gray-800);font-weight:300;line-height:var(--leading-tight);"]);
const SmallCaps = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "StyledTypography__SmallCaps",
  componentId: "or1hh4-7"
})(["font-size:var(--font-size-xs);font-family:var(--font-sans);font-weight:700;color:var(--color-black);text-transform:uppercase;letter-spacing:0.06rem;"]);
const Subtext = styled_components__WEBPACK_IMPORTED_MODULE_1___default().aside.withConfig({
  displayName: "StyledTypography__Subtext",
  componentId: "or1hh4-8"
})(["font-size:var(--font-size-sm);font-family:var(--font-sans);text-align:center;color:var(--color-gray-600);margin-bottom:var(--space-m);"]);

/***/ })

};
;