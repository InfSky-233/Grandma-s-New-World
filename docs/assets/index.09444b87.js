import{g as s,j as v,l as u,_ as U,d as O,r as y,as as R,at as j,y as G,f as n,k as o,w as l,F as A,E as F,i as g,t as E,q as P,p as C,m as D,s as W,v as Y}from"./index.c43e29e1.js";import{N as H}from"./index.8e130a93.js";const J={width:"64",height:"64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},K=u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"m32 10.69 26.248 15.155v22.31L32 63.308 5.75 48.155v-22.31L32 10.69ZM9.75 30.464v15.381L32 58.69l22.248-12.845V30.464L32 43.309 9.75 30.464ZM52.248 27 40.66 33.69l-8.66-5-8.66 5L11.75 27 32 15.31 52.248 27ZM27.34 36 32 38.69 36.66 36 32 33.31 27.34 36ZM30 8V0h4v8h-4ZM44.268 10.751l4-6.928 3.464 2-4 6.928-3.464-2ZM16.268 12.751l-4-6.928 3.464-2 4 6.928-3.464 2Z",fill:"currentcolor","fill-opacity":".26"},null,-1),Q=[K];function X(d,B){return s(),v("svg",J,Q)}var ee={render:X};const te=d=>(W("data-v-85700486"),d=d(),Y(),d),se={class:"secondary-notification"},ae=["onClick"],ne={class:"msg-date"},oe={class:"msg-action"},le=["onClick"],ue=["onClick"],ce={key:1,class:"secondary-msg-list__empty-list"},ie=te(()=>u("p",null,"\u6682\u65E0\u901A\u77E5",-1)),de={name:"DetailSecondary"},re=O({...de,setup(d){const B=[{label:"\u5168\u90E8\u901A\u77E5",value:"msgData"},{label:"\u672A\u8BFB\u901A\u77E5",value:"unreadMsg"},{label:"\u5DF2\u8BFB\u901A\u77E5",value:"readMsg"}],r=y("msgData"),p=y(!1),m=y(),f=R(),{msgData:h,unreadMsg:I,readMsg:w}=j(f),k=G(()=>r.value==="msgData"?h.value:r.value==="unreadMsg"?I.value:r.value==="readMsg"?w.value:[]),S=a=>{p.value=!0,m.value=a},M=a=>{const e=h.value;e.forEach(c=>{c.id===a.id&&c.status&&(c.status=!1)}),f.setMsgData(e)},V=()=>{const a=m.value,e=h.value;e.forEach((c,_)=>{c.id===(a==null?void 0:a.id)&&e.splice(_,1)}),p.value=!1,f.setMsgData(e)};return(a,e)=>{const c=n("t-tag"),_=n("t-icon"),b=n("t-tooltip"),L=n("t-list-item"),N=n("t-list"),T=n("t-tab-panel"),Z=n("t-tabs"),$=n("t-dialog");return s(),v("div",null,[u("div",se,[o(Z,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=i=>r.value=i)},{default:l(()=>[(s(),v(A,null,F(B,(i,z)=>o(T,{key:z,value:i.value,label:i.label},{default:l(()=>[k.value.length>0?(s(),g(N,{key:0,class:"secondary-msg-list",split:!0},{default:l(()=>[(s(!0),v(A,null,F(k.value,(t,q)=>(s(),g(L,{key:q},{action:l(()=>[u("span",ne,E(t.date),1),u("div",oe,[o(b,{class:"set-read-icon","overlay-style":{margin:"6px"},content:t.status?"\u8BBE\u4E3A\u5DF2\u8BFB":"\u8BBE\u4E3A\u672A\u8BFB"},{default:l(()=>[u("span",{class:"msg-action-icon",onClick:x=>M(t)},[t.status?(s(),g(_,{key:0,name:"queue",size:"16px"})):(s(),g(_,{key:1,name:"chat"}))],8,le)]),_:2},1032,["content"]),o(b,{content:"\u5220\u9664\u901A\u77E5","overlay-style":{margin:"6px"}},{default:l(()=>[u("span",{onClick:x=>S(t)},[o(_,{name:"delete",size:"16px"})],8,ue)]),_:2},1024)])]),default:l(()=>[u("p",{class:P(["content",{unread:t.status}]),onClick:x=>M(t)},[o(c,{size:"small",theme:C(H)[t.quality],variant:"light"},{default:l(()=>[D(E(t.type),1)]),_:2},1032,["theme"]),D(" "+E(t.content),1)],10,ae)]),_:2},1024))),128))]),_:1})):(s(),v("div",ce,[o(C(ee)),ie]))]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),o($,{visible:p.value,"onUpdate:visible":e[1]||(e[1]=i=>p.value=i),header:"\u5220\u9664\u901A\u77E5",body:`\u786E\u8BA4\u5220\u9664\u901A\u77E5\uFF1A${m.value&&m.value.content}\u5417\uFF1F`,"on-confirm":V},null,8,["visible","body"])])}}});var pe=U(re,[["__scopeId","data-v-85700486"],["__file","C:/Users/admin/Desktop/Grandma's New World/src/pages/detail/secondary/index.vue"]]);export{pe as default};
