import{_ as se}from"./AppTextField.vue_vue_type_script_setup_true_lang-B67lS2wl.js";import{_}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-UxdDcTYf.js";import{a2 as J,a3 as U,aw as Z,ay as q,a9 as G,b as e,aq as re,as as ne,av as ce,ax as de,aA as ue,a0 as $,aB as pe,aD as me,aG as ge,az as be,aJ as fe,a5 as Ve,$ as Q,aK as ee,br as I,a7 as S,b4 as ve,bC as he,d as w,r as b,o as y,g as T,f as a,ai as p,bd as L,be as P,t as n,n as d,aW as f,e as h,V as ke,q as ye,c as M,F as O,w as De,b6 as Ce,i as we}from"./main-CXefX_qh.js";import{V as D,a as Be,b as xe}from"./VCard-pJfFDOSH.js";import{V as v}from"./VCardText-BW9gFSa-.js";import{V as ae}from"./VRow-qTTVFZ4i.js";import{V}from"./VCol-Dzvr-cnK.js";import{V as C}from"./VDialog-Cm1FNAkS.js";import{V as Te}from"./VImg-Db788kHt.js";import{V as le}from"./VSpacer-OtyVf5vj.js";import{V as X,c as Y,a as j}from"./VList-5j6JHPeN.js";import{V as F}from"./VDivider-B8BIZrEP.js";import{V as N}from"./VListItemAction-zWjsJnCh.js";import{V as z}from"./VCheckbox-j2Nzq_3x.js";import{V as _e,a as je}from"./VRadioGroup-XCyxBFmo.js";import{_ as Le}from"./AppCardCode.vue_vue_type_style_index_0_lang-ksOfkbnl.js";import"./form-ClP579eF.js";import"./VTextField-CN3aek7z.js";/* empty css                   */import"./VCounter-Cxc0KNa-.js";import"./index-DT3SyRRd.js";import"./VField-CeCYSswt.js";import"./easing-CjukEv2V.js";import"./VInput-BI9uJ0Ce.js";import"./forwardRefs-C-GTDzx5.js";import"./VAvatar-a73hCTk3.js";/* empty css              */import"./VOverlay-E84Zkpn-.js";import"./delay-RGhQcOZ6.js";import"./lazy-CAMkS5e7.js";import"./scopeId-BgBx1Ex_.js";import"./dialog-transition-DjZpsU5U.js";import"./ssrBoot-BBXTmuIy.js";import"./VCheckboxBtn-CLjc42-a.js";import"./VSelectionControl-BoOcbjQs.js";import"./vue3-perfect-scrollbar-BT2Ou4oR.js";const Pe=J({text:String,...U(),...Z()},"VToolbarTitle"),te=q()({name:"VToolbarTitle",props:Pe(),setup(s,l){let{slots:t}=l;return G(()=>{const o=!!(t.default||t.text||s.text);return e(s.tag,{class:["v-toolbar-title",s.class],style:s.style},{default:()=>{var i;return[o&&e("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():s.text,(i=t.default)==null?void 0:i.call(t)])]}})}),{}}}),Ae=[null,"prominent","default","comfortable","compact"],Se=J({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:s=>Ae.includes(s)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...re(),...U(),...ne(),...ce(),...Z({tag:"header"}),...de()},"VToolbar"),Ie=q()({name:"VToolbar",props:Se(),setup(s,l){var u;let{slots:t}=l;const{backgroundColorClasses:o,backgroundColorStyles:i}=ue($(s,"color")),{borderClasses:r}=pe(s),{elevationClasses:g}=me(s),{roundedClasses:m}=ge(s),{themeClasses:B}=be(s),{rtlClasses:A}=fe(),c=Ve(!!(s.extended||(u=t.extension)!=null&&u.call(t))),x=Q(()=>parseInt(Number(s.height)+(s.density==="prominent"?Number(s.height):0)-(s.density==="comfortable"?8:0)-(s.density==="compact"?16:0),10)),k=Q(()=>c.value?parseInt(Number(s.extensionHeight)+(s.density==="prominent"?Number(s.extensionHeight):0)-(s.density==="comfortable"?4:0)-(s.density==="compact"?8:0),10):0);return ee({VBtn:{variant:"text"}}),G(()=>{var H;const oe=!!(s.title||t.title),ie=!!(t.image||s.image),R=(H=t.extension)==null?void 0:H.call(t);return c.value=!!(s.extended||R),e(s.tag,{class:["v-toolbar",{"v-toolbar--absolute":s.absolute,"v-toolbar--collapse":s.collapse,"v-toolbar--flat":s.flat,"v-toolbar--floating":s.floating,[`v-toolbar--density-${s.density}`]:!0},o.value,r.value,g.value,m.value,B.value,A.value,s.class],style:[i.value,s.style]},{default:()=>[ie&&e("div",{key:"image",class:"v-toolbar__image"},[t.image?e(I,{key:"image-defaults",disabled:!s.image,defaults:{VImg:{cover:!0,src:s.image}}},t.image):e(Te,{key:"image-img",cover:!0,src:s.image},null)]),e(I,{defaults:{VTabs:{height:S(x.value)}}},{default:()=>{var E,W,K;return[e("div",{class:"v-toolbar__content",style:{height:S(x.value)}},[t.prepend&&e("div",{class:"v-toolbar__prepend"},[(E=t.prepend)==null?void 0:E.call(t)]),oe&&e(te,{key:"title",text:s.title},{text:t.title}),(W=t.default)==null?void 0:W.call(t),t.append&&e("div",{class:"v-toolbar__append"},[(K=t.append)==null?void 0:K.call(t)])])]}}),e(I,{defaults:{VTabs:{height:S(k.value)}}},{default:()=>[e(ve,null,{default:()=>[c.value&&e("div",{class:"v-toolbar__extension",style:{height:S(k.value)}},[R])]})]})]})}),{contentHeight:x,extensionHeight:k}}}),Ne=J({...U(),...he({variant:"text"})},"VToolbarItems"),ze=q()({name:"VToolbarItems",props:Ne(),setup(s,l){let{slots:t}=l;return ee({VBtn:{color:$(s,"color"),height:"inherit",variant:$(s,"variant")}}),G(()=>{var o;return e("div",{class:["v-toolbar-items",s.class],style:s.style},[(o=t.default)==null?void 0:o.call(t)])}),{}}}),$e=w({__name:"DemoDialogForm",setup(s){const l=b(!1),t=b(""),o=b(""),i=b(""),r=b(""),g=b(""),m=b(),B=b([]);return(A,c)=>{const x=_,k=se;return y(),T(C,{modelValue:d(l),"onUpdate:modelValue":c[10]||(c[10]=u=>f(l)?l.value=u:null),"max-width":"600"},{activator:a(({props:u})=>[e(p,L(P(u)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(x,{onClick:c[0]||(c[0]=u=>l.value=!d(l))}),e(D,{title:"User Profile"},{default:a(()=>[e(v,null,{default:a(()=>[e(ae,null,{default:a(()=>[e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(k,{modelValue:d(t),"onUpdate:modelValue":c[1]||(c[1]=u=>f(t)?t.value=u:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(k,{modelValue:d(o),"onUpdate:modelValue":c[2]||(c[2]=u=>f(o)?o.value=u:null),label:"Middle Name",placeholder:"peter"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(k,{modelValue:d(i),"onUpdate:modelValue":c[3]||(c[3]=u=>f(i)?i.value=u:null),label:"Last Name","persistent-hint":"",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(k,{modelValue:d(r),"onUpdate:modelValue":c[4]||(c[4]=u=>f(r)?r.value=u:null),label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(k,{modelValue:d(g),"onUpdate:modelValue":c[5]||(c[5]=u=>f(g)?g.value=u:null),label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(k,{modelValue:d(m),"onUpdate:modelValue":c[6]||(c[6]=u=>f(m)?m.value=u:null),label:"Age",type:"number",placeholder:"18"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(k,{modelValue:d(B),"onUpdate:modelValue":c[7]||(c[7]=u=>f(B)?B.value=u:null),label:"Interests",placeholder:"Sports, Music, Movies"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{variant:"tonal",color:"secondary",onClick:c[8]||(c[8]=u=>l.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(p,{onClick:c[9]||(c[9]=u=>l.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Fe=w({__name:"DemoDialogFullscreen",setup(s){const l=b(!1);return(t,o)=>(y(),T(C,{modelValue:d(l),"onUpdate:modelValue":o[2]||(o[2]=i=>f(l)?l.value=i:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:i})=>[e(p,L(P(i)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(D,null,{default:a(()=>[h("div",null,[e(Ie,{color:"primary"},{default:a(()=>[e(p,{icon:"",variant:"plain",onClick:o[0]||(o[0]=i=>l.value=!1)},{default:a(()=>[e(ke,{color:"white",icon:"tabler-x"})]),_:1}),e(te,null,{default:a(()=>[n("Settings")]),_:1}),e(le),e(ze,null,{default:a(()=>[e(p,{variant:"text",onClick:o[1]||(o[1]=i=>l.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),e(X,{lines:"two"},{default:a(()=>[e(Y,null,{default:a(()=>[n("User Controls")]),_:1}),e(j,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(j,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(F),e(X,{lines:"two","select-strategy":"classic",class:"full-screen-dialog-list"},{default:a(()=>[e(Y,null,{default:a(()=>[n("General")]),_:1}),e(j,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:i})=>[e(N,{start:""},{default:a(()=>[e(z,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(j,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:i})=>[e(N,{start:""},{default:a(()=>[e(z,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(j,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:i})=>[e(N,{start:""},{default:a(()=>[e(z,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),Je=w({__name:"DemoDialogOverflowed",setup(s){const l=b(!1);return(t,o)=>{const i=_;return y(),T(C,{modelValue:d(l),"onUpdate:modelValue":o[3]||(o[3]=r=>f(l)?l.value=r:null),class:"v-dialog-sm"},{activator:a(({props:r})=>[e(p,ye({color:"primary"},r),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(i,{onClick:o[0]||(o[0]=r=>l.value=!d(l))}),e(D,{title:"Use Google's location service?"},{default:a(()=>[e(v,null,{default:a(()=>[n(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:o[1]||(o[1]=r=>l.value=!1)},{default:a(()=>[n(" Disagree ")]),_:1}),e(p,{onClick:o[2]||(o[2]=r=>l.value=!1)},{default:a(()=>[n(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Ue=w({__name:"DemoDialogNesting",setup(s){const l=b(!1),t=b(!1);return(o,i)=>{const r=_;return y(),M(O,null,[e(p,{onClick:i[0]||(i[0]=g=>l.value=!0)},{default:a(()=>[n(" Open Dialog ")]),_:1}),e(C,{modelValue:d(l),"onUpdate:modelValue":i[4]||(i[4]=g=>f(l)?l.value=g:null),class:"v-dialog-sm"},{default:a(()=>[e(r,{onClick:i[1]||(i[1]=g=>l.value=!1)}),e(D,{title:"Dialog"},{default:a(()=>[e(v,null,{default:a(()=>[n(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")]),_:1}),e(v,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{variant:"tonal",color:"secondary",onClick:i[2]||(i[2]=g=>l.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(p,{onClick:i[3]||(i[3]=g=>t.value=!d(t))},{default:a(()=>[n(" Open Dialog 2 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(C,{modelValue:d(t),"onUpdate:modelValue":i[7]||(i[7]=g=>f(t)?t.value=g:null),class:"v-dialog-sm"},{default:a(()=>[e(r,{onClick:i[5]||(i[5]=g=>t.value=!1)}),e(D,{title:"Dialog 2"},{default:a(()=>[e(v,null,{default:a(()=>[n("I'm a nested dialog.")]),_:1}),e(v,{class:"d-flex flex-wrap gap-3"},{default:a(()=>[e(le),e(p,{onClick:i[6]||(i[6]=g=>t.value=!1)},{default:a(()=>[n(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),qe=w({__name:"DemoDialogLoader",setup(s){const l=b(!1);return De(l,t=>{t&&setTimeout(()=>{l.value=!1},4e3)}),(t,o)=>(y(),M(O,null,[e(p,{disabled:d(l),onClick:o[0]||(o[0]=i=>l.value=!0)},{default:a(()=>[n(" Start loading ")]),_:1},8,["disabled"]),e(C,{modelValue:d(l),"onUpdate:modelValue":o[1]||(o[1]=i=>f(l)?l.value=i:null),width:"300"},{default:a(()=>[e(D,{color:"primary",width:"300"},{default:a(()=>[e(v,{class:"pt-3"},{default:a(()=>[n(" Please stand by "),e(Ce,{indeterminate:"","bg-color":"rgba(var(--v-theme-surface), 0.1)",height:8,class:"mb-0 mt-4"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),Ge=w({__name:"DemoDialogScrollable",setup(s){const l=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],t=b(""),o=b(!1);return(i,r)=>{const g=_;return y(),T(C,{modelValue:d(o),"onUpdate:modelValue":r[4]||(r[4]=m=>f(o)?o.value=m:null),scrollable:"","max-width":"350","content-class":"scrollable-dialog"},{activator:a(({props:m})=>[e(p,L(P(m)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(g,{onClick:r[0]||(r[0]=m=>o.value=!d(o))}),e(D,null,{default:a(()=>[e(Be,{class:"pb-5"},{default:a(()=>[e(xe,null,{default:a(()=>[n("Select Country")]),_:1})]),_:1}),e(F),e(v,{style:{"block-size":"300px"}},{default:a(()=>[e(_e,{modelValue:d(t),"onUpdate:modelValue":r[1]||(r[1]=m=>f(t)?t.value=m:null),inline:!1},{default:a(()=>[(y(),M(O,null,we(l,m=>e(je,{key:m.label,label:m.label,value:m.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(F),e(v,{class:"d-flex justify-end flex-wrap gap-3 pt-5 overflow-visible"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:r[2]||(r[2]=m=>o.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(p,{onClick:r[3]||(r[3]=m=>o.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Me=w({__name:"DemoDialogPersistent",setup(s){const l=b(!1);return(t,o)=>{const i=_;return y(),T(C,{modelValue:d(l),"onUpdate:modelValue":o[3]||(o[3]=r=>f(l)?l.value=r:null),persistent:"",class:"v-dialog-sm"},{activator:a(({props:r})=>[e(p,L(P(r)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(i,{onClick:o[0]||(o[0]=r=>l.value=!d(l))}),e(D,{title:"Use Google's location service?"},{default:a(()=>[e(v,null,{default:a(()=>[n(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),_:1}),e(v,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[e(p,{color:"secondary",variant:"tonal",onClick:o[1]||(o[1]=r=>l.value=!1)},{default:a(()=>[n(" Disagree ")]),_:1}),e(p,{onClick:o[2]||(o[2]=r=>l.value=!1)},{default:a(()=>[n(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Oe=w({__name:"DemoDialogBasic",setup(s){const l=b(!1);return(t,o)=>{const i=_;return y(),T(C,{modelValue:d(l),"onUpdate:modelValue":o[2]||(o[2]=r=>f(l)?l.value=r:null),width:"500"},{activator:a(({props:r})=>[e(p,L(P(r)),{default:a(()=>[n(" Click Me ")]),_:2},1040)]),default:a(()=>[e(i,{onClick:o[0]||(o[0]=r=>l.value=!d(l))}),e(D,{title:"Privacy Policy"},{default:a(()=>[e(v,null,{default:a(()=>[n(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")]),_:1}),e(v,{class:"d-flex justify-end"},{default:a(()=>[e(p,{onClick:o[1]||(o[1]=r=>l.value=!1)},{default:a(()=>[n(" I accept ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Re={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},He={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref<string[]>([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="firstName"
              label="First Name"
              placeholder="John"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="middleName"
              label="Middle Name"
              placeholder="peter"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
              placeholder="Doe"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="password"
              label="Password"
              autocomplete="on"
              type="password"
              placeholder="············"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="age"
              label="Age"
              type="number"
              placeholder="18"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="interest"
              label="Interests"
              placeholder="Sports, Music, Movies"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="firstName"
              label="First Name"
              placeholder="John"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="middleName"
              label="Middle Name"
              placeholder="peter"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
              placeholder="Doe"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="password"
              label="Password"
              autocomplete="on"
              type="password"
              placeholder="············"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="age"
              label="Age"
              type="number"
              placeholder="18"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="interest"
              label="Interests"
              placeholder="Sports, Music, Movies"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ee={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
        class="full-screen-dialog-list"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
        class="full-screen-dialog-list"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},We={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          bg-color="rgba(var(--v-theme-surface), 0.1)"
          :height="8"
          class="mb-0 mt-4"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          bg-color="rgba(var(--v-theme-surface), 0.1)"
          :height="8"
          class="mb-0 mt-4"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ke={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = false" />

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogTwoShow = false" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = false" />

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogTwoShow = false" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Qe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Xe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ye={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },
  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },
  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
    content-class="scrollable-dialog"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5 overflow-visible">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.scrollable-dialog {
  overflow: visible !important;
}
</style>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina',
  },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
    content-class="scrollable-dialog"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5 overflow-visible">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.scrollable-dialog {
  overflow: visible !important;
}
</style>
`},Ze=h("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1),ea=h("p",null,[n("Use "),h("code",null,"persistent"),n(" prop to create persistent dialog.")],-1),aa=h("p",null,[n("Use "),h("code",null,"scrollable"),n(" prop to create scrollable dialog.")],-1),la=h("p",null,[n("The "),h("code",null,"v-dialog"),n(" component makes it easy to create a customized loading experience for your application.")],-1),ta=h("p",null,"Dialogs can be nested: you can open one dialog from another.",-1),oa=h("p",null,"Modals that do not fit within the available window space will scroll the container.",-1),ia=h("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1),sa=h("p",null,"Just a simple example of a form in a dialog.",-1),Ma=w({__name:"dialog",setup(s){return(l,t)=>{const o=Oe,i=Le,r=Me,g=Ge,m=qe,B=Ue,A=Je,c=Fe,x=$e;return y(),T(ae,null,{default:a(()=>[e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Basic",code:Re},{default:a(()=>[Ze,e(o)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Persistent",code:Xe},{default:a(()=>[ea,e(r)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Scrollable",code:Ye},{default:a(()=>[aa,e(g)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Loader",code:We},{default:a(()=>[la,e(m)]),_:1},8,["code"])]),_:1}),e(V,{col:"12",md:"6"},{default:a(()=>[e(i,{title:"Nesting",code:Ke},{default:a(()=>[ta,e(B)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Overflowed",code:Qe},{default:a(()=>[oa,e(A)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Fullscreen",code:Ee},{default:a(()=>[ia,e(c)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Form",code:He},{default:a(()=>[sa,e(x)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ma as default};
