import{D as de,s as J,x as j,_ as L,f as H,z as T,A as M,m as d,B as ce,C as z,o as n,c as l,a as u,j as pe,ah as ge,J as h,H as s,P as k,d as F,t as w,I as m,a9 as fe,ai as me,F as N,O as q,y as Z,k as x,aj as be,a2 as K,r as ye,a6 as E,b as R,G,ak as ve,W as Q}from"./B0J0WvHt.js";import{u as he}from"./CRmINWLG.js";const ke=de,we={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",caption:"sr-only",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},expand:{icon:"transform transition-transform duration-200"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},expandButton:{icon:"i-heroicons-chevron-down",color:"gray",variant:"ghost",size:"xs",class:"-my-1.5 align-middle"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}},Se={wrapper:"w-full flex flex-col gap-2",indicator:{container:{base:"flex flex-row justify-end",width:"min-w-fit",transition:"transition-all"},align:"text-end",width:"w-fit",color:"text-gray-400 dark:text-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},progress:{base:"block appearance-none border-none overflow-hidden",width:"w-full [&::-webkit-progress-bar]:w-full",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"},rounded:"rounded-full [&::-webkit-progress-bar]:rounded-full",track:"[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",bar:"[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",color:"text-{color}-500 dark:text-{color}-400",background:"[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",indeterminate:{base:"indeterminate:relative",rounded:"indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"}},steps:{base:"grid grid-cols-1",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},step:{base:"transition-all opacity-0 truncate row-start-1 col-start-1",align:"text-end",active:"opacity-100",first:"text-gray-500 dark:text-gray-400"},animation:{carousel:"bar-animation-carousel","carousel-inverse":"bar-animation-carousel-inverse",swing:"bar-animation-swing",elastic:"bar-animation-elastic"},default:{color:"primary",size:"md",animation:"carousel"}},Ce={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},X=J(j.ui.strategy,j.ui.checkbox,Ce),$e=H({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:void 0},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>X.default.color,validator(e){return j.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:c,attrs:v}=T("checkbox",M(e,"ui"),X,M(e,"class")),{emitFormChange:S,color:y,name:o,inputId:g}=he(e),I=g.value??ke(),C=d({get(){return e.modelValue},set(i){t("update:modelValue",i)}}),r=i=>{t("change",i.target.checked),S()},b=d(()=>ce(z(c.value.base,c.value.form,c.value.rounded,c.value.background,c.value.border,y.value&&c.value.ring.replaceAll("{color}",y.value),y.value&&c.value.color.replaceAll("{color}",y.value)),e.inputClass));return{ui:c,attrs:v,toggle:C,inputId:I,name:o,inputClass:b,onChange:r}}}),Ae=["data-n-ids"],Be=["id","name","required","value","disabled","indeterminate"],Ve=["for"];function ze(e,t,c,v,S,y){return n(),l("div",{class:s(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[u("div",{class:s(e.ui.container)},[pe(u("input",h({id:e.inputId,"onUpdate:modelValue":t[0]||(t[0]=o=>e.toggle=o),name:e.name,required:e.required,value:e.value,disabled:e.disabled,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:t[1]||(t[1]=(...o)=>e.onChange&&e.onChange(...o))}),null,16,Be),[[ge,e.toggle]])],2),e.label||e.$slots.label?(n(),l("div",{key:0,class:s(e.ui.inner)},[u("label",{for:e.inputId,class:s(e.ui.label)},[k(e.$slots,"label",{label:e.label},()=>[F(w(e.label),1)]),e.required?(n(),l("span",{key:0,class:s(e.ui.required)},"*",2)):m("",!0)],10,Ve),e.help||e.$slots.help?(n(),l("p",{key:0,class:s(e.ui.help)},[k(e.$slots,"help",{help:e.help},()=>[F(w(e.help),1)])],2)):m("",!0)],2)):m("",!0)],10,Ae)}const _=L($e,[["render",ze]]),D=J(j.ui.strategy,j.ui.progress,Se),je=H({inheritAttrs:!1,props:{value:{type:Number,default:null},max:{type:[Number,Array],default:100},indicator:{type:Boolean,default:!1},animation:{type:String,default:()=>D.default.animation,validator(e){return Object.keys(D.animation).includes(e)}},size:{type:String,default:()=>D.default.size,validator(e){return Object.keys(D.progress.size).includes(e)}},color:{type:String,default:()=>D.default.color,validator(e){return j.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:c}=T("progress",M(e,"ui"),D,M(e,"class")),v=d(()=>z(t.value.indicator.container.base,t.value.indicator.container.width,t.value.indicator.container.transition)),S=d(()=>z(t.value.indicator.align,t.value.indicator.width,t.value.indicator.color,t.value.indicator.size[e.size])),y=d(()=>{var B;const f=[t.value.progress.base,t.value.progress.width,t.value.progress.size[e.size],t.value.progress.rounded,t.value.progress.track,t.value.progress.bar,(B=t.value.progress.color)==null?void 0:B.replaceAll("{color}",e.color),t.value.progress.background,t.value.progress.indeterminate.base,t.value.progress.indeterminate.rounded];return $.value&&f.push(t.value.animation[e.animation]),z(...f)}),o=d(()=>{var f;return z(t.value.steps.base,(f=t.value.steps.color)==null?void 0:f.replaceAll("{color}",e.color),t.value.steps.size[e.size])}),g=d(()=>z(t.value.step.base,t.value.step.align)),I=d(()=>z(t.value.step.active)),C=d(()=>z(t.value.step.first));function r(f){return f===Number(e.value)}function b(f){return f===0}function i(f){f=Number(f);const B=[g.value];return b(f)&&B.push(C.value),r(f)&&B.push(I.value),B.join(" ")}const $=d(()=>e.value===void 0||e.value===null),U=d(()=>Array.isArray(e.max)),A=d(()=>$.value?null:Array.isArray(e.max)?e.max.length-1:Number(e.max)),P=d(()=>{if(!$.value)switch(!0){case e.value<0:return 0;case e.value>A.value:return 100;default:return e.value/A.value*100}});return{ui:t,attrs:c,indicatorContainerClass:v,indicatorClass:S,progressClass:y,stepsClass:o,stepClasses:i,isIndeterminate:$,isSteps:U,realMax:A,percent:P}}}),Ie=["aria-valuemax","aria-valuenow"];function Oe(e,t,c,v,S,y){return n(),l("div",{class:s(e.ui.wrapper),role:"progressbar"},[e.indicator||e.$slots.indicator?k(e.$slots,"indicator",me(h({key:0},{percent:e.percent})),()=>[e.isSteps?m("",!0):(n(),l("div",{key:0,class:s(e.indicatorContainerClass),style:fe({width:`${e.percent}%`})},[u("div",{class:s(e.indicatorClass)},w(Math.round(e.percent))+"% ",3)],6))],!0):m("",!0),u("progress",h({"aria-valuemax":e.realMax,"aria-valuenow":e.value,class:e.progressClass},{value:e.value,max:e.realMax,...e.attrs}),w(e.percent!==void 0?`${Math.round(e.percent)}%`:void 0),17,Ie),e.isSteps?(n(),l("div",{key:1,class:s(e.stepsClass)},[(n(!0),l(N,null,q(e.max,(o,g)=>(n(),l("div",{key:g,class:s(e.stepClasses(g))},[k(e.$slots,`step-${g}`,h({ref_for:!0},{step:o}),()=>[F(w(o),1)],!0)],2))),128))],2)):m("",!0)],2)}const ee=L(je,[["render",Oe],["__scopeId","data-v-44fe1295"]]);function Ue(e){return e?e[0].toUpperCase()+e.slice(1):""}const V=J(j.ui.strategy,j.ui.table,we);function De(e,t){return e===t}function Y(e,t,c){return e===t?0:c==="asc"?e<t?-1:1:e>t?-1:1}const Me=H({components:{UIcon:Z,UButton:x,UProgress:ee,UCheckbox:_},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>De},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>V.default.sortButton},sortAscIcon:{type:String,default:()=>V.default.sortAscIcon},sortDescIcon:{type:String,default:()=>V.default.sortDescIcon},expandButton:{type:Object,default:()=>V.default.expandButton},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>V.default.loadingState},emptyState:{type:Object,default:()=>V.default.emptyState},caption:{type:String,default:null},progress:{type:Object,default:()=>V.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","update:sort"],setup(e,{emit:t,attrs:c}){const{ui:v,attrs:S}=T("table",M(e,"ui"),V,M(e,"class")),y=d(()=>e.columns??Object.keys(e.rows[0]??{}).map(a=>({key:a,label:Ue(a),sortable:!1,class:void 0,sort:Y}))),o=be(e,"sort",t,{passive:!0,defaultValue:K({},e.sort,{column:null,direction:"asc"})}),g=ye([]),I={column:o.value.column,direction:null},C=d(()=>{var O;if(!((O=o.value)!=null&&O.column)||e.sortMode==="manual")return e.rows;const{column:a,direction:p}=o.value;return e.rows.slice().sort((oe,ne)=>{var W;const le=E(oe,a),ie=E(ne,a);return(((W=y.value.find(ue=>ue.key===a))==null?void 0:W.sort)??Y)(le,ie,p)})}),r=d({get(){return e.modelValue},set(a){t("update:modelValue",a)}}),b=d(()=>r.value&&r.value.length>0&&r.value.length<e.rows.length),i=d(()=>e.emptyState===null?null:{...v.value.default.emptyState,...e.emptyState}),$=d(()=>e.loadingState===null?null:{...v.value.default.loadingState,...e.loadingState});function U(a,p){if(typeof e.by=="string"){const O=e.by;return(a==null?void 0:a[O])===(p==null?void 0:p[O])}return e.by(a,p)}function A(a){return e.modelValue?r.value.some(p=>U(Q(p),Q(a))):!1}function P(a){if(o.value.column===a.key){const p=!a.direction||a.direction==="asc"?"desc":"asc";o.value.direction===p?o.value=K({},I,{column:null,direction:"asc"}):o.value={column:o.value.column,direction:o.value.direction==="asc"?"desc":"asc"}}else o.value={column:a.key,direction:a.direction||"asc"}}function f(a){c.onSelect&&c.onSelect(a)}function B(){const a=[...r.value];e.rows.forEach(p=>{A(p)||a.push(p)}),r.value=a}function te(a){a?B():r.value=[]}function ae(a,p,O=""){return E(a,p,O)}function re(a){g.value.includes(a)?g.value=g.value.filter(p=>p!==a):g.value.push(a)}function se(a){if(a.sortable){if(o.value.column!==a.key)return"none";if(o.value.direction==="asc")return"ascending";if(o.value.direction==="desc")return"descending"}}return{ui:v,attrs:S,sort:o,columns:y,rows:C,selected:r,indeterminate:b,emptyState:i,loadingState:$,openedRows:g,isSelected:A,onSort:P,onSelect:f,onChange:te,getRowData:ae,toggleOpened:re,getAriaSort:se}}}),Ne=["aria-sort"],Re={key:1},qe={key:0},Fe={key:0},Pe=["colspan"],Ee={key:1},Ge=["colspan"],Je=["onClick"],Le={key:0},He={colspan:"100%"};function Te(e,t,c,v,S,y){const o=_,g=x,I=ee,C=Z;return n(),l("div",h({class:e.ui.wrapper},e.attrs),[u("table",{class:s([e.ui.base,e.ui.divide])},[e.$slots.caption||e.caption?k(e.$slots,"caption",{key:0},()=>[u("caption",{class:s(e.ui.caption)},w(e.caption),3)]):m("",!0),u("thead",{class:s(e.ui.thead)},[u("tr",{class:s(e.ui.tr.base)},[e.modelValue?(n(),l("th",{key:0,scope:"col",class:s(e.ui.checkbox.padding)},[R(o,h({"model-value":e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])],2)):m("",!0),e.$slots.expand?(n(),l("th",{key:1,scope:"col",class:s(e.ui.tr.base)},t[1]||(t[1]=[u("span",{class:"sr-only"},"Expand",-1)]),2)):m("",!0),(n(!0),l(N,null,q(e.columns,(r,b)=>(n(),l("th",{key:b,scope:"col",class:s([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,r.class]),"aria-sort":e.getAriaSort(r)},[k(e.$slots,`${r.key}-header`,{column:r,sort:e.sort,onSort:e.onSort},()=>[r.sortable?(n(),G(g,h({key:0,ref_for:!0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==r.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:r[e.columnAttribute],onClick:i=>e.onSort(r)}),null,16,["icon","label","onClick"])):(n(),l("span",Re,w(r[e.columnAttribute]),1))])],10,Ne))),128))],2),e.loading&&e.progress?(n(),l("tr",qe,[u("td",{colspan:0,class:s(e.ui.progress.wrapper)},[R(I,h({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):m("",!0)],2),u("tbody",{class:s(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(n(),l("tr",Fe,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.$slots.expand?1:0)},[k(e.$slots,"loading-state",{},()=>[u("div",{class:s(e.ui.loadingState.wrapper)},[e.loadingState.icon?(n(),G(C,{key:0,name:e.loadingState.icon,class:s(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):m("",!0),u("p",{class:s(e.ui.loadingState.label)},w(e.loadingState.label),3)],2)])],8,Pe)])):e.emptyState&&!e.rows.length?(n(),l("tr",Ee,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.$slots.expand?1:0)},[k(e.$slots,"empty-state",{},()=>[u("div",{class:s(e.ui.emptyState.wrapper)},[e.emptyState.icon?(n(),G(C,{key:0,name:e.emptyState.icon,class:s(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):m("",!0),u("p",{class:s(e.ui.emptyState.label)},w(e.emptyState.label),3)],2)])],8,Ge)])):(n(!0),l(N,{key:2},q(e.rows,(r,b)=>(n(),l(N,{key:b},[u("tr",{class:s([e.ui.tr.base,e.isSelected(r)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,r==null?void 0:r.class]),onClick:()=>e.onSelect(r)},[e.modelValue?(n(),l("td",{key:0,class:s(e.ui.checkbox.padding)},[R(o,h({modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=i=>e.selected=i),value:r,ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select row",onClickCapture:ve(()=>e.onSelect(r),["stop"])}),null,16,["modelValue","value","onClickCapture"])],2)):m("",!0),e.$slots.expand?(n(),l("td",{key:1,class:s([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size])},[R(g,h({ref_for:!0},{...e.ui.default.expandButton||{},...e.expandButton},{ui:{icon:{base:[e.ui.expand.icon,e.openedRows.includes(b)&&"rotate-180"].join(" ")}},onClick:i=>e.toggleOpened(b)}),null,16,["ui","onClick"])],2)):m("",!0),(n(!0),l(N,null,q(e.columns,(i,$)=>{var U;return n(),l("td",{key:$,class:s([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,i==null?void 0:i.rowClass,(U=r[i.key])==null?void 0:U.class])},[k(e.$slots,`${i.key}-data`,{column:i,row:r,index:b,getRowData:A=>e.getRowData(r,i.key,A)},()=>[F(w(e.getRowData(r,i.key)),1)])],2)}),128))],10,Je),e.openedRows.includes(b)?(n(),l("tr",Le,[u("td",He,[k(e.$slots,"expand",{row:r,index:b})])])):m("",!0)],64))),128))],2)],2)],16)}const Xe=L(Me,[["render",Te]]);export{Xe as _};