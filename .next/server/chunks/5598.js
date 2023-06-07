"use strict";
exports.id = 5598;
exports.ids = [5598];
exports.modules = {

/***/ 5598:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2706);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_0__]);
_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import { Disclosure } from '@headlessui/react'







function Accordion({
  header,
  children
}) {
  const {
    0: panelOpen,
    1: setpanelOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(AccordionButton, {
      panelOpen: panelOpen,
      "aria-label": "open disclosure",
      onClick: () => {
        setpanelOpen(!panelOpen);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "header",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_0__.PlusCircleIcon, {
          width: "22",
          height: "22",
          stroke: "var(--color-sea-blue)"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          children: header
        })]
      }), panelOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "more",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          children: "Show less"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_0__.ChevronUpIcon, {
          width: "20",
          height: "20",
          stroke: "var(--color-sea-blue)"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "more",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          children: "Read more"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_0__.ChevronDownIcon, {
          width: "20",
          height: "20",
          stroke: "var(--color-sea-blue)"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
      children: panelOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(AccordionPanel, {
        initial: {
          opacity: 0,
          height: "0px"
        },
        animate: {
          opacity: 1,
          height: "auto",
          transition: {
            duration: 0.3,
            ease: "easeInOut"
          }
        },
        exit: {
          opacity: 0,
          height: "0px",
          transition: {
            duration: 0.3,
            ease: "easeInOut"
          }
        },
        children: children
      })
    })]
  });
}

const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Accordion__Container",
  componentId: "sc-16kzlh-0"
})(["width:100%;margin:0rem 0 3rem;box-shadow:var(--box-shadow-sm);"]);
const AccordionButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "Accordion__AccordionButton",
  componentId: "sc-16kzlh-1"
})(["display:block;width:100%;display:flex;justify-content:space-between;align-items:center;border-radius:", ";transition:all 0.5 ease-in;background:#f0f9f8;border:1px solid #ade3e3;border-left:", ";padding:var(--space-16) var(--space-24);color:var(--color-dark-sea-blue);div.header{color:var(--color-dark-sea-blue);margin-bottom:0;flex-shrink:0;display:flex;flex-direction:row;align-items:center;grid-gap:var(--space-8);font-size:calc(var(--font-size-base) / 1.25);span{font-family:var(--font-sans);padding-bottom:2px;}}div.more{display:flex;flex-direction:row;align-items:center;transition:all 0.3 ease-in;grid-gap:var(--space-8);span{font-family:var(--font-sans);font-size:calc(var(--font-size-xs) / 1.25);line-height:var(--leading-loose);text-transform:uppercase;letter-spacing:0.05rem;color:var(--color-medium-sea-blue);}}&:hover{cursor:pointer;background:#dbf3f3;}"], props => props.panelOpen ? "8px 8px 0 0" : "6px", props => props.panelOpen ? "6px solid #ade3e3" : "6px solid var(--color-sea-blue)");
const AccordionPanel = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "Accordion__AccordionPanel",
  componentId: "sc-16kzlh-2"
})(["padding:var(--space-24) var(--space-48) var(--space-32) 3.75rem;border-radius:0 0 8px 8px;background:#fff;border:1px solid #b8e5e8;border-top:none;box-shadow:var(--box-shadow-lg);color:var(--color-gray-800);p,ol,ul,code,pre{margin-bottom:1rem;line-height:var(--leading-loose);font-weight:400;font-size:calc(var(--font-size-base) / 1.25);}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;