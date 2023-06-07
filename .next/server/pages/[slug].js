"use strict";
(() => {
var exports = {};
exports.id = 6219;
exports.ids = [6219];
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

/***/ 467:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BackHoverLink)
/* harmony export */ });
/* harmony import */ var _components_Links_LinkStyledComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8609);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9958);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__]);
_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function BackHoverLink({
  href,
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_Links_LinkStyledComponents_js__WEBPACK_IMPORTED_MODULE_0__/* .LinkContainer */ .Ji, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__.ArrowLeftIcon, {
        width: "16",
        height: "16"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Links_LinkStyledComponents_js__WEBPACK_IMPORTED_MODULE_0__/* .StyledLink */ .Fg, {
        children: children
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Backlinks)
/* harmony export */ });
/* harmony import */ var _components_Icons_GrowthIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(445);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3056);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function Backlinks({
  backlinks
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(BacklinkContainer, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(InnerContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
        children: [backlinks.length, " Backlinks"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "grid",
        children: backlinks.map(backlink => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(BacklinkCard, {
            backlink: backlink
          }, backlink.slug);
        })
      })]
    })
  });
}
const BacklinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "Backlinks__BacklinkContainer",
  componentId: "sc-1qpnhtk-0"
})(["display:flex;flex-direction:column;font-family:var(--font-sans);background:white;color:var(--color-gray-800);margin:0 0.5rem;"]);
const InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Backlinks__InnerContainer",
  componentId: "sc-1qpnhtk-1"
})(["width:880px;max-width:100%;margin:0 auto;box-shadow:var(--box-shadow-lg);border-radius:8px;padding:1.5rem 2rem;margin-bottom:-3rem;border:1px solid var(--color-gray-100);background:white;h3{font-size:var(--font-size-md);font-weight:300;}div.grid{margin:var(--space-m) auto 0;display:grid;max-width:900px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));word-break:break-word;grid-gap:var(--space-3xs);}@media ", "{padding:var(--space-s) var(--space-xs);div.grid{padding:0 var(--space-xs);margin:var(--space-m) auto var(--space-s);}h3{margin-top:var(--space-m);}}"], _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_4__/* .breakpoints.mediaSM */ .A.mediaSM);

function BacklinkCard({
  backlink
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: backlink.slug,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledBacklinkCard, {
      children: [backlink.growthStage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Icons_GrowthIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        size: "24",
        growthStage: backlink.growthStage
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {
          children: backlink.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          children: backlink.description
        })]
      })]
    })
  }, backlink.slug);
}

const StyledBacklinkCard = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "Backlinks__StyledBacklinkCard",
  componentId: "sc-1qpnhtk-2"
})(["display:flex;flex-direction:row;padding:0 var(--space-xs) var(--space-xs) var(--space-2xs);margin:0 var(--space-xs) var(--space-xs) 0;transition:all 0.3s ease-in-out;h4{color:var(--color-gray-800);transition:all 0.3s ease-in-out;font-family:var(--font-body);font-size:var(--font-size-base);font-weight:400;line-height:var(--leading-snug);margin:0;margin-left:var(--space-xs);transition:all 0.3s ease-in-out;}svg{position:relative;top:4px;flex-shrink:0;}div{display:flex;flex-direction:column;span{font-family:var(--font-sans);color:var(--color-gray-600);font-size:var(--font-size-sm);font-weight:400;margin:var(--space-2xs) 0 0 var(--space-xs);}}&:hover{cursor:pointer;h4{color:var(--color-crimson);}}"]);

/***/ }),

/***/ 6795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InternalTooltipLink)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MISC_Tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8860);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function TooltipContent({
  title,
  description
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(PostContent, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h4", {
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      className: "description",
      children: description
    })]
  });
}

const PostContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "InternalTooltipLink__PostContent",
  componentId: "sc-13hoc8p-0"
})(["padding:var(--space-3xs);h4{margin:0 0 var(--space-3xs);font-family:var(--font-body);font-weight:500;line-height:var(--leading-snug);font-size:var(--font-size-base);}span.description{display:block;margin:var(--space-2xs) 0 var(--space-3xs);font-family:var(--font-sans);font-size:var(--font-size-sm);}"]);
function InternalTooltipLink({
  href,
  title,
  description,
  excerpt,
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_MISC_Tooltip_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    maxWidth: 420,
    content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(TooltipContent, {
      title: title,
      description: description,
      excerpt: excerpt
    }),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledContainer, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledLink, {
        internal: true,
        href: href,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
          children: children
        })
      })
    })
  });
}
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "InternalTooltipLink__StyledContainer",
  componentId: "sc-13hoc8p-1"
})(["display:inline-block;align-items:center;justify-content:center;position:relative;left:0px;top:0px;"]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "InternalTooltipLink__StyledLink",
  componentId: "sc-13hoc8p-2"
})(["cursor:pointer;position:relative;white-space:nowrap;outline:none;word-break:break-all;&:focus{outline:2px solid darkblue;border-radius:2px;}&::before{@media (min-width:550px){content:\"\";display:inline-block;transform-origin:50% 100%;background:var(--color-gray-300);transition:clip-path 0.3s,transform 0.3s cubic-bezier(0.2,1,0.8,1);position:absolute;width:100%;height:1px;top:105%;left:0;pointer-events:none;clip-path:polygon( 0% 0%,0% 100%,50% 100%,50% 0,50% 0,50% 100%,50% 100%,0 100%,100% 100%,100% 0% );}}&:hover::before{@media (min-width:550px){display:inline-block;transform:translate3d(0,3px,0) scale3d(1,2,1);background:var(--color-bright-crimson);clip-path:polygon( 0% 0%,0% 100%,50% 100%,50% 0,50% 0,50% 100%,50% 100%,0 100%,100% 100%,100% 0% );}}span{display:inline-block;white-space:normal;transition:all 0.5s cubic-bezier(0.2,1,0.8,1);word-break:break-all;color:var(--color-medium-sea-blue);text-decoration:underline;@media (min-width:550px){text-decoration:none;}}&:hover span{transform:translate3d(0,-1px,0);color:var(--color-dark-sea-blue);}"]);

/***/ }),

/***/ 5959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AssumedAudience)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function AssumedAudience({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(AssumedAudienceContainer, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      className: "label",
      children: "Assumed Audience"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      children: children
    })]
  });
}
const AssumedAudienceContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AssumedAudience__AssumedAudienceContainer",
  componentId: "sc-2nsz61-0"
})(["padding:1.5rem 1.75rem;border-radius:var(--border-radius-base);box-shadow:var(--box-shadow-sm);border:1px solid var(--color-gray-100);margin:0 -1.6rem var(--space-xs) -1.6rem;display:flex;grid-gap:var(--space-s);flex-direction:row;align-items:baseline;font-family:var(--font-body);div p{font-weight:400;margin:0;flex-shrink:unset;color:var(--color-gray-800);font-size:calc(var(--font-size-base) / 1.2);line-height:1.6;}span.label{color:var(--color-medium-sea-blue);margin-bottom:0;flex-shrink:0;font-family:var(--font-sans);font-size:var(--font-size-xs);line-height:var(--leading-loose);text-transform:uppercase;letter-spacing:0.05rem;}@media (max-width:768px){margin:0 0 var(--space-m) 0;flex-direction:column;grid-gap:var(--space-3xs);}"]);

/***/ }),

/***/ 3792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BackToTop)
/* harmony export */ });
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_0__]);
_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function BackToTop() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledBackToTop, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      tabIndex: "-1",
      onClick: () => {
        window.scrollTo(0, 0);
      },
      children: ["Back To Top", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_0__.ChevronUpIcon, {
        width: "28",
        height: "28"
      })]
    })
  });
}
const StyledBackToTop = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BackToTop__StyledBackToTop",
  componentId: "wnx0nf-0"
})(["position:fixed;bottom:0.6rem;left:0.6rem;button{display:flex;align-items:center;gap:4px;border:none;cursor:pointer;border-radius:4px;padding:4px 4px 4px 10px;background:white;font-family:var(--font-sans);font-size:var(--font-size-xs);color:var(--color-gray-300);text-transform:uppercase;letter-spacing:0.05em;font-weight:400;transition:all 0.3s ease-in-out;svg{transition:all 0.3s ease-in-out;}}button:hover{color:var(--color-bright-crimson);transform:translateY(-4px);svg{color:var(--color-sea-blue);}}@media (max-width:1100px){display:none;}"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Disclaimer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function Disclaimer({
  children,
  title
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(DisclaimerContainer, {
    children: [title ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      className: "title",
      children: title
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      className: "title",
      children: "Disclaimer"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      children: children
    })]
  });
}
const DisclaimerContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Disclaimer__DisclaimerContainer",
  componentId: "zi8767-0"
})(["padding:1.5rem 1.75rem;border-radius:var(--border-radius-base);box-shadow:var(--box-shadow-sm);border:1px solid var(--color-gray-100);margin:0 -1.6rem var(--space-xs) -1.6rem;display:flex;grid-gap:var(--space-s);flex-direction:row;align-items:baseline;font-family:var(--font-body);font-size:calc(var(--font-size-base) / 1.2);div p{font-weight:400;margin:0;font-size:calc(var(--font-size-base) / 1.2);line-height:var(--leading-loose);flex-shrink:unset;color:var(--color-gray-800);}span.title{color:var(--color-bright-crimson);margin-bottom:0;flex-shrink:0;font-family:var(--font-sans);font-size:var(--font-size-xs);line-height:var(--leading-loose);text-transform:uppercase;letter-spacing:0.05rem;}@media (max-width:768px){margin:0 0 var(--space-m) 0;flex-direction:column;grid-gap:var(--space-3xs);}"]);

