"use strict";
(() => {
var exports = {};
exports.id = 4398;
exports.ids = [4398];
exports.modules = {

/***/ 7207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PhotoGallery)
});

;// CONCATENATED MODULE: ./posts/data/GalleryData.js
const GalleryData = [{
  id: 1,
  slug: "gallery-1",
  title: "1",
  image: "/images/photography/Fullmoon.jpg",
  description: "1",
  date: "2021-01-01"
}, {
  id: 2,
  slug: "gallery-2",
  title: "1",
  image: "/images/photography/SunSetting.jpg",
  description: "2",
  date: "2021-01-01"
}, {
  id: 3,
  slug: "gallery-3",
  title: "3",
  image: "/images/photography/StudyingThroughTheNight.jpg",
  description: "3",
  date: "2021-01-01"
}, {
  id: 4,
  slug: "gallery-4",
  title: "4",
  image: "/images/photography/Emptyroom.jpg",
  description: "4",
  date: "2021-01-01"
}, {
  id: 5,
  slug: "gallery-5",
  title: "5",
  image: "/images/photography/IMG_0055 (3).jpg",
  description: "5",
  date: "2021-01-01"
}, {
  id: 6,
  slug: "gallery-6",
  title: "6",
  image: "/images/photography/Preferred.jpg",
  description: "6",
  date: "2021-01-01"
}, {
  id: 7,
  slug: "gallery-7",
  title: "7",
  image: "/images/photography/Sunrise.jpg",
  description: "7",
  date: "2021-01-01"
}, {
  id: 8,
  slug: "gallery-8",
  title: "8",
  image: "/images/photography/IMG_0055 (2).jpg",
  description: "8",
  date: "2021-01-01"
}, {
  id: 9,
  slug: "gallery-9",
  title: "9",
  image: "/images/photography/FirstPeakMorningSunlight.jpg",
  description: "9",
  date: "2021-01-01"
}, {
  id: 10,
  slug: "gallery-10",
  title: "10",
  image: "/images/photography/StudyingThroughTheMorning.jpg",
  description: "10",
  date: "2021-01-01"
}, {
  id: 11,
  slug: "gallery-11",
  title: "11",
  image: "/images/photography/UsualHabitat.jpg",
  description: "11",
  date: "2021-01-01"
}, {
  id: 0o12,
  slug: "gallery-12",
  title: "0o12",
  image: "/images/photography/IMG_0150.jpg",
  description: "0o12",
  date: "2021-01-01"
}, // --------------------------------------------------------------------------
// --------------------------------------------------------------------------
{
  id: 12,
  slug: "gallery-12",
  title: "12",
  image: "/images/photography/ApproachingSunrise.jpg"
}, {
  id: 13,
  slug: "gallery-13",
  title: "13",
  image: "/images/photography/IsolatedPlace.jpg"
}, {
  id: 14,
  slug: "gallery-14",
  title: "14",
  image: "/images/photography/WinterEveningFullmoon.jpg"
}, {
  id: 15,
  slug: "gallery-15",
  title: "15",
  image: "/images/photography/WinterEveningFullmoon2.jpg"
}, {
  id: 16,
  slug: "gallery-16",
  title: "16",
  image: "/images/photography/FullmoonAndSunset.jpg"
}, {
  id: 17,
  slug: "gallery-17",
  title: "17",
  image: "/images/photography/QuietWeek.jpg"
}, {
  id: 18,
  slug: "gallery-18",
  title: "18",
  image: "/images/photography/AWinterBreak.jpg"
}, {
  id: 19,
  slug: "gallery-19",
  title: "19",
  image: "/images/photography/StudyingIntoTheMorning.jpg"
}, {
  id: 20,
  slug: "gallery-20",
  title: "20",
  image: "/images/photography/Emptyroom2.jpg"
}, {
  id: 21,
  slug: "gallery-21",
  title: "21",
  image: "/images/photography/IMG_0773.jpg"
}, {
  id: 22,
  slug: "gallery-22",
  title: "22",
  image: "/images/photography/FullmoonInfocus.jpg"
}, {
  id: 23,
  slug: "gallery-23",
  title: "23",
  image: "/images/photography/DarkHalls2.jpg"
}, {
  id: 24,
  slug: "gallery-24",
  title: "24",
  image: "/images/photography/DarkHalls.jpg"
}, {
  id: 25,
  slug: "gallery-25",
  title: "25",
  image: "/images/photography/MisplaceFamily.jpg"
}, {
  id: 26,
  slug: "gallery-26",
  title: "26",
  image: "/images/photography/MisplacedFamily2.jpg"
}, {
  id: 27,
  slug: "gallery-27",
  title: "27",
  image: "/images/photography/Snoopy.jpg"
}, {
  id: 28,
  slug: "gallery-28",
  title: "28",
  image: "/images/photography/Quickread.jpg"
}, {
  id: 29,
  slug: "gallery-29",
  title: "29",
  image: "/images/photography/DeadAndRed.jpg"
}, {
  id: 30,
  slug: "gallery-30",
  title: "30",
  image: "/images/photography/FirstSnow.jpg"
}, {
  id: 31,
  slug: "gallery-31",
  title: "31",
  image: "/images/photography/FirstSnow2.jpg"
}];
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Layouts/Layout.js
var Layout = __webpack_require__(2294);
// EXTERNAL MODULE: ./src/styles/StyledComponents.js
var StyledComponents = __webpack_require__(7575);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/Gallery/index.js







