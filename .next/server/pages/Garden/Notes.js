(() => {
var exports = {};
exports.id = 4444;
exports.ids = [4444];
exports.modules = {

/***/ 9680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotesPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3187);
/* harmony import */ var _tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Cards_NoteCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4736);
/* harmony import */ var _components_Layouts_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7187);
/* harmony import */ var _components_Layouts_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2294);
/* harmony import */ var _components_Layouts_MasonryGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8183);
/* harmony import */ var _components_MISC_TitleWithCount_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1909);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
// import {noteFilePaths,  NOTES_PATH } from "@/tools/mdxUtils.js";













function NotesPage({
  notes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Layouts_Header_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      title: "Notes of Michael Metzger"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_Layouts_Layout_js__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .A, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("header", {
        style: {
          marginBottom: "var(--space-xl)"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_MISC_TitleWithCount_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          posts: notes,
          children: "Notes"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Layouts_MasonryGrid_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: notes.map((essay, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Cards_NoteCard_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          id: essay.slug,
          slug: essay.slug,
          cover: essay.data.cover,
          title: essay.data.title,
          growthStage: essay.data.growthStage,
          date: essay.data.updated
        }, i))
      })]
    })]
  });
}
function getStaticProps() {
  // Get all note posts
  let notes = _tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_0__.noteFilePaths.map(filePath => {
    const source = fs__WEBPACK_IMPORTED_MODULE_6___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_8___default().join(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_0__.NOTES_PATH, filePath));
    const {
      content,
      data
    } = gray_matter__WEBPACK_IMPORTED_MODULE_7___default()(source);
    const slug = filePath.replace(/\.mdx$/, "");
    return {
      content,
      data,
      slug,
      filePath
    };
  }); // Sort notes by date

  const sortedNotes = notes.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });
  notes = sortedNotes;
  return {
    props: {
      notes
    }
  };
}

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

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 9034:
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7125:
/***/ ((module) => {

"use strict";
module.exports = require("react-masonry-css");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2294,623,5342,4736], () => (__webpack_exec__(9680)));
module.exports = __webpack_exports__;

})();