(this.webpackJsonpfullstackopen=this.webpackJsonpfullstackopen||[]).push([[6],{209:function(e,c,n){"use strict";var t=n(73),s=n(0);c.a=function(){var e=Object(s.useState)(0),c=Object(t.a)(e,2),n=c[0],r=c[1];return{count:n,increase:function(){r(n+1)},decrease:function(){r(n-1)},zero:function(){r(0)}}}},89:function(e,c,n){"use strict";n.r(c);var t=n(0),s=n(78),r=n(209),o=n(6);c.default=function(){var e=Object(r.a)(),c=e.count,n=e.increase,u=e.decrease,i=e.zero,a=Object(t.useRef)();return 2===c&&(a.current=c),Object(t.useEffect)((function(){2===c&&console.log(11111,c,a)}),[c]),Object(t.useEffect)((function(){console.log(22222)}),[2===a.current]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["count: ",c]}),Object(o.jsx)(s.a,{onClick:n,children:"increase"}),Object(o.jsx)(s.a,{onClick:u,children:"decrease"}),Object(o.jsx)(s.a,{onClick:i,children:"zero"})]})}}}]);
//# sourceMappingURL=6.5604354e.chunk.js.map