function PhotoGallery() {
  const router = (0,router_.useRouter)();
  const {
    0: selectedImage,
    1: setSelectedImage
  } = (0,external_react_.useState)(null);
  const {
    0: isLoaded,
    1: setIsLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: images,
    1: setImages
  } = (0,external_react_.useState)([]);
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)(null);
  const {
    0: page,
    1: setPage
  } = (0,external_react_.useState)(1);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,external_react_.useState)(false);
  const observer = (0,external_react_.useRef)(null);

  function selectImage(image) {
    setSelectedImage(image);
  }

  function handleObserver(entities) {
    const target = entities[0];

    if (target.isIntersecting) {
      setPage(page + 1);
    }
  }

  function fetchImages() {
    for (let i = 0; i < GalleryData.length; i++) {
      setImages(images => [...images, GalleryData[i]]);
    }

    setIsLoaded(true);
  }

  (0,external_react_.useEffect)(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    observer.current = new IntersectionObserver(handleObserver, options);

    if (images.length) {
      observer.current.observe(document.querySelector("#gallery-bottom"));
    }
  }, [images]);
  (0,external_react_.useEffect)(() => {
    fetchImages();
  }, [page]);
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* Layout */.A, {
    children: /*#__PURE__*/jsx_runtime_.jsx(StyledComponents/* Section */.$0, {
      nopadding: true,
      id: "PhotographyPage",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledComponents/* GalleryContainer */.l0, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(StyledComponents/* Section */.$0, {
          row: true,
          nopadding: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledComponents/* ImageSpread */.cF, {
            src: GalleryData[0].image
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledComponents/* Section */.$0, {
          flex: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(StyledComponents/* Section */.$0, {
            row: true,
            nopadding: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledComponents/* SectionTitle */.NZ, {
              main: true,
              children: "Photos"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(StyledComponents/* Section */.$0, {
            row: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledComponents/* PhotoGrid */.IB, {
              children: images.map((image, index) => {
                return /*#__PURE__*/jsx_runtime_.jsx(StyledComponents/* ImageCard */.fe, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(StyledComponents/* ImgStripe */.p, {
                    src: image.image,
                    width: image.width,
                    height: image.height,
                    onClick: () => selectImage(image)
                  })
                });
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "gallery-bottom"
          }), isLoaded && hasMore && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "loading",
            children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "Loading..."
            })
          })]
        })]
      })
    })
  });
}
/*

 return (
 <Layout >
 <Section nopadding id = "PhotographyPage" >
 <GalleryContainer >
 <Section flex >

 <Section row nopadding >
 <SectionTitle main >Photos</SectionTitle >
 </Section >

 <Section row >
 <PhotoGrid >
 {GalleryData.map(
 ( gallery ) => {
 return (
 <ImageCard >
 <ImgStripe
 src = {gallery.image}
 key = {gallery.id}
 width = {gallery.width}
 height = {gallery.height}
 // layout = "fill"
 />
 </ImageCard >
	)
	}
	)}
	</PhotoGrid >
	</Section >
	</Section >
	</GalleryContainer >
	</Section >
	</Layout >
	);
	*/

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2294], () => (__webpack_exec__(7207)));
module.exports = __webpack_exports__;

})();