"use strict";
exports.id = 5342;
exports.ids = [5342];
exports.modules = {

/***/ 7187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
 //https://github.com/garmeeh/next-seo


function Header({
  title,
  description,
  keywords,
  ogImage
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_0__.NextSeo, {
    title: title,
    description: description,
    openGraph: {
      url: "michaelmetz.com",
      title: title,
      description: description,
      images: [{
        url: ogImage ? ogImage : "",
        width: 1200,
        height: 630,
        alt: `${title}`,
        type: "image/png"
      }],
      site_name: "Mike Metz"
    },
    twitter: {
      handle: "@",
      cardType: "summary_large_image"
    }
  });
}

/***/ }),

/***/ 8183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MasonryGrid)
});

// EXTERNAL MODULE: external "react-masonry-css"
var external_react_masonry_css_ = __webpack_require__(7125);
var external_react_masonry_css_default = /*#__PURE__*/__webpack_require__.n(external_react_masonry_css_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/StyledGridComponents.js


const ResponsesGrid = external_styled_components_default().section.withConfig({
  displayName: "StyledGridComponents__ResponsesGrid",
  componentId: "sc-16el9xd-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));"]);
const AtlasGrid = external_styled_components_default().section.withConfig({
  displayName: "StyledGridComponents__AtlasGrid",
  componentId: "sc-16el9xd-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));"]);
const StyledMasonryGrid = external_styled_components_default()((external_react_masonry_css_default())).withConfig({
  displayName: "StyledGridComponents__StyledMasonryGrid",
  componentId: "sc-16el9xd-2"
})(["display:flex;width:auto;margin-top:var(--space-m);& .masonry_grid_column + .masonry_grid_column{margin-left:", ";background-clip:padding-box;}& .masonry_grid_column div:first-child{margin-bottom:", ";}"], props => props.columnGapLeft ? props.columnGapLeft : "0", props => props.columnGapBottom ? props.columnGapBottom : "var(--space-2xs)");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Layouts/MasonryGrid.js
const _excluded = ["children", "breakpointColumnsObj"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function MasonryGrid(_ref) {
  let {
    children,
    breakpointColumnsObj = {
      default: 3,
      1100: 2,
      700: 1
    }
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(StyledMasonryGrid, _objectSpread(_objectSpread({
    breakpointCols: breakpointColumnsObj,
    columnClassName: "masonry_grid_column"
  }, props), {}, {
    children: children
  }));
} // Docs
// https://github.com/paulcollett/react-masonry-css

/***/ }),

/***/ 1909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TitleWithCount)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function TitleWithCount({
  posts,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledContainer, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      children: getPostCount(posts)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h1", {
      children: children
    })]
  });
}
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div).withConfig({
  displayName: "TitleWithCount__StyledContainer",
  componentId: "hums8l-0"
})(["margin-top:-2.8rem;span{position:relative;top:5.6rem;left:-2.8rem;font-size:var(--font-size-md);color:var(--color-sea-blue);font-weight:400;}h1{font-size:var(--font-size-3xl);font-family:var(--font-serif);line-height:var(--leading-tighter);font-weight:normal;margin:var(--space-m) 0 var(--space-s);}"]); // For an array of posts, return the number of posts

const getPostCount = posts => {
  return posts.length;
};

/***/ })

};
;