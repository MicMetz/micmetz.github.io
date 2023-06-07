(() => {
var exports = {};
exports.id = 9506;
exports.ids = [9506];
exports.modules = {

/***/ 3027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ GardenPage),
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
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Search/GardenFH/GardenFilters.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function GardenFilters() {
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
            label: _.capitalize(item.label)
          })),
          attribute: "topics"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.MenuSelect, {
        "aria-label": "Growth Stages",
        translations: {
          seeAllOption: "All Growth Stages"
        },
        transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
          label: _.capitalize(item.label)
        })),
        attribute: "growthStage"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.MenuSelect, {
        "aria-label": "Types",
        translations: {
          seeAllOption: "All Types"
        },
        transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
          label: `${_.capitalize(item.label)}s`
        })),
        attribute: "type"
      })]
    })]
  });
}
const MobileTopics = external_styled_components_default().div.withConfig({
  displayName: "GardenFilters__MobileTopics",
  componentId: "diofqk-0"
})(["display:none;@media (max-width:768px){display:block;}"]);
const RightMenus = external_styled_components_default().div.withConfig({
  displayName: "GardenFilters__RightMenus",
  componentId: "diofqk-1"
})(["display:flex;flex-direction:row;grid-gap:var(--space-3xs);@media (max-width:768px){justify-content:center;}@media (max-width:500px){flex-direction:column;}.ais-MenuSelect-select{padding:0.4rem var(--space-2xs);border-radius:var(--border-radius-base);border:1px solid var(--color-gray-300);color:var(--color-gray-700);background-color:var(--color-cream);transition:all 0.3s ease-in-out;@media (max-width:768px){width:100%;}:hover{background:white;cursor:pointer;}}"]);
const Container = external_styled_components_default().div.withConfig({
  displayName: "GardenFilters__Container",
  componentId: "diofqk-2"
})(["display:flex;flex-direction:row;grid-gap:var(--space-m);align-items:top;justify-content:space-between;font-family:var(--font-sans);font-size:var(--font-size-xs);color:var(--color-gray-800);margin-bottom:var(--space-xl);@media (max-width:768px){flex-direction:column;}ul{margin:0;padding:0;}li{list-style:none;font-family:var(--font-sans);font-size:var(--font-size-xs);color:var(--color-gray-800);}"]);
const TopicLabel = external_styled_components_default().div.withConfig({
  displayName: "GardenFilters__TopicLabel",
  componentId: "diofqk-3"
})(["display:flex;padding:var(--space-3xs) var(--space-2xs) var(--space-3xs) 0;color:var(--color-black);svg{margin:4px 0 0 12px;}text-transform:uppercase;letter-spacing:0.04rem;margin-right:var(--space-3xs);"]);
const TopicsContainer = external_styled_components_default().div.withConfig({
  displayName: "GardenFilters__TopicsContainer",
  componentId: "diofqk-4"
})(["display:inline-flex;flex-direction:row;@media (max-width:768px){display:none;}.ais-Menu{align-items:start;transition:all 0.4s ease;}.ais-Menu-list{display:flex;flex-wrap:wrap;flex-direction:row;grid-gap:4px;transition:all 0.4s ease;@media (max-width:768px){max-width:70vw;flex-wrap:nowrap;overflow-x:scroll;}}.ais-Menu-item{border-radius:3rem;padding:var(--space-3xs) var(--space-2xs);flex-wrap:nowrap;flex-shrink:0;a{color:var(--color-gray-800);}transition:all 0.4s ease;:hover{background-color:var(--color-tinted-cream);a{color:var(--color-black);}}}.ais-Menu-item--selected{background-color:var(--color-sea-blue);transition:all 0.4s ease;a{color:white;}:hover{background-color:var(--color-medium-sea-blue);a{color:white;}}}.ais-Menu-count{display:none;}.ais-Menu-showMore{flex-shrink:0;margin:0;padding:var(--space-3xs) var(--space-2xs);border-radius:var(--border-radius-base);color:var(--color-gray-700);transition:all 0.4s ease;line-height:1.2;margin-top:var(--space-3xs);font-size:calc(var(--font-size-xs) / 1.2);text-transform:uppercase;letter-spacing:0.04rem;color:var(--color-crimson);@media (max-width:768px){display:none;}:hover{background-color:white;cursor:pointer;}:disabled{display:none;}}"]);
// EXTERNAL MODULE: ./src/components/Cards/EssayCard.js + 1 modules
var EssayCard = __webpack_require__(3124);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./src/styles/StyledCardComponents/IdeaStyled.js


