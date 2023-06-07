"use strict";
exports.id = 2480;
exports.ids = [2480];
exports.modules = {

/***/ 2480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TweetEmbed)
/* harmony export */ });
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3662);
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_twitter_embed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function TweetEmbed({
  tweetId
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(TweetContainer, {
    className: "tweet",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_0__.TwitterTweetEmbed, {
      tweetId: tweetId
    })
  });
}
const TweetContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "TweetEmbed__TweetContainer",
  componentId: "hfe72r-0"
})(["&.tweet{margin:0 auto var(--space-m);width:100%;max-width:550px;}"]);

/***/ })

};
;