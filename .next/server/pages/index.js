"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 7796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GISData)
/* harmony export */ });
const GISData = [{
  id: 1,
  slug: "./frames/pages/alpr.html",
  title: "Oakland County ALPR",
  image: "/frames/ALPR.jpg",
  description: "Oakland County ALPR",
  date: "2021-01-01"
}, {
  id: 2,
  slug: "./frames/pages/iot.html",
  title: "IoT",
  image: "/frames/IoT.jpg",
  description: "Exposed IoT devices on the internet",
  date: "2021-01-01"
}, {
  id: 3,
  slug: "./frames/pages/camera.html",
  title: "Webcam Devices",
  image: "/frames/camera.jpg",
  description: "Exposed webcam devices on the internet",
  date: "2021-01-01"
}, {
  id: 4,
  slug: "./frames/pages/tweet.html",
  title: "Social Media",
  image: "/frames/tweet.jpg",
  description: "Twitter Response to Political Events",
  date: "2021-01-01"
}];

/***/ }),

/***/ 6725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ ProjectsData)
/* harmony export */ });
const ProjectsData = [{
  name: 'SassyBot',
  title: 'SassyBot',
  description: 'Natural language processor to detect sarcasm in text.',
  technologies: ['Python', 'NLTK', 'Scikit-learn', 'Pandas', 'Numpy', 'Matplotlib', 'TKinter'],
  demo: ' ',
  code: 'https://github.com/CarolineCody/CSCI3832_FinalProject',
  // image       :/images "/software/SassyBot.png",
  image: '/software/SassyBot.png',
  tags: ['Natural Language Processing', 'Machine Learning', 'Python'],
  date: '2023-01-01',
  id: 0
}, {
  name: 'Call Help!',
  title: 'Call Help!',
  technologies: ['JavaScript', 'Three.js', 'WebGL'],
  description: 'A 3d "finish the task" horror experience.',
  demo: 'https://webdevgroupcu.org/mime9599/DEV/Call-Help/',
  code: 'https://github.com/MicMetz/Call-Help',
  tags: ['Horror', 'Game', 'WebGL'],
  image: '/software/CallHelp2.png',
  date: '2023-01-01',
  id: 1
}, {
  name: 'ShipRekt',
  title: 'ShipRekt',
  technologies: ['JavaScript', 'Three.js', 'WebGL'],
  description: 'A 3D space shooter game.',
  demo: ' ',
  code: 'https://github.com/MicMetz/ShipRekt',
  tags: ['Survival Action', 'Game', 'WebGL'],
  image: '/software/ShipRekt.png',
  date: '2023-01-01',
  id: 2
}, {
  name: 'Ritual',
  title: 'Ritual',
  technologies: ['JavaScript', 'Three.js', 'WebGL'],
  description: 'Horror survival game.',
  demo: 'https://micmetz.github.io/Ritual/app/',
  code: 'https://github.com/MicMetz/Ritual',
  tags: ['Survival Action', 'Game', 'Horror', 'WebGL'],
  image: '/software/Ritual.png',
  date: '2023-01-01',
  id: 3
}, {
  name: 'ShipIt!',
  title: 'ShipIt!',
  technologies: ['JavaScript', 'Three.js', 'WebGL'],
  description: 'Open Sea mini score chase game.',
  demo: 'https://micmetz.github.io/ShipIt/app/index.html',
  code: 'https://github.com/MicMetz/ShipIt',
  tags: ['Game', 'Survival Action'],
  image: '/software/ShipIt.png',
  date: '2023-01-01',
  id: 4
}, {
  name: 'SpyderHound',
  title: 'SpyderHound',
  technologies: ['Python', 'Tkinter', 'PyTorch', 'Scikit-Learn', 'Spyder'],
  description: 'A machine learning tool for data analysis of scraped NLP data.',
  demo:
  /* "../projects/spyderhound" */
  '/',
  code: 'https://github.com/MicMetz/SpyderHound',
  tags: ['Desktop Application', 'Experiment'],
  image: '/software/SpyderhoundSplash.png',
  date: '2023-01-01',
  id: 5
}, {
  name: 'BustedOS',
  title: 'BustedOS',
  technologies: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP'],
  description: 'A linux terminal simulation that allows the user to input a selection of commands and see a simulated response.',
  demo: 'https://micmetz.github.io/BustedOS/',
  code: 'https://github.com/MicMetz/BustedOS',
  tags: ['Web Application', 'Experiment', 'Web Development'],
  image: '/software/BustedOS.png',
  date: '2023-06-03',
  id: 6
}];

/***/ }),