/***/ }),

/***/ 1865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EditRed)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function EditRed({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(EditRedContainer, {
    children: children
  });
}
const EditRedContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "EditRed__EditRedContainer",
  componentId: "sb0688-0"
})(["color:red;opacity:30%;"]);

/***/ }),

/***/ 909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3056);


const ProseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().article.withConfig({
  displayName: "ProseWrapper",
  componentId: "sc-16el7up-0"
})(["display:grid;grid-auto-flow:columns;grid-template-columns:1fr min(72ch,100%) 1fr;& > *{grid-column:2;}counter-reset:footnote-counter;font-size:var(--font-size-base);p{font-size:var(--font-size-base);line-height:var(--leading-looser);margin-bottom:var(--space-m);@media (max-width:767px){line-height:var(--leading-loose);}}p.subtext{font-size:calc(var(--font-size-sm) * 1.1);line-height:var(--leading-loose);}h1{font-size:var(--font-size-2xl);margin:var(--space-2xl) 0 var(--space-m);@media ", "{margin:var(--space-xl) 0 var(--space-m);}}h2{font-size:var(--font-size-xl);margin:var(--space-xl) 0 var(--space-m);line-height:var(--leading-base);@media ", "{margin:var(--space-l) 0 var(--space-s);}}h2.micro{font-family:var(--font-sans);font-size:var(--font-size-sm);color:var(--color-bright-crimson);margin:0 0 var(--space-s);line-height:var(--leading-base);text-transform:uppercase;font-weight:700;letter-spacing:0.04rem;}h3{font-size:calc(var(--font-size-lg) / 1.1);font-weight:300;line-height:var(--leading-base);margin:var(--space-m) 0 var(--space-s);}h4{font-size:var(--font-size-base);font-weight:700;margin:var(--space-s) 0 var(--space-xs);}ul,ol{padding:0;margin-top:0;}ul{list-style:none;}ul > li{margin-bottom:var(--space-xs);line-height:var(--leading-looser);margin-left:2.5rem;}ul > li::before{content:\"\";display:inline-block;width:24px;clear:both;height:24px;margin-right:-1.5rem;background-image:url(\"/images/leaf-icon.svg\");background-size:contain;background-repeat:no-repeat;position:relative;top:4px;right:2.5rem;}ol > li{margin-bottom:var(--space-xs);line-height:var(--leading-looser);margin-left:2.5rem;}hr{margin:var(--space-2xl) auto;height:3px;background-color:var(--color-salmon);border:none;width:20%;@media ", "{margin:var(--space-l) auto;}}blockquote{text-align:center;& > p{text-align:center;max-width:30ch;margin:var(--space-m) auto;font-size:var(--font-size-lg);line-height:var(--leading-base);display:inline-block;}&::before,&::after{content:\"\";display:block;margin:0 auto;width:3rem;border-top:2px solid rgba(0,0,0,0.1);}padding:var(--space-m) 0rem var(--space-xl);}"], _constants_breakpoints__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.mediaSM */ .A.mediaSM, _constants_breakpoints__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.mediaSM */ .A.mediaSM, _constants_breakpoints__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.mediaSM */ .A.mediaSM);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProseWrapper);

/***/ }),

/***/ 4809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GrowthStage)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8860);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function GrowthStage({
  stage
}) {
  if (stage === "evergreen") {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Tooltip_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      maxWidth: 300,
      content: "Evergreens are ideas I've invested significant time into. They are refined, edited, and won't significantly change \u2013 aside from the occassional trimming.",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledGrowthStage, {
        children: stage
      })
    });
  } else if (stage === "budding") {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Tooltip_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      maxWidth: 300,
      content: "Buddings are ideas I've revised and worked on a bit. They're starting to grow, but still need refinement.",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledGrowthStage, {
        children: stage
      })
    });
  } else if (stage === "seedling") {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Tooltip_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      maxWidth: 300,
      content: "Seedlings are ideas I've just started that are rough, unrefined, and need some time to grow.",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledGrowthStage, {
        children: stage
      })
    });
  }
}
const StyledGrowthStage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GrowthStage__StyledGrowthStage",
  componentId: "sc-8jasky-0"
})(["display:inline-block;cursor:pointer;font-family:var(--font-sans);font-size:var(--font-size-xs);color:var(--color-gray-800);text-transform:uppercase;letter-spacing:0.05em;font-weight:bold;padding-right:var(--space-xs);"]);

/***/ }),

/***/ 8358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TableOfContents)
/* harmony export */ });
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9958);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_collapsed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var react_collapsed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_collapsed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__]);
_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function TableOfContents({
  headings
}) {
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().asPath;
  const {
    getCollapseProps,
    getToggleProps,
    isExpanded
  } = react_collapsed__WEBPACK_IMPORTED_MODULE_3___default()();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(DesktopContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Title, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("svg", {
          width: "8px",
          height: "8px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("circle", {
            r: "4",
            cx: "4",
            cy: "4",
            fill: "var(--color-sea-blue)"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {
          children: "Table of Contents"
        })]
      }), headings.length > 0 && headings.map(({
        text,
        level
      }) => {
        const link = text.toLowerCase().replace(/\s/g, "-").replace(/[.,?()]/gim, "").replace(/\*\*|__/g, "").replace(/<[^>]+>/g, "");
        const href = `${route}#${link}`;
        const filteredText = text.replace(/[\*_]/gim, "").replace(/<[^>]+>/g, "");
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(A, {
          href: href,
          level: level,
          children: filteredText
        }, text);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(MobileContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(CollapseHeader, _objectSpread(_objectSpread({
        isExpanded: isExpanded
      }, getToggleProps()), {}, {
        children: [isExpanded ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__.ArrowDownIcon, {
          width: "18",
          height: "18"
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_0__.ArrowRightIcon, {
          width: "18",
          height: "18"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {
          children: "Table of Contents"
        })]
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(CollapseContent, _objectSpread(_objectSpread({}, getCollapseProps()), {}, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: headings.length > 0 && headings.map(({
            text,
            level
          }) => {
            const link = text.toLowerCase().replace(/\s/g, "-").replace(/[.,?()]/gim, "").replace(/<[^>]+>/g, "");
            const href = `${route}#${link}`;
            const filteredText = text.replace(/[\*_]/gim, "").replace(/<[^>]+>/g, "");
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(A, {
              href: href,
              level: level,
              children: filteredText
            }, text);
          })
        })
      }))]
    })]
  });
}
const CollapseHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "TableOfContents__CollapseHeader",
  componentId: "sc-1ppsn4a-0"
})(["cursor:pointer;display:flex;align-items:center;grid-gap:0.5rem;border-bottom:1px solid var(--color-gray-100);padding-bottom:var(--space-xs);svg{color:var(--color-sea-blue);transition:all 0.3s cubic-bezier(0.2,1,0.8,1);}h4{display:inline-block;margin:0;font-size:0.96rem;color:var(--color-gray-800);font-weight:600;transition:all 0.3s cubic-bezier(0.2,1,0.8,1);}&:hover{h4{color:var(--color-medium-sea-blue);}svg{transform:", ";fill:var(--color-medium-sea-blue);}}"], ({
  isExpanded
}) => isExpanded ? "translateY(-2px)" : "translateX(3px)");
const CollapseContent = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "TableOfContents__CollapseContent",
  componentId: "sc-1ppsn4a-1"
})(["padding-bottom:var(--space-xs);margin-bottom:var(--space-s);border-bottom:1px solid var(--color-gray-100);"]);
const MobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "TableOfContents__MobileContainer",
  componentId: "sc-1ppsn4a-2"
})(["display:none;@media (max-width:1280px){display:block;margin-bottom:var(--space-xs);}"]);
const DesktopContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "TableOfContents__DesktopContainer",
  componentId: "sc-1ppsn4a-3"
})(["grid-column:3;height:0;max-width:300px;margin-left:var(--space-xl);h4{margin:0;font-size:0.96rem;color:var(--color-gray-800);transition:all 0.3s cubic-bezier(0.2,1,0.8,1);}@media (max-width:1280px){display:none;}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "TableOfContents__Title",
  componentId: "sc-1ppsn4a-4"
})(["display:flex;grid-gap:0.85rem;align-items:center;margin-top:0.5rem;"]);
const A = styled_components__WEBPACK_IMPORTED_MODULE_4___default().a.withConfig({
  displayName: "TableOfContents__A",
  componentId: "sc-1ppsn4a-5"
})(["font-family:var(--font-sans);display:block;font-size:0.96rem;padding-left:var(--space-s);margin-left:", ";margin-top:0.75rem;align-items:center;justify-items:center;cursor:pointer;transition:all 0.3s cubic-bezier(0.2,1,0.8,1);color:var(--color-gray-600);&:hover{color:var(--color-medium-sea-blue);}"], props => props.level === 2 ? 0 : `${(props.level - 2) * 24}px`);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MISC_Tooltip)
});

