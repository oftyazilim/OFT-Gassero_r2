import{_ as z}from"./AppTextField.vue_vue_type_script_setup_true_lang-CCQlRy82.js";import{_ as M}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-FsMzl0xv.js";import{V as E}from"./VCard-BdrtuRPD.js";import{V as F}from"./VCardText-ARgIvpol.js";import{V as O}from"./VForm-fzztflmy.js";import{V as G}from"./VAlert-D8UkNe4M.js";import{d as I,r as m,w as H,o as w,g as k,f as i,b as e,e as d,v as g,t as A,n as o,aW as p,ai as C,b5 as J,$ as T,c as K,i as Q,F as X,V as S,a as Y}from"./main-C8N3ebfR.js";import{V as Z}from"./VCheckbox-oZRrNghr.js";import{V as ee}from"./VDialog-NnKSe6Uq.js";import{_ as te}from"./TablePagination.vue_vue_type_script_setup_true_lang-DcYrSEXX.js";import{_ as se}from"./AppSelect.vue_vue_type_script_setup_true_lang-DD8YZFsO.js";import{u as ie}from"./useApi-0UnRfn96.js";import{c as oe}from"./createUrl-BIspXbGU.js";import{V as ae}from"./VDivider-BSW7EtyF.js";import{V as le}from"./VDataTableServer-BzCVE5-v.js";import{a as ne,V as re}from"./VRow-Z9fbV_da.js";import{V as me}from"./VChip-BABOvncP.js";import"./form-5pC8GpCN.js";import"./VTextField-Bg92Kq3L.js";/* empty css                   */import"./VCounter-D0vsA7b8.js";import"./VImg-BEBs2K_P.js";import"./VField-Bs77dQvg.js";import"./easing-CjukEv2V.js";import"./VInput-WOzMkRuC.js";import"./forwardRefs-C-GTDzx5.js";import"./VAvatar-DY8J7Y8l.js";import"./VCheckboxBtn-B_RYkhur.js";import"./VSelectionControl-Dty7vXMq.js";import"./VOverlay-BeTVZ1OA.js";import"./delay-CiPbFjzB.js";import"./lazy-BQ6JzVrR.js";import"./scopeId-Cdi8TwQm.js";import"./dialog-transition-UqIsVCnT.js";import"./VPagination-B8QiYJDB.js";import"./VSelect-DDLGMKRV.js";import"./VList-DC10drZ4.js";import"./ssrBoot-CMdykAJT.js";import"./VMenu-CtbOZ7LL.js";import"./index-9rIf2CJL.js";import"./VDataTable-DILWKOIB.js";import"./VTable-CMU1SrvJ.js";import"./filter-BtZk6vEi.js";/* empty css              */import"./VSlideGroup-EpNUGEcd.js";const pe={class:"text-h4 text-center mb-2"},de={class:"text-body-1 text-center mb-6"},ue={class:"d-flex gap-4 mb-6 flex-wrap flex-column flex-sm-row"},ce=I({__name:"AddEditPermissionDialog",props:{isDialogVisible:{type:Boolean},permissionName:{default:""}},emits:["update:isDialogVisible","update:permissionName"],setup(N,{emit:u}){const l=N,_=u,a=m(""),n=()=>{_("update:isDialogVisible",!1),a.value=""},r=()=>{_("update:isDialogVisible",!1),_("update:permissionName",a.value)};return H(()=>l,()=>{a.value=l.permissionName}),(b,v)=>{const P=M,c=z;return w(),k(ee,{width:b.$vuetify.display.smAndDown?"auto":600,"model-value":l.isDialogVisible,"onUpdate:modelValue":n},{default:i(()=>[e(P,{onClick:n}),e(E,{class:"pa-2 pa-sm-10"},{default:i(()=>[e(F,null,{default:i(()=>[d("h4",pe,g(l.permissionName?"Edit":"Add")+" Permission ",1),d("p",de,g(l.permissionName?"Edit":"Add")+" permission as per your requirements. ",1),e(O,null,{default:i(()=>[e(G,{type:"warning",title:"Warning!",variant:"tonal",class:"mb-6"},{text:i(()=>[A(" By "+g(l.permissionName?"editing":"adding")+" the permission name, you might break the system permissions functionality. ",1)]),_:1}),d("div",ue,[e(c,{modelValue:o(a),"onUpdate:modelValue":v[0]||(v[0]=f=>p(a)?a.value=f:null),placeholder:"Enter Permission Name"},null,8,["modelValue"]),e(C,{onClick:r},{default:i(()=>[A(g(l.permissionName?"Update":"Add"),1)]),_:1})]),e(Z,{label:"Set as core permission"})]),_:1})]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}}),fe={class:"d-flex gap-2 align-center"},ge=d("p",{class:"text-body-1 mb-0"}," Show ",-1),_e={class:"d-flex align-center gap-4 flex-wrap"},ve={class:"text-high-emphasis text-body-1"},Ve={class:"d-flex gap-4"},pt=I({__name:"index",async setup(N){let u,l;const _=[{title:"Name",key:"name"},{title:"Assigned To",key:"assignedTo",sortable:!1},{title:"Created Date",key:"createdDate",sortable:!1},{title:"Actions",key:"actions",sortable:!1}],a=m(""),n=m(10),r=m(1),b=m(),v=m(),P=V=>{var s,y;b.value=(s=V.sortBy[0])==null?void 0:s.key,v.value=(y=V.sortBy[0])==null?void 0:y.order},c=m(!1),f=m(!1),x=m(""),h={support:{color:"info",text:"Support"},users:{color:"success",text:"Users"},manager:{color:"warning",text:"Manager"},administrator:{color:"primary",text:"Administrator"},"restricted-user":{color:"error",text:"Restricted User"}},{data:U}=([u,l]=J(()=>ie(oe("/apps/permissions",{query:{q:a,itemsPerPage:n,page:r,sortBy:b,orderBy:v}}))),u=await u,l(),u),R=T(()=>U.value.permissions),B=T(()=>U.value.totalPermissions),q=V=>{c.value=!0,x.value=V};return(V,s)=>{const y=se,W=z,j=te,L=Y("IconBtn"),$=ce;return w(),k(re,null,{default:i(()=>[e(ne,{cols:"12"},{default:i(()=>[e(E,null,{default:i(()=>[e(F,{class:"d-flex align-center justify-space-between flex-wrap gap-4"},{default:i(()=>[d("div",fe,[ge,e(y,{"model-value":o(n),items:[{value:5,title:"5"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"5.5rem"},"onUpdate:modelValue":s[0]||(s[0]=t=>n.value=parseInt(t,10))},null,8,["model-value"])]),d("div",_e,[e(W,{modelValue:o(a),"onUpdate:modelValue":s[1]||(s[1]=t=>p(a)?a.value=t:null),placeholder:"Search Permission",style:{"inline-size":"15.625rem"}},null,8,["modelValue"]),e(C,{density:"default","prepend-icon":"tabler-plus",onClick:s[2]||(s[2]=t=>f.value=!0)},{default:i(()=>[A(" Add Permission ")]),_:1})])]),_:1}),e(ae),e(le,{"items-per-page":o(n),"onUpdate:itemsPerPage":s[4]||(s[4]=t=>p(n)?n.value=t:null),page:o(r),"onUpdate:page":s[5]||(s[5]=t=>p(r)?r.value=t:null),"items-length":o(B),"items-per-page-options":[{value:5,title:"5"},{value:10,title:"10"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],headers:_,items:o(R),"item-value":"name",class:"text-no-wrap","onUpdate:options":P},{"item.name":i(({item:t})=>[d("div",ve,g(t.name),1)]),"item.assignedTo":i(({item:t})=>[d("div",Ve,[(w(!0),K(X,null,Q(t.assignedTo,D=>(w(),k(me,{key:D,label:"",size:"small",color:h[D].color,class:"font-weight-medium"},{default:i(()=>[A(g(h[D].text),1)]),_:2},1032,["color"]))),128))])]),bottom:i(()=>[e(j,{page:o(r),"onUpdate:page":s[3]||(s[3]=t=>p(r)?r.value=t:null),"items-per-page":o(n),"total-items":o(B)},null,8,["page","items-per-page","total-items"])]),"item.actions":i(({item:t})=>[e(C,{icon:"",size:"small",color:"medium-emphasis",variant:"text",onClick:D=>q(t.name)},{default:i(()=>[e(S,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"]),e(L,null,{default:i(()=>[e(S,{icon:"tabler-dots-vertical",size:"22"})]),_:1})]),_:1},8,["items-per-page","page","items-length","items"])]),_:1}),e($,{isDialogVisible:o(c),"onUpdate:isDialogVisible":s[6]||(s[6]=t=>p(c)?c.value=t:null),"permission-name":o(x),"onUpdate:permissionName":s[7]||(s[7]=t=>p(x)?x.value=t:null)},null,8,["isDialogVisible","permission-name"]),e($,{isDialogVisible:o(f),"onUpdate:isDialogVisible":s[8]||(s[8]=t=>p(f)?f.value=t:null)},null,8,["isDialogVisible"])]),_:1})]),_:1})}}});export{pt as default};
