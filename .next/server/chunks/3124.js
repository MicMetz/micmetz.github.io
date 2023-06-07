"use strict";
exports.id = 3124;
exports.ids = [3124];
exports.modules = {

/***/ 3124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EssayCard)
});

// EXTERNAL MODULE: ./src/components/Icons/GrowthIcon.js + 2 modules
var GrowthIcon = __webpack_require__(445);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/StyledCardComponents/EssayStyled.js

const EssayImageWrapper = external_styled_components_default().div.withConfig({
  displayName: "EssayStyled__EssayImageWrapper",
  componentId: "sc-1odlody-0"
})(["display:grid;place-items:center;max-width:450px;max-height:450px;"]);
const EssayMetadataContainer = external_styled_components_default().div.withConfig({
  displayName: "EssayStyled__EssayMetadataContainer",
  componentId: "sc-1odlody-1"
})(["display:flex;flex-wrap:wrap;align-items:center;span{display:inline-block;font-family:var(--font-sans);font-size:calc(var(--font-size-xs) / 1.08);color:var(--color-gray-600);text-transform:uppercase;letter-spacing:0.05em;font-weight:400;margin-top:2px;}svg{margin:0 var(--space-2xs);}"]);
const StyledEssayCard = external_styled_components_default().div.withConfig({
  displayName: "EssayStyled__StyledEssayCard",
  componentId: "sc-1odlody-2"
})(["display:flex;flex-direction:column;border:1px solid var(--color-tinted-cream);padding:var(--space-s);margin:0 var(--space-2xs) var(--space-2xs) 0;border-radius:var(--border-radius-base);box-shadow:var(--box-shadow-sm);background:var(--color-light-cream);transition:all 0.3s ease-in-out;color:var(--color-gray-800);cursor:pointer;img{width:100%;}h3{transition:all 0.3s ease-in-out;font-family:var(--font-body);font-size:var(--font-size-base);font-weight:400;line-height:var(--leading-snug);margin:var(--space-2xs) 0;}&:hover{box-shadow:var(--box-shadow-lg);transform:scale3d(1.02,1.02,1.02);h3{color:var(--color-crimson);}}"]);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/MISC/DatesFormat.js
var DatesFormat = __webpack_require__(8822);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Cards/EssayCard.js







function EssayCard({
  slug,
  cover,
  title,
  growthStage,
  date,
  variants,
  id
}) {
  return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
    as: `/${slug}`,
    href: `/${slug}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledEssayCard, {
        variants: variants,
        children: [cover && /*#__PURE__*/jsx_runtime_.jsx(EssayImageWrapper, {
          children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
            src: cover,
            alt: title,
            width: 400,
            height: 400
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(EssayMetadataContainer, {
          children: [growthStage && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: [growthStage, " Essay"]
          }), growthStage && /*#__PURE__*/jsx_runtime_.jsx(GrowthIcon/* default */.Z, {
            size: "15",
            growthStage: growthStage
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx(DatesFormat/* RelativeDate */.$, {
              postDate: date
            })
          })]
        })]
      })
    })
  }, id);
}

/***/ })

};
;