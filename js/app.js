!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/js",e(0)}(function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(typeof t[e]){case"function":break;case"object":t[e]=function(e){var n=e.slice(1),r=t[e[0]];return function(t,e,i){r.apply(this,[t,e,i].concat(n))}}(t[e]);break;default:t[e]=t[t[e]]}return t}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(39),a=r(i),s=n(41),o=r(s),c=n(40),l=r(c);location.hash.indexOf("%21")>-1&&(location.href=location.href.replace("%21","")),a.default.use(l.default);var u=new o.default(n(7));new a.default({router:u}).$mount("#app")},function(t,e,n){var r,i,a=n(33);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(9);var a=n(35);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i,a=n(32);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(42),a=r(i);t.exports=function(t,e){e.$http.get(t).then(function(t){return t.text()}).then(function(t){var n=t.match(/###(.+)/);e.content=(0,a.default)(t.replace(/^###.+/,"")),e.title=n&&n.length>1?n[1].trim():"",e.done=!0}).catch(function(t){console.error(t.stack),e.title="Opps! Error occur!",e.content='Please check your network or any typing missing in the website. If you confirm no this two, please report it at <a href="https://github.com/spyc/library/issues/new">Github</a> or email to tony@opensource.hk',e.done=!0})}},function(t,e,n){var r,i,a=n(30);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e){"use strict";function n(t){return t.split("\t").map(function(t){return t.trim()})}t.exports=function(t){var e=t.split("\n"),r=[],i=n(e.shift());return e.forEach(function(t){t.trim().length>0&&!function(){var e={};n(t).forEach(function(t,n){return e[i[n]]=t}),r.push(e)}()}),r}},function(t,e,n){"use strict";t.exports={routes:[{path:"/",name:"home",component:n(23)},{path:"/books",name:"books",component:n(22)},{path:"/books/:id",name:"book",component:n(21)},{path:"/intro",name:"intro",component:n(20),children:[{path:"aim",name:"aim",component:n(24)},{path:"rule",name:"rule",component:n(25)},{path:"*",redirect:{name:"aim"}}]},{path:"*",redirect:{name:"home"}}]}},function(t,e){"use strict";t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(19),a=r(i);e.default={props:["title"],components:{Navbar:a.default},data:function(){return{src:"./images/cover.jpg"}},mounted:function(){$(".parallax").parallax()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&o.return&&o.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=n(18),s=r(a);e.default={data:function(){var t=this.$route.path.replace(/^\//,""),e=t.split("/"),n=i(e,2),r=n[0];n[1];return r in s.default?{navs:s.default[r],name:r}:{navs:!1}},mounted:function(){$(".button-collapse").sideNav(),$(".collapsible").collapsible();var t=$(document.getElementById("side-nav"));t.delegate("li a:not(.collapsible-header)","click",function(){return t.sideNav("hide")})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{Header:n(2)},computed:{title:function(){var t={aim:"Aim",rule:"Rule"};return"About Us - "+t[this.$route.path.replace("/intro/","")]}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=r(i);e.default={data:function(){return{done:!1,content:"",title:""}},components:{Header:n(2),container:n(5),row:n(1),loader:n(3)},mounted:function(){var t="https://spyc.github.io/library-data/books/"+this.$route.params.id+".txt";(0,a.default)(t,this)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),a=r(i);e.default={data:function(){return{done:!1,eng:null,chin:null}},computed:{books:function(){var t={};return this.chin&&(t.Chinese=this.chin),this.eng&&(t.English=this.eng),t}},components:{Header:n(2),container:n(5),row:n(1),loader:n(3)},mounted:function(){var t={eng:"https://spyc.github.io/library-data/english.txt",chin:"https://spyc.github.io/library-data/chinese.txt"},e=this,n=function(n){var r=t[n];e.$http.get(r).then(function(t){return e.done=!0,t.text()}).then(function(t){e[n]=(0,a.default)(t)})};for(var r in t)n(r)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{Header:n(2),container:n(5),row:n(1)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=r(i);e.default={data:function(){return{done:!1,title:"",content:""}},components:{row:n(1),loader:n(3)},mounted:function(){(0,a.default)("https://spyc.github.io/library-data/introduction/Aim.txt",this)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=r(i);e.default={data:function(){return{done:!1,title:"",content:""}},components:{row:n(1),loader:n(3)},mounted:function(){(0,a.default)("https://spyc.github.io/library-data/introduction/Rule.txt",this)}}},function(t,e,n){e=t.exports=n(8)(),e.push([t.id,"",""])},function(t,e){t.exports={intro:[{name:"aim",display:"Aim"},{name:"rule",display:"Rule"}]}},function(t,e,n){var r,i;r=n(10);var a=n(28);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;n(38),r=n(11);var a=n(29);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(12);var a=n(31);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(13);var a=n(36);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(14);var a=n(34);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(15);var a=n(26);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(16);var a=n(27);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=r},function(t,e){t.exports={render:function(){var t=this;return t._h("row",[t._h("div",{staticClass:"col s12"},[t._h("div",{staticClass:"card"},[t._h("div",{staticClass:"card-content"},[t.done?t._e():t._h("loader")," ",t.done?t._h("div",{staticClass:"card-title"},[t._s(t.title)]):t._e()," ",t.done?t._h("div",{domProps:{innerHTML:t._s(t.content)}}):t._e()])])])])},staticRenderFns:[]}},26,function(t,e){t.exports={render:function(){var t=this;return t._h("nav",{class:{"nav-extended":t.navs}},[t._h("div",{staticClass:"nav-wrapper container"},[t._h("router-link",{staticClass:"brand-logo",attrs:{to:{name:"home"}}},["SPYC Library"])," ",t._m(0)," ",t._h("ul",{staticClass:"right hide-on-med-and-down"},[t._h("li",[t._h("router-link",{attrs:{to:{name:"aim"}}},["\n                    Introduction\n                "])])," ",t._h("li",[t._h("router-link",{attrs:{to:{name:"books"}}},["\n                    Book Recommend\n                "])])])," ",t._h("ul",{staticClass:"side-nav",attrs:{id:"side-nav"}},[t._h("li",[t._h("router-link",{attrs:{to:{name:"home"}}},[t._h("i",{staticClass:"material-icons"},["home"]),"\n                    Home\n                "])])," ",t._h("li",{staticClass:"no-padding"},[t._h("ul",{staticClass:"collapsible collapsible-accordion"},[t._h("li",[t._m(1)," ",t._h("div",{staticClass:"collapsible-body"},[t._h("ul",[t._h("li",[t._h("router-link",{attrs:{to:{name:"intro",params:{section:"aim"}}}},["\n                                        Aim\n                                    "])])," ",t._h("li",[t._h("router-link",{attrs:{to:{name:"intro",params:{section:"rule"}}}},["\n                                        Rule\n                                    "])])])])])])])," ",t._h("li",[t._h("router-link",{attrs:{to:{name:"books"}}},["\n                    Book Recommend\n                "])])])," ",t.navs?t._h("ul",{staticClass:"nav-tabs tabs-transparent hide-on-med-and-down"},[t._l(t.navs,function(e){return t._h("li",{staticClass:"tab"},[t._h("router-link",{attrs:{"active-class":"active",to:{name:e.name}}},["\n                    "+t._s(e.display)+"\n                "])])})]):t._e()])])},staticRenderFns:[function(){var t=this;return t._h("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"side-nav"}},[t._h("i",{staticClass:"material-icons"},["menu"])])},function(){var t=this;return t._h("a",{staticClass:"collapsible-header"},["Introduction ",t._h("i",{staticClass:"material-icons"},["arrow_drop_down"])])}]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("Header",{attrs:{title:t.title}})," ",t._h("main",{staticClass:"container"},[t._h("router-view")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"container"},[t._t("default")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("Header",{attrs:{title:"Book Recommend"}})," ",t._h("main",[t._h("container",[t._h("row",[t._h("div",{staticClass:"col s12"},[t._h("div",{staticClass:"card"},[t._h("div",{staticClass:"card-content"},[t.done?t._e():t._h("loader")," ",t.done?t._h("div",{staticClass:"card-title"},[t._s(t.title)]):t._e()," ",t.done?t._h("div",{domProps:{innerHTML:t._s(t.content)}}):t._e()])])])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"preloader-wrapper big active"},[t._h("div",{staticClass:"spinner-layer spinner-blue"},[t._h("div",{staticClass:"circle-clipper left"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"gap-patch"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"circle-clipper right"},[t._h("div",{staticClass:"circle"})])])," ",t._h("div",{staticClass:"spinner-layer spinner-red"},[t._h("div",{staticClass:"circle-clipper left"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"gap-patch"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"circle-clipper right"},[t._h("div",{staticClass:"circle"})])])," ",t._h("div",{staticClass:"spinner-layer spinner-yellow"},[t._h("div",{staticClass:"circle-clipper left"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"gap-patch"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"circle-clipper right"},[t._h("div",{staticClass:"circle"})])])," ",t._h("div",{staticClass:"spinner-layer spinner-green"},[t._h("div",{staticClass:"circle-clipper left"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"gap-patch"},[t._h("div",{staticClass:"circle"})]),t._h("div",{staticClass:"circle-clipper right"},[t._h("div",{staticClass:"circle"})])])])}]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"row"},[t._t("default")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("Header")," ",t._h("main",[t._h("container",[t._h("row",[t._h("div",{staticClass:"col s12"},[t._h("iframe",{attrs:{src:"http://library.pyc.edu.hk/WebOPAC.exe"}})])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("header",[t._h("Navbar")," ",t._h("div",{staticClass:"parallax-container"},[t._h("div",{attrs:{id:"cover-title"}},[t._h("h1",["SPYC Library"])," ",t.title?t._h("h2",[t._s(t.title)]):t._e()])," ",t._h("div",{staticClass:"parallax"},[t._h("img",{attrs:{src:t.src}})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("Header",{attrs:{title:"Book Recommend"}})," ",t._h("main",[t._h("container",[t.done?t._e():t._h("loader")," ",t._l(t.books,function(e,n){return t.done?t._h("row",[t._h("div",{staticClass:"col s12"},[t._h("ul",{staticClass:"collection with-header"},[t._h("li",{staticClass:"collection-header"},[t._h("h4",[t._s(n)])])," ",t._l(e,function(e){return t._h("li",{staticClass:"collection-item"},[e.ID?t._h("div",["\n                                "+t._s(e.Title)+"\n                                ",t._h("small",[t._s(e.Author)])," ",t._h("router-link",{staticClass:"secondary-content",attrs:{to:{name:"book",params:{id:e.ID}}}},[t._h("i",{staticClass:"material-icons"},["send"])])]):t._e()])})])])]):t._e()})])])])},staticRenderFns:[]}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=d[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(c(r.parts[a],e))}else{for(var s=[],a=0;a<r.parts.length;a++)s.push(c(r.parts[a],e));d[r.id]={id:r.id,refs:1,parts:s}}}}function i(t){for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],a=i[0],s=i[1],o=i[2],c=i[3],l={css:s,media:o,sourceMap:c};n[a]?n[a].parts.push(l):e.push(n[a]={id:a,parts:[l]})}return e}function a(t,e){var n=h(),r=m[m.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function o(t){var e=document.createElement("style");return e.type="text/css",a(t,e),e}function c(t,e){var n,r,i;if(e.singleton){var a=_++;n=v||(v=o(e)),r=l.bind(null,n,a,!1),i=l.bind(null,n,a,!0)}else n=o(e),r=u.bind(null,n),i=function(){s(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function l(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var a=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}function u(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,_=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return r(n,e),function(t){for(var a=[],s=0;s<n.length;s++){var o=n[s],c=d[o.id];c.refs--,a.push(c)}if(t){var l=i(t);r(l,e)}for(var s=0;s<a.length;s++){var c=a[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var r=n(17);"string"==typeof r&&(r=[[t.id,r,""]]);n(37)(r,{});r.locals&&(t.exports=r.locals)},function(t,e){t.exports=Vue},function(t,e){t.exports=VueResource},function(t,e){t.exports=VueRouter},function(t,e){t.exports=marked}]));
//# sourceMappingURL=app.js.map