const StyledIdeaCard = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "IdeaStyled__StyledIdeaCard",
  componentId: "z9kcfe-0"
})(["display:flex;flex-direction:row;padding:var(--space-xs);margin:0 var(--space-xs) 0 0;border-radius:var(--border-radius-base);border:1px solid var(--color-cream);transition:all 0.3s ease-in-out;align-items:start;cursor:pointer;h3{color:var(--color-gray-800);transition:all 0.3s ease-in-out;font-family:var(--font-body);font-size:var(--font-size-base);font-weight:400;line-height:var(--leading-snug);margin-left:var(--space-xs);transition:all 0.3s ease-in-out;}svg{position:relative;top:1px;flex-shrink:0;}&:hover{transform:scale3d(1.02,1.02,1.02);background:var(--color-light-cream);box-shadow:var(--box-shadow-sm);border:1px solid var(--color-tinted-cream);h3{color:var(--color-crimson);}}"]);
const IdeaMetadataContainer = external_styled_components_default().div.withConfig({
  displayName: "IdeaStyled__IdeaMetadataContainer",
  componentId: "z9kcfe-1"
})(["display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin-left:var(--space-xs);margin-top:var(--space-2xs);font-family:var(--font-sans);font-size:calc(var(--font-size-xs) / 1.08);color:var(--color-gray-500);text-transform:uppercase;letter-spacing:0.05em;font-weight:400;svg{margin:0 0.4rem;}"]);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/MISC/DatesFormat.js
var DatesFormat = __webpack_require__(8822);
;// CONCATENATED MODULE: ./src/components/Cards/IdeaCard.js







const Leaves = () => {
  const leftLeaf = {
    initial: {
      x: 0
    },
    hover: {
      x: 29,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  const rightLeaf = {
    initial: {
      x: 0
    },
    hover: {
      x: -29,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.svg, {
    height: "45",
    width: "45",
    fill: "none",
    viewBox: "0 0 67 65",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.g, {
      variants: leftLeaf,
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M31.1848 5.09405C31.3079 5.08954 31.43 5.10999 31.5436 5.15423C31.6572 5.19846 31.7601 5.26553 31.8459 5.35138C31.9318 5.43723 31.9989 5.54011 32.0431 5.65375C32.0874 5.76739 32.1078 5.88944 32.1033 6.01256C31.6649 19.115 18.9879 31.792 5.87541 32.2405C5.75115 32.2444 5.62807 32.2233 5.5135 32.1784C5.39893 32.1334 5.29524 32.0657 5.20859 31.979C5.12195 31.8924 5.05413 31.7886 5.0092 31.6741C4.96428 31.5595 4.94317 31.4364 4.94712 31.3122C5.40536 18.2094 18.0726 5.52271 31.1848 5.09405Z",
        stroke: "#04A4BA"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M4.95581 32.9536C4.9513 32.8305 4.97175 32.7085 5.01598 32.5948C5.06022 32.4812 5.12728 32.3783 5.21313 32.2925C5.29899 32.2066 5.40187 32.1395 5.51551 32.0953C5.62915 32.0511 5.75119 32.0306 5.87431 32.0351C18.9768 32.4736 31.6537 45.1505 32.1022 58.263C32.1062 58.3873 32.085 58.5104 32.0401 58.6249C31.9952 58.7395 31.9274 58.8432 31.8408 58.9298C31.7541 59.0165 31.6504 59.0843 31.5358 59.1292C31.4213 59.1741 31.2982 59.1953 31.1739 59.1913C18.0712 58.7331 5.38446 46.0658 4.95581 32.9536Z",
        stroke: "#04A4BA"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.g, {
      variants: rightLeaf,
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M34.0535 6.00765C34.049 5.88453 34.0694 5.76248 34.1136 5.64884C34.1579 5.5352 34.2249 5.43235 34.3108 5.3465C34.3966 5.26064 34.4995 5.19355 34.6132 5.14932C34.7268 5.10508 34.8488 5.08463 34.972 5.08914C48.0744 5.52757 60.7514 18.2045 61.1999 31.317C61.2038 31.4413 61.1827 31.5644 61.1378 31.6789C61.0929 31.7935 61.0251 31.8972 60.9384 31.9838C60.8518 32.0705 60.7481 32.1383 60.6335 32.1832C60.5189 32.2282 60.3958 32.2493 60.2716 32.2453C47.1689 31.7871 34.4821 19.1199 34.0535 6.00765Z",
        stroke: "#04A4BA"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M60.282 32.0402C60.4051 32.0356 60.5271 32.0561 60.6408 32.1003C60.7544 32.1446 60.8573 32.2116 60.9431 32.2975C61.029 32.3833 61.0961 32.4862 61.1403 32.5999C61.1845 32.7135 61.205 32.8355 61.2005 32.9587C60.762 46.0611 48.0851 58.7381 34.9726 59.1866C34.8483 59.1905 34.7252 59.1694 34.6107 59.1245C34.4961 59.0796 34.3924 59.0118 34.3058 58.9251C34.2191 58.8385 34.1513 58.7347 34.1064 58.6202C34.0614 58.5056 34.0403 58.3825 34.0443 58.2583C34.5025 45.1556 47.1698 32.4688 60.282 32.0402Z",
        stroke: "#04A4BA"
      })]
    })]
  });
};

