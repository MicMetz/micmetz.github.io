(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var a=o(n(7294)),c=n(1689),l=n(2441),i=n(5749),u={};function s(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),o=n&&n.asPath||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],l=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):l||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=a.Children.only(v),w=b&&"object"===typeof b&&b.ref,E=(0,i.useIntersection)({rootMargin:"200px"}),C=r(E,2),O=C[0],k=C[1],x=a.default.useCallback((function(e){O(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,O]);(0,a.useEffect)((function(){var e=k&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,k,g,t,n]);var L={ref:x,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:l}))}(e,n,d,p,h,y,m,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),s(n,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var j="undefined"!==typeof g?g:n&&n.locale,M=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(p,j,n&&n.locales,n&&n.domainLocales);L.href=M||(0,c.addBasePath)((0,c.addLocale)(p,j,n&&n.defaultLocale))}return a.default.cloneElement(b,L)};t.default=f},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=(0,o.useRef)(),u=(0,o.useState)(!1),s=r(u,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n(7294),a=n(8391),c="undefined"!==typeof IntersectionObserver;var l=new Map},1433:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(5893),o=(n(7294),n(4167)),a=n(6847),c=n(2465);function l(){var e=(0,c.Z)(["\nmax-width: 1280px;\nwidth: 100%;\nmargin: auto;\n"]);return l=function(){return e},e}var i=n(540).default.div(l()),u=function(e){var t=e.children;return(0,r.jsxs)(i,{children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)("main",{children:t}),(0,r.jsx)(o.Z,{})]})}},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),i(e.child))}))}function u(e){return function(t){return r.createElement(s,c({attr:c({},e.attr)},t),i(e.child))}}function s(e){var t=function(t){var n,o=e.attr,a=e.size,i=e.title,u=l(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);