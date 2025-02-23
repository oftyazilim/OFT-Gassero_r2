import{_ as H}from"./AppTextField.vue_vue_type_script_setup_true_lang-B67lS2wl.js";import{V as g}from"./VCardText-BW9gFSa-.js";import{V as B}from"./VCard-pJfFDOSH.js";import{d as I,o as i,g as V,f as a,b as e,z as L,e as s,v as u,x,q as N,H as R,n as o,r as f,w as k,c as m,I as z,J as C,aW as b,F as h,i as _,V as v,t as S}from"./main-CXefX_qh.js";import{s as U}from"./sitting-girl-with-laptop-CNJqEmDN.js";import{$ as P}from"./api-D8QFSLsW.js";import{V as y}from"./VCol-Dzvr-cnK.js";import{a as Q,V as E}from"./VTabs-Dk-IGiF8.js";import{V as j}from"./VImg-Db788kHt.js";import{V as D,a as G}from"./VWindowItem-Csa_1waa.js";import{V as $}from"./VAvatar-a73hCTk3.js";import{V as J,a as Y}from"./VExpansionPanels-C5V-zFwV.js";import{V as A}from"./VRow-qTTVFZ4i.js";import{V as K}from"./VChip-Dx4QNr20.js";import"./form-ClP579eF.js";import"./VTextField-CN3aek7z.js";/* empty css                   */import"./VCounter-Cxc0KNa-.js";import"./index-DT3SyRRd.js";import"./VField-CeCYSswt.js";import"./easing-CjukEv2V.js";import"./VInput-BI9uJ0Ce.js";import"./forwardRefs-C-GTDzx5.js";import"./index-9rIf2CJL.js";/* empty css              */import"./VSlideGroup-CNPi0L39.js";import"./scopeId-BgBx1Ex_.js";import"./lazy-CAMkS5e7.js";import"./ssrBoot-BBXTmuIy.js";const M="/build/assets/app-search-header-bg-BCWNUfHj.png",O={class:"text-h4 mb-2 font-weight-medium"},X={class:"mb-0"},Z=I({inheritAttrs:!1,__name:"AppSearchHeader",props:{title:{},subtitle:{},customClass:{},placeholder:{},density:{default:"comfortable"},isReverse:{type:Boolean,default:!1}},setup(w){const n=w;return(l,q)=>{const r=H;return i(),V(B,{flat:"",class:x(["text-center search-header",n.customClass]),style:R(`background: url(${o(M)});`)},{default:a(()=>[e(g,null,{default:a(()=>[L(l.$slots,"title",{},()=>[s("h4",O,u(n.title),1)]),s("div",{class:x(["d-flex",l.isReverse?"flex-column":"flex-column-reverse"])},[s("p",X,u(n.subtitle),1),s("div",null,[e(r,N(l.$attrs,{class:"search-header-input mx-auto my-4",placeholder:n.placeholder,density:n.density,"prepend-inner-icon":"tabler-search"}),null,16,["placeholder","density"])])],2)]),_:3})]),_:3},8,["class","style"])}}}),ee={class:"d-flex align-center mb-4"},te={class:"text-h5"},ae={class:"text-body-1"},se=s("span",{class:"text-base font-weight-medium"}," No Results Found!! ",-1),le={class:"text-center pt-16"},oe=s("h4",{class:"text-h4 mb-2"}," You still have a question? ",-1),re=s("p",{class:"text-body-1 mb-6"}," If you can't find question in our FAQ, you can contact us. We'll answer you shortly! ",-1),ie={class:"text-h5 mb-1"},Le=I({__name:"faq",setup(w){const n=f(""),l=f([]),q=async()=>{const T=await P("/pages/faq",{query:{q:n.value}}).catch(c=>console.log(c));l.value=T},r=f("Payment"),p=f(0);k(r,()=>p.value=0),k(n,q,{immediate:!0});const W=[{icon:"tabler-phone",via:"+ (810) 2548 2568",tagLine:"We are always happy to help!"},{icon:"tabler-mail",via:"hello@help.com",tagLine:"Best way to get answer faster!"}];return(T,c)=>{const F=Z;return i(),m("section",null,[e(F,{title:"Hello, how can we help?",subtitle:"or choose a category to quickly find the help you need","custom-class":"mb-6",placeholder:"Search Articles...",density:"comfortable","is-reverse":""}),e(A,null,{default:a(()=>[z(e(y,{cols:"12",sm:"4",lg:"3",class:"position-relative"},{default:a(()=>[e(Q,{modelValue:o(r),"onUpdate:modelValue":c[0]||(c[0]=t=>b(r)?r.value=t:null),direction:"vertical",class:"v-tabs-pill",grow:""},{default:a(()=>[(i(!0),m(h,null,_(o(l),t=>(i(),V(E,{key:t.faqTitle,value:t.faqTitle},{default:a(()=>[e(v,{icon:t.faqIcon,size:20,start:""},null,8,["icon"]),S(" "+u(t.faqTitle),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(j,{width:245,src:o(U),class:"d-none d-sm-block mt-4 mx-auto"},null,8,["src"])]),_:1},512),[[C,o(l).length]]),e(y,{cols:"12",sm:"8",lg:"9"},{default:a(()=>[e(D,{modelValue:o(r),"onUpdate:modelValue":c[2]||(c[2]=t=>b(r)?r.value=t:null),class:"faq-v-window disable-tab-transition"},{default:a(()=>[(i(!0),m(h,null,_(o(l),t=>(i(),V(G,{key:t.faqTitle,value:t.faqTitle},{default:a(()=>[s("div",ee,[e($,{rounded:"",color:"primary",variant:"tonal",class:"me-4",size:"50"},{default:a(()=>[e(v,{size:30,icon:t.faqIcon},null,8,["icon"])]),_:2},1024),s("div",null,[s("h5",te,u(t.faqTitle),1),s("div",ae,u(t.faqSubtitle),1)])]),e(J,{modelValue:o(p),"onUpdate:modelValue":c[1]||(c[1]=d=>b(p)?p.value=d:null),multiple:""},{default:a(()=>[(i(!0),m(h,null,_(t.faqs,d=>(i(),V(Y,{key:d.question,title:d.question,text:d.answer},null,8,["title","text"]))),128))]),_:2},1032,["modelValue"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),z(e(y,{cols:"12",class:x(o(l).length?"":"d-flex justify-center align-center")},{default:a(()=>[e(v,{icon:"tabler-help",start:"",size:"20"}),se]),_:1},8,["class"]),[[C,!o(l).length]])]),_:1}),s("div",le,[e(K,{label:"",color:"primary",size:"small",class:"mb-2"},{default:a(()=>[S(" Question ")]),_:1}),oe,re,e(A,{class:"mt-9"},{default:a(()=>[(i(),m(h,null,_(W,t=>e(y,{key:t.icon,sm:"6",cols:"12"},{default:a(()=>[e(B,{flat:"",style:{"background-color":"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"}},{default:a(()=>[e(g,{class:"pb-4"},{default:a(()=>[e($,{rounded:"",color:"primary",variant:"tonal",size:"46"},{default:a(()=>[e(v,{icon:t.icon,size:"26"},null,8,["icon"])]),_:2},1024)]),_:2},1024),e(g,null,{default:a(()=>[s("h5",ie,u(t.via),1),s("div",null,u(t.tagLine),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])])}}});export{Le as default};
