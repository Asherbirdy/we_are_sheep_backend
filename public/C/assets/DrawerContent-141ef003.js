import{d as D,r as T,c2 as ge,c3 as ve,aj as we,b6 as pe,h as a,c4 as ye,c5 as Ce,j as K,e as A,b as q,bc as Se,C as $e,L as ze,aK as xe,c6 as Be,p as j,bK as U,bL as _,c7 as ke,_ as G,G as Re,m as J,c8 as L,c9 as Ee,ca as Oe,cb as Fe,bM as Te,i,cc as N,c as y,a as R,g as H,cd as Ae,bF as Me,u as Q,k as X,t as Y,ce as We,f as He,cf as Ie,cg as Pe,ch as je,o as I,ci as De,n as V,aI as Ne,bw as Ue}from"./index-de4a6d61.js";const E="v-hidden",Le=Ce("[v-hidden]",{display:"none!important"}),at=D({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const r=T(null),g=T(null);function b(h){const{value:f}=r,{getCounter:v,getTail:C}=e;let m;if(v!==void 0?m=v():m=g.value,!f||!m)return;m.hasAttribute(E)&&m.removeAttribute(E);const{children:O}=f;if(h.showAllItemsBeforeCalculate)for(const u of O)u.hasAttribute(E)&&u.removeAttribute(E);const B=f.offsetWidth,z=[],d=t.tail?C==null?void 0:C():null;let k=d?d.offsetWidth:0,M=!1;const P=f.children.length-(t.tail?1:0);for(let u=0;u<P-1;++u){if(u<0)continue;const x=O[u];if(M){x.hasAttribute(E)||x.setAttribute(E,"");continue}else x.hasAttribute(E)&&x.removeAttribute(E);const p=x.offsetWidth;if(k+=p,z[u]=p,k>B){const{updateCounter:o}=e;for(let s=u;s>=0;--s){const c=P-1-s;o!==void 0?o(c):m.textContent=`${c}`;const n=m.offsetWidth;if(k-=z[s],k+n<=B||s===0){M=!0,u=s-1,d&&(u===-1?(d.style.maxWidth=`${B-n}px`,d.style.boxSizing="border-box"):d.style.maxWidth="");const{onUpdateCount:l}=e;l&&l(c);break}}}}const{onUpdateOverflow:F}=e;M?F!==void 0&&F(!0):(F!==void 0&&F(!1),m.setAttribute(E,""))}const $=ge();return Le.mount({id:"vueuc/overflow",head:!0,anchorMetaName:ve,ssr:$}),we(()=>b({showAllItemsBeforeCalculate:!1})),{selfRef:r,counterRef:g,sync:b}},render(){const{$slots:e}=this;return pe(()=>this.sync({showAllItemsBeforeCalculate:!1})),a("div",{class:"v-overflow",ref:"selfRef"},[ye(e,"default"),e.counter?e.counter():a("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),_e=D({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=T(!!e.show),r=T(null),g=K(L);let b=0,$="",h=null;const f=T(!1),v=T(!1),C=A(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:m,mergedRtlRef:O}=q(e),B=Se("Drawer",O,m),z=o,d=n=>{v.value=!0,b=C.value?n.clientY:n.clientX,$=document.body.style.cursor,document.body.style.cursor=C.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",p),document.body.addEventListener("mouseleave",z),document.body.addEventListener("mouseup",o)},k=()=>{h!==null&&(window.clearTimeout(h),h=null),v.value?f.value=!0:h=window.setTimeout(()=>{f.value=!0},300)},M=()=>{h!==null&&(window.clearTimeout(h),h=null),f.value=!1},{doUpdateHeight:P,doUpdateWidth:F}=g,u=n=>{const{maxWidth:l}=e;if(l&&n>l)return l;const{minWidth:w}=e;return w&&n<w?w:n},x=n=>{const{maxHeight:l}=e;if(l&&n>l)return l;const{minHeight:w}=e;return w&&n<w?w:n};function p(n){var l,w;if(v.value)if(C.value){let S=((l=r.value)===null||l===void 0?void 0:l.offsetHeight)||0;const W=b-n.clientY;S+=e.placement==="bottom"?W:-W,S=x(S),P(S),b=n.clientY}else{let S=((w=r.value)===null||w===void 0?void 0:w.offsetWidth)||0;const W=b-n.clientX;S+=e.placement==="right"?W:-W,S=u(S),F(S),b=n.clientX}}function o(){v.value&&(b=0,v.value=!1,document.body.style.cursor=$,document.body.removeEventListener("mousemove",p),document.body.removeEventListener("mouseup",o),document.body.removeEventListener("mouseleave",z))}$e(()=>{e.show&&(t.value=!0)}),ze(()=>e.show,n=>{n||o()}),xe(()=>{o()});const s=A(()=>{const{show:n}=e,l=[[_,n]];return e.showMask||l.push([Te,e.onClickoutside,void 0,{capture:!0}]),l});function c(){var n;t.value=!1,(n=e.onAfterLeave)===null||n===void 0||n.call(e)}return Be(A(()=>e.blockScroll&&t.value)),j(Ee,r),j(Oe,null),j(Fe,null),{bodyRef:r,rtlEnabled:B,mergedClsPrefix:g.mergedClsPrefixRef,isMounted:g.isMountedRef,mergedTheme:g.mergedThemeRef,displayed:t,transitionName:A(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:c,bodyDirectives:s,handleMousedownResizeTrigger:d,handleMouseenterResizeTrigger:k,handleMouseleaveResizeTrigger:M,isDragging:v,isHoverOnResizeTrigger:f}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?U(a("div",{role:"none"},a(ke,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>a(G,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>U(a("div",Re(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?a("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?a("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):a(J,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[_,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Xe,cubicBezierEaseOut:Ye}=N;function Ve({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Xe}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ye}`}),i(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:Ke,cubicBezierEaseOut:qe}=N;function Ge({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ke}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${qe}`}),i(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Je,cubicBezierEaseOut:Qe}=N;function Ze({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Je}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Qe}`}),i(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:et,cubicBezierEaseOut:tt}=N;function rt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${et}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${tt}`}),i(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const ot=i([y("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Ze(),Ge(),rt(),Ve(),R("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),R("native-scrollbar",[y("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),H("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[R("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),y("drawer-content-wrapper",`
 box-sizing: border-box;
 `),y("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[R("native-scrollbar",[y("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),y("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),y("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),y("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[H("main",`
 flex: 1;
 `),H("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),y("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),R("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[H("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),R("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[H("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),R("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[H("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),R("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[H("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),i("body",[i(">",[y("drawer-container",`
 position: fixed;
 `)])]),y("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[i("> *",`
 pointer-events: all;
 `)]),y("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[R("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Ae({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),nt=Object.assign(Object.assign({},Q.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),lt=D({name:"Drawer",inheritAttrs:!1,props:nt,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:g}=q(e),b=Me(),$=Q("Drawer","-drawer",ot,De,e,t),h=T(e.defaultWidth),f=T(e.defaultHeight),v=X(Y(e,"width"),h),C=X(Y(e,"height"),f),m=A(()=>{const{placement:o}=e;return o==="top"||o==="bottom"?"":V(v.value)}),O=A(()=>{const{placement:o}=e;return o==="left"||o==="right"?"":V(C.value)}),B=o=>{const{onUpdateWidth:s,"onUpdate:width":c}=e;s&&I(s,o),c&&I(c,o),h.value=o},z=o=>{const{onUpdateHeight:s,"onUpdate:width":c}=e;s&&I(s,o),c&&I(c,o),f.value=o},d=A(()=>[{width:m.value,height:O.value},e.drawerStyle||""]);function k(o){const{onMaskClick:s,maskClosable:c}=e;c&&u(!1),s&&s(o)}function M(o){k(o)}const P=We();function F(o){var s;(s=e.onEsc)===null||s===void 0||s.call(e),e.show&&e.closeOnEsc&&je(o)&&(P.value||u(!1))}function u(o){const{onHide:s,onUpdateShow:c,"onUpdate:show":n}=e;c&&I(c,o),n&&I(n,o),s&&!o&&I(s,o)}j(L,{isMountedRef:b,mergedThemeRef:$,mergedClsPrefixRef:t,doUpdateShow:u,doUpdateHeight:z,doUpdateWidth:B});const x=A(()=>{const{common:{cubicBezierEaseInOut:o,cubicBezierEaseIn:s,cubicBezierEaseOut:c},self:{color:n,textColor:l,boxShadow:w,lineHeight:S,headerPadding:W,footerPadding:Z,borderRadius:ee,bodyPadding:te,titleFontSize:re,titleTextColor:oe,titleFontWeight:ne,headerBorderBottom:ie,footerBorderTop:se,closeIconColor:ae,closeIconColorHover:le,closeIconColorPressed:de,closeColorHover:ce,closeColorPressed:ue,closeIconSize:he,closeSize:fe,closeBorderRadius:be,resizableTriggerColorHover:me}}=$.value;return{"--n-line-height":S,"--n-color":n,"--n-border-radius":ee,"--n-text-color":l,"--n-box-shadow":w,"--n-bezier":o,"--n-bezier-out":c,"--n-bezier-in":s,"--n-header-padding":W,"--n-body-padding":te,"--n-footer-padding":Z,"--n-title-text-color":oe,"--n-title-font-size":re,"--n-title-font-weight":ne,"--n-header-border-bottom":ie,"--n-footer-border-top":se,"--n-close-icon-color":ae,"--n-close-icon-color-hover":le,"--n-close-icon-color-pressed":de,"--n-close-size":fe,"--n-close-color-hover":ce,"--n-close-color-pressed":ue,"--n-close-icon-size":he,"--n-close-border-radius":be,"--n-resize-trigger-color-hover":me}}),p=g?He("drawer",void 0,x,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:d,handleOutsideClick:M,handleMaskClick:k,handleEsc:F,mergedTheme:$,cssVars:g?void 0:x,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,isMounted:b}},render(){const{mergedClsPrefix:e}=this;return a(Pe,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),U(a("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?a(G,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?a("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,a(_e,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[Ie,{zIndex:this.zIndex,enabled:this.show}]])}})}}),it={title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},dt=D({name:"DrawerContent",props:it,slots:Object,setup(){const e=K(L,null);e||Ne("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:g,bodyClass:b,bodyStyle:$,bodyContentClass:h,bodyContentStyle:f,headerClass:v,headerStyle:C,footerClass:m,footerStyle:O,scrollbarProps:B,closable:z,$slots:d}=this;return a("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},d.header||e||z?a("div",{class:[`${t}-drawer-header`,v],style:C,role:"none"},a("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},d.header!==void 0?d.header():e),z&&a(Ue,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?a("div",{class:[`${t}-drawer-body`,b],style:$,role:"none"},a("div",{class:[`${t}-drawer-body-content-wrapper`,h],style:f,role:"none"},d)):a(J,Object.assign({themeOverrides:g.peerOverrides.Scrollbar,theme:g.peers.Scrollbar},B,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,h],contentStyle:f}),d),d.footer?a("div",{class:[`${t}-drawer-footer`,m],style:O,role:"none"},d.footer()):null)}});export{dt as N,at as V,lt as a};