;// CONCATENATED MODULE: external "@tippyjs/react"
const react_namespaceObject = require("@tippyjs/react");
var react_default = /*#__PURE__*/__webpack_require__.n(react_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/tippy.js/animations/shift-away.css
var shift_away = __webpack_require__(212);
// EXTERNAL MODULE: ./node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(8933);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/MISC/Tooltip.js






const Tooltip = /*#__PURE__*/(0,external_react_.forwardRef)(({
  content,
  children,
  maxWidth
}, ref) => {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledTippy, {
    maxWidth: maxWidth || "320",
    duration: "500",
    arrow: true,
    interactive: true,
    animation: "shift-away",
    content: content,
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      ref: ref,
      children: children
    })
  });
});
const StyledTippy = external_styled_components_default()((react_default())).withConfig({
  displayName: "Tooltip__StyledTippy",
  componentId: "sc-9o91mz-0"
})(["font-family:var(--font-sans);font-size:var(--font-size-sm);line-height:var(--leading-snug);word-break:break-word;white-space:pre-wrap;padding:var(--space-3xs);margin-bottom:var(--space-3xs);background-color:white;color:var(--color-gray-800);box-shadow:var(--box-shadow-md);.tippy-arrow{color:white;}"]);
/* harmony default export */ const MISC_Tooltip = (Tooltip);

/***/ }),

/***/ 3799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Topics)
});

// EXTERNAL MODULE: ./src/components/Links/UnderlineHoverLink.js
var UnderlineHoverLink = __webpack_require__(2383);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/tools/slugifyTopic.js
function slugifyTopic(topic) {
  const slug = topic.toString().toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  return slug;
}
function deslugifyTopic(slug) {
  const topic = slug.toString().replace(/-/g, " ");
  return topic;
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/MISC/Topics.js





function Topics({
  topics
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(StyledList, {
    children: topics.sort().map(topic => {
      const slug = slugifyTopic(topic);
      return /*#__PURE__*/jsx_runtime_.jsx(StyledTag, {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: `/topics/${slug}`,
          children: /*#__PURE__*/jsx_runtime_.jsx(UnderlineHoverLink/* default */.Z, {
            href: `/topics/${slug}`,
            children: topic
          })
        })
      }, topic);
    })
  });
}
const StyledList = external_styled_components_default().ul.withConfig({
  displayName: "Topics__StyledList",
  componentId: "v9lsgr-0"
})(["list-style:none;display:flex;flex-direction:row;flex-wrap:wrap;max-width:70%;padding:0;margin-top:var(--space-xs);@media (max-width:768px){margin:var(--space-xs) 0 0 0;max-width:100%;}"]);
const StyledTag = external_styled_components_default().li.withConfig({
  displayName: "Topics__StyledTag",
  componentId: "v9lsgr-1"
})(["transition:all 0.3s ease-in-out;margin-right:var(--space-xs);margin-bottom:var(--space-3xs);font-family:var(--font-sans);font-size:var(--font-size-xs);"]);

/***/ }),

/***/ 5863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ TwitterReply)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-share"
const external_react_share_namespaceObject = require("react-share");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/constants/breakpoints.js
var breakpoints = __webpack_require__(3056);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/MISC/TwitterReply.js






const TwitterReply = ({
  title,
  url
}) => {
  const twitterHandle = "mappletons";
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledTweetReply, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Want to share?"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_share_namespaceObject.TwitterShareButton, {
      url: url,
      quote: title,
      via: twitterHandle.split("@").join(""),
      children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "40",
        height: "16",
        viewBox: "0 0 24 20",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          fillRule: "evenodd",
          d: "M24,2.96470588 C23.1,3.40941176 22.2,3.55764706 21.15,3.70588235 C22.2,3.11294118 22.95,2.22352941 23.25,1.03764706 C22.35,1.63058824 21.3,1.92705882 20.1,2.22352941 C19.2,1.33411765 17.85,0.741176471 16.5,0.741176471 C13.95,0.741176471 11.7,2.96470588 11.7,5.63294118 C11.7,6.07764706 11.7,6.37411765 11.85,6.67058824 C7.8,6.52235294 4.05,4.59529412 1.65,1.63058824 C1.2,2.37176471 1.05,3.11294118 1.05,4.15058824 C1.05,5.78117647 1.95,7.26352941 3.3,8.15294118 C2.55,8.15294118 1.8,7.85647059 1.05,7.56 C1.05,7.56 1.05,7.56 1.05,7.56 C1.05,9.93176471 2.7,11.8588235 4.95,12.3035294 C4.5,12.4517647 4.05,12.4517647 3.6,12.4517647 C3.3,12.4517647 3,12.4517647 2.7,12.3035294 C3.3,14.2305882 5.1,15.7129412 7.35,15.7129412 C5.7,17.0470588 3.6,17.7882353 1.2,17.7882353 C0.75,17.7882353 0.45,17.7882353 0,17.7882353 C2.25,19.1223529 4.8,20.0117647 7.5,20.0117647 C16.5,20.0117647 21.45,12.6 21.45,6.22588235 C21.45,6.07764706 21.45,5.78117647 21.45,5.63294118 C22.5,4.89176471 23.4,4.00235294 24,2.96470588 Z"
        })
      }), "Tell Twitter About It"]
    })]
  });
};
const StyledTweetReply = external_styled_components_default().section.withConfig({
  displayName: "TwitterReply__StyledTweetReply",
  componentId: "jyjly6-0"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;font-family:var(--font-sans);padding:0 0 var(--space-2xl);gap:var(--space-3xs);background:white;color:var(--color-gray-600);@media ", "{flex-direction:column;}svg{fill:var(--color-gray-600);transition:all 0.3s ease-in-out;margin-right:var(--space-3xs);}button{cursor:pointer;transition:all 0.3s ease-in-out;&:hover{color:var(--color-sea-blue) !important;svg{fill:var(--color-sea-blue);}}}span{text-transform:uppercase;letter-spacing:0.1em;}"], breakpoints/* breakpoints.mediaSM */.A.mediaSM);

/***/ }),

/***/ 2144:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AtlasTemplate)
/* harmony export */ });
/* harmony import */ var _components_Icons_GrowthIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(445);
/* harmony import */ var _components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(467);
/* harmony import */ var _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3792);
/* harmony import */ var _components_MDX_ProseWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(909);
/* harmony import */ var _styles_StyledPageTemplates_StyledAtlasTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4133);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9961);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layouts_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7187);
/* harmony import */ var _Links_Backlinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2251);
/* harmony import */ var _MISC_DatesFormat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8822);
/* harmony import */ var _MISC_GrowthStage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4809);
/* harmony import */ var _MISC_Topics_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3799);
/* harmony import */ var _MISC_TwitterReply_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5863);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__, _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__, _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function AtlasTemplate({
  source,
  frontMatter,
  components,
  slug,
  backlinks,
  ogImage
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Layouts_Header_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      title: frontMatter.title,
      description: frontMatter.description,
      keywords: frontMatter.topics,
      ogImage: ogImage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_styles_StyledPageTemplates_StyledAtlasTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .AtlasStyledHeaderSection */ .qM, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "above-title",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/Projects/Atlas",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            href: "/Projects/Atlas",
            children: "Atlas"
          })
        }), frontMatter.growthStage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_Icons_GrowthIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            size: "16",
            growthStage: frontMatter.growthStage
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_MISC_GrowthStage_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            stage: frontMatter.growthStage
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_styles_StyledPageTemplates_StyledAtlasTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .AtlasStyledTitleContainer */ ._7, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("h1", {
          children: frontMatter.title
        }), frontMatter.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("p", {
          children: frontMatter.description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_styles_StyledPageTemplates_StyledAtlasTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .AtlasStyledMetadata */ .$H, {
        children: [frontMatter.topics ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_MISC_Topics_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          topics: frontMatter.topics
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_MISC_DatesFormat_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          startDate: frontMatter.startDate,
          updated: frontMatter.updated
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_styles_StyledPageTemplates_StyledAtlasTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .AtlasStyledMain */ .PH, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_MDX_ProseWrapper_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, _objectSpread(_objectSpread({}, source), {}, {
          components: components
        }))
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_MISC_TwitterReply_js__WEBPACK_IMPORTED_MODULE_12__/* .TwitterReply */ .n, {
      url: `https://micmetz.github.io//${slug}/`,
      title: frontMatter.title
    }), backlinks && backlinks.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Links_Backlinks_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      backlinks: backlinks
    }) : null]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5668:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EssayTemplate)
