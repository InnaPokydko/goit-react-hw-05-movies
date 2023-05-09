"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961,736,387],{9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var i,r,o,a=t(168),s=t(4934),c=s.Z.div(i||(i=(0,a.Z)(["\nwidth: 100%;\nmax-width: 1200px;\nmargin: 0 auto;\npadding: 20px;\ndisplay: flex;\ngap: 15px;\nflex-wrap: wrap;\n"]))),p=s.Z.div(r||(r=(0,a.Z)(["\nwidth: 250px;\npadding: 4px;\ndisplay: flex;\ngap: 15px;\nflex-direction: column;\nalign-items: center;\n"]))),l=s.Z.h3(o||(o=(0,a.Z)(["\ntext-align: center;\n    color:#fff;\n    \n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 100;\n"]))),d=t(184),x=function(n){var e=n.credits;n.movieId;return(0,d.jsx)(c,{children:e&&(e.length>0?e.map((function(n){var e=n.id,t=n.name,i=n.character,r=n.profile_path,o=r?"https://image.tmdb.org/t/p/w500".concat(r):"https://img.freepik.com/premium-vector/cartoon-film-camera-with-sign-that-says-movie-it_133260-5246.jpg";return(0,d.jsxs)(p,{children:[(0,d.jsx)("img",{src:o,alt:t,width:180}),(0,d.jsx)(l,{children:t}),(0,d.jsxs)(l,{children:["Character: ",i]})]},e)})):(0,d.jsx)("p",{children:"No cast"}))})}},4387:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var i,r,o,a,s,c=t(168),p=t(4934),l=p.Z.div(i||(i=(0,c.Z)(["\nwidth: 900px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px;\n"]))),d=(p.Z.li(r||(r=(0,c.Z)(["\n  border-radius: 4px;\n  background-color: #221c21;\n  padding: 20px;\n  box-shadow: 0px 1px 2px rgb(255 158 0 / 40%), 0px 2px 4px rgb(255 0 245 / 30%),\n    0px 4px 8px rgb(255 221 0 / 40%), 0px 4px 16px rgb(255 247 254 / 10%);\n"]))),p.Z.p(o||(o=(0,c.Z)(["\nfont-family: 'Roboto';\ncolor: #fff;\n    font-size: 14px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 100;\n\n"])))),x=p.Z.h3(a||(a=(0,c.Z)(["\ncolor: #ED8F03;\nfont-size: 18px;\n"]))),h=p.Z.h3(s||(s=(0,c.Z)(["\nfont-family: 'Roboto';\ncolor: #fff;\nfont-size: 24px;\nline-height: 24px;\nfont-style: normal;\nfont-weight: 400;\n\n"]))),f=t(184),u=function(n){var e=n.reviews;n.movieId;return(0,f.jsx)(l,{children:e&&(e.length>0?e.map((function(n){var e=n.id,t=n.author,i=n.content;return(0,f.jsxs)("div",{children:[(0,f.jsxs)(x,{children:["Author: ",t]}),(0,f.jsx)(d,{children:i})]},e)})):(0,f.jsx)(h,{children:"No reviews available"}))})}},7961:function(n,e,t){t.r(e);var i=t(5861),r=t(9439),o=t(4687),a=t.n(o),s=t(2791),c=t(7689),p=t(7596),l=t(6710),d=t(9736),x=t(4387),h=t(3640),f=t(184),u="7c36d10ef8eae7f493da1fadc9c612a4";e.default=function(){var n,e,t=(0,c.UO)().movieId,o=(0,s.useState)(null),g=(0,r.Z)(o,2),m=g[0],v=g[1],w=(0,s.useState)(null),j=(0,r.Z)(w,2),b=j[0],Z=j[1],y=(0,s.useState)(null),k=(0,r.Z)(y,2),_=k[0],F=k[1],E=(0,s.useState)(null),C=(0,r.Z)(E,2),z=C[0],R=C[1],S=(0,c.TH)(),H=(0,s.useRef)(null!==(n=null===(e=S.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies"),I=(0,s.useState)(""),U=(0,r.Z)(I,2),B=U[0],D=U[1];if((0,s.useEffect)((function(){var n=function(){var n=(0,i.Z)(a().mark((function n(){var e,i,r,o,s,c,l,d;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u));case 3:return e=n.sent,n.next=6,e.json();case 6:return i=n.sent,v(i),n.next=10,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u));case 10:return r=n.sent,n.next=13,r.json();case 13:return o=n.sent,Z(o.cast),n.next=17,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u));case 17:return s=n.sent,n.next=20,s.json();case 20:return c=n.sent,F(c.results),n.next=24,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=").concat(u));case 24:return l=n.sent,n.next=27,l.json();case 27:(d=n.sent).results.length>0&&R(d.results[0]),n.next=34;break;case 31:n.prev=31,n.t0=n.catch(0),p.Am.error(n.t0.message);case 34:case"end":return n.stop()}}),n,null,[[0,31]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),!m)return(0,f.jsx)("p",{children:"Loading..."});var G=function(n){D(n)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.dF,{to:H.current,children:"Go back"}),(0,f.jsxs)(h.W2,{children:[(0,f.jsxs)(h.hi,{children:[(0,f.jsx)("img",{src:m.poster_path?"https://image.tmdb.org/t/p/w500".concat(m.poster_path):"https://img.freepik.com/premium-vector/cartoon-film-camera-with-sign-that-says-movie-it_133260-5246.jpg",alt:m.title,width:320}),(0,f.jsxs)(h.CU,{children:[(0,f.jsx)("h1",{children:m.title}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:m.overview}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)(h.RO,{children:m.genres&&m.genres.map((function(n){return(0,f.jsxs)("span",{children:[n.name," "]},n.id)}))})]}),z&&(0,f.jsx)(l.Z,{url:"https://www.youtube.com/watch?v=".concat(z.key),controls:!0,width:640,height:360,style:{margin:"20px 0"}}),(0,f.jsxs)(h.KG,{children:[(0,f.jsx)("li",{children:(0,f.jsx)(h.kH,{to:"/movies/".concat(t,"/cast"),onClick:function(){return G("cast")},style:{display:m.poster_path?"block":"none"},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(h.kH,{to:"/movies/".concat(t,"/reviews"),onClick:function(){return G("reviews")},style:{display:m.poster_path?"block":"none"},children:"Reviews"})})]})]}),"cast"===B&&(0,f.jsx)(d.default,{credits:b,movieId:t}),"reviews"===B&&(0,f.jsx)(x.default,{reviews:_,movieId:t}),!m.poster_path&&(0,f.jsx)("div",{children:(0,f.jsx)("p",{children:"Movie not found"})}),m.poster_path&&(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(c.j3,{})})]})]})}},3640:function(n,e,t){t.d(e,{CU:function(){return m},KG:function(){return g},RO:function(){return w},W2:function(){return h},dF:function(){return f},hi:function(){return u},kH:function(){return v}});var i,r,o,a,s,c,p,l=t(168),d=t(4934),x=t(1087),h=d.Z.div(i||(i=(0,l.Z)(["\nwidth: 100%;\nmargin: 50px;\npadding: 20px;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n"]))),f=(0,d.Z)(x.rU)(r||(r=(0,l.Z)(["\nmargin: 20px;\npadding: 4px 8px;\n  border-radius: 8px;\n  background-color: #ED8F03;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 100;\n  min-width: 40px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  \n  &:hover {\n    background-image: linear-gradient(to right, #FFB75E 0%, #ED8F03 51%, #FFB75E 100%);\n  }\n"]))),u=d.Z.div(o||(o=(0,l.Z)(["\nmargin: 20px;\npadding: 20px;\ndisplay: flex;\ngap: 60px;\nflex-wrap: wrap;\njustify-content: flex-start;\nalign-items: left;\nbox-shadow: 0px 0px 10px rgba(1, 1, 1, 1.5);\n"]))),g=d.Z.ul(a||(a=(0,l.Z)(["\nwidth: 700px;\npadding: 10px;\ndisplay: flex;\ngap: 80px;\nflex-wrap: wrap;\n\n"]))),m=d.Z.div(s||(s=(0,l.Z)(["\nwidth: 700px;\npadding: 10px;\ndisplay: flex;\nflex-direction: column;\ngap: 40px;\nflex-wrap: wrap;\n\n"]))),v=(0,d.Z)(x.rU)(c||(c=(0,l.Z)(["\n\n  color: #fff;\n    text-decoration: none;\n  cursor: pointer;\n  font-family:'Helvetica Neue';\n  font-size: 24px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 600;\n  \n  \n  &:hover {\n    background-image: linear-gradient(to right, #FFB75E 0%, #ED8F03 51%, #FFB75E 100%);\n  }\n"]))),w=d.Z.div(p||(p=(0,l.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 15px;\ncolor: #fff;\n"])))}}]);
//# sourceMappingURL=961.2844666f.chunk.js.map