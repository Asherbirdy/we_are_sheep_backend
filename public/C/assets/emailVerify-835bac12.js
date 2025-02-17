import{u as ue}from"./useQuery-3c3e3ece.js";import{c as g,i as v,g as T,d as R,b as le,b4 as de,h as ce,j as fe,b5 as pe,b6 as me,r as D,b7 as be,an as k,b8 as ye,b9 as ge,ao as G,ba as ee,bb as x,bc as ve,bd as he,be as we,e as te,L as P,M as W,O as h,T as A,ap as $,Q as s,U as M,W as re,R as Se,bf as Ce,S as Ee,Z as _e,P as C,aG as U,aJ as ke,$ as Ne,bg as q,Y as Ve}from"./index-2fe077ab.js";import{u as H}from"./useUserApi-826c4791.js";import{N as Q}from"./text-a3edecf2.js";const Ae=g("input-group",`
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
 `)])])])])])]),xe={},De=R({name:"InputGroup",props:xe,setup(e){const{mergedClsPrefixRef:t}=le(e);return de("-input-group",Ae,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return ce("div",{class:`${e}-input-group`},this.$slots)}});function Oe(){const e=fe(pe,null);return e===null&&me("use-dialog","No outer <n-dialog-provider /> founded."),e}function I(e){return ye()?(ge(e),!0):!1}const B=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Te=Object.prototype.toString,Fe=e=>Te.call(e)==="[object Object]",je=()=>{};function Pe(e,t){function r(...a){return new Promise((l,n)=>{Promise.resolve(e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})).then(l).catch(n)})}return r}const oe=e=>e();function We(e=oe){const t=D(!0);function r(){t.value=!1}function a(){t.value=!0}const l=(...n)=>{t.value&&e(...n)};return{isActive:ve(t),pause:r,resume:a,eventFilter:l}}function $e(e){return e||he()}function Y(e){return Array.isArray(e)?e:[e]}function Me(e,t,r={}){const{eventFilter:a=oe,...l}=r;return k(e,Pe(a,t),l)}function Ie(e,t,r={}){const{eventFilter:a,...l}=r,{eventFilter:n,pause:c,resume:m,isActive:f}=We(a);return{stop:Me(e,t,{...l,eventFilter:n}),pause:c,resume:m,isActive:f}}function Be(e,t=!0,r){$e()?G(e,r):t?e():ee(e)}function Je(e,t=1e3,r={}){const{immediate:a=!0,immediateCallback:l=!1}=r;let n=null;const c=D(!1);function m(){n&&(clearInterval(n),n=null)}function f(){c.value=!1,m()}function d(){const o=x(t);o<=0||(c.value=!0,l&&e(),m(),c.value&&(n=setInterval(e,o)))}if(a&&B&&d(),be(t)||typeof t=="function"){const o=k(t,()=>{c.value&&B&&d()});I(o)}return I(f),{isActive:c,pause:f,resume:d}}const J=B?window:void 0;function Re(e){var t;const r=x(e);return(t=r==null?void 0:r.$el)!=null?t:r}function Z(...e){let t,r,a,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,a,l]=e,t=J):[t,r,a,l]=e,!t)return je;r=Y(r),a=Y(a);const n=[],c=()=>{n.forEach(o=>o()),n.length=0},m=(o,u,b,w)=>(o.addEventListener(u,b,w),()=>o.removeEventListener(u,b,w)),f=k(()=>[Re(t),x(l)],([o,u])=>{if(c(),!o)return;const b=Fe(u)?{...u}:u;n.push(...r.flatMap(w=>a.map(O=>m(o,w,O,b))))},{immediate:!0,flush:"post"}),d=()=>{f(),c()};return I(d),d}const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j="__vueuse_ssr_handlers__",Ge=Le();function Le(){return j in F||(F[j]=F[j]||{}),F[j]}function ze(e,t){return Ge[e]||t}function Ke(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Ue={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},X="vueuse-storage";function qe(e,t,r,a={}){var l;const{flush:n="pre",deep:c=!0,listenToStorageChanges:m=!0,writeDefaults:f=!0,mergeDefaults:d=!1,shallow:o,window:u=J,eventFilter:b,onError:w=i=>{console.error(i)},initOnMounted:O}=a,E=(o?we:D)(typeof t=="function"?t():t),S=te(()=>x(e));if(!r)try{r=ze("getDefaultStorage",()=>{var i;return(i=J)==null?void 0:i.localStorage})()}catch(i){w(i)}if(!r)return E;const _=x(t),L=Ke(_),N=(l=a.serializer)!=null?l:Ue[L],{pause:ne,resume:z}=Ie(E,()=>ie(E.value),{flush:n,deep:c,eventFilter:b});k(S,()=>V(),{flush:n}),u&&m&&Be(()=>{r instanceof Storage?Z(u,"storage",V,{passive:!0}):Z(u,X,se),O&&V()}),O||V();function K(i,p){if(u){const y={key:S.value,oldValue:i,newValue:p,storageArea:r};u.dispatchEvent(r instanceof Storage?new StorageEvent("storage",y):new CustomEvent(X,{detail:y}))}}function ie(i){try{const p=r.getItem(S.value);if(i==null)K(p,null),r.removeItem(S.value);else{const y=N.write(i);p!==y&&(r.setItem(S.value,y),K(p,y))}}catch(p){w(p)}}function ae(i){const p=i?i.newValue:r.getItem(S.value);if(p==null)return f&&_!=null&&r.setItem(S.value,N.write(_)),_;if(!i&&d){const y=N.read(p);return typeof d=="function"?d(y,_):L==="object"&&!Array.isArray(y)?{..._,...y}:y}else return typeof p!="string"?p:N.read(p)}function V(i){if(!(i&&i.storageArea!==r)){if(i&&i.key==null){E.value=_;return}if(!(i&&i.key!==S.value)){ne();try{(i==null?void 0:i.newValue)!==N.write(E.value)&&(E.value=ae(i))}catch(p){w(p)}finally{i?ee(z):z()}}}}function se(i){V(i.detail)}return E}const He=R({__name:"EmailVerifyComponent",setup(e){const t=D({countDownTime:60,countDown:0}),r=qe("emailVerificationCountdown",0),{pause:a,resume:l}=Je(()=>{if(r.value<=0){a();return}r.value--},1e3,{immediate:!1}),n=async f=>{await re.sendVerifyEmail.api(),t.value.countDown=f,r.value=f,l()},c=()=>{r.value>0&&(t.value.countDown=r.value,l())},m=te(()=>t.value.countDown>0);return k(r,f=>{t.value.countDown=f}),G(()=>c()),(f,d)=>(P(),W(s(M),{type:"primary",ghost:"",disabled:s(m),onClick:d[0]||(d[0]=o=>n(s(t).countDownTime))},{default:h(()=>[A($(s(t).countDown>0?`${s(t).countDown} 秒`:"傳送驗證碼"),1)]),_:1},8,["disabled"]))}}),Qe={class:"flex justify-center items-center"},tt=R({__name:"emailVerify",setup(e){const{data:t}=ue({queryKey:[H.showMe.queryKey],queryFn:()=>H.showMe.api()}),r=Se(),a=Oe(),l=Ce(),n=D({data:{verifyCode:""},page:{current:"emailVerify"},disabled:{emailVerify:!0}});k(n.value.data,d=>{const o=!!d.verifyCode;n.value.disabled.emailVerify=!o});const c=async()=>{var d,o;(o=(d=t.value)==null?void 0:d.user)!=null&&o.emailVerified&&(n.value.page.current="emailAlreadyVerify")},{mutate:m,isPending:f}=Ee({mutationFn:async()=>await re.verifyEmail.api({OTP:n.value.data.verifyCode}),onSuccess:()=>{q(),a.success({title:"綁定成功",content:"再請回首頁重新登入",positiveText:"回首頁",closable:!1,onPositiveClick:()=>{q(),r.push(Ve.login)}})},onError:()=>{n.value.data.verifyCode="",l.error({title:"驗證失敗",content:"請重新輸入驗證碼",duration:3e3})}});return G(()=>c()),(d,o)=>(P(),_e("div",Qe,[C(s(Ne),{vertical:"",justify:"center"},{default:h(()=>[s(n).page.current==="emailVerify"?(P(),W(s(U),{key:0,title:"驗證Email",class:"min-w-[290px]"},{action:h(()=>[C(s(M),{block:"",type:"primary",disabled:s(n).disabled.emailVerify,loading:s(f),onClick:o[1]||(o[1]=u=>s(m)())},{default:h(()=>o[3]||(o[3]=[A(" 驗證 ")])),_:1},8,["disabled","loading"])]),default:h(()=>[C(s(Q),null,{default:h(()=>{var u,b;return[A($(`請點擊「傳送驗證碼」，並前往您的Email信箱${(b=(u=s(t))==null?void 0:u.user)==null?void 0:b.email}，輸入驗證碼以完成驗證。`),1)]}),_:1}),C(s(De),{class:"mt-2"},{default:h(()=>[C(s(ke),{value:s(n).data.verifyCode,"onUpdate:value":o[0]||(o[0]=u=>s(n).data.verifyCode=u),placeholder:"請輸入驗證碼"},null,8,["value"]),C(He)]),_:1})]),_:1})):(P(),W(s(U),{key:1,title:"Email已驗證",class:"min-w-[290px]"},{default:h(()=>[C(s(Q),null,{default:h(()=>{var u,b;return[A($(`${(b=(u=s(t))==null?void 0:u.user)==null?void 0:b.email}已驗證成功。`),1)]}),_:1}),C(s(M),{class:"mt-2",block:"",type:"primary",onClick:o[2]||(o[2]=u=>s(r).back())},{default:h(()=>o[4]||(o[4]=[A(" 返回 ")])),_:1})]),_:1}))]),_:1})]))}});export{tt as default};
