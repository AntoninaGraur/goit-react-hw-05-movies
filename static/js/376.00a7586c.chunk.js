"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[376],{497:function(n,t,r){r.d(t,{Bt:function(){return d},KS:function(){return o},Pd:function(){return s},y:function(){return f},yW:function(){return p}});var e=r(5861),a=r(4687),c=r.n(a),u=r(1243),i="c6d20ac7fe7f3a55ab35208eb3f1e312";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},1333:function(n,t,r){r(2791);var e=r(8515),a=r(184);t.Z=function(n){var t=n.children;return(0,a.jsx)(e.Mi,{children:t})}},8641:function(n,t,r){r.d(t,{Z:function(){return o}});r(2791);var e=r(8515),a=r(7689),c=r(1087),u=r(184);var i=function(n){var t=n.id,r=n.title,i=n.poster_path,o=(0,a.TH)();return(0,u.jsx)("li",{children:(0,u.jsxs)(c.rU,{to:"/movies/".concat(t),state:{from:o},children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(i),alt:r,width:"250",height:"350"}),(0,u.jsx)(e.Gv,{children:r})]})},t)},o=function(n){var t=n.movies;return(0,u.jsx)(e.vp,{children:t.map((function(n){var t=n.id,r=n.title,e=n.poster_path;return(0,u.jsx)(i,{id:t,title:r,poster_path:e},t)}))})}},9376:function(n,t,r){r.r(t),r.d(t,{default:function(){return f}});var e=r(9439),a=r(2791),c=r(1333),u=r(497),i=r(8641),o=r(8966),s=r(184),p=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(o.ne,{color:"#ff4800",height:320,width:320})})},f=function(){var n=(0,a.useState)([]),t=(0,e.Z)(n,2),r=t[0],o=t[1],f=(0,a.useState)(!1),d=(0,e.Z)(f,2),l=d[0],v=d[1];return(0,a.useEffect)((function(){v(!0);try{(0,u.KS)().then((function(n){o(n.results),v(!1)}))}catch(n){console.log(n)}}),[]),(0,s.jsx)("main",{children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)("h1",{children:"Trending today"}),r.length>0&&(0,s.jsx)(i.Z,{movies:r}),l&&(0,s.jsx)(p,{})]})})}},8515:function(n,t,r){r.d(t,{Gv:function(){return l},Mi:function(){return f},Rw:function(){return v},mY:function(){return h},vp:function(){return d}});var e,a,c,u,i,o=r(168),s=r(5706),p=r(1087),f=s.Z.div(e||(e=(0,o.Z)(["\n  padding:35px;\n  padding-top:0;"]))),d=s.Z.ul(a||(a=(0,o.Z)(["\ndisplay:flex;\n  flex-direction:row;\n  flex-wrap: wrap;\n  gap: 25px;\n"]))),l=s.Z.h4(c||(c=(0,o.Z)(["\nwidth: 245px;\n\n"]))),v=s.Z.nav(u||(u=(0,o.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 10px;\n"]))),h=(0,s.Z)(p.OL)(i||(i=(0,o.Z)(["\n  padding: 8px 16px;\n  border-radius: 25px;\n  text-decoration: none;\n  color: black;\n  font-weight: 700;\n\n  &.active {\n    color: white;\n    background-color: #155d5fd9;\n  }\n"])))}}]);
//# sourceMappingURL=376.00a7586c.chunk.js.map