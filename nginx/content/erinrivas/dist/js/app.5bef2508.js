(function(e){function t(t){for(var r,o,c=t[0],l=t[1],u=t[2],s=0,f=[];s<c.length;s++)o=c[s],a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-4c26cbcc":"6412b4fc"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-4c26cbcc":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4c26cbcc":"34d791cd"}[e]+".css",a=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],s=u.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e),u=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:s})},12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("bb71");n("da64");r["a"].use(o["a"],{iconfont:"md"});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"blue darken-3"},[n("v-content",[n("RouterBar")],1),n("v-content",[n("router-view")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("v-toolbar",{attrs:{color:"grey darken-1",dark:""}},[n("v-toolbar-title",[e._v("Erin Rivas")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{to:"/",flat:""}},[e._v("About")]),n("v-btn",{attrs:{to:"/projects",flat:""}},[e._v("Projects")]),n("v-menu",{attrs:{"nudge-width":100},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{flat:""}},r),[e._v("Contact")])]}}])},[n("v-list",e._l(e.menuItems,function(t){return n("v-list-tile",{key:t.key},[n("v-btn",{attrs:{href:t.url,target:"_blank",flat:""},domProps:{textContent:e._s(t.label)}})],1)}),1)],1)],1)],1)],1)},l=[],u={data:function(){return{menuItems:[{label:"Email",url:"mailto:me@erinrivas.com"},{label:"LinkedIn",url:"https://www.linkedin.com/in/erin-rivas"},{label:"GitHub",url:"https://github.com/karnthis"}]}}},s=u,f=n("2877"),p=n("6544"),d=n.n(p),v=n("8336"),h=n("549c"),m=n("8860"),b=n("ba95"),g=n("e449"),y=n("9910"),w=n("71d9"),k=n("2a7f"),_=Object(f["a"])(s,c,l,!1,null,null,null),j=_.exports;d()(_,{VBtn:v["a"],VContent:h["a"],VList:m["a"],VListTile:b["a"],VMenu:g["a"],VSpacer:y["a"],VToolbar:w["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]});var V={name:"App",components:{RouterBar:j},data:function(){return{}}},x=V,C=n("7496"),T=Object(f["a"])(x,a,i,!1,null,null,null),E=T.exports;d()(T,{VApp:C["a"],VContent:h["a"]});var O=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:"","fill-height":""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",{attrs:{color:"grey "}},[n("v-card-text",[e._v("Hello there! My name is Erin Rivas. I am a workaholic who is passionate about building things, solving problems, and mentoring others. I am a freelance JavaScript developer and digital tinkerer, focused on open source or non-profit projects. I like to aim high, and put everything into my work. This site is a showcase of my skills and hobby projects.")])],1)],1)],1)],1)],1)},P=[],A={components:{}},I=A,L=n("b0af"),B=n("99d9"),M=n("a523"),N=n("0e8f"),R=n("a722"),$=Object(f["a"])(I,S,P,!1,null,null,null),H=$.exports;d()($,{VCard:L["a"],VCardText:B["b"],VContainer:M["a"],VContent:h["a"],VFlex:N["a"],VLayout:R["a"]}),r["a"].use(O["a"]);var J=new O["a"]({routes:[{path:"/",name:"home",component:H},{path:"/projects",name:"projects",component:function(){return n.e("chunk-4c26cbcc").then(n.bind(null,"acca"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:J,render:function(e){return e(E)}}).$mount("#app")}});
//# sourceMappingURL=app.5bef2508.js.map