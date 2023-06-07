"use strict";
(() => {
var exports = {};
exports.id = 1375;
exports.ids = [1375];
exports.modules = {

/***/ 1672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProjectsPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./src/components/Layouts/Header.js
var Header = __webpack_require__(7187);
// EXTERNAL MODULE: ./src/components/Layouts/Layout.js
var Layout = __webpack_require__(2294);
// EXTERNAL MODULE: ./src/components/MISC/TitleWithCount.js
var TitleWithCount = __webpack_require__(1909);
// EXTERNAL MODULE: external "algoliasearch/lite"
var lite_ = __webpack_require__(3257);
var lite_default = /*#__PURE__*/__webpack_require__.n(lite_);
// EXTERNAL MODULE: external "react-instantsearch-dom"
var external_react_instantsearch_dom_ = __webpack_require__(7929);
;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Search/ProjectsFH/ProjectFilters.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function ProjectFilters() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TopicsContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TopicLabel, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Topics"
        }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
          width: "2",
          height: "14",
          fill: "var(--color-sea-blue)",
          children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
            width: "2",
            height: "14"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Menu, {
        facetOrdering: true,
        attribute: "topics",
        limit: 7,
        showMore: true
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(RightMenus, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(MobileTopics, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.MenuSelect, {
          "aria-label": "Topics",
          limit: 20,
          translations: {
            seeAllOption: "All Topics"
          },
          transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
            label: external_lodash_default().capitalize(item.label)
          })),
          attribute: "topics"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.MenuSelect, {
        "aria-label": "Growth Stages",
        translations: {
          seeAllOption: "All Growth Stages"
        },
        transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
          label: external_lodash_default().capitalize(item.label)
        })),
        attribute: "growthStage"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.MenuSelect, {
        "aria-label": "Types",
        translations: {
          seeAllOption: "All Types"
        },
        transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
          label: `${external_lodash_default().capitalize(item.label)}s`
        })),
        attribute: "type"
      })]
    })]
  });
}
const MobileTopics = external_styled_components_default().div.withConfig({
  displayName: "ProjectFilters__MobileTopics",
  componentId: "sc-1yfe30z-0"
})(["display:none;@media (max-width:768px){display:block;}"]);
const RightMenus = external_styled_components_default().div.withConfig({
  displayName: "ProjectFilters__RightMenus",
  componentId: "sc-1yfe30z-1"
})(["display:flex;flex-direction:row;grid-gap:var(--space-3xs);@media (max-width:768px){justify-content:center;}@media (max-width:500px){flex-direction:column;}.ais-MenuSelect-select{padding:0.4rem var(--space-2xs);border-radius:var(--border-radius-base);border:1px solid var(--color-gray-300);color:var(--color-gray-700);background-color:var(--color-cream);transition:all 0.3s ease-in-out;@media (max-width:768px){width:100%;}:hover{background:white;cursor:pointer;}}"]);
const Container = external_styled_components_default().div.withConfig({
  displayName: "ProjectFilters__Container",
  componentId: "sc-1yfe30z-2"
})(["display:flex;flex-direction:row;grid-gap:var(--space-m);align-items:normal;justify-content:space-between;font-family:var(--font-sans);font-size:var(--font-size-xs);color:var(--color-gray-800);margin-bottom:var(--space-xl);@media (max-width:768px){flex-direction:column;}ul{margin:0;padding:0;}li{list-style:none;font-family:var(--font-sans);font-size:var(--font-size-xs);color:var(--color-gray-800);}"]);
const TopicLabel = external_styled_components_default().div.withConfig({
  displayName: "ProjectFilters__TopicLabel",
  componentId: "sc-1yfe30z-3"
})(["display:flex;padding:var(--space-3xs) var(--space-2xs) var(--space-3xs) 0;color:var(--color-black);svg{margin:4px 0 0 12px;}text-transform:uppercase;letter-spacing:0.04rem;margin-right:var(--space-3xs);"]);
const TopicsContainer = external_styled_components_default().div.withConfig({
  displayName: "ProjectFilters__TopicsContainer",
  componentId: "sc-1yfe30z-4"
})(["display:inline-flex;flex-direction:row;@media (max-width:768px){display:none;}.ais-Menu{align-items:start;transition:all 0.4s ease;}.ais-Menu-list{display:flex;flex-wrap:wrap;flex-direction:row;grid-gap:4px;transition:all 0.4s ease;@media (max-width:768px){max-width:70vw;flex-wrap:nowrap;overflow-x:scroll;}}.ais-Menu-item{border-radius:3rem;padding:var(--space-3xs) var(--space-2xs);flex-wrap:nowrap;flex-shrink:0;a{color:var(--color-gray-800);}transition:all 0.4s ease;:hover{background-color:var(--color-tinted-cream);a{color:var(--color-black);}}}.ais-Menu-item--selected{background-color:var(--color-sea-blue);transition:all 0.4s ease;a{color:white;}:hover{background-color:var(--color-medium-sea-blue);a{color:white;}}}.ais-Menu-count{display:none;}.ais-Menu-showMore{flex-shrink:0;margin:0;padding:var(--space-3xs) var(--space-2xs);border-radius:var(--border-radius-base);color:var(--color-gray-700);transition:all 0.4s ease;line-height:1.2;margin-top:var(--space-3xs);font-size:calc(var(--font-size-xs) / 1.2);text-transform:uppercase;letter-spacing:0.04rem;color:var(--color-crimson);@media (max-width:768px){display:none;}:hover{background-color:white;cursor:pointer;}:disabled{display:none;}}"]);
// EXTERNAL MODULE: ./src/components/Cards/AtlasCard.js + 1 modules
var AtlasCard = __webpack_require__(7730);
// EXTERNAL MODULE: ./src/components/Cards/EssayCard.js + 1 modules
var EssayCard = __webpack_require__(3124);
// EXTERNAL MODULE: ./src/components/Cards/NoteCard.js + 1 modules
var NoteCard = __webpack_require__(4736);
// EXTERNAL MODULE: ./src/components/Layouts/MasonryGrid.js + 1 modules
var MasonryGrid = __webpack_require__(8183);
;// CONCATENATED MODULE: ./src/components/Search/ProjectsFH/ProjectHits.js