/* harmony export */ });
/* harmony import */ var _components_Icons_GrowthIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(445);
/* harmony import */ var _components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(467);
/* harmony import */ var _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3792);
/* harmony import */ var _components_MDX_ProseWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(909);
/* harmony import */ var _styles_StyledPageTemplates_StyledEssayTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1027);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9961);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layouts_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7187);
/* harmony import */ var _Links_Backlinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2251);
/* harmony import */ var _MISC_DatesFormat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8822);
/* harmony import */ var _MISC_GrowthStage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4809);
/* harmony import */ var _MISC_TableOfContents_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8358);
/* harmony import */ var _MISC_Topics_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3799);
/* harmony import */ var _MISC_TwitterReply_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5863);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__, _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__, _MISC_TableOfContents_js__WEBPACK_IMPORTED_MODULE_11__]);
([_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__, _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__, _MISC_TableOfContents_js__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function EssayTemplate({
  source,
  frontMatter,
  components,
  slug,
  headings,
  toc,
  backlinks,
  ogImage
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Layouts_Header_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      title: frontMatter.title,
      description: frontMatter.description,
      keywords: frontMatter.topics,
      ogImage: ogImage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_styles_StyledPageTemplates_StyledEssayTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .EssayStyledHeaderSection */ .G7, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "above-title",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/Garden/Essays",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            href: "/essays",
            children: "Essays"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Icons_GrowthIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          size: "16",
          growthStage: frontMatter.growthStage
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_GrowthStage_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          stage: frontMatter.growthStage
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_styles_StyledPageTemplates_StyledEssayTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .EssayStyledTitleContainer */ .Vu, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("h1", {
          children: frontMatter.title
        }), frontMatter.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("p", {
          children: frontMatter.description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_styles_StyledPageTemplates_StyledEssayTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .EssayStyledMetadata */ .wK, {
        children: [frontMatter.topics && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_Topics_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          topics: frontMatter.topics
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_DatesFormat_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          startDate: frontMatter.startDate,
          updated: frontMatter.updated
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_styles_StyledPageTemplates_StyledEssayTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .EssayStyledMain */ .Sq, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_MDX_ProseWrapper_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [toc && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_TableOfContents_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          headings: headings
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, _objectSpread(_objectSpread({}, source), {}, {
          components: components
        }))]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_TwitterReply_js__WEBPACK_IMPORTED_MODULE_13__/* .TwitterReply */ .n, {
      url: `https://micmetz.github.io/${slug}/`,
      title: frontMatter.title
    }), backlinks.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Links_Backlinks_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      backlinks: backlinks
    }) : null]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LaborTemplate)
/* harmony export */ });
/* harmony import */ var _components_Icons_EvergreenIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3205);
/* harmony import */ var _components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(467);
/* harmony import */ var _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3792);
/* harmony import */ var _components_MDX_ProseWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(909);
/* harmony import */ var _styles_StyledPageTemplates_StyledLaborTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3957);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9961);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8290);
/* harmony import */ var _Layouts_Header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7187);
/* harmony import */ var _MISC_TwitterReply_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5863);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__, _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__, _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function LaborTemplate({
  source,
  frontMatter,
  components,
  slug,
  ogImage
}) {
  function formattedDate(date) {
    return new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Layouts_Header_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      title: frontMatter.title,
      description: frontMatter.description,
      ogImage: ogImage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_styles_StyledPageTemplates_StyledLaborTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .LaborStyledHeaderSection */ .u3, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: "above-title",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/Projects",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            href: "/Projects",
            children: "Projects"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styles_StyledPageTemplates_StyledLaborTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .LaborStyledTitleContainer */ .ef, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_7__/* .Title1 */ .wo, {
          children: frontMatter.title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_styles_StyledPageTemplates_StyledLaborTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .LaborStyledMetadata */ .cE, {
        className: "metadata",
        children: [frontMatter.topics && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
          style: {
            textTransform: "capitalize"
          },
          children: frontMatter.topics
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Icons_EvergreenIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          width: "14",
          height: "14"
        }), frontMatter.updated && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
          children: formattedDate(frontMatter.updated)
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_styles_StyledPageTemplates_StyledLaborTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .LaborStyledMain */ .YS, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_MDX_ProseWrapper_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, _objectSpread(_objectSpread({}, source), {}, {
          components: components
        }))
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_MISC_TwitterReply_js__WEBPACK_IMPORTED_MODULE_9__/* .TwitterReply */ .n, {
      url: `https://micmetz.github.io/${slug}/`,
      title: frontMatter.title
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NoteTemplate)
/* harmony export */ });
/* harmony import */ var _components_Icons_GrowthIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(445);
/* harmony import */ var _components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(467);
/* harmony import */ var _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3792);
/* harmony import */ var _components_MDX_ProseWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(909);
/* harmony import */ var _styles_StyledPageTemplates_StyledNoteTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8804);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9961);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layouts_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7187);
/* harmony import */ var _Links_Backlinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2251);
/* harmony import */ var _MISC_DatesFormat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8822);
/* harmony import */ var _MISC_GrowthStage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4809);
/* harmony import */ var _MISC_TableOfContents_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8358);
/* harmony import */ var _MISC_Topics_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3799);
/* harmony import */ var _MISC_TwitterReply_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5863);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__, _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__, _MISC_TableOfContents_js__WEBPACK_IMPORTED_MODULE_11__]);
([_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__, _components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__, _MISC_TableOfContents_js__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function NoteTemplate({
  source,
  frontMatter,
  components,
  slug,
  toc,
  headings,
  backlinks,
  ogImage
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Layouts_Header_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      title: frontMatter.title,
      description: frontMatter.description,
      keywords: frontMatter.topics,
      ogImage: ogImage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_styles_StyledPageTemplates_StyledNoteTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .NoteStyledHeaderSection */ .Rz, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "above-title",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/Notes",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Links_BackHoverLink_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            href: "/notes",
            children: "notes"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Icons_GrowthIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          size: "16",
          growthStage: frontMatter.growthStage
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_GrowthStage_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          stage: frontMatter.growthStage
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_styles_StyledPageTemplates_StyledNoteTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .NoteStyledTitleContainer */ .ef, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("h1", {
          children: frontMatter.title
        }), frontMatter.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("p", {
          children: frontMatter.description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_styles_StyledPageTemplates_StyledNoteTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .NoteStyledMetadata */ .ig, {
        children: [frontMatter.topics && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_Topics_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          topics: frontMatter.topics
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_DatesFormat_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          startDate: frontMatter.startDate,
          updated: frontMatter.updated
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_styles_StyledPageTemplates_StyledNoteTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* .NoteStyledMain */ .ts, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_MDX_BackToTop_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_MDX_ProseWrapper_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [toc && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_TableOfContents_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          headings: headings
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, _objectSpread(_objectSpread({}, source), {}, {
          components: components
        }))]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_TwitterReply_js__WEBPACK_IMPORTED_MODULE_13__/* .TwitterReply */ .n, {
      url: `https://micmetz.github.io/${slug}/`,
      title: frontMatter.title
    }), backlinks.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Links_Backlinks_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      backlinks: backlinks
    }) : null]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResponseTemplate)
/* harmony export */ });
/* harmony import */ var _components_Icons_GrowthIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(445);
/* harmony import */ var _components_Links_BackHoverLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(467);
/* harmony import */ var _components_MDX_BackToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3792);
/* harmony import */ var _components_MDX_ProseWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(909);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9961);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3056);
/* harmony import */ var _Layouts_Header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7187);
/* harmony import */ var _Links_Backlinks_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2251);
/* harmony import */ var _MISC_DatesFormat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8822);
/* harmony import */ var _MISC_GrowthStage_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4809);
/* harmony import */ var _MISC_Topics_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3799);
/* harmony import */ var _MISC_TwitterReply_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5863);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Links_BackHoverLink__WEBPACK_IMPORTED_MODULE_1__, _components_MDX_BackToTop__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Links_BackHoverLink__WEBPACK_IMPORTED_MODULE_1__, _components_MDX_BackToTop__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function ResponseTemplate({
  source,
  frontMatter,
  components,
  slug,
  backlinks,
  ogImage
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Layouts_Header_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      title: frontMatter.title,
      description: frontMatter.description,
      keywords: frontMatter.topics,
      ogImage: ogImage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(HeaderSection, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "above-title",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/Garden/Responses",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Links_BackHoverLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            href: "/Garden/Responses",
            children: "Responses"
          })
        }), frontMatter.growthStage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Icons_GrowthIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            size: "16",
            growthStage: frontMatter.growthStage
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_GrowthStage_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            stage: frontMatter.growthStage
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(TitleContainer, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("h1", {
          children: frontMatter.title
        }), frontMatter.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("p", {
          children: frontMatter.description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(Metadata, {
        children: [frontMatter.topics ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_Topics_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          topics: frontMatter.topics
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_DatesFormat_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          startDate: frontMatter.startDate,
          updated: frontMatter.updated
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StyledMain, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_MDX_BackToTop__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_MDX_ProseWrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__.MDXRemote, _objectSpread(_objectSpread({}, source), {}, {
          components: components
        }))
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MISC_TwitterReply_js__WEBPACK_IMPORTED_MODULE_13__/* .TwitterReply */ .n, {
      url: `https://micmetz.github.io/${slug}/`,
      title: frontMatter.title
    }), backlinks && backlinks.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Links_Backlinks_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      backlinks: backlinks
    }) : null]
  });
}
const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
  displayName: "ResponseTemplate__TitleContainer",
  componentId: "sc-176lm87-0"
})(["padding:var(--space-s) 0 var(--space-l);border-bottom:1px solid var(--color-tinted-cream);h1{font-size:var(--font-size-2xl);line-height:var(--leading-tighter);max-width:100%;@media screen and (max-width:425px){font-size:var(--font-size-xl);}}p{font-size:var(--font-size-md);margin:var(--space-s) 0 0 0;color:var(--color-gray-600);@media screen and (max-width:425px){font-size:var(--font-size-base);}}"]);
const HeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_6___default().header.withConfig({
  displayName: "ResponseTemplate__HeaderSection",
  componentId: "sc-176lm87-1"
})(["max-width:800px;margin:var(--space-l) auto 0;div.above-title{a,p{display:inline-block;font-family:var(--font-sans);font-size:var(--font-size-xs);text-transform:uppercase;letter-spacing:0.05em;font-weight:bold;padding-right:var(--space-xs);}p{padding-left:var(--space-2xs);}svg{position:relative;top:3px;}}@media ", "{padding:0 var(--space-xs);}"], _constants_breakpoints__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.mediaSM */ .A.mediaSM);
const Metadata = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
  displayName: "ResponseTemplate__Metadata",
  componentId: "sc-176lm87-2"
})(["justify-content:space-between;display:flex;flex-direction:row;@media (max-width:768px){flex-direction:column;text-align:left;align-items:flex-start;}"]);
const StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_6___default().main.withConfig({
  displayName: "ResponseTemplate__StyledMain",
  componentId: "sc-176lm87-3"
})(["padding:var(--space-xl) 0;background:linear-gradient(var(--color-cream) 0,white 110px);grid-column:1/4 !important;width:100%;@media (max-width:768px){padding:var(--space-xl) var(--space-xs);}"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "components": () => (/* binding */ components),
/* harmony export */   "default": () => (/* binding */ PostPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_Links_InternalTooltipLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6795);
/* harmony import */ var _components_MDX_AssumedAudience__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5959);
/* harmony import */ var _components_MDX_Disclaimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3889);
/* harmony import */ var _components_MDX_EditRed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1865);
/* harmony import */ var _components_PageTemplates_AtlasTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2144);
/* harmony import */ var _components_PageTemplates_EssayTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5668);
/* harmony import */ var _components_PageTemplates_LaborTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2322);
/* harmony import */ var _components_PageTemplates_NoteTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7886);
/* harmony import */ var _components_PageTemplates_ResponseTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1524);
/* harmony import */ var _styles_StyledTypography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8290);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4818);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1196);
/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_gsap__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_MISC_Spacer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7901);
/* harmony import */ var _tools_getHeadings_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6925);
/* harmony import */ var _tools_getOgImage_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6906);
/* harmony import */ var _tools_linkify_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5254);
/* harmony import */ var _tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3187);
/* harmony import */ var _tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PageTemplates_AtlasTemplate_js__WEBPACK_IMPORTED_MODULE_4__, _components_PageTemplates_EssayTemplate_js__WEBPACK_IMPORTED_MODULE_5__, _components_PageTemplates_LaborTemplate_js__WEBPACK_IMPORTED_MODULE_6__, _components_PageTemplates_NoteTemplate_js__WEBPACK_IMPORTED_MODULE_7__, _components_PageTemplates_ResponseTemplate_js__WEBPACK_IMPORTED_MODULE_8__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_12__]);
([_components_PageTemplates_AtlasTemplate_js__WEBPACK_IMPORTED_MODULE_4__, _components_PageTemplates_EssayTemplate_js__WEBPACK_IMPORTED_MODULE_5__, _components_PageTemplates_LaborTemplate_js__WEBPACK_IMPORTED_MODULE_6__, _components_PageTemplates_NoteTemplate_js__WEBPACK_IMPORTED_MODULE_7__, _components_PageTemplates_ResponseTemplate_js__WEBPACK_IMPORTED_MODULE_8__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















 // Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.


const components = {
  // a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally components for certain routes.
  // See the notes in README.md for more details.
  h1: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("a", {
    href: `#${props.id}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_styles_StyledTypography__WEBPACK_IMPORTED_MODULE_9__/* .Title1 */ .wo, _objectSpread({}, props))
  }),
  h2: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("a", {
    href: `#${props.id}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_styles_StyledTypography__WEBPACK_IMPORTED_MODULE_9__/* .Title2 */ .Rn, _objectSpread({}, props))
  }),
  h3: _styles_StyledTypography__WEBPACK_IMPORTED_MODULE_9__/* .Title3 */ .y$,
  h4: _styles_StyledTypography__WEBPACK_IMPORTED_MODULE_9__/* .Title4 */ .Gn,
  SmallCaps: _styles_StyledTypography__WEBPACK_IMPORTED_MODULE_9__/* .SmallCaps */ .I6,
  InternalTooltipLink: _components_Links_InternalTooltipLink__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  Tween: react_gsap__WEBPACK_IMPORTED_MODULE_15__.Tween,
  Timeline: react_gsap__WEBPACK_IMPORTED_MODULE_15__.Timeline,
  AssumedAudience: _components_MDX_AssumedAudience__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  Disclaimer: _components_MDX_Disclaimer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  PlayState: react_gsap__WEBPACK_IMPORTED_MODULE_15__.PlayState,
  Spacer: _components_MISC_Spacer_js__WEBPACK_IMPORTED_MODULE_16__/* .Spacer */ .L,
  Controls: react_gsap__WEBPACK_IMPORTED_MODULE_15__.Controls,
  EditRed: _components_MDX_EditRed__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  ButtonLink: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 1703).then(__webpack_require__.bind(__webpack_require__, 1703)), {
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Links/ButtonLink"]
    }
  }),
  Podcastiframe: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 7703).then(__webpack_require__.bind(__webpack_require__, 7703)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/Podcastiframe"]
    }
  }),
  BlockquoteCitation: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 1294).then(__webpack_require__.bind(__webpack_require__, 1294)), {
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/BlockquoteCitation"]
    }
  }),
  Subtext: _styles_StyledTypography__WEBPACK_IMPORTED_MODULE_9__/* .Subtext */ .lb,
  Accordion: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 5598).then(__webpack_require__.bind(__webpack_require__, 5598)), {
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/Accordion"]
    }
  }),
  Footnote: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 7123).then(__webpack_require__.bind(__webpack_require__, 7123)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/Footnote"]
    }
  }),
  img: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 1493).then(__webpack_require__.bind(__webpack_require__, 1493)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/Img"]
    }
  }),
  NextImage: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => Promise.all(/* import() */[__webpack_require__.e(5675), __webpack_require__.e(6859)]).then(__webpack_require__.bind(__webpack_require__, 109)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/NextImage"]
    }
  }),
  Alert: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 9487).then(__webpack_require__.bind(__webpack_require__, 9487)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/Alert"]
    }
  }),
  ResourceBook: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => Promise.all(/* import() */[__webpack_require__.e(5675), __webpack_require__.e(9090)]).then(__webpack_require__.bind(__webpack_require__, 9090)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/ResourceBook"]
    }
  }),
  Video: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 658).then(__webpack_require__.bind(__webpack_require__, 658)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/Video"]
    }
  }),
  ReferencesLink: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 1138).then(__webpack_require__.bind(__webpack_require__, 1138)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/ReferencesLink"]
    }
  }),
  a: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 4869).then(__webpack_require__.bind(__webpack_require__, 4869)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Links/TooltipLink"]
    }
  }),
  pre: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 1189).then(__webpack_require__.bind(__webpack_require__, 1189)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/CodeBlock"]
    }
  }),
  Center: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 2778).then(__webpack_require__.bind(__webpack_require__, 2778)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/Center"]
    }
  }),
  BasicImage: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 7546).then(__webpack_require__.bind(__webpack_require__, 7546)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/BasicImage"]
    }
  }),
  ResponsiveImage: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => Promise.all(/* import() */[__webpack_require__.e(7546), __webpack_require__.e(9591), __webpack_require__.e(6826)]).then(__webpack_require__.bind(__webpack_require__, 6826)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/ResponsiveImage"]
    }
  }),
  ImageFrame: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 9591).then(__webpack_require__.bind(__webpack_require__, 9591)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/ImageFrame"]
    }
  }),
  ComingSoon: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 9633).then(__webpack_require__.bind(__webpack_require__, 9633)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/ComingSoon"]
    }
  }),
  References: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 7954).then(__webpack_require__.bind(__webpack_require__, 7954)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/References"]
    }
  }),
  Draft: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 8451).then(__webpack_require__.bind(__webpack_require__, 8451)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/Draft"]
    }
  }),
  TwoColumn: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 77).then(__webpack_require__.bind(__webpack_require__, 77)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/TwoColumn"]
    }
  }),
  ThreeColumn: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 1270).then(__webpack_require__.bind(__webpack_require__, 1270)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/ThreeColumn"]
    }
  }),
  TweetEmbed: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 2480).then(__webpack_require__.bind(__webpack_require__, 2480)), {
    ssr: false,
    loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
      children: "Loading..."
    }),
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/TweetEmbed"]
    }
  }),
  IntroParagraph: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 783).then(__webpack_require__.bind(__webpack_require__, 783)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/IntroParagraph"]
    }
  }),
  SimpleCard: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 8921).then(__webpack_require__.bind(__webpack_require__, 8921)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/SimpleCard"]
    }
  }),
  LinkCard: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 3773).then(__webpack_require__.bind(__webpack_require__, 3773)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/LinkCard"]
    }
  }),
  ImageLink: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 1016).then(__webpack_require__.bind(__webpack_require__, 1016)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Links/ImageLink"]
    }
  }),
  FullWidthBackground: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 7003).then(__webpack_require__.bind(__webpack_require__, 7003)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/FullWidthBackground"]
    }
  }),
  FullWidthSection: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 5588).then(__webpack_require__.bind(__webpack_require__, 5588)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/FullWidthSection"]
    }
  }),
  NowSection: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 8078).then(__webpack_require__.bind(__webpack_require__, 8078)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/NowSection"]
    }
  }),
  TalkSlide: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => Promise.all(/* import() */[__webpack_require__.e(658), __webpack_require__.e(9398)]).then(__webpack_require__.bind(__webpack_require__, 9398)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/TalkSlide"]
    }
  }),
  ListNumber: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 7124).then(__webpack_require__.bind(__webpack_require__, 7124)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/MDX/ListNumber"]
    }
  }),
  // Unique components – used in specific essays or notes
  StickyPosition: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 8704).then(__webpack_require__.bind(__webpack_require__, 8704)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/css-position/StickyPosition"]
    }
  }),
  RelativeCSSPosition: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 9810).then(__webpack_require__.bind(__webpack_require__, 9810)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/css-position/RelativeCSSPosition"]
    }
  }),
  AbsoluteCSSPosition: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 815).then(__webpack_require__.bind(__webpack_require__, 815)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/css-position/AbsoluteCSSPosition"]
    }
  }),
  FixedCSSPosition: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 3869).then(__webpack_require__.bind(__webpack_require__, 3869)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/css-position/FixedCSSPosition"]
    }
  }),
  StaticCSSPosition: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 5183).then(__webpack_require__.bind(__webpack_require__, 5183)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/css-position/StaticCSSPosition"]
    }
  }),
  MysteriousVoid: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 7212).then(__webpack_require__.bind(__webpack_require__, 7212)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/MysteriousVoid"]
    }
  }),
  ScrollingImages: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 4891).then(__webpack_require__.bind(__webpack_require__, 4891)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/ScrollingImages"]
    }
  }),
  GsapScroller: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 4571).then(__webpack_require__.bind(__webpack_require__, 4571)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/gsap-basics/GsapScroller"]
    }
  }),
  TweenRedBigBox: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 5613).then(__webpack_require__.bind(__webpack_require__, 7966)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/gsap-basics/TweenRedBigBox"]
    }
  }),
  TweenSpinningBox: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 366).then(__webpack_require__.bind(__webpack_require__, 366)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/gsap-basics/TweenSpinningBox"]
    }
  }),
  TweenReverseSpinningBox: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 2542).then(__webpack_require__.bind(__webpack_require__, 2542)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/gsap-basics/TweenReverseSpinningBox"]
    }
  }),
  TweenBlueRedBox: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 7304).then(__webpack_require__.bind(__webpack_require__, 7304)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/gsap-basics/TweenBlueRedBox"]
    }
  }),
  MultipartIntro: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 2689).then(__webpack_require__.bind(__webpack_require__, 2689)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/MultipartIntro"]
    }
  }),
  InvisiblesFeature: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 480).then(__webpack_require__.bind(__webpack_require__, 480)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/InvisiblesFeature"]
    }
  }),
  HackyFormatting: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 6702).then(__webpack_require__.bind(__webpack_require__, 6702)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/HackyFormatting"]
    }
  }),
  MediumMaterialsMeat: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 3615).then(__webpack_require__.bind(__webpack_require__, 3615)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/MediumMaterialsMeat"]
    }
  }),
  Tools: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 5540).then(__webpack_require__.bind(__webpack_require__, 5540)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/apps/Tools"]
    }
  }),
  Hardware: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 5634).then(__webpack_require__.bind(__webpack_require__, 5634)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/apps/Hardware"]
    }
  }),
  TextvBlocks: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 2488).then(__webpack_require__.bind(__webpack_require__, 2488)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/blocks/TextvBlocks"]
    }
  }),
  DemoBlock1: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 7351).then(__webpack_require__.bind(__webpack_require__, 7351)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/blocks/DemoBlock1"]
    }
  }),
  DemoBlock2: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 5618).then(__webpack_require__.bind(__webpack_require__, 5618)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/blocks/DemoBlock2"]
    }
  }),
  DemoBlock3: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 9203).then(__webpack_require__.bind(__webpack_require__, 9203)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/blocks/DemoBlock3"]
    }
  }),
  DemoBlock4: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 6250).then(__webpack_require__.bind(__webpack_require__, 6250)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/blocks/DemoBlock4"]
    }
  }),
  LinearChars: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 8575).then(__webpack_require__.bind(__webpack_require__, 8575)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/blocks/LinearChars"]
    }
  }),
  Blocktimeline: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 8087).then(__webpack_require__.bind(__webpack_require__, 8087)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/blocks/Blocktimeline"]
    }
  }),
  BlockAges: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 1636).then(__webpack_require__.bind(__webpack_require__, 1636)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/blocks/BlockAges"]
    }
  }),
  BlockLogos: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 7115).then(__webpack_require__.bind(__webpack_require__, 7115)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/blocks/BlockLogos"]
    }
  }),
  TodoApp: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 8104).then(__webpack_require__.bind(__webpack_require__, 8104)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/direct-manipulation/TodoApp"]
    }
  }),
  DetatchedTodoApp: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(__webpack_require__, 24)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/direct-manipulation/DetatchedTodoApp"]
    }
  }),
  NoteAction: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 7966).then(__webpack_require__.bind(__webpack_require__, 6919)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/programmatic-notes/NoteAction"]
    }
  }),
  NoteTrigger: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 4858).then(__webpack_require__.bind(__webpack_require__, 4858)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/programmatic-notes/NoteTrigger"]
    }
  }),
  AIConversation: next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(() => __webpack_require__.e(/* import() */ 4756).then(__webpack_require__.bind(__webpack_require__, 4756)), {
    ssr: false,
    loadableGenerated: {
      modules: ["[slug].js -> " + "@/components/Unique/AIConversation"]
    }
  })
};
function PostPage({
  source,
  frontMatter,
  slug,
  headings,
  backlinks,
  toc,
  ogImage
}) {
  if (frontMatter.type === "note") {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_PageTemplates_NoteTemplate_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      slug: slug,
      source: source,
      toc: toc,
      frontMatter: frontMatter,
      components: components,
      backlinks: backlinks,
      headings: headings,
      ogImage: ogImage
    });
  } else if (frontMatter.type === "essay") {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_PageTemplates_EssayTemplate_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      slug: slug,
      source: source,
      toc: toc,
      frontMatter: frontMatter,
      components: components,
      backlinks: backlinks,
      headings: headings,
      ogImage: ogImage
    });
  } else if (frontMatter.type === "project") {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_PageTemplates_LaborTemplate_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      slug: slug,
      source: source,
      frontMatter: frontMatter,
      components: components,
      ogImage: ogImage
    });
  } else if (frontMatter.type === "pattern") {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_PageTemplates_AtlasTemplate_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      slug: slug,
      source: source,
      frontMatter: frontMatter,
      components: components,
      ogImage: ogImage
    });
  } else if (frontMatter.type === "response") {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_PageTemplates_ResponseTemplate_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      slug: slug,
      source: source,
      frontMatter: frontMatter,
      components: components,
      ogImage: ogImage
    });
  }
}

