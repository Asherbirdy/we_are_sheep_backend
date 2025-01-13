import{s as V,x as k,_ as D,f as x,y as A,L as O,z as I,A as C,m as $,B as P,C as w,o as s,c as i,a as o,H as b,F as B,P as f,t as U,G as v,J as g,I as d,M as J,N as K,O as G,b as h,w as _,d as q,Q as E,a7 as Q,r as T,h as W,ar as X,k as Y}from"./B0J0WvHt.js";import{_ as R}from"./BYkOz3ru.js";import{_ as Z}from"./Dozi95TJ.js";import{A as N}from"./rj6rKEoh.js";import"./DYXc8vUg.js";const ee={base:"mx-auto",padding:"px-4 sm:px-6 lg:px-8",constrained:"max-w-7xl"},ae={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},te={wrapper:"relative",base:"group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-2.5 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"},divider:{wrapper:{base:"p-2"}}},z=V(k.ui.strategy,k.ui.divider,ae),se=x({components:{UIcon:A,UAvatar:O},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>z.default.size,validator(e){return Object.keys(z.border.size.horizontal).includes(e)||Object.keys(z.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:l}=I("divider",C(e,"ui"),z),n=$(()=>P(w(a.value.wrapper.base,a.value.wrapper[e.orientation]),e.class)),c=$(()=>w(a.value.container.base,a.value.container[e.orientation])),m=$(()=>w(a.value.border.base,a.value.border[e.orientation],a.value.border.size[e.orientation][e.size],a.value.border.type[e.type]));return{ui:a,attrs:l,wrapperClass:n,containerClass:c,borderClass:m}}});function re(e,a,l,n,c,m){const r=A,y=O;return s(),i("div",g({class:e.wrapperClass},e.attrs),[o("div",{class:b(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(s(),i(B,{key:0},[o("div",{class:b(e.containerClass)},[f(e.$slots,"default",{},()=>[e.label?(s(),i("span",{key:0,class:b(e.ui.label)},U(e.label),3)):e.icon?(s(),v(r,{key:1,name:e.icon,class:b(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(s(),v(y,g({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):d("",!0)])],2),o("div",{class:b(e.borderClass)},null,2)],64)):d("",!0)],16)}const F=D(se,[["render",re]]),oe=V(k.ui.strategy,k.ui.verticalNavigation,te),ne=x({components:{UIcon:A,UAvatar:O,UBadge:R,ULink:J,UDivider:F},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:l}=I("verticalNavigation",C(e,"ui"),oe,C(e,"class")),n=$(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:a,attrs:l,sections:n,getULinkProps:K,twMerge:P,twJoin:w}}}),ie={key:0,class:"sr-only"};function le(e,a,l,n,c,m){const r=O,y=A,S=R,j=J,L=F;return s(),i("nav",g({class:e.ui.wrapper},e.attrs),[(s(!0),i(B,null,G(e.sections,(p,M)=>(s(),i("ul",{key:`section${M}`},[(s(!0),i(B,null,G(p,(t,H)=>(s(),i("li",{key:`section${M}-${H}`},[h(j,g({ref_for:!0},e.getULinkProps(t),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:t.click,onKeyup:a[0]||(a[0]=E(u=>u.target.blur(),["enter"]))}),{default:_(({isActive:u})=>[f(e.$slots,"avatar",{link:t,isActive:u},()=>[t.avatar?(s(),v(r,g({key:0,ref_for:!0},{size:e.ui.avatar.size,...t.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):d("",!0)]),f(e.$slots,"icon",{link:t,isActive:u},()=>[t.icon?(s(),v(y,{key:0,name:t.icon,class:b(e.twMerge(e.twJoin(e.ui.icon.base,u?e.ui.icon.active:e.ui.icon.inactive),t.iconClass))},null,8,["name","class"])):d("",!0)]),f(e.$slots,"default",{link:t,isActive:u},()=>[t.label?(s(),i("span",{key:0,class:b(e.twMerge(e.ui.label,t.labelClass))},[u?(s(),i("span",ie," Current page: ")):d("",!0),q(" "+U(t.label),1)],2)):d("",!0)]),f(e.$slots,"badge",{link:t,isActive:u},()=>[t.badge?(s(),v(S,g({key:0,ref_for:!0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof t.badge=="string"||typeof t.badge=="number"?{label:t.badge}:t.badge},{class:e.ui.badge.base}),null,16,["class"])):d("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])]))),128)),M<e.sections.length-1?(s(),v(L,{key:0,ui:e.ui.divider},null,8,["ui"])):d("",!0)]))),128))],16)}const ue=D(ne,[["render",le]]),de=V(k.ui.strategy,k.ui.container,ee),ce=x({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:l}=I("container",C(e,"ui"),de),n=$(()=>P(w(a.value.base,a.value.padding,a.value.constrained),e.class));return{ui:a,attrs:l,containerClass:n}}});function pe(e,a,l,n,c,m){return s(),v(Q(e.as),g({class:e.containerClass},e.attrs),{default:_(()=>[f(e.$slots,"default")]),_:3},16,["class"])}const be=D(ce,[["render",pe]]),fe={class:"flex"},ve={class:"w-1/6 p-4 h-screen hidden md:block"},ge={class:"group-hover:text-primary relative"},me={class:"flex-1"},ye={class:"flex justify-between items-center p-3"},he={class:"p-4"},_e={class:"group-hover:text-primary relative"},Ue=x({__name:"dashboard",setup(e){const a=T(!1),l=()=>{a.value=!a.value},n=()=>{a.value=!1},c=[{label:"個人中心",to:N.Home},{label:"會員管理",to:N.MemberList},{label:"活動管理",to:N.Activity}];return(m,r)=>{const y=ue,S=Y,j=Z,L=be;return s(),i("div",fe,[o("nav",ve,[r[1]||(r[1]=o("h1",{class:""}," LOGO ",-1)),h(y,{links:c,onClick:n},{default:_(({link:p})=>[o("span",ge,U(p.label),1)]),_:1})]),o("div",me,[o("header",ye,[r[2]||(r[2]=o("div",{class:"md:hidden block"}," Logo ",-1)),h(S,{class:"md:hidden block",icon:"ion:menu",size:"sm",color:"primary",square:"",variant:"ghost",onClick:l})]),h(j,{modelValue:W(a),"onUpdate:modelValue":r[0]||(r[0]=p=>X(a)?a.value=p:null)},{default:_(()=>[o("div",he,[r[3]||(r[3]=o("h1",null,"LOGO",-1)),h(y,{links:c,onClick:n},{default:_(({link:p})=>[o("span",_e,U(p.label),1)]),_:1})])]),_:1},8,["modelValue"]),h(L,null,{default:_(()=>[f(m.$slots,"default")]),_:3})])])}}});export{Ue as default};