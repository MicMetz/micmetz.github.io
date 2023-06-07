"use strict";
exports.id = 4571;
exports.ids = [4571];
exports.modules = {

/***/ 4571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1407);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_breakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3056);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








if (false) {}

function GsapScroller() {
  const pinDiv = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const img2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const img3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const img4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const timeline = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
      scrollTrigger: {
        trigger: [pinDiv.current],
        start: "top top",
        end: "+=800px",
        scrub: 1
      }
    });
    timeline.to([img2.current], {
      opacity: 1
    }).to([img3.current], {
      opacity: 1
    }).to([img4.current], {
      opacity: 1
    });
  }, []);
  const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "GsapScroller__Container",
    componentId: "sc-1m0srw8-0"
  })(["height:1800px;margin:0 0 var(--space-80);position:static;display:block;@media ", "{height:auto;margin-bottom:0;}"], _constants_breakpoints__WEBPACK_IMPORTED_MODULE_4__/* .breakpoints.mediaSM */ .A.mediaSM);
  const TriggerDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "GsapScroller__TriggerDiv",
    componentId: "sc-1m0srw8-1"
  })(["position:sticky;display:flex;flex-direction:column;margin:0 auto;top:0;height:auto;margin-bottom:600px;@media ", "{position:static;margin-bottom:0;}"], _constants_breakpoints__WEBPACK_IMPORTED_MODULE_4__/* .breakpoints.mediaSM */ .A.mediaSM);
  const Img = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
    displayName: "GsapScroller__Img",
    componentId: "sc-1m0srw8-2"
  })(["width:100%;max-width:580px;margin:0.4rem auto;position:absolute;left:0;right:0;top:320px;opacity:", ";z-index:", ";display:", ";@media ", "{display:none;position:", ";top:", ";margin:", ";}"], ({
    childImage
  }) => childImage ? 0 : 1, props => props.zIndex, ({
    topImage
  }) => topImage ? "inline-block" : "", _constants_breakpoints__WEBPACK_IMPORTED_MODULE_4__/* .breakpoints.mediaSM */ .A.mediaSM, ({
    topImage
  }) => topImage ? "relative" : "", ({
    topImage
  }) => topImage ? "0" : "320px", ({
    topImage
  }) => topImage ? "0" : "0.4em auto");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Container, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(TriggerDiv, {
      ref: pinDiv,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
          children: "Greensock in Plain English"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: "Greensock is a JavaScript library that changes DOM nodes directly. Once our browser has read the HTML document of a website, it transforms it into a set of DOM nodes - all our usual div's, paragraphs, and images. Greensock then manipulates those nodes to create our animations."
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Img, {
        topImage: true,
        alt: "Greensock animation changes DOM nodes",
        src: "https://res.cloudinary.com/dg3gyk0gu/image/upload/c_scale,f_auto,q_auto:good,w_1200/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM.jpg"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Img, {
        childImage: true,
        zIndex: 2,
        ref: img2,
        alt: "Greensock animation changes DOM nodes",
        src: "https://res.cloudinary.com/dg3gyk0gu/image/upload/c_scale,f_auto,q_auto:good,w_1200/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-2.jpg"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Img, {
        childImage: true,
        zIndex: 3,
        ref: img3,
        alt: "Greensock animation changes DOM nodes",
        src: "https://res.cloudinary.com/dg3gyk0gu/image/upload/c_scale,f_auto,q_auto:good,w_1200/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-3.jpg"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Img, {
        childImage: true,
        zIndex: 4,
        ref: img4,
        alt: "Greensock animation changes DOM nodes",
        src: "https://res.cloudinary.com/dg3gyk0gu/image/upload/c_scale,f_auto,q_auto:good,w_1200/v1599595798/maggieappleton.com/notes/gsap/GSAP-DOM-4.jpg"
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GsapScroller);

/***/ })

};
;