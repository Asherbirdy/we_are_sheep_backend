if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-4723e66c"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_...all_-30e3396d.js",revision:null},{url:"assets/DataTable-694a76a6.js",revision:null},{url:"assets/default-8c9ebf77.js",revision:null},{url:"assets/districtSheep-4b5f30e9.js",revision:null},{url:"assets/DrawerContent-00514f68.js",revision:null},{url:"assets/Dropdown-f44accb6.js",revision:null},{url:"assets/emailVerify-c8c19125.js",revision:null},{url:"assets/Flex-48f43524.js",revision:null},{url:"assets/friend-a8b6e7fe.js",revision:null},{url:"assets/headers-b417b264.js",revision:null},{url:"assets/index-10d825b7.js",revision:null},{url:"assets/index-3ac8fdb4.js",revision:null},{url:"assets/index-83eaf745.js",revision:null},{url:"assets/index-af4fcddb.js",revision:null},{url:"assets/index-dc1432ed.js",revision:null},{url:"assets/index-e800c8b6.css",revision:null},{url:"assets/login-9e9a2c2f.js",revision:null},{url:"assets/text-b2df8d05.js",revision:null},{url:"assets/ThemeSwichComponent.vue_vue_type_script_setup_true_lang-759e3027.js",revision:null},{url:"assets/use-message-1695f3cf.js",revision:null},{url:"assets/useSheepApi-273224c1.js",revision:null},{url:"index.html",revision:"c754a540fdc723323434efd93f732012"},{url:"registerSW.js",revision:"569e4c601f0cd8e35f63ee538fd45c34"},{url:"manifest.webmanifest",revision:"70726603f89ff878722888ec7af46619"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
