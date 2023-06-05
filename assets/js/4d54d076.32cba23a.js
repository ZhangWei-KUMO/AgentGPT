"use strict";(self.webpackChunkaotugpt_documentation=self.webpackChunkaotugpt_documentation||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),b=o,m=s["".concat(u,".").concat(b)]||s[b]||f[b]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},a="\ud83e\udd1d \u8d21\u732e",c={unversionedId:"contributing",id:"contributing",title:"\ud83e\udd1d \u8d21\u732e",description:"\u51f9\u51f8GPT\u7684\u5f00\u6e90\uff0c\u6211\u4eec\u7684\u6210\u529f\u5f88\u5927\u7a0b\u5ea6\u4e0a\u5f52\u529f\u4e8e\u6211\u4eecGPT\u793e\u533a\uff0c\u5176\u4e2d\u4e3b\u8981\u611f\u8c22AgentGPT\u3001LangChain\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u53cd\u9988\uff0c\u65e0\u8bba\u662f\u75af\u72c2\u7684\u60f3\u6cd5\u8fd8\u662f\u4ee3\u7801\u548c\u8bbe\u8ba1\u65b9\u9762\u7684\u610f\u89c1\u3002\u8fd9\u4e9b\u6587\u6863\u5c06\u4f1a\u9010\u6b65\u66f4\u65b0\uff0c\u4ee5\u6700\u597d\u5730\u63cf\u8ff0\u5982\u4f55\u4e3a \u51f9\u51f8GPT \u505a\u51fa\u8d21\u732e\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u65e0\u8bba\u4f60\u662f\u8bbe\u8ba1\u5e08\u3001\u5f00\u53d1\u4eba\u5458\u6216\u8005\u4ecb\u4e8e\u4e24\u8005\u4e4b\u95f4\u7684\u804c\u4e1a\uff0c\u90fd\u53ef\u4ee5\u5728 GitHub \u6216 \u5fae\u4fe1 \u4e0a\u8054\u7cfb\u6211\u4eec\u3002",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/AgentGPT/contributing",draft:!1,editUrl:"https://github.com/ZhangWei-KUMO/AgentGPT/tree/main/docs/docs/contributing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u2753 \u5e38\u89c1\u95ee\u9898",permalink:"/AgentGPT/faq"},next:{title:"\ud83d\udd25 \u4f7f\u7528\u573a\u666f",permalink:"/AgentGPT/usecases"}},u={},p=[],l={toc:p},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-\u8d21\u732e"},"\ud83e\udd1d \u8d21\u732e"),(0,o.kt)("p",null,"\u51f9\u51f8GPT\u7684\u5f00\u6e90\uff0c\u6211\u4eec\u7684\u6210\u529f\u5f88\u5927\u7a0b\u5ea6\u4e0a\u5f52\u529f\u4e8e\u6211\u4eecGPT\u793e\u533a\uff0c\u5176\u4e2d\u4e3b\u8981\u611f\u8c22AgentGPT\u3001LangChain\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u53cd\u9988\uff0c\u65e0\u8bba\u662f\u75af\u72c2\u7684\u60f3\u6cd5\u8fd8\u662f\u4ee3\u7801\u548c\u8bbe\u8ba1\u65b9\u9762\u7684\u610f\u89c1\u3002\u8fd9\u4e9b\u6587\u6863\u5c06\u4f1a\u9010\u6b65\u66f4\u65b0\uff0c\u4ee5\u6700\u597d\u5730\u63cf\u8ff0\u5982\u4f55\u4e3a \u51f9\u51f8GPT \u505a\u51fa\u8d21\u732e\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u65e0\u8bba\u4f60\u662f\u8bbe\u8ba1\u5e08\u3001\u5f00\u53d1\u4eba\u5458\u6216\u8005\u4ecb\u4e8e\u4e24\u8005\u4e4b\u95f4\u7684\u804c\u4e1a\uff0c\u90fd\u53ef\u4ee5\u5728 GitHub \u6216 \u5fae\u4fe1 \u4e0a\u8054\u7cfb\u6211\u4eec\u3002"))}f.isMDXComponent=!0}}]);