/***/ 8776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ Readings)
/* harmony export */ });
/**
 Template Format:

 (1) id: number,

 (2) header: {
    title: string,
    subtitle: string || null
  },

 (3) author: string,

 (4) date: Date || null,

 (5) publisher: string || null,

 (6) cover: url,

 (7) description: string[] || null,

 (8) chapters: { Object[ { title: string, subtitle: string, description?: string[] || null } ] }


	*/
const Readings = [{
  id: 1,
  header: {
    title: 'Kill Anything That Moves',
    subtitle: 'The Real American War in Vietnam'
  },
  author: 'Nick Turse',
  date: Date.parse('2013-01-15'),
  publisher: 'Picador',
  cover: '/library/KillAnythingThatMoves.jpg',
  description: ['Based on classified documents and first-person interviews, a startling history of the American war on Vietnamese civilians. \n\n', 'The American Empire Project \n\n', 'Winner of the Ridenhour Prize for Reportorial Distinction \n\n\n', 'Americans have long been taught that events such as the notorious My Lai massacre were isolated incidents in the Vietnam War, carried out by \"a few bad apples.\" But as award-winning journalist and historian Nick Turse demonstrates in this groundbreaking investigation, violence against Vietnamese noncombatants was not at all exceptional during the conflict. Rather, it was pervasive and systematic, the predictable consequence of official orders to \"kill anything that moves.\" \n\n', 'Drawing on more than a decade of research in secret Pentagon files and extensive interviews with American veterans and Vietnamese survivors, Turse reveals for the first time how official policies resulted in millions of innocent civilians killed and wounded. In shocking detail, he lays out the workings of a military machine that made crimes in almost every major American combat unit all but inevitable. Kill Anything That Moves takes us from archives filled with Washington\'s long-suppressed war crime investigations to the rural Vietnamese hamlets that bore the brunt of the war; from boot camps where young American soldiers learned to hate all Vietnamese to bloodthirsty campaigns like Operation Speedy Express, in which a general obsessed with body counts led soldiers to commit what one participant called \"a My Lai a month.\" \n\n', 'Thousands of Vietnam books later, Kill Anything That Moves, devastating and definitive, finally brings us face-to-face with the truth of a war that haunts Americans to this day. \n\n'],
  link: 'https://us.macmillan.com/books/9781250045065/killanythingthatmoves',
  tags: [{
    name: 'Amazon',
    link: 'http://www.amazon.com/Kill-Anything-That-Moves-American/dp/1250045061/ref=sr_1_1?ie=UTF8&qid=1452120004&sr=8-1&keywords=kill+anything+that+moves'
  }, {
    name: 'Author Biography',
    link: 'https://theintercept.com/staff/nick-turse/'
  }],
  chapters: [{
    chapter: 1,
    chapterTitle: 'The Massacre at Trieu Ai',
    pages: '1-17'
  }, {
    chapter: 2,
    chapterTitle: 'A System of Suffering',
    pages: '18-46'
  }, {
    chapter: 3,
    chapterTitle: 'Overkill',
    pages: '47-72'
  }, {
    chapter: 4,
    chapterTitle: 'A litany of atrocities',
    pages: '73-108'
  }, {
    chapter: 5,
    chapterTitle: 'The bummer, the \'Gook-Hunting\' General, and the Butcher of the Delta',
    pages: '109-135'
  }, {
    chapter: 6,
    chapterTitle: 'Where Have All the War Crimes Gone?',
    pages: '136-168'
  }]
}, {
  id: 2,
  header: {
    title: 'We\'ve Got People',
    subtitle: 'From Jesse Jackson to AOC, the End of Big Money and the Rise of a Movement'
  },
  author: 'Ryan Grim',
  date: Date.parse('May 23, 2019'),
  publisher: 'Strong Arm Press',
  cover: '/library/WeGotPeople.jpg',
  description: ['Alexandria Ocasio-Cortez may seem like she came from nowhere, but the movement that propelled her to office – and to global political stardom – has been building for 30 years. \n\n' + 'We’ve Got People is the story of that movement, which first exploded into public view with the largely forgotten presidential run of the Rev. Jesse Jackson, a campaign that came dangerously close to winning. \n\n' + 'With the party and the nation at a crossroads, this timely and original book offers new insight into how we’ve gotten where we are – and where we\'re headed. \n\n\n', 'Ryan Grim is The Intercept’s D.C. Bureau Chief and the host of the podcast Deconstructed. He authors the newsletter Bad News and was previously the Washington bureau chief for HuffPost, where he led a team that was twice a finalist for the Pulitzer Prize, and won once.\n', 'He edited and contributed reporting to groundbreaking investigative project on heroin treatment that not only changed federal and state laws,' + ' but also shifted the culture of the recovery industry. The story, by Jason Cherkis, was a Pulitzer finalist and won a Polk Award.\n\n' + 'He has been a staff reporter for Politico and the Washington City Paper and is a co-host of the show Counter Points. He is the author of the books “We’ve Got People” (2019) and “This Is Your Country on Drugs” (2009).'],
  link: 'https://www.c-span.org/video/?462677-1/weve-people',
  tags: [{
    name: 'C-Span Talk',
    link: 'https://www.amazon.com/Weve-Got-People-Jackson-Movement/dp/1947492381'
  }, {
    name: 'Author Biography',
    link: 'https://theintercept.com/staff/ryangrim/'
  }],
  chapters: []
}, {
  id: 3,
  header: {
    title: 'White Malice',
    subtitle: 'The CIA and the Covert Recolonization of Africa'
  },
  author: 'Susan Williams',
  date: Date.parse('2022-01-01'),
  publisher: 'Public Affairs',
  cover: '/library/WhiteMalice.jpg',
  description: ['A revelatory new history of post-colonial African independence movements shows how they were systematically undermined by one nation: the US. This is the untold story of how, over a few vital years, African Independence was strangled at birth. \n\n', 'In 1958 in Accra, Ghana, the Hands Off Africa conference brought together the leading figures of African independence in a public show of political strength and purpose. It was inspired by the example of Ghana itself which, under the charismatic leadership of Kwame Nkrumah, had just thrown off the British colonial yoke - the first African nation to do so. It was moment heady with promise for independence movements across Africa, and for all those who believed colonialism was a moral aberration. \n\n', 'Among the supporters of African independence were some of the leading figures of the American Civil Rights movement. Malcolm X was in Accra and Martin Luther King used Nkrumah\'s speech as the basis for his own "Free At Last" speech, so clear were the parallels between their own struggle for political equality in the US with that of the African nations. W. E. B. Du Bois moved to Ghana, inspired by the future of independent Africa. Yet among the many official messages of support received by the conference the United States was conspicuously quiet, despite its historic and public opposition to colonialism. Vice President Nixon did attend the celebrations in Ghana and asked a group of black people, "How does it feel to be free?"They answered: "We wouldn\'t know. We\'re from Alabama". \n\n', 'The conference was also attended by a slew of strange societies, many of which were fronts, and behind them was the CIA. The CIA was in favor of the end of the British Empire but a pan-African independence movement, one susceptible to Soviet entreaties, looked like a security threat. Through original research and unparalleled insight, Susan Williams reveals how the CIA\'s baleful influence was felt from South Africa to the Congo as the agency prepared to move in as Africa\'s colonizers moved out. \n\n'],
  link: 'https://www.hachettebookgroup.com/titles/susan-williams/white-malice/9781541768284/?lens=publicaffairs',
  tags: [],
  chapters: [{
    chapter: 1,
    chapterTitle: 'The United States and Africa',
    pages: ''
  }, {
    chapter: 2,
    chapterTitle: 'The CIA',
    pages: ''
  }, {
    chapter: 3,
    chapterTitle: 'African Jazz',
    pages: ''
  }, {
    chapter: 4,
    chapterTitle: 'America and Africa',
    pages: ''
  }, {
    chapter: 5,
    chapterTitle: 'Independance Cha Cha',
    pages: ''
  }, {
    chapter: 6,
    chapterTitle: 'YQPROP',
    pages: ''
  }, {
    chapter: 7,
    chapterTitle: 'The Global Game',
    pages: ''
  }, {
    chapter: 8,
    chapterTitle: 'Carrot and Stick',
    pages: ''
  }, {
    chapter: 9,
    chapterTitle: 'The Turning Point',
    pages: ''
  }, {
    chapter: 10,
    chapterTitle: 'The Seeds are Sown',
    pages: ''
  }, {
    chapter: 11,
    chapterTitle: 'Dark Days',
    pages: ''
  }]
}];

