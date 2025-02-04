import{_ as M}from"./AppTextField.vue_vue_type_script_setup_true_lang-CCQlRy82.js";import{_ as w}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-FsMzl0xv.js";import{d as x,r as v,bx as D,w as R,o as $,g as B,f as t,b as e,e as n,v as A,a$ as N,n as u,ai as f,t as V,aW as y,V as E,c as I,F as G}from"./main-C8N3ebfR.js";import{a as Y,b as j,V as S}from"./VCard-BdrtuRPD.js";import{V as k}from"./VCardText-ARgIvpol.js";import{V as T}from"./VForm-fzztflmy.js";import{V as Q,a as g}from"./VRow-Z9fbV_da.js";import{V as O}from"./VSwitch-CiRfrwkG.js";import{V as U}from"./VDialog-NnKSe6Uq.js";import{V as W}from"./VImg-BEBs2K_P.js";import{V as q}from"./VAlert-D8UkNe4M.js";import{_ as z}from"./CustomRadios-DTpbvuhq.js";const H={class:"text-h4 mb-2"},J={class:"text-body-1 mb-0"},$e=x({__name:"CardAddEditDialog",props:{cardDetails:{default:()=>({number:"",name:"",expiry:"",cvv:"",isPrimary:!1,type:""})},isDialogVisible:{type:Boolean}},emits:["submit","update:isDialogVisible"],setup(_,{emit:h}){const i=_,r=h,l=v(structuredClone(D(i.cardDetails)));R(()=>i,()=>{l.value=structuredClone(D(i.cardDetails))});const b=()=>{r("submit",l.value)},c=d=>{r("update:isDialogVisible",d)};return(d,o)=>{const m=w,a=M;return $(),B(U,{width:d.$vuetify.display.smAndDown?"auto":600,"model-value":i.isDialogVisible,"onUpdate:modelValue":c},{default:t(()=>[e(m,{onClick:o[0]||(o[0]=s=>c(!1))}),e(S,{class:"pa-2 pa-sm-10"},{default:t(()=>[e(Y,{class:"text-center"},{default:t(()=>[e(j,null,{default:t(()=>[n("h4",H,A(i.cardDetails.name?"Edit Card":"Add New Card"),1)]),_:1}),n("p",J,A(i.cardDetails.name?"Edit your saved card details":"Add card for future billing"),1)]),_:1}),e(k,{class:"pt-6"},{default:t(()=>[e(T,{onSubmit:N(()=>{},["prevent"])},{default:t(()=>[e(Q,null,{default:t(()=>[e(g,{cols:"12"},{default:t(()=>[e(a,{modelValue:u(l).number,"onUpdate:modelValue":o[1]||(o[1]=s=>u(l).number=s),label:"Card Number",placeholder:"1356 3215 6548 7898",type:"number"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(a,{modelValue:u(l).name,"onUpdate:modelValue":o[2]||(o[2]=s=>u(l).name=s),label:"Name",placeholder:"John Doe"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",md:"3"},{default:t(()=>[e(a,{modelValue:u(l).expiry,"onUpdate:modelValue":o[3]||(o[3]=s=>u(l).expiry=s),label:"Expiry Date",placeholder:"MM/YY"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",md:"3"},{default:t(()=>[e(a,{modelValue:u(l).cvv,"onUpdate:modelValue":o[4]||(o[4]=s=>u(l).cvv=s),type:"number",label:"CVV Code",placeholder:"654"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12"},{default:t(()=>[e(O,{modelValue:u(l).isPrimary,"onUpdate:modelValue":o[5]||(o[5]=s=>u(l).isPrimary=s),label:"Save Card for future billing?"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",class:"text-center"},{default:t(()=>[e(f,{class:"me-4",type:"submit",onClick:b},{default:t(()=>[V(" Submit ")]),_:1}),e(f,{color:"secondary",variant:"tonal",onClick:o[6]||(o[6]=s=>d.$emit("update:isDialogVisible",!1))},{default:t(()=>[V(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}}),K=n("h5",{class:"text-h5 mb-2"}," Verify Your Mobile Number for SMS ",-1),L=n("p",{class:"text-body-1 mb-6"}," Enter your mobile phone number with country code and we will send you a verification code. ",-1),X={class:"d-flex flex-wrap justify-end gap-4"},Z=x({__name:"EnableOneTimePasswordDialog",props:{mobileNumber:{},isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible","submit"],setup(_,{emit:h}){const i=_,r=h,l=v(structuredClone(D(i.mobileNumber))),b=()=>{l.value&&(r("submit",l.value),r("update:isDialogVisible",!1))},c=()=>{l.value=structuredClone(D(i.mobileNumber)),r("update:isDialogVisible",!1)},d=o=>{r("update:isDialogVisible",o)};return(o,m)=>{const a=w,s=M;return $(),B(U,{width:o.$vuetify.display.smAndDown?"auto":900,"model-value":i.isDialogVisible,"onUpdate:modelValue":d},{default:t(()=>[e(a,{onClick:m[0]||(m[0]=C=>d(!1))}),e(S,{class:"pa-2 pa-sm-10"},{default:t(()=>[e(k,null,{default:t(()=>[K,L,e(T,{onSubmit:N(()=>{},["prevent"])},{default:t(()=>[e(s,{modelValue:u(l),"onUpdate:modelValue":m[1]||(m[1]=C=>y(l)?l.value=C:null),name:"mobile",label:"Phone Number",placeholder:"+1 123 456 7890",type:"number",class:"mb-6"},null,8,["modelValue"]),n("div",X,[e(f,{color:"secondary",variant:"tonal",onClick:c},{default:t(()=>[V(" Cancel ")]),_:1}),e(f,{type:"submit",onClick:b},{default:t(()=>[V(" continue "),e(E,{end:"",icon:"tabler-arrow-right",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}}),ee="/build/assets/themeselection-qr-Bv5F3_M6.png",te=n("h4",{class:"text-h4 text-center mb-6"}," Add Authenticator App ",-1),le=n("h5",{class:"text-h5 mb-2"}," Authenticator Apps ",-1),oe=n("p",{class:"text-body-1 mb-6"}," Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the QR code. It will generate a 6 digit code for you to enter below. ",-1),ae={class:"mb-6"},se={class:"d-flex justify-end flex-wrap gap-4"},ie=x({__name:"AddAuthenticatorAppDialog",props:{authCode:{},isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible","submit"],setup(_,{emit:h}){const i=_,r=h,l=v(structuredClone(D(i.authCode))),b=()=>{l.value&&(r("submit",l.value),r("update:isDialogVisible",!1))},c=()=>{l.value=structuredClone(D(i.authCode)),r("update:isDialogVisible",!1)};return(d,o)=>{const m=w,a=M;return $(),B(U,{width:d.$vuetify.display.smAndDown?"auto":900,"model-value":i.isDialogVisible,"onUpdate:modelValue":o[2]||(o[2]=s=>d.$emit("update:isDialogVisible",s))},{default:t(()=>[e(m,{onClick:o[0]||(o[0]=s=>d.$emit("update:isDialogVisible",!1))}),e(S,{class:"pa-2 pa-sm-10"},{default:t(()=>[e(k,null,{default:t(()=>[te,le,oe,n("div",ae,[e(W,{width:"150",src:u(ee),class:"mx-auto"},null,8,["src"])]),e(q,{title:"ASDLKNASDA9AHS678dGhASD78AB",text:"If you are unable to scan the QR code, you can manually enter the secret key below.",variant:"tonal",color:"warning"}),e(T,{onSubmit:N(()=>{},["prevent"])},{default:t(()=>[e(a,{modelValue:u(l),"onUpdate:modelValue":o[1]||(o[1]=s=>y(l)?l.value=s:null),name:"auth-code",label:"Enter Authentication Code",placeholder:"123 456",class:"mt-4 mb-6"},null,8,["modelValue"]),n("div",se,[e(f,{color:"secondary",variant:"tonal",onClick:c},{default:t(()=>[V(" Cancel ")]),_:1}),e(f,{type:"submit",onClick:b},{default:t(()=>[V(" Continue "),e(E,{end:"",icon:"tabler-arrow-right",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}}),ne={class:"mb-6"},de=n("h4",{class:"text-h4 text-center mb-2"}," Select Authentication Method ",-1),ue=n("p",{class:"text-body-1 text-center mb-6"}," You also need to select a method by which the proxy authenticates to the directory serve. ",-1),re={class:"d-flex flex-column"},me={class:"d-flex gap-1 mb-2"},pe={class:"text-h6"},ce={class:"text-body-2 mb-0"},be={class:"d-flex gap-4 justify-center"},Se=x({__name:"TwoFactorAuthDialog",props:{isDialogVisible:{type:Boolean,default:!1},smsCode:{default:""},authAppCode:{default:""}},emits:["update:isDialogVisible"],setup(_,{emit:h}){const i=_,r=h,l=[{icon:"tabler-settings",title:"Authenticator Apps",desc:"Get code from an app like Google Authenticator or Microsoft Authenticator.",value:"authApp"},{icon:"tabler-message",title:"SMS",desc:"We will send a code via SMS if you need to use your backup login method.",value:"sms"}],b=v("authApp"),c=v(!1),d=v(!1),o=()=>{b.value==="authApp"&&(c.value=!0,d.value=!1,r("update:isDialogVisible",!1)),b.value==="sms"&&(c.value=!1,d.value=!0,r("update:isDialogVisible",!1))};return(m,a)=>{const s=w,C=z,F=ie,P=Z;return $(),I(G,null,[e(U,{width:m.$vuetify.display.smAndDown?"auto":800,"model-value":i.isDialogVisible,"onUpdate:modelValue":a[3]||(a[3]=p=>m.$emit("update:isDialogVisible",p))},{default:t(()=>[e(s,{onClick:a[0]||(a[0]=p=>m.$emit("update:isDialogVisible",!1))}),e(S,{class:"pa-2 pa-sm-10"},{default:t(()=>[e(k,null,{default:t(()=>[n("div",ne,[de,ue,e(C,{"selected-radio":u(b),"onUpdate:selectedRadio":a[1]||(a[1]=p=>y(b)?b.value=p:null),"radio-content":l,"grid-column":{cols:"12"}},{default:t(p=>[n("div",re,[n("div",me,[e(E,{icon:p.item.icon,size:"20",class:"text-high-emphasis"},null,8,["icon"]),n("h6",pe,A(p.item.title),1)]),n("p",ce,A(p.item.desc),1)])]),_:1},8,["selected-radio"])]),n("div",be,[e(f,{onClick:o},{default:t(()=>[V(" submit ")]),_:1}),e(f,{color:"secondary",variant:"tonal",onClick:a[2]||(a[2]=p=>m.$emit("update:isDialogVisible",!1))},{default:t(()=>[V(" Cancel ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["width","model-value"]),e(F,{isDialogVisible:u(c),"onUpdate:isDialogVisible":a[4]||(a[4]=p=>y(c)?c.value=p:null),"auth-code":i.authAppCode},null,8,["isDialogVisible","auth-code"]),e(P,{isDialogVisible:u(d),"onUpdate:isDialogVisible":a[5]||(a[5]=p=>y(d)?d.value=p:null),"mobile-number":i.smsCode},null,8,["isDialogVisible","mobile-number"])],64)}}});export{$e as _,Se as a};
