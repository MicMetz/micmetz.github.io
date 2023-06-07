"use strict";
exports.id = 7304;
exports.ids = [7304];
exports.modules = {

/***/ 7304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const TweenBlueRedBox = () => {
  const boxRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo([boxRef.current], {
      background: "#D93654"
    }, {
      scrollTrigger: {
        trigger: [boxRef.current],
        start: "top 70%",
        end: "bottom 15%",
        scrub: true
      },
      background: "#93D0D9"
    });
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    ref: boxRef,
    style: {
      width: "100px",
      height: "100px",
      margin: "2rem auto 0",
      borderRadius: "4px"
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TweenBlueRedBox);

/***/ })

};
;