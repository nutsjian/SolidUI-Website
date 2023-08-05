"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[7425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const l={id:"development-front",title:"\u524d\u7aef\u7f16\u8bd1",sidebar_position:4},i="SolidUI \u524d\u7aef\u7f16\u8bd1",a={unversionedId:"development/development-front",id:"development/development-front",title:"\u524d\u7aef\u7f16\u8bd1",description:"1.\u524d\u7f6e\u6761\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/frontend-document.md",sourceDirName:"development",slug:"/development/development-front",permalink:"/zh-CN/docs/development/development-front",draft:!1,editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/frontend-document.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"development-front",title:"\u524d\u7aef\u7f16\u8bd1",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u9879\u76ee\u8d21\u732e",permalink:"/zh-CN/docs/development/develop-contributing"},next:{title:"\u9879\u76ee\u5171\u5efa\u6d41\u7a0b",permalink:"/zh-CN/docs/development/development-construction"}},p={},d=[{value:"1.\u524d\u7f6e\u6761\u4ef6",id:"1\u524d\u7f6e\u6761\u4ef6",level:2},{value:"1.1 \u5b89\u88c5Node.js",id:"11-\u5b89\u88c5nodejs",level:3},{value:"1.2 \u6e90\u7801\u83b7\u53d6",id:"12-\u6e90\u7801\u83b7\u53d6",level:3},{value:"2.\u7f16\u8bd1",id:"2\u7f16\u8bd1",level:2},{value:"2.1 \u5b89\u88c5npm\u4f9d\u8d56",id:"21-\u5b89\u88c5npm\u4f9d\u8d56",level:3},{value:"2.2. \u6253\u5305\u9879\u76ee",id:"22-\u6253\u5305\u9879\u76ee",level:3}],c={toc:d},u="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"solidui-\u524d\u7aef\u7f16\u8bd1"},"SolidUI \u524d\u7aef\u7f16\u8bd1"),(0,o.kt)("h2",{id:"1\u524d\u7f6e\u6761\u4ef6"},"1.\u524d\u7f6e\u6761\u4ef6"),(0,o.kt)("h3",{id:"11-\u5b89\u88c5nodejs"},"1.1 \u5b89\u88c5Node.js"),(0,o.kt)("p",null,"\u8be5\u6b65\u9aa4\u4ec5\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u6267\u884c,\u5982\u679c\u5df2\u6709node\u73af\u5883\uff0c\u53ef\u8df3\u8fc7"),(0,o.kt)("p",null,"\u5c06Node.js\u4e0b\u8f7d\u5230\u672c\u5730\uff0c\u5b89\u88c5\u5373\u53ef\u3002\u4e0b\u8f7d\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://nodejs.cn/download/"},"http://nodejs.cn/download/")," \uff08\u5efa\u8bae\u4f7f\u7528node v16\u7248\u672c\uff09"),(0,o.kt)("h3",{id:"12-\u6e90\u7801\u83b7\u53d6"},"1.2 \u6e90\u7801\u83b7\u53d6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u65b9\u5f0f1\uff1a\u4ecegithub\u4ed3\u5e93 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CloudOrc/SolidUI"},"https://github.com/CloudOrc/SolidUI")," \u83b7\u53d6\u9879\u76ee\u7684\u6e90\u4ee3\u7801\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u65b9\u5f0f2\uff1a\u4ece",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CloudOrc/SolidUI/releases"},"https://github.com/CloudOrc/SolidUI/releases")," \u4e0b\u8f7d\u4e0b\u8f7d\u6240\u9700\u7248\u672c\u7684\u6e90\u7801\u5305\u3002"))),(0,o.kt)("h2",{id:"2\u7f16\u8bd1"},"2.\u7f16\u8bd1"),(0,o.kt)("h3",{id:"21-\u5b89\u88c5npm\u4f9d\u8d56"},"2.1 \u5b89\u88c5npm\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u4e2d\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#\u8fdb\u5165\u9879\u76eeWEB\u6839\u76ee\u5f55\ncd solidui-x.x.x/solidui-web\n#\u5b89\u88c5\u9879\u76ee\u6240\u9700\u4f9d\u8d56\nnpm install --legacy-peer-deps \n")),(0,o.kt)("p",null,"\u8be5\u6b65\u9aa4\u4ec5\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u6267\u884c\u3002"),(0,o.kt)("h3",{id:"22-\u6253\u5305\u9879\u76ee"},"2.2. \u6253\u5305\u9879\u76ee"),(0,o.kt)("p",null,"\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u4e2d\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm run build\n")),(0,o.kt)("p",null,"\u4e0a\u8ff0\u547d\u4ee4\u6267\u884c\u6210\u529f\u540e\uff0c\u4f1a\u751f\u6210\u524d\u7aef\u7ba1\u7406\u53f0\u5b89\u88c5\u5305 dist\uff0c\u53ef\u4ee5\u76f4\u63a5\u5c06\u8be5\u6587\u4ef6\u5939\u653e\u8fdb\u60a8\u7684\u9759\u6001\u670d\u52a1\u5668\u4e2d\uff0c\u6216\u8005\u53c2\u8003\u5b89\u88c5\u6587\u6863\uff0c\u4f7f\u7528\u811a\u672c\u8fdb\u884c\u90e8\u7f72\u5b89\u88c5\u3002"))}s.isMDXComponent=!0}}]);