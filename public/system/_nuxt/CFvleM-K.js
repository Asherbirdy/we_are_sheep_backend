import{f as C,H as U,I as m,o as h,c as A,a as o,ac as w,ah as f,h as n,b as N,w as R,t as V,ai as _,aj as g,ak as c,al as E,J,d as S}from"./C5-ExHym.js";import{u as k}from"./B9WqHi4_.js";import{A as L}from"./xm1msvh1.js";const W={login:async l=>await k("/auth/login",{method:"POST",body:l,immediate:!1,server:!1,lazy:!0,watch:!1})},z={showNonBindUser:async()=>await k("/users/showNonBindUser",{method:"GET",server:!1,immediate:!1,lazy:!0})},q=C({__name:"simpleLogin",async setup(l){let s,a;const u=_(),t=U({email:u.public.email||"",password:u.public.password||""}),{execute:v,data:i,error:d,status:T}=([s,a]=m(()=>W.login(t.value)),s=await s,a(),s),b=async()=>{if(await v(),d.value){alert(d.value.data.msg);return}const p=g(c.AccessToken),e=g(c.RefreshToken);i.value&&(p.value=i.value.token.accessTokenJWT,e.value=i.value.token.refreshTokenJWT,E(L.Home))},{execute:y,data:x}=([s,a]=m(()=>z.showNonBindUser()),s=await s,a(),s);return(p,e)=>{const B=J;return h(),A("div",null,[e[4]||(e[4]=o("p",null,"email",-1)),w(o("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>n(t).email=r),class:"border border-gray-300 p-2 rounded-md",type:"text"},null,512),[[f,n(t).email]]),e[5]||(e[5]=o("p",null,"password",-1)),w(o("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>n(t).password=r),class:"border border-gray-300 p-2 rounded-md",type:"password"},null,512),[[f,n(t).password]]),N(B,{class:"bg-blue-500 text-white p-2 rounded-md",loading:n(T)==="pending",onClick:b},{default:R(()=>e[3]||(e[3]=[S(" login ")])),_:1},8,["loading"]),e[6]||(e[6]=o("div",null,"----分隔線----",-1)),o("button",{class:"bg-blue-500 text-white p-2 rounded-md",onClick:e[2]||(e[2]=r=>n(y)())}," showNonBindUser "),o("div",null,V(n(x)),1)])}}});export{q as default};
