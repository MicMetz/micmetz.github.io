exports.id = 1574;
exports.ids = [1574];
exports.modules = {

/***/ 7901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Spacer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const handleSize = size => {
  switch (size) {
    case "xs":
      return "var(--space-xs)";

    case "small":
      return "var(--space-s)";

    case "medium":
      return "var(--space-m)";

    case "large":
      return "var(--space-l)";

    case "xlarge":
      return "var(--space-xl)";

    case "2xlarge":
      return "var(--space-2xl)";

    case "3xlarge":
      return "var(--space-3xl)";

    default:
      return "var(--space-l)";
  }
};

const Spacer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Spacer",
  componentId: "p8lth8-0"
})(["height:", ";"], ({
  size
}) => handleSize(size));

/***/ }),

/***/ 3187:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(7147);

const path = __webpack_require__(1017);

const ESSAYS_PATH = path.join(process.cwd(), "posts", "essays");
const essayFilePaths = fs.readdirSync(ESSAYS_PATH).filter(path => /\.mdx?$/.test(path));
const NOTES_PATH = path.join(process.cwd(), "posts", "notes");
const noteFilePaths = fs.readdirSync(NOTES_PATH);
const PATTERNS_PATH = path.join(process.cwd(), "posts", "patterns");
const patternFilePaths = fs.readdirSync(PATTERNS_PATH).filter(path => /\.mdx?$/.test(path));
const PROJECTS_PATH = path.join(process.cwd(), "posts", "projects");
const projectFilePaths = fs.readdirSync(PROJECTS_PATH).filter(path => /\.mdx?$/.test(path));
module.exports = {
  essayFilePaths,
  noteFilePaths,
  projectFilePaths,
  patternFilePaths,
  PATTERNS_PATH,
  ESSAYS_PATH,
  NOTES_PATH,
  PROJECTS_PATH
};

/***/ })

};
;