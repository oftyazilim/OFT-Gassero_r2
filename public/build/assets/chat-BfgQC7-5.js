import{a as R,f as ne,b as le}from"./formatters-Bnv68_Nh.js";import{bc as ie,d as B,n as e,o as c,c as _,e as s,b as t,f as i,V as p,x as S,g as V,v as C,ai as F,t as O,F as U,y as A,a as j,$ as E,bf as ce,aW as k,i as P,I as Q,J as X,r as w,b9 as re,w as de,aN as ue,a$ as he,a_ as Y,bg as me,bh as Z}from"./main-CXefX_qh.js";import{C as J}from"./vue3-perfect-scrollbar-BT2Ou4oR.js";import{u as pe}from"./useApi-BhqtdETj.js";import{c as fe}from"./createUrl-BDnH0n5U.js";import{$ as G}from"./api-D8QFSLsW.js";import{V as T}from"./VAvatar-a73hCTk3.js";import{V as D}from"./VImg-Db788kHt.js";import{V as z}from"./VBadge-CrQldzvd.js";import{_ as ve}from"./AppTextField.vue_vue_type_script_setup_true_lang-B67lS2wl.js";import{V as se}from"./VDivider-B8BIZrEP.js";import{_ as _e}from"./AppTextarea.vue_vue_type_script_setup_true_lang-faahSrf4.js";import{V as be,a as xe}from"./VRadioGroup-XCyxBFmo.js";import{V as ee}from"./VSwitch-BQrNxKr_.js";import{u as ge,V as Ce,a as ye}from"./VMain-D005wY8c.js";import{V as q}from"./VNavigationDrawer-Gg8dwJd6.js";import{V as $e}from"./VSpacer-OtyVf5vj.js";import{V as Ve}from"./VForm-CD_GLPlO.js";import{V as ke}from"./VTextField-CN3aek7z.js";import"./helpers-BGv4x_9E.js";import"./index-9rIf2CJL.js";import"./index-DT3SyRRd.js";import"./form-ClP579eF.js";import"./VTextarea-z25BnepS.js";/* empty css                   */import"./VCounter-Cxc0KNa-.js";import"./VField-CeCYSswt.js";import"./easing-CjukEv2V.js";import"./VInput-BI9uJ0Ce.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelectionControl-BoOcbjQs.js";import"./ssrBoot-BBXTmuIy.js";import"./delay-RGhQcOZ6.js";import"./scopeId-BgBx1Ex_.js";/* empty css              */const L=()=>({resolveAvatarBadgeVariant:a=>a==="online"?"success":a==="busy"?"error":a==="away"?"warning":"secondary"}),N=ie("chat",{state:()=>({contacts:[],chatsContacts:[],profileUser:void 0,activeChat:null}),actions:{async fetchChatsAndContacts(y){const{data:a,error:n}=await pe(fe("/apps/chat/chats-and-contacts",{query:{q:y}}));if(n.value)console.log(n.value);else{const{chatsContacts:r,contacts:f,profileUser:l}=a.value;this.chatsContacts=r,this.contacts=f,this.profileUser=l}},async getChat(y){const a=await G(`/apps/chat/chats/${y}`);this.activeChat=a},async sendMsg(y){var u,o,v,h,m;const a=(u=this.profileUser)==null?void 0:u.id,n=await G(`apps/chat/chats/${(o=this.activeChat)==null?void 0:o.contact.id}`,{method:"POST",body:{message:y,senderId:a}}),{msg:r,chat:f}=n;if(f!==void 0){const x=this.activeChat;this.chatsContacts.push({...x.contact,chat:{id:f.id,lastMessage:[],unseenMsgs:0,messages:[r]}}),this.activeChat&&(this.activeChat.chat={id:f.id,messages:[r],unseenMsgs:0,userId:(v=this.activeChat)==null?void 0:v.contact.id})}else(m=(h=this.activeChat)==null?void 0:h.chat)==null||m.messages.push(r);const l=this.chatsContacts.find(x=>this.activeChat?x.id===this.activeChat.contact.id:!1);l.chat.lastMessage=r}}}),we={class:"text-center px-6"},Ue={key:1,class:"text-3xl"},Ie={class:"text-h5"},Se={class:"text-capitalize text-body-1 mb-0"},Ae={class:"my-6"},Te=s("div",{class:"text-sm text-disabled"}," ABOUT ",-1),ze={class:"mt-1 mb-6"},Be={class:"mb-6"},De=s("div",{class:"text-sm text-disabled mb-1"}," PERSONAL INFORMATION ",-1),Ne={class:"d-flex align-center text-high-emphasis pa-2"},Me=s("div",{class:"text-base"}," lucifer@email.com ",-1),Oe={class:"d-flex align-center text-high-emphasis pa-2"},Pe=s("div",{class:"text-base"}," +1(123) 456 - 7890 ",-1),Le={class:"d-flex align-center text-high-emphasis pa-2"},Fe=s("div",{class:"text-base"}," Mon - Fri 10AM - 8PM ",-1),Ee=s("div",{class:"text-sm text-disabled mb-1"}," OPTIONS ",-1),Re={class:"d-flex align-center text-high-emphasis pa-2"},je=s("div",{class:"text-base"}," Add Tag ",-1),Je={class:"d-flex align-center text-high-emphasis pa-2"},qe=s("div",{class:"text-base"}," Important Contact ",-1),He={class:"d-flex align-center text-high-emphasis pa-2"},We=s("div",{class:"text-base"}," Shared Media ",-1),Ke={class:"d-flex align-center text-high-emphasis pa-2"},Qe=s("div",{class:"text-base"}," Delete Contact ",-1),Xe={class:"d-flex align-center text-high-emphasis pa-2"},Ye=s("div",{class:"text-base"}," Block Contact ",-1),Ze=B({__name:"ChatActiveChatUserProfileSidebarContent",emits:["close"],setup(y){const a=N(),{resolveAvatarBadgeVariant:n}=L();return(r,f)=>{const l=j("IconBtn");return e(a).activeChat?(c(),_(U,{key:0},[s("div",{class:S(["pt-6 px-6",r.$vuetify.locale.isRtl?"text-left":"text-right"])},[t(l,{onClick:f[0]||(f[0]=u=>r.$emit("close"))},{default:i(()=>[t(p,{icon:"tabler-x",class:"text-medium-emphasis"})]),_:1})],2),s("div",we,[t(z,{location:"bottom right","offset-x":"7","offset-y":"4",bordered:"",color:e(n)(e(a).activeChat.contact.status),class:"chat-user-profile-badge mb-5"},{default:i(()=>[t(T,{size:"84",variant:e(a).activeChat.contact.avatar?void 0:"tonal",color:e(a).activeChat.contact.avatar?void 0:e(n)(e(a).activeChat.contact.status)},{default:i(()=>[e(a).activeChat.contact.avatar?(c(),V(D,{key:0,src:e(a).activeChat.contact.avatar},null,8,["src"])):(c(),_("span",Ue,C(("avatarText"in r?r.avatarText:e(R))(e(a).activeChat.contact.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color"]),s("h5",Ie,C(e(a).activeChat.contact.fullName),1),s("p",Se,C(e(a).activeChat.contact.role),1)]),t(e(J),{class:"ps-chat-user-profile-sidebar-content text-medium-emphasis pb-6 px-6",options:{wheelPropagation:!1}},{default:i(()=>[s("div",Ae,[Te,s("p",ze,C(e(a).activeChat.contact.about),1)]),s("div",Be,[De,s("div",Ne,[t(p,{class:"me-2",icon:"tabler-mail",size:"22"}),Me]),s("div",Oe,[t(p,{class:"me-2",icon:"tabler-phone",size:"22"}),Pe]),s("div",Le,[t(p,{class:"me-2",icon:"tabler-clock",size:"22"}),Fe])]),s("div",null,[Ee,s("div",Re,[t(p,{class:"me-2",icon:"tabler-badge",size:"22"}),je]),s("div",Je,[t(p,{class:"me-2",icon:"tabler-star",size:"22"}),qe]),s("div",He,[t(p,{class:"me-2",icon:"tabler-photo",size:"22"}),We]),s("div",Ke,[t(p,{class:"me-2",icon:"tabler-trash",size:"22"}),Qe]),s("div",Xe,[t(p,{icon:"tabler-ban",class:"me-2",size:"22"}),Ye]),t(F,{block:"",color:"error","append-icon":"tabler-trash",class:"mt-6"},{default:i(()=>[O(" Delete Contact ")]),_:1})])]),_:1})],64)):A("",!0)}}}),Ge={key:1},et={class:"flex-grow-1 ms-4 overflow-hidden"},tt={class:"text-base text-high-emphasis mb-0"},st={class:"mb-0 text-truncate text-body-2"},at={key:0,class:"d-flex flex-column align-self-start"},ot={class:"text-body-2 text-disabled whitespace-no-wrap"},te=B({__name:"ChatContact",props:{isChatContact:{type:Boolean,default:!1},user:{}},setup(y){const a=y,n=N(),{resolveAvatarBadgeVariant:r}=L(),f=E(()=>{var u,o;const l=((u=n.activeChat)==null?void 0:u.contact.id)===a.user.id;return(a.isChatContact||!((o=n.activeChat)!=null&&o.chat))&&l});return(l,u)=>(c(),_("li",{key:e(n).chatsContacts.length,class:S(["chat-contact cursor-pointer d-flex align-center",{"chat-contact-active":e(f)}])},[t(z,{dot:"",location:"bottom right","offset-x":"3","offset-y":"0",color:e(r)(a.user.status),bordered:"","model-value":a.isChatContact},{default:i(()=>[t(T,{size:"40",variant:a.user.avatar?void 0:"tonal",color:a.user.avatar?void 0:e(r)(a.user.status)},{default:i(()=>[a.user.avatar?(c(),V(D,{key:0,src:a.user.avatar,alt:"John Doe"},null,8,["src"])):(c(),_("span",Ge,C(("avatarText"in l?l.avatarText:e(R))(l.user.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color","model-value"]),s("div",et,[s("p",tt,C(a.user.fullName),1),s("p",st,C(a.isChatContact&&"chat"in a.user?a.user.chat.lastMessage.message:a.user.about),1)]),a.isChatContact&&"chat"in a.user?(c(),_("div",at,[s("div",ot,C(("formatDateToMonthShort"in l?l.formatDateToMonthShort:e(ne))(a.user.chat.lastMessage.time)),1),a.user.chat.unseenMsgs?(c(),V(z,{key:0,color:"error",inline:"",content:a.user.chat.unseenMsgs,class:"ms-auto"},null,8,["content"])):A("",!0)])):A("",!0)],2))}}),nt={key:0,class:"chat-list-header"},lt=s("li",{class:"list-none"},[s("h5",{class:"chat-contact-header text-primary text-h5"}," Chats ")],-1),it={class:"no-chat-items-text text-disabled"},ct=s("li",{class:"list-none pt-2"},[s("h5",{class:"chat-contact-header text-primary text-h5"}," Contacts ")],-1),rt={class:"no-chat-items-text text-disabled"},dt=B({__name:"ChatLeftSidebarContent",props:{search:{},isDrawerOpen:{type:Boolean}},emits:["openChatOfContact","showUserProfile","close","update:search"],setup(y,{emit:a}){const n=y,r=a,{resolveAvatarBadgeVariant:f}=L(),l=ce(n,"search",r),u=N();return(o,v)=>{const h=ve,m=j("IconBtn");return c(),_(U,null,[e(u).profileUser?(c(),_("div",nt,[t(z,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:e(f)(e(u).profileUser.status),bordered:""},{default:i(()=>[t(T,{size:"40",class:"cursor-pointer",onClick:v[0]||(v[0]=x=>o.$emit("showUserProfile"))},{default:i(()=>[t(D,{src:e(u).profileUser.avatar,alt:"John Doe"},null,8,["src"])]),_:1})]),_:1},8,["color"]),t(h,{modelValue:e(l),"onUpdate:modelValue":v[1]||(v[1]=x=>k(l)?l.value=x:null),placeholder:"Search...","prepend-inner-icon":"tabler-search",class:"ms-4 me-1 chat-list-search"},null,8,["modelValue"]),o.$vuetify.display.smAndDown?(c(),V(m,{key:0,onClick:v[2]||(v[2]=x=>o.$emit("close"))},{default:i(()=>[t(p,{icon:"tabler-x",class:"text-medium-emphasis"})]),_:1})):A("",!0)])):A("",!0),t(se),t(e(J),{tag:"ul",class:"d-flex flex-column gap-y-1 chat-contacts-list px-3 py-2 list-none",options:{wheelPropagation:!1}},{default:i(()=>[lt,(c(!0),_(U,null,P(e(u).chatsContacts,x=>(c(),V(te,{key:`chat-${x.id}`,user:x,"is-chat-contact":"",onClick:I=>o.$emit("openChatOfContact",x.id)},null,8,["user","onClick"]))),128)),Q(s("span",it,"No chats found",512),[[X,!e(u).chatsContacts.length]]),ct,(c(!0),_(U,null,P(e(u).contacts,x=>(c(),V(te,{key:`chat-${x.id}`,user:x,onClick:I=>o.$emit("openChatOfContact",x.id)},null,8,["user","onClick"]))),128)),Q(s("span",rt,"No contacts found",512),[[X,!e(u).contacts.length]])]),_:1})],64)}}}),ut={class:"chat-log pa-6"},ht={class:"mb-0 text-base"},mt={class:"text-sm ms-2 text-disabled"},pt=B({__name:"ChatLog",setup(y){const a=N(),n=E(()=>{var l,u;return{id:(l=a.activeChat)==null?void 0:l.contact.id,avatar:(u=a.activeChat)==null?void 0:u.contact.avatar}}),r=l=>l.isSeen?{icon:"tabler-checks",color:"success"}:l.isDelivered?{icon:"tabler-checks",color:void 0}:{icon:"tabler-check",color:void 0},f=E(()=>{let l=[];const u=[];if(a.activeChat.chat){l=a.activeChat.chat.messages;let o=l[0].senderId,v={senderId:o,messages:[]};l.forEach((h,m)=>{o===h.senderId?v.messages.push({message:h.message,time:h.time,feedback:h.feedback}):(o=h.senderId,u.push(v),v={senderId:h.senderId,messages:[{message:h.message,time:h.time,feedback:h.feedback}]}),m===l.length-1&&u.push(v)})}return u});return(l,u)=>(c(),_("div",ut,[(c(!0),_(U,null,P(e(f),(o,v)=>(c(),_("div",{key:o.senderId+String(v),class:S(["chat-group d-flex align-start",[{"flex-row-reverse":o.senderId!==e(n).id,"mb-6":e(f).length-1!==v}]])},[s("div",{class:S(["chat-avatar",o.senderId!==e(n).id?"ms-4":"me-4"])},[t(T,{size:"32"},{default:i(()=>{var h;return[t(D,{src:o.senderId===e(n).id?e(n).avatar:(h=e(a).profileUser)==null?void 0:h.avatar},null,8,["src"])]}),_:2},1024)],2),s("div",{class:S(["chat-body d-inline-flex flex-column",o.senderId!==e(n).id?"align-end":"align-start"])},[(c(!0),_(U,null,P(o.messages,(h,m)=>(c(),_("div",{key:h.time,class:S(["chat-content py-2 px-4 elevation-2",[o.senderId===e(n).id?"chat-left":"bg-primary text-white chat-right",o.messages.length-1!==m?"mb-2":"mb-1"]]),style:{"background-color":"rgb(var(--v-theme-surface))"}},[s("p",ht,C(h.message),1)],2))),128)),s("div",{class:S({"text-right":o.senderId!==e(n).id})},[o.senderId!==e(n).id?(c(),V(p,{key:0,size:"16",color:r(o.messages[o.messages.length-1].feedback).color},{default:i(()=>[O(C(r(o.messages[o.messages.length-1].feedback).icon),1)]),_:2},1032,["color"])):A("",!0),s("span",mt,C(("formatDate"in l?l.formatDate:e(le))(o.messages[o.messages.length-1].time,{hour:"numeric",minute:"numeric"})),1)],2)],2)],2))),128))]))}}),ft={class:"pt-2 me-2 text-end"},vt={class:"text-center px-6"},_t={key:1,class:"text-3xl"},bt={class:"text-h5"},xt={class:"text-capitalize text-medium-emphasis mb-0"},gt={class:"my-6 text-medium-emphasis"},Ct=s("div",{for:"textarea-user-about",class:"text-base text-disabled"}," ABOUT ",-1),yt={class:"mb-6"},$t=s("div",{class:"text-base text-disabled"}," STATUS ",-1),Vt={class:"text-medium-emphasis chat-settings-section"},kt=s("div",{class:"text-base text-disabled"}," SETTINGS ",-1),wt={class:"d-flex align-center pa-2"},Ut={class:"text-high-emphasis d-flex align-center justify-space-between flex-grow-1"},It=s("div",{class:"text-body-1 text-high-emphasis"}," Two-step Verification ",-1),St={class:"d-flex align-center pa-2"},At={class:"text-high-emphasis d-flex align-center justify-space-between flex-grow-1"},Tt=s("div",{class:"text-body-1 text-high-emphasis"}," Notification ",-1),zt={class:"d-flex align-center pa-2"},Bt=s("div",{class:"text-body-1 text-high-emphasis"}," Invite Friends ",-1),Dt={class:"d-flex align-center pa-2"},Nt=s("div",{class:"text-body-1 text-high-emphasis"}," Delete Account ",-1),Mt=B({__name:"ChatUserProfileSidebarContent",emits:["close"],setup(y){const a=N(),{resolveAvatarBadgeVariant:n}=L(),r=[{title:"Online",value:"online",color:"success"},{title:"Away",value:"away",color:"warning"},{title:"Do not disturb",value:"busy",color:"error"},{title:"Offline",value:"offline",color:"secondary"}],f=w(!0),l=w(!1);return(u,o)=>{const v=j("IconBtn"),h=_e;return e(a).profileUser?(c(),_(U,{key:0},[s("div",ft,[t(v,{onClick:o[0]||(o[0]=m=>u.$emit("close"))},{default:i(()=>[t(p,{class:"text-medium-emphasis",color:"disabled",icon:"tabler-x"})]),_:1})]),s("div",vt,[t(z,{location:"bottom right","offset-x":"7","offset-y":"4",bordered:"",color:e(n)(e(a).profileUser.status),class:"chat-user-profile-badge mb-3"},{default:i(()=>[t(T,{size:"84",variant:e(a).profileUser.avatar?void 0:"tonal",color:e(a).profileUser.avatar?void 0:e(n)(e(a).profileUser.status)},{default:i(()=>[e(a).profileUser.avatar?(c(),V(D,{key:0,src:e(a).profileUser.avatar},null,8,["src"])):(c(),_("span",_t,C(("avatarText"in u?u.avatarText:e(R))(e(a).profileUser.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color"]),s("h5",bt,C(e(a).profileUser.fullName),1),s("p",xt,C(e(a).profileUser.role),1)]),t(e(J),{class:"ps-chat-user-profile-sidebar-content pb-5 px-6",options:{wheelPropagation:!1}},{default:i(()=>[s("div",gt,[Ct,t(h,{id:"textarea-user-about",modelValue:e(a).profileUser.about,"onUpdate:modelValue":o[1]||(o[1]=m=>e(a).profileUser.about=m),"auto-grow":"",class:"mt-1",rows:"3"},null,8,["modelValue"])]),s("div",yt,[$t,t(be,{modelValue:e(a).profileUser.status,"onUpdate:modelValue":o[2]||(o[2]=m=>e(a).profileUser.status=m),class:"mt-1"},{default:i(()=>[(c(),_(U,null,P(r,m=>t(xe,{key:m.title,label:m.title,value:m.value,color:m.color},null,8,["label","value","color"])),64))]),_:1},8,["modelValue"])]),s("div",Vt,[kt,s("div",wt,[t(p,{class:"me-2 text-high-emphasis",icon:"tabler-lock",size:"22"}),s("div",Ut,[It,t(ee,{modelValue:e(f),"onUpdate:modelValue":o[3]||(o[3]=m=>k(f)?f.value=m:null),density:"compact"},null,8,["modelValue"])])]),s("div",St,[t(p,{class:"me-2 text-high-emphasis",icon:"tabler-bell",size:"22"}),s("div",At,[Tt,t(ee,{modelValue:e(l),"onUpdate:modelValue":o[4]||(o[4]=m=>k(l)?l.value=m:null),density:"compact"},null,8,["modelValue"])])]),s("div",zt,[t(p,{class:"me-2 text-high-emphasis",icon:"tabler-user-plus",size:"22"}),Bt]),s("div",Dt,[t(p,{class:"me-2 text-high-emphasis",icon:"tabler-trash",size:"22"}),Nt])]),t(F,{color:"primary",class:"mt-12",block:"","append-icon":"tabler-logout"},{default:i(()=>[O(" Logout ")]),_:1})]),_:1})],64)):A("",!0)}}}),Ot={key:0,class:"d-flex flex-column h-100"},Pt={class:"active-chat-header d-flex align-center text-medium-emphasis bg-surface"},Lt={key:1},Ft={class:"flex-grow-1 ms-4 overflow-hidden"},Et={class:"text-h6 mb-0 font-weight-regular"},Rt={class:"text-truncate mb-0 text-body-2"},jt={class:"d-sm-flex align-center d-none text-medium-emphasis"},Jt={class:"d-flex gap-1"},qt={class:"d-none d-md-block"},Ht={key:1,class:"d-flex h-100 align-center justify-center flex-column"},Wt={key:1,style:{"max-inline-size":"40ch","text-wrap":"balance"},class:"text-center text-disabled"},Ss=B({__name:"chat",setup(y){me(g=>({bce15a6a:e(oe)}));const a=re(),n=N(),{isLeftSidebarOpen:r}=ge(a.smAndDown),{resolveAvatarBadgeVariant:f}=L(),l=w(),u=()=>{const g=l.value.$el||l.value;g.scrollTop=g.scrollHeight},o=w("");de(o,g=>n.fetchChatsAndContacts(g),{immediate:!0});const v=()=>{a.mdAndUp.value||(r.value=!0)},h=w(""),m=async()=>{h.value&&(await n.sendMsg(h.value),h.value="",Y(()=>{u()}))},x=async g=>{await n.getChat(g),h.value="";const d=n.chatsContacts.find($=>$.id===g);d&&(d.chat.unseenMsgs=0),a.smAndDown.value&&(r.value=!1),Y(()=>{u()})},I=w(!1),M=w(!1),H=w(),{name:ae}=ue(),oe=E(()=>{var d,$;let g="transparent";return Z&&(g=($=(d=Z)==null?void 0:d[ae.value].colors)==null?void 0:$.background),g});return(g,d)=>{const $=j("IconBtn");return c(),V(ye,{class:"chat-app-layout",style:{"z-index":"0"}},{default:i(()=>[t(q,{modelValue:e(I),"onUpdate:modelValue":d[1]||(d[1]=b=>k(I)?I.value=b:null),temporary:"",touchless:"",absolute:"",class:"user-profile-sidebar",location:"start",width:"370"},{default:i(()=>[t(Mt,{onClose:d[0]||(d[0]=b=>I.value=!1)})]),_:1},8,["modelValue"]),t(q,{modelValue:e(M),"onUpdate:modelValue":d[3]||(d[3]=b=>k(M)?M.value=b:null),width:"374",absolute:"",temporary:"",location:"end",touchless:"",class:"active-chat-user-profile-sidebar"},{default:i(()=>[t(Ze,{onClose:d[2]||(d[2]=b=>M.value=!1)})]),_:1},8,["modelValue"]),t(q,{modelValue:e(r),"onUpdate:modelValue":d[8]||(d[8]=b=>k(r)?r.value=b:null),absolute:"",touchless:"",location:"start",width:"370",temporary:g.$vuetify.display.smAndDown,class:"chat-list-sidebar",permanent:g.$vuetify.display.mdAndUp},{default:i(()=>[t(dt,{isDrawerOpen:e(r),"onUpdate:isDrawerOpen":d[4]||(d[4]=b=>k(r)?r.value=b:null),search:e(o),"onUpdate:search":d[5]||(d[5]=b=>k(o)?o.value=b:null),onOpenChatOfContact:x,onShowUserProfile:d[6]||(d[6]=b=>I.value=!0),onClose:d[7]||(d[7]=b=>r.value=!1)},null,8,["isDrawerOpen","search"])]),_:1},8,["modelValue","temporary","permanent"]),t(Ce,{class:"chat-content-container"},{default:i(()=>[e(n).activeChat?(c(),_("div",Ot,[s("div",Pt,[t($,{class:"d-md-none me-3",onClick:d[9]||(d[9]=b=>r.value=!0)},{default:i(()=>[t(p,{icon:"tabler-menu-2"})]),_:1}),s("div",{class:"d-flex align-center cursor-pointer",onClick:d[10]||(d[10]=b=>M.value=!0)},[t(z,{dot:"",location:"bottom right","offset-x":"3","offset-y":"0",color:e(f)(e(n).activeChat.contact.status),bordered:""},{default:i(()=>[t(T,{size:"40",variant:e(n).activeChat.contact.avatar?void 0:"tonal",color:e(n).activeChat.contact.avatar?void 0:e(f)(e(n).activeChat.contact.status),class:"cursor-pointer"},{default:i(()=>[e(n).activeChat.contact.avatar?(c(),V(D,{key:0,src:e(n).activeChat.contact.avatar,alt:e(n).activeChat.contact.fullName},null,8,["src","alt"])):(c(),_("span",Lt,C(("avatarText"in g?g.avatarText:e(R))(e(n).activeChat.contact.fullName)),1))]),_:1},8,["variant","color"])]),_:1},8,["color"]),s("div",Ft,[s("div",Et,C(e(n).activeChat.contact.fullName),1),s("p",Rt,C(e(n).activeChat.contact.role),1)])]),t($e),s("div",jt,[t($,null,{default:i(()=>[t(p,{icon:"tabler-phone"})]),_:1}),t($,null,{default:i(()=>[t(p,{icon:"tabler-video"})]),_:1}),t($,null,{default:i(()=>[t(p,{icon:"tabler-search"})]),_:1}),t($,null,{default:i(()=>[t(p,{icon:"tabler-dots-vertical"})]),_:1})])]),t(se),t(e(J),{ref_key:"chatLogPS",ref:l,tag:"ul",options:{wheelPropagation:!1},class:"flex-grow-1"},{default:i(()=>[t(pt)]),_:1},512),t(Ve,{class:"chat-log-message-form mb-5 mx-5",onSubmit:he(m,["prevent"])},{default:i(()=>{var b;return[(c(),V(ke,{key:(b=e(n).activeChat)==null?void 0:b.contact.id,modelValue:e(h),"onUpdate:modelValue":d[12]||(d[12]=W=>k(h)?h.value=W:null),variant:"solo",density:"default",class:"chat-message-input",placeholder:"Type your message...",autofocus:""},{"append-inner":i(()=>[s("div",Jt,[t($,null,{default:i(()=>[t(p,{icon:"tabler-microphone",size:"22"})]),_:1}),t($,{onClick:d[11]||(d[11]=W=>{var K;return(K=e(H))==null?void 0:K.click()})},{default:i(()=>[t(p,{icon:"tabler-paperclip",size:"22"})]),_:1}),s("div",qt,[t(F,{"append-icon":"tabler-send",onClick:m},{default:i(()=>[O(" Send ")]),_:1})]),t($,{class:"d-block d-md-none",onClick:m},{default:i(()=>[t(p,{icon:"tabler-send"})]),_:1})])]),_:1},8,["modelValue"])),s("input",{ref_key:"refInputEl",ref:H,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:""},null,512)]}),_:1})])):(c(),_("div",Ht,[t(T,{size:"98",variant:"tonal",color:"primary",class:"mb-4"},{default:i(()=>[t(p,{size:"50",class:"rounded-0",icon:"tabler-message-2"})]),_:1}),g.$vuetify.display.smAndDown?(c(),V(F,{key:0,rounded:"pill",onClick:v},{default:i(()=>[O(" Start Conversation ")]),_:1})):(c(),_("p",Wt," Start connecting with the people by selecting one of the contact on left "))]))]),_:1})]),_:1})}}});export{Ss as default};
