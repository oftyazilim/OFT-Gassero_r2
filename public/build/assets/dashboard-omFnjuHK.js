import{V as g}from"./VCol-Dzvr-cnK.js";import{V as w}from"./VCardText-BW9gFSa-.js";import{V as H}from"./VAvatar-a73hCTk3.js";import{d as b,r as V,o as p,g as f,f as t,c as D,i as I,e as o,b as e,V as A,v as n,H as ee,n as _,F as T,P as E,Q as Y,t as x,x as te,aW as O,b5 as oe,$ as J,b6 as z,a as se,ai as ie}from"./main-CXefX_qh.js";import{V as k,a as $,c as ae}from"./VCard-pJfFDOSH.js";import{V as G}from"./VRow-qTTVFZ4i.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{q}from"./vue3-apexcharts-hGYjkQ-2.js";import{_ as L}from"./MoreBtn.vue_vue_type_script_setup_true_lang-BKTJgigU.js";import{V as le,a as re,b as ne,d as ce}from"./VList-5j6JHPeN.js";import{V as de,a as pe}from"./VTabs-Dk-IGiF8.js";import{V as ue,a as W}from"./VWindowItem-Csa_1waa.js";import{V as C,a as m}from"./VTimeline-uR3NtMGz.js";import{V as B}from"./VDivider-B8BIZrEP.js";import{_ as me}from"./TablePagination.vue_vue_type_script_setup_true_lang-_SernKiB.js";import{u as _e}from"./useApi-BhqtdETj.js";import{c as he}from"./createUrl-BDnH0n5U.js";import{V as ve}from"./VChip-Dx4QNr20.js";import{V as fe}from"./VDataTableServer-jZAKkkno.js";import{V as ge}from"./VTable-B3TJP9Kw.js";/* empty css              */import"./VImg-Db788kHt.js";import"./index-DT3SyRRd.js";import"./VMenu-DAf6uba2.js";import"./VOverlay-E84Zkpn-.js";import"./easing-CjukEv2V.js";import"./delay-RGhQcOZ6.js";import"./lazy-CAMkS5e7.js";import"./scopeId-BgBx1Ex_.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DjZpsU5U.js";import"./ssrBoot-BBXTmuIy.js";import"./VSlideGroup-CNPi0L39.js";import"./VPagination-edzMs2Cf.js";import"./index-9rIf2CJL.js";import"./VDataTable-BED9s8g-.js";import"./VSelect-BSocyXX7.js";import"./VTextField-CN3aek7z.js";/* empty css                   */import"./VCounter-Cxc0KNa-.js";import"./VField-CeCYSswt.js";import"./form-ClP579eF.js";import"./VInput-BI9uJ0Ce.js";import"./VCheckboxBtn-CLjc42-a.js";import"./VSelectionControl-BoOcbjQs.js";import"./filter-B7NDRcyz.js";const be=c=>(E("data-v-75cfc89e"),c=c(),Y(),c),ye={class:"d-flex align-center gap-x-4 mb-1"},xe={class:"text-h4"},ke={class:"text-body-1 mb-1"},Ce={class:"d-flex gap-x-2 align-center"},Ve={class:"text-h6"},we=be(()=>o("div",{class:"text-sm text-disabled"}," than last week ",-1)),$e=b({__name:"LogisticsCardStatistics",setup(c){const i=V([{icon:"tabler-truck",color:"primary",title:"On route vehicles",value:42,change:18.2,isHover:!1},{icon:"tabler-alert-triangle",color:"warning",title:"Vehicles with errors",value:8,change:-8.7,isHover:!1},{icon:"tabler-git-fork",color:"error",title:"Deviated from route",value:27,change:4.3,isHover:!1},{icon:"tabler-clock",color:"info",title:"Late vehicles",value:13,change:-2.5,isHover:!1}]);return(u,d)=>(p(),f(G,null,{default:t(()=>[(p(!0),D(T,null,I(_(i),(s,a)=>(p(),f(g,{key:a,cols:"12",md:"3",sm:"6"},{default:t(()=>[o("div",null,[e(k,{class:"logistics-card-statistics cursor-pointer",style:ee(s.isHover?`border-block-end-color: rgb(var(--v-theme-${s.color}))`:`border-block-end-color: rgba(var(--v-theme-${s.color}),0.38)`),onMouseenter:r=>s.isHover=!0,onMouseleave:r=>s.isHover=!1},{default:t(()=>[e(w,null,{default:t(()=>[o("div",ye,[e(H,{variant:"tonal",color:s.color,rounded:""},{default:t(()=>[e(A,{icon:s.icon,size:"28"},null,8,["icon"])]),_:2},1032,["color"]),o("h4",xe,n(s.value),1)]),o("div",ke,n(s.title),1),o("div",Ce,[o("h6",Ve,n(s.change>0?"+":"")+" "+n(s.change)+"% ",1),we])]),_:2},1024)]),_:2},1032,["style","onMouseenter","onMouseleave"])])]),_:2},1024))),128))]),_:1}))}}),Se=N($e,[["__scopeId","data-v-75cfc89e"]]),U="rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))",ze="rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity))",Oe=b({__name:"LogisticsDeliveryExpectations",setup(c){const i={donut:{series1:"#28C76F",series2:"#28C76FCC",series3:"#28C76F99",series4:"#28C76F66"}},u=[13,25,22,40],d={labels:["Incorrect address","Weather conditions","Federal Holidays","Damage during transit"],colors:[i.donut.series1,i.donut.series2,i.donut.series3,i.donut.series4],stroke:{width:0},dataLabels:{enabled:!1,formatter(s){return`${Number.parseInt(s)}%`}},legend:{show:!0,position:"bottom",offsetY:10,markers:{width:8,height:8,offsetX:-3},itemMargin:{horizontal:15,vertical:5},fontSize:"13px",fontWeight:400,labels:{colors:U,useSeriesColors:!1}},tooltip:{theme:!1},grid:{padding:{top:15}},plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,value:{fontSize:"24px",color:U,fontWeight:500,offsetY:-20,formatter(s){return`${Number.parseInt(s)}%`}},name:{offsetY:20},total:{show:!0,fontSize:"0.9375rem",fontWeight:400,label:"AVG. Exceptions",color:ze,formatter(){return"30%"}}}}}},responsive:[{breakpoint:420,options:{chart:{height:400}}}]};return(s,a)=>{const r=L,S=q;return p(),f(k,null,{default:t(()=>[e($,{title:"Delivery exceptions"},{append:t(()=>[e(r)]),_:1}),e(w,null,{default:t(()=>[e(S,{type:"donut",height:"400",options:d,series:u})]),_:1})]),_:1})}}}),Ae={class:"text-body-1 font-weight-medium"},Le=b({__name:"LogisticsDeliveryPerformance",setup(c){const i=[{title:"Packages in transit",value:"10k",change:25.8,icon:"tabler-box",color:"primary"},{title:"Packages out for delivery",value:"5k",change:4.3,icon:"tabler-truck",color:"info"},{title:"Packages delivered",value:"15k",change:-12.5,icon:"tabler-circle-check",color:"success"},{title:"Delivery success rate",value:"95%",change:35.6,icon:"tabler-percentage",color:"warning"},{title:"Average delivery time",value:"2.5 Days",change:-2.15,icon:"tabler-clock",color:"secondary"},{title:"Customer satisfaction",value:"4.5/5",change:5.7,icon:"tabler-users",color:"error"}];return(u,d)=>{const s=L;return p(),f(k,null,{default:t(()=>[e($,{title:"Delivery performance"},{append:t(()=>[e(s)]),default:t(()=>[e(ae,null,{default:t(()=>[x(" 12% increase in this month ")]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(le,{class:"card-list"},{default:t(()=>[(p(),D(T,null,I(i,(a,r)=>e(re,{key:r},{prepend:t(()=>[e(H,{color:a.color,variant:"tonal",rounded:"",size:"38",class:"me-1"},{default:t(()=>[e(A,{icon:a.icon,size:"26"},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[o("span",Ae,n(a.value),1)]),default:t(()=>[e(ne,{class:"me-2"},{default:t(()=>[x(n(a.title),1)]),_:2},1024),e(ce,null,{default:t(()=>[o("div",{class:te([a.change>0?"text-success":"text-error","d-flex align-center gap-x-1"])},[e(A,{icon:a.change>0?"tabler-chevron-up":"tabler-chevron-down",size:"20"},null,8,["icon"]),o("div",null,n(a.change)+"%",1)],2)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}}),Re=N(Le,[["__scopeId","data-v-5a2f6c2b"]]),Be=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),De=o("div",{class:"app-timeline-title"}," Myrtle Ullrich ",-1),Ie=o("div",{class:"app-timeline-text"}," 101 Boulder, California(CA), 95959 ",-1),Te=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),We=o("div",{class:"app-timeline-title"}," Barry Schowalter ",-1),He=o("div",{class:"app-timeline-text"}," 939 Orange, California(CA), 92118 ",-1),Ne=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),Pe=o("div",{class:"app-timeline-title"}," Veronica Herman ",-1),Me=o("div",{class:"app-timeline-text"}," 162 Windsor, California(CA), 95492 ",-1),Je=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),Ue=o("div",{class:"app-timeline-title"}," Helen Jacobs ",-1),Fe=o("div",{class:"app-timeline-text"}," 487 Sunset, California(CA), 94043 ",-1),Ee=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),Ye=o("div",{class:"app-timeline-title"}," Myrtle Ullrich ",-1),Ge=o("div",{class:"app-timeline-text"}," 101 Boulder, California(CA), 95959 ",-1),qe=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),Xe=o("div",{class:"app-timeline-title"}," Barry Schowalter ",-1),Qe=o("div",{class:"app-timeline-text"}," 939 Orange, California(CA), 92118 ",-1),je=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),Ke=o("div",{class:"app-timeline-title"}," Veronica Herman ",-1),Ze=o("div",{class:"app-timeline-text"}," 162 Windsor, California(CA), 95492 ",-1),et=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),tt=o("div",{class:"app-timeline-title"}," Helen Jacobs ",-1),ot=o("div",{class:"app-timeline-text"}," 487 Sunset, California(CA), 94043 ",-1),st=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),it=o("div",{class:"app-timeline-title"}," Myrtle Ullrich ",-1),at=o("div",{class:"app-timeline-text"}," 101 Boulder, California(CA), 95959 ",-1),lt=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),rt=o("div",{class:"app-timeline-title"}," Barry Schowalter ",-1),nt=o("div",{class:"app-timeline-text"}," 939 Orange, California(CA), 92118 ",-1),ct=o("div",{class:"text-body-2 text-uppercase text-success"}," Sender ",-1),dt=o("div",{class:"app-timeline-title"}," Veronica Herman ",-1),pt=o("div",{class:"app-timeline-text"}," 162 Windsor, California(CA), 95492 ",-1),ut=o("div",{class:"text-body-2 text-primary text-uppercase"}," Receiver ",-1),mt=o("div",{class:"app-timeline-title"}," Helen Jacobs ",-1),_t=o("div",{class:"app-timeline-text"}," 487 Sunset, California(CA), 94043 ",-1),ht=b({__name:"LogisticsOrderByCountries",setup(c){const i=V("New"),u=["New","Preparing","Shipping"];return(d,s)=>{const a=L;return p(),f(k,{class:"country-order-card"},{default:t(()=>[e($,{title:"Orders by countries",subtitle:"62 deliveries in progress"},{append:t(()=>[e(a)]),_:1}),e(pe,{modelValue:_(i),"onUpdate:modelValue":s[0]||(s[0]=r=>O(i)?i.value=r:null),grow:"",class:"disable-tab-transition"},{default:t(()=>[(p(),D(T,null,I(u,(r,S)=>e(de,{key:S},{default:t(()=>[x(n(r),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(w,null,{default:t(()=>[e(ue,{modelValue:_(i),"onUpdate:modelValue":s[1]||(s[1]=r=>O(i)?i.value=r:null)},{default:t(()=>[e(W,null,{default:t(()=>[o("div",null,[e(C,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Be,De,Ie]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Te,We,He]),_:1})]),_:1}),e(B,{class:"my-4",style:{"border-style":"dashed"}}),e(C,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Ne,Pe,Me]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Je,Ue,Fe]),_:1})]),_:1})])]),_:1}),e(W,null,{default:t(()=>[o("div",null,[e(C,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[Ee,Ye,Ge]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[qe,Xe,Qe]),_:1})]),_:1}),e(B,{class:"my-4",style:{"border-style":"dashed"}}),e(C,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[je,Ke,Ze]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[et,tt,ot]),_:1})]),_:1})])]),_:1}),e(W,null,{default:t(()=>[o("div",null,[e(C,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[st,it,at]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[lt,rt,nt]),_:1})]),_:1}),e(B,{class:"my-4",style:{"border-style":"dashed"}}),e(C,{align:"start","truncate-line":"both",side:"end",density:"compact","line-thickness":"1",class:"v-timeline--variant-outlined"},{default:t(()=>[e(m,{icon:"tabler-circle-check","dot-color":"rgba(var(--v-theme-surface))","icon-color":"success","fill-dot":"",size:"20",elevation:0},{default:t(()=>[ct,dt,pt]),_:1}),e(m,{icon:"tabler-map-pin","dot-color":"rgba(var(--v-theme-surface))","icon-color":"primary","fill-dot":"",size:"20",elevation:0},{default:t(()=>[ut,mt,_t]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),vt={class:"text-link text-base font-weight-medium d-inline-block"},ft={class:"d-flex align-center gap-x-4",style:{"min-inline-size":"240px"}},gt={class:"w-100"},bt=b({__name:"LogisticsOverviewTable",async setup(c){let i,u;const d=V(5),s=V(1),a=V(),r=V(),S=h=>{var v,R;a.value=(v=h.sortBy[0])==null?void 0:v.key,r.value=(R=h.sortBy[0])==null?void 0:R.order},{data:P}=([i,u]=oe(()=>_e(he("/apps/logistics/vehicles",{query:{page:s,itemsPerPage:d,sortBy:a,orderBy:r}}))),i=await i,u(),i),X=J(()=>P.value.vehicles),M=J(()=>P.value.totalVehicles),Q=[{title:"LOCATION",key:"location"},{title:"STARTING ROUTE",key:"startRoute"},{title:"ENDING ROUTE",key:"endRoute"},{title:"WARNINGS",key:"warnings"},{title:"PROGRESS",key:"progress"}],j=h=>{if(h==="No Warnings")return"success";if(h==="fuel problems")return"primary";if(h==="Temperature Not Optimal")return"warning";if(h==="Ecu Not Responding")return"error";if(h==="Oil Leakage")return"info"};return(h,v)=>{const R=L,K=se("RouterLink"),Z=me;return p(),f(k,null,{default:t(()=>[e($,{title:"On Route vehicles"},{append:t(()=>[e(R)]),_:1}),e(B),e(fe,{"items-per-page":_(d),"onUpdate:itemsPerPage":v[1]||(v[1]=l=>O(d)?d.value=l:null),page:_(s),"onUpdate:page":v[2]||(v[2]=l=>O(s)?s.value=l:null),"items-per-page-options":[{value:5,title:"5"},{value:10,title:"10"},{value:20,title:"20"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],"items-length":_(M),items:_(X),"item-value":"location",headers:Q,"show-select":"",class:"text-no-wrap","onUpdate:options":S},{"item.location":t(({item:l})=>[e(H,{variant:"tonal",color:"secondary",class:"me-4",size:"40"},{default:t(()=>[e(A,{icon:"tabler-car",size:"28"})]),_:1}),e(K,{to:{name:"apps-logistics-fleet"}},{default:t(()=>[o("div",vt," VOL-"+n(l.location),1)]),_:2},1024)]),"item.startRoute":t(({item:l})=>[x(n(l.startCity)+", "+n(l.startCountry),1)]),"item.endRoute":t(({item:l})=>[x(n(l.endCity)+", "+n(l.endCountry),1)]),"item.warnings":t(({item:l})=>[e(ve,{color:j(l.warnings),label:"",size:"small"},{default:t(()=>[x(n(l.warnings),1)]),_:2},1032,["color"])]),"item.progress":t(({item:l})=>[o("div",ft,[o("div",gt,[e(z,{"model-value":l.progress,rounded:"",color:"primary",height:8},null,8,["model-value"])]),o("div",null,n(l.progress)+"% ",1)])]),bottom:t(()=>[e(Z,{page:_(s),"onUpdate:page":v[0]||(v[0]=l=>O(s)?s.value=l:null),"items-per-page":_(d),"total-items":_(M)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items-length","items"])]),_:1})}}}),yt="rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))",F="rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity))",xt="rgba(var(--v-border-color), var(--v-border-opacity))",kt=b({__name:"LogisticsShipmentStatistics",setup(c){const i={line:{series1:"#FFB400",series2:"#9055FD",series3:"#7367f029"}},u=[{name:"Shipment",type:"column",data:[38,45,33,38,32,48,45,40,42,37]},{name:"Delivery",type:"line",data:[23,28,23,32,25,42,32,32,26,24]}],d={chart:{type:"line",stacked:!1,parentHeightOffset:0,toolbar:{show:!1},zoom:{enabled:!1}},markers:{size:5,colors:"#fff",strokeColors:i.line.series2,hover:{size:6},borderRadius:4},stroke:{curve:"smooth",width:[0,3],lineCap:"round"},legend:{show:!0,position:"bottom",markers:{width:8,height:8,offsetX:-3},height:40,itemMargin:{horizontal:10,vertical:0},fontSize:"15px",fontFamily:"Open Sans",fontWeight:400,labels:{colors:yt,useSeriesColors:!1},offsetY:10},grid:{strokeDashArray:8,borderColor:xt},colors:[i.line.series1,i.line.series2],fill:{opacity:[1,1]},plotOptions:{bar:{columnWidth:"30%",borderRadius:4,borderRadiusApplication:"end"}},dataLabels:{enabled:!1},xaxis:{tickAmount:10,categories:["1 Jan","2 Jan","3 Jan","4 Jan","5 Jan","6 Jan","7 Jan","8 Jan","9 Jan","10 Jan"],labels:{style:{colors:F,fontSize:"13px",fontWeight:400}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{tickAmount:4,min:0,max:50,labels:{style:{colors:F,fontSize:"13px",fontWeight:400},formatter(s){return`${s}%`}}},responsive:[{breakpoint:1400,options:{chart:{height:320},xaxis:{labels:{style:{fontSize:"10px"}}},legend:{itemMargin:{vertical:0,horizontal:10},fontSize:"13px",offsetY:12}}},{breakpoint:1025,options:{chart:{height:415},plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:982,options:{plotOptions:{bar:{columnWidth:"30%"}}}},{breakpoint:480,options:{chart:{height:250},legend:{offsetY:7}}}]};return(s,a)=>{const r=q;return p(),f(k,null,{default:t(()=>[e($,{title:"Shipment statistics",subtitle:"Total number of deliveries 23.8k"},{append:t(()=>[e(ie,{variant:"tonal","append-icon":"tabler-chevron-down"},{default:t(()=>[x(" January ")]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(r,{id:"shipment-statistics",type:"line",height:"320",options:d,series:u})]),_:1})]),_:1})}}}),y=c=>(E("data-v-c086b833"),c=c(),Y(),c),Ct={class:"d-flex mb-6"},Vt={style:{"inline-size":"39.7%"}},wt=y(()=>o("div",{class:"vehicle-progress-label position-relative mb-6 text-body-1 d-none d-sm-block"}," On the way ",-1)),$t=y(()=>o("div",{class:"text-start text-sm font-weight-medium"}," 39.7% ",-1)),St={style:{"inline-size":"28.3%"}},zt=y(()=>o("div",{class:"vehicle-progress-label position-relative mb-6 text-body-1 d-none d-sm-block"}," Unloading ",-1)),Ot=y(()=>o("div",{class:"text-white text-sm font-weight-medium text-start"}," 28.3% ",-1)),At={style:{"inline-size":"17.4%"}},Lt=y(()=>o("div",{class:"vehicle-progress-label position-relative mb-6 text-body-1 d-none d-sm-block"}," Loading ",-1)),Rt=y(()=>o("div",{class:"text-white text-sm font-weight-medium text-start"}," 17.4% ",-1)),Bt={style:{"inline-size":"14.6%"}},Dt=y(()=>o("div",{class:"vehicle-progress-label position-relative mb-6 text-body-1 d-none d-sm-block"}," Waiting ",-1)),It=y(()=>o("div",{class:"text-sm text-surface font-weight-medium text-start"}," 14.6% ",-1)),Tt={width:"70%",style:{"padding-inline-start":"0 !important"}},Wt={class:"d-flex align-center gap-x-2"},Ht={class:"text-body-1 text-high-emphasis"},Nt={class:"text-h6"},Pt={class:"text-body-1"},Mt=b({__name:"LogisticsVehicleOverview",setup(c){const i=[{icon:"tabler-car",title:"On the way",time:"2hr 10min",percentage:39.7},{icon:"tabler-circle-arrow-down",title:"Unloading",time:"3hr 15min",percentage:28.3},{icon:"tabler-circle-arrow-up",title:"Loading",time:"1hr 24min",percentage:17.4},{icon:"tabler-clock",title:"Waiting",time:"5hr 19min",percentage:14.6}];return(u,d)=>{const s=L;return p(),f(k,null,{default:t(()=>[e($,{title:"Vehicles Overview"},{append:t(()=>[e(s)]),_:1}),e(w,null,{default:t(()=>[o("div",Ct,[o("div",Vt,[wt,e(z,{color:"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))","model-value":"100",height:"46",class:"rounded-e-0 rounded-lg"},{default:t(()=>[$t]),_:1})]),o("div",St,[zt,e(z,{color:"rgb(var(--v-theme-primary))","model-value":"100",class:"rounded-0",height:"46"},{default:t(()=>[Ot]),_:1})]),o("div",At,[Lt,e(z,{color:"rgb(var(--v-theme-info))","model-value":"100",height:"46",class:"rounded-0"},{default:t(()=>[Rt]),_:1})]),o("div",Bt,[Dt,e(z,{color:"rgb(var(--v-tooltip-background))","model-value":"100",height:"46",class:"rounded-s-0 rounded-lg"},{default:t(()=>[It]),_:1})])]),e(ge,{class:"text-no-wrap"},{default:t(()=>[o("tbody",null,[(p(),D(T,null,I(i,(a,r)=>o("tr",{key:r},[o("td",Tt,[o("div",Wt,[e(A,{icon:a.icon,size:"24",class:"text-high-emphasis"},null,8,["icon"]),o("div",Ht,n(a.title),1)])]),o("td",null,[o("h6",Nt,n(a.time),1)]),o("td",null,[o("div",Pt,n(a.percentage)+"% ",1)])])),64))])]),_:1})]),_:1})]),_:1})}}}),Jt=N(Mt,[["__scopeId","data-v-c086b833"]]),To=b({__name:"dashboard",setup(c){return(i,u)=>(p(),f(G,{class:"match-height"},{default:t(()=>[e(g,{cols:"12"},{default:t(()=>[e(Se)]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(Jt)]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(kt)]),_:1}),e(g,{cols:"12",md:"4"},{default:t(()=>[e(Re)]),_:1}),e(g,{cols:"12",md:"4"},{default:t(()=>[e(Oe)]),_:1}),e(g,{cols:"12",md:"4"},{default:t(()=>[e(ht)]),_:1}),e(g,{cols:"12"},{default:t(()=>[e(bt)]),_:1})]),_:1}))}});export{To as default};