const getOgImagePath = properties => {
  let url = "/og-image?";
  Object.keys(properties).forEach(property => {
    if (properties[property]) {
      url += `${property}=${encodeURIComponent(properties[property])}&`;
    }
  });
  return url;
};

const getStaticProps = async ({
  params
}) => {
  const essays = fs__WEBPACK_IMPORTED_MODULE_10___default().readdirSync(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18__.ESSAYS_PATH);
  const notes = fs__WEBPACK_IMPORTED_MODULE_10___default().readdirSync(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18__.NOTES_PATH);
  const projects = fs__WEBPACK_IMPORTED_MODULE_10___default().readdirSync(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18__.PROJECTS_PATH);
  let type;

  if (projects.find(file => file.includes(params.slug))) {
    type = "project";
  } else if (essays.find(file => file.includes(params.slug))) {
    type = "essay";
  } else if (notes.find(file => file.includes(params.slug))) {
    type = "note";
  } // switch case statement to determine which file to load


  let filePath;

  switch (type) {
    case "essay":
      filePath = path__WEBPACK_IMPORTED_MODULE_14___default().join(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18__.ESSAYS_PATH, `${params.slug}.mdx`);
      break;

    case "note":
      filePath = path__WEBPACK_IMPORTED_MODULE_14___default().join(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18__.NOTES_PATH, `${params.slug}.mdx`);
      break;

    case "project":
      filePath = path__WEBPACK_IMPORTED_MODULE_14___default().join(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18__.PROJECTS_PATH, `${params.slug}.mdx`);
      break;
  }

  const source = fs__WEBPACK_IMPORTED_MODULE_10___default().readFileSync(filePath);
  const {
    content,
    data
  } = gray_matter__WEBPACK_IMPORTED_MODULE_11___default()(source);
  const toc = data?.toc || null;
  const headings = await (0,_tools_getHeadings_js__WEBPACK_IMPORTED_MODULE_20__/* .getHeadings */ .o)(content);
  const ogObject = {
    title: data.title,
    subtitle: data.description,
    postType: data.type,
    growthStage: data.growthStage,
    cover: data.cover
  };
  const ogImagePath = getOgImagePath(ogObject);
  const ogImage = await (0,_tools_getOgImage_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(ogImagePath, data.title);
  const contentWithBidirectionalLinks = (0,_tools_linkify_js__WEBPACK_IMPORTED_MODULE_21__/* .linkify */ .N)(content, data.title);
  const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_12__.serialize)(contentWithBidirectionalLinks, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [__webpack_require__(6897), __webpack_require__(4638)]
    },
    scope: data
  }); // Get backlinks
  // const backlinks =
  // PostLinks.find((post) => post.ids[0] === data.title)?.inboundLinks || [];

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      headings,
      slug: params.slug,
      toc,
      // backlinks,
      ogImage
    }
  };
};
const getStaticPaths = async () => {
  // Get slugs for all file paths passed in
  const getSlugParams = filePaths => filePaths // Remove the .MDX extension
  .map(path => path.replace(/\.mdx?$/, "")).map(slug => ({
    params: {
      slug
    }
  }));

  const notePaths = getSlugParams(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18__.noteFilePaths);
  const essayPaths = getSlugParams(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18__.essayFilePaths);
  const projectPaths = getSlugParams(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_18__.projectFilePaths); // Combine all paths into one array

  const paths = notePaths.concat(essayPaths, projectPaths, notePaths);
  return {
    paths,
    fallback: false
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$H": () => (/* binding */ AtlasStyledMetadata),
/* harmony export */   "PH": () => (/* binding */ AtlasStyledMain),
/* harmony export */   "_7": () => (/* binding */ AtlasStyledTitleContainer),
/* harmony export */   "qM": () => (/* binding */ AtlasStyledHeaderSection)
/* harmony export */ });
/* harmony import */ var _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const AtlasStyledTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "StyledAtlasTemplate__AtlasStyledTitleContainer",
  componentId: "cotvgy-0"
})(["padding:var(--space-s) 0 var(--space-l);border-bottom:1px solid var(--color-tinted-cream);h1{font-size:var(--font-size-2xl);line-height:var(--leading-tighter);max-width:100%;@media screen and (max-width:425px){font-size:var(--font-size-xl);}}p{font-size:var(--font-size-md);margin:var(--space-s) 0 0 0;color:var(--color-gray-600);@media screen and (max-width:425px){font-size:var(--font-size-base);}}"]);
const AtlasStyledHeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().header.withConfig({
  displayName: "StyledAtlasTemplate__AtlasStyledHeaderSection",
  componentId: "cotvgy-1"
})(["max-width:800px;margin:var(--space-l) auto 0;div.above-title{a,p{display:inline-block;font-family:var(--font-sans);font-size:var(--font-size-xs);text-transform:uppercase;letter-spacing:0.05em;font-weight:bold;padding-right:var(--space-xs);}p{padding-left:var(--space-2xs);}svg{position:relative;top:3px;}}@media ", "{padding:0 var(--space-xs);}"], _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.mediaSM */ .A.mediaSM);
const AtlasStyledMetadata = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "StyledAtlasTemplate__AtlasStyledMetadata",
  componentId: "cotvgy-2"
})(["justify-content:space-between;display:flex;flex-direction:row;@media (max-width:768px){flex-direction:column;text-align:left;align-items:flex-start;}"]);
const AtlasStyledMain = styled_components__WEBPACK_IMPORTED_MODULE_1___default().main.withConfig({
  displayName: "StyledAtlasTemplate__AtlasStyledMain",
  componentId: "cotvgy-3"
})(["padding:var(--space-xl) 0;background:linear-gradient(var(--color-cream) 0,white 110px);grid-column:1/4 !important;width:100%;@media (max-width:768px){padding:var(--space-xl) var(--space-xs);}"]);

