import{d as T,h as v,c as h,a as w,u as q,b as ue,e as z,f as ve,g as u,i as y,N as Pe,j as D,r as F,k as le,t as ee,l as Je,p as Y,m as Qe,n as re,o as M,q as me,s as X,v as eo,w as G,x as he,y as ae,z as oo,F as to,A as ne,B as ro,C as ye,D as no,E as io,V as lo,G as ao,H as co,I as _e,J as Ae,K as so,L as uo,M as oe,O as Te,P,Q as S,R as b,S as vo,T as ke,U as ze,W as ce,X as mo,Y as ho,Z as po,_ as fo,$ as go}from"./index-29d4e570.js";import{p as He,l as Oe,a as Be,b as bo,M as we,_ as Ie,N as Se,c as xo}from"./ThemeSwichComponent.vue_vue_type_script_setup_true_lang-f6c3e08e.js";import{C as Co,N as Ee,c as ie}from"./Dropdown-d2db4a3b.js";import{V as yo}from"./index-d65ec873.js";import{N as zo,a as wo}from"./DrawerContent-38d340e1.js";import{N as Io}from"./Flex-35a60f47.js";const So=T({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ro=h("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[w("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),w("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),No={position:He,inverted:Boolean,bordered:{type:Boolean,default:!1}},Po=T({name:"LayoutHeader",props:Object.assign(Object.assign({},q.props),No),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=ue(e),i=q("Layout","-layout-header",Ro,Oe,e,r),c=z(()=>{const{common:{cubicBezierEaseInOut:d},self:a}=i.value,s={"--n-bezier":d};return e.inverted?(s["--n-color"]=a.headerColorInverted,s["--n-text-color"]=a.textColorInverted,s["--n-border-color"]=a.headerBorderColorInverted):(s["--n-color"]=a.headerColor,s["--n-text-color"]=a.textColor,s["--n-border-color"]=a.headerBorderColor),s}),l=t?ve("layout-header",z(()=>e.inverted?"a":"b"),c,e):void 0;return{mergedClsPrefix:r,cssVars:t?void 0:c,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),_o=h("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[w("bordered",[u("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),u("left-placement",[w("bordered",[u("border",`
 right: 0;
 `)])]),w("right-placement",`
 justify-content: flex-start;
 `,[w("bordered",[u("border",`
 left: 0;
 `)]),w("collapsed",[h("layout-toggle-button",[h("base-icon",`
 transform: rotate(180deg);
 `)]),h("layout-toggle-bar",[y("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),h("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[h("base-icon",`
 transform: rotate(0);
 `)]),h("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[y("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),w("collapsed",[h("layout-toggle-bar",[y("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),h("layout-toggle-button",[h("base-icon",`
 transform: rotate(0);
 `)])]),h("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[h("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),h("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[u("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),u("bottom",`
 position: absolute;
 top: 34px;
 `),y("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),y("&:hover",[u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),u("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),h("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),w("show-content",[h("layout-sider-scroll-container",{opacity:1})]),w("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Ao=T({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},v("div",{class:`${e}-layout-toggle-bar__top`}),v("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),To=T({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},v(Pe,{clsPrefix:e},{default:()=>v(Co,null)}))}}),ko={position:He,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Ho=T({name:"LayoutSider",props:Object.assign(Object.assign({},q.props),ko),setup(e){const r=D(bo),t=F(null),i=F(null),c=F(e.defaultCollapsed),l=le(ee(e,"collapsed"),c),d=z(()=>re(l.value?e.collapsedWidth:e.width)),a=z(()=>e.collapseMode!=="transform"?{}:{minWidth:re(e.width)}),s=z(()=>r?r.siderPlacement:"left");function _(R,x){if(e.nativeScrollbar){const{value:C}=t;C&&(x===void 0?C.scrollTo(R):C.scrollTo(R,x))}else{const{value:C}=i;C&&C.scrollTo(R,x)}}function E(){const{"onUpdate:collapsed":R,onUpdateCollapsed:x,onExpand:C,onCollapse:V}=e,{value:K}=l;x&&M(x,!K),R&&M(R,!K),c.value=!K,K?C&&M(C):V&&M(V)}let N=0,f=0;const k=R=>{var x;const C=R.target;N=C.scrollLeft,f=C.scrollTop,(x=e.onScroll)===null||x===void 0||x.call(e,R)};Je(()=>{if(e.nativeScrollbar){const R=t.value;R&&(R.scrollTop=f,R.scrollLeft=N)}}),Y(Be,{collapsedRef:l,collapseModeRef:ee(e,"collapseMode")});const{mergedClsPrefixRef:H,inlineThemeDisabled:A}=ue(e),B=q("Layout","-layout-sider",_o,Oe,e,H);function L(R){var x,C;R.propertyName==="max-width"&&(l.value?(x=e.onAfterLeave)===null||x===void 0||x.call(e):(C=e.onAfterEnter)===null||C===void 0||C.call(e))}const W={scrollTo:_},j=z(()=>{const{common:{cubicBezierEaseInOut:R},self:x}=B.value,{siderToggleButtonColor:C,siderToggleButtonBorder:V,siderToggleBarColor:K,siderToggleBarColorHover:te}=x,O={"--n-bezier":R,"--n-toggle-button-color":C,"--n-toggle-button-border":V,"--n-toggle-bar-color":K,"--n-toggle-bar-color-hover":te};return e.inverted?(O["--n-color"]=x.siderColorInverted,O["--n-text-color"]=x.textColorInverted,O["--n-border-color"]=x.siderBorderColorInverted,O["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColorInverted,O.__invertScrollbar=x.__invertScrollbar):(O["--n-color"]=x.siderColor,O["--n-text-color"]=x.textColor,O["--n-border-color"]=x.siderBorderColor,O["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColor),O}),$=A?ve("layout-sider",z(()=>e.inverted?"a":"b"),j,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:i,mergedClsPrefix:H,mergedTheme:B,styleMaxWidth:d,mergedCollapsed:l,scrollContainerStyle:a,siderPlacement:s,handleNativeElScroll:k,handleTransitionend:L,handleTriggerClick:E,inlineThemeDisabled:A,cssVars:j,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},W)},render(){var e;const{mergedClsPrefix:r,mergedCollapsed:t,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("aside",{class:[`${r}-layout-sider`,this.themeClass,`${r}-layout-sider--${this.position}-positioned`,`${r}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${r}-layout-sider--bordered`,t&&`${r}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${r}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:re(this.width)}]},this.nativeScrollbar?v("div",{class:[`${r}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):v(Qe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?v(Ao,{clsPrefix:r,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):v(To,{clsPrefix:r,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?v("div",{class:`${r}-layout-sider__border`}):null)}}),Z=me("n-menu"),pe=me("n-submenu"),fe=me("n-menu-item-group"),Re=[y("&::before","background-color: var(--n-item-color-hover);"),u("arrow",`
 color: var(--n-arrow-color-hover);
 `),u("icon",`
 color: var(--n-item-icon-color-hover);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[y("a",`
 color: var(--n-item-text-color-hover);
 `),u("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ne=[u("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Oo=y([h("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[w("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[h("submenu","margin: 0;"),h("menu-item","margin: 0;"),h("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[y("&::before","display: none;"),w("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),h("menu-item-content",[w("selected",[u("icon","color: var(--n-item-icon-color-active-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-horizontal);"),u("extra","color: var(--n-item-text-color-active-horizontal);")])]),w("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),u("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),X("disabled",[X("selected, child-active",[y("&:focus-within",Ne)]),w("selected",[U(null,[u("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),w("child-active",[U(null,[u("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),U("border-bottom: 2px solid var(--n-border-color-horizontal);",Ne)]),h("menu-item-content-header",[y("a","color: var(--n-item-text-color-horizontal);")])])]),X("responsive",[h("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),w("collapsed",[h("menu-item-content",[w("selected",[y("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),h("menu-item-content-header","opacity: 0;"),u("arrow","opacity: 0;"),u("icon","color: var(--n-item-icon-color-collapsed);")])]),h("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),h("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("> *","z-index: 1;"),y("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),w("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),w("collapsed",[u("arrow","transform: rotate(0);")]),w("selected",[y("&::before","background-color: var(--n-item-color-active);"),u("arrow","color: var(--n-arrow-color-active);"),u("icon","color: var(--n-item-icon-color-active);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[y("a","color: var(--n-item-text-color-active);"),u("extra","color: var(--n-item-text-color-active);")])]),w("child-active",[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[y("a",`
 color: var(--n-item-text-color-child-active);
 `),u("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),u("arrow",`
 color: var(--n-arrow-color-child-active);
 `),u("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),X("disabled",[X("selected, child-active",[y("&:focus-within",Re)]),w("selected",[U(null,[u("arrow","color: var(--n-arrow-color-active-hover);"),u("icon","color: var(--n-item-icon-color-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[y("a","color: var(--n-item-text-color-active-hover);"),u("extra","color: var(--n-item-text-color-active-hover);")])])]),w("child-active",[U(null,[u("arrow","color: var(--n-arrow-color-child-active-hover);"),u("icon","color: var(--n-item-icon-color-child-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[y("a","color: var(--n-item-text-color-child-active-hover);"),u("extra","color: var(--n-item-text-color-child-active-hover);")])])]),w("selected",[U(null,[y("&::before","background-color: var(--n-item-color-active-hover);")])]),U(null,Re)]),u("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),u("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),h("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[y("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[y("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),u("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),h("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[h("menu-item-content",`
 height: var(--n-item-height);
 `),h("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[eo({duration:".2s"})])]),h("menu-item-group",[h("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),h("menu-tooltip",[y("a",`
 color: inherit;
 text-decoration: none;
 `)]),h("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function U(e,r){return[w("hover",e,r),y("&:hover",e,r)]}const $e=T({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:r}=D(Z);return{menuProps:r,style:z(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:z(()=>{const{maxIconSize:t,activeIconSize:i,iconMarginRight:c}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${i}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:t,renderLabel:i,renderExtra:c,expandIcon:l}}=this,d=t?t(r.rawNode):G(this.icon);return v("div",{onClick:a=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,a)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:i?i(r.rawNode):G(this.title),this.extra||c?v("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(r.rawNode):G(this.extra)):null),this.showArrow?v(Pe,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(r.rawNode):v(So,null)}):null)}}),Q=8;function ge(e){const r=D(Z),{props:t,mergedCollapsedRef:i}=r,c=D(pe,null),l=D(fe,null),d=z(()=>t.mode==="horizontal"),a=z(()=>d.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=z(()=>{var f;return Math.max((f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize,t.iconSize)}),_=z(()=>{var f;return!d.value&&e.root&&i.value&&(f=t.collapsedIconSize)!==null&&f!==void 0?f:t.iconSize}),E=z(()=>{if(d.value)return;const{collapsedWidth:f,indent:k,rootIndent:H}=t,{root:A,isGroup:B}=e,L=H===void 0?k:H;return A?i.value?f/2-s.value/2:L:l&&typeof l.paddingLeftRef.value=="number"?k/2+l.paddingLeftRef.value:c&&typeof c.paddingLeftRef.value=="number"?(B?k/2:k)+c.paddingLeftRef.value:0}),N=z(()=>{const{collapsedWidth:f,indent:k,rootIndent:H}=t,{value:A}=s,{root:B}=e;return d.value||!B||!i.value?Q:(H===void 0?k:H)+A+Q-(f+A)/2});return{dropdownPlacement:a,activeIconSize:_,maxIconSize:s,paddingLeft:E,iconMarginRight:N,NMenu:r,NSubmenu:c}}const be={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Bo=T({name:"MenuDivider",setup(){const e=D(Z),{mergedClsPrefixRef:r,isHorizontalRef:t}=e;return()=>t.value?null:v("div",{class:`${r.value}-menu-divider`})}}),Me=Object.assign(Object.assign({},be),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Eo=he(Me),$o=T({name:"MenuOption",props:Me,setup(e){const r=ge(e),{NSubmenu:t,NMenu:i}=r,{props:c,mergedClsPrefixRef:l,mergedCollapsedRef:d}=i,a=t?t.mergedDisabledRef:{value:!1},s=z(()=>a.value||e.disabled);function _(N){const{onClick:f}=e;f&&f(N)}function E(N){s.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),_(N))}return{mergedClsPrefix:l,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:c,dropdownEnabled:ae(()=>e.root&&d.value&&c.mode!=="horizontal"&&!s.value),selected:ae(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:E}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:t,menuProps:{renderLabel:i,nodeProps:c}}=this,l=c==null?void 0:c(t.rawNode);return v("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),v(oo,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(t.rawNode):G(this.title),trigger:()=>v($e,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Fe=Object.assign(Object.assign({},be),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Mo=he(Fe),Fo=T({name:"MenuOptionGroup",props:Fe,setup(e){Y(pe,null);const r=ge(e);Y(fe,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:t,props:i}=D(Z);return function(){const{value:c}=t,l=r.paddingLeft.value,{nodeProps:d}=i,a=d==null?void 0:d(e.tmNode.rawNode);return v("div",{class:`${c}-menu-item-group`,role:"group"},v("div",Object.assign({},a,{class:[`${c}-menu-item-group-title`,a==null?void 0:a.class],style:[(a==null?void 0:a.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),G(e.title),e.extra?v(to,null," ",G(e.extra)):null),v("div",null,e.tmNodes.map(s=>xe(s,i))))}}});function se(e){return e.type==="divider"||e.type==="render"}function Lo(e){return e.type==="divider"}function xe(e,r){const{rawNode:t}=e,{show:i}=t;if(i===!1)return null;if(se(t))return Lo(t)?v(Bo,Object.assign({key:e.key},t.props)):null;const{labelField:c}=r,{key:l,level:d,isGroup:a}=e,s=Object.assign(Object.assign({},t),{title:t.title||t[c],extra:t.titleExtra||t.extra,key:l,internalKey:l,level:d,root:d===0,isGroup:a});return e.children?e.isGroup?v(Fo,ne(s,Mo,{tmNode:e,tmNodes:e.children,key:l})):v(de,ne(s,Ko,{key:l,rawNodes:t[r.childrenField],tmNodes:e.children,tmNode:e})):v($o,ne(s,Eo,{key:l,tmNode:e}))}const Le=Object.assign(Object.assign({},be),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Ko=he(Le),de=T({name:"Submenu",props:Le,setup(e){const r=ge(e),{NMenu:t,NSubmenu:i}=r,{props:c,mergedCollapsedRef:l,mergedThemeRef:d}=t,a=z(()=>{const{disabled:f}=e;return i!=null&&i.mergedDisabledRef.value||c.disabled?!0:f}),s=F(!1);Y(pe,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:a}),Y(fe,null);function _(){const{onClick:f}=e;f&&f()}function E(){a.value||(l.value||t.toggleExpand(e.internalKey),_())}function N(f){s.value=f}return{menuProps:c,mergedTheme:d,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:s,paddingLeft:r.paddingLeft,mergedDisabled:a,mergedValue:t.mergedValueRef,childActive:ae(()=>{var f;return(f=e.virtualChildActive)!==null&&f!==void 0?f:t.activePathRef.value.includes(e.internalKey)}),collapsed:z(()=>c.mode==="horizontal"?!1:l.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:z(()=>!a.value&&(c.mode==="horizontal"||l.value)),handlePopoverShowChange:N,handleClick:E}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:t,renderLabel:i}}=this,c=()=>{const{isHorizontal:d,paddingLeft:a,collapsed:s,mergedDisabled:_,maxIconSize:E,activeIconSize:N,title:f,childActive:k,icon:H,handleClick:A,menuProps:{nodeProps:B},dropdownShow:L,iconMarginRight:W,tmNode:j,mergedClsPrefix:$,isEllipsisPlaceholder:R,extra:x}=this,C=B==null?void 0:B(j.rawNode);return v("div",Object.assign({},C,{class:[`${$}-menu-item`,C==null?void 0:C.class],role:"menuitem"}),v($e,{tmNode:j,paddingLeft:a,collapsed:s,disabled:_,iconMarginRight:W,maxIconSize:E,activeIconSize:N,title:f,extra:x,showArrow:!d,childActive:k,clsPrefix:$,icon:H,hover:L,onClick:A,isEllipsisPlaceholder:R}))},l=()=>v(ro,null,{default:()=>{const{tmNodes:d,collapsed:a}=this;return a?null:v("div",{class:`${r}-submenu-children`,role:"menu"},d.map(s=>xe(s,this.menuProps)))}});return this.root?v(Ee,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:i}),{default:()=>v("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},c(),this.isHorizontal?null:l())}):v("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},c(),l())}}),jo=Object.assign(Object.assign({},q.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Ke=T({name:"Menu",inheritAttrs:!1,props:jo,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=ue(e),i=q("Menu","-menu",Oo,co,e,r),c=D(Be,null),l=z(()=>{var m;const{collapsed:g}=e;if(g!==void 0)return g;if(c){const{collapseModeRef:o,collapsedRef:p}=c;if(o.value==="width")return(m=p.value)!==null&&m!==void 0?m:!1}return!1}),d=z(()=>{const{keyField:m,childrenField:g,disabledField:o}=e;return ie(e.items||e.options,{getIgnored(p){return se(p)},getChildren(p){return p[g]},getDisabled(p){return p[o]},getKey(p){var I;return(I=p[m])!==null&&I!==void 0?I:p.name}})}),a=z(()=>new Set(d.value.treeNodes.map(m=>m.key))),{watchProps:s}=e,_=F(null);s!=null&&s.includes("defaultValue")?ye(()=>{_.value=e.defaultValue}):_.value=e.defaultValue;const E=ee(e,"value"),N=le(E,_),f=F([]),k=()=>{f.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(N.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?ye(k):k();const H=no(e,["expandedNames","expandedKeys"]),A=le(H,f),B=z(()=>d.value.treeNodes),L=z(()=>d.value.getPath(N.value).keyPath);Y(Z,{props:e,mergedCollapsedRef:l,mergedThemeRef:i,mergedValueRef:N,mergedExpandedKeysRef:A,activePathRef:L,mergedClsPrefixRef:r,isHorizontalRef:z(()=>e.mode==="horizontal"),invertedRef:ee(e,"inverted"),doSelect:W,toggleExpand:$});function W(m,g){const{"onUpdate:value":o,onUpdateValue:p,onSelect:I}=e;p&&M(p,m,g),o&&M(o,m,g),I&&M(I,m,g),_.value=m}function j(m){const{"onUpdate:expandedKeys":g,onUpdateExpandedKeys:o,onExpandedNamesChange:p,onOpenNamesChange:I}=e;g&&M(g,m),o&&M(o,m),p&&M(p,m),I&&M(I,m),f.value=m}function $(m){const g=Array.from(A.value),o=g.findIndex(p=>p===m);if(~o)g.splice(o,1);else{if(e.accordion&&a.value.has(m)){const p=g.findIndex(I=>a.value.has(I));p>-1&&g.splice(p,1)}g.push(m)}j(g)}const R=m=>{const g=d.value.getPath(m??N.value,{includeSelf:!1}).keyPath;if(!g.length)return;const o=Array.from(A.value),p=new Set([...o,...g]);e.accordion&&a.value.forEach(I=>{p.has(I)&&!g.includes(I)&&p.delete(I)}),j(Array.from(p))},x=z(()=>{const{inverted:m}=e,{common:{cubicBezierEaseInOut:g},self:o}=i.value,{borderRadius:p,borderColorHorizontal:I,fontSize:We,itemHeight:Xe,dividerColor:Ze}=o,n={"--n-divider-color":Ze,"--n-bezier":g,"--n-font-size":We,"--n-border-color-horizontal":I,"--n-border-radius":p,"--n-item-height":Xe};return m?(n["--n-group-text-color"]=o.groupTextColorInverted,n["--n-color"]=o.colorInverted,n["--n-item-text-color"]=o.itemTextColorInverted,n["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,n["--n-item-text-color-active"]=o.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=o.itemIconColorInverted,n["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=o.arrowColorInverted,n["--n-arrow-color-hover"]=o.arrowColorHoverInverted,n["--n-arrow-color-active"]=o.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=o.itemColorHoverInverted,n["--n-item-color-active"]=o.itemColorActiveInverted,n["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=o.groupTextColor,n["--n-color"]=o.color,n["--n-item-text-color"]=o.itemTextColor,n["--n-item-text-color-hover"]=o.itemTextColorHover,n["--n-item-text-color-active"]=o.itemTextColorActive,n["--n-item-text-color-child-active"]=o.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,n["--n-item-icon-color"]=o.itemIconColor,n["--n-item-icon-color-hover"]=o.itemIconColorHover,n["--n-item-icon-color-active"]=o.itemIconColorActive,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=o.arrowColor,n["--n-arrow-color-hover"]=o.arrowColorHover,n["--n-arrow-color-active"]=o.arrowColorActive,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,n["--n-arrow-color-child-active"]=o.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,n["--n-item-color-hover"]=o.itemColorHover,n["--n-item-color-active"]=o.itemColorActive,n["--n-item-color-active-hover"]=o.itemColorActiveHover,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),n}),C=t?ve("menu",z(()=>e.inverted?"a":"b"),x,e):void 0,V=io(),K=F(null),te=F(null);let O=!0;const Ce=()=>{var m;O?O=!1:(m=K.value)===null||m===void 0||m.sync({showAllItemsBeforeCalculate:!0})};function je(){return document.getElementById(V)}const J=F(-1);function Ve(m){J.value=e.options.length-m}function De(m){m||(J.value=-1)}const Ue=z(()=>{const m=J.value;return{children:m===-1?[]:e.options.slice(m)}}),Ge=z(()=>{const{childrenField:m,disabledField:g,keyField:o}=e;return ie([Ue.value],{getIgnored(p){return se(p)},getChildren(p){return p[m]},getDisabled(p){return p[g]},getKey(p){var I;return(I=p[o])!==null&&I!==void 0?I:p.name}})}),qe=z(()=>ie([{}]).treeNodes[0]);function Ye(){var m;if(J.value===-1)return v(de,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:qe.value,domId:V,isEllipsisPlaceholder:!0});const g=Ge.value.treeNodes[0],o=L.value,p=!!(!((m=g.children)===null||m===void 0)&&m.some(I=>o.includes(I.key)));return v(de,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:p,tmNode:g,domId:V,rawNodes:g.rawNode.children||[],tmNodes:g.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:r,controlledExpandedKeys:H,uncontrolledExpanededKeys:f,mergedExpandedKeys:A,uncontrolledValue:_,mergedValue:N,activePath:L,tmNodes:B,mergedTheme:i,mergedCollapsed:l,cssVars:t?void 0:x,themeClass:C==null?void 0:C.themeClass,overflowRef:K,counterRef:te,updateCounter:()=>{},onResize:Ce,onUpdateOverflow:De,onUpdateCount:Ve,renderCounter:Ye,getCounter:je,onRender:C==null?void 0:C.onRender,showOption:R,deriveResponsiveState:Ce}},render(){const{mergedClsPrefix:e,mode:r,themeClass:t,onRender:i}=this;i==null||i();const c=()=>this.tmNodes.map(s=>xe(s,this.$props)),d=r==="horizontal"&&this.responsive,a=()=>v("div",ao(this.$attrs,{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${r}`,d&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),d?v(yo,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:c,counter:this.renderCounter}):c());return d?v(lo,{onResize:this.onResize},{default:a}):a()}}),Vo=T({__name:"SidebarComponent",setup(e){const r=_e(),{menu:t}=Ae(r),i=so(),c=F({menu:{selectedKey:i.path}});return uo(()=>i.path,l=>{const d=l==="/dashboard/"?vo.home:l;c.value.menu.selectedKey=d},{immediate:!0}),(l,d)=>(oe(),Te(b(Ho),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,"show-trigger":""},{default:P(()=>[S(b(Ke),{value:b(c).menu.selectedKey,"onUpdate:value":d[0]||(d[0]=a=>b(c).menu.selectedKey=a),"collapsed-width":64,"collapsed-icon-size":22,options:b(t)},null,8,["value","options"])]),_:1}))}}),Do=T({__name:"MenubarComponent",setup(e){const r=_e(),{menu:t}=Ae(r),i=F({data:{menuKey:""},status:{dropdown:!1,drawer:!1}}),c=[{label:"Theme",key:"Theme"},{label:"登出",key:"登出"}],l=d=>{switch(d.key){case"Theme":return v(Ie);default:return d.label}};return(d,a)=>(oe(),ke("div",null,[S(b(Ee),{show:b(i).status.dropdown,options:c,placement:"bottom-start","render-label":l},{default:P(()=>[S(b(ze),{class:"hidden md:block",size:30,color:"gray",cursor:"pointer",onClick:a[0]||(a[0]=s=>b(i).status.dropdown=!b(i).status.dropdown)},{default:P(()=>[S(b(we))]),_:1})]),_:1},8,["show"]),S(b(ze),{size:30,color:"gray",cursor:"pointer",class:"block md:hidden",onClick:a[1]||(a[1]=s=>b(i).status.drawer=!0)},{default:P(()=>[S(b(we))]),_:1}),S(b(wo),{show:b(i).status.drawer,"onUpdate:show":a[3]||(a[3]=s=>b(i).status.drawer=s),placement:"right","default-width":"180"},{default:P(()=>[S(b(zo),{title:"目錄","body-content-style":"padding: 0;"},{default:P(()=>[S(b(ce),{justify:"center",class:"my-2"},{default:P(()=>[S(Ie)]),_:1}),S(b(Ke),{value:b(i).data.menuKey,"onUpdate:value":a[2]||(a[2]=s=>b(i).data.menuKey=s),options:b(t),"on-update:value":()=>b(i).status.drawer=!1},null,8,["value","options","on-update:value"])]),_:1})]),_:1},8,["show"])]))}}),Zo=T({__name:"default",setup(e){return(r,t)=>{const i=xo,c=Vo,l=mo("router-view");return oe(),ke("div",null,[S(b(Se),{"content-style":"padding: 24px;"},{default:P(()=>[S(b(Po),null,{default:P(()=>[S(b(ce),{justify:"space-between",align:"center"},{default:P(()=>[S(b(ho),{width:"150"},{default:P(()=>t[0]||(t[0]=[po(" LOGO ")])),_:1}),S(b(Io),{justify:"space-between",align:"center"},{default:P(()=>[S(i),S(Do)]),_:1})]),_:1})]),_:1})]),_:1}),S(b(Se),{"has-sider":""},{default:P(()=>[S(c,{class:"md:block hidden"}),S(b(ce),{vertical:"",class:"w-full m-4"},{default:P(()=>[S(l,{style:{height:"calc(100dvh - 114px)"}},{default:P(({Component:d})=>[S(fo,{name:"pagefade",mode:"out-in"},{default:P(()=>[(oe(),Te(go(d)))]),_:2},1024)]),_:1})]),_:1})]),_:1})])}}});export{Zo as default};
