(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5818],{3124:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(445),o=n(4141),s=o.default.div.withConfig({displayName:"EssayStyled__EssayImageWrapper",componentId:"sc-1odlody-0"})(["display:grid;place-items:center;max-width:450px;max-height:450px;"]),a=o.default.div.withConfig({displayName:"EssayStyled__EssayMetadataContainer",componentId:"sc-1odlody-1"})(["display:flex;flex-wrap:wrap;align-items:center;span{display:inline-block;font-family:var(--font-sans);font-size:calc(var(--font-size-xs) / 1.08);color:var(--color-gray-600);text-transform:uppercase;letter-spacing:0.05em;font-weight:400;margin-top:2px;}svg{margin:0 var(--space-2xs);}"]),i=o.default.div.withConfig({displayName:"EssayStyled__StyledEssayCard",componentId:"sc-1odlody-2"})(["display:flex;flex-direction:column;border:1px solid var(--color-tinted-cream);padding:var(--space-s);margin:0 var(--space-2xs) var(--space-2xs) 0;border-radius:var(--border-radius-base);box-shadow:var(--box-shadow-sm);background:var(--color-light-cream);transition:all 0.3s ease-in-out;color:var(--color-gray-800);cursor:pointer;img{width:100%;}h3{transition:all 0.3s ease-in-out;font-family:var(--font-body);font-size:var(--font-size-base);font-weight:400;line-height:var(--leading-snug);margin:var(--space-2xs) 0;}&:hover{box-shadow:var(--box-shadow-lg);transform:scale3d(1.02,1.02,1.02);h3{color:var(--color-crimson);}}"]),l=n(5675),c=n.n(l),u=n(1664),d=n.n(u),p=n(8822),m=n(5893);function h(e){var t=e.slug,n=e.cover,o=e.title,l=e.growthStage,u=e.date,h=e.variants,f=e.id;return(0,m.jsx)(d(),{as:"/".concat(t),href:"/".concat(t),children:(0,m.jsx)("a",{children:(0,m.jsxs)(i,{variants:h,children:[n&&(0,m.jsx)(s,{children:(0,m.jsx)(c(),{src:n,alt:o,width:400,height:400})}),(0,m.jsx)("h3",{children:o}),(0,m.jsxs)(a,{children:[l&&(0,m.jsxs)("span",{children:[l," Essay"]}),l&&(0,m.jsx)(r.Z,{size:"15",growthStage:l}),(0,m.jsx)("span",{children:(0,m.jsx)(p.$,{postDate:u})})]})]})})},f)}},4040:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return u}});var r=n(3124),o=n(7187),s=n(2294),a=n(8183),i=n(1909),l=(n(7294),n(5893)),c=!0;function u(e){var t=e.essays;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{title:"Essays of Michael Metzger"}),(0,l.jsxs)(s.A,{children:[(0,l.jsx)("header",{style:{marginBottom:"var(--space-xl)"},children:(0,l.jsx)(i.Z,{posts:t,children:"Essays"})}),(0,l.jsx)(a.Z,{children:t.map((function(e,t){return(0,l.jsx)(r.Z,{id:e.slug,slug:e.slug,cover:e.data.cover,title:e.data.title,growthStage:e.data.growthStage,date:e.data.updated},t)}))})]})]})}},6556:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Garden/Essays",function(){return n(4040)}])},827:function(e,t,n){"use strict";var r=n(7294);function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};class u extends r.Component{constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((()=>{this.reCalculateColumnCount()}))):this.reCalculateColumnCount()}reCalculateColumnCount(){const e=window&&window.innerWidth||1/0;let t=this.props.breakpointCols;"object"!==typeof t&&(t={default:parseInt(t)||2});let n=1/0,r=t.default||2;for(let o in t){const s=parseInt(o);s>0&&e<=s&&s<n&&(n=s,r=t[o])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}itemsInColumns(){const e=this.state.columnCount,t=new Array(e),n=r.Children.toArray(this.props.children);for(let r=0;r<n.length;r++){const o=r%e;t[o]||(t[o]=[]),t[o].push(n[r])}return t}renderColumns(){const{column:e,columnAttrs:t={},columnClassName:n}=this.props,o=this.itemsInColumns(),a=100/o.length+"%";let l=n;l&&"string"!==typeof l&&(this.logDeprecated('The property "columnClassName" requires a string'),"undefined"===typeof l&&(l="my-masonry-grid_column"));const c=i(i(i({},e),t),{},{style:i(i({},t.style),{},{width:a}),className:l});return o.map(((e,t)=>r.createElement("div",s({},c,{key:t}),e)))}logDeprecated(e){console.error("[Masonry]",e)}render(){const e=this.props,{children:t,breakpointCols:n,columnClassName:a,columnAttrs:i,column:l,className:c}=e,u=o(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let d=c;return"string"!==typeof c&&(this.logDeprecated('The property "className" requires a string'),"undefined"===typeof c&&(d="my-masonry-grid")),r.createElement("div",s({},u,{className:d}),this.renderColumns())}}u.defaultProps=c,t.Z=u},4730:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[8173,5675,2962,6046,9774,2888,179],(function(){return t=6556,e(e.s=t);var t}));var t=e.O();_N_E=t}]);