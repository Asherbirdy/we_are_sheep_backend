if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-4723e66c"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_...all_-b669ea44.js",revision:null},{url:"assets/DataTable-ccf082da.js",revision:null},{url:"assets/default-ff8fc7e8.js",revision:null},{url:"assets/districtSheep-7d9a5b66.js",revision:null},{url:"assets/DrawerContent-ecd84f00.js",revision:null},{url:"assets/Dropdown-14ccbd6b.js",revision:null},{url:"assets/emailVerify-5234503e.js",revision:null},{url:"assets/Flex-1fc4d29c.js",revision:null},{url:"assets/friend-664b324f.js",revision:null},{url:"assets/index-0c48b964.js",revision:null},{url:"assets/index-18e1f05a.js",revision:null},{url:"assets/index-4409e8a2.js",revision:null},{url:"assets/index-961082f3.js",revision:null},{url:"assets/index-e800c8b6.css",revision:null},{url:"assets/login-5048ae6f.js",revision:null},{url:"assets/text-f1615ad2.js",revision:null},{url:"assets/ThemeSwichComponent.vue_vue_type_script_setup_true_lang-8136f321.js",revision:null},{url:"assets/use-message-f0852c90.js",revision:null},{url:"assets/useQuery-3407a795.js",revision:null},{url:"assets/useSheepApi-2a4762ea.js",revision:null},{url:"assets/useUserApi-2c5c1d3e.js",revision:null},{url:"index.html",revision:"1782319039989273ff0776df375933b4"},{url:"registerSW.js",revision:"569e4c601f0cd8e35f63ee538fd45c34"},{url:"manifest.webmanifest",revision:"70726603f89ff878722888ec7af46619"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