/***/ }),

/***/ 2188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BookCard)
/* harmony export */ });
/* harmony import */ var _components_Links_ExternalHoverLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9284);
/* harmony import */ var _components_Links_LinkStyledComponents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8609);
/* harmony import */ var _styles_StyledCardComponents_BookStyled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4696);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9958);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__]);
_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function BookCard({
  small,
  cover,
  title,
  subtitle,
  author,
  link
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Links_LinkStyledComponents_js__WEBPACK_IMPORTED_MODULE_1__/* .HoverLink */ .EU, {
    style: {
      cursor: "pointer"
    },
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles_StyledCardComponents_BookStyled_js__WEBPACK_IMPORTED_MODULE_2__/* .StyledBookCard */ .e, {
      small: small,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_Links_ExternalHoverLink_js__WEBPACK_IMPORTED_MODULE_0__/* .ExternalHoverLink */ .Y, {
        small: small,
        children: ["View further details", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.ArrowTopRightOnSquareIcon, {
          width: "18",
          height: "18",
          style: {
            position: "relative",
            top: "3px"
          }
        })]
      }), cover && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles_StyledCardComponents_BookStyled_js__WEBPACK_IMPORTED_MODULE_2__/* .BookImageWrapper */ .b, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
          src: cover,
          alt: title,
          width: 230,
          height: 345
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [title, !small && subtitle && `: ${subtitle}`]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          className: "metadata",
          children: author
        })]
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2090:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProjectCard)
/* harmony export */ });
/* harmony import */ var _components_Icons_EvergreenIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3205);
/* harmony import */ var _components_Links_ExternalHoverLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9284);
/* harmony import */ var _components_Links_LinkStyledComponents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8609);
/* harmony import */ var _styles_StyledCardComponents_ProjectStyled_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9958);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__]);
_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function ProjectCard({
  slug,
  cover,
  title,
  date,
  topics
}) {
  function formattedDate(date) {
    return new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long"
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Links_LinkStyledComponents_js__WEBPACK_IMPORTED_MODULE_2__/* .HoverLink */ .EU, {
    style: {
      cursor: "pointer"
    },
    href: `/${slug}`,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles_StyledCardComponents_ProjectStyled_js__WEBPACK_IMPORTED_MODULE_3__/* .StyledProjectCard */ .Pg, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Links_ExternalHoverLink_js__WEBPACK_IMPORTED_MODULE_1__/* .ExternalHoverLink */ .Y, {
          children: ["View further details", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__.ArrowTopRightOnSquareIcon, {
            width: "18",
            height: "18",
            style: {
              position: "relative",
              top: "3px"
            }
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles_StyledCardComponents_ProjectStyled_js__WEBPACK_IMPORTED_MODULE_3__/* .ProjectImageWrapper */ .$R, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            src: cover,
            alt: title,
            width: 300,
            height: 225
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles_StyledCardComponents_ProjectStyled_js__WEBPACK_IMPORTED_MODULE_3__/* .ProjectMetadataContainer */ .UO, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h3", {
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "metadata",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              children: formattedDate(date)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Icons_EvergreenIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
              width: "14",
              height: "14"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              children: topics
            })]
          })]
        })]
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ExternalHoverLink)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ExternalHoverLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ExternalHoverLink",
  componentId: "sc-19lo0kj-0"
})(["position:absolute;top:35%;left:", ";transform-origin:center;z-index:1;font-family:var(--font-sans);background:white;color:var(--color-gray-800);padding:var(--space-3xs) var(--space-2xs);border-radius:var(--border-radius-base);box-shadow:var(--box-shadow-md);opacity:0%;transition:opacity 0.3s ease-in-out;"], props => props.small ? "10%" : "18%");

