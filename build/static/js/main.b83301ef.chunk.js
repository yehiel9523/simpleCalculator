(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(11),i=n.n(o),s=(n(19),n(14)),a=n(5),u=(n(20),n(0));function l(t){var e=t.scrArr.join("");return e.length>20&&(e="too long"),Object(u.jsx)("div",{className:"screen",children:e})}function j(t){var e=t.id,n=t.on;return Object(u.jsx)("button",{className:"button digit",onClick:function(){return n(e)},children:e})}function b(t){var e=t.id,n=t.on,c=t.scr;return Object(u.jsx)("button",{className:"button operator",onClick:function(){"number"===typeof c[c.length-1]&&n(e)},children:e})}var d=function(t){var e=t.id,n=(t.on,t.eq),c=t.toggle,r=t.scr;return Object(u.jsx)("button",{className:"button calculate",onClick:function(){r.length>=3&&n(c)},children:e})};function h(t){var e=t.id,n=t.on;return Object(u.jsx)("button",{className:"button clear",onClick:function(){return n()},children:e})}var f=r.a.createContext({theme:"light",setTheme:function(){}});function O(t){var e=t.children,n=Object(c.useState)("light"),r=Object(a.a)(n,2),o=r[0],i=r[1];return Object(u.jsx)(f.Provider,{value:{theme:o,setTheme:i},children:e})}var g=n(12);var v=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(!1),i=Object(a.a)(o,2),v=i[0],x=i[1];Object(c.useEffect)((function(){C()}),[v]);var p=function(t){r([].concat(Object(s.a)(n),[t]))},m=function(t,e,n){return"+"===e?t+n:"-"===e?t-n:"*"===e?t*n:"/"===e?t/n:void console.log("wrong oparator")},C=function(){if(n.length>=3){for(var t=[],e=0,c=n[0],o=0;o<n.length;o++)"number"!==typeof n[o]&&(t.push(parseInt(n.slice(e,o).join(""))),t.push(n[o]),e=o+1);isNaN(parseInt(n.slice(e).join("")))||t.push(parseInt(n.slice(e).join("")));for(var i=0;i<t.length-2;i+=2)c=m(t[i],t[i+1],t[i+2]),t[i+2]=c;t.length>2&&r([c])}},N=Object(c.useContext)(f);return Object(u.jsx)(O,{children:Object(g.a)(new Date(2021,7,20,20,0,0))?Object(u.jsx)("h1",{children:"shabbat"}):Object(u.jsx)("div",{className:"App",style:{background:N.background,color:N.foreground},children:Object(u.jsxs)("div",{className:"calculator",children:[Object(u.jsx)(l,{scrArr:n}),function(){for(var t=[],e=0;e<=9;e++)t.push(Object(u.jsx)(j,{id:e,on:p}));return t}(),Object(u.jsx)(b,{id:"+",on:p,scr:n}),Object(u.jsx)(b,{id:"-",on:p,scr:n}),Object(u.jsx)(b,{id:"*",on:p,scr:n}),Object(u.jsx)(b,{id:"/",on:p,scr:n}),Object(u.jsx)(d,{id:"=",on:p,eq:x,toggle:!v,scr:n}),Object(u.jsx)(h,{id:"c",on:function(){r([])}})]})})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),o(t),i(t)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),x()}},[[27,1,2]]]);
//# sourceMappingURL=main.b83301ef.chunk.js.map