(function(e){function t(t){for(var a,o,r=t[0],c=t[1],u=t[2],l=0,h=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},s={app:0},i=[];function r(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-17abae8e":"c7409177","chunk-366561ee":"acef2e9f","chunk-55b2a074":"a678a2c6","chunk-a1a47932":"03bc81fd","chunk-e9df638e":"aa9a0d49","chunk-f22182c8":"bacecb23"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-17abae8e":1,"chunk-366561ee":1,"chunk-55b2a074":1,"chunk-a1a47932":1,"chunk-e9df638e":1,"chunk-f22182c8":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-17abae8e":"7c6adf0f","chunk-366561ee":"5bf072c7","chunk-55b2a074":"682974e3","chunk-a1a47932":"b59e4af5","chunk-e9df638e":"99c3d2e3","chunk-f22182c8":"a539d466"}[e]+".css",s=c.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var u=i[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){u=h[r],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(e);var h=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",h.name="ChunkLoadError",h.type=a,h.request=o,n[1](h)}s[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d18":function(e,t,n){},"2fb4":function(e,t,n){},"3db4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"App",class:{short:e.isShortPage},attrs:{id:"app"}},[n("core-header"),n("main",{staticClass:"Content"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1),n("core-footer")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"Footer"},[n("div",{staticClass:"Footer__content"},[n("div",{staticClass:"Footer__block main-info"},[n("div",{staticClass:"Footer__block-logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"Footer__block-logo-image",attrs:{src:"/img/logo.png"}})]),n("div",{staticClass:"Footer__block-socials"},[n("a",{staticClass:"Footer__block-socials--link",attrs:{target:"_blank",href:"https://www.linkedin.com/company/capsulab-ltd/"}},[n("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"linkedin"}}})],1)])],1),n("span",{staticClass:"Footer__block-copyright"},[e._v("Copyright 2021")])]),n("div",{staticClass:"Footer__block menu"},[n("div",{staticClass:"Footer__block-title"},[e._v(" Menu ")]),n("ul",{staticClass:"Footer__block-list"},[e._l(e.routes,(function(t,a){return n("li",{key:a,staticClass:"Footer__block-list--item"},[t.hasChild?n("router-link",{attrs:{to:t.items[0].path}},[e._v(" "+e._s(t.name)+" ")]):n("router-link",{attrs:{to:t.path}},[e._v(" "+e._s(t.name)+" ")])],1)})),n("li",{staticClass:"Footer__block-list--item"},[n("router-link",{attrs:{to:"/contact-us"}},[n("span",[e._v("Contact us")])])],1)],2)]),n("div",{staticClass:"Footer__block other"},[n("div",{staticClass:"Footer__block-title"},[e._v(" Other ")]),n("ul",{staticClass:"Footer__block-list"},[n("li",{staticClass:"Footer__block-list--item"},[n("router-link",{attrs:{to:"/privacy-policy"}},[e._v(" Privacy Policy ")])],1),n("li",{staticClass:"Footer__block-list--item"},[n("router-link",{attrs:{to:"/terms-and-conditions"}},[e._v(" Terms and Conditions ")])],1)])]),n("span",{staticClass:"Footer__block-copyright bottom"},[e._v("Copyright 2021")])])])},r=[],c=[{name:"Technology",path:"/#technologies",hasChild:!1,anchor:"technologies"},{name:"Use Cases",hasChild:!0,items:[{name:"Beauty – Skincare",path:"/use-cases/beauty-skincare"},{name:"Beauty – Color Cosmetics",path:"/use-cases/beauty-colorcosmetics"},{name:"Beauty – Hair",path:"/use-cases/beauty-hair"},{name:"Food – Superfoods",path:"/use-cases/food-superfoods"},{name:"Food – Supplements ",path:"/use-cases/food-supplements"}]},{name:"Team",path:"/team",hasChild:!1}],u={name:"Footer",data:function(){return{routes:c,email:"",isSendButtonClicked:!1}}},l=u,h=(n("789b"),n("2877")),d=Object(h["a"])(l,i,r,!1,null,null,null),m=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"Header"},[n("nav",{staticClass:"Header__navigation"},[n("div",{staticClass:"Header__logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"Header__logo-image",attrs:{src:"/img/logo.png"}})])],1),n("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClickOutsideMenu,expression:"onClickOutsideMenu"}],ref:"list",staticClass:"Header__list",class:{"is-active":e.isMenuShown}},[e._l(e.routes,(function(t,a){return n("li",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],key:a,staticClass:"Header__list-link",class:{"has-child":t.hasChild},on:{click:e.isShowSubmenu}},[t.hasChild||t.anchor?t.anchor?n("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#technologies",expression:"'#technologies'"}],attrs:{to:t.path}},[e._v(" "+e._s(t.name)+" ")]):t.hasChild?n("span",{class:{"has-child":t.hasChild}},[e._v(" "+e._s(t.name)+" "),n("font-awesome-icon",{class:{top:e.isSubmenuShown},attrs:{icon:["fas","sort-down"]}})],1):e._e():n("router-link",{attrs:{to:t.path}},[e._v(" "+e._s(t.name)+" ")]),n("transition",{attrs:{name:"slide-fade"}},[t.hasChild?n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isSubmenuShown,expression:"isSubmenuShown"}],staticClass:"Header__sublist"},e._l(t.items,(function(t,a){return n("li",{key:a,staticClass:"Header__sublist-item",on:{click:e.toggleMenu}},[n("router-link",{attrs:{to:t.path}},[e._v(" "+e._s(t.name)+" ")])],1)})),0):e._e()])],1)})),n("li",{staticClass:"Header__list-link--talk-to-us",on:{click:e.isShowSubmenu}},[n("router-link",{attrs:{to:"/contact-us"}},[n("span",[e._v("Contact us")])])],1)],2),n("div",{staticClass:"burger",on:{click:e.toggleMenu}},[n("span",{class:{active:e.isMenuShown}})])]),n("div",{staticClass:"Header__overlay",class:{active:e.isMenuShown}})])},p=[],b=n("c28b"),_=n.n(b),k={name:"Header",data:function(){return{isMenuShown:!1,isSubmenuShown:!1,routes:c}},directives:{clickOutside:_.a.directive},methods:{toggleMenu:function(){this.isMenuShown=!this.isMenuShown},isShowSubmenu:function(e){e.target.classList.contains("has-child")||e.target.closest(".has-child")?this.isSubmenuShown=!this.isSubmenuShown:this.isMenuShown=!1},onClickOutside:function(e){e.target.classList.contains("has-child")||e.target.closest(".has-child")||(this.isSubmenuShown=!1)},onClickOutsideMenu:function(e){e.target.classList.contains("burger")||(this.isMenuShown=!1)}}},v=k,g=(n("99b8"),Object(h["a"])(v,f,p,!1,null,null,null)),C=g.exports,y={name:"App",components:{"core-footer":m,"core-header":C},computed:{isShortPage:function(){return this.$route.meta.isShortPage}}},w=y,S=(n("5c0b"),Object(h["a"])(w,o,s,!1,null,null,null)),O=S.exports,F=(n("caad"),n("b0c0"),n("d3b7"),n("8c4f"));a["a"].use(F["a"]);var P=["Home","Technology","Team"],M=["beauty-skincare","beauty-colorcosmetics","beauty-hair","food-superfoods","food-supplements","pharmacy"],x=new F["a"]({base:"/",mode:"history",routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-e9df638e").then(n.bind(null,"bb51"))}},{path:"/use-cases/:usecase",name:"UseCases",component:function(){return n.e("chunk-366561ee").then(n.bind(null,"3666"))}},{path:"/team",name:"Team",component:function(){return n.e("chunk-f22182c8").then(n.bind(null,"0767"))}},{path:"/privacy-policy",name:"PrivacyPolicy",meta:{isShortPage:!0},component:function(){return n.e("chunk-55b2a074").then(n.bind(null,"729e"))}},{path:"/terms-and-conditions",name:"TermsAndConditions",meta:{isShortPage:!0},component:function(){return n.e("chunk-a1a47932").then(n.bind(null,"51c5"))}},{path:"/contact-us",name:"ContactUs",meta:{isShortPage:!0},component:function(){return n.e("chunk-17abae8e").then(n.bind(null,"e9bb"))}}],scrollBehavior:function(){return{x:0,y:0}}});x.beforeEach((function(e,t,n){e.name||P.includes(e.name)?"UseCases"!==e.name||M.includes(e.params.usecase)?n():n("/use-cases/beauty-skincare"):n({path:"/"})}));var T=x,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"button",attrs:{to:"/contact-us"}},[n("span",[e._v("Talk to us")])])},H=[],E={name:"talk-to-us-button"},N=E,A=(n("7186"),Object(h["a"])(N,j,H,!1,null,null,null)),B=A.exports,L=n("ecee"),$=n("c074"),U=n("ad3d"),q=n("42b9"),D=n("e67d"),J=n.n(D),I=n("f13c"),K=n.n(I);n("3db4"),n("2fb4");a["a"].config.productionTip=!1,a["a"].config.devtools=!1,L["c"].add($["a"],q["a"],q["b"]),a["a"].use(J.a),a["a"].use(K.a),a["a"].component("font-awesome-icon",U["a"]),a["a"].component("talk-to-us-button",B),new a["a"]({router:T,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},7186:function(e,t,n){"use strict";n("ead8")},7756:function(e,t,n){},"789b":function(e,t,n){"use strict";n("7756")},"99b8":function(e,t,n){"use strict";n("1d18")},"9c0c":function(e,t,n){},ead8:function(e,t,n){}});
//# sourceMappingURL=app.553a1657.js.map