/***/ }),

/***/ 1027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G7": () => (/* binding */ EssayStyledHeaderSection),
/* harmony export */   "Sq": () => (/* binding */ EssayStyledMain),
/* harmony export */   "Vu": () => (/* binding */ EssayStyledTitleContainer),
/* harmony export */   "wK": () => (/* binding */ EssayStyledMetadata)
/* harmony export */ });
/* harmony import */ var _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const EssayStyledTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "StyledEssayTemplate__EssayStyledTitleContainer",
  componentId: "sc-1adevh8-0"
})(["padding:var(--space-s) 0 var(--space-l);border-bottom:1px solid var(--color-tinted-cream);h1{font-size:var(--font-size-2xl);line-height:var(--leading-tighter);max-width:100%;@media screen and (max-width:425px){font-size:var(--font-size-xl);}}p{font-size:var(--font-size-md);margin:var(--space-s) 0 0 0;color:var(--color-gray-600);@media screen and (max-width:425px){font-size:var(--font-size-base);}}"]);
const EssayStyledHeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().header.withConfig({
  displayName: "StyledEssayTemplate__EssayStyledHeaderSection",
  componentId: "sc-1adevh8-1"
})(["max-width:800px;margin:var(--space-l) auto 0;div.above-title{a,p{display:inline-block;font-family:var(--font-sans);font-size:var(--font-size-xs);text-transform:uppercase;letter-spacing:0.05em;font-weight:bold;padding-right:var(--space-xs);}p{padding-left:var(--space-2xs);}svg{position:relative;top:3px;}}@media ", "{padding:0 var(--space-xs);}"], _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.mediaSM */ .A.mediaSM);
const EssayStyledMetadata = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "StyledEssayTemplate__EssayStyledMetadata",
  componentId: "sc-1adevh8-2"
})(["justify-content:space-between;display:flex;flex-direction:row;@media (max-width:768px){flex-direction:column;text-align:left;align-items:flex-start;}"]);
const EssayStyledMain = styled_components__WEBPACK_IMPORTED_MODULE_1___default().main.withConfig({
  displayName: "StyledEssayTemplate__EssayStyledMain",
  componentId: "sc-1adevh8-3"
})(["margin-top:var(--space-xs);padding:var(--space-xl) 0;background:linear-gradient(var(--color-cream) 0,white 110px);grid-column:1/4 !important;width:100%;@media (max-width:768px){padding:var(--space-xl) var(--space-xs);}"]);