function IdeaCard({
  slug,
  date,
  title,
  growthStage,
  id
}) {
  return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
    as: `/${slug}`,
    href: `/${slug}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledIdeaCard, {
        initial: "initial",
        whileHover: "hover",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Leaves, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: title
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IdeaMetadataContainer, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Idea"
            }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
              width: "6px",
              height: "8px",
              children: /*#__PURE__*/jsx_runtime_.jsx("circle", {
                r: "3",
                cx: "3",
                cy: "3",
                fill: "var(--color-gray-400)"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(DatesFormat/* RelativeDate */.$, {
              postDate: date
            })]
          })]
        })]
      })
    })
  }, id);
}
// EXTERNAL MODULE: ./src/components/Cards/NoteCard.js + 1 modules
var NoteCard = __webpack_require__(4736);
// EXTERNAL MODULE: ./src/components/Layouts/MasonryGrid.js + 1 modules
var MasonryGrid = __webpack_require__(8183);
;// CONCATENATED MODULE: ./src/components/Search/GardenFH/GardenHits.js







function GardenHits({
  hits,
  allPostData
}) {
  const hitLength = hits?.length;
  const sortedPosts = allPostData.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  const filteredGardenHits = hitLength > 0 ? hits : sortedPosts;
  return /*#__PURE__*/jsx_runtime_.jsx(MasonryGrid/* default */.Z, {
    children: filteredGardenHits.map((post, i) => {
      if (post.type === "essay") {
        return /*#__PURE__*/jsx_runtime_.jsx(EssayCard/* default */.Z, {
          id: post.slug,
          slug: post.slug,
          cover: post.cover,
          title: post.title,
          growthStage: post.growthStage,
          date: post.updated
        }, i);
      } else if (post.type === "note") {
        return /*#__PURE__*/jsx_runtime_.jsx(NoteCard/* default */.Z, {
          id: post.slug,
          slug: post.slug,
          title: post.title,
          growthStage: post.growthStage,
          date: post.updated
        }, i);
      } else if (post.type === "pattern") {
        return /*#__PURE__*/jsx_runtime_.jsx(IdeaCard, {
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

/* harmony default export */ const GardenFH_GardenHits = ((0,external_react_instantsearch_dom_.connectInfiniteHits)(GardenHits));
;// CONCATENATED MODULE: ./src/components/Search/GardenFH/GardenFiltersAndHits.js






const searchClient = lite_default()(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY);
const GardenFiltersAndHits = ({
  allPostData
}) => {
  const sortedPosts = allPostData.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_instantsearch_dom_.InstantSearch, {
    searchClient: searchClient,
    indexName: "garden-posts",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_instantsearch_dom_.Configure, {
      hitsPerPage: 200
    }), /*#__PURE__*/jsx_runtime_.jsx(GardenFilters, {}), /*#__PURE__*/jsx_runtime_.jsx(GardenFH_GardenHits, {
      allPostData: allPostData
    })]
  });
};
// EXTERNAL MODULE: ./src/styles/StyledTypography.js
var StyledTypography = __webpack_require__(8290);
// EXTERNAL MODULE: ./src/tools/mdxUtils.js
var mdxUtils = __webpack_require__(3187);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./src/styles/StyledComponents.js
var StyledComponents = __webpack_require__(7575);
;// CONCATENATED MODULE: ./src/pages/Garden/index.js









 // import { essayFilePaths, ESSAYS_PATH, noteFilePaths, NOTES_PATH, patternFilePaths, PATTERNS_PATH, } from "../../tools/mdxUtils.js";




function GardenPage({
  allPosts
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
      title: "The Garden of Michael Metzger"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* Layout */.A, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
        style: {
          marginBottom: "var(--space-xl)"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(TitleWithCount/* default */.Z, {
          posts: allPosts,
          children: "The Garden"
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledTypography/* Title2 */.Rn, {
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledComponents/* SectionText */.r4, {
            children: "Welcome to my digital garden. This is where I cultivate my ideas and collect the things that help me grow."
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(GardenFiltersAndHits, {
        allPostData: allPosts
      })]
    })]
  });
}
function getStaticProps() {
  // Get all essay posts
  let essays = mdxUtils.essayFilePaths.map(filePath => {
    const source = external_fs_default().readFileSync(external_path_default().join(mdxUtils.ESSAYS_PATH, filePath));
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

  const sortedEssays = essays.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  essays = sortedEssays; // Get all note posts

  let notes = noteFilePaths.map(filePath => {
    const source = external_fs_default().readFileSync(external_path_default().join(NOTES_PATH, filePath));
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
      updated
    } = data;
    return {
      content,
      title,
      description,
      growthStage,
      startDate,
      topics,
      type,
      updated,
      slug,
      filePath
    };
  }); // Sort notes by date

  const sortedNotes = notes.sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  });
  notes = sortedNotes;
  const allPosts = essays.concat(notes);
  return {
    props: {
      allPosts
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

/***/ 3257:
/***/ ((module) => {

"use strict";
module.exports = require("algoliasearch/lite");

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

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 7929:
/***/ ((module) => {

"use strict";
module.exports = require("react-instantsearch-dom");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,2294,623,5342,8290,3124,4736], () => (__webpack_exec__(3027)));
module.exports = __webpack_exports__;

})();