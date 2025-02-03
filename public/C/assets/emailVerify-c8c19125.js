import{c as g,i as v,g as T,d as J,b as ae,b5 as se,h as le,j as ue,b6 as ce,b4 as de,r as D,b7 as fe,L as k,b8 as pe,b9 as me,ap as L,aS as Q,ba as A,bb as be,bc as ye,bd as ge,e as Z,M as P,O as W,P as h,W as x,aq as $,R as s,X as I,Y as ee,aX as ve,J as he,T as we,be as Se,U as Ce,$ as _e,Q as C,aY as H,aI as Ee,a1 as ke,bf as Ne,_ as Ve}from"./index-3ac8fdb4.js";import{N as K}from"./text-b2df8d05.js";const xe=g("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[v(">",[g("input",[v("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),g("button",[v("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[T("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),v("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[T("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),v("*",[v("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[v(">",[g("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g("base-selection",[g("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),T("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),v("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[v(">",[g("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),g("base-selection",[g("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),g("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),T("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Ae={},De=J({name:"InputGroup",props:Ae,setup(e){const{mergedClsPrefixRef:t}=ae(e);return se("-input-group",xe,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return le("div",{class:`${e}-input-group`},this.$slots)}});function Oe(){const e=ue(ce,null);return e===null&&de("use-dialog","No outer <n-dialog-provider /> founded."),e}function M(e){return pe()?(me(e),!0):!1}const R=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Te=Object.prototype.toString,je=e=>Te.call(e)==="[object Object]",Fe=()=>{};function Pe(e,t){function r(...n){return new Promise((l,u)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(l).catch(u)})}return r}const te=e=>e();function We(e=te){const t=D(!0);function r(){t.value=!1}function n(){t.value=!0}const l=(...u)=>{t.value&&e(...u)};return{isActive:be(t),pause:r,resume:n,eventFilter:l}}function $e(e){return e||ye()}function X(e){return Array.isArray(e)?e:[e]}function Ie(e,t,r={}){const{eventFilter:n=te,...l}=r;return k(e,Pe(n,t),l)}function Me(e,t,r={}){const{eventFilter:n,...l}=r,{eventFilter:u,pause:a,resume:b,isActive:d}=We(n);return{stop:Ie(e,t,{...l,eventFilter:u}),pause:a,resume:b,isActive:d}}function Re(e,t=!0,r){$e()?L(e,r):t?e():Q(e)}function Be(e,t=1e3,r={}){const{immediate:n=!0,immediateCallback:l=!1}=r;let u=null;const a=D(!1);function b(){u&&(clearInterval(u),u=null)}function d(){a.value=!1,b()}function f(){const c=A(t);c<=0||(a.value=!0,l&&e(),b(),a.value&&(u=setInterval(e,c)))}if(n&&R&&f(),fe(t)||typeof t=="function"){const c=k(t,()=>{a.value&&R&&f()});M(c)}return M(d),{isActive:a,pause:d,resume:f}}const B=R?window:void 0;function Je(e){var t;const r=A(e);return(t=r==null?void 0:r.$el)!=null?t:r}function Y(...e){let t,r,n,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,l]=e,t=B):[t,r,n,l]=e,!t)return Fe;r=X(r),n=X(n);const u=[],a=()=>{u.forEach(c=>c()),u.length=0},b=(c,i,p,w)=>(c.addEventListener(i,p,w),()=>c.removeEventListener(i,p,w)),d=k(()=>[Je(t),A(l)],([c,i])=>{if(a(),!c)return;const p=je(i)?{...i}:i;u.push(...r.flatMap(w=>n.map(O=>b(c,w,O,p))))},{immediate:!0,flush:"post"}),f=()=>{d(),a()};return M(f),f}const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__",Le=ze();function ze(){return F in j||(j[F]=j[F]||{}),j[F]}function Ge(e,t){return Le[e]||t}function Ue(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const He={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},q="vueuse-storage";function Ke(e,t,r,n={}){var l;const{flush:u="pre",deep:a=!0,listenToStorageChanges:b=!0,writeDefaults:d=!0,mergeDefaults:f=!1,shallow:c,window:i=B,eventFilter:p,onError:w=o=>{console.error(o)},initOnMounted:O}=n,_=(c?ge:D)(typeof t=="function"?t():t),S=Z(()=>A(e));if(!r)try{r=Ge("getDefaultStorage",()=>{var o;return(o=B)==null?void 0:o.localStorage})()}catch(o){w(o)}if(!r)return _;const E=A(t),z=Ue(E),N=(l=n.serializer)!=null?l:He[z],{pause:re,resume:G}=Me(_,()=>oe(_.value),{flush:u,deep:a,eventFilter:p});k(S,()=>V(),{flush:u}),i&&b&&Re(()=>{r instanceof Storage?Y(i,"storage",V,{passive:!0}):Y(i,q,ie),O&&V()}),O||V();function U(o,m){if(i){const y={key:S.value,oldValue:o,newValue:m,storageArea:r};i.dispatchEvent(r instanceof Storage?new StorageEvent("storage",y):new CustomEvent(q,{detail:y}))}}function oe(o){try{const m=r.getItem(S.value);if(o==null)U(m,null),r.removeItem(S.value);else{const y=N.write(o);m!==y&&(r.setItem(S.value,y),U(m,y))}}catch(m){w(m)}}function ne(o){const m=o?o.newValue:r.getItem(S.value);if(m==null)return d&&E!=null&&r.setItem(S.value,N.write(E)),E;if(!o&&f){const y=N.read(m);return typeof f=="function"?f(y,E):z==="object"&&!Array.isArray(y)?{...E,...y}:y}else return typeof m!="string"?m:N.read(m)}function V(o){if(!(o&&o.storageArea!==r)){if(o&&o.key==null){_.value=E;return}if(!(o&&o.key!==S.value)){re();try{(o==null?void 0:o.newValue)!==N.write(_.value)&&(_.value=ne(o))}catch(m){w(m)}finally{o?Q(G):G()}}}}function ie(o){V(o.detail)}return _}const Xe=J({__name:"EmailVerifyComponent",setup(e){const t=D({countDownTime:60,countDown:0}),r=Ke("emailVerificationCountdown",0),{pause:n,resume:l}=Be(()=>{if(r.value<=0){n();return}r.value--},1e3,{immediate:!1}),u=async d=>{await ee.sendVerifyEmail.api(),t.value.countDown=d,r.value=d,l()},a=()=>{r.value>0&&(t.value.countDown=r.value,l())},b=Z(()=>t.value.countDown>0);return k(r,d=>{t.value.countDown=d}),L(()=>a()),(d,f)=>(P(),W(s(I),{type:"primary",ghost:"",disabled:s(b),onClick:f[0]||(f[0]=c=>u(s(t).countDownTime))},{default:h(()=>[x($(s(t).countDown>0?`${s(t).countDown} 秒`:"傳送驗證碼"),1)]),_:1},8,["disabled"]))}}),Ye={class:"flex justify-center items-center"},Ze=J({__name:"emailVerify",setup(e){const t=ve(),{getUser:r}=he(t),n=we(),l=Oe(),u=Se(),a=D({data:{verifyCode:""},page:{current:"emailVerify"},disabled:{emailVerify:!0}});k(a.value.data,c=>{const i=!!c.verifyCode;a.value.disabled.emailVerify=!i});const b=async()=>{var c;(c=r.value)!=null&&c.emailVerified&&(a.value.page.current="emailAlreadyVerify")},{mutate:d,isPending:f}=Ce({mutationFn:async()=>await ee.verifyEmail.api({OTP:a.value.data.verifyCode}),onSuccess:()=>{Ne(),l.success({title:"綁定成功",content:"再請回首頁重新登入",positiveText:"回首頁",closable:!1,onPositiveClick:()=>{n.push(Ve.login)}})},onError:()=>{a.value.data.verifyCode="",u.error({title:"驗證失敗",content:"請重新輸入驗證碼",duration:3e3})}});return L(()=>b()),(c,i)=>(P(),_e("div",Ye,[C(s(ke),{vertical:"",justify:"center"},{default:h(()=>[s(a).page.current==="emailVerify"?(P(),W(s(H),{key:0,title:"驗證Email",class:"min-w-[290px]"},{action:h(()=>[C(s(I),{block:"",type:"primary",disabled:s(a).disabled.emailVerify,loading:s(f),onClick:i[1]||(i[1]=p=>s(d)())},{default:h(()=>i[3]||(i[3]=[x(" 驗證 ")])),_:1},8,["disabled","loading"])]),default:h(()=>[C(s(K),null,{default:h(()=>{var p;return[x($(`請點擊「傳送驗證碼」，並前往您的Email信箱${(p=s(r))==null?void 0:p.email}，輸入驗證碼以完成驗證。`),1)]}),_:1}),C(s(De),{class:"mt-2"},{default:h(()=>[C(s(Ee),{value:s(a).data.verifyCode,"onUpdate:value":i[0]||(i[0]=p=>s(a).data.verifyCode=p),placeholder:"請輸入驗證碼"},null,8,["value"]),C(Xe)]),_:1})]),_:1})):(P(),W(s(H),{key:1,title:"Email已驗證",class:"min-w-[290px]"},{default:h(()=>[C(s(K),null,{default:h(()=>{var p;return[x($(`${(p=s(r))==null?void 0:p.email}已驗證成功。`),1)]}),_:1}),C(s(I),{class:"mt-2",block:"",type:"primary",onClick:i[2]||(i[2]=p=>s(n).back())},{default:h(()=>i[4]||(i[4]=[x(" 返回 ")])),_:1})]),_:1}))]),_:1})]))}});export{Ze as default};
