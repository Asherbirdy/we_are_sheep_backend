import{a4 as _e,a5 as ne,a6 as Be,a7 as te,a8 as $e,a9 as Re,q as ae,c as E,a as y,d as V,u as D,r as z,b as le,p as ze,l as Te,e as R,f as se,h,m as Me,g as n,aa as oe,i as X,s as re,ab as Ve,t as Ie,k as Fe,ac as Y,ad as B,ae as Le,af as Ne,o as J,ag as $,ah as Q,ai as C,L as W,Z as ie,aj as Oe,ak as ce,al as je,am as j,an as Pe,ao as de,M as ue,O as M,P as Z,Q as w,_ as Ee,T as G,ap as De,U as We,aq as P,J as Ke}from"./index-0604401d.js";import{a as Ue}from"./Dropdown-e60b4708.js";function He(e){const{baseColor:t,textColor2:r,bodyColor:l,cardColor:o,dividerColor:i,actionColor:f,scrollbarColor:d,scrollbarColorHover:c,invertedColor:s}=e;return{textColor:r,textColorInverted:"#FFF",color:l,colorEmbedded:f,headerColor:o,headerColorInverted:s,footerColor:f,footerColorInverted:s,headerBorderColor:i,headerBorderColorInverted:s,footerBorderColor:i,footerBorderColorInverted:s,siderBorderColor:i,siderBorderColorInverted:s,siderColor:o,siderColorInverted:s,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:te(l,d),siderToggleBarColorHover:te(l,c),__invertScrollbar:"true"}}const Ae=_e({name:"Layout",common:ne,peers:{Scrollbar:Be},self:He}),qe=Ae;function Xe(e){const{primaryColor:t,opacityDisabled:r,borderRadius:l,textColor3:o}=e,i="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},$e),{iconColor:o,textColor:"white",loadingColor:t,opacityDisabled:r,railColor:i,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:l,railBorderRadiusMedium:l,railBorderRadiusLarge:l,buttonBorderRadiusSmall:l,buttonBorderRadiusMedium:l,buttonBorderRadiusLarge:l,boxShadowFocus:`0 0 0 2px ${Re(t,{alpha:.2})}`})}const Ye={name:"Switch",common:ne,self:Xe},Je=Ye,bt=ae("n-layout-sider"),Qe={type:String,default:"static"},Ze=E("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[E("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ge={embedded:Boolean,position:Qe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},et=ae("n-layout");function tt(e){return V({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},D.props),Ge),setup(t){const r=z(null),l=z(null),{mergedClsPrefixRef:o,inlineThemeDisabled:i}=le(t),f=D("Layout","-layout",Ze,qe,t,o);function d(v,g){if(t.nativeScrollbar){const{value:p}=r;p&&(g===void 0?p.scrollTo(v):p.scrollTo(v,g))}else{const{value:p}=l;p&&p.scrollTo(v,g)}}ze(et,t);let c=0,s=0;const x=v=>{var g;const p=v.target;c=p.scrollLeft,s=p.scrollTop,(g=t.onScroll)===null||g===void 0||g.call(t,v)};Te(()=>{if(t.nativeScrollbar){const v=r.value;v&&(v.scrollTop=s,v.scrollLeft=c)}});const S={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},u={scrollTo:d},m=R(()=>{const{common:{cubicBezierEaseInOut:v},self:g}=f.value;return{"--n-bezier":v,"--n-color":t.embedded?g.colorEmbedded:g.color,"--n-text-color":g.textColor}}),b=i?se("layout",R(()=>t.embedded?"e":""),m,t):void 0;return Object.assign({mergedClsPrefix:o,scrollableElRef:r,scrollbarInstRef:l,hasSiderStyle:S,mergedTheme:f,handleNativeElScroll:x,cssVars:i?void 0:m,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender},u)},render(){var t;const{mergedClsPrefix:r,hasSider:l}=this;(t=this.onRender)===null||t===void 0||t.call(this);const o=l?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return h("div",{class:i,style:this.cssVars},this.nativeScrollbar?h("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,o],onScroll:this.handleNativeElScroll},this.$slots):h(Me,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,o]}),this.$slots))}})}const vt=tt(!1),ot=E("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[n("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),n("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),n("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),E("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[oe({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),n("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),n("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),n("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),X("&:focus",[n("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),y("round",[n("rail","border-radius: calc(var(--n-rail-height) / 2);",[n("button","border-radius: calc(var(--n-button-height) / 2);")])]),re("disabled",[re("icon",[y("rubber-band",[y("pressed",[n("rail",[n("button","max-width: var(--n-button-width-pressed);")])]),n("rail",[X("&:active",[n("button","max-width: var(--n-button-width-pressed);")])]),y("active",[y("pressed",[n("rail",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),n("rail",[X("&:active",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),y("active",[n("rail",[n("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),n("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[n("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[oe()]),n("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),y("active",[n("rail","background-color: var(--n-rail-color-active);")]),y("loading",[n("rail",`
 cursor: wait;
 `)]),y("disabled",[n("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),rt=Object.assign(Object.assign({},D.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let F;const nt=V({name:"Switch",props:rt,slots:Object,setup(e){F===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?F=CSS.supports("width","max(1px)"):F=!1:F=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=le(e),l=D("Switch","-switch",ot,Je,e,t),o=Ve(e),{mergedSizeRef:i,mergedDisabledRef:f}=o,d=z(e.defaultValue),c=Ie(e,"value"),s=Fe(c,d),x=R(()=>s.value===e.checkedValue),S=z(!1),u=z(!1),m=R(()=>{const{railStyle:a}=e;if(a)return a({focused:u.value,checked:x.value})});function b(a){const{"onUpdate:value":L,onChange:N,onUpdateValue:O}=e,{nTriggerFormInput:K,nTriggerFormChange:U}=o;L&&J(L,a),O&&J(O,a),N&&J(N,a),d.value=a,K(),U()}function v(){const{nTriggerFormFocus:a}=o;a()}function g(){const{nTriggerFormBlur:a}=o;a()}function p(){e.loading||f.value||(s.value!==e.checkedValue?b(e.checkedValue):b(e.uncheckedValue))}function he(){u.value=!0,v()}function fe(){u.value=!1,g(),S.value=!1}function be(a){e.loading||f.value||a.key===" "&&(s.value!==e.checkedValue?b(e.checkedValue):b(e.uncheckedValue),S.value=!1)}function ve(a){e.loading||f.value||a.key===" "&&(a.preventDefault(),S.value=!0)}const ee=R(()=>{const{value:a}=i,{self:{opacityDisabled:L,railColor:N,railColorActive:O,buttonBoxShadow:K,buttonColor:U,boxShadowFocus:ge,loadingColor:me,textColor:pe,iconColor:we,[$("buttonHeight",a)]:k,[$("buttonWidth",a)]:ye,[$("buttonWidthPressed",a)]:xe,[$("railHeight",a)]:_,[$("railWidth",a)]:I,[$("railBorderRadius",a)]:Ce,[$("buttonBorderRadius",a)]:Se},common:{cubicBezierEaseInOut:ke}}=l.value;let H,A,q;return F?(H=`calc((${_} - ${k}) / 2)`,A=`max(${_}, ${k})`,q=`max(${I}, calc(${I} + ${k} - ${_}))`):(H=Q((C(_)-C(k))/2),A=Q(Math.max(C(_),C(k))),q=C(_)>C(k)?I:Q(C(I)+C(k)-C(_))),{"--n-bezier":ke,"--n-button-border-radius":Se,"--n-button-box-shadow":K,"--n-button-color":U,"--n-button-width":ye,"--n-button-width-pressed":xe,"--n-button-height":k,"--n-height":A,"--n-offset":H,"--n-opacity-disabled":L,"--n-rail-border-radius":Ce,"--n-rail-color":N,"--n-rail-color-active":O,"--n-rail-height":_,"--n-rail-width":I,"--n-width":q,"--n-box-shadow-focus":ge,"--n-loading-color":me,"--n-text-color":pe,"--n-icon-color":we}}),T=r?se("switch",R(()=>i.value[0]),ee,e):void 0;return{handleClick:p,handleBlur:fe,handleFocus:he,handleKeyup:be,handleKeydown:ve,mergedRailStyle:m,pressed:S,mergedClsPrefix:t,mergedValue:s,checked:x,mergedDisabled:f,cssVars:r?void 0:ee,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:r,mergedRailStyle:l,onRender:o,$slots:i}=this;o==null||o();const{checked:f,unchecked:d,icon:c,"checked-icon":s,"unchecked-icon":x}=i,S=!(Y(c)&&Y(s)&&Y(x));return h("div",{role:"switch","aria-checked":r,class:[`${e}-switch`,this.themeClass,S&&`${e}-switch--icon`,r&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},h("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:l},B(f,u=>B(d,m=>u||m?h("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},h("div",{class:`${e}-switch__rail-placeholder`},h("div",{class:`${e}-switch__button-placeholder`}),u),h("div",{class:`${e}-switch__rail-placeholder`},h("div",{class:`${e}-switch__button-placeholder`}),m)):null)),h("div",{class:`${e}-switch__button`},B(c,u=>B(s,m=>B(x,b=>h(Le,null,{default:()=>this.loading?h(Ne,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(m||u)?h("div",{class:`${e}-switch__button-icon`,key:m?"checked-icon":"icon"},m||u):!this.checked&&(b||u)?h("div",{class:`${e}-switch__button-icon`,key:b?"unchecked-icon":"icon"},b||u):null})))),B(f,u=>u&&h("div",{key:"checked",class:`${e}-switch__checked`},u)),B(d,u=>u&&h("div",{key:"unchecked",class:`${e}-switch__unchecked`},u)))))}}),at={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},lt=Oe('<path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M445.57 172.14c-16.06.1-14.48 29.73-34.49 15.75c-7.43-5.18-12-12.71-21.33-15c-8.15-2-16.5.08-24.55 1.47c-9.15 1.58-20 2.29-26.94 9.22c-6.71 6.67-10.26 15.62-17.4 22.33c-13.81 13-19.64 27.19-10.7 45.57c8.6 17.67 26.59 27.26 46 26c19.07-1.27 38.88-12.33 38.33 15.38c-.2 9.8 1.85 16.6 4.86 25.71c2.79 8.4 2.6 16.54 3.24 25.21c1.18 16.2 4.16 34.36 12.2 48.67l15-21.16c1.85-2.62 5.72-6.29 6.64-9.38c1.63-5.47-1.58-14.87-1.95-21s-.19-12.34-1.13-18.47c-1.32-8.59-6.4-16.64-7.1-25.13c-1.29-15.81 1.6-28.43-10.58-41.65c-11.76-12.75-29-15.81-45.47-13.22c-8.3 1.3-41.71 6.64-28.3-12.33c2.65-3.73 7.28-6.79 10.26-10.34c2.59-3.09 4.84-8.77 7.88-11.18s17-5.18 21-3.95s8.17 7 11.64 9.56a49.89 49.89 0 0 0 21.81 9.36c13.66 2 42.22-5.94 42-23.46c-.04-8.4-7.84-20.1-10.92-27.96z" fill="currentColor"></path><path d="M287.45 316.3c-5.33-22.44-35.82-29.94-52.26-42.11c-9.45-7-17.86-17.81-30.27-18.69c-5.72-.41-10.51.83-16.18-.64c-5.2-1.34-9.28-4.14-14.82-3.41c-10.35 1.36-16.88 12.42-28 10.92c-10.55-1.42-21.42-13.76-23.82-23.81c-3.08-12.92 7.14-17.11 18.09-18.26c4.57-.48 9.7-1 14.09.67c5.78 2.15 8.51 7.81 13.7 10.67c9.73 5.33 11.7-3.19 10.21-11.83c-2.23-12.94-4.83-18.22 6.71-27.12c8-6.14 14.84-10.58 13.56-21.61c-.76-6.48-4.31-9.41-1-15.86c2.51-4.91 9.4-9.34 13.89-12.27c11.59-7.56 49.65-7 34.1-28.16c-4.57-6.21-13-17.31-21-18.83c-10-1.89-14.44 9.27-21.41 14.19c-7.2 5.09-21.22 10.87-28.43 3c-9.7-10.59 6.43-14.07 10-21.46s-8.27-21.36-14.61-24.9l-29.81 33.43a41.52 41.52 0 0 0 8.34 31.86c5.93 7.63 15.37 10.08 15.8 20.5c.42 10-1.14 15.12-7.68 22.15c-2.83 3-4.83 7.26-7.71 10.07c-3.53 3.43-2.22 2.38-7.73 3.32c-10.36 1.75-19.18 4.45-29.19 7.21C95.34 199.94 93.8 172.69 86.2 162l-25 20.19c-.27 3.31 4.1 9.4 5.29 13c6.83 20.57 20.61 36.48 29.51 56.16c9.37 20.84 34.53 15.06 45.64 33.32c9.86 16.2-.67 36.71 6.71 53.67c5.36 12.31 18 15 26.72 24c8.91 9.09 8.72 21.53 10.08 33.36a305.22 305.22 0 0 0 7.45 41.28c1.21 4.69 2.32 10.89 5.53 14.76c2.2 2.66 9.75 4.95 6.7 5.83c4.26.7 11.85 4.68 15.4 1.76c4.68-3.84 3.43-15.66 4.24-21c2.43-15.9 10.39-31.45 21.13-43.35c10.61-11.74 25.15-19.69 34.11-33c8.73-12.98 11.36-30.49 7.74-45.68zm-33.39 26.32c-6 10.71-19.36 17.88-27.95 26.39c-2.33 2.31-7.29 10.31-10.21 8.58c-2.09-1.24-2.8-11.62-3.57-14a61.17 61.17 0 0 0-21.71-29.95c-3.13-2.37-10.89-5.45-12.68-8.7c-2-3.53-.2-11.86-.13-15.7c.11-5.6-2.44-14.91-1.06-20c1.6-5.87-1.48-2.33 3.77-3.49c2.77-.62 14.21 1.39 17.66 2.11c5.48 1.14 8.5 4.55 12.82 8c11.36 9.11 23.87 16.16 36.6 23.14c9.86 5.46 12.76 12.37 6.46 23.62z" fill="currentColor"></path><path d="M184.46 67.09c4.74 4.63 9.2 10.11 16.27 10.57c6.69.45 13-3.17 18.84 1.38c6.48 5 11.15 11.33 19.75 12.89c8.32 1.51 17.13-3.35 19.19-11.86c2-8.11-2.31-16.93-2.57-25.07c0-1.13.61-6.15-.17-7c-.58-.64-5.42.08-6.16.1q-8.13.24-16.22 1.12a207.1 207.1 0 0 0-57.18 14.65c2.43 1.68 5.48 2.35 8.25 3.22z" fill="currentColor"></path><path d="M356.4 123.27c8.49 0 17.11-3.8 14.37-13.62c-2.3-8.23-6.22-17.16-15.76-12.72c-6.07 2.82-14.67 10-15.38 17.12c-.81 8.08 11.11 9.22 16.77 9.22z" fill="currentColor"></path><path d="M349.62 166.24c8.67 5.19 21.53 2.75 28.07-4.66c5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0 1 10.82 4.41c3.8 3.93 3.05 7.62 3.86 12.54c1.81 11.05 13.66.63 16.75-3.65c2-2.79 4.71-6.93 3.8-10.56c-.84-3.39-4.8-7-6.56-10.11c-5.14-9-9.37-19.47-17.07-26.74c-7.41-7-16.52-6.19-23.55 1.08c-5.76 6-12.45 10.75-16.39 18.05c-2.78 5.13-5.91 7.58-11.54 8.91c-3.1.73-6.64 1-9.24 3.08c-7.24 5.7-3.12 19.39 3.74 23.51z" fill="currentColor"></path>',6),st=[lt],it=V({name:"EarthOutline",render:function(t,r){return W(),ie("svg",at,st)}}),gt=V({__name:"LocalePopselectComponent",setup(e){const t=ce(),{handleChangeLocales:r}=t,{locale:l}=je(),o=z({status:null}),i=[{label:"繁體中文",value:j.zhTW},{label:"English",value:j.en}],f=R(()=>{const c=i.find(s=>s.value===o.value.status);return c?c.label:""}),d=()=>{const c=l.value;o.value.status=j[c]||j.zhTW};return Pe(()=>o.value.status,c=>{c&&r(c)}),de(()=>d()),(c,s)=>(W(),ue(w(Ue),{value:w(o).status,"onUpdate:value":s[0]||(s[0]=x=>w(o).status=x),options:i,scrollable:""},{default:M(()=>[Z(w(We),{strong:"",tertiary:""},{icon:M(()=>[Z(w(Ee),null,{default:M(()=>[Z(w(it))]),_:1})]),default:M(()=>[G(" "+De(w(f)),1)]),_:1})]),_:1},8,["value"]))}}),ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},dt=P("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[P("path",{d:"M4 6h16"}),P("path",{d:"M4 12h16"}),P("path",{d:"M4 18h16"})],-1),ut=[dt],mt=V({name:"Menu2",render:function(t,r){return W(),ie("svg",ct,ut)}}),pt=V({__name:"ThemeSwichComponent",setup(e){const t=ce(),{getThemeMode:r}=Ke(t),{handleChangeThemeMode:l}=t,o=z({switch:{themeMode:!1}}),i=()=>{if(!r.value){o.value.switch.themeMode=!1;return}o.value.switch.themeMode=!0};return de(()=>i()),(f,d)=>(W(),ue(w(nt),{value:w(o).switch.themeMode,"onUpdate:value":[d[0]||(d[0]=c=>w(o).switch.themeMode=c),d[1]||(d[1]=c=>w(l)())]},{checked:M(()=>d[2]||(d[2]=[G(" 暗色模式 ")])),unchecked:M(()=>d[3]||(d[3]=[G(" 一般模式 ")])),_:1},8,["value"]))}});export{mt as M,vt as N,pt as _,bt as a,et as b,gt as c,tt as d,qe as l,Qe as p};
