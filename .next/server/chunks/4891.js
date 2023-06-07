"use strict";
exports.id = 4891;
exports.ids = [4891];
exports.modules = {

/***/ 4891:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







if (false) {}

function ScrollingImages({
  data,
  title
}) {
  const triggerDiv = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null); // autogenerate number of refs based on length of input array

  const img1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const img2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const img3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const img4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const refsArray = [img1, img2, img3, img4];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 770px)": function () {
        const timeline = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
          scrollTrigger: {
            trigger: [triggerDiv.current],
            start: "top top",
            end: "250%",
            scrub: 1,
            pin: [triggerDiv.current],
            toggleActions: "restart none none reverse"
          }
        }); // autogenerate timeline based on length of input array

        timeline.to([img1.current], {
          opacity: 1,
          duration: 0.25
        }).to([img2.current], {
          opacity: 1,
          duration: 1
        }).to([img3.current], {
          opacity: 1,
          duration: 1
        }).to([img4.current], {
          opacity: 1,
          duration: 1.5
        });
      }
    });
  }, []);
  const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "ScrollingImages__Container",
    componentId: "sc-1dyyk42-0"
  })(["grid-column:1/4 !important;margin:var(--space-16) 0;position:relative;top:0;display:block;zIndex:4;"]);
  const TriggerDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "ScrollingImages__TriggerDiv",
    componentId: "sc-1dyyk42-1"
  })(["display:flex;flex-direction:column;margin:0 auto var(--space-m);padding:0 1rem;height:960px;@media (max-width:1200px){height:580px;}@media (max-width:1400px){height:820px;}@media (max-width:800px){height:520px;}"]);
  const Img = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
    displayName: "ScrollingImages__Img",
    componentId: "sc-1dyyk42-2"
  })(["width:1300px;max-width:80%;max-height:auto;border:1px solid var(--color-gray-100);border-radius:0.5rem;box-shadow:var(--box-shadow-sm);margin:var(--space-m) auto;position:absolute;top:64px;left:0;right:0;opacity:", ";z-index:", ";display:", ";@media (max-width:770px){display:block;position:static;top:0;max-width:100%;}"], ({
    childImage
  }) => childImage ? 0 : 1, props => props.zIndex, ({
    topImage
  }) => topImage ? "inline-block" : "");
  const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
    displayName: "ScrollingImages__Title",
    componentId: "sc-1dyyk42-3"
  })(["display:block;font-family:var(--font-sans);font-size:var(--font-size-sm);color:var(--color-gray-800);font-weight:400;text-align:center;margin:var(--space-l) auto;@media (max-width:770px){margin:0 auto;}"]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Container, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(TriggerDiv, {
      ref: triggerDiv,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Title, {
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Img, {
        id: "image",
        topImage: true,
        alt: data[0].alt,
        src: data[0].src
      }), data.map((img, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Img, {
        childImage: true,
        zIndex: i + 5,
        ref: refsArray[i],
        alt: img.alt,
        src: img.src
      }))]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollingImages);

/***/ })

};
;