function ProjectHits({
  hits,
  allPostData
}) {
  const hitLength = hits?.length;
  const sortedPosts = allPostData.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  const filteredHits = hitLength > 0 ? hits : sortedPosts;
  return /*#__PURE__*/jsx_runtime_.jsx(MasonryGrid/* default */.Z, {
    children: filteredHits.map((post, i) => {
      if (post.type === "software") {
        return /*#__PURE__*/jsx_runtime_.jsx(EssayCard/* default */.Z, {
          id: post.slug,
          slug: post.slug,
          cover: post.cover,
          title: post.title,
          growthStage: post.growthStage,
          date: post.updated
        }, i);
      } else if (post.type === "hardware") {
        return /*#__PURE__*/jsx_runtime_.jsx(NoteCard/* default */.Z, {
          id: post.slug,
          slug: post.slug,
          title: post.title,
          growthStage: post.growthStage,
          date: post.updated
        }, i);
      } else if (post.type === "atlas") {
        return /*#__PURE__*/jsx_runtime_.jsx(AtlasCard/* default */.Z, {
          id: post.slug,
          slug: post.slug,
          title: post.title,
          growthStage: post.growthStage,
          date: post.updated
        }, i);
      }
    })
  });
}

/* harmony default export */ const ProjectsFH_ProjectHits = ((0,external_react_instantsearch_dom_.connectInfiniteHits)(ProjectHits));
;// CONCATENATED MODULE: ./src/components/Search/ProjectsFH/ProjectsFiltersAndHits.js






const searchClient = lite_default()(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY);
const LaborFiltersAndHits = ({
  allPostData
}) => {
  const sortedPosts = allPostData.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_instantsearch_dom_.InstantSearch, {
    searchClient: searchClient,
    indexName: "Labor-posts",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Configure, {
      hitsPerPage: 200
    }), /*#__PURE__*/jsx_runtime_.jsx(ProjectFilters, {}), /*#__PURE__*/jsx_runtime_.jsx(ProjectsFH_ProjectHits, {
      allPostData: allPostData
    })]
  });
};
// EXTERNAL MODULE: ./src/styles/StyledTypography.js
var StyledTypography = __webpack_require__(8290);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/Projects/index.js




 // import { projectFilePaths, PROJECTS_PATH } from "@/tools/mdxUtils.js";








function ProjectsPage() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
      title: "The Projects of Michael Metzger"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* Layout */.A, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
        style: {
          marginBottom: "var(--space-xl)"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(TitleWithCount/* default */.Z, {
          posts: allPosts,
          children: "My Projects"
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledTypography/* Title2 */.Rn, {
          children: "A collection of prior works, and works in progress."
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(LaborFiltersAndHits, {
        allPostData: allPosts
      })]
    })]
  });
} // Fetches the data for the page.

function getStaticProps() {
  // Get all essay posts
  let projects = projectFilePaths.map(filePath => {
    const source = external_fs_default().readFileSync(external_path_default().join(PROJECTS_PATH, filePath));
    const {
      content,
      data
    } = external_gray_matter_default()(source);
    const slug = filePath.replace(/\.mdx$/, "");
    const {
      title,
      description,
      growthStage,
      startDate,
      topics,
      type,
      cover,
      updated
    } = data;
    return {
      content,
      title,
      cover,
      description,
      growthStage,
      startDate,
      topics,
      type,
      updated,
      slug,
      filePath
    };
  }); // Sort essays by date

  const sortedprojects = projects.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  projects = sortedprojects;
  const allPosts = projects;
  return {
    props: {
      allPosts
    }
  };
}

/***/ }),

/***/ 3257:
/***/ ((module) => {

module.exports = require("algoliasearch/lite");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7929:
/***/ ((module) => {

module.exports = require("react-instantsearch-dom");

/***/ }),

/***/ 7125:
/***/ ((module) => {

module.exports = require("react-masonry-css");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,2294,623,5342,8290,3124,4736,7730], () => (__webpack_exec__(1672)));
module.exports = __webpack_exports__;

})();