import{d as u,M as c,T as _,am as a,aL as x,J as g,aM as N,Q as o,aN as C,R as e,P as n,al as v,S as y,Z as s,ak as i,W as M,U as p,aK as B}from"./index-596b816f.js";import{N as S}from"./headers-57ec2bf1.js";import{N as h}from"./text-bea058f3.js";import{N as k}from"./Flex-1d985393.js";const V={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},z=a("rect",{x:"48",y:"96",width:"416",height:"320",rx:"40",ry:"40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),$=a("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M112 160l144 112l144-112"},null,-1),O=[z,$],R=u({name:"MailOutline",render:function(d,r){return c(),_("svg",V,O)}}),T={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},j=a("path",{d:"M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),P=a("path",{d:"M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),U=[j,P],E=u({name:"PersonOutline",render:function(d,r){return c(),_("svg",T,U)}}),J=u({__name:"index",setup(f){const d=x(),{getUser:r}=g(d),w=N();return(b,l)=>{var m;return c(),_("div",null,[o(e(B),{title:"個人資料"},C({"header-extra":n(()=>{var t;return[s(i((t=e(r))!=null&&t.emailVerified?"已驗證":"未驗證"),1)]}),default:n(()=>[o(e(S),null,{default:n(()=>{var t;return[s(i((t=e(r))==null?void 0:t.name),1)]}),_:1}),o(e(M),null,{default:n(()=>[o(e(k),{align:"center"},{default:n(()=>[o(e(p),{size:"16"},{default:n(()=>[o(e(R))]),_:1}),o(e(h),null,{default:n(()=>{var t;return[s(i((t=e(r))==null?void 0:t.email),1)]}),_:1})]),_:1}),o(e(k),{align:"center"},{default:n(()=>[o(e(p),{size:""},{default:n(()=>[o(e(E))]),_:1}),o(e(h),null,{default:n(()=>{var t;return[s(i((t=e(r))==null?void 0:t.role),1)]}),_:1})]),_:1})]),_:1})]),_:2},[(m=e(r))!=null&&m.emailVerified?void 0:{name:"action",fn:n(()=>[o(e(v),{type:"primary",strong:"",secondary:"",block:"",size:"small",onClick:l[0]||(l[0]=t=>e(w).push(e(y).profileEmailVerify))},{default:n(()=>l[1]||(l[1]=[s(" 前往驗證 ")])),_:1})]),key:"0"}]),1024)])}}});export{J as default};