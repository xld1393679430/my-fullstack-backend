(this.webpackJsonpfullstackopen=this.webpackJsonpfullstackopen||[]).push([[6],{195:function(t,e,n){"use strict";var a=n(2),r=n(3),c=n(5),o=n(13),i=n(0),s=n.n(i),l=n(4),u=n.n(l),f=n(29),d=n(34),b=n(7),m=function t(e){return Object(b.a)(this,t),new Error("unreachable case: ".concat(JSON.stringify(e)))},p=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},v=function(t){return i.createElement(d.a,null,(function(e){var n,c=e.getPrefixCls,o=e.direction,s=t.prefixCls,l=t.size,f=t.className,d=p(t,["prefixCls","size","className"]),b=c("btn-group",s),v="";switch(l){case"large":v="lg";break;case"small":v="sm";break;case"middle":case void 0:break;default:console.warn(new m(l))}var h=u()(b,(n={},Object(r.a)(n,"".concat(b,"-").concat(v),v),Object(r.a)(n,"".concat(b,"-rtl"),"rtl"===o),n),f);return i.createElement("div",Object(a.a)({},d,{className:h}))}))},h=n(8),g=n(14),O=n(9),j=n(10),y=n(101),E=n(40),x=n(17),k=0,N={};function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=k++,a=e;function r(){(a-=1)<=0?(t(),delete N[n]):N[n]=Object(x.a)(r)}return N[n]=Object(x.a)(r),n}C.cancel=function(t){void 0!==t&&(x.a.cancel(N[t]),delete N[t])},C.ids=N;var w,S=n(20);function T(t){return!t||null===t.offsetParent||t.hidden}function P(t){var e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])}var A=function(t){Object(O.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(b.a)(this,n),(t=e.apply(this,arguments)).containerRef=i.createRef(),t.animationStart=!1,t.destroyed=!1,t.onClick=function(e,n){var a,r;if(!(!e||T(e)||e.className.indexOf("-leave")>=0)){var c=t.props.insertExtraNode;t.extraNode=document.createElement("div");var o=Object(g.a)(t).extraNode,i=t.context.getPrefixCls;o.className="".concat(i(""),"-click-animating-node");var s=t.getAttributeName();if(e.setAttribute(s,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&P(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){o.style.borderColor=n;var l=(null===(a=e.getRootNode)||void 0===a?void 0:a.call(e))||e.ownerDocument,u=l instanceof Document?l.body:null!==(r=l.firstChild)&&void 0!==r?r:l;w=Object(y.a)("\n      [".concat(i(""),"-click-animating-without-extra-node='true']::after, .").concat(i(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:t.csp,attachTo:u})}c&&e.appendChild(o),["transition","animation"].forEach((function(n){e.addEventListener("".concat(n,"start"),t.onTransitionStart),e.addEventListener("".concat(n,"end"),t.onTransitionEnd)}))}},t.onTransitionStart=function(e){if(!t.destroyed){var n=t.containerRef.current;e&&e.target===n&&!t.animationStart&&t.resetEffect(n)}},t.onTransitionEnd=function(e){e&&"fadeEffect"===e.animationName&&t.resetEffect(e.target)},t.bindAnimationEvent=function(e){if(e&&e.getAttribute&&!e.getAttribute("disabled")&&!(e.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!T(n.target)){t.resetEffect(e);var a=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");t.clickWaveTimeoutId=window.setTimeout((function(){return t.onClick(e,a)}),0),C.cancel(t.animationStartId),t.animationStart=!0,t.animationStartId=C((function(){t.animationStart=!1}),10)}};return e.addEventListener("click",n,!0),{cancel:function(){e.removeEventListener("click",n,!0)}}}},t.renderWave=function(e){var n=e.csp,a=t.props.children;if(t.csp=n,!i.isValidElement(a))return a;var r=t.containerRef;return Object(E.c)(a)&&(r=Object(E.a)(a.ref,t.containerRef)),Object(S.a)(a,{ref:r})},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this.containerRef.current;t&&1===t.nodeType&&(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var t=this.context.getPrefixCls,e=this.props.insertExtraNode;return"".concat(t(""),e?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(t){var e=this;if(t&&t!==this.extraNode&&t instanceof Element){var n=this.props.insertExtraNode,a=this.getAttributeName();t.setAttribute(a,"false"),w&&(w.innerHTML=""),n&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),["transition","animation"].forEach((function(n){t.removeEventListener("".concat(n,"start"),e.onTransitionStart),t.removeEventListener("".concat(n,"end"),e.onTransitionEnd)}))}}},{key:"render",value:function(){return i.createElement(d.a,null,this.renderWave)}}]),n}(i.Component);A.contextType=d.b;var I=n(54),R=n(53),L=n(81),z=n(30),W=n(100),B=function(){return{width:0,opacity:0,transform:"scale(0)"}},V=function(t){return{width:t.scrollWidth,opacity:1,transform:"scale(1)"}},D=function(t){var e=t.prefixCls,n=!!t.loading;return t.existIcon?s.a.createElement("span",{className:"".concat(e,"-loading-icon")},s.a.createElement(W.a,null)):s.a.createElement(z.b,{visible:n,motionName:"".concat(e,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:B,onAppearActive:V,onEnterStart:B,onEnterActive:V,onLeaveStart:V,onLeaveActive:B},(function(t,n){var a=t.className,r=t.style;return s.a.createElement("span",{className:"".concat(e,"-loading-icon"),style:r,ref:n},s.a.createElement(W.a,{className:a}))}))},J=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},U=/^[\u4e00-\u9fa5]{2}$/,_=U.test.bind(U);function M(t){return"text"===t||"link"===t}function G(t,e){var n=!1,a=[];return i.Children.forEach(t,(function(t){var e=Object(o.a)(t),r="string"===e||"number"===e;if(n&&r){var c=a.length-1,i=a[c];a[c]="".concat(i).concat(t)}else a.push(t);n=r})),i.Children.map(a,(function(t){return function(t,e){if(null!=t){var n=e?" ":"";return"string"!==typeof t&&"number"!==typeof t&&"string"===typeof t.type&&_(t.props.children)?Object(S.a)(t,{children:t.props.children.split("").join(n)}):"string"===typeof t?(_(t)&&(t=t.split("").join(n)),i.createElement("span",null,t)):t}}(t,e)}))}Object(I.a)("default","primary","ghost","dashed","link","text"),Object(I.a)("circle","round"),Object(I.a)("submit","button","reset");var H=function(t,e){var n,s,l=t.loading,b=void 0!==l&&l,m=t.prefixCls,p=t.type,v=t.danger,h=t.shape,g=t.size,O=t.className,j=t.children,y=t.icon,E=t.ghost,x=void 0!==E&&E,k=t.block,N=void 0!==k&&k,C=t.htmlType,w=void 0===C?"button":C,S=J(t,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),T=i.useContext(L.b),P=i.useState(!!b),I=Object(c.a)(P,2),z=I[0],W=I[1],B=i.useState(!1),V=Object(c.a)(B,2),U=V[0],H=V[1],$=i.useContext(d.b),q=$.getPrefixCls,F=$.autoInsertSpaceInButton,K=$.direction,Q=e||i.createRef(),X=i.useRef(),Y=function(){return 1===i.Children.count(j)&&!y&&!M(p)};s="object"===Object(o.a)(b)&&b.delay?b.delay||!0:!!b,i.useEffect((function(){clearTimeout(X.current),"number"===typeof s?X.current=window.setTimeout((function(){W(s)}),s):W(s)}),[s]),i.useEffect((function(){if(Q&&Q.current&&!1!==F){var t=Q.current.textContent;Y()&&_(t)?U||H(!0):U&&H(!1)}}),[Q]);var Z=function(e){var n,a=t.onClick;z||null===(n=a)||void 0===n||n(e)};Object(R.a)(!("string"===typeof y&&y.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(y,"` at https://ant.design/components/icon")),Object(R.a)(!(x&&M(p)),"Button","`link` or `text` button can't be a `ghost` button.");var tt=q("btn",m),et=!1!==F,nt="";switch(g||T){case"large":nt="lg";break;case"small":nt="sm"}var at=z?"loading":y,rt=u()(tt,(n={},Object(r.a)(n,"".concat(tt,"-").concat(p),p),Object(r.a)(n,"".concat(tt,"-").concat(h),h),Object(r.a)(n,"".concat(tt,"-").concat(nt),nt),Object(r.a)(n,"".concat(tt,"-icon-only"),!j&&0!==j&&!!at),Object(r.a)(n,"".concat(tt,"-background-ghost"),x&&!M(p)),Object(r.a)(n,"".concat(tt,"-loading"),z),Object(r.a)(n,"".concat(tt,"-two-chinese-chars"),U&&et),Object(r.a)(n,"".concat(tt,"-block"),N),Object(r.a)(n,"".concat(tt,"-dangerous"),!!v),Object(r.a)(n,"".concat(tt,"-rtl"),"rtl"===K),n),O),ct=y&&!z?y:i.createElement(D,{existIcon:!!y,prefixCls:tt,loading:!!z}),ot=j||0===j?G(j,Y()&&et):null,it=Object(f.a)(S,["navigate"]);if(void 0!==it.href)return i.createElement("a",Object(a.a)({},it,{className:rt,onClick:Z,ref:Q}),ct,ot);var st=i.createElement("button",Object(a.a)({},S,{type:w,className:rt,onClick:Z,ref:Q}),ct,ot);return M(p)?st:i.createElement(A,null,st)},$=i.forwardRef(H);$.displayName="Button",$.Group=v,$.__ANT_BUTTON=!0;var q=$;e.a=q},201:function(t,e,n){"use strict";var a=n(82),r=n(0);e.a=function(){var t=Object(r.useState)(0),e=Object(a.a)(t,2),n=e[0],c=e[1];return{count:n,increase:function(){c(n+1)},decrease:function(){c(n-1)},zero:function(){c(0)}}}},83:function(t,e,n){"use strict";n.r(e);n(0);var a=n(195),r=n(201),c=n(12);e.default=function(){var t=Object(r.a)(),e=t.count,n=t.increase,o=t.decrease,i=t.zero;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["count: ",e]}),Object(c.jsx)(a.a,{onClick:n,children:"increase"}),Object(c.jsx)(a.a,{onClick:o,children:"decrease"}),Object(c.jsx)(a.a,{onClick:i,children:"zero"})]})}}}]);
//# sourceMappingURL=6.55c36fa6.chunk.js.map