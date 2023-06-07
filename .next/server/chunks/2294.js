"use strict";
exports.id = 2294;
exports.ids = [2294];
exports.modules = {

/***/ 2294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7575);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Layout = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_0__/* .StyledLayout */ .Rh, {
    children: children
  });
};

/***/ }),

/***/ 7575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$0": () => (/* binding */ Section),
/* harmony export */   "AO": () => (/* binding */ ListTitle),
/* harmony export */   "Ei": () => (/* binding */ Img),
/* harmony export */   "HC": () => (/* binding */ ListItem),
/* harmony export */   "IB": () => (/* binding */ PhotoGrid),
/* harmony export */   "NZ": () => (/* binding */ SectionTitle),
/* harmony export */   "Rh": () => (/* binding */ StyledLayout),
/* harmony export */   "Vm": () => (/* binding */ ListContainer),
/* harmony export */   "aV": () => (/* binding */ List),
/* harmony export */   "cF": () => (/* binding */ ImageSpread),
/* harmony export */   "fe": () => (/* binding */ ImageCard),
/* harmony export */   "hy": () => (/* binding */ ListParagraph),
/* harmony export */   "l0": () => (/* binding */ GalleryContainer),
/* harmony export */   "p": () => (/* binding */ ImgStripe),
/* harmony export */   "r4": () => (/* binding */ SectionText)
/* harmony export */ });
/* unused harmony exports SectionRightText, LeftSectionDivide, RightSectionDivide, SecondaryBtnAura, SecondaryBtnAuraLink, DefaultGrid, SectionDivider, SectionSubText, SecondaryBtn, ButtonBack, ButtonFront, LinkContainer, LinkIconImg, JournalContainer, TagList, Tag, Sprite, ImageContainer, MainImage, ListIcon */
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
// noinspection CssUnknownProperty



