import{_ as R}from"./DXDzdJOA.js";import{_ as L,a as M}from"./xO2dniIr.js";import{f as $,l as P,m,r as j,n as J,p as q,q as E,F as Q,s as W,x as S,_ as X,y as F,z as Y,A as Z,B as ee,C as k,D as ae,E as le,o as h,G as U,w as v,a as N,H as b,c as z,b as r,I,J as te,K as ne,h as d,d as oe,k as se}from"./B0J0WvHt.js";import{d as ie,p as re}from"./toTgdlMQ.js";import{i as ue,o as de,f as ce,E as me,u as fe,A as pe,T as ve,a as D,s as ge}from"./DYXc8vUg.js";import{s as be}from"./ToWMlutv.js";import{u as ye}from"./CRmINWLG.js";import{u as he}from"./RezKZYjz.js";import"./DDfxx48F.js";const we={base:"relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",rounded:"rounded-full",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",active:"bg-{color}-500 dark:bg-{color}-400",inactive:"bg-gray-200 dark:bg-gray-700",size:{"2xs":"h-3 w-5",xs:"h-3.5 w-6",sm:"h-4 w-7",md:"h-5 w-9",lg:"h-6 w-11",xl:"h-7 w-[3.25rem]","2xl":"h-8 w-[3.75rem]"},container:{base:"pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",active:{"2xs":"translate-x-2 rtl:-translate-x-2",xs:"translate-x-2.5 rtl:-translate-x-2.5",sm:"translate-x-3 rtl:-translate-x-3",md:"translate-x-4 rtl:-translate-x-4",lg:"translate-x-5 rtl:-translate-x-5",xl:"translate-x-6 rtl:-translate-x-6","2xl":"translate-x-7 rtl:-translate-x-7"},inactive:"translate-x-0 rtl:-translate-x-0",size:{"2xs":"h-2 w-2",xs:"h-2.5 w-2.5",sm:"h-3 w-3",md:"h-4 w-4",lg:"h-5 w-5",xl:"h-6 w-6","2xl":"h-7 w-7"}},icon:{base:"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",active:"opacity-100 ease-in duration-200",inactive:"opacity-0 ease-out duration-100",size:{"2xs":"h-2 w-2",xs:"h-2 w-2",sm:"h-2 w-2",md:"h-3 w-3",lg:"h-4 w-4",xl:"h-5 w-5","2xl":"h-6 w-6"},on:"text-{color}-500 dark:text-{color}-400",off:"text-gray-400 dark:text-gray-500",loading:"animate-spin text-{color}-500 dark:text-{color}-400"},default:{onIcon:null,offIcon:null,loadingIcon:"i-heroicons-arrow-path-20-solid",color:"primary",size:"md"}};let Ve=Symbol("GroupContext"),xe=$({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(e,{emit:u,attrs:a,slots:n,expose:w}){var o;let p=(o=e.id)!=null?o:`headlessui-switch-${ue()}`,l=P(Ve,null),[s,c]=ie(m(()=>e.modelValue),t=>u("update:modelValue",t),m(()=>e.defaultChecked));function V(){c(!s.value)}let x=j(null),f=l===null?x:l.switchRef,i=be(m(()=>({as:e.as,type:a.type})),f);w({el:f,$el:f});function C(t){t.preventDefault(),V()}function H(t){t.key===D.Space?(t.preventDefault(),V()):t.key===D.Enter&&re(t.currentTarget)}function O(t){t.preventDefault()}let _=m(()=>{var t,g;return(g=(t=de(f))==null?void 0:t.closest)==null?void 0:g.call(t,"form")});return J(()=>{q([_],()=>{if(!_.value||e.defaultChecked===void 0)return;function t(){c(e.defaultChecked)}return _.value.addEventListener("reset",t),()=>{var g;(g=_.value)==null||g.removeEventListener("reset",t)}},{immediate:!0})}),()=>{let{name:t,value:g,form:T,tabIndex:B,...A}=e,G={checked:s.value},K={id:p,ref:f,role:"switch",type:i.value,tabIndex:B===-1?0:B,"aria-checked":s.value,"aria-labelledby":l==null?void 0:l.labelledby.value,"aria-describedby":l==null?void 0:l.describedby.value,onClick:C,onKeyup:H,onKeypress:O};return E(Q,[t!=null&&s.value!=null?E(ce,me({features:fe.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:s.value,form:T,disabled:A.disabled,name:t,value:g})):null,pe({ourProps:K,theirProps:{...a,...ve(A,["modelValue","defaultChecked"])},slot:G,attrs:a,slots:n,name:"Switch"})])}}});const y=W(S.ui.strategy,S.ui.toggle,we),ke=$({components:{HSwitch:xe,UIcon:F},inheritAttrs:!1,props:{id:{type:String,default:null},name:{type:String,default:null},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},onIcon:{type:String,default:()=>y.default.onIcon},offIcon:{type:String,default:()=>y.default.offIcon},loadingIcon:{type:String,default:()=>y.default.loadingIcon},color:{type:String,default:()=>y.default.color,validator(e){return S.ui.colors.includes(e)}},size:{type:String,default:()=>y.default.size,validator(e){return Object.keys(y.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:u}){const{ui:a,attrs:n}=Y("toggle",Z(e,"ui"),y),{emitFormChange:w,color:o,inputId:p,name:l}=ye(e),s=m({get(){return e.modelValue},set(C){u("update:modelValue",C),u("change",C),w()}}),c=m(()=>ee(k(a.value.base,a.value.size[e.size],a.value.rounded,o.value&&a.value.ring.replaceAll("{color}",o.value),o.value&&(s.value?a.value.active:a.value.inactive).replaceAll("{color}",o.value)),e.class)),V=m(()=>k(a.value.container.base,a.value.container.size[e.size],s.value?a.value.container.active[e.size]:a.value.container.inactive)),x=m(()=>k(a.value.icon.size[e.size],o.value&&a.value.icon.on.replaceAll("{color}",o.value))),f=m(()=>k(a.value.icon.size[e.size],o.value&&a.value.icon.off.replaceAll("{color}",o.value))),i=m(()=>k(a.value.icon.size[e.size],o.value&&a.value.icon.loading.replaceAll("{color}",o.value)));return ge(()=>ae()),{ui:a,attrs:n,name:l,inputId:p,active:s,switchClass:c,containerClass:V,onIconClass:x,offIconClass:f,loadingIconClass:i}}});function Ie(e,u,a,n,w,o){const p=F,l=le("HSwitch");return h(),U(l,te({id:e.inputId,modelValue:e.active,"onUpdate:modelValue":u[0]||(u[0]=s=>e.active=s),name:e.name,disabled:e.disabled||e.loading,class:e.switchClass},e.attrs),{default:v(()=>[N("span",{class:b(e.containerClass)},[e.loading?(h(),z("span",{key:0,class:b([e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[r(p,{name:e.loadingIcon,class:b(e.loadingIconClass)},null,8,["name","class"])],2)):I("",!0),!e.loading&&e.onIcon?(h(),z("span",{key:1,class:b([e.active?e.ui.icon.active:e.ui.icon.inactive,e.ui.icon.base]),"aria-hidden":"true"},[r(p,{name:e.onIcon,class:b(e.onIconClass)},null,8,["name","class"])],2)):I("",!0),!e.loading&&e.offIcon?(h(),z("span",{key:2,class:b([e.active?e.ui.icon.inactive:e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[r(p,{name:e.offIcon,class:b(e.offIconClass)},null,8,["name","class"])],2)):I("",!0)],2)]),_:1},16,["id","modelValue","name","disabled","class"])}const Ce=X(ke,[["render",Ie]]),je=$({__name:"index",async setup(e){var o;let u,a;const n=j(null),{data:w}=([u,a]=ne(()=>he.showMe()),u=await u,a(),u);return n.value=(o=w.value)==null?void 0:o.user,(p,l)=>{const s=R,c=M,V=Ce,x=se,f=L;return h(),z("div",null,[l[6]||(l[6]=N("h1",null,"Dashboard",-1)),d(n)?(h(),U(f,{key:0},{default:v(()=>[r(c,{label:"Name"},{default:v(()=>[r(s,{modelValue:d(n).name,"onUpdate:modelValue":l[0]||(l[0]=i=>d(n).name=i),disabled:""},null,8,["modelValue"])]),_:1}),r(c,{label:"Email"},{default:v(()=>[r(s,{modelValue:d(n).email,"onUpdate:modelValue":l[1]||(l[1]=i=>d(n).email=i),disabled:""},null,8,["modelValue"])]),_:1}),r(c,{label:"Email Verified"},{default:v(()=>[r(V,{modelValue:d(n).emailVerified,"onUpdate:modelValue":l[2]||(l[2]=i=>d(n).emailVerified=i),disabled:""},null,8,["modelValue"]),d(n).emailVerified?I("",!0):(h(),U(x,{key:0,class:"ml-2"},{default:v(()=>l[5]||(l[5]=[oe("Verify")])),_:1}))]),_:1}),r(c,{label:"Role"},{default:v(()=>[r(s,{modelValue:d(n).role,"onUpdate:modelValue":l[3]||(l[3]=i=>d(n).role=i),disabled:""},null,8,["modelValue"])]),_:1}),r(c,{label:"District"},{default:v(()=>[r(s,{modelValue:d(n).district,"onUpdate:modelValue":l[4]||(l[4]=i=>d(n).district=i),disabled:""},null,8,["modelValue"])]),_:1})]),_:1})):I("",!0)])}}});export{je as default};
