import{_ as W,d as q,x as J,r as d,y as x,a as Q,c as Z,f as r,j as p,k as l,w as u,M as ee,g as a,l as g,m as i,t as te,n,p as s,S as ue,i as C,U as ae}from"./index.c43e29e1.js";import{C as h,a as E,b}from"./index.8e130a93.js";import{T as A}from"./index.67440f58.js";import{g as se}from"./list.fb711e56.js";import"./index.f23af169.js";const ne=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{title:"\u5408\u540C\u540D\u79F0",align:"left",width:300,colKey:"name",fixed:"left"},{title:"\u5408\u540C\u72B6\u6001",colKey:"status",width:200},{title:"\u5408\u540C\u7F16\u53F7",width:200,ellipsis:!0,colKey:"no"},{title:"\u5408\u540C\u7C7B\u578B",width:200,ellipsis:!0,colKey:"contractType"},{title:"\u5408\u540C\u6536\u4ED8\u7C7B\u578B",width:200,ellipsis:!0,colKey:"paymentType"},{title:"\u5408\u540C\u91D1\u989D (\u5143)",width:200,ellipsis:!0,colKey:"amount"},{align:"left",fixed:"right",width:200,colKey:"op",title:"\u64CD\u4F5C"}];const oe={class:"left-operation-container"},le={key:0,class:"selected-count"},ie={class:"search-input"},ce={key:0},de={key:1},re={key:2},pe={key:0,class:"payment-col"},_e={key:1,class:"payment-col"},fe=["onClick"],ve={name:"ListBase"},Ce=q({...ve,setup(he){const N=J(),f=d([]),m=d({defaultPageSize:20,total:100,defaultCurrent:1}),F=d(""),T=d(!1),w=async()=>{T.value=!0;try{const{list:e}=await se();f.value=e,m.value={...m.value,total:e.length}}catch(e){console.log(e)}finally{T.value=!1}},_=d(-1),S=x(()=>{if(_.value>-1){const{name:e}=f.value[_.value];return`\u5220\u9664\u540E\uFF0C${e}\u7684\u6240\u6709\u5408\u540C\u4FE1\u606F\u5C06\u88AB\u6E05\u7A7A\uFF0C\u4E14\u65E0\u6CD5\u6062\u590D`}return""});Q(()=>{w()});const y=d(!1),c=d([1,2]),k=Z(),B=()=>{_.value=-1},I=()=>{f.value.splice(_.value,1),m.value.total=f.value.length;const e=c.value.indexOf(_.value);e>-1&&c.value.splice(e,1),y.value=!1,ee.success("\u5220\u9664\u6210\u529F"),B()},P=()=>{B()},U="index",K=e=>{c.value=e},V=(e,o)=>{console.log("\u5206\u9875\u53D8\u5316",e,o)},M=(e,o)=>{console.log("\u7EDF\u4E00Change",e,o)},R=()=>{k.push("/detail/base")},L=()=>{k.push("/form/base")},O=e=>{_.value=e.rowIndex,y.value=!0},G=x(()=>({offsetTop:N.isUseTabsRouter?48:0,container:`.${ae}-layout`}));return(e,o)=>{const D=r("t-button"),Y=r("t-input"),$=r("t-row"),v=r("t-tag"),j=r("t-table"),z=r("t-card"),X=r("t-dialog");return a(),p("div",null,[l(z,{class:"list-card-container"},{default:u(()=>[l($,{justify:"space-between"},{default:u(()=>[g("div",oe,[l(D,{onClick:L},{default:u(()=>[i(" \u65B0\u5EFA\u5408\u540C ")]),_:1}),l(D,{variant:"base",theme:"default",disabled:!c.value.length},{default:u(()=>[i(" \u5BFC\u51FA\u5408\u540C ")]),_:1},8,["disabled"]),c.value.length?(a(),p("p",le,"\u5DF2\u9009"+te(c.value.length)+"\u9879",1)):n("v-if",!0)]),g("div",ie,[l(Y,{modelValue:F.value,"onUpdate:modelValue":o[0]||(o[0]=t=>F.value=t),placeholder:"\u8BF7\u8F93\u5165\u4F60\u9700\u8981\u641C\u7D22\u7684\u5185\u5BB9",clearable:""},{"suffix-icon":u(()=>[l(s(ue),{size:"20px"})]),_:1},8,["modelValue"])])]),_:1}),l(j,{data:f.value,columns:s(ne),"row-key":U,"vertical-align":"top",hover:!0,pagination:m.value,"selected-row-keys":c.value,loading:T.value,"header-affixed-top":G.value,onPageChange:V,onChange:M,onSelectChange:K},{status:u(({row:t})=>[t.status===s(h).FAIL?(a(),C(v,{key:0,theme:"danger",variant:"light"},{default:u(()=>[i(" \u5BA1\u6838\u5931\u8D25 ")]),_:1})):n("v-if",!0),t.status===s(h).AUDIT_PENDING?(a(),C(v,{key:1,theme:"warning",variant:"light"},{default:u(()=>[i(" \u5F85\u5BA1\u6838 ")]),_:1})):n("v-if",!0),t.status===s(h).EXEC_PENDING?(a(),C(v,{key:2,theme:"warning",variant:"light"},{default:u(()=>[i(" \u5F85\u5C65\u884C ")]),_:1})):n("v-if",!0),t.status===s(h).EXECUTING?(a(),C(v,{key:3,theme:"success",variant:"light"},{default:u(()=>[i(" \u5C65\u884C\u4E2D ")]),_:1})):n("v-if",!0),t.status===s(h).FINISH?(a(),C(v,{key:4,theme:"success",variant:"light"},{default:u(()=>[i(" \u5DF2\u5B8C\u6210 ")]),_:1})):n("v-if",!0)]),contractType:u(({row:t})=>[t.contractType===s(E).MAIN?(a(),p("p",ce,"\u5BA1\u6838\u5931\u8D25")):n("v-if",!0),t.contractType===s(E).SUB?(a(),p("p",de,"\u5F85\u5BA1\u6838")):n("v-if",!0),t.contractType===s(E).SUPPLEMENT?(a(),p("p",re,"\u5F85\u5C65\u884C")):n("v-if",!0)]),paymentType:u(({row:t})=>[t.paymentType===s(b).PAYMENT?(a(),p("div",pe,[i(" \u4ED8\u6B3E"),l(A,{class:"dashboard-item-trend",type:"up"})])):n("v-if",!0),t.paymentType===s(b).RECEIPT?(a(),p("div",_e,[i(" \u6536\u6B3E"),l(A,{class:"dashboard-item-trend",type:"down"})])):n("v-if",!0)]),op:u(t=>[g("a",{class:"t-button-link",onClick:o[1]||(o[1]=H=>R())},"\u8BE6\u60C5"),g("a",{class:"t-button-link",onClick:H=>O(t)},"\u5220\u9664",8,fe)]),_:1},8,["data","columns","pagination","selected-row-keys","loading","header-affixed-top"])]),_:1}),l(X,{visible:y.value,"onUpdate:visible":o[2]||(o[2]=t=>y.value=t),header:"\u786E\u8BA4\u5220\u9664\u5F53\u524D\u6240\u9009\u5408\u540C\uFF1F",body:S.value,"on-cancel":P,onConfirm:I},null,8,["visible","body"])])}}});var Fe=W(Ce,[["__scopeId","data-v-cee06a5e"],["__file","C:/Users/admin/Desktop/Grandma's New World/src/pages/list/base/index.vue"]]);export{Fe as default};
