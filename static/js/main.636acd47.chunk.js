(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(6),s=c.n(n),i=c(2),l=c(7),o=c(0),j=function(e){var t=e.setCategories,c=Object(r.useState)(""),a=Object(i.a)(c,2),n=a[0],s=a[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return[n].concat(Object(l.a)(e))})),s((function(e){return""}))},children:Object(o.jsxs)("label",{className:"flex flex-col mx-4",htmlFor:"search",children:[Object(o.jsx)("span",{className:"text-gray-700",children:"Search:"}),Object(o.jsx)("input",{className:"block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0",placeholder:"Search in gift app",onChange:function(e){s(e.target.value)},value:n,type:"search",name:"search",required:!0})]})})},h=function(e){var t=Object(r.useState)([]),c=Object(i.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)(!0),l=Object(i.a)(s,2),o=l[0],j=l[1];return Object(r.useEffect)((function(){setTimeout((function(){fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.data;n(t),j(!1)})).catch((function(e){console.error(e)}))}),1e3)}),[e]),{data:a,loading:o}},x=function(e){var t=e.item;return Object(o.jsxs)("div",{className:"my-4 overflow-hidden bg-white border rounded shadow-lg ",children:[Object(o.jsx)("h3",{className:"my-2 text-xl font-bold text-center text-white cah3italize",children:Object(o.jsx)("span",{className:"text-transparent bg-gradient-to-r bg-clip-text from-red-400 to-blue-400",children:t.title})}),Object(o.jsx)("figure",{children:Object(o.jsx)("img",{className:"w-full bg-cover",loading:"lazy",src:t.images.original.url,alt:t.title})})]})},b=function(e){var t=e.url,c=h(t),r=c.data,a=c.loading;return Object(o.jsx)(o.Fragment,{children:a?Object(o.jsx)("div",{children:"Loading..."}):r&&r.map((function(e){return Object(o.jsx)(x,{item:e},e.id)}))})},d=(c(13),function(){return Object(o.jsxs)("header",{className:"sticky top-0 flex items-center justify-between h-16 px-2 bg-gray-100 shadow-md opacity-75",children:[Object(o.jsx)("div",{className:"flex items-center space-x-2",children:Object(o.jsx)("a",{href:"#",children:Object(o.jsx)("svg",{className:"w-6 h-6 text-gray-700 hover:text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})})}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"flex space-x-2",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://twitter.com/AstorAyestas",target:"_blank",rel:"noreferrer",className:"",children:Object(o.jsx)("svg",{className:"w-6 h-6 fill-current twitter",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(o.jsx)("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/astorayestasirias/",target:"_blank",rel:"noreferrer",children:Object(o.jsxs)("svg",{className:"w-6 h-6 fill-current linkedin",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Object(o.jsx)("defs",{}),Object(o.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/AstorAyestas",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("svg",{className:"w-6 h-6 fill-current github",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})})})})]})})]})}),u=function(){var e=Object(r.useState)([""]),t=Object(i.a)(e,2),c=t[0],a=t[1],n="".concat("https://api.giphy.com/v1/gifs/search","?api_key=").concat("ulB3GxzgD90MQH6rM0vdkq69b2i4nx0Q","&q=").concat(c[0],"&limit=10&offset=0&rating=g&lang=en");return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)("h1",{className:"my-2 text-3xl font-bold text-center text-white cah1italize",children:Object(o.jsx)("span",{className:"text-transparent bg-gradient-to-r bg-clip-text from-red-400 to-blue-400",children:"Gif App"})}),Object(o.jsxs)("div",{className:"mt-4",children:[Object(o.jsx)(j,{setCategories:a}),Object(o.jsx)("ol",{children:c.length>0&&c.map((function(e){return Object(o.jsx)("li",{className:"mx-4 text-gray-600 capitalize",children:e},e)}))}),Object(o.jsx)("div",{className:"flex flex-wrap justify-center gap-4 mx-4 ",children:Object(o.jsx)(b,{url:n})})]})]})};c(14);s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.636acd47.chunk.js.map