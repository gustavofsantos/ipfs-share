(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(n,e,t){n.exports=t(42)},42:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(11),o=t.n(c),u=t(44),i=t(45),l=t(2),s=t.n(l),p=t(6),f=t(10),d=t(43),m=t(3),b=t(4);function h(){var n=Object(m.a)(["\n  width: 100%;\n  max-width: 600px;\n  margin: 30px;\n  background: #FFF;\n  border-radius: 6px;\n  padding: 20px;\n"]);return h=function(){return n},n}function v(){var n=Object(m.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n"]);return v=function(){return n},n}var g=b.c.div(v()),x=b.c.div(h()),w=t(24);function E(){var n=Object(m.a)(["\n  display: flex;\n  color: ",";\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n"]);return E=function(){return n},n}function j(){var n=Object(m.a)(["\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  cursor: pointer;\n\n  transition: height 0.2s ease;\n\n  ",";\n  ",";\n"]);return j=function(){return n},n}function y(){var n=Object(m.a)(["\n  border-color: #D61242;\n"]);return y=function(){return n},n}function O(){var n=Object(m.a)(["\n  border-color: #13BD95;\n"]);return O=function(){return n},n}var k=Object(b.b)(O()),D=Object(b.b)(y()),F={default:"#444",error:"",success:""},A=b.c.div.attrs({className:"dropzone"})(j(),function(n){return n.isDragActive&&k},function(n){return n.isDragReject&&D}),S=b.c.p(E(),function(n){return F[n.type||"default"]});var z=function(n){var e=n.onDrop;return a.a.createElement(w.a,{onDropAccepted:e},function(n){var e=n.getRootProps,t=n.getInputProps,r=n.isDragActive,c=n.isDragReject;return a.a.createElement(A,Object.assign({},e(),{isDragActive:r,isDragReject:c}),a.a.createElement("input",t()),function(n,e){return n?e?a.a.createElement(S,{type:"error"},"File not supported"):a.a.createElement(S,{type:"success"},"Release your files here"):a.a.createElement(S,null,"Drop your files here")}(r,c))})};function C(){var n=Object(m.a)(["\n  display: flex;\n  align-items: center;\n\n  div {\n    display: flex;\n    flex-direction: column;\n\n    span {\n      font-size: 12px;\n      color: #999;\n      margin-top: 5px;\n\n      button {\n        border: 0;\n        background: transparent;\n        color: #999;\n        margin-left: 5px;\n        cursor: pointer;\n      }\n    }\n  }\n"]);return C=function(){return n},n}function P(){var n=Object(m.a)(["\n  margin-top: 20px;\n\n  li {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #444;\n\n    & + li {\n      margin-top: 15px;\n    }\n  }\n\n"]);return P=function(){return n},n}var I=b.c.ul(P()),R=b.c.div(C());function B(n){var e=n.files;return a.a.createElement(I,null,e.map(function(n,e){return a.a.createElement("li",{key:e},a.a.createElement(R,null,a.a.createElement("div",null,a.a.createElement("strong",null,n.file.name),a.a.createElement("span",null,n.file.size," bytes"),a.a.createElement("span",null,n.metadataHash))))}))}var H=t(9);function J(){var n=Object(m.a)(["\n  color: #FFF;\n  font-weight: bold;\n"]);return J=function(){return n},n}function N(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: left;\n  width: 100%;\n  max-width: 600px;\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-top: 40px;\n"]);return N=function(){return n},n}var L=b.c.div(N()),U=b.c.h1(J()),q=function(n){return a.a.createElement(L,null,a.a.createElement(U,null,n.children))},G={foreground:"#444",foregroundLight:"#999",background:"#021EA4",backgroundCard:"#FFF"};function K(){var n=Object(m.a)(["\n  width: 100%;\n  max-width: ",";\n  min-width: 100%;\n\n  border: none;\n  border-radius: 6px;\n  padding: 10px;\n\n  cursor: pointer;\n\n  background: ",";\n  color: ",";\n  font-weight: bold;\n"]);return K=function(){return n},n}var M=b.c.button(K(),"400px",G.backgroundCard,G.foreground),Q=function(n){return a.a.createElement(M,null,n.children)};function T(){var n=Object(r.useState)([]),e=Object(f.a)(n,2),t=e[0],c=e[1],o=function(){var n=Object(p.a)(s.a.mark(function n(e){var r,a;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.map(function(){var n=Object(p.a)(s.a.mark(function n(e){var t,r,a;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(H.a)(e);case 3:return t=n.sent,r={name:e.name,size:e.size,hash:t},n.next=7,Object(H.b)(r);case 7:return a=n.sent,n.abrupt("return",{metadataHash:a,file:e});case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0);case 14:case"end":return n.stop()}},n,this,[[0,11]])}));return function(e){return n.apply(this,arguments)}}());case 2:return r=n.sent,n.next=5,Promise.all(r);case 5:a=n.sent,c(t.concat(a));case 7:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}();return a.a.createElement(g,null,a.a.createElement(q,null,"IPFS Share"),a.a.createElement(x,null,a.a.createElement(z,{onDrop:o}),!!t.length&&a.a.createElement(B,{files:t})),a.a.createElement(d.a,{to:"/downloader"},a.a.createElement(Q,null,"Downloader")))}function V(){var n=Object(m.a)(["\n  background: ",";\n  border: 1px solid #ddd;\n  border-radius: 6px;\n\n  input {\n    width: 100%;\n    padding: 15px;\n    font-size: 14px;\n    font-weight: 400;\n    text-align: center;\n    border: none;\n    border-radius: 6px;\n    outline: none;\n    color: ",";\n  }\n"]);return V=function(){return n},n}var W=b.c.div(V(),G.backgroundCard,G.foreground);function X(n){var e=Object(r.useState)(""),t=Object(f.a)(e,2),c=t[0],o=t[1];function u(){return(u=Object(p.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n.onAddHash(c);case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}return a.a.createElement(W,null,a.a.createElement("form",{onSubmit:function(n){return u.apply(this,arguments)}},a.a.createElement("input",{type:"text",onChange:function(n){var e=n.target.value;o(e)},value:c,placeholder:"Paste your IPFS CID here"})))}function Y(){var n=Object(m.a)(["\n  padding: 10px;\n  border: none;\n  border-radius: 6px;\n  background: #163EC2;\n  font-weight: bold;\n  color: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 4px 16px rgba(113, 144, 194, 0.4);\n\n  & :hover {\n    box-shadow: 0 4px 16px rgba(113, 144, 194, 0.8);\n  }\n"]);return Y=function(){return n},n}var Z=b.c.button(Y()),$=function(n){return a.a.createElement(Z,{onClick:n.onClick},"Download")};function _(n){var e=n.name,t=n.hash;return Object(p.a)(s.a.mark(function n(){var r,a,c;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(H.c)(t);case 2:r=n.sent,a=new Uint8Array(r),c=new Blob([a],{type:"application/octet-stream"}),window.saveAs(c,e);case 6:case"end":return n.stop()}},n,this)}))}function nn(n){var e=n.files;return a.a.createElement(I,null,e.map(function(n,e){return a.a.createElement("li",{key:e},a.a.createElement(R,null,a.a.createElement("div",null,a.a.createElement("strong",null,n.name),a.a.createElement("span",null,n.size," bytes"))),a.a.createElement($,{onClick:_(n)}))}))}function en(){var n=Object(r.useState)([]),e=Object(f.a)(n,2),t=e[0],c=e[1];function o(){return(o=Object(p.a)(s.a.mark(function n(e){var r,a;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(H.d)(e);case 2:r=n.sent,a=JSON.parse(r),console.log("metadata",a),c(t.concat(a));case 6:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}return a.a.createElement(g,null,a.a.createElement(q,null,"IPFS Downloader"),a.a.createElement(x,null,a.a.createElement(X,{onAddHash:function(n){return o.apply(this,arguments)}}),!!t.length&&a.a.createElement(nn,{files:t})),a.a.createElement(d.a,{to:"/share"},a.a.createElement(Q,null,"Share")))}function tn(){var n=Object(m.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    background: #021EA4;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n"]);return tn=function(){return n},n}var rn=Object(b.a)(tn());var an=function(){return a.a.createElement(u.a,null,a.a.createElement("div",null,a.a.createElement(rn,null),a.a.createElement(i.a,{path:"/",exact:!0,component:T}),a.a.createElement(i.a,{path:"/share",component:T}),a.a.createElement(i.a,{path:"/downloader",component:en})))};o.a.render(a.a.createElement(an,null),document.getElementById("root"))},9:function(n,e,t){"use strict";(function(n){t.d(e,"a",function(){return i}),t.d(e,"b",function(){return s}),t.d(e,"d",function(){return f}),t.d(e,"c",function(){return m});var r=t(2),a=t.n(r),c=t(6),o=null;function u(n){return new Promise(function(e,t){var r=new FileReader;r.onload=function(n){var t=n.target.result;e(t)},r.onerror=t,r.readAsArrayBuffer(n)})}function i(n){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark(function e(t){var r,c,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(t);case 3:return r=e.sent,e.next=6,o.add({path:t.name,content:n.from(r)});case 6:return c=e.sent,i=c[0].hash,e.abrupt("return",i);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(a.a.mark(function e(t){var r,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n.from(JSON.stringify(t)),e.next=4,o.add(r);case 4:return c=e.sent,e.abrupt("return",c[0].hash);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark(function n(e){var t,r,c;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get(e);case 3:return t=n.sent,r=t[0].content,c=r.toString(),n.abrupt("return",c);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}},n,this,[[0,9]])}))).apply(this,arguments)}function m(n){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark(function n(e){var t,r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get(e);case 3:return t=n.sent,r=t[0].content,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}},n,this,[[0,8]])}))).apply(this,arguments)}window.ipfs.enable().then(function(n){o=n})}).call(this,t(37).Buffer)}},[[25,2,1]]]);
//# sourceMappingURL=main.9620da67.chunk.js.map