(this.webpackJsonpfullstackopen=this.webpackJsonpfullstackopen||[]).push([[0],{59:function(t,e,n){},60:function(t,e,n){},78:function(t,e,n){},81:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(18),u=n.n(a),o=(n(59),n(60),n(34)),s=n(16),i=n.n(s),p=n(20),f=n(25),l=n(83),j=n(22),b=n.n(j),d="api/notes",h={getNotes:function(){var t=Object(p.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get(d).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),createNote:function(){var t=Object(p.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post(d,e).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),updateNote:function(){var t=Object(p.a)(i.a.mark((function t(e,n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.put("".concat(d,"/").concat(e),n).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},O=(n(78),n(6)),m=function(t){var e=t.message;return null===e?null:Object(O.jsx)("div",{className:"error",children:e})},v=function(t){var e=t.note,n=e.content,r=e.important,c=t.toggleImportant;return Object(O.jsxs)("li",{className:"note",children:[n,Object(O.jsx)("button",{onClick:c,style:{marginLeft:10},children:r?"make no important":"make important"})]})},x=function(){var t="messageKey",e=Object(r.useState)([]),n=Object(f.a)(e,2),c=n[0],a=n[1],u=Object(r.useState)(""),s=Object(f.a)(u,2),j=s[0],b=s[1],d=Object(r.useState)(!1),x=Object(f.a)(d,2),g=x[0],k=x[1],w=Object(r.useState)(null),y=Object(f.a)(w,2),N=y[0],S=(y[1],g?c:c.filter((function(t){return t.important}))),C=function(){var e=Object(p.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),l.b.loading({content:"\u6dfb\u52a0\u4e2d...",key:t}),console.log(n.target,"event"),r={content:j,date:(new Date).toISOString(),important:Math.random()<.5,id:c.length+1},e.prev=4,e.next=7,h.createNote(r);case 7:l.b.success({content:"\u6dfb\u52a0\u6210\u529f",key:t}),a(c.concat(r)),b(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),l.b.error({content:"\u6dfb\u52a0\u5931\u8d25",key:t});case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var t=Object(p.a)(i.a.mark((function t(e){var n,r,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.find((function(t){return t.id===e})),r=Object(o.a)(Object(o.a)({},n),{},{important:!n.important}),t.next=4,h.updateNote(e,r);case 4:u=t.sent,a(c.map((function(t){return t.id===e?u:t})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){h.getNotes().then((function(t){return a(t)}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"notes"}),Object(O.jsx)(m,{message:N}),Object(O.jsxs)("button",{onClick:function(){k(!g)},children:["show ",g?"important":"all"]}),Object(O.jsx)("ul",{children:S.map((function(t,e){return Object(O.jsx)(v,{note:t,toggleImportant:function(){return I(t.id)}},e)}))}),Object(O.jsxs)("form",{onSubmit:C,children:[Object(O.jsx)("input",{placeholder:"\u8bf7\u8f93\u5165",value:j,onChange:function(t){b(t.target.value)}}),Object(O.jsx)("button",{type:"submit",children:"\u63d0\u4ea4"})]})]})};var g=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(x,{})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,u=e.getTTFB;n(t),r(t),c(t),a(t),u(t)}))};u.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),k()}},[[81,1,2]]]);
//# sourceMappingURL=main.26312f10.chunk.js.map