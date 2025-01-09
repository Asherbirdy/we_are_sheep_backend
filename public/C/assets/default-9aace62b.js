import{d as H,r as E,u as Je,c as Qe,o as eo,n as oo,h as u,a as to,b as ro,e as no,f as pe,g as Z,i as io,j as w,k as lo,l as ao,m as co,p as so,q as Se,s as m,t as S,v,w as y,N as Te,x as W,y as ue,z as le,A as uo,B as J,C as He,D as vo,E as ce,F as K,G as ge,H as X,I as ho,J as ve,K as mo,L as fo,M as se,O as xe,P as ee,Q as po,R as Re,S as go,T as xo,V as bo,U as Co,W as Q,X as ae,Y as G,Z as yo,_ as wo,$ as oe,a0 as ke,a1 as zo,a2 as Oe,a3 as V,a4 as F,a5 as T,a6 as Io,a7 as So,a8 as Ro,a9 as ko,aa as _o}from"./index-a4d46aa6.js";import{C as Ao,l as Be,p as Po,a as No,b as To,N as Fe,c as de,d as $e,e as Ho,M as Oo,f as _e,_ as Bo,g as Fo}from"./ThemeSwichComponent.vue_vue_type_script_setup_true_lang-03cf2eff.js";const D="v-hidden",$o=ro("[v-hidden]",{display:"none!important"}),Mo=H({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const r=E(null),d=E(null);function l(a){const{value:s}=r,{getCounter:i,getTail:b}=e;let z;if(i!==void 0?z=i():z=d.value,!s||!z)return;z.hasAttribute(D)&&z.removeAttribute(D);const{children:k}=s;if(a.showAllItemsBeforeCalculate)for(const A of k)A.hasAttribute(D)&&A.removeAttribute(D);const f=s.offsetWidth,O=[],_=t.tail?b==null?void 0:b():null;let P=_?_.offsetWidth:0,B=!1;const $=s.children.length-(t.tail?1:0);for(let A=0;A<$-1;++A){if(A<0)continue;const N=k[A];if(B){N.hasAttribute(D)||N.setAttribute(D,"");continue}else N.hasAttribute(D)&&N.removeAttribute(D);const I=N.offsetWidth;if(P+=I,O[A]=I,P>f){const{updateCounter:x}=e;for(let g=A;g>=0;--g){const j=$-1-g;x!==void 0?x(j):z.textContent=`${j}`;const L=z.offsetWidth;if(P-=O[g],P+L<=f||g===0){B=!0,A=g-1,_&&(A===-1?(_.style.maxWidth=`${f-L}px`,_.style.boxSizing="border-box"):_.style.maxWidth="");const{onUpdateCount:Y}=e;Y&&Y(j);break}}}}const{onUpdateOverflow:U}=e;B?U!==void 0&&U(!0):(U!==void 0&&U(!1),z.setAttribute(D,""))}const c=Je();return $o.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Qe,ssr:c}),eo(()=>l({showAllItemsBeforeCalculate:!1})),{selfRef:r,counterRef:d,sync:l}},render(){const{$slots:e}=this;return oo(()=>this.sync({showAllItemsBeforeCalculate:!1})),u("div",{class:"v-overflow",ref:"selfRef"},[to(e,"default"),e.counter?e.counter():u("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),Eo=H({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),jo=()=>no,Lo={name:"Flex",self:jo},Ko=Lo,Uo=Object.assign(Object.assign({},Z.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),Vo=H({name:"Flex",props:Uo,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:r}=pe(e),d=Z("Flex","-flex",void 0,Ko,e,t);return{rtlEnabled:io("Flex",r,t),mergedClsPrefix:t,margin:w(()=>{const{size:c}=e;if(Array.isArray(c))return{horizontal:c[0],vertical:c[1]};if(typeof c=="number")return{horizontal:c,vertical:c};const{self:{[co("gap",c)]:a}}=d.value,{row:s,col:i}=so(a);return{horizontal:Se(i),vertical:Se(s)}})}},render(){const{vertical:e,reverse:t,align:r,inline:d,justify:l,margin:c,wrap:a,mergedClsPrefix:s,rtlEnabled:i}=this,b=lo(ao(this),!1);return b.length?u("div",{role:"none",class:[`${s}-flex`,i&&`${s}-flex--rtl`],style:{display:d?"inline-flex":"flex",flexDirection:(()=>e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row")(),justifyContent:l,flexWrap:!a||e?"nowrap":"wrap",alignItems:r,gap:`${c.vertical}px ${c.horizontal}px`}},b):null}}),Do=m("layout-sider",`
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
`,[S("bordered",[v("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),v("left-placement",[S("bordered",[v("border",`
 right: 0;
 `)])]),S("right-placement",`
 justify-content: flex-start;
 `,[S("bordered",[v("border",`
 left: 0;
 `)]),S("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[y("&:hover",[v("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),v("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[y("&:hover",[v("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),v("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),S("collapsed",[m("layout-toggle-bar",[y("&:hover",[v("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),v("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
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
 `,[v("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),v("bottom",`
 position: absolute;
 top: 34px;
 `),y("&:hover",[v("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),v("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),v("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),y("&:hover",[v("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),v("border",`
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
 `),S("show-content",[m("layout-sider-scroll-container",{opacity:1})]),S("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Wo=H({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(Te,{clsPrefix:e},{default:()=>u(Ao,null)}))}}),Go=H({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),qo={position:Po,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Yo=H({name:"LayoutSider",props:Object.assign(Object.assign({},Z.props),qo),setup(e){const t=W(No),r=E(null),d=E(null),l=w(()=>ce(i.value?e.collapsedWidth:e.width)),c=w(()=>e.collapseMode!=="transform"?{}:{minWidth:ce(e.width)}),a=w(()=>t?t.siderPlacement:"left"),s=E(e.defaultCollapsed),i=ue(le(e,"collapsed"),s);function b(I,x){if(e.nativeScrollbar){const{value:g}=r;g&&(x===void 0?g.scrollTo(I):g.scrollTo(I,x))}else{const{value:g}=d;g&&g.scrollTo(I,x)}}function z(){const{"onUpdate:collapsed":I,onUpdateCollapsed:x,onExpand:g,onCollapse:j}=e,{value:L}=i;x&&K(x,!L),I&&K(I,!L),s.value=!L,L?g&&K(g):j&&K(j)}let k=0,f=0;const O=I=>{var x;const g=I.target;k=g.scrollLeft,f=g.scrollTop,(x=e.onScroll)===null||x===void 0||x.call(e,I)};uo(()=>{if(e.nativeScrollbar){const I=r.value;I&&(I.scrollTop=f,I.scrollLeft=k)}}),J(Be,{collapsedRef:i,collapseModeRef:le(e,"collapseMode")});const{mergedClsPrefixRef:_,inlineThemeDisabled:P}=pe(e),B=Z("Layout","-layout-sider",Do,To,e,_);function $(I){var x,g;I.propertyName==="max-width"&&(i.value?(x=e.onAfterLeave)===null||x===void 0||x.call(e):(g=e.onAfterEnter)===null||g===void 0||g.call(e))}const U={scrollTo:b},A=w(()=>{const{common:{cubicBezierEaseInOut:I},self:x}=B.value,{siderToggleButtonColor:g,siderToggleButtonBorder:j,siderToggleBarColor:L,siderToggleBarColorHover:Y}=x,M={"--n-bezier":I,"--n-toggle-button-color":g,"--n-toggle-button-border":j,"--n-toggle-bar-color":L,"--n-toggle-bar-color-hover":Y};return e.inverted?(M["--n-color"]=x.siderColorInverted,M["--n-text-color"]=x.textColorInverted,M["--n-border-color"]=x.siderBorderColorInverted,M["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColorInverted,M.__invertScrollbar=x.__invertScrollbar):(M["--n-color"]=x.siderColor,M["--n-text-color"]=x.textColor,M["--n-border-color"]=x.siderBorderColor,M["--n-toggle-button-icon-color"]=x.siderToggleButtonIconColor),M}),N=P?He("layout-sider",w(()=>e.inverted?"a":"b"),A,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:d,mergedClsPrefix:_,mergedTheme:B,styleMaxWidth:l,mergedCollapsed:i,scrollContainerStyle:c,siderPlacement:a,handleNativeElScroll:O,handleTransitionend:$,handleTriggerClick:z,inlineThemeDisabled:P,cssVars:A,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender},U)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:r,showTrigger:d}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,r&&`${t}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ce(this.width)}]},this.nativeScrollbar?u("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(vo,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),d?d==="bar"?u(Go,{clsPrefix:t,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(Wo,{clsPrefix:t,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${t}-layout-sider__border`}):null)}}),te=ge("n-menu"),be=ge("n-submenu"),Ce=ge("n-menu-item-group"),ne=8;function ye(e){const t=W(te),{props:r,mergedCollapsedRef:d}=t,l=W(be,null),c=W(Ce,null),a=w(()=>r.mode==="horizontal"),s=w(()=>a.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),i=w(()=>{var f;return Math.max((f=r.collapsedIconSize)!==null&&f!==void 0?f:r.iconSize,r.iconSize)}),b=w(()=>{var f;return!a.value&&e.root&&d.value&&(f=r.collapsedIconSize)!==null&&f!==void 0?f:r.iconSize}),z=w(()=>{if(a.value)return;const{collapsedWidth:f,indent:O,rootIndent:_}=r,{root:P,isGroup:B}=e,$=_===void 0?O:_;return P?d.value?f/2-i.value/2:$:c&&typeof c.paddingLeftRef.value=="number"?O/2+c.paddingLeftRef.value:l&&typeof l.paddingLeftRef.value=="number"?(B?O/2:O)+l.paddingLeftRef.value:0}),k=w(()=>{const{collapsedWidth:f,indent:O,rootIndent:_}=r,{value:P}=i,{root:B}=e;return a.value||!B||!d.value?ne:(_===void 0?O:_)+P+ne-(f+P)/2});return{dropdownPlacement:s,activeIconSize:b,maxIconSize:i,paddingLeft:z,iconMarginRight:k,NMenu:t,NSubmenu:l}}const we={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Me=Object.assign(Object.assign({},we),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Xo=H({name:"MenuOptionGroup",props:Me,setup(e){J(be,null);const t=ye(e);J(Ce,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:r,props:d}=W(te);return function(){const{value:l}=r,c=t.paddingLeft.value,{nodeProps:a}=d,s=a==null?void 0:a(e.tmNode.rawNode);return u("div",{class:`${l}-menu-item-group`,role:"group"},u("div",Object.assign({},s,{class:[`${l}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",c!==void 0?`padding-left: ${c}px;`:""]}),X(e.title),e.extra?u(ho,null," ",X(e.extra)):null),u("div",null,e.tmNodes.map(i=>ze(i,d))))}}}),Ee=H({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=W(te);return{menuProps:t,style:w(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:w(()=>{const{maxIconSize:r,activeIconSize:d,iconMarginRight:l}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${d}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:r,renderLabel:d,renderExtra:l,expandIcon:c}}=this,a=r?r(t.rawNode):X(this.icon);return u("div",{onClick:s=>{var i;(i=this.onClick)===null||i===void 0||i.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},a&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[a]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:d?d(t.rawNode):X(this.title),this.extra||l?u("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(t.rawNode):X(this.extra)):null),this.showArrow?u(Te,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>c?c(t.rawNode):u(Eo,null)}):null)}}),je=Object.assign(Object.assign({},we),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),he=H({name:"Submenu",props:je,setup(e){const t=ye(e),{NMenu:r,NSubmenu:d}=t,{props:l,mergedCollapsedRef:c,mergedThemeRef:a}=r,s=w(()=>{const{disabled:f}=e;return d!=null&&d.mergedDisabledRef.value||l.disabled?!0:f}),i=E(!1);J(be,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),J(Ce,null);function b(){const{onClick:f}=e;f&&f()}function z(){s.value||(c.value||r.toggleExpand(e.internalKey),b())}function k(f){i.value=f}return{menuProps:l,mergedTheme:a,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:i,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:r.mergedValueRef,childActive:ve(()=>{var f;return(f=e.virtualChildActive)!==null&&f!==void 0?f:r.activePathRef.value.includes(e.internalKey)}),collapsed:w(()=>l.mode==="horizontal"?!1:c.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:w(()=>!s.value&&(l.mode==="horizontal"||c.value)),handlePopoverShowChange:k,handleClick:z}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:r,renderLabel:d}}=this,l=()=>{const{isHorizontal:a,paddingLeft:s,collapsed:i,mergedDisabled:b,maxIconSize:z,activeIconSize:k,title:f,childActive:O,icon:_,handleClick:P,menuProps:{nodeProps:B},dropdownShow:$,iconMarginRight:U,tmNode:A,mergedClsPrefix:N,isEllipsisPlaceholder:I,extra:x}=this,g=B==null?void 0:B(A.rawNode);return u("div",Object.assign({},g,{class:[`${N}-menu-item`,g==null?void 0:g.class],role:"menuitem"}),u(Ee,{tmNode:A,paddingLeft:s,collapsed:i,disabled:b,iconMarginRight:U,maxIconSize:z,activeIconSize:k,title:f,extra:x,showArrow:!a,childActive:O,clsPrefix:N,icon:_,hover:$,onClick:P,isEllipsisPlaceholder:I}))},c=()=>u(mo,null,{default:()=>{const{tmNodes:a,collapsed:s}=this;return s?null:u("div",{class:`${t}-submenu-children`,role:"menu"},a.map(i=>ze(i,this.menuProps)))}});return this.root?u(Fe,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:d}),{default:()=>u("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},l(),this.isHorizontal?null:c())}):u("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},l(),c())}}),Le=Object.assign(Object.assign({},we),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Zo=H({name:"MenuOption",props:Le,setup(e){const t=ye(e),{NSubmenu:r,NMenu:d}=t,{props:l,mergedClsPrefixRef:c,mergedCollapsedRef:a}=d,s=r?r.mergedDisabledRef:{value:!1},i=w(()=>s.value||e.disabled);function b(k){const{onClick:f}=e;f&&f(k)}function z(k){i.value||(d.doSelect(e.internalKey,e.tmNode.rawNode),b(k))}return{mergedClsPrefix:c,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:d.mergedThemeRef,menuProps:l,dropdownEnabled:ve(()=>e.root&&a.value&&l.mode!=="horizontal"&&!i.value),selected:ve(()=>d.mergedValueRef.value===e.internalKey),mergedDisabled:i,handleClick:z}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:r,menuProps:{renderLabel:d,nodeProps:l}}=this,c=l==null?void 0:l(r.rawNode);return u("div",Object.assign({},c,{role:"menuitem",class:[`${e}-menu-item`,c==null?void 0:c.class]}),u(fo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>d?d(r.rawNode):X(this.title),trigger:()=>u(Ee,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Jo=H({name:"MenuDivider",setup(){const e=W(te),{mergedClsPrefixRef:t,isHorizontalRef:r}=e;return()=>r.value?null:u("div",{class:`${t.value}-menu-divider`})}}),Qo=xe(Me),et=xe(Le),ot=xe(je);function me(e){return e.type==="divider"||e.type==="render"}function tt(e){return e.type==="divider"}function ze(e,t){const{rawNode:r}=e,{show:d}=r;if(d===!1)return null;if(me(r))return tt(r)?u(Jo,Object.assign({key:e.key},r.props)):null;const{labelField:l}=t,{key:c,level:a,isGroup:s}=e,i=Object.assign(Object.assign({},r),{title:r.title||r[l],extra:r.titleExtra||r.extra,key:c,internalKey:c,level:a,root:a===0,isGroup:s});return e.children?e.isGroup?u(Xo,se(i,Qo,{tmNode:e,tmNodes:e.children,key:c})):u(he,se(i,ot,{key:c,rawNodes:r[t.childrenField],tmNodes:e.children,tmNode:e})):u(Zo,se(i,et,{key:c,tmNode:e}))}const Ae=[y("&::before","background-color: var(--n-item-color-hover);"),v("arrow",`
 color: var(--n-arrow-color-hover);
 `),v("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[y("a",`
 color: var(--n-item-text-color-hover);
 `),v("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Pe=[v("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],rt=y([m("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[S("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[m("submenu","margin: 0;"),m("menu-item","margin: 0;"),m("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[y("&::before","display: none;"),S("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[S("selected",[v("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-horizontal);"),v("extra","color: var(--n-item-text-color-active-horizontal);")])]),S("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),v("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ee("disabled",[ee("selected, child-active",[y("&:focus-within",Pe)]),S("selected",[q(null,[v("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),S("child-active",[q(null,[v("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),q("border-bottom: 2px solid var(--n-border-color-horizontal);",Pe)]),m("menu-item-content-header",[y("a","color: var(--n-item-text-color-horizontal);")])])]),ee("responsive",[m("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),S("collapsed",[m("menu-item-content",[S("selected",[y("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),m("menu-item-content-header","opacity: 0;"),v("arrow","opacity: 0;"),v("icon","color: var(--n-item-icon-color-collapsed);")])]),m("menu-item",`
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
 `),S("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),S("collapsed",[v("arrow","transform: rotate(0);")]),S("selected",[y("&::before","background-color: var(--n-item-color-active);"),v("arrow","color: var(--n-arrow-color-active);"),v("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[y("a","color: var(--n-item-text-color-active);"),v("extra","color: var(--n-item-text-color-active);")])]),S("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[y("a",`
 color: var(--n-item-text-color-child-active);
 `),v("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),v("arrow",`
 color: var(--n-arrow-color-child-active);
 `),v("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ee("disabled",[ee("selected, child-active",[y("&:focus-within",Ae)]),S("selected",[q(null,[v("arrow","color: var(--n-arrow-color-active-hover);"),v("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[y("a","color: var(--n-item-text-color-active-hover);"),v("extra","color: var(--n-item-text-color-active-hover);")])])]),S("child-active",[q(null,[v("arrow","color: var(--n-arrow-color-child-active-hover);"),v("icon","color: var(--n-item-icon-color-child-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[y("a","color: var(--n-item-text-color-child-active-hover);"),v("extra","color: var(--n-item-text-color-child-active-hover);")])])]),S("selected",[q(null,[y("&::before","background-color: var(--n-item-color-active-hover);")])]),q(null,Ae)]),v("icon",`
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
 `),v("arrow",`
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
 `)]),v("extra",`
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
 `,[po({duration:".2s"})])]),m("menu-item-group",[m("menu-item-group-title",`
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
 `)]);function q(e,t){return[S("hover",e,t),y("&:hover",e,t)]}const nt=Object.assign(Object.assign({},Z.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),it=H({name:"Menu",props:nt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=pe(e),d=Z("Menu","-menu",rt,Co,e,t),l=W(Be,null),c=w(()=>{var h;const{collapsed:C}=e;if(C!==void 0)return C;if(l){const{collapseModeRef:o,collapsedRef:p}=l;if(o.value==="width")return(h=p.value)!==null&&h!==void 0?h:!1}return!1}),a=w(()=>{const{keyField:h,childrenField:C,disabledField:o}=e;return de(e.items||e.options,{getIgnored(p){return me(p)},getChildren(p){return p[C]},getDisabled(p){return p[o]},getKey(p){var R;return(R=p[h])!==null&&R!==void 0?R:p.name}})}),s=w(()=>new Set(a.value.treeNodes.map(h=>h.key))),{watchProps:i}=e,b=E(null);i!=null&&i.includes("defaultValue")?Re(()=>{b.value=e.defaultValue}):b.value=e.defaultValue;const z=le(e,"value"),k=ue(z,b),f=E([]),O=()=>{f.value=e.defaultExpandAll?a.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||a.value.getPath(k.value,{includeSelf:!1}).keyPath};i!=null&&i.includes("defaultExpandedKeys")?Re(O):O();const _=go(e,["expandedNames","expandedKeys"]),P=ue(_,f),B=w(()=>a.value.treeNodes),$=w(()=>a.value.getPath(k.value).keyPath);J(te,{props:e,mergedCollapsedRef:c,mergedThemeRef:d,mergedValueRef:k,mergedExpandedKeysRef:P,activePathRef:$,mergedClsPrefixRef:t,isHorizontalRef:w(()=>e.mode==="horizontal"),invertedRef:le(e,"inverted"),doSelect:U,toggleExpand:N});function U(h,C){const{"onUpdate:value":o,onUpdateValue:p,onSelect:R}=e;p&&K(p,h,C),o&&K(o,h,C),R&&K(R,h,C),b.value=h}function A(h){const{"onUpdate:expandedKeys":C,onUpdateExpandedKeys:o,onExpandedNamesChange:p,onOpenNamesChange:R}=e;C&&K(C,h),o&&K(o,h),p&&K(p,h),R&&K(R,h),f.value=h}function N(h){const C=Array.from(P.value),o=C.findIndex(p=>p===h);if(~o)C.splice(o,1);else{if(e.accordion&&s.value.has(h)){const p=C.findIndex(R=>s.value.has(R));p>-1&&C.splice(p,1)}C.push(h)}A(C)}const I=h=>{const C=a.value.getPath(h??k.value,{includeSelf:!1}).keyPath;if(!C.length)return;const o=Array.from(P.value),p=new Set([...o,...C]);e.accordion&&s.value.forEach(R=>{p.has(R)&&!C.includes(R)&&p.delete(R)}),A(Array.from(p))},x=w(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:C},self:o}=d.value,{borderRadius:p,borderColorHorizontal:R,fontSize:Ye,itemHeight:Xe,dividerColor:Ze}=o,n={"--n-divider-color":Ze,"--n-bezier":C,"--n-font-size":Ye,"--n-border-color-horizontal":R,"--n-border-radius":p,"--n-item-height":Xe};return h?(n["--n-group-text-color"]=o.groupTextColorInverted,n["--n-color"]=o.colorInverted,n["--n-item-text-color"]=o.itemTextColorInverted,n["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,n["--n-item-text-color-active"]=o.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=o.itemIconColorInverted,n["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=o.arrowColorInverted,n["--n-arrow-color-hover"]=o.arrowColorHoverInverted,n["--n-arrow-color-active"]=o.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=o.itemColorHoverInverted,n["--n-item-color-active"]=o.itemColorActiveInverted,n["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=o.groupTextColor,n["--n-color"]=o.color,n["--n-item-text-color"]=o.itemTextColor,n["--n-item-text-color-hover"]=o.itemTextColorHover,n["--n-item-text-color-active"]=o.itemTextColorActive,n["--n-item-text-color-child-active"]=o.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,n["--n-item-icon-color"]=o.itemIconColor,n["--n-item-icon-color-hover"]=o.itemIconColorHover,n["--n-item-icon-color-active"]=o.itemIconColorActive,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=o.arrowColor,n["--n-arrow-color-hover"]=o.arrowColorHover,n["--n-arrow-color-active"]=o.arrowColorActive,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,n["--n-arrow-color-child-active"]=o.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,n["--n-item-color-hover"]=o.itemColorHover,n["--n-item-color-active"]=o.itemColorActive,n["--n-item-color-active-hover"]=o.itemColorActiveHover,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),n}),g=r?He("menu",w(()=>e.inverted?"a":"b"),x,e):void 0,j=xo(),L=E(null),Y=E(null);let M=!0;const Ie=()=>{var h;M?M=!1:(h=L.value)===null||h===void 0||h.sync({showAllItemsBeforeCalculate:!0})};function Ke(){return document.getElementById(j)}const re=E(-1);function Ue(h){re.value=e.options.length-h}function Ve(h){h||(re.value=-1)}const De=w(()=>{const h=re.value;return{children:h===-1?[]:e.options.slice(h)}}),We=w(()=>{const{childrenField:h,disabledField:C,keyField:o}=e;return de([De.value],{getIgnored(p){return me(p)},getChildren(p){return p[h]},getDisabled(p){return p[C]},getKey(p){var R;return(R=p[o])!==null&&R!==void 0?R:p.name}})}),Ge=w(()=>de([{}]).treeNodes[0]);function qe(){var h;if(re.value===-1)return u(he,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Ge.value,domId:j,isEllipsisPlaceholder:!0});const C=We.value.treeNodes[0],o=$.value,p=!!(!((h=C.children)===null||h===void 0)&&h.some(R=>o.includes(R.key)));return u(he,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:p,tmNode:C,domId:j,rawNodes:C.rawNode.children||[],tmNodes:C.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:_,uncontrolledExpanededKeys:f,mergedExpandedKeys:P,uncontrolledValue:b,mergedValue:k,activePath:$,tmNodes:B,mergedTheme:d,mergedCollapsed:c,cssVars:r?void 0:x,themeClass:g==null?void 0:g.themeClass,overflowRef:L,counterRef:Y,updateCounter:()=>{},onResize:Ie,onUpdateOverflow:Ve,onUpdateCount:Ue,renderCounter:qe,getCounter:Ke,onRender:g==null?void 0:g.onRender,showOption:I,deriveResponsiveState:Ie}},render(){const{mergedClsPrefix:e,mode:t,themeClass:r,onRender:d}=this;d==null||d();const l=()=>this.tmNodes.map(i=>ze(i,this.$props)),a=t==="horizontal"&&this.responsive,s=()=>u("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${t}`,a&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},a?u(Mo,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:l,counter:this.renderCounter}):l());return a?u(bo,{onResize:this.onResize},{default:s}):s()}}),lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},at=G("path",{d:"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ct=G("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 160v288"},null,-1),st=[at,ct],dt=H({name:"BookOutline",render:function(t,r){return Q(),ae("svg",lt,st)}}),ut={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},vt=G("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ht=G("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),mt=G("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1),ft=[vt,ht,mt],Ne=H({name:"HomeOutline",render:function(t,r){return Q(),ae("svg",ut,ft)}}),pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},gt=G("path",{d:"M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),xt=G("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 336l80-80l-80-80"},null,-1),bt=G("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 256h256"},null,-1),Ct=[gt,xt,bt],yt=H({name:"LogOutOutline",render:function(t,r){return Q(),ae("svg",pt,Ct)}}),wt=e=>()=>u($e,null,{default:()=>u(e)});/*! js-cookie v3.0.5 | MIT */function ie(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var d in r)e[d]=r[d]}return e}var zt={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function fe(e,t){function r(l,c,a){if(!(typeof document>"u")){a=ie({},t,a),typeof a.expires=="number"&&(a.expires=new Date(Date.now()+a.expires*864e5)),a.expires&&(a.expires=a.expires.toUTCString()),l=encodeURIComponent(l).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var i in a)a[i]&&(s+="; "+i,a[i]!==!0&&(s+="="+a[i].split(";")[0]));return document.cookie=l+"="+e.write(c,l)+s}}function d(l){if(!(typeof document>"u"||arguments.length&&!l)){for(var c=document.cookie?document.cookie.split("; "):[],a={},s=0;s<c.length;s++){var i=c[s].split("="),b=i.slice(1).join("=");try{var z=decodeURIComponent(i[0]);if(a[z]=e.read(b,z),l===z)break}catch{}}return l?a[l]:a}}return Object.create({set:r,get:d,remove:function(l,c){r(l,"",ie({},c,{expires:-1}))},withAttributes:function(l){return fe(this.converter,ie({},this.attributes,l))},withConverter:function(l){return fe(ie({},this.converter,l),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}fe(zt,{path:"/"});const It=H({__name:"SidebarComponent",setup(e){const t=yo(),r=wo(),d=E({menu:{selectedKey:r.path}}),l=[{label:"主頁",key:oe.home,icon:Ne,route:oe.home},{label:"第二頁",key:"第二頁",icon:dt,children:[{label:"第二頁裡面",key:oe.secondFirst,icon:Ne,route:oe.secondFirst}]},{label:"登出",key:ke.login,icon:yt,route:ke.login}],c=s=>s.map(i=>{const b={label:i.label,icon:wt(i.icon),key:i.key,onClick:i.route?()=>t.push(i.route):void 0};return i.children&&(b.children=c(i.children)),b}),a=c(l);return zo(()=>r.path,s=>{const i=s==="/dashboard/"?oe.home:s;d.value.menu.selectedKey=i},{immediate:!0}),(s,i)=>(Q(),Oe(T(Yo),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,"show-trigger":""},{default:V(()=>[F(T(it),{value:T(d).menu.selectedKey,"onUpdate:value":i[0]||(i[0]=b=>T(d).menu.selectedKey=b),"collapsed-width":64,"collapsed-icon-size":22,options:T(a)},null,8,["value","options"])]),_:1}))}}),kt=H({__name:"default",setup(e){const t=E({dropdown:{show:!1}}),r=[{label:"Theme",key:"Theme"},{label:"登出",key:"登出"}],d=l=>{switch(l.key){case"Theme":return u(Bo);default:return l.label}};return(l,c)=>{const a=Fo,s=It,i=Io("router-view");return Q(),ae("div",null,[F(T(_e),{"content-style":"padding: 24px;"},{default:V(()=>[F(T(Ho),null,{default:V(()=>[F(T(So),{justify:"space-between",align:"center"},{default:V(()=>[F(T(Ro),{width:"150",src:"https://imageapi.click2.travel/upload/enterpriseLogoImage/43/L1T6T8HLNFA6.png?v=2024-07-02"}),F(T(Vo),{justify:"space-between",align:"center"},{default:V(()=>[F(a),F(T(Fe),{show:T(t).dropdown.show,options:r,placement:"bottom-start","render-label":d},{default:V(()=>[F(T($e),{size:30,color:"gray",cursor:"pointer",onClick:c[0]||(c[0]=b=>T(t).dropdown.show=!T(t).dropdown.show)},{default:V(()=>[F(T(Oo))]),_:1})]),_:1},8,["show"])]),_:1})]),_:1})]),_:1})]),_:1}),F(T(_e),{"has-sider":""},{default:V(()=>[F(s),F(i,{class:"w-full m-4",style:{height:"calc(100dvh - 138px)"}},{default:V(({Component:b})=>[F(ko,{name:"pagefade"},{default:V(()=>[(Q(),Oe(_o(b)))]),_:2},1024)]),_:1})]),_:1})])}}});export{kt as default};
