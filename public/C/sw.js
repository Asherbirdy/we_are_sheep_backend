if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-4723e66c"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_...all_-2b17d6ba.js",revision:null},{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/DataTable-dd56c819.js",revision:null},{url:"assets/default-d6f9ae6e.js",revision:null},{url:"assets/district-3fceb885.js",revision:null},{url:"assets/DrawerContent-fcc26ef9.js",revision:null},{url:"assets/Dropdown-ac414eb9.js",revision:null},{url:"assets/emailVerify-f421b2c4.js",revision:null},{url:"assets/Flex-f1ff48d0.js",revision:null},{url:"assets/forgetPassword-d018580d.js",revision:null},{url:"assets/friend-80fff52c.js",revision:null},{url:"assets/index-1447a901.js",revision:null},{url:"assets/index-147f221d.js",revision:null},{url:"assets/index-44d43a03.js",revision:null},{url:"assets/index-a3a77572.js",revision:null},{url:"assets/index-c364b561.js",revision:null},{url:"assets/index-cfd3c69f.css",revision:null},{url:"assets/index-e564e0c0.js",revision:null},{url:"assets/login-9bebf6a2.js",revision:null},{url:"assets/none-24242e57.js",revision:null},{url:"assets/p-0b0f04c3.js",revision:null},{url:"assets/serialNumber-c912e642.js",revision:null},{url:"assets/Tag-7859f8fa.js",revision:null},{url:"assets/teenMeetingAttend-6a427e4d.js",revision:null},{url:"assets/text-54621a7a.js",revision:null},{url:"assets/ThemeSwichComponent.vue_vue_type_script_setup_true_lang-fc757f43.js",revision:null},{url:"assets/use-message-cbe83e38.js",revision:null},{url:"assets/useQuery-a384e8c1.js",revision:null},{url:"assets/users-8ed20622.js",revision:null},{url:"assets/useUserApi-96f1a591.js",revision:null},{url:"index.html",revision:"4c02a0d23533df01768e126c48f962b9"},{url:"registerSW.js",revision:"569e4c601f0cd8e35f63ee538fd45c34"},{url:"manifest.webmanifest",revision:"70726603f89ff878722888ec7af46619"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
