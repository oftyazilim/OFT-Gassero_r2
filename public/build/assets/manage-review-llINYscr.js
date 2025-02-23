import{_ as J}from"./TablePagination.vue_vue_type_script_setup_true_lang-_SernKiB.js";import{_ as K}from"./AppSelect.vue_vue_type_script_setup_true_lang-UIB--c0H.js";import{_ as X}from"./AppTextField.vue_vue_type_script_setup_true_lang-B67lS2wl.js";import{q as Y}from"./vue3-apexcharts-hGYjkQ-2.js";import{u as Z}from"./useApi-BhqtdETj.js";import{c as ee}from"./createUrl-BDnH0n5U.js";import{$ as te}from"./api-D8QFSLsW.js";import{V as w}from"./VCard-pJfFDOSH.js";import{V as x}from"./VCardText-BW9gFSa-.js";import{d as se,r as p,b5 as oe,$ as W,o as A,g as ae,f as o,b as s,e as t,V as B,t as r,c as le,i as ie,x as re,v as i,b6 as ne,F as de,n as l,aW as u,ai as ce,a as O}from"./main-CXefX_qh.js";import{V as y}from"./VChip-Dx4QNr20.js";import{V as T}from"./VDivider-B8BIZrEP.js";import{V}from"./VCol-Dzvr-cnK.js";import{V as me}from"./VDataTableServer-jZAKkkno.js";import{V as D}from"./VAvatar-a73hCTk3.js";import{V as pe}from"./VRating-BEhRUuF6.js";import{V as ue}from"./VMenu-DAf6uba2.js";import{V as he,a as U}from"./VList-5j6JHPeN.js";import{V as ve}from"./VRow-qTTVFZ4i.js";import"./VPagination-edzMs2Cf.js";import"./form-ClP579eF.js";import"./VSelect-BSocyXX7.js";import"./VTextField-CN3aek7z.js";/* empty css                   */import"./VCounter-Cxc0KNa-.js";import"./index-DT3SyRRd.js";import"./VField-CeCYSswt.js";import"./easing-CjukEv2V.js";import"./VInput-BI9uJ0Ce.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DjZpsU5U.js";import"./VOverlay-E84Zkpn-.js";import"./delay-RGhQcOZ6.js";import"./lazy-CAMkS5e7.js";import"./scopeId-BgBx1Ex_.js";import"./VCheckboxBtn-CLjc42-a.js";import"./VSelectionControl-BoOcbjQs.js";import"./index-9rIf2CJL.js";import"./VImg-Db788kHt.js";import"./VSlideGroup-CNPi0L39.js";/* empty css              */import"./VDataTable-BED9s8g-.js";import"./VTable-B3TJP9Kw.js";import"./filter-B7NDRcyz.js";import"./ssrBoot-BBXTmuIy.js";const fe={class:"d-flex gap-6 flex-column flex-sm-row"},_e={class:"d-flex align-center gap-x-2"},be=t("h3",{class:"text-h3 text-primary"}," 4.89 ",-1),ge=t("h6",{class:"my-2 text-h6"}," Total 187 reviews ",-1),we=t("div",{class:"mb-2 text-wrap"}," All reviews are from genuine customers ",-1),xe={class:"flex-grow-1"},ye={class:"text-no-wrap text-sm"},Ve={class:"flex-grow-1",style:{"min-inline-size":"150px"}},ke={class:"text-sm"},Re={class:"d-flex justify-space-between flex-sm-row flex-column"},Ce=t("h5",{class:"text-h5 mb-2"}," Reviews statistics ",-1),ze={class:"mb-8 mb-sm-12"},Le=t("div",{class:"d-inline-block me-2"}," 12 New Reviews ",-1),Se=t("div",null,[t("div",{class:"text-high-emphasis text-body-1 mb-2"},[t("span",{class:"text-success"},"87%"),r(" Positive Reviews ")]),t("div",{class:"text-body-2"}," Weekly Report ")],-1),Pe={class:"d-flex justify-space-between flex-wrap gap-6"},We={class:"d-flex flex-row gap-4 align-center flex-wrap"},Ae={class:"d-flex gap-x-4 align-center"},Be={class:"d-flex flex-column"},Oe={class:"text-h6"},Te={class:"text-body-2 text-wrap clamp-text"},De={class:"d-flex align-center gap-x-4"},Ue={class:"d-flex flex-column"},$e={class:"text-body-2"},Ie={class:"my-4"},Ee={class:"text-h6 mb-1"},Ne={class:"text-sm text-wrap mb-0"},qe="rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))",Tt=se({__name:"manage-review",async setup(Fe){let f,k;const _=p("All"),b=p(""),n=p(10),d=p(1),R=p(),C=p(),v=p([]),{data:z,execute:$}=([f,k]=oe(()=>Z(ee("/apps/ecommerce/reviews",{query:{q:b,status:_,page:d,itemsPerPage:n,sortBy:R,orderBy:C}}))),f=await f,k(),f),I=W(()=>z.value.reviews),L=W(()=>z.value.total),E=m=>{var a,h;R.value=(a=m.sortBy[0])==null?void 0:a.key,C.value=(h=m.sortBy[0])==null?void 0:h.order},N=async m=>{await te(`/apps/ecommerce/reviews/${m}`,{method:"DELETE"});const a=v.value.findIndex(h=>h===m);a!==-1&&v.value.splice(a,1),$()},S=[{rating:5,value:124},{rating:4,value:40},{rating:3,value:12},{rating:2,value:7},{rating:1,value:2}],q=[{title:"Product",key:"product"},{title:"Reviewer",key:"reviewer"},{title:"Review",key:"review",sortable:!1},{title:"Date",key:"date"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],c={colorsLabel:{success:"#28c76f29"},colors:{success:"#28c76f"}},F=[{data:[20,40,60,80,100,80,60]}],j={chart:{height:160,width:190,type:"bar",toolbar:{show:!1}},legend:{show:!1},grid:{show:!1,padding:{top:-25,bottom:-12}},colors:[c.colorsLabel.success,c.colorsLabel.success,c.colorsLabel.success,c.colorsLabel.success,c.colors.success,c.colorsLabel.success,c.colorsLabel.success],plotOptions:{bar:{barHeight:"75%",columnWidth:"25%",borderRadius:4,distributed:!0}},dataLabels:{enabled:!1},xaxis:{categories:["M","T","W","T","F","S","S"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:qe,fontSize:"13px"}}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:0,options:{chart:{width:"100%"},plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:1440,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:1400,options:{plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:1200,options:{chart:{height:130,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:992,chart:{height:150,width:190,toolbar:{show:!1}},options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:883,options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:768,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:600,options:{chart:{width:"100%",height:"200",type:"bar"},plotOptions:{bar:{borderRadius:6,columnWidth:"30% "}}}},{breakpoint:420,options:{plotOptions:{chart:{width:"100%",height:"200",type:"bar"},bar:{borderRadius:4,columnWidth:"30%"}}}}]};return(m,a)=>{const h=Y,M=X,P=K,H=O("RouterLink"),Q=O("IconBtn"),G=J;return A(),ae(ve,{class:"match-height"},{default:o(()=>[s(V,{cols:"12",md:"6"},{default:o(()=>[s(w,null,{default:o(()=>[s(x,null,{default:o(()=>[t("div",fe,[t("div",null,[t("div",_e,[be,s(B,{icon:"tabler-star-filled",color:"primary",size:"32"})]),ge,we,s(y,{color:"primary",label:"",size:"small"},{default:o(()=>[r(" +5 This week ")]),_:1})]),s(T,{vertical:m.$vuetify.display.smAndUp},null,8,["vertical"]),t("div",xe,[(A(),le(de,null,ie(S,(e,g)=>t("div",{key:g,class:re(["d-flex align-center gap-x-4",g!==S.length-1?"mb-3":""])},[t("div",ye,i(e.rating)+" Star ",1),t("div",Ve,[s(ne,{color:"primary",height:"8","model-value":e.value/185*100,rounded:""},null,8,["model-value"])]),t("div",ke,i(e.value),1)],2)),64))])])]),_:1})]),_:1})]),_:1}),s(V,{cols:"12",md:"6"},{default:o(()=>[s(w,null,{default:o(()=>[s(x,null,{default:o(()=>[t("div",Re,[t("div",null,[Ce,t("div",ze,[Le,s(y,{color:"success",size:"small",label:""},{default:o(()=>[r(" +8.4% ")]),_:1})]),Se]),t("div",null,[s(h,{id:"shipment-statistics",type:"bar",height:"152",options:j,series:F})])])]),_:1})]),_:1})]),_:1}),s(V,{cols:"12"},{default:o(()=>[s(w,null,{default:o(()=>[s(x,null,{default:o(()=>[t("div",Pe,[t("div",null,[s(M,{modelValue:l(b),"onUpdate:modelValue":a[0]||(a[0]=e=>u(b)?b.value=e:null),style:{"max-inline-size":"200px","min-inline-size":"200px"},placeholder:"Search Review"},null,8,["modelValue"])]),t("div",We,[s(P,{modelValue:l(n),"onUpdate:modelValue":a[1]||(a[1]=e=>u(n)?n.value=e:null),items:[10,25,50,100],style:{"inline-size":"6.25rem"}},null,8,["modelValue"]),s(P,{modelValue:l(_),"onUpdate:modelValue":a[2]||(a[2]=e=>u(_)?_.value=e:null),style:{"max-inline-size":"7.5rem","min-inline-size":"7.5rem"},items:[{title:"All",value:"All"},{title:"Published",value:"Published"},{title:"Pending",value:"Pending"}]},null,8,["modelValue"]),s(ce,{"prepend-icon":"tabler-upload",variant:"tonal",color:"default"},{default:o(()=>[r(" Export ")]),_:1})])])]),_:1}),s(T),s(me,{"items-per-page":l(n),"onUpdate:itemsPerPage":a[4]||(a[4]=e=>u(n)?n.value=e:null),"model-value":l(v),"onUpdate:modelValue":a[5]||(a[5]=e=>u(v)?v.value=e:null),page:l(d),"onUpdate:page":a[6]||(a[6]=e=>u(d)?d.value=e:null),headers:q,items:l(I),"show-select":"","items-length":l(L),class:"text-no-wrap","onUpdate:options":E},{"item.product":o(({item:e})=>[t("div",Ae,[s(D,{image:e.productImage,size:38,variant:"tonal",rounded:""},null,8,["image"]),t("div",Be,[t("h6",Oe,i(e.product),1),t("div",Te,i(e.companyName),1)])])]),"item.reviewer":o(({item:e})=>[t("div",De,[s(D,{image:e.avatar,size:"34"},null,8,["image"]),t("div",Ue,[s(H,{to:{name:"apps-ecommerce-customer-details-id",params:{id:478426}},class:"font-weight-medium",style:{"line-height":"1.375rem"}},{default:o(()=>[r(i(e.reviewer),1)]),_:2},1024),t("div",$e,i(e.email),1)])])]),"item.review":o(({item:e})=>[t("div",Ie,[s(pe,{readonly:"","model-value":e.review,size:"24",class:"mb-1"},null,8,["model-value"]),t("h6",Ee,i(e.head),1),t("p",Ne,i(e.para),1)])]),"item.date":o(({item:e})=>[r(i(new Date(e.date).toDateString()),1)]),"item.status":o(({item:e})=>[s(y,{color:e.status==="Published"?"success":"warning",label:"",size:"small"},{default:o(()=>[r(i(e.status),1)]),_:2},1032,["color"])]),"item.actions":o(({item:e})=>[s(Q,null,{default:o(()=>[s(B,{icon:"tabler-dots-vertical"}),s(ue,{activator:"parent"},{default:o(()=>[s(he,null,{default:o(()=>[s(U,{value:"view",to:{name:"apps-ecommerce-order-details-id",params:{id:e.id}}},{default:o(()=>[r(" View ")]),_:2},1032,["to"]),s(U,{value:"delete",onClick:g=>N(e.id)},{default:o(()=>[r(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:o(()=>[s(G,{page:l(d),"onUpdate:page":a[3]||(a[3]=e=>u(d)?d.value=e:null),"items-per-page":l(n),"total-items":l(L)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","model-value","page","items","items-length"])]),_:1})]),_:1})]),_:1})}}});export{Tt as default};
