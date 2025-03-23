import{u as S}from"./useQuery-06f3632d.js";import{c as a,i,g,d as k,b as I,b3 as j,h as A,j as M,b4 as G,b5 as R,r as $,e as U,an as P,ao as T,L as y,M as C,O as s,T as b,ap as x,Q as t,U as V,W as B,R as q,b6 as F,S as K,Z as L,P as p,aG as _,aJ as O,$ as Q,b7 as E,Y as J}from"./index-20f06149.js";import{u as W,a as Y}from"./index-d2b297fd.js";import{u as D}from"./useUserApi-603602f9.js";import{N}from"./text-8db89dde.js";const Z=a("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[i(">",[a("input",[i("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),i("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),a("button",[i("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[g("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),i("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[g("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),i("*",[i("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[i(">",[a("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),a("base-selection",[a("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),a("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),i("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[i(">",[a("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),a("base-selection",[a("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),a("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),g("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),z={},H=k({name:"InputGroup",props:z,setup(d){const{mergedClsPrefixRef:r}=I(d);return j("-input-group",Z,r),{mergedClsPrefix:r}},render(){const{mergedClsPrefix:d}=this;return A("div",{class:`${d}-input-group`},this.$slots)}});function X(){const d=M(G,null);return d===null&&R("use-dialog","No outer <n-dialog-provider /> founded."),d}const tt=k({__name:"EmailVerifyComponent",setup(d){const r=$({countDownTime:60,countDown:0}),n=W("emailVerificationCountdown",0),{pause:v,resume:f}=Y(()=>{if(n.value<=0){v();return}n.value--},1e3,{immediate:!1}),o=async m=>{await B.sendVerifyEmail.api(),r.value.countDown=m,n.value=m,f()},h=()=>{n.value>0&&(r.value.countDown=n.value,f())},w=U(()=>r.value.countDown>0);return P(n,m=>{r.value.countDown=m}),T(()=>h()),(m,u)=>(y(),C(t(V),{type:"primary",ghost:"",disabled:t(w),onClick:u[0]||(u[0]=e=>o(t(r).countDownTime))},{default:s(()=>[b(x(t(r).countDown>0?`${t(r).countDown} 秒`:"傳送驗證碼"),1)]),_:1},8,["disabled"]))}}),et={class:"flex justify-center items-center"},nt=k({__name:"emailVerify",setup(d){const{data:r}=S({queryKey:[D.showMe.queryKey],queryFn:()=>D.showMe.api()}),n=q(),v=X(),f=F(),o=$({data:{verifyCode:""},page:{current:"emailVerify"},disabled:{emailVerify:!0}});P(o.value.data,u=>{const e=!!u.verifyCode;o.value.disabled.emailVerify=!e});const h=async()=>{var u,e;(e=(u=r.value)==null?void 0:u.user)!=null&&e.emailVerified&&(o.value.page.current="emailAlreadyVerify")},{mutate:w,isPending:m}=K({mutationFn:async()=>await B.verifyEmail.api({OTP:o.value.data.verifyCode}),onSuccess:()=>{E(),v.success({title:"綁定成功",content:"再請回首頁重新登入",positiveText:"回首頁",closable:!1,onPositiveClick:()=>{E(),n.push(J.login)}})},onError:()=>{o.value.data.verifyCode="",f.error({title:"驗證失敗",content:"請重新輸入驗證碼",duration:3e3})}});return T(()=>h()),(u,e)=>(y(),L("div",et,[p(t(Q),{vertical:"",justify:"center"},{default:s(()=>[t(o).page.current==="emailVerify"?(y(),C(t(_),{key:0,title:"驗證Email",class:"min-w-[290px]"},{action:s(()=>[p(t(V),{block:"",type:"primary",disabled:t(o).disabled.emailVerify,loading:t(m),onClick:e[1]||(e[1]=l=>t(w)())},{default:s(()=>e[3]||(e[3]=[b(" 驗證 ")])),_:1},8,["disabled","loading"])]),default:s(()=>[p(t(N),null,{default:s(()=>{var l,c;return[b(x(`請點擊「傳送驗證碼」，並前往您的Email信箱${(c=(l=t(r))==null?void 0:l.user)==null?void 0:c.email}，輸入驗證碼以完成驗證。`),1)]}),_:1}),p(t(H),{class:"mt-2"},{default:s(()=>[p(t(O),{value:t(o).data.verifyCode,"onUpdate:value":e[0]||(e[0]=l=>t(o).data.verifyCode=l),placeholder:"請輸入驗證碼"},null,8,["value"]),p(tt)]),_:1})]),_:1})):(y(),C(t(_),{key:1,title:"Email已驗證",class:"min-w-[290px]"},{default:s(()=>[p(t(N),null,{default:s(()=>{var l,c;return[b(x(`${(c=(l=t(r))==null?void 0:l.user)==null?void 0:c.email}已驗證成功。`),1)]}),_:1}),p(t(V),{class:"mt-2",block:"",type:"primary",onClick:e[2]||(e[2]=l=>t(n).back())},{default:s(()=>e[4]||(e[4]=[b(" 返回 ")])),_:1})]),_:1}))]),_:1})]))}});export{nt as default};
