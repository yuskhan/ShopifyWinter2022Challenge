(this["webpackJsonpshopify-winter2022-challenge"]=this["webpackJsonpshopify-winter2022-challenge"]||[]).push([[0],{20:function(e,t,n){e.exports={cards:"Cards_cards__2DRTF"}},27:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(18),i=n.n(c),s=(n(27),n(21)),o=n(3),u=n.n(o),d=n(6),l=n(22),p=n(19),f=n.n(p),j=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("https://api.nasa.gov/planetary/apod","?api_key=").concat("MhqduYw74p2VK16Gi0iQGLCBowyt45LLBdbdejUD","&start_date=2021-09-14&end_date=2021-09-21"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=n(7),h=n.n(b),x=n(0),m=function(e){var t=e.title,n=e.url,a=e.captureDate,r=e.mediaType,c=e.explanation,i=e.liked,s=e.toggleLikeImage;return Object(x.jsxs)("div",{className:h.a.card,children:[Object(x.jsx)("h1",{children:t}),Object(x.jsx)("h2",{children:a}),"image"===r?Object(x.jsx)("img",{className:h.a.image,src:n,alt:""}):Object(x.jsx)("iframe",{className:h.a.video,title:a,src:n}),Object(x.jsx)("p",{children:c}),Object(x.jsx)("button",{onClick:function(){s(a)},children:i?"Dislike \ud83d\udc4e":"Like \ud83d\udc4d"})]})},O=n(20),g=n.n(O),v="images",_=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=i();t&&t[0]?r(t):e()}),[]),Object(a.useEffect)((function(){n&&n[0]&&c()}),[n]);var c=function(){localStorage.setItem(v,JSON.stringify(n))},i=function(){var e=localStorage.getItem(v);return e=JSON.parse(e)},o=function(e){var t=n.findIndex((function(t){return t.date===e})),a=Object(s.a)(n);a[t].liked=!a[t].liked,r(a)};return Object(x.jsx)("div",{className:g.a.cards,children:n.map((function(e){return Object(x.jsx)(m,{title:e.title,url:e.url,captureDate:e.date,mediaType:e.media_type,explanation:e.explanation,liked:e.liked,toggleLikeImage:o},e.date)}))})};var k=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(_,{})})};i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={card:"Card_card__6xqlS",image:"Card_image__2tUHh",video:"Card_video__3DqIU"}}},[[49,1,2]]]);
//# sourceMappingURL=main.f3d9c380.chunk.js.map