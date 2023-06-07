"use strict";
exports.id = 1189;
exports.ids = [1189];
exports.modules = {

/***/ 1189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeBlock)
/* harmony export */ });
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9123);
/* harmony import */ var prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import useClipboard from "react-use-clipboard";
// import Tippy from "@tippyjs/react";


function CodeBlock({
  children
}) {
  const language = children.props.className.replace(/language-/, "");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((prism_react_renderer__WEBPACK_IMPORTED_MODULE_0___default()), _objectSpread(_objectSpread({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_0__.defaultProps), {}, {
    theme: (prism_react_renderer_themes_nightOwl__WEBPACK_IMPORTED_MODULE_1___default()),
    code: children.props.children.trim(),
    language: language,
    children: ({
      className,
      style,
      tokens,
      getLineProps,
      getTokenProps
    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledCodeWrapper, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledCodeBlock, {
        className: className,
        style: style,
        children: tokens.map((line, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", _objectSpread(_objectSpread({}, getLineProps({
          line,
          key: i
        })), {}, {
          children: line.map((token, key) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", _objectSpread({}, getTokenProps({
            token,
            key
          }))))
        })))
      })
    })
  }));
}
const StyledCodeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "CodeBlock__StyledCodeWrapper",
  componentId: "rir7xl-0"
})(["width:100%;padding:0;margin:0;"]);
const StyledCodeBlock = styled_components__WEBPACK_IMPORTED_MODULE_3___default().pre.withConfig({
  displayName: "CodeBlock__StyledCodeBlock",
  componentId: "rir7xl-1"
})(["width:100%;overflow:scroll;font-size:calc(var(--font-size-sm) * 1.1);line-height:var(--leading-loose);font-family:IBM Plex Mono,Dank Mono,SF Mono,consolas,sans-serif;padding:var(--space-24) var(--space-32);border-radius:0.3em;"]); // const StyledNumberSpan = styled.span`
//     display: inline-block;
//     width: 2em;
//     user-select: none;
//     opacity: 0.3;
// `;
// const CopyToClipboard = ({ code }) => {
//     const [isCopied, setCopied] = useClipboard(code, { successDuration: 1000 });
//     return (
//         <Tippy
//             animation={false}
//             hideOnClick={false}
//             content={
//                 <span className="text-sm bg-black bg-opacity-50 px-3 py-1 rounded-md">
//                     {isCopied ? "Copied" : "Copy code to clipboard"}
//                 </span>
//             }
//         >
//             <button
//                 onClick={() => {
//                     setCopied();
//                 }}
//                 type="button"
//                 aria-label="Copy code to clipboard"
//                 className="hover:bg-opacity-5 bg-white bg-opacity-0 p-2 text-gray-400 hover:text-white transition-all duration-100 ease-in-out focus:ring-1 focus:ring-white focus:ring-opacity-30
// focus:outline-none rounded-md" > {isCopied ? ( //   prettier-ignore <svg aria-hidden xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none"><path d="M5 13l4
// 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></g></svg> ) : ( // prettier-ignore <svg aria-hidden xmlns="http://www.w3.org/2000/svg" width="16"
// height="16" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2"
// ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></g></svg> )} </button> </Tippy> ); };

/***/ })

};
;