import{a as Y}from"./formatters-Bnv68_Nh.js";import{_ as Z}from"./TablePagination.vue_vue_type_script_setup_true_lang-DcYrSEXX.js";import{_ as ee}from"./AppSelect.vue_vue_type_script_setup_true_lang-DD8YZFsO.js";import{_ as te}from"./AppTextField.vue_vue_type_script_setup_true_lang-CCQlRy82.js";import{m as ae}from"./master-dark-CntEUc-b.js";import{m as oe}from"./mastercard-uJg4wwnP.js";import{u as B}from"./useGenerateImageVariant-CDcIEfBE.js";import{u as re}from"./useApi-0UnRfn96.js";import{c as se}from"./createUrl-BIspXbGU.js";import{$ as le}from"./api-CuTER1yB.js";import{V as U}from"./VCardText-ARgIvpol.js";import{V as ie,a as ne}from"./VRow-Z9fbV_da.js";import{V as A}from"./VCard-BdrtuRPD.js";import{d as me,r as p,b5 as de,$ as T,o as u,c as h,b as t,f as a,F as I,i as pe,n as s,e as l,aW as f,ai as ce,t as _,v as n,g as L,V,x as O,q as ue,a as R,y as fe}from"./main-C8N3ebfR.js";import{V as S}from"./VDivider-BSW7EtyF.js";import{V as ve}from"./VDataTableServer-BzCVE5-v.js";import{V as E}from"./VAvatar-DY8J7Y8l.js";import{V as _e}from"./VImg-BEBs2K_P.js";import{V as ye}from"./VChip-BABOvncP.js";import{V as ge}from"./VMenu-CtbOZ7LL.js";import{V as xe,a as F}from"./VList-DC10drZ4.js";import{_ as he}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./helpers-BGv4x_9E.js";import"./VPagination-B8QiYJDB.js";import"./form-5pC8GpCN.js";import"./VSelect-DDLGMKRV.js";import"./VTextField-Bg92Kq3L.js";/* empty css                   */import"./VCounter-D0vsA7b8.js";import"./VField-Bs77dQvg.js";import"./easing-CjukEv2V.js";import"./VInput-WOzMkRuC.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-UqIsVCnT.js";import"./VOverlay-BeTVZ1OA.js";import"./delay-CiPbFjzB.js";import"./lazy-BQ6JzVrR.js";import"./scopeId-Cdi8TwQm.js";import"./VCheckboxBtn-B_RYkhur.js";import"./VSelectionControl-Dty7vXMq.js";import"./index-9rIf2CJL.js";/* empty css              */import"./VDataTable-DILWKOIB.js";import"./VTable-CMU1SrvJ.js";import"./filter-BtZk6vEi.js";import"./VSlideGroup-EpNUGEcd.js";import"./ssrBoot-CMdykAJT.js";const Ve="/build/assets/paypal-dark-BVE0qCDA.png",be="/build/assets/paypal-light-PHz9z_rz.png",ke={class:"d-flex flex-column"},we={class:"text-h4"},De={class:"text-body-1"},Ce={class:"d-flex justify-sm-space-between justify-start flex-wrap gap-4"},Pe={class:"d-flex gap-x-4 align-center"},$e={class:"d-flex align-center gap-x-3"},ze={key:1,class:"font-weight-medium"},Be={class:"d-flex flex-column"},Ue={class:"text-body-1 font-weight-medium"},Ae={class:"text-body-2"},Te={style:{"line-height":"22px"}},Ie={class:"d-flex align-center"},Le=["src"],Oe={class:"text-body-1"},Re=me({__name:"index",async setup(Se){let y,b;const g=p([{title:"Pending Payment",value:56,icon:"tabler-calendar-stats"},{title:"Completed",value:12689,icon:"tabler-checks"},{title:"Refunded",value:124,icon:"tabler-wallet"},{title:"Failed",value:32,icon:"tabler-alert-octagon"}]),N=B(oe,ae),q=B(be,Ve),x=p(""),m=p(10),d=p(1),k=p(),w=p(),v=p([]),j=[{title:"Order",key:"order"},{title:"Date",key:"date"},{title:"Customers",key:"customers"},{title:"Payment",key:"payment",sortable:!1},{title:"Status",key:"status"},{title:"Method",key:"method",sortable:!1},{title:"Action",key:"actions",sortable:!1}],M=o=>{var r,c;k.value=(r=o.sortBy[0])==null?void 0:r.key,w.value=(c=o.sortBy[0])==null?void 0:c.order},D=o=>{if(o===1)return{text:"Paid",color:"success"};if(o===2)return{text:"Pending",color:"warning"};if(o===3)return{text:"Cancelled",color:"secondary"};if(o===4)return{text:"Failed",color:"error"}},G=o=>{if(o==="Delivered")return{text:"Delivered",color:"success"};if(o==="Out for Delivery")return{text:"Out for Delivery",color:"primary"};if(o==="Ready to Pickup")return{text:"Ready to Pickup",color:"info"};if(o==="Dispatched")return{text:"Dispatched",color:"warning"}},{data:C,execute:H}=([y,b]=de(()=>re(se("/apps/ecommerce/orders",{query:{q:x,page:d,itemsPerPage:m,sortBy:k,orderBy:w}}))),y=await y,b(),y),Q=T(()=>C.value.orders),P=T(()=>C.value.total),W=async o=>{await le(`/apps/ecommerce/orders/${o}`,{method:"DELETE"});const r=v.value.findIndex(c=>c===o);r!==-1&&v.value.splice(r,1),H()};return(o,r)=>{const c=te,J=ee,$=R("RouterLink"),K=R("IconBtn"),X=Z;return u(),h("div",null,[t(A,{class:"mb-6"},{default:a(()=>[t(U,null,{default:a(()=>[t(ie,null,{default:a(()=>[(u(!0),h(I,null,pe(s(g),(e,i)=>(u(),h(I,{key:i},[t(ne,{cols:"12",sm:"6",md:"3",class:"px-6"},{default:a(()=>[l("div",{class:O(["d-flex justify-space-between",o.$vuetify.display.xs?i!==s(g).length-1?"border-b pb-4":"":o.$vuetify.display.sm&&i<s(g).length/2?"border-b pb-4":""])},[l("div",ke,[l("h4",we,n(e.value),1),l("div",De,n(e.title),1)]),t(E,{variant:"tonal",rounded:"",size:"42"},{default:a(()=>[t(V,{icon:e.icon,size:"26",class:"text-high-emphasis"},null,8,["icon"])]),_:2},1024)],2)]),_:2},1024),(o.$vuetify.display.mdAndUp?i!==s(g).length-1:o.$vuetify.display.smAndUp&&i%2===0)?(u(),L(S,{key:0,vertical:"",inset:"",length:"60"})):fe("",!0)],64))),128))]),_:1})]),_:1})]),_:1}),t(A,null,{default:a(()=>[t(U,null,{default:a(()=>[l("div",Ce,[t(c,{modelValue:s(x),"onUpdate:modelValue":r[0]||(r[0]=e=>f(x)?x.value=e:null),placeholder:"Search Order",style:{"max-inline-size":"200px","min-inline-size":"200px"}},null,8,["modelValue"]),l("div",Pe,[t(J,{modelValue:s(m),"onUpdate:modelValue":r[1]||(r[1]=e=>f(m)?m.value=e:null),style:{"min-inline-size":"6.25rem"},items:[5,10,20,50,100]},null,8,["modelValue"]),t(ce,{variant:"tonal",color:"secondary","prepend-icon":"tabler-upload",text:"Export"})])])]),_:1}),t(S),t(ve,{"items-per-page":s(m),"onUpdate:itemsPerPage":r[3]||(r[3]=e=>f(m)?m.value=e:null),"model-value":s(v),"onUpdate:modelValue":r[4]||(r[4]=e=>f(v)?v.value=e:null),page:s(d),"onUpdate:page":r[5]||(r[5]=e=>f(d)?d.value=e:null),headers:j,items:s(Q),"items-length":s(P),"show-select":"",class:"text-no-wrap","onUpdate:options":M},{"item.order":a(({item:e})=>[t($,{to:{name:"apps-ecommerce-order-details-id",params:{id:e.order}}},{default:a(()=>[_(" #"+n(e.order),1)]),_:2},1032,["to"])]),"item.date":a(({item:e})=>[_(n(new Date(e.date).toDateString()),1)]),"item.customers":a(({item:e})=>[l("div",$e,[t(E,{size:"34",color:e.avatar.length?"":"primary",variant:e.avatar.length?void 0:"tonal"},{default:a(()=>[e.avatar?(u(),L(_e,{key:0,src:e.avatar},null,8,["src"])):(u(),h("span",ze,n(("avatarText"in o?o.avatarText:s(Y))(e.customer)),1))]),_:2},1032,["color","variant"]),l("div",Be,[l("div",Ue,[t($,{to:{name:"pages-user-profile-tab",params:{tab:"profile"}},class:"text-link"},{default:a(()=>[_(n(e.customer),1)]),_:2},1024)]),l("div",Ae,n(e.email),1)])])]),"item.payment":a(({item:e})=>{var i,z;return[l("div",{class:O([`text-${(i=D(e.payment))==null?void 0:i.color}`,"font-weight-medium d-flex align-center gap-x-2"])},[t(V,{icon:"tabler-circle-filled",size:"10"}),l("div",Te,n((z=D(e.payment))==null?void 0:z.text),1)],2)]}),"item.status":a(({item:e})=>[t(ye,ue(G(e.status),{label:"",size:"small"}),null,16)]),"item.method":a(({item:e})=>[l("div",Ie,[l("img",{src:e.method==="mastercard"?s(N):s(q),height:"18"},null,8,Le),l("div",Oe," ..."+n(e.method==="mastercard"?e.methodNumber:"@gmail.com"),1)])]),"item.actions":a(({item:e})=>[t(K,null,{default:a(()=>[t(V,{icon:"tabler-dots-vertical"}),t(ge,{activator:"parent"},{default:a(()=>[t(xe,null,{default:a(()=>[t(F,{value:"view",to:{name:"apps-ecommerce-order-details-id",params:{id:e.order}}},{default:a(()=>[_(" View ")]),_:2},1032,["to"]),t(F,{value:"delete",onClick:i=>W(e.id)},{default:a(()=>[_(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(X,{page:s(d),"onUpdate:page":r[2]||(r[2]=e=>f(d)?d.value=e:null),"items-per-page":s(m),"total-items":s(P)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","model-value","page","items","items-length"])]),_:1})])}}}),At=he(Re,[["__scopeId","data-v-73e2939d"]]);export{At as default};
