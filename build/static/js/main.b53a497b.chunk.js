(this.webpackJsonpfullstackopen=this.webpackJsonpfullstackopen||[]).push([[13],{174:function(e,t,n){},184:function(e,t,n){var r={"./counter":[89,9,6],"./counter/":[89,9,6],"./counter/index":[89,9,6],"./counter/index.jsx":[89,9,6],"./counter2":[90,9,7],"./counter2/":[90,9,7],"./counter2/index":[90,9,7],"./counter2/index.jsx":[90,9,7],"./home":[91,9,8],"./home/":[91,9,8],"./home/index":[91,9,8],"./home/index.jsx":[91,9,8],"./login":[94,9,0,1,2,5],"./login/":[94,9,0,1,2,5],"./login/LoginForm":[146,9,0,1,2,12],"./login/LoginForm.jsx":[146,9,0,1,2,12],"./login/index":[94,9,0,1,2,5],"./login/index.jsx":[94,9,0,1,2,5],"./main":[41,9],"./main/":[41,9],"./main/index":[41,9],"./main/index.jsx":[41,9],"./note":[92,9,9],"./note/":[92,9,9],"./note/index":[92,9,9],"./note/index.jsx":[92,9,9],"./notes":[95,9,0,1,3,4],"./notes/":[95,9,0,1,3,4],"./notes/NoteForm":[147,9,0,11],"./notes/NoteForm.jsx":[147,9,0,11],"./notes/index":[95,9,0,1,3,4],"./notes/index.css":[189,7,16],"./notes/index.jsx":[95,9,0,1,3,4],"./users":[93,9,10],"./users/":[93,9,10],"./users/index":[93,9,10],"./users/index.jsx":[93,9,10]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(a,t[1])}))}a.keys=function(){return Object.keys(r)},a.id=184,e.exports=a},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(20),o=n.n(a),c=n(46),i=n(52),s=function(e){e&&e instanceof Function&&n.e(17).then(n.bind(null,299)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))},u=n(18),l=n(140),d=n(77),p=n(53),j=n(41),h=(n(185),n(11));var f=function(){var e=Object(c.b)(),t=Object(u.g)(),n=Object(c.c)((function(e){return e})).user;return Object(r.useEffect)((function(){var n=localStorage.getItem("loggedNoteappUser");if(!n)return t.replace("/login"),void l.b.warn("\u767b\u5f55\u4fe1\u606f\u5931\u6548\uff0c \u8bf7\u91cd\u91cd\u767b\u5f55");var r=JSON.parse(n);e(Object(d.c)(r)),p.a.setToken(r.token)}),[]),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.a,{from:"/",to:n?"/main/":"/login",exact:!0}),Object(h.jsx)(u.b,{path:"/main",component:j.default}),Object(h.jsx)(u.b,{path:"/login",exact:!0,component:Object(j.lazyComponent)("login")})]})},m=n(48),b=n(138),x=n(139),O=n(141),g=[],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_NOTE":return t.data;case"NEW_NOTE":return[].concat(Object(O.a)(e),[t.data]);case"TOGGLE_IMPORTANCE":return t.data;default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;case"UPDATE":return t.data;default:return e}},k=Object(m.combineReducers)({notes:v,user:y}),N=Object(m.createStore)(k,Object(x.composeWithDevTools)(Object(m.applyMiddleware)(b.a)));n(186);o.a.render(Object(h.jsx)(c.a,{store:N,children:Object(h.jsx)(i.a,{children:Object(h.jsx)(f,{})})}),document.getElementById("root")),s()},37:function(e,t,n){"use strict";var r=n(45),a=n(131),o=n.n(a),c=n(87),i=n.n(c),s=JSON.parse(localStorage.getItem("loggedNoteappUser")||"{}"),u=o.a.create({});u.interceptors.request.use((function(e){return i.a.start(),s&&s.token&&(e.headers=Object(r.a)(Object(r.a)({},e.headers),{},{Authorization:"bearer ".concat(s.token)})),e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return i.a.done(),e}),(function(e){return i.a.done(),Promise.reject(e)})),t.a=u},41:function(e,t,n){"use strict";n.r(t),n.d(t,"lazyComponent",(function(){return w})),n.d(t,"routers",(function(){return T}));var r=n(0),a=n(18),o=n(135),c=n.n(o),i=n(104),s=n(194),u=n(191),l=n(190),d=n(76),p=n(195),j=n(196),h=n(52),f=n(46),m=n(53),b=n(77),x=(n(174),n(11)),O=s.a.Header,g=s.a.Sider,v=s.a.Content,y=function(e){var t=e.children,n=Object(f.b)(),o=Object(a.g)(),c=o.location.pathname,y=Object(r.useState)(""),k=Object(i.a)(y,2),N=k[0],w=k[1];return Object(r.useEffect)((function(){var e=c;c.startsWith("/main/note")?e="/main/notes":"/main/"===c&&(e="/main/home"),w(e)}),[]),Object(x.jsxs)(s.a,{id:"components-layout-demo-custom-trigger",children:[Object(x.jsxs)(g,{style:{overflow:"auto",height:"100vh",position:"fixed",left:0},children:[Object(x.jsx)("div",{className:"logo"}),Object(x.jsx)(u.a,{theme:"dark",mode:"inline",selectedKeys:[N],onClick:function(e){return w(e.key)},children:T.map((function(e){return!e.hide&&Object(x.jsx)(u.a.Item,{icon:Object(x.jsx)(j.a,{}),children:Object(x.jsx)(h.b,{to:e.path,children:e.title})},e.path)}))})]}),Object(x.jsxs)(s.a,{className:"site-layout",style:{marginLeft:200},children:[Object(x.jsx)(O,{className:"site-layout-header",children:Object(x.jsx)(l.a,{overlay:Object(x.jsxs)(u.a,{children:[Object(x.jsx)(u.a.Item,{children:Object(x.jsx)(d.a,{type:"link",children:"\u5173\u4e8e\u6211"})},"0"),Object(x.jsx)(u.a.Item,{children:Object(x.jsx)(d.a,{type:"link",onClick:function(){m.a.setToken(null),n(Object(b.b)()),o.push("/login")},children:"\u9000\u51fa"})},"1")]}),trigger:["click"],children:Object(x.jsx)(p.a,{style:{backgroundColor:"#87d068"},icon:Object(x.jsx)(j.a,{})})})}),Object(x.jsx)(v,{className:"site-layout-content",style:{margin:"24px 16px",padding:24,minHeight:280},children:t})]})]})},k=n(192);var N=function(){return Object(x.jsx)(k.a,{})},w=function(e){return c()({loader:function(){return n(184)("./".concat(e))},loading:N})},T=[{path:"/main/home",title:"\u9996\u9875",exact:!0,component:w("home")},{path:"/main/counter",title:"\u8ba1\u6570\u9875",exact:!0,component:w("counter")},{path:"/main/counter2",title:"\u8ba1\u6570\u98752",exact:!0,component:w("counter2")},{path:"/main/note/:id",title:"\u7b14\u8bb0\u8be6\u60c5",exact:!0,hide:!0,component:w("note")},{path:"/main/notes",title:"\u7b14\u8bb0\u5217\u8868",component:w("notes")},{path:"/main/users",title:"\u7528\u6237",component:w("users")},{path:"/main/login",title:"\u767b\u5f55",exact:!0,hide:!0,component:w("login")},{path:"/main/",redirect:"/main/home",isRedirect:!0,exact:!0,hide:!0}];t.default=function(){return Object(x.jsx)(y,{children:Object(x.jsx)(a.d,{children:T.map((function(e){return e.isRedirect?Object(x.jsx)(a.a,{to:e.redirect,exact:!0},e.path):Object(x.jsx)(a.b,{exact:e.exact,path:e.path,component:e.component},e.path)}))})})}},53:function(e,t,n){"use strict";var r=n(27),a=n.n(r),o=n(40),c=n(45),i=n(37),s="/api/notes",u=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(s).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post(s,t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("".concat(s,"/").concat(t),n).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();t.a={getNotes:u,createNote:l,updateNote:d,setToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(i.a.defaults.headers=Object(c.a)(Object(c.a)({},i.a.defaults.headers),{},{Authorization:"bearer ".concat(e.token)}),localStorage.setItem("loggedNoteappUser",JSON.stringify(e))):(i.a.defaults.headers=Object(c.a)(Object(c.a)({},i.a.defaults.headers),{},{Authorization:""}),localStorage.setItem("loggedNoteappUser",""))}}},77:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n(27),a=n.n(r),o=n(40),c=n(140),i=n(37),s={login:function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/api/login",{username:t,password:n}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},u=n(53),l=function(e){return{type:"UPDATE",data:e}},d=function(){return{type:"LOGOUT"}},p=function(e){var t=e.username,n=e.password;return function(){var e=Object(o.a)(a.a.mark((function e(r){var o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="loginMessageKey",c.b.loading({content:"\u767b\u9646\u4e2d...",key:o}),e.prev=2,e.next=5,s.login(t,n);case 5:i=e.sent,c.b.success({content:"\u767b\u5f55\u6210\u529f",key:o}),u.a.setToken(i),r({type:"LOGIN",data:i}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0,e.t0.response,"error---"),c.b.warning({content:"\u767b\u5f55\u5931\u8d25: ".concat(e.t0.response.data.error),key:o});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}}},[[187,14,15]]]);
//# sourceMappingURL=main.b53a497b.chunk.js.map