/***/ }),

/***/ 4256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Links_UnderlineHoverLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2383);
/* harmony import */ var _styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8290);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7575);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









const Headshot = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(LeftSection, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_4__/* .SectionTitle */ .NZ, {
      main: true,
      center: true,
      children: ["Hi.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), "My name is", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), "Michael."]
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_4__/* .SectionText */ .r4, {
    children: ["As of right now, I'm studying computer science at the University of Colorado at Boulder (CU Boulder). Before, and not too long ago, I was studying Sociology and Information Science focused student at multiple New York universities over a few years.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_1__/* .SmallTitle2 */ .j3, {
      initial: {
        opacity: 0,
        x: -50
      },
      animate: {
        opacity: 1,
        x: 0
      },
      transition: {
        delay: 0.5,
        duration: 1
      },
      children: ["For more, check out my ", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Links_UnderlineHoverLink_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        href: "/About",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
          children: "bio page"
        })
      }), " ", "."]
    })]
  })]
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Headshot);
const LeftSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Headshot__LeftSection",
  componentId: "sc-1uo6kcz-0"
})(["max-width:calc(100% - 100px);height:fit-content;@media ", "{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ", "{width:100%;display:flex;flex-direction:column;margin:0 auto;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);

/***/ }),

/***/ 764:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_Cards_AtlasCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7730);
/* harmony import */ var _components_Cards_BookCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2188);
/* harmony import */ var _components_Cards_EssayCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3124);
/* harmony import */ var _components_Cards_ProjectCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2090);
/* harmony import */ var _components_Cards_NoteCard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4736);
/* harmony import */ var _components_Icons_GrowthIcon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(445);
/* harmony import */ var _components_Links_LinkStyledComponents_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8609);
/* harmony import */ var _styles_StyledCardComponents_IndexNoteStyled_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2281);
/* harmony import */ var _styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7575);
/* harmony import */ var _styles_StyledSectionComponents_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(175);
/* harmony import */ var _tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3187);
/* harmony import */ var _tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9958);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9872);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_icons_di__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _posts_data_GISData_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7796);
/* harmony import */ var _posts_data_ProjectsData_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6725);
/* harmony import */ var _posts_data_Readings_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8776);
/* harmony import */ var _components_Layouts_Layout_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2294);
/* harmony import */ var _components_MISC_Headshot_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4256);
/* harmony import */ var _components_MISC_Spacer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7901);
/* harmony import */ var _styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(8290);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Cards_BookCard_js__WEBPACK_IMPORTED_MODULE_1__, _components_Cards_ProjectCard_js__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__]);
([_components_Cards_BookCard_js__WEBPACK_IMPORTED_MODULE_1__, _components_Cards_ProjectCard_js__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






























const collection = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren"
    }
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};
const itemAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};
function Index({
  sortedEssays: essays,
  sortedNotes: notes,
  sortedProjects: projects,
  sortedResponses: responses
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((next_head__WEBPACK_IMPORTED_MODULE_15___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("title", {
        children: "Michael Metz | Portfolio"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_components_Layouts_Layout_js__WEBPACK_IMPORTED_MODULE_23__/* .Layout */ .A, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("header", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10vh",
          marginBottom: "10vh"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .Title1 */ .wo, {
          initial: {
            opacity: 0,
            x: -50
          },
          animate: {
            opacity: 1,
            x: 0
          },
          transition: {
            delay: 0.2,
            duration: 1
          },
          style: {
            marginTop: "var(--space-m)",
            maxWidth: "1100px"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .Section */ .$0, {
            grid: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_MISC_Headshot_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {})
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion.section, {
        initial: {
          opacity: 0,
          x: -50
        },
        animate: {
          opacity: 1,
          x: 0
        },
        transition: {
          delay: 0.7,
          duration: 1
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .Title2 */ .Rn, {
          style: {
            fontSize: "var(--font-size-2xl)"
          },
          children: "Writings"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .Subheader */ .fi, {
          children: "A collection of essays, notes, and responses"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_components_Links_LinkStyledComponents_js__WEBPACK_IMPORTED_MODULE_6__/* .ReadmoreLink */ .aT, {
          href: "/Garden",
          children: ["Learn more", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__.ArrowRightIcon, {
            width: "18",
            height: "18"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_MISC_Spacer_js__WEBPACK_IMPORTED_MODULE_25__/* .Spacer */ .L, {
          size: "medium"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledSectionComponents_js__WEBPACK_IMPORTED_MODULE_9__/* .ArchiveSection */ .X, {
          variants: collection,
          initial: "hidden",
          animate: "visible",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("section", {
            style: {
              gridArea: "essays"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {
              href: "/Garden/Essays",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("a", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .SectionHeader */ .M$, {
                  children: ["Essays", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__.ArrowRightIcon, {
                    width: "18",
                    height: "18"
                  })]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .Subheader */ .fi, {
              children: "Opinionated, longform narrative writing with an agenda"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gridGap: "var(--space-2xs)"
              },
              children: essays.map((essay, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_Cards_EssayCard_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                id: essay.slug,
                variants: itemAnimation,
                slug: essay.slug,
                cover: essay.data.cover,
                title: essay.data.title,
                growthStage: essay.data.growthStage,
                date: essay.data.updated
              }, essay.slug))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("section", {
            style: {
              gridArea: "notes",
              marginLeft: "2.4rem"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {
              href: "/Garden/Notes",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("a", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .SectionHeader */ .M$, {
                  children: ["Notes", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__.ArrowRightIcon, {
                    width: "18",
                    height: "18"
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .Subheader */ .fi, {
              children: ["Short, ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("i", {
                children: "'concise'"
              }), ", and to the point"]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
              style: {},
              children: notes.slice(0, 12).map(note => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {
                href: `/${note.slug}`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("a", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledCardComponents_IndexNoteStyled_js__WEBPACK_IMPORTED_MODULE_7__/* .IndexNoteStyled */ .h, {
                    children: [note.data.growthStage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_Icons_GrowthIcon_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                      growthStage: note.data.growthStage
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("h3", {
                      children: note.data.title
                    })]
                  })
                })
              }, note.slug))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("section", {
            style: {
              gridArea: "books"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {
              href: "https://micmetz.github.io/library/",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("a", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .SectionHeader */ .M$, {
                  children: ["Books", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__.ArrowRightIcon, {
                    width: "18",
                    height: "18"
                  })]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .Subheader */ .fi, {
              children: "Books I\u2019ve read and books I like the idea of having read."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gridGap: "var(--space-m)"
              },
              children: _posts_data_Readings_js__WEBPACK_IMPORTED_MODULE_22__/* .Readings.slice */ .o.slice(0, 8).map((book, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_Cards_BookCard_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                small: true,
                subtitle: book.header.subtitle,
                cover: book.cover,
                title: book.header.title,
                author: book.author,
                link: book.link
              }, i))
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion.section, {
        initial: {
          opacity: 0,
          x: -50
        },
        animate: {
          opacity: 1,
          x: 0
        },
        transition: {
          delay: 0.7,
          duration: 1
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_MISC_Spacer_js__WEBPACK_IMPORTED_MODULE_25__/* .Spacer */ .L, {
          size: "3xlarge"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .SectionTitle */ .NZ, {
          children: "Capabilities"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .SectionText */ .r4, {
          children: "For about 2 years now, I've been developing a steady addiction to 3D graphics, and game development."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .List */ .aV, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListItem */ .HC, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("picture", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_19__.DiReact, {
                size: "3px"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListContainer */ .Vm, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListTitle */ .AO, {
                children: "Web Development"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListParagraph */ .hy, {})]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListItem */ .HC, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("picture", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_19__.DiFirebase, {
                size: "3px"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListContainer */ .Vm, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListTitle */ .AO, {
                children: "Database Management"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListParagraph */ .hy, {})]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListItem */ .HC, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("picture", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_icons_di__WEBPACK_IMPORTED_MODULE_19__.DiZend, {
                size: "3px"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListContainer */ .Vm, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListTitle */ .AO, {
                children: "Computer Graphics"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledComponents_js__WEBPACK_IMPORTED_MODULE_8__/* .ListParagraph */ .hy, {})]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_components_Links_LinkStyledComponents_js__WEBPACK_IMPORTED_MODULE_6__/* .ReadmoreLink */ .aT, {
          href: "/Resume",
          children: ["Learn more", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__.ArrowRightIcon, {
            width: "18",
            height: "18"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_MISC_Spacer_js__WEBPACK_IMPORTED_MODULE_25__/* .Spacer */ .L, {
          size: "3xlarge"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion.section, {
        initial: {
          opacity: 0,
          x: -50
        },
        animate: {
          opacity: 1,
          x: 0
        },
        transition: {
          delay: 0.7,
          duration: 1
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .Title2 */ .Rn, {
          style: {
            fontSize: "var(--font-size-2xl)"
          },
          children: "Projects"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .Subheader */ .fi, {
          children: "Projects I\u2019ve worked on."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_components_Links_LinkStyledComponents_js__WEBPACK_IMPORTED_MODULE_6__/* .ReadmoreLink */ .aT, {
          href: "/Project",
          children: ["Learn more", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__.ArrowRightIcon, {
            width: "18",
            height: "18"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_MISC_Spacer_js__WEBPACK_IMPORTED_MODULE_25__/* .Spacer */ .L, {
          size: "medium"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledSectionComponents_js__WEBPACK_IMPORTED_MODULE_9__/* .ProjectsSection */ .A, {
          variants: collection,
          initial: "hidden",
          animate: "visible",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("section", {
            style: {
              gridArea: "technology"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {
              href: "/Projects/technology",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("a", {
                href: "/Projects/technology",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .SectionHeader */ .M$, {
                  children: ["Technology", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__.ArrowRightIcon, {
                    width: "18",
                    height: "18"
                  })]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .Subheader */ .fi, {
              children: "Software and hardware projects I\u2019ve worked on."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gridGap: "var(--space-m)"
              },
              children: _posts_data_ProjectsData_js__WEBPACK_IMPORTED_MODULE_21__/* .ProjectsData.map */ .m.map((project, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_Cards_ProjectCard_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                slug: project.code,
                title: project.title,
                cover: project.image,
                date: project.date
              }, i))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("section", {
            style: {
              gridArea: "atlas",
              marginLeft: "2.4rem"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {
              href: "/Projects/Atlas",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("a", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .SectionHeader */ .M$, {
                  children: ["Atlas", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__.ArrowRightIcon, {
                    width: "18",
                    height: "18"
                  })]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_styles_StyledTypography_js__WEBPACK_IMPORTED_MODULE_26__/* .Subheader */ .fi, {
              children: "Design responses gathered from my own observations and research."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
              style: {},
              children: _posts_data_GISData_js__WEBPACK_IMPORTED_MODULE_20__/* .GISData.map */ .Z.map((visual, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_Cards_AtlasCard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
                slug: visual.slug,
                title: visual.title,
                date: visual.date
              }, i))
            })]
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_MISC_Spacer_js__WEBPACK_IMPORTED_MODULE_25__/* .Spacer */ .L, {
        size: "medium"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_MISC_Spacer_js__WEBPACK_IMPORTED_MODULE_25__/* .Spacer */ .L, {})]
    })]
  });
}
;
function getStaticProps() {
  // Get all essay posts
  let essays = _tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_10__.essayFilePaths.map(filePath => {
    const source = fs__WEBPACK_IMPORTED_MODULE_13___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_17___default().join(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_10__.ESSAYS_PATH, filePath));
    const {
      content,
      data
    } = gray_matter__WEBPACK_IMPORTED_MODULE_14___default()(source);
    const slug = filePath.replace(/\.mdx$/, "");
    return {
      content,
      data,
      slug,
      filePath
    };
  }); // Filter essays for featured property

  const filteredEssays = essays.filter(essay => essay.data.featured === true).slice(0, 4); // Sort filtered essays by date

  const sortedEssays = filteredEssays.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  }); // Get all note posts

  let notes = _tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_10__.noteFilePaths.map(filePath => {
    const source = fs__WEBPACK_IMPORTED_MODULE_13___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_17___default().join(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_10__.NOTES_PATH, filePath));
    const {
      content,
      data
    } = gray_matter__WEBPACK_IMPORTED_MODULE_14___default()(source);
    const slug = filePath.replace(/\.mdx?$/, "");
    return {
      content,
      data,
      slug,
      filePath
    };
  }); // Sort notes in reverse order by date

  const sortedNotes = notes.sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });
  let projects = _tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_10__.projectFilePaths.map(filePath => {
    const source = fs__WEBPACK_IMPORTED_MODULE_13___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_17___default().join(_tools_mdxUtils_js__WEBPACK_IMPORTED_MODULE_10__.PROJECTS_PATH, filePath));
    const {
      content,
      data
    } = gray_matter__WEBPACK_IMPORTED_MODULE_14___default()(source);
    const slug = filePath.replace(/\.mdx?$/, "");
    return {
      content,
      data,
      slug,
      filePath
    };
  }); // Sort projects by date

  const sortedProjects = projects.slice(0, 4).sort((a, b) => {
    return new Date(b.data.updated) - new Date(a.data.updated);
  });
  const allPosts = [...essays, ...notes, ...projects];
  return {
    props: {
      sortedEssays,
      sortedNotes,
      sortedProjects
    }
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ BookImageWrapper),
/* harmony export */   "e": () => (/* binding */ StyledBookCard)
/* harmony export */ });
/* harmony import */ var _components_Links_ExternalHoverLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9284);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const BookImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BookStyled__BookImageWrapper",
  componentId: "sc-1jfdgrv-0"
})(["display:grid;place-items:baseline;max-width:300px;max-height:450px;"]);
const StyledBookCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BookStyled__StyledBookCard",
  componentId: "sc-1jfdgrv-1"
})(["display:flex;position:relative;top:0;left:0;flex-direction:column;transition:all 0.3s ease-in-out;margin:1em 1em 1em 0;padding:", ";img{transition:all 0.3s ease-in-out;border-radius:var(--border-radius-base);box-shadow:var(--box-shadow-sm);border:1px solid var(--color-tinted-cream);}div{transition:all 0.3s ease-in-out;}div p{transition:all 0.3s ease-in-out;margin:var(--space-2xs) 0 var(--space-3xs) 0;line-height:var(--leading-base);color:var(--color-black);}&:hover{img{box-shadow:var(--box-shadow-lg);transform:scale3d(1.02,1.02,1.02);opacity:20%;}p{color:var(--color-crimson);}div{transform:translateY(4px);}", "{opacity:100%;}}"], props => props.small ? "0 0 var(--space-xs) 0" : "0 var(--space-3xs) var(--space-l) var(--space-3xs)", _components_Links_ExternalHoverLink_js__WEBPACK_IMPORTED_MODULE_0__/* .ExternalHoverLink */ .Y);

/***/ }),

/***/ 2281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ IndexNoteStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const IndexNoteStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "IndexNoteStyled",
  componentId: "bv67d1-0"
})(["display:flex;padding:var(--space-xs) 0 1.2rem;border-bottom:1px solid var(--color-tinted-cream);transition:all 0.3s ease-in-out;svg{position:relative;top:5px;flex-shrink:0;}h3{color:var(--color-gray-800);transition:all 0.3s ease-in-out;font-family:var(--font-body);font-size:var(--font-size-base);font-weight:400;line-height:var(--leading-snug);margin-left:var(--space-xs);transition:all 0.3s ease-in-out;}&:hover{border-bottom:1px solid var(--color-sea-blue);h3{color:var(--color-crimson);}transform:scale3d(1.02,1.02,1.02);}"]);

/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$R": () => (/* binding */ ProjectImageWrapper),
/* harmony export */   "Pg": () => (/* binding */ StyledProjectCard),
/* harmony export */   "UO": () => (/* binding */ ProjectMetadataContainer)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const ProjectImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ProjectStyled__ProjectImageWrapper",
  componentId: "odm6np-0"
})(["display:grid;place-content:center;max-width:450px;max-height:338px;"]);
const ProjectMetadataContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ProjectStyled__ProjectMetadataContainer",
  componentId: "odm6np-1"
})(["display:flex;flex-direction:column;margin-top:var(--space-2xs);h3{text-align:center;transition:all 0.3s ease-in-out;font-family:var(--font-body);font-size:var(--font-size-base);font-weight:400;line-height:var(--leading-snug);margin-bottom:var(--space-3xs);}div{display:flex;align-items:center;justify-content:center;span{display:inline-block;font-family:var(--font-sans);font-size:calc(var(--font-size-xs) / 1.08);color:var(--color-gray-600);text-transform:uppercase;letter-spacing:0.05em;font-weight:400;margin-top:2px;}svg{margin:0 var(--space-3xs);}}"]);
const StyledProjectCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div).withConfig({
  displayName: "ProjectStyled__StyledProjectCard",
  componentId: "odm6np-2"
})(["display:flex;flex-direction:column;justify-content:space-between;background:transparent;transition:all 0.3s ease-in-out;color:var(--color-gray-800);margin:0 var(--space-xs) var(--space-xs) 0;img,div:first-child{border-radius:var(--border-radius-base);transition:all 0.3s ease-in-out;margin-bottom:0 !important;}&:hover{transform:scale3d(1.02,1.02,1.02);h3{color:var(--color-crimson);}& > div:first-child{box-shadow:var(--box-shadow-lg);}}"]);

/***/ }),

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ProjectsSection),
/* harmony export */   "X": () => (/* binding */ ArchiveSection)
/* harmony export */ });
/* harmony import */ var _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3056);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const ArchiveSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.section).withConfig({
  displayName: "StyledSectionComponents__ArchiveSection",
  componentId: "uhljyb-0"
})(["margin:0 0 10vh 0;display:grid;grid-gap:var(--space-lg);grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto;grid-row-gap:5%;grid-template-areas:\"essays essays notes\" \"books books books\";@media ", "{grid-gap:var(--space-m);}@media ", "{grid-template-columns:1fr;grid-gap:var(--space-l);grid-template-rows:auto;grid-template-areas:\"essays\" \"notes\" \"books\";}section{}section:nth-child(1){}"], _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.mediaMD */ .A.mediaMD, _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.mediaSM */ .A.mediaSM);
const ProjectsSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.section).withConfig({
  displayName: "StyledSectionComponents__ProjectsSection",
  componentId: "uhljyb-1"
})(["margin:0 0 10vh 0;display:grid;grid-gap:var(--space-lg);grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto;grid-row-gap:5%;grid-template-areas:\"technology technology atlas\";@media ", "{grid-gap:var(--space-m);}@media ", "{grid-template-columns:1fr 1fr;grid-template-areas:\"technology technology\" \"atlas atlas\";}@media ", "{}section{}section:nth-child(1){}"], _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.mediaMD */ .A.mediaMD, _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.mediaSM */ .A.mediaSM, _constants_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__/* .breakpoints.mediaLG */ .A.mediaLG);

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9872:
/***/ ((module) => {

module.exports = require("react-icons/di");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9958:
/***/ ((module) => {

module.exports = import("@heroicons/react/20/solid");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,2294,623,8290,3124,4736,2383,7730,1574], () => (__webpack_exec__(764)));
module.exports = __webpack_exports__;

})();