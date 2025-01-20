import{c as g,i as v,g as T,d as J,b as ie,aT as se,h as le,j as ue,aU as ce,aV as de,r as D,aW as fe,L as k,aX as pe,aE as me,aj as L,aY as Y,aZ as A,a_ as be,a$ as ye,b0 as ge,e as q,M as W,O as P,P as h,Z as x,ak as $,R as s,al as I,b1 as ee,aL as ve,J as he,aM as we,b2 as Se,b3 as Ce,T as Ee,Q as C,aK as K,b4 as _e,W as ke,b5 as Ve,b6 as Ne}from"./index-29d4e570.js";import{N as H}from"./text-ec72570c.js";const xe=g("input-group",`
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
 `)])])])])])]),Ae={},De=J({name:"InputGroup",props:Ae,setup(e){const{mergedClsPrefixRef:t}=ie(e);return se("-input-group",xe,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return le("div",{class:`${e}-input-group`},this.$slots)}});function Oe(){const e=ue(ce,null);return e===null&&de("use-dialog","No outer <n-dialog-provider /> founded."),e}function M(e){return pe()?(me(e),!0):!1}const R=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Te=Object.prototype.toString,je=e=>Te.call(e)==="[object Object]",Fe=()=>{};function We(e,t){function r(...n){return new Promise((l,u)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(l).catch(u)})}return r}const te=e=>e();function Pe(e=te){const t=D(!0);function r(){t.value=!1}function n(){t.value=!0}const l=(...u)=>{t.value&&e(...u)};return{isActive:be(t),pause:r,resume:n,eventFilter:l}}function $e(e){return e||ye()}function Z(e){return Array.isArray(e)?e:[e]}function Ie(e,t,r={}){const{eventFilter:n=te,...l}=r;return k(e,We(n,t),l)}function Me(e,t,r={}){const{eventFilter:n,...l}=r,{eventFilter:u,pause:i,resume:b,isActive:d}=Pe(n);return{stop:Ie(e,t,{...l,eventFilter:u}),pause:i,resume:b,isActive:d}}function Re(e,t=!0,r){$e()?L(e,r):t?e():Y(e)}function Be(e,t=1e3,r={}){const{immediate:n=!0,immediateCallback:l=!1}=r;let u=null;const i=D(!1);function b(){u&&(clearInterval(u),u=null)}function d(){i.value=!1,b()}function f(){const c=A(t);c<=0||(i.value=!0,l&&e(),b(),i.value&&(u=setInterval(e,c)))}if(n&&R&&f(),fe(t)||typeof t=="function"){const c=k(t,()=>{i.value&&R&&f()});M(c)}return M(d),{isActive:i,pause:d,resume:f}}const B=R?window:void 0;function Je(e){var t;const r=A(e);return(t=r==null?void 0:r.$el)!=null?t:r}function Q(...e){let t,r,n,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,l]=e,t=B):[t,r,n,l]=e,!t)return Fe;r=Z(r),n=Z(n);const u=[],i=()=>{u.forEach(c=>c()),u.length=0},b=(c,a,p,w)=>(c.addEventListener(a,p,w),()=>c.removeEventListener(a,p,w)),d=k(()=>[Je(t),A(l)],([c,a])=>{if(i(),!c)return;const p=je(a)?{...a}:a;u.push(...r.flatMap(w=>n.map(O=>b(c,w,O,p))))},{immediate:!0,flush:"post"}),f=()=>{d(),i()};return M(f),f}const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__",Le=ze();function ze(){return F in j||(j[F]=j[F]||{}),j[F]}function Ge(e,t){return Le[e]||t}function Ue(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Ke={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},X="vueuse-storage";function He(e,t,r,n={}){var l;const{flush:u="pre",deep:i=!0,listenToStorageChanges:b=!0,writeDefaults:d=!0,mergeDefaults:f=!1,shallow:c,window:a=B,eventFilter:p,onError:w=o=>{console.error(o)},initOnMounted:O}=n,E=(c?ge:D)(typeof t=="function"?t():t),S=q(()=>A(e));if(!r)try{r=Ge("getDefaultStorage",()=>{var o;return(o=B)==null?void 0:o.localStorage})()}catch(o){w(o)}if(!r)return E;const _=A(t),z=Ue(_),V=(l=n.serializer)!=null?l:Ke[z],{pause:re,resume:G}=Me(E,()=>oe(E.value),{flush:u,deep:i,eventFilter:p});k(S,()=>N(),{flush:u}),a&&b&&Re(()=>{r instanceof Storage?Q(a,"storage",N,{passive:!0}):Q(a,X,ae),O&&N()}),O||N();function U(o,m){if(a){const y={key:S.value,oldValue:o,newValue:m,storageArea:r};a.dispatchEvent(r instanceof Storage?new StorageEvent("storage",y):new CustomEvent(X,{detail:y}))}}function oe(o){try{const m=r.getItem(S.value);if(o==null)U(m,null),r.removeItem(S.value);else{const y=V.write(o);m!==y&&(r.setItem(S.value,y),U(m,y))}}catch(m){w(m)}}function ne(o){const m=o?o.newValue:r.getItem(S.value);if(m==null)return d&&_!=null&&r.setItem(S.value,V.write(_)),_;if(!o&&f){const y=V.read(m);return typeof f=="function"?f(y,_):z==="object"&&!Array.isArray(y)?{..._,...y}:y}else return typeof m!="string"?m:V.read(m)}function N(o){if(!(o&&o.storageArea!==r)){if(o&&o.key==null){E.value=_;return}if(!(o&&o.key!==S.value)){re();try{(o==null?void 0:o.newValue)!==V.write(E.value)&&(E.value=ne(o))}catch(m){w(m)}finally{o?Y(G):G()}}}}function ae(o){N(o.detail)}return E}const Ze=J({__name:"EmailVerifyComponent",setup(e){const t=D({countDownTime:60,countDown:0}),r=He("emailVerificationCountdown",0),{pause:n,resume:l}=Be(()=>{if(r.value<=0){n();return}r.value--},1e3,{immediate:!1}),u=async d=>{await ee.sendVerifyEmail(),t.value.countDown=d,r.value=d,l()},i=()=>{r.value>0&&(t.value.countDown=r.value,l())},b=q(()=>t.value.countDown>0);return k(r,d=>{t.value.countDown=d}),L(()=>i()),(d,f)=>(W(),P(s(I),{type:"primary",ghost:"",disabled:s(b),onClick:f[0]||(f[0]=c=>u(s(t).countDownTime))},{default:h(()=>[x($(s(t).countDown>0?`${s(t).countDown} 秒`:"傳送驗證碼"),1)]),_:1},8,["disabled"]))}}),Qe={class:"flex justify-center items-center"},qe=J({__name:"emailVerify",setup(e){const t=ve(),{getUser:r}=he(t),n=we(),l=Oe(),u=Se(),i=D({data:{verifyCode:""},page:{current:"emailVerify"},disabled:{emailVerify:!0}});k(i.value.data,c=>{const a=!!c.verifyCode;i.value.disabled.emailVerify=!a});const b=async()=>{var c;(c=r.value)!=null&&c.emailVerified&&(i.value.page.current="emailAlreadyVerify")},{mutate:d,isPending:f}=Ce({mutationFn:async()=>await ee.verifyEmail({OTP:i.value.data.verifyCode}),onSuccess:()=>{Ve(),l.success({title:"綁定成功",content:"再請回首頁重新登入",positiveText:"回首頁",closable:!1,onPositiveClick:()=>{n.push(Ne.login)}})},onError:()=>{i.value.data.verifyCode="",u.error({title:"驗證失敗",content:"請重新輸入驗證碼",duration:3e3})}});return L(()=>b()),(c,a)=>(W(),Ee("div",Qe,[C(s(ke),{vertical:"",justify:"center"},{default:h(()=>[s(i).page.current==="emailVerify"?(W(),P(s(K),{key:0,title:"驗證Email",class:"min-w-[290px]"},{action:h(()=>[C(s(I),{block:"",type:"primary",disabled:s(i).disabled.emailVerify,loading:s(f),onClick:a[1]||(a[1]=p=>s(d)())},{default:h(()=>a[3]||(a[3]=[x(" 驗證 ")])),_:1},8,["disabled","loading"])]),default:h(()=>[C(s(H),null,{default:h(()=>{var p;return[x($(`請點擊「傳送驗證碼」，並前往您的Email信箱${(p=s(r))==null?void 0:p.email}，輸入驗證碼以完成驗證。`),1)]}),_:1}),C(s(De),{class:"mt-2"},{default:h(()=>[C(s(_e),{value:s(i).data.verifyCode,"onUpdate:value":a[0]||(a[0]=p=>s(i).data.verifyCode=p),placeholder:"請輸入驗證碼"},null,8,["value"]),C(Ze)]),_:1})]),_:1})):(W(),P(s(K),{key:1,title:"Email已驗證",class:"min-w-[290px]"},{default:h(()=>[C(s(H),null,{default:h(()=>{var p;return[x($(`${(p=s(r))==null?void 0:p.email}已驗證成功。`),1)]}),_:1}),C(s(I),{class:"mt-2",block:"",type:"primary",onClick:a[2]||(a[2]=p=>s(n).back())},{default:h(()=>a[4]||(a[4]=[x(" 返回 ")])),_:1})]),_:1}))]),_:1})]))}});export{qe as default};
