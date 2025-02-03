import{d as T,h as d,c as m,a as I,u as q,b as ue,e as z,f as ve,g as c,i as y,N as Ae,j as D,r as M,k as ae,t as oe,l as io,p as W,m as lo,n as ne,o as O,q as me,s as X,v as ao,w as G,x as he,y as ce,z as co,F as so,A as ie,B as uo,C as we,D as vo,E as mo,V as ho,G as po,H as fo,I as Te,J as ke,K as go,L as bo,M as J,O as pe,P,Q as S,R as f,S as xo,T as He,U as $e,W as fe,X as Be,Y as Ee,Z as Fe,_ as Oe,$ as Me,a0 as Ie,a1 as te,a2 as Co,a3 as yo,a4 as zo,a5 as wo}from"./index-072a50e2.js";import{p as Le,l as Ke,a as je,b as Io,M as Se,_ as Re,N as Ne,c as So}from"./ThemeSwichComponent.vue_vue_type_script_setup_true_lang-dffebf4e.js";import{C as Ro,N as Ve,c as le}from"./Dropdown-691150e6.js";import{V as No}from"./index-4f7f0d61.js";import{N as Po,a as _o}from"./DrawerContent-c6df5a0f.js";import{N as Ao}from"./Flex-844b49f4.js";const To=T({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),ko=m("layout-header",`
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
 `)]),Ho={position:Le,inverted:Boolean,bordered:{type:Boolean,default:!1}},$o=T({name:"LayoutHeader",props:Object.assign(Object.assign({},q.props),Ho),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=ue(e),a=q("Layout","-layout-header",ko,Ke,e,r),i=z(()=>{const{common:{cubicBezierEaseInOut:u},self:h}=a.value,s={"--n-bezier":u};return e.inverted?(s["--n-color"]=h.headerColorInverted,s["--n-text-color"]=h.textColorInverted,s["--n-border-color"]=h.headerBorderColorInverted):(s["--n-color"]=h.headerColor,s["--n-text-color"]=h.textColor,s["--n-border-color"]=h.headerBorderColor),s}),l=t?ve("layout-header",z(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:r,cssVars:t?void 0:i,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Bo=m("layout-sider",`
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
`,[I("bordered",[c("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),c("left-placement",[I("bordered",[c("border",`
 right: 0;
 `)])]),I("right-placement",`
 justify-content: flex-start;
 `,[I("bordered",[c("border",`
 left: 0;
 `)]),I("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[y("&:hover",[c("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[y("&:hover",[c("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),I("collapsed",[m("layout-toggle-bar",[y("&:hover",[c("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
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
 `,[c("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),c("bottom",`
 position: absolute;
 top: 34px;
 `),y("&:hover",[c("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),c("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),y("&:hover",[c("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),c("border",`
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
 `)]),Eo=T({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},d("div",{class:`${e}-layout-toggle-bar__top`}),d("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Fo=T({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},d(Ae,{clsPrefix:e},{default:()=>d(Ro,null)}))}}),Oo={position:Le,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Mo=T({name:"LayoutSider",props:Object.assign(Object.assign({},q.props),Oo),setup(e){const r=D(Io),t=M(null),a=M(null),i=M(e.defaultCollapsed),l=ae(oe(e,"collapsed"),i),u=z(()=>ne(l.value?e.collapsedWidth:e.width)),h=z(()=>e.collapseMode!=="transform"?{}:{minWidth:ne(e.width)}),s=z(()=>r?r.siderPlacement:"left");function w(N,x){if(e.nativeScrollbar){const{value:C}=t;C&&(x===void 0?C.scrollTo(N):C.scrollTo(N,x))}else{const{value:C}=a;C&&C.scrollTo(N,x)}}function _(){const{"onUpdate:collapsed":N,onUpdateCollapsed:x,onExpand:C,onCollapse:V}=e,{value:K}=l;x&&O(x,!K),N&&O(N,!K),i.value=!K,K?C&&O(C):V&&O(V)}let A=0,g=0;const H=N=>{var x;const C=N.target;A=C.scrollLeft,g=C.scrollTop,(x=e.onScroll)===null||x===void 0||x.call(e,N)};io(()=>{if(e.nativeScrollbar){const N=t.value;N&&(N.scrollTop=g,N.scrollLeft=A)}}),W(je,{collapsedRef:l,collapseModeRef:oe(e,"collapseMode")});const{mergedClsPrefixRef:$,inlineThemeDisabled:k}=ue(e),E=q("Layout","-layout-sider",Bo,Ke,e,$);function L(N){var x,C;N.propertyName==="max-width"&&(l.value?(x=e.onAfterLeave)===null||x===void 0||x.call(e):(C=e.onAfterEnter)===null||C===void 0||C.call(e))}const Y={scrollTo:w},j=z(()=>{const{common:{cubicBezierEaseInOut:N},self:x}=E.value,{siderToggleButtonColor:C,siderToggleButtonBorder:V,siderToggleBarColor:K,siderToggleBarColorHover:re}=x,B={"--n-bezier":N,"--n-toggle-button-color":C,"--n-toggle-button-border":V,"--n-toggle-bar-color":K,"--n-toggle-bar-color-hover":re};return e.inverted?(B["--n-color"]=x.siderColorInverted,B["--n-text-color"]=x.textColorInverted,B["--n-border-color"]=x.siderBorderColorInverted,B["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColorInverted,B.__invertScrollbar=x.__invertScrollbar):(B["--n-color"]=x.siderColor,B["--n-text-color"]=x.textColor,B["--n-border-color"]=x.siderBorderColor,B["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColor),B}),F=k?ve("layout-sider",z(()=>e.inverted?"a":"b"),j,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:a,mergedClsPrefix:$,mergedTheme:E,styleMaxWidth:u,mergedCollapsed:l,scrollContainerStyle:h,siderPlacement:s,handleNativeElScroll:H,handleTransitionend:L,handleTriggerClick:_,inlineThemeDisabled:k,cssVars:j,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender},Y)},render(){var e;const{mergedClsPrefix:r,mergedCollapsed:t,showTrigger:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("aside",{class:[`${r}-layout-sider`,this.themeClass,`${r}-layout-sider--${this.position}-positioned`,`${r}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${r}-layout-sider--bordered`,t&&`${r}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${r}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ne(this.width)}]},this.nativeScrollbar?d("div",{class:[`${r}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):d(lo,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),a?a==="bar"?d(Eo,{clsPrefix:r,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):d(Fo,{clsPrefix:r,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?d("div",{class:`${r}-layout-sider__border`}):null)}}),Z=me("n-menu"),ge=me("n-submenu"),be=me("n-menu-item-group"),Pe=[y("&::before","background-color: var(--n-item-color-hover);"),c("arrow",`
 color: var(--n-arrow-color-hover);
 `),c("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[y("a",`
 color: var(--n-item-text-color-hover);
 `),c("extra",`
 color: var(--n-item-text-color-hover);
 `)])],_e=[c("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),c("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Lo=y([m("menu",`
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
 `,[y("&::before","display: none;"),I("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[I("selected",[c("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-horizontal);"),c("extra","color: var(--n-item-text-color-active-horizontal);")])]),I("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),c("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),c("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),X("disabled",[X("selected, child-active",[y("&:focus-within",_e)]),I("selected",[U(null,[c("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-hover-horizontal);"),c("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),I("child-active",[U(null,[c("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),c("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),U("border-bottom: 2px solid var(--n-border-color-horizontal);",_e)]),m("menu-item-content-header",[y("a","color: var(--n-item-text-color-horizontal);")])])]),X("responsive",[m("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),I("collapsed",[m("menu-item-content",[I("selected",[y("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),m("menu-item-content-header","opacity: 0;"),c("arrow","opacity: 0;"),c("icon","color: var(--n-item-icon-color-collapsed);")])]),m("menu-item",`
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
 `),I("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),I("collapsed",[c("arrow","transform: rotate(0);")]),I("selected",[y("&::before","background-color: var(--n-item-color-active);"),c("arrow","color: var(--n-arrow-color-active);"),c("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[y("a","color: var(--n-item-text-color-active);"),c("extra","color: var(--n-item-text-color-active);")])]),I("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[y("a",`
 color: var(--n-item-text-color-child-active);
 `),c("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),c("arrow",`
 color: var(--n-arrow-color-child-active);
 `),c("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),X("disabled",[X("selected, child-active",[y("&:focus-within",Pe)]),I("selected",[U(null,[c("arrow","color: var(--n-arrow-color-active-hover);"),c("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[y("a","color: var(--n-item-text-color-active-hover);"),c("extra","color: var(--n-item-text-color-active-hover);")])])]),I("child-active",[U(null,[c("arrow","color: var(--n-arrow-color-child-active-hover);"),c("icon","color: var(--n-item-icon-color-child-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[y("a","color: var(--n-item-text-color-child-active-hover);"),c("extra","color: var(--n-item-text-color-child-active-hover);")])])]),I("selected",[U(null,[y("&::before","background-color: var(--n-item-color-active-hover);")])]),U(null,Pe)]),c("icon",`
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
 `),c("arrow",`
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
 `)]),c("extra",`
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
 `)])]),m("menu-tooltip",[y("a",`
 color: inherit;
 text-decoration: none;
 `)]),m("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function U(e,r){return[I("hover",e,r),y("&:hover",e,r)]}const De=T({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:r}=D(Z);return{menuProps:r,style:z(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:z(()=>{const{maxIconSize:t,activeIconSize:a,iconMarginRight:i}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${a}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:t,renderLabel:a,renderExtra:i,expandIcon:l}}=this,u=t?t(r.rawNode):G(this.icon);return d("div",{onClick:h=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,h)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},u&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[u]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:a?a(r.rawNode):G(this.title),this.extra||i?d("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(r.rawNode):G(this.extra)):null),this.showArrow?d(Ae,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(r.rawNode):d(To,null)}):null)}}),ee=8;function xe(e){const r=D(Z),{props:t,mergedCollapsedRef:a}=r,i=D(ge,null),l=D(be,null),u=z(()=>t.mode==="horizontal"),h=z(()=>u.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=z(()=>{var g;return Math.max((g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize,t.iconSize)}),w=z(()=>{var g;return!u.value&&e.root&&a.value&&(g=t.collapsedIconSize)!==null&&g!==void 0?g:t.iconSize}),_=z(()=>{if(u.value)return;const{collapsedWidth:g,indent:H,rootIndent:$}=t,{root:k,isGroup:E}=e,L=$===void 0?H:$;return k?a.value?g/2-s.value/2:L:l&&typeof l.paddingLeftRef.value=="number"?H/2+l.paddingLeftRef.value:i&&typeof i.paddingLeftRef.value=="number"?(E?H/2:H)+i.paddingLeftRef.value:0}),A=z(()=>{const{collapsedWidth:g,indent:H,rootIndent:$}=t,{value:k}=s,{root:E}=e;return u.value||!E||!a.value?ee:($===void 0?H:$)+k+ee-(g+k)/2});return{dropdownPlacement:h,activeIconSize:w,maxIconSize:s,paddingLeft:_,iconMarginRight:A,NMenu:r,NSubmenu:i}}const Ce={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ko=T({name:"MenuDivider",setup(){const e=D(Z),{mergedClsPrefixRef:r,isHorizontalRef:t}=e;return()=>t.value?null:d("div",{class:`${r.value}-menu-divider`})}}),Ue=Object.assign(Object.assign({},Ce),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),jo=he(Ue),Vo=T({name:"MenuOption",props:Ue,setup(e){const r=xe(e),{NSubmenu:t,NMenu:a}=r,{props:i,mergedClsPrefixRef:l,mergedCollapsedRef:u}=a,h=t?t.mergedDisabledRef:{value:!1},s=z(()=>h.value||e.disabled);function w(A){const{onClick:g}=e;g&&g(A)}function _(A){s.value||(a.doSelect(e.internalKey,e.tmNode.rawNode),w(A))}return{mergedClsPrefix:l,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:a.mergedThemeRef,menuProps:i,dropdownEnabled:ce(()=>e.root&&u.value&&i.mode!=="horizontal"&&!s.value),selected:ce(()=>a.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:_}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:t,menuProps:{renderLabel:a,nodeProps:i}}=this,l=i==null?void 0:i(t.rawNode);return d("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),d(co,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>a?a(t.rawNode):G(this.title),trigger:()=>d(De,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Ge=Object.assign(Object.assign({},Ce),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Do=he(Ge),Uo=T({name:"MenuOptionGroup",props:Ge,setup(e){W(ge,null);const r=xe(e);W(be,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:t,props:a}=D(Z);return function(){const{value:i}=t,l=r.paddingLeft.value,{nodeProps:u}=a,h=u==null?void 0:u(e.tmNode.rawNode);return d("div",{class:`${i}-menu-item-group`,role:"group"},d("div",Object.assign({},h,{class:[`${i}-menu-item-group-title`,h==null?void 0:h.class],style:[(h==null?void 0:h.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),G(e.title),e.extra?d(so,null," ",G(e.extra)):null),d("div",null,e.tmNodes.map(s=>ye(s,a))))}}});function se(e){return e.type==="divider"||e.type==="render"}function Go(e){return e.type==="divider"}function ye(e,r){const{rawNode:t}=e,{show:a}=t;if(a===!1)return null;if(se(t))return Go(t)?d(Ko,Object.assign({key:e.key},t.props)):null;const{labelField:i}=r,{key:l,level:u,isGroup:h}=e,s=Object.assign(Object.assign({},t),{title:t.title||t[i],extra:t.titleExtra||t.extra,key:l,internalKey:l,level:u,root:u===0,isGroup:h});return e.children?e.isGroup?d(Uo,ie(s,Do,{tmNode:e,tmNodes:e.children,key:l})):d(de,ie(s,qo,{key:l,rawNodes:t[r.childrenField],tmNodes:e.children,tmNode:e})):d(Vo,ie(s,jo,{key:l,tmNode:e}))}const qe=Object.assign(Object.assign({},Ce),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),qo=he(qe),de=T({name:"Submenu",props:qe,setup(e){const r=xe(e),{NMenu:t,NSubmenu:a}=r,{props:i,mergedCollapsedRef:l,mergedThemeRef:u}=t,h=z(()=>{const{disabled:g}=e;return a!=null&&a.mergedDisabledRef.value||i.disabled?!0:g}),s=M(!1);W(ge,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:h}),W(be,null);function w(){const{onClick:g}=e;g&&g()}function _(){h.value||(l.value||t.toggleExpand(e.internalKey),w())}function A(g){s.value=g}return{menuProps:i,mergedTheme:u,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:s,paddingLeft:r.paddingLeft,mergedDisabled:h,mergedValue:t.mergedValueRef,childActive:ce(()=>{var g;return(g=e.virtualChildActive)!==null&&g!==void 0?g:t.activePathRef.value.includes(e.internalKey)}),collapsed:z(()=>i.mode==="horizontal"?!1:l.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:z(()=>!h.value&&(i.mode==="horizontal"||l.value)),handlePopoverShowChange:A,handleClick:_}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:t,renderLabel:a}}=this,i=()=>{const{isHorizontal:u,paddingLeft:h,collapsed:s,mergedDisabled:w,maxIconSize:_,activeIconSize:A,title:g,childActive:H,icon:$,handleClick:k,menuProps:{nodeProps:E},dropdownShow:L,iconMarginRight:Y,tmNode:j,mergedClsPrefix:F,isEllipsisPlaceholder:N,extra:x}=this,C=E==null?void 0:E(j.rawNode);return d("div",Object.assign({},C,{class:[`${F}-menu-item`,C==null?void 0:C.class],role:"menuitem"}),d(De,{tmNode:j,paddingLeft:h,collapsed:s,disabled:w,iconMarginRight:Y,maxIconSize:_,activeIconSize:A,title:g,extra:x,showArrow:!u,childActive:H,clsPrefix:F,icon:$,hover:L,onClick:k,isEllipsisPlaceholder:N}))},l=()=>d(uo,null,{default:()=>{const{tmNodes:u,collapsed:h}=this;return h?null:d("div",{class:`${r}-submenu-children`,role:"menu"},u.map(s=>ye(s,this.menuProps)))}});return this.root?d(Ve,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:a}),{default:()=>d("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},i(),this.isHorizontal?null:l())}):d("div",{class:`${r}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},i(),l())}}),Wo=Object.assign(Object.assign({},q.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),We=T({name:"Menu",inheritAttrs:!1,props:Wo,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t}=ue(e),a=q("Menu","-menu",Lo,fo,e,r),i=D(je,null),l=z(()=>{var v;const{collapsed:b}=e;if(b!==void 0)return b;if(i){const{collapseModeRef:o,collapsedRef:p}=i;if(o.value==="width")return(v=p.value)!==null&&v!==void 0?v:!1}return!1}),u=z(()=>{const{keyField:v,childrenField:b,disabledField:o}=e;return le(e.items||e.options,{getIgnored(p){return se(p)},getChildren(p){return p[b]},getDisabled(p){return p[o]},getKey(p){var R;return(R=p[v])!==null&&R!==void 0?R:p.name}})}),h=z(()=>new Set(u.value.treeNodes.map(v=>v.key))),{watchProps:s}=e,w=M(null);s!=null&&s.includes("defaultValue")?we(()=>{w.value=e.defaultValue}):w.value=e.defaultValue;const _=oe(e,"value"),A=ae(_,w),g=M([]),H=()=>{g.value=e.defaultExpandAll?u.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||u.value.getPath(A.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?we(H):H();const $=vo(e,["expandedNames","expandedKeys"]),k=ae($,g),E=z(()=>u.value.treeNodes),L=z(()=>u.value.getPath(A.value).keyPath);W(Z,{props:e,mergedCollapsedRef:l,mergedThemeRef:a,mergedValueRef:A,mergedExpandedKeysRef:k,activePathRef:L,mergedClsPrefixRef:r,isHorizontalRef:z(()=>e.mode==="horizontal"),invertedRef:oe(e,"inverted"),doSelect:Y,toggleExpand:F});function Y(v,b){const{"onUpdate:value":o,onUpdateValue:p,onSelect:R}=e;p&&O(p,v,b),o&&O(o,v,b),R&&O(R,v,b),w.value=v}function j(v){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:o,onExpandedNamesChange:p,onOpenNamesChange:R}=e;b&&O(b,v),o&&O(o,v),p&&O(p,v),R&&O(R,v),g.value=v}function F(v){const b=Array.from(k.value),o=b.findIndex(p=>p===v);if(~o)b.splice(o,1);else{if(e.accordion&&h.value.has(v)){const p=b.findIndex(R=>h.value.has(R));p>-1&&b.splice(p,1)}b.push(v)}j(b)}const N=v=>{const b=u.value.getPath(v??A.value,{includeSelf:!1}).keyPath;if(!b.length)return;const o=Array.from(k.value),p=new Set([...o,...b]);e.accordion&&h.value.forEach(R=>{p.has(R)&&!b.includes(R)&&p.delete(R)}),j(Array.from(p))},x=z(()=>{const{inverted:v}=e,{common:{cubicBezierEaseInOut:b},self:o}=a.value,{borderRadius:p,borderColorHorizontal:R,fontSize:to,itemHeight:ro,dividerColor:no}=o,n={"--n-divider-color":no,"--n-bezier":b,"--n-font-size":to,"--n-border-color-horizontal":R,"--n-border-radius":p,"--n-item-height":ro};return v?(n["--n-group-text-color"]=o.groupTextColorInverted,n["--n-color"]=o.colorInverted,n["--n-item-text-color"]=o.itemTextColorInverted,n["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,n["--n-item-text-color-active"]=o.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=o.itemIconColorInverted,n["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=o.arrowColorInverted,n["--n-arrow-color-hover"]=o.arrowColorHoverInverted,n["--n-arrow-color-active"]=o.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=o.itemColorHoverInverted,n["--n-item-color-active"]=o.itemColorActiveInverted,n["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=o.groupTextColor,n["--n-color"]=o.color,n["--n-item-text-color"]=o.itemTextColor,n["--n-item-text-color-hover"]=o.itemTextColorHover,n["--n-item-text-color-active"]=o.itemTextColorActive,n["--n-item-text-color-child-active"]=o.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,n["--n-item-icon-color"]=o.itemIconColor,n["--n-item-icon-color-hover"]=o.itemIconColorHover,n["--n-item-icon-color-active"]=o.itemIconColorActive,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=o.arrowColor,n["--n-arrow-color-hover"]=o.arrowColorHover,n["--n-arrow-color-active"]=o.arrowColorActive,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,n["--n-arrow-color-child-active"]=o.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,n["--n-item-color-hover"]=o.itemColorHover,n["--n-item-color-active"]=o.itemColorActive,n["--n-item-color-active-hover"]=o.itemColorActiveHover,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),n}),C=t?ve("menu",z(()=>e.inverted?"a":"b"),x,e):void 0,V=mo(),K=M(null),re=M(null);let B=!0;const ze=()=>{var v;B?B=!1:(v=K.value)===null||v===void 0||v.sync({showAllItemsBeforeCalculate:!0})};function Ye(){return document.getElementById(V)}const Q=M(-1);function Xe(v){Q.value=e.options.length-v}function Je(v){v||(Q.value=-1)}const Ze=z(()=>{const v=Q.value;return{children:v===-1?[]:e.options.slice(v)}}),Qe=z(()=>{const{childrenField:v,disabledField:b,keyField:o}=e;return le([Ze.value],{getIgnored(p){return se(p)},getChildren(p){return p[v]},getDisabled(p){return p[b]},getKey(p){var R;return(R=p[o])!==null&&R!==void 0?R:p.name}})}),eo=z(()=>le([{}]).treeNodes[0]);function oo(){var v;if(Q.value===-1)return d(de,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:eo.value,domId:V,isEllipsisPlaceholder:!0});const b=Qe.value.treeNodes[0],o=L.value,p=!!(!((v=b.children)===null||v===void 0)&&v.some(R=>o.includes(R.key)));return d(de,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:p,tmNode:b,domId:V,rawNodes:b.rawNode.children||[],tmNodes:b.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:r,controlledExpandedKeys:$,uncontrolledExpanededKeys:g,mergedExpandedKeys:k,uncontrolledValue:w,mergedValue:A,activePath:L,tmNodes:E,mergedTheme:a,mergedCollapsed:l,cssVars:t?void 0:x,themeClass:C==null?void 0:C.themeClass,overflowRef:K,counterRef:re,updateCounter:()=>{},onResize:ze,onUpdateOverflow:Je,onUpdateCount:Xe,renderCounter:oo,getCounter:Ye,onRender:C==null?void 0:C.onRender,showOption:N,deriveResponsiveState:ze}},render(){const{mergedClsPrefix:e,mode:r,themeClass:t,onRender:a}=this;a==null||a();const i=()=>this.tmNodes.map(s=>ye(s,this.$props)),u=r==="horizontal"&&this.responsive,h=()=>d("div",po(this.$attrs,{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${r}`,u&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),u?d(No,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:i,counter:this.renderCounter}):i());return u?d(ho,{onResize:this.onResize},{default:h}):h()}}),Yo=T({__name:"SidebarComponent",setup(e){const r=Te(),{menu:t}=ke(r),a=go(),i=M({menu:{selectedKey:a.path}});return bo(()=>a.path,l=>{const u=l==="/dashboard/"?xo.home:l;i.value.menu.selectedKey=u},{immediate:!0}),(l,u)=>(J(),pe(f(Mo),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,"show-trigger":""},{default:P(()=>[S(f(We),{value:f(i).menu.selectedKey,"onUpdate:value":u[0]||(u[0]=h=>f(i).menu.selectedKey=h),"collapsed-width":64,"collapsed-icon-size":22,options:f(t)},null,8,["value","options"])]),_:1}))}}),Xo=T({__name:"LogoutBtnForWebComponent",setup(e){const r=He(),{mutate:t}=$e({mutationFn:()=>Ee.logout.api(),onSuccess:()=>{Fe.clearToken(),r.push(Oe.login)}});return(a,i)=>(J(),pe(f(Be),{onClick:i[0]||(i[0]=l=>f(t)())},{default:P(()=>i[1]||(i[1]=[fe(" 登出 ")])),_:1}))}}),Jo=T({__name:"MenubarComponent",setup(e){const r=Te(),{menu:t}=ke(r),a=He(),i=M({data:{menuKey:""},status:{dropdown:!1,drawer:!1}}),l=[{label:"Theme",key:"Theme"},{label:"Logout",key:"Logout"}],u=s=>{switch(s.key){case"Theme":return d(Re);case"Logout":return d(Xo);default:return s.label}},{mutate:h}=$e({mutationFn:()=>Ee.logout.api(),onSuccess:()=>{Fe.clearToken(),a.push(Oe.login)}});return(s,w)=>(J(),Me("div",null,[S(f(Ve),{show:f(i).status.dropdown,options:l,placement:"bottom-start","render-label":u},{default:P(()=>[S(f(Ie),{class:"hidden md:block",size:30,color:"gray",cursor:"pointer",onClick:w[0]||(w[0]=_=>f(i).status.dropdown=!f(i).status.dropdown)},{default:P(()=>[S(f(Se))]),_:1})]),_:1},8,["show"]),S(f(Ie),{size:30,color:"gray",cursor:"pointer",class:"block md:hidden",onClick:w[1]||(w[1]=_=>f(i).status.drawer=!0)},{default:P(()=>[S(f(Se))]),_:1}),S(f(_o),{show:f(i).status.drawer,"onUpdate:show":w[4]||(w[4]=_=>f(i).status.drawer=_),placement:"right","default-width":"180"},{default:P(()=>[S(f(Po),{title:"目錄","body-content-style":"padding: 0;"},{default:P(()=>[S(f(te),{justify:"center",class:"my-2"},{default:P(()=>[S(Re)]),_:1}),S(f(We),{value:f(i).data.menuKey,"onUpdate:value":w[2]||(w[2]=_=>f(i).data.menuKey=_),options:f(t),"on-update:value":()=>f(i).status.drawer=!1},null,8,["value","options","on-update:value"]),S(f(te),{justify:"center",class:"my-2"},{default:P(()=>[S(f(Be),{onClick:w[3]||(w[3]=_=>f(h)())},{default:P(()=>w[5]||(w[5]=[fe(" 登出 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["show"])]))}}),nt=T({__name:"default",setup(e){return(r,t)=>{const a=So,i=Yo,l=Co("router-view");return J(),Me("div",null,[S(f(Ne),{"content-style":"padding: 24px;"},{default:P(()=>[S(f($o),null,{default:P(()=>[S(f(te),{justify:"space-between",align:"center"},{default:P(()=>[S(f(yo),{width:"150"},{default:P(()=>t[0]||(t[0]=[fe(" 測試環境 ")])),_:1}),S(f(Ao),{justify:"space-between",align:"center"},{default:P(()=>[S(a),S(Jo)]),_:1})]),_:1})]),_:1})]),_:1}),S(f(Ne),{"has-sider":""},{default:P(()=>[S(i,{class:"md:block hidden"}),S(f(te),{vertical:"",class:"w-full m-4"},{default:P(()=>[S(l,{style:{height:"calc(100dvh - 114px)"}},{default:P(({Component:u})=>[S(zo,{name:"pagefade",mode:"out-in"},{default:P(()=>[(J(),pe(wo(u)))]),_:2},1024)]),_:1})]),_:1})]),_:1})])}}});export{nt as default};