/***/ }),

/***/ 3957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YS": () => (/* binding */ LaborStyledMain),
/* harmony export */   "cE": () => (/* binding */ LaborStyledMetadata),
/* harmony export */   "ef": () => (/* binding */ LaborStyledTitleContainer),
/* harmony export */   "u3": () => (/* binding */ LaborStyledHeaderSection)
/* harmony export */ });
/* harmony import */ var _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const LaborStyledTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "StyledLaborTemplate__LaborStyledTitleContainer",
  componentId: "sc-1ugb5im-0"
})(["padding:var(--space-xs) 0 var(--space-3xs);p{font-size:var(--font-size-md);margin:var(--space-s) 0 0 0;color:var(--color-gray-600);}"]);
const LaborStyledHeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().header.withConfig({
  displayName: "StyledLaborTemplate__LaborStyledHeaderSection",
  componentId: "sc-1ugb5im-1"
})(["max-width:800px;margin:var(--space-l) auto 0;div.above-title{a,p{display:inline-block;font-family:var(--font-sans);font-size:var(--font-size-xs);text-transform:uppercase;letter-spacing:0.05em;font-weight:bold;padding-right:var(--space-xs);}p{padding-left:var(--space-2xs);}svg{position:relative;top:3px;}}@media ", "{padding:0 var(--space-xs);}"], _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.mediaSM */ .A.mediaSM);
const LaborStyledMetadata = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "StyledLaborTemplate__LaborStyledMetadata",
  componentId: "sc-1ugb5im-2"
})(["display:flex;grid-gap:var(--space-3xs);align-items:center;"]);
const LaborStyledMain = styled_components__WEBPACK_IMPORTED_MODULE_1___default().main.withConfig({
  displayName: "StyledLaborTemplate__LaborStyledMain",
  componentId: "sc-1ugb5im-3"
})(["margin-top:var(--space-xs);padding:var(--space-xl) 0;background-color:white;background-image:linear-gradient(var(--color-cream) 0,white 110px);grid-column:1/4 !important;width:100%;@media ", "{padding:var(--space-m) var(--space-xs);}"], _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.mediaSM */ .A.mediaSM);

/***/ }),

