import{d as y,r as _,o as v,c as g,e as o,b as e,n as t,L as h,f as a,G as c,v as V,t as i,a$ as w,ai as C,x as k,a as T}from"./main-C8N3ebfR.js";import{_ as L}from"./AppTextField.vue_vue_type_script_setup_true_lang-CCQlRy82.js";import{_ as B}from"./AuthProvider.vue_vue_type_script_setup_true_lang-OnwxcolU.js";import{a as N,b as R}from"./auth-v1-top-shape-gPxasD3d.js";import{V as u}from"./VNodeRenderer-BVyLMYPx.js";import{a as U,b as $,V as j}from"./VCard-BdrtuRPD.js";import{V as b}from"./VCardText-ARgIvpol.js";import{V as P}from"./VForm-fzztflmy.js";import{V as S,a as m}from"./VRow-Z9fbV_da.js";import{V as F}from"./VCheckbox-oZRrNghr.js";import{V as x}from"./VDivider-BSW7EtyF.js";import"./form-5pC8GpCN.js";import"./VTextField-Bg92Kq3L.js";/* empty css                   */import"./VCounter-D0vsA7b8.js";import"./VImg-BEBs2K_P.js";import"./VField-Bs77dQvg.js";import"./easing-CjukEv2V.js";import"./VInput-WOzMkRuC.js";import"./forwardRefs-C-GTDzx5.js";import"./VAvatar-DY8J7Y8l.js";/* empty css              */import"./VCheckboxBtn-B_RYkhur.js";import"./VSelectionControl-Dty7vXMq.js";const M={class:"auth-wrapper d-flex align-center justify-center pa-4"},z={class:"position-relative my-sm-16"},A={class:"app-logo"},D={class:"app-logo-title"},E={class:"text-h4 mb-1"},H={class:"text-capitalize"},I=o("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),G={class:"d-flex align-center justify-space-between flex-wrap my-6"},W=o("span",{class:"d-inline-block"}," New on our platform? ",-1),q=o("span",{class:"mx-4 text-high-emphasis"},"or",-1),be=y({__name:"login-v1",setup(J){const l=_({email:"",password:"",remember:!1}),d=_(!1);return(r,s)=>{const p=T("RouterLink"),f=L;return v(),g("div",M,[o("div",z,[e(t(u),{nodes:("h"in r?r.h:t(h))("div",{innerHTML:t(N)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(t(u),{nodes:("h"in r?r.h:t(h))("div",{innerHTML:t(R)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(j,{class:k(["auth-card",r.$vuetify.display.smAndUp?"pa-6":"pa-0"]),"max-width":"460"},{default:a(()=>[e(U,{class:"justify-center"},{default:a(()=>[e($,null,{default:a(()=>[e(p,{to:"/"},{default:a(()=>[o("div",A,[e(t(u),{nodes:t(c).app.logo},null,8,["nodes"]),o("h1",D,V(t(c).app.title),1)])]),_:1})]),_:1})]),_:1}),e(b,null,{default:a(()=>[o("h4",E,[i(" Welcome to "),o("span",H,V(t(c).app.title),1),i("! 👋🏻 ")]),I]),_:1}),e(b,null,{default:a(()=>[e(P,{onSubmit:w(()=>{},["prevent"])},{default:a(()=>[e(S,null,{default:a(()=>[e(m,{cols:"12"},{default:a(()=>[e(f,{modelValue:t(l).email,"onUpdate:modelValue":s[0]||(s[0]=n=>t(l).email=n),autofocus:"",label:"Email or Username",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(f,{modelValue:t(l).password,"onUpdate:modelValue":s[1]||(s[1]=n=>t(l).password=n),label:"Password",placeholder:"············",type:t(d)?"text":"password","append-inner-icon":t(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[2]||(s[2]=n=>d.value=!t(d))},null,8,["modelValue","type","append-inner-icon"]),o("div",G,[e(F,{modelValue:t(l).remember,"onUpdate:modelValue":s[3]||(s[3]=n=>t(l).remember=n),label:"Remember me"},null,8,["modelValue"]),e(p,{class:"text-primary",to:{name:"pages-authentication-forgot-password-v1"}},{default:a(()=>[i(" Forgot Password? ")]),_:1})]),e(C,{block:"",type:"submit"},{default:a(()=>[i(" Login ")]),_:1})]),_:1}),e(m,{cols:"12",class:"text-body-1 text-center"},{default:a(()=>[W,e(p,{class:"text-primary ms-1 d-inline-block text-body-1",to:{name:"pages-authentication-register-v1"}},{default:a(()=>[i(" Create an account ")]),_:1})]),_:1}),e(m,{cols:"12",class:"d-flex align-center"},{default:a(()=>[e(x),q,e(x)]),_:1}),e(m,{cols:"12",class:"text-center"},{default:a(()=>[e(B)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])])])}}});export{be as default};
