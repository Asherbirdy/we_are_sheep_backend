import{u as $,q as Y,a5 as ke,c as F,a as H,g as S,i as C,d as R,b as G,r as N,j as ee,t as E,k as _e,e as _,n as B,f as te,ao as Ne,ar as Re,as as Te,at as ze,h as v,au as V,N as oe,av as Be,ad as ae,o as L,aw as W,U as I,ax as Me,x as Ie,ay as je,p as Oe,A as $e,az as Ue,aA as qe,aB as Fe,L as j,Z as O,aq as A,aC as ne,aD as Le,aE as se,S as D,P as n,O as r,Q as e,_ as ie,aF as re,aG as P,aH as le,aI as ue,aJ as de,T as Q,aK as l,aL as Ae,aM as J,$ as K,F as He,aN as Ke,aO as Ee,M as Ve,aP as De,aQ as Qe,aR as Ge}from"./index-c561b06f.js";import{u as We}from"./useQuery-a9200db8.js";import{u as k}from"./useSheepApi-96cd5f5e.js";import{N as M,a as Z,b as Je,c as Ze,d as Xe}from"./DataTable-977a37c4.js";import{N as ce,a as pe}from"./DrawerContent-e6d15385.js";import{u as Ye}from"./use-message-079bf070.js";import"./Dropdown-b80df936.js";import"./index-39e4a277.js";Object.assign(Object.assign({},$.props),{left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"}});const et=Y("n-float-button-group");function tt(a){const{popoverColor:s,textColor2:c,buttonColor2Hover:t,buttonColor2Pressed:g,primaryColor:f,primaryColorHover:y,primaryColorPressed:u,borderRadius:o}=a;return{color:s,colorHover:t,colorPressed:g,colorPrimary:f,colorPrimaryHover:y,colorPrimaryPressed:u,textColor:c,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .16)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .24)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .24)",textColorPrimary:"#fff",borderRadiusSquare:o}}const ot={name:"FloatButton",common:ke,self:tt},at=ot,nt=F("float-button",`
 user-select: none;
 cursor: pointer;
 color: var(--n-text-color);
 background-color: var(--n-color);
 font-size: 18px;
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-shadow: var(--n-box-shadow);
 display: flex;
 align-items: stretch;
 box-sizing: border-box;
`,[H("circle-shape",`
 border-radius: 4096px;
 `),H("square-shape",`
 border-radius: var(--n-border-radius-square);
 `),S("fill",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0
 left: 0;
 transition: background-color .3s var(--n-bezier);
 border-radius: inherit;
 `),S("body",`
 position: relative;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: transform .3s var(--n-bezier), opacity .3s var(--n-bezier);
 border-radius: inherit;
 flex-direction: column;
 box-sizing: border-box;
 padding: 2px 4px;
 gap: 2px;
 transform: scale(1);
 `,[S("description",`
 font-size: 12px;
 text-align: center;
 line-height: 14px;
 `)]),C("&:hover","box-shadow: var(--n-box-shadow-hover);",[C(">",[S("fill",`
 background-color: var(--n-color-hover);
 `)])]),C("&:active","box-shadow: var(--n-box-shadow-pressed);",[C(">",[S("fill",`
 background-color: var(--n-color-pressed);
 `)])]),H("show-menu",[C(">",[S("menu",`
 pointer-events: all;
 bottom: 100%;
 opacity: 1;
 `),S("close",`
 transform: scale(1);
 opacity: 1;
 `),S("body",`
 transform: scale(0.75);
 opacity: 0;
 `)])]),S("close",`
 opacity: 0;
 transform: scale(0.75);
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: transform .3s var(--n-bezier), opacity .3s var(--n-bezier);
 `),S("menu",`
 position: absolute;
 bottom: calc(100% - 8px);
 display: flex;
 flex-direction: column;
 opacity: 0;
 pointer-events: none;
 transition:
 opacity .3s var(--n-bezier),
 bottom .3s var(--n-bezier); 
 `,[C("> *",`
 margin-bottom: 16px;
 `),F("float-button",`
 position: relative !important;
 `)])]),st=Object.assign(Object.assign({},$.props),{width:{type:[Number,String],default:40},height:{type:[Number,String],default:40},left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"},type:{type:String,default:"default"},menuTrigger:String,showMenu:{type:Boolean,default:void 0},onUpdateShowMenu:{type:[Function,Array],default:void 0},"onUpdate:showMenu":{type:[Function,Array],default:void 0}}),it=R({name:"FloatButton",props:st,slots:Object,setup(a){const{mergedClsPrefixRef:s,inlineThemeDisabled:c}=G(a),t=N(null),g=$("FloatButton","-float-button",nt,at,a,s),f=ee(et,null),y=N(!1),u=E(a,"showMenu"),o=_e(u,y);function d(w){const{onUpdateShowMenu:z,"onUpdate:showMenu":U}=a;y.value=w,z&&L(z,w),U&&L(U,w)}const h=_(()=>{const{self:{color:w,textColor:z,boxShadow:U,boxShadowHover:me,boxShadowPressed:ge,colorHover:he,colorPrimary:be,colorPrimaryHover:ye,textColorPrimary:xe,borderRadiusSquare:we,colorPressed:Se,colorPrimaryPressed:Pe},common:{cubicBezierEaseInOut:Ce}}=g.value,{type:q}=a;return{"--n-bezier":Ce,"--n-box-shadow":U,"--n-box-shadow-hover":me,"--n-box-shadow-pressed":ge,"--n-color":q==="primary"?be:w,"--n-text-color":q==="primary"?xe:z,"--n-color-hover":q==="primary"?ye:he,"--n-color-pressed":q==="primary"?Pe:Se,"--n-border-radius-square":we}}),x=_(()=>{const{width:w,height:z}=a;return Object.assign({position:f?void 0:a.position,width:B(w),minHeight:B(z)},f?null:{left:B(a.left),right:B(a.right),top:B(a.top),bottom:B(a.bottom)})}),p=_(()=>f?f.shapeRef.value:a.shape),i=()=>{a.menuTrigger==="hover"&&d(!0)},b=()=>{a.menuTrigger==="hover"&&o.value&&d(!1)},m=()=>{a.menuTrigger==="click"&&d(!o.value)},T=c?te("float-button",_(()=>a.type[0]),h,a):void 0;return Ne(()=>{const w=t.value;w&&Re("mousemoveoutside",w,b)}),Te(()=>{const w=t.value;w&&ze("mousemoveoutside",w,b)}),{inlineStyle:x,selfElRef:t,cssVars:c?void 0:h,mergedClsPrefix:s,mergedShape:p,mergedShowMenu:o,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender,Mouseenter:i,handleMouseleave:b,handleClick:m}},render(){var a;const{mergedClsPrefix:s,cssVars:c,mergedShape:t,type:g,menuTrigger:f,mergedShowMenu:y,themeClass:u,$slots:o,inlineStyle:d,onRender:h}=this;return h==null||h(),v("div",{ref:"selfElRef",class:[`${s}-float-button`,`${s}-float-button--${t}-shape`,`${s}-float-button--${g}-type`,y&&`${s}-float-button--show-menu`,u],style:[c,d],onMouseenter:this.Mouseenter,onMouseleave:this.handleMouseleave,onClick:this.handleClick,role:"button"},v("div",{class:`${s}-float-button__fill`,"aria-hidden":!0}),v("div",{class:`${s}-float-button__body`},(a=o.default)===null||a===void 0?void 0:a.call(o),ae(o.description,x=>x?v("div",{class:`${s}-float-button__description`},x):null)),f?v("div",{class:`${s}-float-button__close`},v(oe,{clsPrefix:s},{default:()=>v(Be,null)})):null,f?v("div",{onClick:x=>{x.stopPropagation()},"data-float-button-menu":!0,class:`${s}-float-button__menu`},V(o.menu,()=>[])):null)}}),fe=Y("n-popconfirm"),ve={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},X=Ie(ve),rt=R({name:"NPopconfirmPanel",props:ve,setup(a){const{localeRef:s}=W("Popconfirm"),{inlineThemeDisabled:c}=G(),{mergedClsPrefixRef:t,mergedThemeRef:g,props:f}=ee(fe),y=_(()=>{const{common:{cubicBezierEaseInOut:o},self:{fontSize:d,iconSize:h,iconColor:x}}=g.value;return{"--n-bezier":o,"--n-font-size":d,"--n-icon-size":h,"--n-icon-color":x}}),u=c?te("popconfirm-panel",void 0,y,f):void 0;return Object.assign(Object.assign({},W("Popconfirm")),{mergedClsPrefix:t,cssVars:c?void 0:y,localizedPositiveText:_(()=>a.positiveText||s.value.positiveText),localizedNegativeText:_(()=>a.negativeText||s.value.negativeText),positiveButtonProps:E(f,"positiveButtonProps"),negativeButtonProps:E(f,"negativeButtonProps"),handlePositiveClick(o){a.onPositiveClick(o)},handleNegativeClick(o){a.onNegativeClick(o)},themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender})},render(){var a;const{mergedClsPrefix:s,showIcon:c,$slots:t}=this,g=V(t.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&v(I,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&v(I,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(a=this.onRender)===null||a===void 0||a.call(this),v("div",{class:[`${s}-popconfirm__panel`,this.themeClass],style:this.cssVars},ae(t.default,f=>c||f?v("div",{class:`${s}-popconfirm__body`},c?v("div",{class:`${s}-popconfirm__icon`},V(t.icon,()=>[v(oe,{clsPrefix:s},{default:()=>v(Me,null)})])):null,f):null),g?v("div",{class:[`${s}-popconfirm__action`]},g):null)}}),lt=F("popconfirm",[S("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[S("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),S("action",`
 display: flex;
 justify-content: flex-end;
 `,[C("&:not(:first-child)","margin-top: 8px"),F("button",[C("&:not(:last-child)","margin-right: 8px;")])])]),ut=Object.assign(Object.assign(Object.assign({},$.props),Fe),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),dt=R({name:"Popconfirm",props:ut,slots:Object,__popover__:!0,setup(a){const{mergedClsPrefixRef:s}=G(),c=$("Popconfirm","-popconfirm",lt,je,a,s),t=N(null);function g(u){var o;if(!(!((o=t.value)===null||o===void 0)&&o.getMergedShow()))return;const{onPositiveClick:d,"onUpdate:show":h}=a;Promise.resolve(d?d(u):!0).then(x=>{var p;x!==!1&&((p=t.value)===null||p===void 0||p.setShow(!1),h&&L(h,!1))})}function f(u){var o;if(!(!((o=t.value)===null||o===void 0)&&o.getMergedShow()))return;const{onNegativeClick:d,"onUpdate:show":h}=a;Promise.resolve(d?d(u):!0).then(x=>{var p;x!==!1&&((p=t.value)===null||p===void 0||p.setShow(!1),h&&L(h,!1))})}return Oe(fe,{mergedThemeRef:c,mergedClsPrefixRef:s,props:a}),{setShow(u){var o;(o=t.value)===null||o===void 0||o.setShow(u)},syncPosition(){var u;(u=t.value)===null||u===void 0||u.syncPosition()},mergedTheme:c,popoverInstRef:t,handlePositiveClick:g,handleNegativeClick:f}},render(){const{$slots:a,$props:s,mergedTheme:c}=this;return v(qe,Ue(s,X,{theme:c.peers.Popover,themeOverrides:c.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:a.trigger,default:()=>{const t=$e(s,X);return v(rt,Object.assign(Object.assign({},t),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),a)}})}}),ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},pt=A("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),ft=A("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1),vt=[pt,ft],mt=R({name:"Add",render:function(s,c){return j(),O("svg",ct,vt)}}),gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ht=A("path",{d:"M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8z",fill:"none"},null,-1),bt=A("path",{d:"M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32zM192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416zM272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14z",fill:"currentColor"},null,-1),yt=[ht,bt],xt=R({name:"Trash",render:function(s,c){return j(),O("svg",gt,yt)}}),wt=R({__name:"AddSheepBtnComponent",setup(a){const s=ne(),c=N(null),t=N({data:{name:"",ageRange:Le.teenager,identity:se.Male},status:{drawer:!1}}),g={name:[{required:!0,validator(u,o){return o?!0:new Error("姓名是必填")},trigger:["input","blur"]}]},{mutate:f,isPending:y}=D({mutationFn:()=>k.createSheep.api(t.value.data),onSuccess:()=>t.value.status.drawer=!1,onSettled:async()=>await s.invalidateQueries({queryKey:[k.getSheepList.queryKey]})});return(u,o)=>(j(),O("div",null,[n(e(it),{right:30,bottom:30,onClick:o[0]||(o[0]=d=>e(t).status.drawer=!0)},{default:r(()=>[n(e(ie),null,{default:r(()=>[n(e(mt))]),_:1})]),_:1}),n(e(pe),{show:e(t).status.drawer,"onUpdate:show":o[5]||(o[5]=d=>e(t).status.drawer=d),"default-height":"600px",placement:"bottom"},{default:r(()=>[n(e(ce),{title:"新增",closable:""},{default:r(()=>[n(e(re),{ref_key:"addFormRef",ref:c,model:e(t).data,rules:g,size:"small"},{default:r(()=>[n(e(P),{path:"name",label:"姓名"},{default:r(()=>[n(e(le),{value:e(t).data.name,"onUpdate:value":o[1]||(o[1]=d=>e(t).data.name=d),placeholder:"請輸入姓名"},null,8,["value"])]),_:1}),n(e(P),{path:"ageRange",label:"年齡範圍"},{default:r(()=>[n(e(M),{value:e(t).data.ageRange,"onUpdate:value":o[2]||(o[2]=d=>e(t).data.ageRange=d),options:e(ue)},null,8,["value","options"])]),_:1}),n(e(P),{path:"identity",label:"身分"},{default:r(()=>[n(e(M),{value:e(t).data.identity,"onUpdate:value":o[3]||(o[3]=d=>e(t).data.identity=d),options:e(de)},null,8,["value","options"])]),_:1})]),_:1},8,["model"]),n(e(I),{type:"primary",loading:e(y),onClick:o[4]||(o[4]=d=>e(f)())},{default:r(()=>o[6]||(o[6]=[Q(" 新增 ")])),_:1},8,["loading"])]),_:1})]),_:1},8,["show"])]))}}),zt=R({__name:"index",setup(a){const s=N(null),c=ne(),t=N({data:{details:{[l._id]:"",[l.name]:"",[l.ageRange]:"",[l.identity]:se.Brother,[l.focusPerson]:"",[l.userId]:"",[l.personStatus]:"",[l.note]:"",[l.weekInviteTag]:[],createdAt:"",updatedAt:"",__v:0}},status:{drawer:!1}}),{data:g}=We({queryKey:[k.getSheepList.queryKey],queryFn:()=>k.getSheepList.api()}),f=()=>[{title:"姓名",key:"name",width:"30%"},{title:"此週邀約",key:"weekInviteTag",render(p){return p.weekInviteTag.map(b=>v(Xe,{style:{marginRight:"6px"},type:"info",bordered:!1,size:"small"},{default:()=>b}))}},{title:"",key:"actions",width:"5%",render(p){return v(I,{size:"tiny",onClick:()=>{const{details:i}=t.value.data;Ge(()=>{i.name=p.name,i.ageRange=p.ageRange,i.personStatus=p.personStatus,i.weekInviteTag=p.weekInviteTag,i.identity=p.identity,i.focusPerson=p.focusPerson,i.note=p.note,i._id=p._id,t.value.status.drawer=!0})}},{default:()=>"詳細"})}}],y={[l.name]:[{required:!0,validator(p,i){return i?!0:new Error("姓名是必填")},trigger:["input","blur"]}]},{mutate:u}=D({mutationFn:()=>{const p={sheepId:t.value.data.details._id,data:{ageRange:t.value.data.details.ageRange,weekInviteTag:t.value.data.details.weekInviteTag,identity:t.value.data.details.identity,focusPerson:t.value.data.details.focusPerson,personStatus:t.value.data.details.personStatus,note:t.value.data.details.note}};return k.editSheep.api(p)},onSuccess:()=>{t.value.status.drawer=!1},onSettled:async()=>await c.invalidateQueries({queryKey:[k.getSheepList.queryKey]})}),{mutate:o}=D({mutationFn:()=>k.deleteSheep.api(t.value.data.details._id),onSuccess:()=>t.value.status.drawer=!1,onSettled:async()=>await c.invalidateQueries({queryKey:[k.getSheepList.queryKey]})}),d=Ye(),h=()=>{o(),d.info("刪除成功")},x=()=>{d.info("取消刪除")};return(p,i)=>(j(),O("div",null,[n(e(K),{vertical:""},{default:r(()=>[n(e(Ae),{type:"segment","default-value":"non-focus",animated:""},{default:r(()=>[n(e(J),{name:"focus",tab:"重點牧養"},{default:r(()=>{var b;return[n(e(Z),{bordered:!1,"single-line":!1,columns:f(),data:(b=e(g))==null?void 0:b.list.focusPersonList},null,8,["columns","data"])]}),_:1}),n(e(J),{name:"non-focus",tab:"其他名單"},{default:r(()=>{var b;return[n(e(Z),{bordered:!1,"single-line":!1,columns:f(),data:(b=e(g))==null?void 0:b.list.nonFocusPersonList},null,8,["columns","data"])]}),_:1})]),_:1})]),_:1}),n(e(pe),{show:e(t).status.drawer,"onUpdate:show":i[7]||(i[7]=b=>e(t).status.drawer=b),"default-height":"600px",placement:"bottom"},{default:r(()=>{var b;return[n(e(ce),{title:(b=e(t).data.details)==null?void 0:b.name,closable:""},{default:r(()=>[n(e(re),{ref_key:"formRef",ref:s,model:e(t).data.details,rules:y,size:"small"},{default:r(()=>[n(e(P),{path:e(l).ageRange,label:"年齡範圍"},{default:r(()=>[n(e(M),{value:e(t).data.details[e(l).ageRange],"onUpdate:value":i[0]||(i[0]=m=>e(t).data.details[e(l).ageRange]=m),options:e(ue)},null,8,["value","options"])]),_:1},8,["path"]),n(e(P),{path:e(l).identity,label:"定位"},{default:r(()=>[n(e(M),{value:e(t).data.details[e(l).identity],"onUpdate:value":i[1]||(i[1]=m=>e(t).data.details[e(l).identity]=m),options:e(de)},null,8,["value","options"])]),_:1},8,["path"]),n(e(P),{path:e(l).focusPerson,label:"分類"},{default:r(()=>[n(e(Je),{value:e(t).data.details[e(l).focusPerson],"onUpdate:value":i[2]||(i[2]=m=>e(t).data.details[e(l).focusPerson]=m),name:"radiogroup"},{default:r(()=>[n(e(K),null,{default:r(()=>[(j(!0),O(He,null,Ke(e(Ee),m=>(j(),Ve(e(Ze),{key:m.label,value:m.value,label:m.label},null,8,["value","label"]))),128))]),_:1})]),_:1},8,["value"])]),_:1},8,["path"]),n(e(P),{path:e(l).personStatus,label:"狀態"},{default:r(()=>[n(e(M),{value:e(t).data.details[e(l).personStatus],"onUpdate:value":i[3]||(i[3]=m=>e(t).data.details[e(l).personStatus]=m),options:e(De)},null,8,["value","options"])]),_:1},8,["path"]),n(e(P),{path:e(l).weekInviteTag,label:"這週邀約請形"},{default:r(()=>[n(e(M),{value:e(t).data.details[e(l).weekInviteTag],"onUpdate:value":i[4]||(i[4]=m=>e(t).data.details[e(l).weekInviteTag]=m),multiple:"",options:e(Qe)},null,8,["value","options"])]),_:1},8,["path"]),n(e(P),{path:e(l).note,label:"備註"},{default:r(()=>[n(e(le),{value:e(t).data.details[e(l).note],"onUpdate:value":i[5]||(i[5]=m=>e(t).data.details[e(l).note]=m),type:"textarea",placeholder:"Basic Textarea"},null,8,["value"])]),_:1},8,["path"])]),_:1},8,["model"]),n(e(K),{justify:"space-between"},{default:r(()=>[n(e(I),{type:"primary",onClick:i[6]||(i[6]=m=>e(u)())},{default:r(()=>i[8]||(i[8]=[Q(" 更新 ")])),_:1}),n(e(dt),{onPositiveClick:h,onNegativeClick:x},{trigger:r(()=>[n(e(I),{quaternary:"",circle:""},{icon:r(()=>[n(e(ie),null,{default:r(()=>[n(e(xt))]),_:1})]),_:1})]),default:r(()=>[i[9]||(i[9]=Q(" 確定要刪除嗎？ "))]),_:1})]),_:1})]),_:1},8,["title"])]}),_:1},8,["show"]),n(wt)]))}});export{zt as default};
