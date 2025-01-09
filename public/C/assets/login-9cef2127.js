import{h as T,N,d as z,M as L,e as P,f as u,_ as $,g as k}from"./ThemeSwichComponent.vue_vue_type_script_setup_true_lang-03cf2eff.js";import{s as R,w as h,d as g,f as V,g as _,j as m,C as j,h as C,ab as B,r as D,a6 as S,W as H,a2 as I,a3 as s,a4 as n,a5 as e,a7 as f,ac as M}from"./index-a4d46aa6.js";const O=T(!0),E=R("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[h("&:first-child","margin-top: 0;"),h("&:last-child","margin-bottom: 0;")]),F=Object.assign(Object.assign({},_.props),{depth:[String,Number]}),W=g({name:"P",props:F,setup(o){const{mergedClsPrefixRef:a,inlineThemeDisabled:l}=V(o),d=_("Typography","-p",E,B,o,a),r=m(()=>{const{depth:i}=o,c=i||"1",{common:{cubicBezierEaseInOut:p},self:{pFontSize:b,pLineHeight:w,pMargin:v,pTextColor:x,[`pTextColor${c}Depth`]:y}}=d.value;return{"--n-bezier":p,"--n-font-size":b,"--n-line-height":w,"--n-margin":v,"--n-text-color":i===void 0?x:y}}),t=l?j("p",m(()=>`${o.depth||""}`),r,o):void 0;return{mergedClsPrefix:a,cssVars:l?void 0:r,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var o;return(o=this.onRender)===null||o===void 0||o.call(this),C("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),G=g({__name:"login",setup(o){const a=D({dropdown:{show:!1}}),l=[{label:"Theme",key:"Theme"},{label:"其他",key:"The其他me"}],d=r=>{switch(r.key){case"Theme":return C($);default:return r.label}};return(r,t)=>{const i=k,c=S("router-view");return H(),I(e(u),{"content-style":`
      padding: 24px;
      margin: auto;
      max-width: 1200px;`},{default:s(()=>[n(e(P),null,{default:s(()=>[n(e(f),{justify:"space-between",align:"center"},{default:s(()=>[n(e(W),null,{default:s(()=>t[1]||(t[1]=[M("Logo")])),_:1}),n(e(f),{align:"center"},{default:s(()=>[n(i),n(e(N),{show:e(a).dropdown.show,options:l,placement:"bottom-start","render-label":d},{default:s(()=>[n(e(z),{size:30,color:"gray",cursor:"pointer",onClick:t[0]||(t[0]=p=>e(a).dropdown.show=!e(a).dropdown.show)},{default:s(()=>[n(e(L),{"mt-2":""})]),_:1})]),_:1},8,["show"])]),_:1})]),_:1})]),_:1}),n(e(u),null,{default:s(()=>[n(e(O),{"content-style":`
          height: calc(100dvh - 106px)`},{default:s(()=>[n(c)]),_:1})]),_:1})]),_:1})}}});export{G as default};
