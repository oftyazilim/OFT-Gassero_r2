import{C as h}from"./vue3-perfect-scrollbar-BT2Ou4oR.js";import{d as f,k as g,a as V,o,g as r,f as e,b as t,V as n,n as d,c as v,F as x,i as C,x as y,e as i,v as _}from"./main-CXefX_qh.js";import{V as k}from"./VMenu-DAf6uba2.js";import{V as w,a as A}from"./VCard-pJfFDOSH.js";import{V as I}from"./VDivider-B8BIZrEP.js";import{V as S}from"./VRow-qTTVFZ4i.js";import{V as B}from"./VCol-Dzvr-cnK.js";import{V as z}from"./VAvatar-a73hCTk3.js";const D=i("h6",{class:"text-base font-weight-medium"}," Shortcuts ",-1),M={class:"text-base font-weight-medium mt-3 mb-0"},N={class:"text-sm mb-0"},R=f({__name:"Shortcuts",props:{togglerIcon:{default:"tabler-layout-grid-add"},shortcuts:{}},setup(l){const a=l,c=g();return(m,p)=>{const u=V("IconBtn");return o(),r(u,null,{default:e(()=>[t(n,{icon:a.togglerIcon},null,8,["icon"]),t(k,{activator:"parent",offset:"12px",location:"bottom end"},{default:e(()=>[t(w,{width:m.$vuetify.display.smAndDown?330:380,"max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(A,{class:"py-3"},{append:e(()=>[t(u,{size:"small",color:"high-emphasis"},{default:e(()=>[t(n,{size:"20",icon:"tabler-plus"})]),_:1})]),default:e(()=>[D]),_:1}),t(I),t(d(h),{options:{wheelPropagation:!1}},{default:e(()=>[t(S,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),v(x,null,C(a.shortcuts,(s,b)=>(o(),r(B,{key:s.title,cols:"6",class:y(["text-center border-t cursor-pointer pa-6 shortcut-icon",(b+1)%2?"border-e":""]),onClick:$=>d(c).push(s.to)},{default:e(()=>[t(z,{variant:"tonal",size:"50"},{default:e(()=>[t(n,{size:"26",color:"high-emphasis",icon:s.icon},null,8,["icon"])]),_:2},1024),i("h6",M,_(s.title),1),i("p",N,_(s.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1},8,["width"])]),_:1})]),_:1})}}}),H=f({__name:"NavbarShortcuts",setup(l){const a=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file-dollar",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-users",title:"Role Management",subtitle:"Permission",to:{name:"apps-roles"}},{icon:"tabler-device-desktop-analytics",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}}];return(c,m)=>{const p=R;return o(),r(p,{shortcuts:a})}}});export{H as _};
