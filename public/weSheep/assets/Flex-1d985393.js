import{aO as g,d as m,b as p,u as c,aP as d,e as x,aQ as h,aR as y,h as v,ac as b,aS as R,ae as u}from"./index-596b816f.js";function w(){return g}const z={name:"Flex",self:w},C=z,j=Object.assign(Object.assign({},c.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),P=m({name:"Flex",props:j,setup(r){const{mergedClsPrefixRef:t,mergedRtlRef:l}=p(r),a=c("Flex","-flex",void 0,C,r,t);return{rtlEnabled:d("Flex",l,t),mergedClsPrefix:t,margin:x(()=>{const{size:e}=r;if(Array.isArray(e))return{horizontal:e[0],vertical:e[1]};if(typeof e=="number")return{horizontal:e,vertical:e};const{self:{[b("gap",e)]:s}}=a.value,{row:n,col:i}=R(s);return{horizontal:u(i),vertical:u(n)}})}},render(){const{vertical:r,reverse:t,align:l,inline:a,justify:o,margin:e,wrap:s,mergedClsPrefix:n,rtlEnabled:i}=this,f=h(y(this),!1);return f.length?v("div",{role:"none",class:[`${n}-flex`,i&&`${n}-flex--rtl`],style:{display:a?"inline-flex":"flex",flexDirection:(()=>r&&!t?"column":r&&t?"column-reverse":!r&&t?"row-reverse":"row")(),justifyContent:o,flexWrap:!s||r?"nowrap":"wrap",alignItems:l,gap:`${e.vertical}px ${e.horizontal}px`}},f):null}});export{P as N};