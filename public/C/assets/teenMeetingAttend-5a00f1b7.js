import{aC as G,d as q,r as O,S as U,an as Z,e as T,L as l,Z as r,Q as n,M as x,O as u,P as m,aJ as E,U as I,T as f,aG as J,ba as N,aq as a,ap as i,aO as M,F as p,aP as g,aN as Q,cx as z}from"./index-dc2869f8.js";import{u as W}from"./use-message-deac4ca7.js";import{N as y}from"./Tag-36216d8c.js";const $={get:async w=>await G.post({url:"/teemMeetingAttend/get",data:w})},j={key:1,class:"mt-5"},H={class:"text-[10px]"},K={class:"text-md font-bold"},X={class:"text-md font-bold text-[16px]"},Y={class:"text-md font-bold text-[16px]"},c={class:"text-md font-bold text-[16px] text-red-500"},h={class:"text-md font-extrabold"},tt={class:"text-sm mb-2"},et={class:"text-md font-extrabold"},at={class:"text-sm mb-2"},nt={class:"text-md font-extrabold"},lt={class:"text-sm mb-2"},it={class:"text-md font-extrabold"},st={class:"text-sm mb-2"},rt=q({__name:"teenMeetingAttend",setup(w){const L=W(),s=O({api:{getTeenMeetingAttend:null},data:{password:""},current:{page:"password"},isDisabled:!0}),{mutate:C,isPending:D}=U({mutationFn:()=>$.get({password:s.value.data.password}),onSuccess:d=>{var e;if(((e=d==null?void 0:d.response)==null?void 0:e.status)===401){L.error("密碼錯誤");return}s.value.current.page="dataPage",s.value.api.getTeenMeetingAttend=d}});Z(s.value.data,d=>{d.password.length>=3&&(s.value.isDisabled=!1)});const P=T(()=>{var d,e,t,v,A,k,R;return{青職_目標28位:((d=s.value.api.getTeenMeetingAttend)==null?void 0:d.data.ageRange.youth.data.filter(b=>b.participation!=="未確定出席_但先印名片"))||[],"大專/青少年_目標16位":[...((e=s.value.api.getTeenMeetingAttend)==null?void 0:e.data.ageRange.college.data.filter(b=>b.participation!=="未確定出席_但先印名片"))||[],...((t=s.value.api.getTeenMeetingAttend)==null?void 0:t.data.ageRange.teenager.data.filter(b=>b.participation!=="未確定出席_但先印名片"))||[]],兒童:[...((v=s.value.api.getTeenMeetingAttend)==null?void 0:v.data.ageRange.child1.data.filter(b=>b.participation!=="未確定出席_但先印名片"))||[],...((A=s.value.api.getTeenMeetingAttend)==null?void 0:A.data.ageRange.child2.data.filter(b=>b.participation!=="未確定出席_但先印名片"))||[],...((k=s.value.api.getTeenMeetingAttend)==null?void 0:k.data.ageRange.child3.data.filter(b=>b.participation!=="未確定出席_但先印名片"))||[]],其他:((R=s.value.api.getTeenMeetingAttend)==null?void 0:R.data.ageRange.other.data.filter(b=>b.participation!=="未確定出席_但先印名片"))||[]}}),_=T(()=>{var d,e;return(e=(d=s.value.api.getTeenMeetingAttend)==null?void 0:d.data.ageRange.youth.data[0])!=null&&e.updatedAt?new Date(s.value.api.getTeenMeetingAttend.data.ageRange.youth.data[0].updatedAt).toLocaleString("zh-TW",{timeZone:"Asia/Taipei"}):"無更新資料"}),o=T(()=>{var d,e,t,v,A,k,R;return[...((d=s.value.api.getTeenMeetingAttend)==null?void 0:d.data.ageRange.youth.data)||[],...((e=s.value.api.getTeenMeetingAttend)==null?void 0:e.data.ageRange.college.data)||[],...((t=s.value.api.getTeenMeetingAttend)==null?void 0:t.data.ageRange.teenager.data)||[],...((v=s.value.api.getTeenMeetingAttend)==null?void 0:v.data.ageRange.child1.data)||[],...((A=s.value.api.getTeenMeetingAttend)==null?void 0:A.data.ageRange.child2.data)||[],...((k=s.value.api.getTeenMeetingAttend)==null?void 0:k.data.ageRange.child3.data)||[],...((R=s.value.api.getTeenMeetingAttend)==null?void 0:R.data.ageRange.other.data)||[]]}),B=T(()=>o.value.filter(d=>d.district==="一區")),S=T(()=>o.value.filter(d=>d.district==="二區")),V=T(()=>o.value.filter(d=>d.district==="三區")),F=T(()=>o.value.filter(d=>d.district==="四區"));return(d,e)=>(l(),r("div",null,[n(s).current.page==="password"?(l(),x(n(J),{key:0,class:"max-w-[300px]",title:"密碼"},{default:u(()=>[m(n(E),{value:n(s).data.password,"onUpdate:value":e[0]||(e[0]=t=>n(s).data.password=t),class:"mb-2",placeholder:"請輸入密碼"},null,8,["value"]),m(n(I),{disabled:n(s).isDisabled,type:"primary",loading:n(D),onClick:e[1]||(e[1]=t=>n(C)())},{default:u(()=>e[2]||(e[2]=[f(" 確認 ")])),_:1},8,["disabled","loading"])]),_:1})):N("",!0),n(s).current.page==="dataPage"?(l(),r("div",j,[e[36]||(e[36]=a("span",{class:"text-sm font-bold"}," 28會所青年大會報名情形： ",-1)),a("p",H," 資料日期："+i(n(_)),1),m(n(Q),{type:"line",animated:"","default-value":"會所報名情形"},{default:u(()=>[m(n(M),{name:"會所報名情形",tab:"會所報名情形"},{default:u(()=>[e[3]||(e[3]=a("p",{class:"text-sm"},[a("div",{class:"text-md font-bold"},[f(" 青年特會 報名情形： "),a("span",{class:"text-md text-red-500"}," 注意! 特會需要名牌才能入場!！ ")]),f(" 請大家這"),a("span",{class:"text-red-500"}," 週四(3/27) "),f("前確認出席人數，並填到會所表單，方便服事人員印製名牌，謝謝！ ")],-1)),(l(!0),r(p,null,g(n(P),(t,v)=>(l(),r(p,{key:v},[a("p",K,i(v)+" (已報名"+i(t.length)+"位) ",1),(l(!0),r(p,null,g(t,A=>(l(),r("span",{key:A._id,class:"text-sm mx-1"},[m(n(y),{class:"mb-1",size:"small",bordered:!1},{default:u(()=>[f(i(A.name),1)]),_:2},1024)]))),128))],64))),128))]),_:1}),m(n(M),{name:"福音朋友",tab:"福音朋友"},{default:u(()=>[e[4]||(e[4]=a("div",{class:"text-md font-bold text-[16px]"}," 已報名福音朋友: ",-1)),(l(!0),r(p,null,g(n(o).filter(t=>t.meetingStatus==="福音朋友"),(t,v)=>(l(),r("div",{key:t._id},[a("span",null,i(v+1)+". "+i(t.name)+"("+i(t.ageRange)+") 邀者："+i(t.sheepherd),1)]))),128))]),_:1}),m(n(M),{name:"各天報名",tab:"各天報名"},{default:u(()=>[e[5]||(e[5]=a("div",null," 各天報名統計： ",-1)),a("div",X," 03/29 "+i(n(o).filter(t=>t.participation==="只參加3/29特會"||t.participation==="兩天都參加").length)+"位: ",1),e[6]||(e[6]=a("span",null,"一區:",-1)),e[7]||(e[7]=a("br",null,null,-1)),(l(!0),r(p,null,g(n(o).filter(t=>t.participation==="只參加3/29特會"||t.participation==="兩天都參加").filter(t=>t.district==="一區"),t=>(l(),x(n(y),{key:t._id,class:"mb-1 mr-1",size:"tiny"},{default:u(()=>[f(i(t.name),1)]),_:2},1024))),128)),e[8]||(e[8]=a("br",null,null,-1)),e[9]||(e[9]=a("span",null,"二區:",-1)),e[10]||(e[10]=a("br",null,null,-1)),(l(!0),r(p,null,g(n(o).filter(t=>t.participation==="只參加3/29特會"||t.participation==="兩天都參加").filter(t=>t.district==="二區"),t=>(l(),x(n(y),{key:t._id,class:"mb-1 mr-1",size:"tiny"},{default:u(()=>[f(i(t.name),1)]),_:2},1024))),128)),e[11]||(e[11]=a("br",null,null,-1)),e[12]||(e[12]=a("span",null,"三區:",-1)),e[13]||(e[13]=a("br",null,null,-1)),(l(!0),r(p,null,g(n(o).filter(t=>t.participation==="只參加3/29特會"||t.participation==="兩天都參加").filter(t=>t.district==="三區"),t=>(l(),x(n(y),{key:t._id,class:"mb-1 mr-1",size:"tiny"},{default:u(()=>[f(i(t.name),1)]),_:2},1024))),128)),e[14]||(e[14]=a("br",null,null,-1)),e[15]||(e[15]=a("span",null,"四區:",-1)),e[16]||(e[16]=a("br",null,null,-1)),(l(!0),r(p,null,g(n(o).filter(t=>t.participation==="只參加3/29特會"||t.participation==="兩天都參加").filter(t=>t.district==="四區"),t=>(l(),x(n(y),{key:t._id,class:"mb-1 mr-1",size:"tiny"},{default:u(()=>[f(i(t.name),1)]),_:2},1024))),128)),a("div",Y," 03/30 "+i(n(o).filter(t=>t.participation==="只參加3/30主日"||t.participation==="兩天都參加").length)+"位: ",1),e[17]||(e[17]=a("span",null,"一區:",-1)),e[18]||(e[18]=a("br",null,null,-1)),(l(!0),r(p,null,g(n(o).filter(t=>t.participation==="只參加3/30主日"||t.participation==="兩天都參加").filter(t=>t.district==="一區"),t=>(l(),x(n(y),{key:t._id,class:"mb-1 mr-1",size:"tiny"},{default:u(()=>[f(i(t.name),1)]),_:2},1024))),128)),e[19]||(e[19]=a("br",null,null,-1)),e[20]||(e[20]=a("span",null,"二區:",-1)),e[21]||(e[21]=a("br",null,null,-1)),(l(!0),r(p,null,g(n(o).filter(t=>t.participation==="只參加3/30主日"||t.participation==="兩天都參加").filter(t=>t.district==="二區"),t=>(l(),x(n(y),{key:t._id,class:"mb-1 mr-1",size:"tiny"},{default:u(()=>[f(i(t.name),1)]),_:2},1024))),128)),e[22]||(e[22]=a("br",null,null,-1)),e[23]||(e[23]=a("span",null,"三區:",-1)),e[24]||(e[24]=a("br",null,null,-1)),(l(!0),r(p,null,g(n(o).filter(t=>t.participation==="只參加3/30主日"||t.participation==="兩天都參加").filter(t=>t.district==="三區"),t=>(l(),x(n(y),{key:t._id,class:"mb-1 mr-1",size:"tiny"},{default:u(()=>[f(i(t.name),1)]),_:2},1024))),128)),e[25]||(e[25]=a("br",null,null,-1)),e[26]||(e[26]=a("span",null,"四區:",-1)),e[27]||(e[27]=a("br",null,null,-1)),(l(!0),r(p,null,g(n(o).filter(t=>t.participation==="只參加3/30主日"||t.participation==="兩天都參加").filter(t=>t.district==="四區"),t=>(l(),x(n(y),{key:t._id,class:"mb-1 mr-1",size:"tiny"},{default:u(()=>[f(i(t.name),1)]),_:2},1024))),128)),a("div",c," 未勾選參加時間 "+i(n(o).filter(t=>t.participation==="未選擇").length)+"位: ",1),(l(!0),r(p,null,g(n(o).filter(t=>t.participation==="未選擇"),t=>(l(),x(n(y),{key:t._id,class:"mb-1 mr-1",size:"tiny"},{default:u(()=>[f(i(t.name),1)]),_:2},1024))),128))]),_:1}),m(n(M),{name:"一區",tab:"一區"},{default:u(()=>[e[29]||(e[29]=a("div",{class:"text-md font-bold text-[16px]"}," 一區代禱名單: ",-1)),(l(!0),r(p,null,g(n(B).filter(t=>t.inviteList!=="無"),t=>(l(),r("div",{key:t._id},[a("span",h,i(t.name)+"： ",1),e[28]||(e[28]=a("br",null,null,-1)),a("div",tt,i(t.inviteList),1)]))),128))]),_:1}),m(n(M),{name:"二區",tab:"二區"},{default:u(()=>[e[31]||(e[31]=a("div",{class:"text-md font-bold text-[16px]"}," 二區代禱名單: ",-1)),(l(!0),r(p,null,g(n(S).filter(t=>t.inviteList!=="無"),t=>(l(),r("div",{key:t._id},[a("span",et,i(t.name)+"： ",1),e[30]||(e[30]=a("br",null,null,-1)),a("div",at,i(t.inviteList),1)]))),128))]),_:1}),m(n(M),{name:"三區",tab:"三區"},{default:u(()=>[e[33]||(e[33]=a("div",{class:"text-md font-bold text-[16px]"}," 三區代禱名單: ",-1)),(l(!0),r(p,null,g(n(V).filter(t=>t.inviteList!=="無"),t=>(l(),r("div",{key:t._id},[a("span",nt,i(t.name)+"： ",1),e[32]||(e[32]=a("br",null,null,-1)),a("div",lt,i(t.inviteList),1)]))),128))]),_:1}),m(n(M),{name:"四區",tab:"四區"},{default:u(()=>[e[35]||(e[35]=a("div",{class:"text-md font-bold text-[16px]"}," 四區代禱名單: ",-1)),(l(!0),r(p,null,g(n(F).filter(t=>t.inviteList!=="無"),t=>(l(),r("div",{key:t._id},[a("span",it,i(t.name)+"： ",1),e[34]||(e[34]=a("br",null,null,-1)),a("div",st,i(t.inviteList),1)]))),128))]),_:1})]),_:1})])):N("",!0)]))}});typeof z=="function"&&z(rt);export{rt as default};
