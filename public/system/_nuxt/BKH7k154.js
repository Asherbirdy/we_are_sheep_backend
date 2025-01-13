import{ae as Me,f as x,r as S,m as D,X as we,n as le,V as Se,Y as De,Z as $,l as Te,s as oe,x as F,_ as ue,z as ie,A as Q,B as de,C as ce,o as I,c as R,P as Z,d as pe,t as W,J as E,y as fe,L as ve,a2 as Pe,p as ne,D as Re,af as Ae,E as z,G as O,w as P,b as B,H as T,a as _,a9 as Ce,a8 as Oe,I as L,F as K,O as J,a7 as $e,e as me,ad as xe}from"./B0J0WvHt.js";import{o as h,b as Ee,A as H,i as X,N as se,a as y,s as Ne}from"./DYXc8vUg.js";import{w as ze,c as Be,h as Le,t as Fe,i as j,l as je,v as He,N as re,d as ge,O as Ue}from"./Dozi95TJ.js";import{s as _e}from"./ToWMlutv.js";import{i as Ke,p as Je,u as Ve,f as qe,c as w,a as Ge}from"./jZC4qxGa.js";import{u as V}from"./DDfxx48F.js";const Qe={wrapper:"relative inline-flex text-left rtl:text-right",container:"z-20 group",trigger:"inline-flex w-full",width:"w-48",height:"",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-700",base:"relative focus:outline-none overflow-y-auto scroll-py-1",divide:"divide-y divide-gray-200 dark:divide-gray-700",padding:"p-1",item:{base:"group flex items-center gap-1.5 w-full",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",active:"bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white",inactive:"text-gray-700 dark:text-gray-200",disabled:"cursor-not-allowed opacity-50",icon:{base:"flex-shrink-0 w-5 h-5",active:"text-gray-500 dark:text-gray-400",inactive:"text-gray-400 dark:text-gray-500"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"truncate",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto"},transition:{enterActiveClass:"transition duration-100 ease-out",enterFromClass:"transform scale-95 opacity-0",enterToClass:"transform scale-100 opacity-100",leaveActiveClass:"transition duration-75 ease-in",leaveFromClass:"transform scale-100 opacity-100",leaveToClass:"transform scale-95 opacity-0"},popper:{placement:"bottom-end",strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:{...Me,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},Ze={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}};var We=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(We||{}),Xe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Xe||{});function Ye(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let be=Symbol("MenuContext");function U(e){let i=Te(be,null);if(i===null){let v=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,U),v}return i}let et=x({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:i,attrs:v}){let m=S(1),g=S(null),b=S(null),t=S([]),s=S(""),u=S(null),p=S(1);function k(a=o=>o){let o=u.value!==null?t.value[u.value]:null,r=Ue(a(t.value.slice()),l=>h(l.dataRef.domRef)),d=o?r.indexOf(o):null;return d===-1&&(d=null),{items:r,activeItemIndex:d}}let c={menuState:m,buttonRef:g,itemsRef:b,items:t,searchQuery:s,activeItemIndex:u,activationTrigger:p,closeMenu:()=>{m.value=1,u.value=null},openMenu:()=>m.value=0,goToItem(a,o,r){let d=k(),l=qe(a===w.Specific?{focus:w.Specific,id:o}:{focus:a},{resolveItems:()=>d.items,resolveActiveIndex:()=>d.activeItemIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.disabled});s.value="",u.value=l,p.value=r??1,t.value=d.items},search(a){let o=s.value!==""?0:1;s.value+=a.toLowerCase();let r=(u.value!==null?t.value.slice(u.value+o).concat(t.value.slice(0,u.value+o)):t.value).find(l=>l.dataRef.textValue.startsWith(s.value)&&!l.dataRef.disabled),d=r?t.value.indexOf(r):-1;d===-1||d===u.value||(u.value=d,p.value=1)},clearSearch(){s.value=""},registerItem(a,o){let r=k(d=>[...d,{id:a,dataRef:o}]);t.value=r.items,u.value=r.activeItemIndex,p.value=1},unregisterItem(a){let o=k(r=>{let d=r.findIndex(l=>l.id===a);return d!==-1&&r.splice(d,1),r});t.value=o.items,u.value=o.activeItemIndex,p.value=1}};return ze([g,b],(a,o)=>{var r;c.closeMenu(),Be(o,Le.Loose)||(a.preventDefault(),(r=h(g))==null||r.focus())},D(()=>m.value===0)),we(be,c),Fe(D(()=>Ee(m.value,{0:j.Open,1:j.Closed}))),()=>{let a={open:m.value===0,close:c.closeMenu};return H({ourProps:{},theirProps:e,slot:a,slots:i,attrs:v,name:"Menu"})}}}),tt=x({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:i,slots:v,expose:m}){var g;let b=(g=e.id)!=null?g:`headlessui-menu-button-${X()}`,t=U("MenuButton");m({el:t.buttonRef,$el:t.buttonRef});function s(c){switch(c.key){case y.Space:case y.Enter:case y.ArrowDown:c.preventDefault(),c.stopPropagation(),t.openMenu(),$(()=>{var a;(a=h(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(w.First)});break;case y.ArrowUp:c.preventDefault(),c.stopPropagation(),t.openMenu(),$(()=>{var a;(a=h(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(w.Last)});break}}function u(c){switch(c.key){case y.Space:c.preventDefault();break}}function p(c){e.disabled||(t.menuState.value===0?(t.closeMenu(),$(()=>{var a;return(a=h(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(c.preventDefault(),t.openMenu(),Ye(()=>{var a;return(a=h(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let k=_e(D(()=>({as:e.as,type:i.type})),t.buttonRef);return()=>{var c;let a={open:t.menuState.value===0},{...o}=e,r={ref:t.buttonRef,id:b,type:k.value,"aria-haspopup":"menu","aria-controls":(c=h(t.itemsRef))==null?void 0:c.id,"aria-expanded":t.menuState.value===0,onKeydown:s,onKeyup:u,onClick:p};return H({ourProps:r,theirProps:o,slot:a,attrs:i,slots:v,name:"MenuButton"})}}}),at=x({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:i,slots:v,expose:m}){var g;let b=(g=e.id)!=null?g:`headlessui-menu-items-${X()}`,t=U("MenuItems"),s=S(null);m({el:t.itemsRef,$el:t.itemsRef}),Ke({container:D(()=>h(t.itemsRef)),enabled:D(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function u(a){var o;switch(s.value&&clearTimeout(s.value),a.key){case y.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case y.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let r=t.items.value[t.activeItemIndex.value];(o=h(r.dataRef.domRef))==null||o.click()}t.closeMenu(),ge(h(t.buttonRef));break;case y.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.Next);case y.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.Previous);case y.Home:case y.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.First);case y.End:case y.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.Last);case y.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),$(()=>{var r;return(r=h(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})});break;case y.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),$(()=>He(h(t.buttonRef),a.shiftKey?re.Previous:re.Next));break;default:a.key.length===1&&(t.search(a.key),s.value=setTimeout(()=>t.clearSearch(),350));break}}function p(a){switch(a.key){case y.Space:a.preventDefault();break}}let k=je(),c=D(()=>k!==null?(k.value&j.Open)===j.Open:t.menuState.value===0);return()=>{var a,o;let r={open:t.menuState.value===0},{...d}=e,l={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(o=h(t.buttonRef))==null?void 0:o.id,id:b,onKeydown:u,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return H({ourProps:l,theirProps:d,slot:r,attrs:i,slots:v,features:se.RenderStrategy|se.Static,visible:c.value,name:"MenuItems"})}}}),nt=x({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:i,attrs:v,expose:m}){var g;let b=(g=e.id)!=null?g:`headlessui-menu-item-${X()}`,t=U("MenuItem"),s=S(null);m({el:s,$el:s});let u=D(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===b:!1),p=Je(s),k=D(()=>({disabled:e.disabled,get textValue(){return p()},domRef:s}));le(()=>t.registerItem(b,k)),Se(()=>t.unregisterItem(b)),De(()=>{t.menuState.value===0&&u.value&&t.activationTrigger.value!==0&&$(()=>{var n,f;return(f=(n=h(s))==null?void 0:n.scrollIntoView)==null?void 0:f.call(n,{block:"nearest"})})});function c(n){if(e.disabled)return n.preventDefault();t.closeMenu(),ge(h(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(w.Nothing);t.goToItem(w.Specific,b)}let o=Ve();function r(n){o.update(n)}function d(n){o.wasMoved(n)&&(e.disabled||u.value||t.goToItem(w.Specific,b,0))}function l(n){o.wasMoved(n)&&(e.disabled||u.value&&t.goToItem(w.Nothing))}return()=>{let{disabled:n,...f}=e,M={active:u.value,disabled:n,close:t.closeMenu};return H({ourProps:{id:b,ref:s,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,onClick:c,onFocus:a,onPointerenter:r,onMouseenter:r,onPointermove:d,onMousemove:d,onPointerleave:l,onMouseleave:l},theirProps:{...v,...f},slot:M,attrs:v,slots:i,name:"MenuItem"})}}});var st=(e=>(e.getAll="district-getAll",e))(st||{});const rt={getAll:()=>V("/district",{key:"district-getAll",method:"GET",server:!1,lazy:!1}),create:e=>V("/district",{method:"POST",body:e,immediate:!1,server:!1,lazy:!1,watch:!1}),edit:e=>V("/district",{method:"PUT",body:e,immediate:!1,server:!1,lazy:!1,watch:!1})},q=oe(F.ui.strategy,F.ui.kbd,Ze),lt=x({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>q.default.size,validator(e){return Object.keys(q.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:i,attrs:v}=ie("kbd",Q(e,"ui"),q),m=D(()=>de(ce(i.value.base,i.value.size[e.size],i.value.padding,i.value.rounded,i.value.font,i.value.background,i.value.ring),e.class));return{ui:i,attrs:v,kbdClass:m}}});function ot(e,i,v,m,g,b){return I(),R("kbd",E({class:e.kbdClass},e.attrs),[Z(e.$slots,"default",{},()=>[pe(W(e.value),1)])],16)}const ye=ue(lt,[["render",ot]]),G=oe(F.ui.strategy,F.ui.dropdown,Qe),ut=x({components:{HMenu:et,HMenuButton:tt,HMenuItems:at,HMenuItem:nt,UIcon:fe,UAvatar:ve,UKbd:ye},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:()=>G.default.openDelay},closeDelay:{type:Number,default:()=>G.default.closeDelay},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:i}){const{ui:v,attrs:m}=ie("dropdown",Q(e,"ui"),G,Q(e,"class")),g=D(()=>Pe(e.mode==="hover"?{offsetDistance:0}:{},e.popper,v.value.popper)),[b,t]=Ge(g.value),s=S(null);let u=null,p=null;le(()=>{var f,M;const l=(f=b.value)==null?void 0:f.$.provides;if(!l)return;const n=Object.getOwnPropertySymbols(l);s.value=n.length&&l[n[0]],e.open&&((M=s.value)==null||M.openMenu())});const k=D(()=>{var M,A,C;if(e.mode!=="hover")return{};const l=((M=e.popper)==null?void 0:M.offsetDistance)||((A=v.value.popper)==null?void 0:A.offsetDistance)||8,n=(C=g.value.placement)==null?void 0:C.split("-")[0],f=`${l}px`;return n==="top"||n==="bottom"?{paddingTop:f,paddingBottom:f}:n==="left"||n==="right"?{paddingLeft:f,paddingRight:f}:{paddingTop:f,paddingBottom:f,paddingLeft:f,paddingRight:f}});function c(l){!l.cancelable||!s.value||(s.value.menuState===0?s.value.closeMenu():s.value.openMenu())}function a(){e.mode!=="hover"||!s.value||(p&&(clearTimeout(p),p=null),s.value.menuState!==0&&(u=u||setTimeout(()=>{s.value.openMenu&&s.value.openMenu(),u=null},e.openDelay)))}function o(){e.mode!=="hover"||!s.value||(u&&(clearTimeout(u),u=null),s.value.menuState!==1&&(p=p||setTimeout(()=>{s.value.closeMenu&&s.value.closeMenu(),p=null},e.closeDelay)))}function r(l,n,{href:f,navigate:M,close:A,isExternal:C}){n.click&&n.click(l),f&&!C&&(M(l),A())}ne(()=>e.open,(l,n)=>{s.value&&(n===void 0||l===n||(l?s.value.openMenu():s.value.closeMenu()))}),ne(()=>{var l;return(l=s.value)==null?void 0:l.menuState},(l,n)=>{n===void 0||l===n||i("update:open",l===0)});const d=me;return Ne(()=>Re()),{ui:v,attrs:m,popper:g,trigger:b,container:t,containerStyle:k,onTouchStart:c,onMouseEnter:a,onMouseLeave:o,onClick:r,getNuxtLinkProps:Ae,twMerge:de,twJoin:ce,NuxtLink:d}}}),it=["disabled"];function dt(e,i,v,m,g,b){const t=z("HMenuButton"),s=fe,u=ve,p=ye,k=z("HMenuItem"),c=me,a=z("HMenuItems"),o=z("HMenu");return I(),O(o,E({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:P(({open:r})=>[B(t,{ref:"trigger",as:"div",disabled:e.disabled,class:T(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:P(()=>[Z(e.$slots,"default",{open:r,disabled:e.disabled},()=>[_("button",{disabled:e.disabled}," Open ",8,it)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),r&&e.items.length?(I(),R("div",{key:0,ref:"container",class:T([e.ui.container,e.ui.width]),style:Ce(e.containerStyle),onMouseenter:i[0]||(i[0]=(...d)=>e.onMouseEnter&&e.onMouseEnter(...d))},[B(Oe,E({appear:""},e.ui.transition),{default:P(()=>[_("div",null,[e.popper.arrow?(I(),R("div",{key:0,"data-popper-arrow":"",class:T(Object.values(e.ui.arrow))},null,2)):L("",!0),B(a,{class:T([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:P(()=>[(I(!0),R(K,null,J(e.items,(d,l)=>(I(),R("div",{key:l,class:T(e.ui.padding)},[(I(!0),R(K,null,J(d,(n,f)=>(I(),O(c,E({key:f,ref_for:!0},e.getNuxtLinkProps(n),{custom:""}),{default:P(({href:M,target:A,rel:C,navigate:he,isExternal:ke,isActive:Y})=>[B(k,{disabled:n.disabled},{default:P(({active:ee,disabled:te,close:Ie})=>[(I(),O($e(M?"a":"button"),{href:te?void 0:M,rel:C,target:A,class:T(e.twMerge(e.twJoin(e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,ee||Y?e.ui.item.active:e.ui.item.inactive,te&&e.ui.item.disabled),n.class)),onClick:N=>e.onClick(N,n,{href:M,navigate:he,close:Ie,isExternal:ke})},{default:P(()=>[Z(e.$slots,n.slot||"item",{item:n},()=>{var N;return[n.icon?(I(),O(s,{key:0,name:n.icon,class:T(e.twMerge(e.twJoin(e.ui.item.icon.base,ee||Y?e.ui.item.icon.active:e.ui.item.icon.inactive),n.iconClass))},null,8,["name","class"])):n.avatar?(I(),O(u,E({key:1,ref_for:!0},{size:e.ui.item.avatar.size,...n.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):L("",!0),_("span",{class:T(e.twMerge(e.ui.item.label,n.labelClass))},W(n.label),3),(N=n.shortcuts)!=null&&N.length?(I(),R("span",{key:2,class:T(e.ui.item.shortcuts)},[(I(!0),R(K,null,J(n.shortcuts,ae=>(I(),O(p,{key:ae},{default:P(()=>[pe(W(ae),1)]),_:2},1024))),128))],2)):L("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):L("",!0)]),_:3},16,["class","onMouseleave"])}const bt=ue(ut,[["render",dt]]),yt=xe("DistrictInformation",{state:()=>({name:"",IDAll:[],UpdatedID:"",data:null,districts:S([])}),actions:{async fetchDistricts(){const{data:e}=rt.getAll();console.log("data",e.value),e.value&&(this.districts=e.value.districts)},setName(e,i){this.name=e,this.UpdatedID=i,this.IDAll.push(i)},saveIDs(e){this.IDAll=[...this.IDAll,...e]}}});export{st as D,bt as _,rt as a,yt as u};