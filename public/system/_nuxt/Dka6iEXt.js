import{f as C,r as A,K as m,o as B,c as U,a as s,j as g,v as f,h as n,b as N,w as R,t as h,am as V,an as w,ao as c,ap as _,k as S,d as E}from"./B0J0WvHt.js";import{u as J}from"./DDfxx48F.js";import{u as L}from"./RezKZYjz.js";import{A as W}from"./rj6rKEoh.js";const D={login:async l=>await J("/auth/login",{method:"POST",body:l,immediate:!1,server:!1,lazy:!0,watch:!1})},K=C({__name:"simpleLogin",async setup(l){let o,a;const u=V(),t=A({email:u.public.email||"",password:u.public.password||""}),{execute:k,data:i,error:d,status:v}=([o,a]=m(()=>D.login(t.value)),o=await o,a(),o),T=async()=>{if(await k(),d.value){alert(d.value.data.msg);return}const p=w(c.AccessToken),e=w(c.RefreshToken);i.value&&(p.value=i.value.token.accessTokenJWT,e.value=i.value.token.refreshTokenJWT,_(W.Home))},{execute:b,data:x}=([o,a]=m(()=>L.showNonBindUser()),o=await o,a(),o);return(p,e)=>{const y=S;return B(),U("div",null,[e[4]||(e[4]=s("p",null,"email",-1)),g(s("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>n(t).email=r),class:"border border-gray-300 p-2 rounded-md",type:"text"},null,512),[[f,n(t).email]]),e[5]||(e[5]=s("p",null,"password",-1)),g(s("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>n(t).password=r),class:"border border-gray-300 p-2 rounded-md",type:"password"},null,512),[[f,n(t).password]]),N(y,{class:"bg-blue-500 text-white p-2 rounded-md",loading:n(v)==="pending",onClick:T},{default:R(()=>e[3]||(e[3]=[E(" login ")])),_:1},8,["loading"]),e[6]||(e[6]=s("div",null,"----分隔線----",-1)),s("button",{class:"bg-blue-500 text-white p-2 rounded-md",onClick:e[2]||(e[2]=r=>n(b)())}," showNonBindUser "),s("div",null,h(n(x)),1)])}}});export{K as default};