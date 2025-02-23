import{r as u,e as F}from"./validators-BJEf8OaU.js";import{d as P,r as s,o as $,g as j,f as r,b as e,n as o,a$ as E,aW as i,e as m,ai as y,t as D,a_ as M}from"./main-CXefX_qh.js";import{_ as R}from"./AppSelect.vue_vue_type_script_setup_true_lang-UIB--c0H.js";import{_ as H}from"./AppTextField.vue_vue_type_script_setup_true_lang-B67lS2wl.js";import{_ as I}from"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-CPqkARtF.js";import{C as L}from"./vue3-perfect-scrollbar-BT2Ou4oR.js";import{V as z}from"./VDivider-B8BIZrEP.js";import{V as J}from"./VCardText-BW9gFSa-.js";import{V as K}from"./VForm-CD_GLPlO.js";import{V as W}from"./VRow-qTTVFZ4i.js";import{V as t}from"./VCol-Dzvr-cnK.js";import{V as Y}from"./VSwitch-BQrNxKr_.js";import{V as G}from"./VCard-pJfFDOSH.js";import{V as Q}from"./VNavigationDrawer-Gg8dwJd6.js";const X=m("h6",{class:"text-h6"}," Basic Information ",-1),Z=m("div",{class:"text-body-1 font-weight-medium text-high-emphasis"}," Shipping Information ",-1),x={class:"d-flex justify-space-between"},ee=m("div",{class:"d-flex flex-column gap-y-1"},[m("h6",{class:"text-h6"}," Use as a billing address? "),m("div",{class:"text-body-2"}," Please check budget for more info ")],-1),le={class:"d-flex gap-4 justify-start pb-10"},ve=P({__name:"ECommerceAddCustomerDrawer",props:{isDrawerOpen:{type:Boolean}},emits:["update:isDrawerOpen"],setup(_,{emit:k}){const A=_,V=k,S=l=>{V("update:isDrawerOpen",l)},p=s(),f=s(),c=s(),v=s(),b=s(),w=s(),q=s(),U=s(),C=s(),g=s(),h=s(!1),B=()=>{var l;(l=p.value)==null||l.reset(),V("update:isDrawerOpen",!1)},N=()=>{V("update:isDrawerOpen",!1),M(()=>{var l,a;(l=p.value)==null||l.reset(),(a=p.value)==null||a.resetValidation()})};return(l,a)=>{const T=I,n=H,O=R;return $(),j(Q,{"model-value":A.isDrawerOpen,temporary:"",location:"end",width:"370",border:"none","onUpdate:modelValue":S},{default:r(()=>[e(T,{title:"Add a Customer",onCancel:N}),e(z),e(G,{flat:""},{default:r(()=>[e(o(L),{options:{wheelPropagation:!1},class:"h-100"},{default:r(()=>[e(J,{style:{"block-size":"calc(100vh - 5rem)"}},{default:r(()=>[e(o(K),{ref_key:"refVForm",ref:p,onSubmit:a[10]||(a[10]=E(()=>{},["prevent"]))},{default:r(()=>[e(W,null,{default:r(()=>[e(t,null,{default:r(()=>[X]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(f),"onUpdate:modelValue":a[0]||(a[0]=d=>i(f)?f.value=d:null),label:"Name*",rules:["requiredValidator"in l?l.requiredValidator:o(u)],placeholder:"John Doe"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(c),"onUpdate:modelValue":a[1]||(a[1]=d=>i(c)?c.value=d:null),label:"Email*",rules:["requiredValidator"in l?l.requiredValidator:o(u),"emailValidator"in l?l.emailValidator:o(F)],placeholder:"johndoe@email.com"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(v),"onUpdate:modelValue":a[2]||(a[2]=d=>i(v)?v.value=d:null),label:"Mobile*",rules:["requiredValidator"in l?l.requiredValidator:o(u)],placeholder:"+(123) 456-7890"},null,8,["modelValue","rules"])]),_:1}),e(t,null,{default:r(()=>[Z]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(b),"onUpdate:modelValue":a[3]||(a[3]=d=>i(b)?b.value=d:null),label:"Address Line 1*",rules:["requiredValidator"in l?l.requiredValidator:o(u)],placeholder:"45, Rocker Terrace"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(w),"onUpdate:modelValue":a[4]||(a[4]=d=>i(w)?w.value=d:null),placeholder:"Empire Heights,",rules:["requiredValidator"in l?l.requiredValidator:o(u)],label:"Address Line 2*"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(q),"onUpdate:modelValue":a[5]||(a[5]=d=>i(q)?q.value=d:null),label:"Town*",rules:["requiredValidator"in l?l.requiredValidator:o(u)],placeholder:"New York"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(U),"onUpdate:modelValue":a[6]||(a[6]=d=>i(U)?U.value=d:null),placeholder:"Texas",rules:["requiredValidator"in l?l.requiredValidator:o(u)],label:"State/Province*"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(n,{modelValue:o(C),"onUpdate:modelValue":a[7]||(a[7]=d=>i(C)?C.value=d:null),label:"Post Code*",type:"number",rules:["requiredValidator"in l?l.requiredValidator:o(u)],placeholder:"982347"},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[e(O,{modelValue:o(g),"onUpdate:modelValue":a[8]||(a[8]=d=>i(g)?g.value=d:null),placeholder:"United States",rules:["requiredValidator"in l?l.requiredValidator:o(u)],label:"Country",items:["United States","United Kingdom","Canada"]},null,8,["modelValue","rules"])]),_:1}),e(t,{cols:"12"},{default:r(()=>[m("div",x,[ee,e(Y,{modelValue:o(h),"onUpdate:modelValue":a[9]||(a[9]=d=>i(h)?h.value=d:null)},null,8,["modelValue"])])]),_:1}),e(t,{cols:"12"},{default:r(()=>[m("div",le,[e(y,{type:"submit",color:"primary"},{default:r(()=>[D(" Add ")]),_:1}),e(y,{color:"error",variant:"tonal",onClick:B},{default:r(()=>[D(" Discard ")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}});export{ve as _};
