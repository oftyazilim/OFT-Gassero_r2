import{c as Z,a as W,_ as x}from"./TheCustomizer.vue_vue_type_style_index_0_lang-Bs3ehLFP.js";import ee from"./Footer-DF5KgUgi.js";import{_ as te}from"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang-CfouiAA6.js";import{_ as ae}from"./UserProfile.vue_vue_type_script_setup_true_lang-JOMwiq-z.js";import{d as $,L as G,T as B,r as S,M as ie,N as se,O as F,l as z,j as K,w,a as Y,o,g as p,f as c,e as m,z as k,b as g,n as e,p as l,I as j,v as C,J as A,h,q as f,c as R,F as q,i as H,x as T,P as oe,Q as re,k as ne,R as le,m as M,U as V,s as D,t as P,y as L,W as U,X as ce,Y as de,Z as pe,$ as O,a0 as ve,A as me,B as ue,V as he}from"./main-CXefX_qh.js";import{C as be}from"./vue3-perfect-scrollbar-BT2Ou4oR.js";import{V as ge}from"./VNodeRenderer-D_3YyqLZ.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as fe}from"./pageTitle-BB4Xy5Fv.js";import{V as ye}from"./VSpacer-OtyVf5vj.js";import"./VDivider-B8BIZrEP.js";import"./VChip-Dx4QNr20.js";import"./VSlideGroup-CNPi0L39.js";import"./VAvatar-a73hCTk3.js";import"./VImg-Db788kHt.js";import"./index-DT3SyRRd.js";import"./CustomRadiosWithImage-D1DOfkRS.js";import"./VRow-qTTVFZ4i.js";/* empty css              */import"./VCol-Dzvr-cnK.js";import"./form-ClP579eF.js";import"./VRadioGroup-XCyxBFmo.js";import"./VSelectionControl-BoOcbjQs.js";import"./VInput-BI9uJ0Ce.js";import"./VBadge-CrQldzvd.js";import"./VMenu-DAf6uba2.js";import"./VOverlay-E84Zkpn-.js";import"./easing-CjukEv2V.js";import"./delay-RGhQcOZ6.js";import"./lazy-CAMkS5e7.js";import"./scopeId-BgBx1Ex_.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DjZpsU5U.js";import"./VList-5j6JHPeN.js";import"./ssrBoot-BBXTmuIy.js";import"./VSlider-BQDZjf_o.js";import"./VSliderTrack-BTW2MXH2.js";import"./VSwitch-BQrNxKr_.js";import"./VNavigationDrawer-Gg8dwJd6.js";import"./VTooltip-CSAAMC3w.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-B67lS2wl.js";import"./VTextField-CN3aek7z.js";/* empty css                   */import"./VCounter-Cxc0KNa-.js";import"./VField-CeCYSswt.js";import"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-UxdDcTYf.js";import"./axios-CCb-kr4I.js";import"./VCard-pJfFDOSH.js";import"./VCardText-BW9gFSa-.js";import"./VForm-CD_GLPlO.js";import"./VDialog-Cm1FNAkS.js";import"./useAbility-D1qkTrSg.js";import"./VListItemAction-zWjsJnCh.js";const Ne=$({name:"TransitionExpand",setup(y,{slots:r}){const v=a=>{const N=getComputedStyle(a).width;a.style.width=N,a.style.position="absolute",a.style.visibility="hidden",a.style.height="auto";const u=getComputedStyle(a).height;a.style.width="",a.style.position="",a.style.visibility="",a.style.height="0px",getComputedStyle(a).height,requestAnimationFrame(()=>{a.style.height=u})},i=a=>{a.style.height="auto"},s=a=>{const N=getComputedStyle(a).height;a.style.height=N,getComputedStyle(a).height,requestAnimationFrame(()=>{a.style.height="0px"})};return()=>G(G(B),{name:"expand",onEnter:v,onAfterEnter:i,onLeave:s},()=>{var a;return(a=r.default)==null?void 0:a.call(r)})}}),_e=J(Ne,[["__scopeId","data-v-bc460233"]]),ke=y=>(oe("data-v-96c3e397"),y=y(),re(),y),je={class:"nav-header"},Ae={class:"header-action"},Ce=ke(()=>m("div",{class:"vertical-nav-items-shadow"},null,-1)),Ve=$({__name:"VerticalNav",props:{tag:{default:"aside"},navItems:{},isOverlayNavActive:{type:Boolean},toggleIsOverlayNavActive:{}},setup(y){const r=y,v=S(),i=ie(v);se(F,i);const s=z(),a=t=>"heading"in t?Be:"children"in t?Ie:Q,N=K();w(()=>N.name,()=>{r.toggleIsOverlayNavActive(!1)});const u=S(!1),d=t=>u.value=t,_=t=>{u.value=t.target.scrollTop>0},I=s.isVerticalNavMini(i);return(t,n)=>{const b=Y("RouterLink");return o(),p(h(r.tag),{ref_key:"refNav",ref:v,class:T(["layout-vertical-nav",[{"overlay-nav":e(s).isLessThanOverlayNavBreakpoint,hovered:e(i),visible:t.isOverlayNavActive,scrolled:e(u)}]])},{default:c(()=>[m("div",je,[k(t.$slots,"nav-header",{},()=>[g(b,{to:"/",class:"app-logo app-title-wrapper"},{default:c(()=>[g(e(ge),{nodes:e(l).app.logo},null,8,["nodes"]),g(B,{name:"vertical-nav-app-title"},{default:c(()=>[j(m("h1",{class:"app-logo-title"},C(e(l).app.title),513),[[A,!e(I)]])]),_:1})]),_:1}),m("div",Ae,[j((o(),p(h(e(l).app.iconRenderer||"div"),f({class:["d-none nav-unpin",e(s).isVerticalNavCollapsed&&"d-lg-block"]},e(l).icons.verticalNavUnPinned,{onClick:n[0]||(n[0]=E=>e(s).isVerticalNavCollapsed=!e(s).isVerticalNavCollapsed)}),null,16,["class"])),[[A,e(s).isVerticalNavCollapsed]]),j((o(),p(h(e(l).app.iconRenderer||"div"),f({class:["d-none nav-pin",!e(s).isVerticalNavCollapsed&&"d-lg-block"]},e(l).icons.verticalNavPinned,{onClick:n[1]||(n[1]=E=>e(s).isVerticalNavCollapsed=!e(s).isVerticalNavCollapsed)}),null,16,["class"])),[[A,!e(s).isVerticalNavCollapsed]]),(o(),p(h(e(l).app.iconRenderer||"div"),f({class:"d-lg-none"},e(l).icons.close,{onClick:n[2]||(n[2]=E=>t.toggleIsOverlayNavActive(!1))}),null,16))])],!0)]),k(t.$slots,"before-nav-items",{},()=>[Ce],!0),k(t.$slots,"nav-items",{updateIsVerticalNavScrolled:d},()=>[(o(),p(e(be),{key:e(s).isAppRTL,tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:_},{default:c(()=>[(o(!0),R(q,null,H(t.navItems,(E,X)=>(o(),p(h(a(E)),{key:X,item:E},null,8,["item"]))),128))]),_:1}))],!0),k(t.$slots,"after-nav-items",{},void 0,!0)]),_:3},8,["class"])}}}),Se=J(Ve,[["__scopeId","data-v-96c3e397"]]),$e={class:"nav-group-children"},Ie=$({name:"VerticalNavGroup",__name:"VerticalNavGroup",props:{item:{}},setup(y){const r=y,v=K(),i=ne(),s=z(),a=s.isVerticalNavMini(),N=le(F,S(!1)),u=S(!1),d=S(!1),_=t=>t.some(n=>{let b=V.value.includes(n.title);return"children"in n&&(b=_(n.children)||b),b}),I=t=>{t.forEach(n=>{"children"in n&&I(n.children),V.value=V.value.filter(b=>b!==n.title)})};return w(()=>v.path,()=>{const t=M(r.item.children,i);d.value=t&&!s.isVerticalNavMini(N).value,u.value=t},{immediate:!0}),w(d,t=>{const n=V.value.indexOf(r.item.title);t&&n===-1?V.value.push(r.item.title):!t&&n!==-1&&(V.value.splice(n,1),I(r.item.children))},{immediate:!0}),w(V,t=>{if(t.at(-1)===r.item.title)return;const b=M(r.item.children,i);b||_(r.item.children)||(d.value=b,u.value=b)},{deep:!0}),w(s.isVerticalNavMini(N),t=>{d.value=t?!1:u.value}),(t,n)=>e(Z)(t.item)?(o(),R("li",{key:0,class:T(["nav-group",[{active:e(u),open:e(d),disabled:t.item.disable}]])},[m("div",{class:"nav-group-label",onClick:n[0]||(n[0]=b=>d.value=!e(d))},[(o(),p(h(e(l).app.iconRenderer||"div"),f(t.item.icon||e(l).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),(o(),p(h(U),{name:"transition-slide-x"},{default:c(()=>[j((o(),p(h(e(l).app.i18n.enable?"i18n-t":"span"),f(e(D)(t.item.title,"span"),{key:"title",class:"nav-item-title"}),{default:c(()=>[P(C(t.item.title),1)]),_:1},16)),[[A,!e(a)]]),t.item.badgeContent?j((o(),p(h(e(l).app.i18n.enable?"i18n-t":"span"),f({key:0},e(D)(t.item.badgeContent,"span"),{key:"badge",class:["nav-item-badge",t.item.badgeClass]}),{default:c(()=>[P(C(t.item.badgeContent),1)]),_:1},16,["class"])),[[A,!e(a)]]):L("",!0),j((o(),p(h(e(l).app.iconRenderer||"div"),f(e(l).icons.chevronRight,{key:"arrow",class:"nav-group-arrow"}),null,16)),[[A,!e(a)]])]),_:1}))]),g(e(_e),null,{default:c(()=>[j(m("ul",$e,[(o(!0),R(q,null,H(t.item.children,b=>(o(),p(h("children"in b?"VerticalNavGroup":e(Q)),{key:b.title,item:b},null,8,["item"]))),128))],512),[[A,e(d)]])]),_:1})],2)):L("",!0)}}),we={class:"layout-content-wrapper"},Te={class:"navbar-content-container"},Re={class:"layout-page-content"},Ee={class:"page-content-container"},De={class:"layout-footer"},Pe={class:"footer-content-container"},Le=$({__name:"VerticalNavLayout",props:{navItems:{},verticalNavAttrs:{default:()=>({})}},setup(y){const r=y,{width:v}=ce(),i=z(),s=S(!1),a=S(!1),N=de(s);pe(s,a),w(v,()=>{!i.isLessThanOverlayNavBreakpoint&&a.value&&(a.value=!1)});const u=O(()=>{const d=ve(r,"verticalNavAttrs"),{wrapper:_,wrapperProps:I,...t}=d.value;return{verticalNavWrapper:_,verticalNavWrapperProps:I,additionalVerticalNavAttrs:t}});return(d,_)=>(o(),R("div",{class:T(["layout-wrapper",e(i)._layoutClasses])},[(o(),p(h(e(u).verticalNavWrapper?e(u).verticalNavWrapper:"div"),f(e(u).verticalNavWrapperProps,{class:"vertical-nav-wrapper"}),{default:c(()=>[g(e(Se),f({"is-overlay-nav-active":e(s),"toggle-is-overlay-nav-active":e(N),"nav-items":r.navItems},{...e(u).additionalVerticalNavAttrs}),{"nav-header":c(()=>[k(d.$slots,"vertical-nav-header")]),"before-nav-items":c(()=>[k(d.$slots,"before-vertical-nav-items")]),_:3},16,["is-overlay-nav-active","toggle-is-overlay-nav-active","nav-items"])]),_:3},16)),m("div",we,[m("header",{class:T(["layout-navbar",[{"navbar-blur":e(i).isNavbarBlurEnabled}]])},[m("div",Te,[k(d.$slots,"navbar",{toggleVerticalOverlayNavActive:e(N)})])],2),m("main",Re,[m("div",Ee,[k(d.$slots,"default")])]),m("footer",De,[m("div",Pe,[k(d.$slots,"footer")])])]),m("div",{class:T(["layout-overlay",[{visible:e(a)}]]),onClick:_[0]||(_[0]=()=>{a.value=!e(a)})},null,2)],2))}}),Q=$({__name:"VerticalNavLink",props:{item:{}},setup(y){const v=z().isVerticalNavMini();return(i,s)=>e(W)(i.item.action,i.item.subject)?(o(),R("li",{key:0,class:T(["nav-link",{disabled:i.item.disable}])},[(o(),p(h(i.item.to?"RouterLink":"a"),f(e(ue)(i.item),{class:{"router-link-active router-link-exact-active":e(me)(i.item,i.$router)}}),{default:c(()=>[(o(),p(h(e(l).app.iconRenderer||"div"),f(i.item.icon||e(l).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),g(U,{name:"transition-slide-x"},{default:c(()=>[j((o(),p(h(e(l).app.i18n.enable?"i18n-t":"span"),f({key:"title",class:"nav-item-title"},e(D)(i.item.title,"span")),{default:c(()=>[P(C(i.item.title),1)]),_:1},16)),[[A,!e(v)]]),i.item.badgeContent?j((o(),p(h(e(l).app.i18n.enable?"i18n-t":"span"),f({key:"badge",class:["nav-item-badge",i.item.badgeClass]},e(D)(i.item.badgeContent,"span")),{default:c(()=>[P(C(i.item.badgeContent),1)]),_:1},16,["class"])),[[A,!e(v)]]):L("",!0)]),_:1})]),_:1},16,["class"]))],2)):L("",!0)}}),ze={key:0,class:"nav-section-title"},Oe={class:"title-wrapper"},Be=$({__name:"VerticalNavSectionTitle",props:{item:{}},setup(y){const v=z().isVerticalNavMini();return(i,s)=>e(W)(i.item.action,i.item.subject)?(o(),R("li",ze,[m("div",Oe,[g(B,{name:"vertical-nav-section-title",mode:"out-in"},{default:c(()=>[(o(),p(h(e(v)?e(l).app.iconRenderer:e(l).app.i18n.enable?"i18n-t":"span"),f({key:e(v),class:e(v)?"placeholder-icon":"title-text"},{...e(l).icons.sectionTitlePlaceholder,...e(D)(i.item.heading,"span")}),{default:c(()=>[P(C(e(v)?null:i.item.heading),1)]),_:1},16,["class"]))]),_:1})])])):L("",!0)}}),Ge=[{heading:"Dashboards"},{title:"Dashboards",icon:{icon:"tabler-smart-home"},children:[{title:"Genel Durum",to:"home-page",action:"zz",subject:"zz"},{title:"YTK Dashboard",to:"dashboards-dashboard-ytk",action:"read_dashboard",subject:"Dashboard"},{title:"DTK Dashboard",to:"dashboards-dashboard-dtk",action:"read_dashboard",subject:"Dashboard"},{title:"ESD Dashboard",to:"dashboards-dashboard-esd",action:"read_dashboard",subject:"Dashboard"},{title:"Sensör Dashboard",to:"dashboards-dashboard-snsr",action:"read_dashboard",subject:"Dashboard"}]}],Me=[{heading:"PLANLAMA / ÜRETİM"},{title:"Planlama",icon:{icon:"tabler-calendar-time"},action:"read",subject:"Dashboard",children:[{title:"İş Emirleri",to:"planlama-isemirleri",action:"readx",subject:"Dashboardx"}]},{title:"Üretim",icon:{icon:"tabler-settings-bolt"},action:"readx",subject:"Dashboardx",children:[{title:"Üretim Girişleri",to:"planlama-uretimgirisleri",action:"readx",subject:"SuperAdminx"},{title:"Iskarta Girişleri",to:"planlama-iskartagirisleri",action:"readx",subject:"SuperAdminx"},{title:"Eşanjör Üretimleri",to:"planlama-esanjor-uretim",action:"readx",subject:"SuperAdminx"},{title:"Kazan Testleri",to:"uretim-kazantestleri",action:"read",subject:"SuperAdmin"}]}],We=[{heading:"Stoklar"},{title:"Eşanjör Stok",icon:{icon:"tabler-building-warehouse"},to:"stok-stok-esanjor",action:"zz",subject:"zz"}],Fe=[{heading:"TANIMLAR"},{title:"Tanımlar",icon:{icon:"tabler-bookmark-edit"},children:[{title:"Mamül Kartları",to:"planlama-mamulkartlari",action:"read",subject:"Planlama"},{title:"Genel Tanımlar",to:"genel-tanimlar",action:"read",subject:"Planlama"}]}],Ke=[{heading:"prosesler"},{title:"Eşanjör",icon:{icon:"tabler-progress-bolt"},action:"read",subject:"Uretim",children:[{title:"Serpantin Büküm",to:"uretim-esanjor-bukum",action:"read",subject:"EsBukum"},{title:"Serpantin End-Forming",to:"uretim-esanjor-havsa",action:"read",subject:"EsEndForm"},{title:"Yıkama - Sızdırmazlık",to:"uretim-esanjor-test",action:"read",subject:"EsYikama"},{title:"Serpantin Açma-Tarak",to:"uretim-esanjor-acma",action:"read",subject:"EsAcma"},{title:"Eşanjör Montaj",to:"uretim-esanjor-montaj",action:"read",subject:"EsMontaj"},{title:"Eşanjör Rework",to:"uretim-rework",action:"read",subject:"EsRework"}]}],Ye=[{heading:"AYARLAR"},{title:"Ayarlar",icon:{icon:"tabler-settings-question"},children:[{title:"Kullanıcılar",to:"personel-kullanicilar",action:"read",subject:"Planlama"},{title:"Roller",to:"personel-roller",action:"read",subject:"Planlama"}]}],qe=[...Ge,...Me,...We,...Ke,...Fe,...Ye],He={class:"d-flex h-100 align-center"},Ue={class:"text-h5 m-0 p-0"},Je={class:"text-h5 m-0 ms-2 p-0"},Jt=$({__name:"DefaultLayoutWithVerticalNav",setup(y){const r=fe(),v=O(()=>r.title),i=O(()=>r.toplam);return(s,a)=>{const N=Y("IconBtn"),u=x;return o(),p(e(Le),{"nav-items":e(qe)},{navbar:c(({toggleVerticalOverlayNavActive:d})=>[m("div",He,[g(N,{id:"vertical-nav-toggle-btn",class:"ms-n3 d-lg-none",onClick:_=>d(!0)},{default:c(()=>[g(he,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"]),m("h5",Ue,C(v.value),1),m("h5",Je,C(i.value),1),g(ye),g(te,{style:{"margin-right":"10px"}}),g(ae)])]),footer:c(()=>[g(ee)]),default:c(()=>[k(s.$slots,"default"),g(u)]),_:3},8,["nav-items"])}}});export{Jt as default};