const StyledLayout = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.main).withConfig({
  displayName: "StyledComponents__StyledLayout",
  componentId: "sc-1145av9-0"
})(["max-width:1400px;margin:var(--space-l) auto var(--space-128);padding:0 var(--space-l);@media (max-width:768px){margin:var(--space-s) auto var(--space-2xl);padding:0 var(--space-m);}@media (max-width:576px){margin:var(--space-xs) auto var(--space-xl);padding:0 var(--space-xs);}"]);
const PhotoGrid = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledComponents__PhotoGrid",
  componentId: "sc-1145av9-1"
})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:1rem;padding:0 1rem 1rem;margin:0 auto;max-width:1200px;width:100%;height:100%;align-items:center;justify-content:center;@media ", "{display:grid;height:auto !important;grid-template-columns:repeat(2,1fr);grid-gap:1rem;}@media ", "{display:grid;height:auto !important;grid-template-columns:repeat(4,1fr);grid-gap:1rem;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);
const ImageSpread = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "StyledComponents__ImageSpread",
  componentId: "sc-1145av9-2"
})(["width:100vw !important;max-height:75vh;object-fit:cover;object-position:center;z-index:1;"]);
const ImageCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledComponents__ImageCard",
  componentId: "sc-1145av9-3"
})(["display:flex;--imageHeight:calc(100vw / 6);--imageWidth:calc(100vw / 8);height:var(--imageHeight);width:var(--imageWidth);flex-direction:column;justify-content:center;align-items:center;overflow:hidden;&:hover{transform:scale(1.05);transition:all 0.2s ease-in-out;box-shadow:0 2px 8px 0 rgba(0,0,0,0.2);}@media ", "{margin:0 0 1rem;--imageHeight:calc(100vw / 6);--imageWidth:calc(100vw / 8);width:var(--imageWidth);height:var(--imageHeight);}@media ", "{margin:0 0 1rem;--imageHeight:calc(100vw / 6);--imageWidth:calc(100vw / 4);width:var(--imageWidth);height:var(--imageHeight);"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ImgStripe = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "StyledComponents__ImgStripe",
  componentId: "sc-1145av9-4"
})(["width:100%;height:100%;object-fit:cover;object-position:center;transition:all 0.2s ease-in-out;border-radius:0.9rem;"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "StyledComponents__Section",
  componentId: "sc-1145av9-5"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], props => props.grid ? "grid" : "flex", props => props.row ? "row" : "column", props => props.nopadding ? "0" : "48px 0", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.nopadding ? "0" : "16px 16px 0");
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h2.withConfig({
  displayName: "StyledComponents__SectionTitle",
  componentId: "sc-1145av9-6"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#171748 18.77%,rgba(0,0,0,0.75) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:1rem;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? '6rem' : '4rem', props => props.main ? '72px' : '56px', props => props.main ? '58px 0 16px' : '0', props => props.theme.breakpoints.md, props => props.main ? '56px' : '48px', props => props.main ? '56px' : '48px', props => props.main ? '40px 0 12px' : '0', props => props.theme.breakpoints.sm, props => props.main ? '28px' : '32px', props => props.main ? '32px' : '40px', props => props.main ? '16px 0 8px' : '0');
const SectionText = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "StyledComponents__SectionText",
  componentId: "sc-1145av9-7"
})(["width:100%;height:fit-content;position:relative;margin:auto;max-font-size:2.2rem;font-size:2.2rem;line-height:3.2rem;font-weight:300;color:black;@media ", "{font-size:50%;line-height:2.8rem;padding-bottom:3.6rem;}@media ", "{font-size:50%;line-height:2.4rem;padding-bottom:3.6rem;}@media ", "{font-size:2.2rem;line-height:3.2rem;padding-bottom:3.6rem;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.theme.breakpoints.lg);
const SectionRightText = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "StyledComponents__SectionRightText",
  componentId: "sc-1145av9-8"
})(["max-width:45%;font-size:2.2rem;line-height:3.2rem;font-weight:300;padding-bottom:3.6rem;color:black;@media ", "{max-width:670px;font-size:2rem;line-height:2.8rem;padding-bottom:3.6rem;}@media ", "{font-size:1.8rem;line-height:2.4rem;padding-bottom:3.6rem;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const LeftSectionDivide = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledComponents__LeftSectionDivide",
  componentId: "sc-1145av9-9"
})(["max-width:50vw;width:100%;float:left;padding-right:0;padding-bottom:3.6rem;font-size:2.2rem;line-height:3.2rem;font-weight:300;color:black;@media ", "{font-size:2rem;line-height:2.8rem;padding-bottom:3.6rem;}@media ", "{font-size:1.8rem;line-height:2.4rem;padding-bottom:3.6rem;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const RightSectionDivide = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledComponents__RightSectionDivide",
  componentId: "sc-1145av9-10"
})(["max-width:50vw;min-width:45vw;width:100%;padding-left:0;font-size:1.0rem;padding-bottom:3.6rem;line-height:3.2rem;font-weight:300;color:black;@media ", "{font-size:1rem;line-height:2.8rem;padding-bottom:3.6rem;}@media ", "{font-size:0.8rem;line-height:2.4rem;padding-bottom:3.6rem;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SecondaryBtnAura = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "StyledComponents__SecondaryBtnAura",
  componentId: "sc-1145av9-11"
})(["font-size:1.8rem;background-color:#171748;color:#fff;padding:1.2rem 2.2rem;border-radius:5px;border:none;cursor:pointer;transition:all 0.2s ease-in-out;&:hover{background-color:#fff;color:#171748;}"]);
const SecondaryBtnAuraLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
  displayName: "StyledComponents__SecondaryBtnAuraLink",
  componentId: "sc-1145av9-12"
})(["font-size:1.8rem;background-color:#171748;color:#fff;padding:1.2rem 2.2rem;border-radius:5px;border:none;cursor:pointer;transition:all 0.2s ease-in-out;&:hover{background-color:#fff;color:#171748;}"]);
const DefaultGrid = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "StyledComponents__DefaultGrid",
  componentId: "sc-1145av9-13"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:1rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem 2rem 0;}"], props => props.theme.breakpoints.sm);
const SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledComponents__SectionDivider",
  componentId: "sc-1145av9-14"
})(["width:50vw;height:0.5rem;border-radius:10px;padding-bottom:0.5rem;background-color:rgba(26,25,25,0.72);background:", ";margin:", ";@media ", "{height:0.5rem;padding-top:0.2rem;padding-bottom:0.2rem;}@media ", "{height:0.5rem;padding-top:0.1rem;padding-bottom:0.1rem;}"], props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : '#e88448FF', props => props.divider ? "4rem 0" : "", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "StyledComponents__SectionSubText",
  componentId: "sc-1145av9-15"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:black;@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "StyledComponents__SecondaryBtn",
  componentId: "sc-1145av9-16"
})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#52add9;border:1px solid #52add9;}&:active{background:#52add9;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledComponents__ButtonBack",
  componentId: "sc-1145av9-17"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#171748;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], ({
  alt
}) => alt ? '150px' : '262px', ({
  alt
}) => alt ? '52px' : '64px', ({
  alt
}) => alt ? '20px' : '24px', ({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px', ({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)', ({
  disabled
}) => disabled ? '.5' : '1', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '150px' : '184px', ({
  alt
}) => alt ? '52px' : '48px', ({
  alt
}) => alt ? '20px' : '16px', ({
  alt
}) => alt ? '0' : '64px', props => props.theme.breakpoints.sm, ({
  alt
}) => alt ? '0' : '32px');
const ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "StyledComponents__ButtonFront",
  componentId: "sc-1145av9-18"
})(["border:none;border-radius:50px;color:#171748;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], ({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', ({
  disabled
}) => disabled ? '.5' : '1', ({
  alt
}) => alt ? '20px' : '24px', ({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '20px' : '16px', props => props.theme.breakpoints.sm);
const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledComponents__LinkContainer",
  componentId: "sc-1145av9-19"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], ({
  large
}) => large ? '24px' : '16px', props => props.theme.breakpoints.md, ({
  large
}) => large ? '16px' : '8px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '0' : '8px');
const LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledComponents__LinkIconImg",
  componentId: "sc-1145av9-20"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], ({
  large
}) => large ? '32px' : '24px', props => props.theme.breakpoints.md, ({
  nav
}) => nav ? '16px' : '24px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '32px' : '16px');
const JournalContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "StyledComponents__JournalContainer",
  componentId: "sc-1145av9-21"
})(["display:flex;width:100%;justify-content:center;align-items:center;height:600px;overflow:hidden;border-radius:4px;"]);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "StyledComponents__Img",
  componentId: "sc-1145av9-22"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]);
const GalleryContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "StyledComponents__GalleryContainer",
  componentId: "sc-1145av9-23"
})(["min-height:100vh;justify-content:center;align-items:center;overflow:hidden;"]);
const TagList = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
  displayName: "StyledComponents__TagList",
  componentId: "sc-1145av9-24"
})(["display:flex;justify-content:space-around;padding:2rem;list-style-type:none;"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default().li.withConfig({
  displayName: "StyledComponents__Tag",
  componentId: "sc-1145av9-25"
})(["color:#ea1515;font-size:1rem;"]);
const Sprite = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledComponents__Sprite",
  componentId: "sc-1145av9-26"
})(["background-image:url(", ");background-repeat:no-repeat;background-size:contain;width:", ";height:", ";cursor:pointer;&:hover{transform:scale(1.2);}"], ({
  src
}) => src, ({
  size
}) => size ? size : '24px', ({
  size
}) => size ? size : '24px');
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledComponents__ImageContainer",
  componentId: "sc-1145av9-27"
})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,0.75),53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ", "{background-image:none;padding:0;margin-top:40px;}@media ", "{background-image:none;padding:0;margin-top:16px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md);
const MainImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "StyledComponents__MainImage",
  componentId: "sc-1145av9-28"
})(["width:100%;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
  displayName: "StyledComponents__List",
  componentId: "sc-1145av9-29"
})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ", "{margin:64px 0;}@media ", "{margin:64px 0;gap:24px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "StyledComponents__ListContainer",
  componentId: "sc-1145av9-30"
})(["display:flex;flex-direction:column;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h4.withConfig({
  displayName: "StyledComponents__ListTitle",
  componentId: "sc-1145av9-31"
})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:rgba(0,0,0,0.75);margin-bottom:8px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "StyledComponents__ListParagraph",
  componentId: "sc-1145av9-32"
})(["font-size:18px;line-height:30px;color:#171748;@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().li.withConfig({
  displayName: "StyledComponents__ListItem",
  componentId: "sc-1145av9-33"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "StyledComponents__ListIcon",
  componentId: "sc-1145av9-34"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);

/***/ })

};
;