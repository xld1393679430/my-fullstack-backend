(this.webpackJsonpfullstackopen=this.webpackJsonpfullstackopen||[]).push([[13],{108:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return d}));var r=n(26),o=n.n(r),c=n(36),a=n(136),s=n(50),i={login:function(){var e=Object(c.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/api/login",{username:t,password:n}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},u=n(65),l=function(e){return{type:"UPDATE",data:e}},p=function(){return{type:"LOGOUT"}},d=function(e){var t=e.username,n=e.password;return function(){var e=Object(c.a)(o.a.mark((function e(r){var c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="loginMessageKey",a.b.loading({content:"\u767b\u9646\u4e2d...",key:c}),e.prev=2,e.next=5,i.login(t,n);case 5:s=e.sent,a.b.success({content:"\u767b\u5f55\u6210\u529f",key:c}),localStorage.setItem("loggedNoteappUser",JSON.stringify(s)),u.a.setToken(s.token),r({type:"LOGIN",data:s}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0,e.t0.response,"error---"),a.b.warning({content:"\u767b\u5f55\u5931\u8d25: ".concat(e.t0.response.data.error),key:c});case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()}},177:function(e,t,n){var r={"./counter":[83,9,6],"./counter/":[83,9,6],"./counter/index":[83,9,6],"./counter/index.jsx":[83,9,6],"./counter2":[84,9,7],"./counter2/":[84,9,7],"./counter2/index":[84,9,7],"./counter2/index.jsx":[84,9,7],"./home":[85,9,9],"./home/":[85,9,9],"./home/index":[85,9,9],"./home/index.jsx":[85,9,9],"./login":[88,9,0,1,2,5],"./login/":[88,9,0,1,2,5],"./login/LoginForm":[141,9,0,1,2,12],"./login/LoginForm.jsx":[141,9,0,1,2,12],"./login/index":[88,9,0,1,2,5],"./login/index.jsx":[88,9,0,1,2,5],"./note":[86,9,10],"./note/":[86,9,10],"./note/index":[86,9,10],"./note/index.jsx":[86,9,10],"./notes":[89,9,0,1,3,4],"./notes/":[89,9,0,1,3,4],"./notes/NoteForm":[142,9,0,11],"./notes/NoteForm.jsx":[142,9,0,11],"./notes/index":[89,9,0,1,3,4],"./notes/index.css":[184,7,16],"./notes/index.jsx":[89,9,0,1,3,4],"./users":[87,9,8],"./users/":[87,9,8],"./users/index":[87,9,8],"./users/index.jsx":[87,9,8]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(o,t[1])}))}o.keys=function(){return Object.keys(r)},o.id=177,e.exports=o},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(19),c=n.n(o),a=n(55),s=n(63),i=function(e){e&&e instanceof Function&&n.e(17).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),c(e),a(e)}))},u=n(189),l=n(65),p=n(16),d=n(186),f=n(128),j=n.n(f),h=n(12),x=function(){return Object(h.jsx)(d.a,{})},b=function(e){return j()({loader:function(){return n(177)("./".concat(e))},loading:x})},O=[{path:"/",title:"\u9996\u9875",exact:!0,component:b("home")},{path:"/counter",title:"\u8ba1\u6570\u9875",component:b("counter")},{path:"/counter2",title:"\u8ba1\u6570\u98752",component:b("counter2")},{path:"/note/:id",title:"\u7b14\u8bb0\u8be6\u60c5",hide:!0,component:b("note")},{path:"/notes",title:"\u7b14\u8bb0\u5217\u8868",component:b("notes")},{path:"/users",title:"\u7528\u6237",component:b("users")},{path:"/login",title:"\u767b\u5f55",component:b("login")}];var m=function(){return Object(h.jsx)(p.c,{children:O.map((function(e){return Object(h.jsx)(p.a,{exact:e.exact,path:e.path,component:e.component},e.path)}))})},g=n(82),v=n(188),y=n(185),k=n(190),N=n(191),w=n(192),T=(n(179),v.a.Header),E=v.a.Sider,L=v.a.Content,I=function(e){var t=e.children,n=Object(p.f)().location.pathname,o=Object(r.useState)(!1),c=Object(g.a)(o,2),s=c[0],i=c[1],u=Object(r.useState)(""),l=Object(g.a)(u,2),d=l[0],f=l[1];return Object(r.useEffect)((function(){f(n)}),[]),Object(h.jsxs)(v.a,{id:"components-layout-demo-custom-trigger",children:[Object(h.jsxs)(E,{style:{overflow:"auto",height:"100vh",position:"fixed",left:0},trigger:null,collapsible:!0,collapsed:s,children:[Object(h.jsx)("div",{className:"logo"}),Object(h.jsx)(y.a,{theme:"dark",mode:"inline",selectedKeys:[d],onClick:function(e){return f(e.key)},children:O.map((function(e){return!e.hide&&Object(h.jsx)(y.a.Item,{icon:Object(h.jsx)(k.a,{}),children:Object(h.jsx)(a.b,{to:e.path,children:e.title})},e.path)}))})]}),Object(h.jsxs)(v.a,{className:"site-layout",style:{marginLeft:200},children:[Object(h.jsx)(T,{className:"site-layout-background",style:{padding:0},children:Object(h.jsx)("span",{className:"trigger",onClick:function(){i(!s)},children:s?Object(h.jsx)(N.a,{}):Object(h.jsx)(w.a,{})})}),Object(h.jsx)(L,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:t})]})]})},P=n(108);n(180);var F=function(){var e=Object(s.b)();return Object(r.useEffect)((function(){var t=localStorage.getItem("loggedNoteappUser");if(t){var n=JSON.parse(t);e(Object(P.c)(n)),l.a.setToken(n.token)}}),[]),Object(h.jsx)("div",{children:Object(h.jsxs)(I,{children:[Object(h.jsx)(u.a,{}),Object(h.jsx)(m,{})]})})},S=n(42),C=n(134),U=n(135),D=n(137),G=[],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_NOTE":return t.data;case"NEW_NOTE":return[].concat(Object(D.a)(e),[t.data]);case"TOGGLE_IMPORTANCE":return t.data;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;case"UPDATE":return t.data;default:return e}},J=Object(S.combineReducers)({notes:_,user:A}),M=Object(S.createStore)(J,Object(U.composeWithDevTools)(Object(S.applyMiddleware)(C.a)));n(181);c.a.render(Object(h.jsx)(s.a,{store:M,children:Object(h.jsx)(a.a,{children:Object(h.jsx)(F,{})})}),document.getElementById("root")),i()},50:function(e,t,n){"use strict";var r=n(127),o=n.n(r),c=n(79),a=n.n(c),s=o.a.create({});s.interceptors.request.use((function(e){return a.a.start(),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return a.a.done(),Promise.resolve(e)}),(function(e){return a.a.done(),Promise.reject(e)})),t.a=s},65:function(e,t,n){"use strict";var r=n(26),o=n.n(r),c=n(36),a=n(50),s="/api/notes",i=null,u=function(){var e=Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.get(s).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:i}},e.next=3,a.a.post(s,t,n).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.put("".concat(s,"/").concat(t),n).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();t.a={getNotes:u,createNote:l,updateNote:p,setToken:function(e){i="bearer ".concat(e)}}}},[[182,14,15]]]);
//# sourceMappingURL=main.aa730707.chunk.js.map