/***/ 8804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rz": () => (/* binding */ NoteStyledHeaderSection),
/* harmony export */   "ef": () => (/* binding */ NoteStyledTitleContainer),
/* harmony export */   "ig": () => (/* binding */ NoteStyledMetadata),
/* harmony export */   "ts": () => (/* binding */ NoteStyledMain)
/* harmony export */ });
/* harmony import */ var _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const NoteStyledTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "StyledNoteTemplate__NoteStyledTitleContainer",
  componentId: "sc-1rfw0v5-0"
})(["padding:var(--space-s) 0 var(--space-l);border-bottom:1px solid var(--color-tinted-cream);h1{font-size:var(--font-size-2xl);line-height:var(--leading-tighter);max-width:100%;@media screen and (max-width:425px){font-size:var(--font-size-xl);}}p{font-size:var(--font-size-md);margin:var(--space-s) 0 0 0;color:var(--color-gray-600);@media screen and (max-width:425px){font-size:var(--font-size-base);}}"]);
const NoteStyledHeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().header.withConfig({
  displayName: "StyledNoteTemplate__NoteStyledHeaderSection",
  componentId: "sc-1rfw0v5-1"
})(["max-width:800px;margin:var(--space-l) auto 0;div.above-title{a,p{display:inline-block;font-family:var(--font-sans);font-size:var(--font-size-xs);text-transform:uppercase;letter-spacing:0.05em;font-weight:bold;padding-right:var(--space-xs);}p{padding-left:var(--space-2xs);}svg{position:relative;top:3px;}}@media ", "{padding:0 var(--space-xs);}"], _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.mediaSM */ .A.mediaSM);
const NoteStyledMetadata = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "StyledNoteTemplate__NoteStyledMetadata",
  componentId: "sc-1rfw0v5-2"
})(["justify-content:space-between;display:flex;flex-direction:row;@media (max-width:768px){flex-direction:column;text-align:left;align-items:flex-start;}"]);
const NoteStyledMain = styled_components__WEBPACK_IMPORTED_MODULE_1___default().main.withConfig({
  displayName: "StyledNoteTemplate__NoteStyledMain",
  componentId: "sc-1rfw0v5-3"
})(["margin-top:var(--space-xs);padding:var(--space-xl) 0;background:linear-gradient(var(--color-cream) 0,white 110px);grid-column:1/4 !important;width:100%;@media (max-width:768px){padding:var(--space-xl) var(--space-xs);}"]);

/***/ }),

/***/ 6925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ getHeadings)
/* harmony export */ });
async function getHeadings(source) {
  // Get each line individually, and filter out anything that
  // isn't a heading.
  const headingLines = source.split("\n").filter(line => {
    return line.match(/^###*\s/);
  }); // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'

  return headingLines.map(raw => {
    const text = raw.replace(/^#+\s/, "");
    const level = raw.match(/#/g)?.length;
    return {
      text,
      level
    };
  });
}

/***/ }),

/***/ 6906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const playwright = __webpack_require__(3447);

const {
  createHash
} = __webpack_require__(6113);

const fs = __webpack_require__(7147);
/**
	* title is only passed in for logging purposes
	*/


async function getOgImage(path, title) {
  if (false) {}

  const baseUrl = "https://micmetz.github.io";
  const url = `${baseUrl}${path}`;
  const hash = createHash("md5").update(url).digest("hex");
  const browser = await playwright.launchChromium({
    headless: true
  });
  const ogImageDir = `./public/images/og`;
  const imagePath = `${ogImageDir}/${hash}.png`;
  const publicPath = `${baseUrl}/images/og/${hash}.png`; // try {
  //   fs.statSync(imagePath);
  //   return publicPath;
  // } catch (error) {
  //   // file does not exist, so we create it
  // }
  // console.log("generating og image for", title);

  const page = await browser.newPage();
  await page.setViewportSize({
    width: 1200,
    height: 630
  });
  await page.goto(url, {
    waitUntil: "networkidle"
  });
  const buffer = await page.screenshot({
    type: "png"
  });
  await browser.close();
  fs.mkdirSync(ogImageDir, {
    recursive: true
  });
  fs.writeFileSync(imagePath, buffer);
  return publicPath;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getOgImage);

/***/ }),

/***/ 5254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ linkify)
});

;// CONCATENATED MODULE: ./src/tools/bracketPairs.js
/**
	* @param value Markdown string
	* @returns Array of index pairs for the second opening brace matched with the second closing brace
	*/
const getBracketPairs = value => {
  const bracketPairs = [];

  if (value) {
    let pointer = 0;
    let lastChar = '';
    let bracketStart = -1;
    let codeBlock = '';

    while (pointer < value.length) {
      const char = value[pointer]; // Skip matching any double brackets inside of code blocks

      if (char === '`') {
        if (value[pointer + 1] === '`' && value[pointer + 2] === '`') {
          if (codeBlock === '```') {
            codeBlock = '';
          } else {
            codeBlock = '```';
          }

          pointer += 2;
        } else {
          if (codeBlock === '`') {
            codeBlock = '';
          } else {
            codeBlock = '`';
          }
        }
      }

      if (!codeBlock) {
        if (char === '[') {
          if (lastChar !== '[[') {
            if (value[pointer - 1] === '[') {
              lastChar = '[[';
              bracketStart = pointer;
            } else {
              lastChar = '[';
              bracketStart = pointer;
            }
          }
        } else if (char === ']' && value[pointer - 1] === ']') {
          if (lastChar !== '') {
            // We have a pair
            lastChar = '';
            bracketPairs.push([bracketStart, pointer]);
            bracketStart = -1;
          }
        }
      }

      pointer++;
    }
  }

  return bracketPairs;
};
;// CONCATENATED MODULE: ./src/tools/linkify.js
// import linkMaps from "../Links.json";

/**
	* This replaces double bracketed Links [[like this one]] in the markdown for
	* JSX elements that link to the referenced blog post. It also adds a tooltip
	* to the Links in order to preview the title and an excerpt from the post
	* @param content : markdown string for a blog post
	* @param title
	* @returns transformed markdown string for blog post
	*/

function linkify(content, title) {
  if (!content) {
    return content;
  }

  const matchingBracketPairs = getBracketPairs(content);

  if (matchingBracketPairs.length < 1) {
    return content;
  } // Get all outbound Links for this post
  // const outboundLinks = linkMaps.find(
  //   (map) => map.ids[0] === title
  // )?.outboundLinks;


  let result = "";
  let previousIndex = 0; // Starts from first character of the content string
  // For each pair of brackets (link) found, append the content found before to the result,
  // then append the link itself with JSX replacing the brackets, then append the rest of
  // the markdown string until the next pair of brackets
  // matchingBracketPairs.forEach((pair) => {
  //   const opening = pair[0];
  //   const closing = pair[1];
  // const foundLinkText = content.substring(opening + 1, closing - 1);
  // const matchedOutboundLink =
  // outboundLinks &&
  // outboundLinks.find(
  //   (ol) => ol.matchedId.toLowerCase() === foundLinkText.toLowerCase()
  // );
  // if (matchedOutboundLink) {
  //   // todo: destructure title, excerpt and growthStage for your tooltip
  //   const {
  //     slug,
  //     title: matchedTitle,
  //     description: matchedDescription,
  //     // excerpt,
  //   } = matchedOutboundLink;
  //   console.log(`Excerpt: ${excerpt}`);
  //   const regEx = /<|>|\/|<.*>|SimpleCard|IntroParagraph|\*\*|_/g;
  //   const filteredExcerpt = excerpt.replace(regEx, "");
  //   console.log(`Filtered excerpt: ${filteredExcerpt}`);
  // todo: replace ordinary anchor tag for customised tooltip and internal next Link combo
  //     result += content.substring(previousIndex, opening - 1); // append content up to link
  //     result += `<InternalTooltipLink title={"${matchedTitle}"} description={"${matchedDescription}"}  href={"/${slug}"}>`; // append JSX opening tags
  //     // result += foundLinkText; // skip opening brackets, then append link content (referenced post title or alias)
  //     result += "</InternalTooltipLink>"; // append JSX closing tags
  //   } else {
  //     result += content.substring(previousIndex, closing);
  //   }
  //   previousIndex = closing + 1; // skip closing brackets and start new loop until reaching end of the bracket pairs
  // });

  const numPairs = matchingBracketPairs.length;
  const lastClosingBracket = matchingBracketPairs[numPairs - 1][1]; // Append content from last bracket pair to end of content

  result += content.substring(lastClosingBracket + 1, content.length - 1);
  return result;
}

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

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 1407:
/***/ ((module) => {

module.exports = require("gsap/ScrollTrigger");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3447:
/***/ ((module) => {

module.exports = require("playwright-aws-lambda");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("prism-react-renderer");

/***/ }),

/***/ 9123:
/***/ ((module) => {

module.exports = require("prism-react-renderer/themes/nightOwl");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 44:
/***/ ((module) => {

module.exports = require("react-collapsed");

/***/ }),

/***/ 1196:
/***/ ((module) => {

module.exports = require("react-gsap");

/***/ }),

/***/ 3662:
/***/ ((module) => {

module.exports = require("react-twitter-embed");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4638:
/***/ ((module) => {

module.exports = require("rehype-autolink-headings");

/***/ }),

/***/ 6897:
/***/ ((module) => {

module.exports = require("rehype-slug");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9958:
/***/ ((module) => {

module.exports = import("@heroicons/react/20/solid");;

/***/ }),

/***/ 2706:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline");;

/***/ }),

/***/ 291:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/solid");;

/***/ }),

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2019,623,8290,2383,1574], () => (__webpack_exec__(319)));
module.exports = __webpack_exports__;

})();