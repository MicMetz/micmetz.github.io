"use strict";
exports.id = 4736;
exports.ids = [4736];
exports.modules = {

/***/ 4736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NoteCard)
});

// EXTERNAL MODULE: ./src/components/Icons/GrowthIcon.js + 2 modules
var GrowthIcon = __webpack_require__(445);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/StyledCardComponents/NoteStyled.js


const NoteMetadataContainer = external_styled_components_default().div.withConfig({
  displayName: "NoteStyled__NoteMetadataContainer",
  componentId: "zh6ck2-0"
})(["display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin-left:var(--space-xs);margin-top:var(--space-2xs);font-family:var(--font-sans);font-size:calc(var(--font-size-xs) / 1.08);color:var(--color-gray-500);text-transform:uppercase;letter-spacing:0.05em;font-weight:400;svg{margin:0 0.4rem;}"]);
const StyledNoteCard = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "NoteStyled__StyledNoteCard",
  componentId: "zh6ck2-1"
})(["display:flex;flex-direction:row;padding:var(--space-xs);margin:0 var(--space-xs) var(--space-xs) 0;border-radius:var(--border-radius-base);border:1px solid var(--color-cream);transition:all 0.3s ease-in-out;cursor:pointer;h3{color:var(--color-gray-800);transition:all 0.3s ease-in-out;font-family:var(--font-body);font-size:var(--font-size-base);font-weight:400;line-height:var(--leading-snug);margin-left:var(--space-xs);transition:all 0.3s ease-in-out;}svg{position:relative;top:4px;flex-shrink:0;}&:hover{transform:scale3d(1.02,1.02,1.02);background:var(--color-light-cream);box-shadow:var(--box-shadow-sm);border:1px solid var(--color-tinted-cream);h3{color:var(--color-crimson);}}"]);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/MISC/DatesFormat.js
var DatesFormat = __webpack_require__(8822);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Cards/NoteCard.js






function NoteCard({
  slug,
  title,
  growthStage,
  date,
  id
}) {
  return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
    as: `/${slug}`,
    href: `/${slug}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledNoteCard, {
        children: [growthStage && /*#__PURE__*/jsx_runtime_.jsx(GrowthIcon/* default */.Z, {
          size: "24",
          growthStage: growthStage
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: title
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NoteMetadataContainer, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [growthStage, " Note"]
            }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
              width: "6px",
              height: "14px",
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

/***/ })

};
;