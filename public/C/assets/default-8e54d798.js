import{d as T,h as d,c as m,a as I,u as q,b as ue,e as w,f as ve,g as s,i as z,N as Te,j as D,r as F,k as ae,t as oe,l as io,p as W,m as lo,n as ne,o as M,q as me,s as X,v as ao,w as G,x as he,y as ce,z as co,F as so,A as ie,B as uo,C as Ie,D as vo,E as mo,V as ho,G as po,H as fo,I as ke,J as He,K as go,L as J,M as pe,O as P,P as S,Q as f,R as fe,S as $e,T as ge,U as Be,W as Ee,X as Fe,Y as Oe,Z as Me,_ as Se,$ as te,a0 as bo,a1 as xo,a2 as Co,a3 as yo}from"./index-1019b754.js";import{p as Le,l as Ke,a as je,b as zo,M as Re,_ as Ne,N as Pe,c as wo}from"./ThemeSwichComponent.vue_vue_type_script_setup_true_lang-4e7f5fc5.js";import{C as Io,N as Ve,c as le}from"./Dropdown-f7a2aeed.js";import{V as So}from"./index-9af81092.js";import{N as Ro,a as No}from"./DrawerContent-2abddfbb.js";import{N as Po}from"./p-6201a2fe.js";import{N as _o}from"./Flex-96acb230.js";const Ao=T({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),To=m("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[I("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),I("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),ko={position:Le,inverted:Boolean,bordered:{type:Boolean,default:!1}},Ho=T({name:"LayoutHeader",props:Object.assign(Object.assign({},q.props),ko),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=ue(e),a=q("Layout","-layout-header",To,Ke,e,r),i=w(()=>{const{common:{cubicBezierEaseInOut:h},self:u}=a.value,c={"--n-bezier":h};return e.inverted?(c["--n-color"]=u.headerColorInverted,c["--n-text-color"]=u.textColorInverted,c["--n-border-color"]=u.headerBorderColorInverted):(c["--n-color"]=u.headerColor,c["--n-text-color"]=u.textColor,c["--n-border-color"]=u.headerBorderColor),c}),l=t?ve("layout-header",w(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:r,cssVars:t?void 0:i,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),$o=m("layout-sider",`
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
`,[I("bordered",[s("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),s("left-placement",[I("bordered",[s("border",`
 right: 0;
 `)])]),I("right-placement",`
 justify-content: flex-start;
 `,[I("bordered",[s("border",`
 left: 0;
 `)]),I("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[z("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[z("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),I("collapsed",[m("layout-toggle-bar",[z("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
 transform: rotate(0);
 `)])]),m("layout-toggle-button",`
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
 `,[m("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[s("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),s("bottom",`
 position: absolute;
 top: 34px;
 `),z("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),z("&:hover",[s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),s("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),m("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),I("show-content",[m("layout-sider-scroll-container",{opacity:1})]),I("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Bo=T({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},d("div",{class:`${e}-layout-toggle-bar__top`}),d("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Eo=T({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},d(Te,{clsPrefix:e},{default:()=>d(Io,null)}))}}),Fo={position:Le,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Oo=T({name:"LayoutSider",props:Object.assign(Object.assign({},q.props),Fo),setup(e){const r=D(zo),t=F(null),a=F(null),i=F(e.defaultCollapsed),l=ae(oe(e,"collapsed"),i),h=w(()=>ne(l.value?e.collapsedWidth:e.width)),u=w(()=>e.collapseMode!=="transform"?{}:{minWidth:ne(e.width)}),c=w(()=>r?r.siderPlacement:"left");function x(N,C){if(e.nativeScrollbar){const{value:y}=t;y&&(C===void 0?y.scrollTo(N):y.scrollTo(N,C))}else{const{value:y}=a;y&&y.scrollTo(N,C)}}function _(){const{"onUpdate:collapsed":N,onUpdateCollapsed:C,onExpand:y,onCollapse:V}=e,{value:K}=l;C&&M(C,!K),N&&M(N,!K),i.value=!K,K?y&&M(y):V&&M(V)}let A=0,g=0;const H=N=>{var C;const y=N.target;A=y.scrollLeft,g=y.scrollTop,(C=e.onScroll)===null||C===void 0||C.call(e,N)};io(()=>{if(e.nativeScrollbar){const N=t.value;N&&(N.scrollTop=g,N.scrollLeft=A)}}),W(je,{collapsedRef:l,collapseModeRef:oe(e,"collapseMode")});const{mergedClsPrefixRef:$,inlineThemeDisabled:k}=ue(e),E=q("Layout","-layout-sider",$o,Ke,e,$);function L(N){var C,y;N.propertyName==="max-width"&&(l.value?(C=e.onAfterLeave)===null||C===void 0||C.call(e):(y=e.onAfterEnter)===null||y===void 0||y.call(e))}const Y={scrollTo:x},j=w(()=>{const{common:{cubicBezierEaseInOut:N},self:C}=E.value,{siderToggleButtonColor:y,siderToggleButtonBorder:V,siderToggleBarColor:K,siderToggleBarColorHover:re}=C,B={"--n-bezier":N,"--n-toggle-button-color":y,"--n-toggle-button-border":V,"--n-toggle-bar-color":K,"--n-toggle-bar-color-hover":re};return e.inverted?(B["--n-color"]=C.siderColorInverted,B["--n-text-color"]=C.textColorInverted,B["--n-border-color"]=C.siderBorderColorInverted,B["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColorInverted,B.__invertScrollbar=C.__invertScrollbar):(B["--n-color"]=C.siderColor,B["--n-text-color"]=C.textColor,B["--n-border-color"]=C.siderBorderColor,B["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColor),B}),O=k?ve("layout-sider",w(()=>e.inverted?"a":"b"),j,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:a,mergedClsPrefix:$,mergedTheme:E,styleMaxWidth:h,mergedCollapsed:l,scrollContainerStyle:u,siderPlacement:c,handleNativeElScroll:H,handleTransitionend:L,handleTriggerClick:_,inlineThemeDisabled:k,cssVars:j,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender},Y)},render(){var e;const{mergedClsPrefix:r,mergedCollapsed:t,showTrigger:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("aside",{class:[`${r}-layout-sider`,this.themeClass,`${r}-layout-sider--${this.position}-positioned`,`${r}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${r}-layout-sider--bordered`,t&&`${r}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${r}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ne(this.width)}]},this.nativeScrollbar?d("div",{class:[`${r}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):d(lo,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),a?a==="bar"?d(Bo,{clsPrefix:r,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):d(Eo,{clsPrefix:r,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?d("div",{class:`${r}-layout-sider__border`}):null)}}),Z=me("n-menu"),be=me("n-submenu"),xe=me("n-menu-item-group"),_e=[z("&::before","background-color: var(--n-item-color-hover);"),s("arrow",`
 color: var(--n-arrow-color-hover);
 `),s("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[z("a",`
 color: var(--n-item-text-color-hover);
 `),s("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ae=[s("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[z("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Mo=z([m("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[I("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[m("submenu","margin: 0;"),m("menu-item","margin: 0;"),m("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[z("&::before","display: none;"),I("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[I("selected",[s("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[z("a","color: var(--n-item-text-color-active-horizontal);"),s("extra","color: var(--n-item-text-color-active-horizontal);")])]),I("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[z("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),s("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),X("disabled",[X("selected, child-active",[z("&:focus-within",Ae)]),I("selected",[U(null,[s("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[z("a","color: var(--n-item-text-color-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),I("child-active",[U(null,[s("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[z("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),U("border-bottom: 2px solid var(--n-border-color-horizontal);",Ae)]),m("menu-item-content-header",[z("a","color: var(--n-item-text-color-horizontal);")])])]),X("responsive",[m("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),I("collapsed",[m("menu-item-content",[I("selected",[z("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),m("menu-item-content-header","opacity: 0;"),s("arrow","opacity: 0;"),s("icon","color: var(--n-item-icon-color-collapsed);")])]),m("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),m("menu-item-content",`
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
 `,[z("> *","z-index: 1;"),z("&::before",`
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
 `),I("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),I("collapsed",[s("arrow","transform: rotate(0);")]),I("selected",[z("&::before","background-color: var(--n-item-color-active);"),s("arrow","color: var(--n-arrow-color-active);"),s("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[z("a","color: var(--n-item-text-color-active);"),s("extra","color: var(--n-item-text-color-active);")])]),I("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[z("a",`
 color: var(--n-item-text-color-child-active);
 `),s("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),s("arrow",`
 color: var(--n-arrow-color-child-active);
 `),s("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),X("disabled",[X("selected, child-active",[z("&:focus-within",_e)]),I("selected",[U(null,[s("arrow","color: var(--n-arrow-color-active-hover);"),s("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[z("a","color: var(--n-item-text-color-active-hover);"),s("extra","color: var(--n-item-text-color-active-hover);")])])]),I("child-active",[U(null,[s("arrow","color: var(--n-arrow-color-child-active-hover);"),s("icon","color: var(--n-item-icon-color-child-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[z("a","color: var(--n-item-text-color-child-active-hover);"),s("extra","color: var(--n-item-text-color-child-active-hover);")])])]),I("selected",[U(null,[z("&::before","background-color: var(--n-item-color-active-hover);")])]),U(null,_e)]),s("icon",`
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
 `),s("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),m("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[z("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[z("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),s("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),m("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[m("menu-item-content",`
 height: var(--n-item-height);
 `),m("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ao({duration:".2s"})])]),m("menu-item-group",[m("menu-item-group-title",`
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
 `)])]),m("menu-tooltip",[z("a",`
 color: inherit;
 text-decoration: none;
 `)]),m("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function U(e,r){return[I("hover",e,r),z("&:hover",e,r)]}const De=T({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:r}=D(Z);return{menuProps:r,style:w(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:w(()=>{const{maxIconSize:t,activeIconSize:a,iconMarginRight:i}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${a}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:t,renderLabel:a,renderExtra:i,expandIcon:l}}=this,h=t?t(r.rawNode):G(this.icon);return d("div",{onClick:u=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},h&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[h]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:a?a(r.rawNode):G(this.title),this.extra||i?d("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(r.rawNode):G(this.extra)):null),this.showArrow?d(Te,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(r.rawNode):d(Ao,null)}):null)}}),ee=8;function Ce(e){const r=D(Z),{props:t,mergedCollapsedRef:a}=r,i=D(be,null),l=D(xe,null),h=w(()=>t.mode==="horizontal"),u=w(()=>h.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=w(()=>{var g;return Math.max((g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize,t.iconSize)}),x=w(()=>{var g;return!h.value&&e.root&&a.value&&(g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize}),_=w(()=>{if(h.value)return;const{collapsedWidth:g,indent:H,rootIndent:$}=t,{root:k,isGroup:E}=e,L=$===void 0?H:$;return k?a.value?g/2-c.value/2:L:l&&typeof l.paddingLeftRef.value=="number"?H/2+l.paddingLeftRef.value:i&&typeof i.paddingLeftRef.value=="number"?(E?H/2:H)+i.paddingLeftRef.value:0}),A=w(()=>{const{collapsedWidth:g,indent:H,rootIndent:$}=t,{value:k}=c,{root:E}=e;return h.value||!E||!a.value?ee:($===void 0?H:$)+k+ee-(g+k)/2});return{dropdownPlacement:u,activeIconSize:x,maxIconSize:c,paddingLeft:_,iconMarginRight:A,NMenu:r,NSubmenu:i}}const ye={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Lo=T({name:"MenuDivider",setup(){const e=D(Z),{mergedClsPrefixRef:r,isHorizontalRef:t}=e;return()=>t.value?null:d("div",{class:`${r.value}-menu-divider`})}}),Ue=Object.assign(Object.assign({},ye),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Ko=he(Ue),jo=T({name:"MenuOption",props:Ue,setup(e){const r=Ce(e),{NSubmenu:t,NMenu:a}=r,{props:i,mergedClsPrefixRef:l,mergedCollapsedRef:h}=a,u=t?t.mergedDisabledRef:{value:!1},c=w(()=>u.value||e.disabled);function x(A){const{onClick:g}=e;g&&g(A)}function _(A){c.value||(a.doSelect(e.internalKey,e.tmNode.rawNode),x(A))}return{mergedClsPrefix:l,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:a.mergedThemeRef,menuProps:i,dropdownEnabled:ce(()=>e.root&&h.value&&i.mode!=="horizontal"&&!c.value),selected:ce(()=>a.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:_}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:t,menuProps:{renderLabel:a,nodeProps:i}}=this,l=i==null?void 0:i(t.rawNode);return d("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),d(co,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>a?a(t.rawNode):G(this.title),trigger:()=>d(De,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Ge=Object.assign(Object.assign({},ye),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Vo=he(Ge),Do=T({name:"MenuOptionGroup",props:Ge,setup(e){W(be,null);const r=Ce(e);W(xe,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:t,props:a}=D(Z);return function(){const{value:i}=t,l=r.paddingLeft.value,{nodeProps:h}=a,u=h==null?void 0:h(e.tmNode.rawNode);return d("div",{class:`${i}-menu-item-group`,role:"group"},d("div",Object.assign({},u,{class:[`${i}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),G(e.title),e.extra?d(so,null," ",G(e.extra)):null),d("div",null,e.tmNodes.map(c=>ze(c,a))))}}});function se(e){return e.type==="divider"||e.type==="render"}function Uo(e){return e.type==="divider"}function ze(e,r){const{rawNode:t}=e,{show:a}=t;if(a===!1)return null;if(se(t))return Uo(t)?d(Lo,Object.assign({key:e.key},t.props)):null;const{labelField:i}=r,{key:l,level:h,isGroup:u}=e,c=Object.assign(Object.assign({},t),{title:t.title||t[i],extra:t.titleExtra||t.extra,key:l,internalKey:l,level:h,root:h===0,isGroup:u});return e.children?e.isGroup?d(Do,ie(c,Vo,{tmNode:e,tmNodes:e.children,key:l})):d(de,ie(c,Go,{key:l,rawNodes:t[r.childrenField],tmNodes:e.children,tmNode:e})):d(jo,ie(c,Ko,{key:l,tmNode:e}))}const qe=Object.assign(Object.assign({},ye),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Go=he(qe),de=T({name:"Submenu",props:qe,setup(e){const r=Ce(e),{NMenu:t,NSubmenu:a}=r,{props:i,mergedCollapsedRef:l,mergedThemeRef:h}=t,u=w(()=>{const{disabled:g}=e;return a!=null&&a.mergedDisabledRef.value||i.disabled?!0:g}),c=F(!1);W(be,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:u}),W(xe,null);function x(){const{onClick:g}=e;g&&g()}function _(){u.value||(l.value||t.toggleExpand(e.internalKey),x())}function A(g){c.value=g}return{menuProps:i,mergedTheme:h,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:c,paddingLeft:r.paddingLeft,mergedDisabled:u,mergedValue:t.mergedValueRef,childActive:ce(()=>{var g;return(g=e.virtualChildActive)!==null&&g!==void 0?g:t.activePathRef.value.includes(e.internalKey)}),collapsed:w(()=>i.mode==="horizontal"?!1:l.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:w(()=>!u.value&&(i.mode==="horizontal"||l.value)),handlePopoverShowChange:A,handleClick:_}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:t,renderLabel:a}}=this,i=()=>{const{isHorizontal:h,paddingLeft:u,collapsed:c,mergedDisabled:x,maxIconSize:_,activeIconSize:A,title:g,childActive:H,icon:$,handleClick:k,menuProps:{nodeProps:E},dropdownShow:L,iconMarginRight:Y,tmNode:j,mergedClsPrefix:O,isEllipsisPlaceholder:N,extra:C}=this,y=E==null?void 0:E(j.rawNode);return d("div",Object.assign({},y,{class:[`${O}-menu-item`,y==null?void 0:y.class],role:"menuitem"}),d(De,{tmNode:j,paddingLeft:u,collapsed:c,disabled:x,iconMarginRight:Y,maxIconSize:_,activeIconSize:A,title:g,extra:C,showArrow:!h,childActive:H,clsPrefix:O,icon:$,hover:L,onClick:k,isEllipsisPlaceholder:N}))},l=()=>d(uo,null,{default:()=>{const{tmNodes:h,collapsed:u}=this;return u?null:d("div",{class:`${r}-submenu-children`,role:"menu"},h.map(c=>ze(c,this.menuProps)))}});return this.root?d(Ve,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:a}),{default:()=>d("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},i(),this.isHorizontal?null:l())}):d("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},i(),l())}}),qo=Object.assign(Object.assign({},q.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),We=T({name:"Menu",inheritAttrs:!1,props:qo,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=ue(e),a=q("Menu","-menu",Mo,fo,e,r),i=D(je,null),l=w(()=>{var v;const{collapsed:b}=e;if(b!==void 0)return b;if(i){const{collapseModeRef:o,collapsedRef:p}=i;if(o.value==="width")return(v=p.value)!==null&&v!==void 0?v:!1}return!1}),h=w(()=>{const{keyField:v,childrenField:b,disabledField:o}=e;return le(e.items||e.options,{getIgnored(p){return se(p)},getChildren(p){return p[b]},getDisabled(p){return p[o]},getKey(p){var R;return(R=p[v])!==null&&R!==void 0?R:p.name}})}),u=w(()=>new Set(h.value.treeNodes.map(v=>v.key))),{watchProps:c}=e,x=F(null);c!=null&&c.includes("defaultValue")?Ie(()=>{x.value=e.defaultValue}):x.value=e.defaultValue;const _=oe(e,"value"),A=ae(_,x),g=F([]),H=()=>{g.value=e.defaultExpandAll?h.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||h.value.getPath(A.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?Ie(H):H();const $=vo(e,["expandedNames","expandedKeys"]),k=ae($,g),E=w(()=>h.value.treeNodes),L=w(()=>h.value.getPath(A.value).keyPath);W(Z,{props:e,mergedCollapsedRef:l,mergedThemeRef:a,mergedValueRef:A,mergedExpandedKeysRef:k,activePathRef:L,mergedClsPrefixRef:r,isHorizontalRef:w(()=>e.mode==="horizontal"),invertedRef:oe(e,"inverted"),doSelect:Y,toggleExpand:O});function Y(v,b){const{"onUpdate:value":o,onUpdateValue:p,onSelect:R}=e;p&&M(p,v,b),o&&M(o,v,b),R&&M(R,v,b),x.value=v}function j(v){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:o,onExpandedNamesChange:p,onOpenNamesChange:R}=e;b&&M(b,v),o&&M(o,v),p&&M(p,v),R&&M(R,v),g.value=v}function O(v){const b=Array.from(k.value),o=b.findIndex(p=>p===v);if(~o)b.splice(o,1);else{if(e.accordion&&u.value.has(v)){const p=b.findIndex(R=>u.value.has(R));p>-1&&b.splice(p,1)}b.push(v)}j(b)}const N=v=>{const b=h.value.getPath(v??A.value,{includeSelf:!1}).keyPath;if(!b.length)return;const o=Array.from(k.value),p=new Set([...o,...b]);e.accordion&&u.value.forEach(R=>{p.has(R)&&!b.includes(R)&&p.delete(R)}),j(Array.from(p))},C=w(()=>{const{inverted:v}=e,{common:{cubicBezierEaseInOut:b},self:o}=a.value,{borderRadius:p,borderColorHorizontal:R,fontSize:to,itemHeight:ro,dividerColor:no}=o,n={"--n-divider-color":no,"--n-bezier":b,"--n-font-size":to,"--n-border-color-horizontal":R,"--n-border-radius":p,"--n-item-height":ro};return v?(n["--n-group-text-color"]=o.groupTextColorInverted,n["--n-color"]=o.colorInverted,n["--n-item-text-color"]=o.itemTextColorInverted,n["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,n["--n-item-text-color-active"]=o.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=o.itemIconColorInverted,n["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=o.arrowColorInverted,n["--n-arrow-color-hover"]=o.arrowColorHoverInverted,n["--n-arrow-color-active"]=o.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=o.itemColorHoverInverted,n["--n-item-color-active"]=o.itemColorActiveInverted,n["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=o.groupTextColor,n["--n-color"]=o.color,n["--n-item-text-color"]=o.itemTextColor,n["--n-item-text-color-hover"]=o.itemTextColorHover,n["--n-item-text-color-active"]=o.itemTextColorActive,n["--n-item-text-color-child-active"]=o.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,n["--n-item-icon-color"]=o.itemIconColor,n["--n-item-icon-color-hover"]=o.itemIconColorHover,n["--n-item-icon-color-active"]=o.itemIconColorActive,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=o.arrowColor,n["--n-arrow-color-hover"]=o.arrowColorHover,n["--n-arrow-color-active"]=o.arrowColorActive,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,n["--n-arrow-color-child-active"]=o.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,n["--n-item-color-hover"]=o.itemColorHover,n["--n-item-color-active"]=o.itemColorActive,n["--n-item-color-active-hover"]=o.itemColorActiveHover,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),n}),y=t?ve("menu",w(()=>e.inverted?"a":"b"),C,e):void 0,V=mo(),K=F(null),re=F(null);let B=!0;const we=()=>{var v;B?B=!1:(v=K.value)===null||v===void 0||v.sync({showAllItemsBeforeCalculate:!0})};function Ye(){return document.getElementById(V)}const Q=F(-1);function Xe(v){Q.value=e.options.length-v}function Je(v){v||(Q.value=-1)}const Ze=w(()=>{const v=Q.value;return{children:v===-1?[]:e.options.slice(v)}}),Qe=w(()=>{const{childrenField:v,disabledField:b,keyField:o}=e;return le([Ze.value],{getIgnored(p){return se(p)},getChildren(p){return p[v]},getDisabled(p){return p[b]},getKey(p){var R;return(R=p[o])!==null&&R!==void 0?R:p.name}})}),eo=w(()=>le([{}]).treeNodes[0]);function oo(){var v;if(Q.value===-1)return d(de,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:eo.value,domId:V,isEllipsisPlaceholder:!0});const b=Qe.value.treeNodes[0],o=L.value,p=!!(!((v=b.children)===null||v===void 0)&&v.some(R=>o.includes(R.key)));return d(de,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:p,tmNode:b,domId:V,rawNodes:b.rawNode.children||[],tmNodes:b.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:r,controlledExpandedKeys:$,uncontrolledExpanededKeys:g,mergedExpandedKeys:k,uncontrolledValue:x,mergedValue:A,activePath:L,tmNodes:E,mergedTheme:a,mergedCollapsed:l,cssVars:t?void 0:C,themeClass:y==null?void 0:y.themeClass,overflowRef:K,counterRef:re,updateCounter:()=>{},onResize:we,onUpdateOverflow:Je,onUpdateCount:Xe,renderCounter:oo,getCounter:Ye,onRender:y==null?void 0:y.onRender,showOption:N,deriveResponsiveState:we}},render(){const{mergedClsPrefix:e,mode:r,themeClass:t,onRender:a}=this;a==null||a();const i=()=>this.tmNodes.map(c=>ze(c,this.$props)),h=r==="horizontal"&&this.responsive,u=()=>d("div",po(this.$attrs,{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${r}`,h&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),h?d(So,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:i,counter:this.renderCounter}):i());return h?d(ho,{onResize:this.onResize},{default:u}):u()}}),Wo=T({__name:"SidebarComponent",setup(e){const r=ke(),{menu:t}=He(r),a=go(),i=F({menu:{selectedKey:a.path}});return(l,h)=>(J(),pe(f(Oo),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,"show-trigger":""},{default:P(()=>[S(f(We),{value:f(i).menu.selectedKey,"onUpdate:value":h[0]||(h[0]=u=>f(i).menu.selectedKey=u),"collapsed-width":64,"collapsed-icon-size":22,options:f(t)},null,8,["value","options"])]),_:1}))}}),Yo=T({__name:"LogoutBtnForWebComponent",setup(e){const r=fe(),{mutate:t}=$e({mutationFn:()=>Ee.logout.api(),onSuccess:()=>{Fe.clearToken(),r.push(Oe.login)}});return(a,i)=>(J(),pe(f(Be),{onClick:i[0]||(i[0]=l=>f(t)())},{default:P(()=>i[1]||(i[1]=[ge(" 登出 ")])),_:1}))}}),Xo=T({__name:"MenubarComponent",setup(e){const r=ke(),{menu:t}=He(r),a=fe(),i=F({data:{menuKey:""},status:{dropdown:!1,drawer:!1}}),l=[{label:"Theme",key:"Theme"},{label:"Logout",key:"Logout"}],h=c=>{switch(c.key){case"Theme":return d(Ne);case"Logout":return d(Yo);default:return c.label}},{mutate:u}=$e({mutationFn:()=>Ee.logout.api(),onSuccess:()=>{Fe.clearToken(),a.push(Oe.login)}});return(c,x)=>(J(),Me("div",null,[S(f(Ve),{show:f(i).status.dropdown,options:l,placement:"bottom-start","render-label":h},{default:P(()=>[S(f(Se),{class:"hidden md:block",size:30,color:"gray",cursor:"pointer",onClick:x[0]||(x[0]=_=>f(i).status.dropdown=!f(i).status.dropdown)},{default:P(()=>[S(f(Re))]),_:1})]),_:1},8,["show"]),S(f(Se),{size:30,color:"gray",cursor:"pointer",class:"block md:hidden",onClick:x[1]||(x[1]=_=>f(i).status.drawer=!0)},{default:P(()=>[S(f(Re))]),_:1}),S(f(No),{show:f(i).status.drawer,"onUpdate:show":x[4]||(x[4]=_=>f(i).status.drawer=_),placement:"right","default-width":"180"},{default:P(()=>[S(f(Ro),{title:"目錄","body-content-style":"padding: 0;"},{default:P(()=>[S(f(te),{justify:"center",class:"my-2"},{default:P(()=>[S(Ne)]),_:1}),S(f(We),{value:f(i).data.menuKey,"onUpdate:value":x[2]||(x[2]=_=>f(i).data.menuKey=_),options:f(t),"on-update:value":()=>f(i).status.drawer=!1},null,8,["value","options","on-update:value"]),S(f(te),{justify:"center",class:"my-2"},{default:P(()=>[S(f(Be),{onClick:x[3]||(x[3]=_=>f(u)())},{default:P(()=>x[5]||(x[5]=[ge(" 登出 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["show"])]))}}),nt=T({__name:"default",setup(e){const r=fe(),t=F(0),a=()=>{t.value++,t.value===5&&(r.push(yo.admin),t.value=0)};return(i,l)=>{const h=wo,u=Wo,c=bo("router-view");return J(),Me("div",null,[S(f(Pe),{"content-style":"padding: 24px;"},{default:P(()=>[S(f(Ho),null,{default:P(()=>[S(f(te),{justify:"space-between",align:"center"},{default:P(()=>[S(f(Po),{width:"150",onClick:a},{default:P(()=>l[0]||(l[0]=[ge(" 測試環境 ")])),_:1}),S(f(_o),{justify:"space-between",align:"center"},{default:P(()=>[S(h),S(Xo)]),_:1})]),_:1})]),_:1})]),_:1}),S(f(Pe),{"has-sider":""},{default:P(()=>[S(u,{class:"md:block hidden"}),S(f(te),{vertical:"",class:"w-full m-4"},{default:P(()=>[S(c,{style:{height:"calc(100dvh - 114px)"}},{default:P(({Component:x})=>[S(xo,{name:"pagefade",mode:"out-in"},{default:P(()=>[(J(),pe(Co(x)))]),_:2},1024)]),_:1})]),_:1})]),_:1})])}}});export{nt as default};
