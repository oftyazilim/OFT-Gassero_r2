import{a1 as ze,a2 as A,a3 as O,a4 as U,a5 as J,r as P,$ as w,a6 as W,a7 as F,a8 as Le,w as V,E as pe,a9 as M,b as l,aa as $e,ab as ye,ac as Y,ad as be,ae as ke,af as te,ag as De,ah as xe,ai as T,aj as Re,ak as le,al as Ce,am as we,an as Be,ao as He,V as H,ap as Te,aq as Ee,ar as Ae,as as Me,at as Fe,au as Ie,av as je,aw as Oe,ax as Ue,ay as Ge,az as We,aA as Ye,a0 as Je,aB as Xe,aC as qe,aD as Ke,aE as Qe,aF as Ze,aG as et,aH as tt,aI as re,aJ as at,aK as lt,q as rt,d as _e,o as x,c as N,g as I,y as ot,e as h,f as p,v as j,z as it,F as Ve,aL as G,aM as nt,aN as ct,aO as $,aP as st,aQ as oe,aR as ie,aS as ne,aT as ce,aU as se,K as dt,G as b,aV as B,I as ut,J as ht,n,i as ft,H as X,x as q,aW as K,t as mt,aX as Q,aY as de,aZ as ue,a_ as gt}from"./main-C8N3ebfR.js";import{V as Se}from"./VDivider-BSW7EtyF.js";import{V as vt}from"./VChip-BABOvncP.js";import{_ as pt}from"./CustomRadiosWithImage-P5UGTBFB.js";import{C as yt}from"./vue3-perfect-scrollbar-CFV7m74e.js";import{V as bt}from"./VBadge-B7pxZdPu.js";import{V as kt}from"./VMenu-CtbOZ7LL.js";import{V as xt,a as Ct}from"./VList-DC10drZ4.js";import{V as he}from"./VSlider-Lw5xWc7T.js";import{V as wt}from"./form-5pC8GpCN.js";import{V as _t}from"./VSwitch-CiRfrwkG.js";import{V as Vt}from"./VNavigationDrawer-uCrgz8so.js";const fe=(e,a)=>{var f;const t=ze();return t?t.proxy&&"$can"in t.proxy?(f=t.proxy)==null?void 0:f.$can(e,a):!0:!1},vl=e=>{const a=e.children.some(t=>fe(t.action,t.subject));return e.action&&e.subject?fe(e.action,e.subject)&&a:a},St=A({color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...O()},"VColorPickerCanvas"),Pt=U({name:"VColorPickerCanvas",props:St(),emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,a){let{emit:t}=a;const r=J(!1),f=P(),o=J(parseFloat(e.width)),d=J(parseFloat(e.height)),g=P({x:0,y:0}),m=w({get:()=>g.value,set(u){var y,C;if(!f.value)return;const{x:c,y:s}=u;g.value=u,t("update:color",{h:((y=e.color)==null?void 0:y.h)??0,s:W(c,0,o.value)/o.value,v:1-W(s,0,d.value)/d.value,a:((C=e.color)==null?void 0:C.a)??1})}}),v=w(()=>{const{x:u,y:c}=m.value,s=parseInt(e.dotSize,10)/2;return{width:F(e.dotSize),height:F(e.dotSize),transform:`translate(${F(u-s)}, ${F(c-s)})`}}),{resizeRef:_}=Le(u=>{var y;if(!((y=_.el)!=null&&y.offsetParent))return;const{width:c,height:s}=u[0].contentRect;o.value=c,d.value=s});function z(u,c,s){const{left:y,top:C,width:i,height:ae}=s;m.value={x:W(u-y,0,i),y:W(c-C,0,ae)}}function S(u){u.type==="mousedown"&&u.preventDefault(),!e.disabled&&(k(u),window.addEventListener("mousemove",k),window.addEventListener("mouseup",L),window.addEventListener("touchmove",k),window.addEventListener("touchend",L))}function k(u){if(e.disabled||!f.value)return;r.value=!0;const c=$e(u);z(c.clientX,c.clientY,f.value.getBoundingClientRect())}function L(){window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",L),window.removeEventListener("touchmove",k),window.removeEventListener("touchend",L)}function R(){var C;if(!f.value)return;const u=f.value,c=u.getContext("2d");if(!c)return;const s=c.createLinearGradient(0,0,u.width,0);s.addColorStop(0,"hsla(0, 0%, 100%, 1)"),s.addColorStop(1,`hsla(${((C=e.color)==null?void 0:C.h)??0}, 100%, 50%, 1)`),c.fillStyle=s,c.fillRect(0,0,u.width,u.height);const y=c.createLinearGradient(0,0,0,u.height);y.addColorStop(0,"hsla(0, 0%, 0%, 0)"),y.addColorStop(1,"hsla(0, 0%, 0%, 1)"),c.fillStyle=y,c.fillRect(0,0,u.width,u.height)}return V(()=>{var u;return(u=e.color)==null?void 0:u.h},R,{immediate:!0}),V(()=>[o.value,d.value],(u,c)=>{R(),g.value={x:m.value.x*u[0]/c[0],y:m.value.y*u[1]/c[1]}},{flush:"post"}),V(()=>e.color,()=>{if(r.value){r.value=!1;return}g.value=e.color?{x:e.color.s*o.value,y:(1-e.color.v)*d.value}:{x:0,y:0}},{deep:!0,immediate:!0}),pe(()=>R()),M(()=>l("div",{ref:_,class:["v-color-picker-canvas",e.class],style:e.style,onMousedown:S,onTouchstartPassive:S},[l("canvas",{ref:f,width:o.value,height:d.value},null),e.color&&l("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:v.value},null)])),{}}});function Nt(e,a){if(a){const{a:t,...r}=e;return r}return e}function zt(e,a){if(a==null||typeof a=="string"){const t=ye(e);return e.a===1?t.slice(0,7):t}if(typeof a=="object"){let t;return Y(a,["r","g","b"])?t=be(e):Y(a,["h","s","l"])?t=ke(e):Y(a,["h","s","v"])&&(t=e),Nt(t,!Y(a,["a"])&&e.a===1)}return e}const E={h:0,s:0,v:0,a:1},Z={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,a)=>({...e,r:Number(a)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,a)=>({...e,g:Number(a)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,a)=>({...e,b:Number(a)})},{label:"A",max:1,step:.01,getValue:e=>{let{a}=e;return a!=null?Math.round(a*100)/100:1},getColor:(e,a)=>({...e,a:Number(a)})}],to:be,from:te};var ve;const Lt={...Z,inputs:(ve=Z.inputs)==null?void 0:ve.slice(0,3)},ee={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,a)=>({...e,h:Number(a)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(e.s*100)/100,getColor:(e,a)=>({...e,s:Number(a)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(e.l*100)/100,getColor:(e,a)=>({...e,l:Number(a)})},{label:"A",max:1,step:.01,getValue:e=>{let{a}=e;return a!=null?Math.round(a*100)/100:1},getColor:(e,a)=>({...e,a:Number(a)})}],to:ke,from:De},$t={...ee,inputs:ee.inputs.slice(0,3)},Pe={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,a)=>a}],to:ye,from:xe},Dt={...Pe,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,a)=>a}]},D={rgb:Lt,rgba:Z,hsl:$t,hsla:ee,hex:Dt,hexa:Pe},Rt=e=>{let{label:a,...t}=e;return l("div",{class:"v-color-picker-edit__input"},[l("input",t,null),l("span",null,[a])])},Bt=A({color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(D).includes(e)},modes:{type:Array,default:()=>Object.keys(D),validator:e=>Array.isArray(e)&&e.every(a=>Object.keys(D).includes(a))},...O()},"VColorPickerEdit"),Ht=U({name:"VColorPickerEdit",props:Bt(),emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,a){let{emit:t}=a;const r=w(()=>e.modes.map(o=>({...D[o],name:o}))),f=w(()=>{var g;const o=r.value.find(m=>m.name===e.mode);if(!o)return[];const d=e.color?o.to(e.color):null;return(g=o.inputs)==null?void 0:g.map(m=>{let{getValue:v,getColor:_,...z}=m;return{...o.inputProps,...z,disabled:e.disabled,value:d&&v(d),onChange:S=>{const k=S.target;k&&t("update:color",o.from(_(d??o.to(E),k.value)))}}})});return M(()=>{var o;return l("div",{class:["v-color-picker-edit",e.class],style:e.style},[(o=f.value)==null?void 0:o.map(d=>l(Rt,d,null)),r.value.length>1&&l(T,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const d=r.value.findIndex(g=>g.name===e.mode);t("update:mode",r.value[(d+1)%r.value.length].name)}},null)])}),{}}}),Tt=A({color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...O()},"VColorPickerPreview"),Et=U({name:"VColorPickerPreview",props:Tt(),emits:{"update:color":e=>!0},setup(e,a){let{emit:t}=a;const r=new AbortController;Re(()=>r.abort());async function f(){if(!le)return;const o=new window.EyeDropper;try{const d=await o.open({signal:r.signal}),g=xe(d.sRGBHex);t("update:color",{...e.color??E,...g})}catch{}}return M(()=>{var o,d;return l("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[le&&l("div",{class:"v-color-picker-preview__eye-dropper",key:"eyeDropper"},[l(T,{onClick:f,icon:"$eyeDropper",variant:"plain",density:"comfortable"},null)]),l("div",{class:"v-color-picker-preview__dot"},[l("div",{style:{background:Ce(e.color??E)}},null)]),l("div",{class:"v-color-picker-preview__sliders"},[l(he,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:(o=e.color)==null?void 0:o.h,"onUpdate:modelValue":g=>t("update:color",{...e.color??E,h:g}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&l(he,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:((d=e.color)==null?void 0:d.a)??1,"onUpdate:modelValue":g=>t("update:color",{...e.color??E,a:g}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])])}),{}}}),At={base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},Mt={base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},Ft={base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},It={base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},jt={base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},Ot={base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},Ut={base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},Gt={base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},Wt={base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},Yt={base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},Jt={base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},Xt={base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},qt={base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},Kt={base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},Qt={base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},Zt={base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},ea={base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},ta={base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},aa={base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},la={black:"#000000",white:"#ffffff",transparent:"#ffffff00"},ra={red:At,pink:Mt,purple:Ft,deepPurple:It,indigo:jt,blue:Ot,lightBlue:Ut,cyan:Gt,teal:Wt,green:Yt,lightGreen:Jt,lime:Xt,yellow:qt,amber:Kt,orange:Qt,deepOrange:Zt,brown:ea,blueGrey:ta,grey:aa,shades:la},oa=A({swatches:{type:Array,default:()=>ia(ra)},disabled:Boolean,color:Object,maxHeight:[Number,String],...O()},"VColorPickerSwatches");function ia(e){return Object.keys(e).map(a=>{const t=e[a];return t.base?[t.base,t.darken4,t.darken3,t.darken2,t.darken1,t.lighten1,t.lighten2,t.lighten3,t.lighten4,t.lighten5]:[t.black,t.white,t.transparent]})}const na=U({name:"VColorPickerSwatches",props:oa(),emits:{"update:color":e=>!0},setup(e,a){let{emit:t}=a;return M(()=>l("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:F(e.maxHeight)},e.style]},[l("div",null,[e.swatches.map(r=>l("div",{class:"v-color-picker-swatches__swatch"},[r.map(f=>{const o=we(f),d=te(o),g=Be(o);return l("div",{class:"v-color-picker-swatches__color",onClick:()=>d&&t("update:color",d)},[l("div",{style:{background:g}},[e.color&&He(e.color,d)?l(H,{size:"x-small",icon:"$success",color:Te(f,"#FFFFFF")>2?"white":"black"},null):void 0])])})]))])])),{}}}),Ne=A({color:String,...Ee(),...O(),...Ae(),...Me(),...Fe(),...Ie(),...je(),...Oe(),...Ue()},"VSheet"),me=Ge()({name:"VSheet",props:Ne(),setup(e,a){let{slots:t}=a;const{themeClasses:r}=We(e),{backgroundColorClasses:f,backgroundColorStyles:o}=Ye(Je(e,"color")),{borderClasses:d}=Xe(e),{dimensionStyles:g}=qe(e),{elevationClasses:m}=Ke(e),{locationStyles:v}=Qe(e),{positionClasses:_}=Ze(e),{roundedClasses:z}=et(e);return M(()=>l(e.tag,{class:["v-sheet",r.value,f.value,d.value,m.value,_.value,z.value,e.class],style:[o.value,g.value,v.value,e.style]},t)),{}}}),ca=A({canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(D).includes(e)},modes:{type:Array,default:()=>Object.keys(D),validator:e=>Array.isArray(e)&&e.every(a=>Object.keys(D).includes(a))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...tt(Ne({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},"VColorPicker"),sa=U({name:"VColorPicker",props:ca(),emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const a=re(e,"mode"),t=P(null),r=re(e,"modelValue",void 0,m=>{if(m==null||m==="")return null;let v;try{v=te(we(m))}catch{return null}return v},m=>m?zt(m,e.modelValue):null),f=w(()=>r.value?{...r.value,h:t.value??r.value.h}:null),{rtlClasses:o}=at();let d=!0;V(r,m=>{if(!d){d=!0;return}m&&(t.value=m.h)},{immediate:!0});const g=m=>{d=!1,t.value=m.h,r.value=m};return pe(()=>{e.modes.includes(a.value)||(a.value=e.modes[0])}),lt({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),M(()=>{const m=me.filterProps(e);return l(me,rt({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",o.value,e.class],style:[{"--v-color-picker-color-hsv":Ce({...f.value??E,a:1})},e.style]},m,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&l(Pt,{key:"canvas",color:f.value,"onUpdate:color":g,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&l("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&l(Et,{key:"preview",color:f.value,"onUpdate:color":g,hideAlpha:!a.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&l(Ht,{key:"edit",modes:e.modes,mode:a.value,"onUpdate:mode":v=>a.value=v,color:f.value,"onUpdate:color":g,disabled:e.disabled},null)]),e.showSwatches&&l(na,{key:"swatches",color:f.value,"onUpdate:color":g,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})}),{}}}),da={class:"customizer-section"},ua={class:"font-weight-medium"},ha=_e({__name:"CustomizerSection",props:{title:{},divider:{type:Boolean,default:!0}},setup(e){const a=e;return(t,r)=>(x(),N(Ve,null,[a.divider?(x(),I(Se,{key:0})):ot("",!0),h("div",da,[h("div",null,[l(vt,{size:"small",color:"primary"},{default:p(()=>[h("span",ua,j(a.title),1)]),_:1})]),it(t.$slots,"default")])],64))}}),fa={xmlns:"http://www.w3.org/2000/svg",width:"104",height:"66",fill:"none"},ma=G('<rect width="104" height="66" fill="currentColor" fill-opacity=".02" rx="4"></rect><rect width="17.66" height="2.789" x="4.906" y="23.884" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="9.811" height="9.706" x="8.83" y="5.881" fill="currentColor" fill-opacity=".3" rx="2"></rect><rect width="17.66" height="2.789" x="4.906" y="34.438" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="44.992" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="55.546" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="63.755" height="7.8" x="34.615" y="5.172" stroke="currentColor" stroke-opacity=".12" rx="1.5"></rect><rect width="3.925" height="4.4" x="37.039" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="80.21" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="86.096" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="91.002" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="39.226" height="16.6" x="58.984" y="20.113" stroke="currentColor" stroke-opacity=".12" rx="1.5"></rect><rect width="18.046" height="16.6" x="34.615" y="20.113" stroke="currentColor" stroke-opacity=".12" rx="1.5"></rect><rect width="63.755" height="16.6" x="34.615" y="42.955" stroke="currentColor" stroke-opacity=".12" rx="1.5"></rect>',14),ga=[ma];function va(e,a){return x(),N("svg",fa,[...ga])}const pa={render:va},ya={xmlns:"http://www.w3.org/2000/svg",width:"104",height:"66",fill:"none"},ba=G('<rect width="104" height="66" fill="currentColor" fill-opacity=".02" rx="4"></rect><path fill="currentColor" fill-opacity=".04" d="M0 4a4 4 0 0 1 4-4h9.736v66H4a4 4 0 0 1-4-4z"></path><rect width="7.849" height="2.789" x="2.943" y="23.884" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="6.868" height="6.794" x="3.434" y="5.881" fill="currentColor" fill-opacity=".3" rx="2"></rect><rect width="7.849" height="2.789" x="2.943" y="34.438" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="7.849" height="2.789" x="2.943" y="44.992" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="7.849" height="2.789" x="2.943" y="55.546" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="75.437" height="8.8" x="21.472" y="4.672" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="3.925" height="4.4" x="25.617" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="78.248" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="84.135" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="90.022" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="46.821" height="17.6" x="50.491" y="19.613" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="22.168" height="17.6" x="21.472" y="19.613" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="75.841" height="17.6" x="21.472" y="42.455" fill="currentColor" fill-opacity=".08" rx="2"></rect>',15),ka=[ba];function xa(e,a){return x(),N("svg",ya,[...ka])}const Ca={render:xa},wa={xmlns:"http://www.w3.org/2000/svg",width:"104",height:"66",fill:"none"},_a=G('<rect width="104" height="66" fill="currentColor" fill-opacity=".02" rx="4"></rect><rect width="64.755" height="8.8" x="19.421" y="4.672" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="3.925" height="4.4" x="22.345" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="65.515" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="71.401" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="77.288" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="40.226" height="17.6" x="44.352" y="19.613" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="19.046" height="17.6" x="19.421" y="19.613" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="65.159" height="17.6" x="19.421" y="42.455" fill="currentColor" fill-opacity=".08" rx="2"></rect>',9),Va=[_a];function Sa(e,a){return x(),N("svg",wa,[...Va])}const Pa={render:Sa},Na={xmlns:"http://www.w3.org/2000/svg",width:"104",height:"66",fill:"none"},za=G('<rect width="104" height="66" fill="currentColor" fill-opacity=".02" rx="4"></rect><path fill="currentColor" fill-opacity=".08" d="M0 4a4 4 0 0 1 4-4h23.472v66H4a4 4 0 0 1-4-4z"></path><rect width="17.66" height="2.789" x="4.906" y="23.884" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="9.811" height="9.706" x="8.83" y="5.881" fill="currentColor" fill-opacity=".3" rx="2"></rect><rect width="17.66" height="2.789" x="4.906" y="34.438" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="44.992" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="17.66" height="2.789" x="4.906" y="55.546" fill="currentColor" fill-opacity=".3" rx="1.395"></rect><rect width="64.755" height="8.8" x="34.115" y="4.672" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="3.925" height="4.4" x="37.039" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="80.21" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="86.096" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="3.925" height="4.4" x="91.982" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="40.226" height="17.6" x="58.484" y="19.613" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="19.046" height="17.6" x="34.115" y="19.613" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="64.755" height="17.6" x="34.115" y="42.455" fill="currentColor" fill-opacity=".08" rx="2"></rect>',15),La=[za];function $a(e,a){return x(),N("svg",Na,[...La])}const ge={render:$a},Da={xmlns:"http://www.w3.org/2000/svg",width:"104",height:"66",fill:"none"},Ra=G('<rect width="104" height="66" fill="currentColor" fill-opacity=".02" rx="4"></rect><rect width="90.624" height="8.8" x="6.688" y="4.672" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="4.906" height="4.4" x="10.165" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="4.906" height="4.4" x="75.2" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="4.906" height="4.4" x="82.067" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="4.906" height="4.4" x="88.935" y="6.872" fill="currentColor" fill-opacity=".3" rx="1"></rect><rect width="55.948" height="17.6" x="41.365" y="19.613" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="26.489" height="17.6" x="6.688" y="19.613" fill="currentColor" fill-opacity=".08" rx="2"></rect><rect width="90.624" height="17.6" x="6.688" y="42.455" fill="currentColor" fill-opacity=".08" rx="2"></rect>',9),Ba=[Ra];function Ha(e,a){return x(),N("svg",Da,[...Ba])}const Ta={render:Ha},Ea={class:"d-lg-block d-none"},Aa={class:"customizer-heading d-flex align-center justify-space-between"},Ma=h("div",null,[h("h6",{class:"text-h6"}," Tema Özelleştirici "),h("p",{class:"text-body-2 mb-0"}," Gerçek zamanlı Özelleştir & Gözlemle ")],-1),Fa={class:"d-flex align-center gap-1"},Ia={class:"d-flex flex-column gap-2"},ja=h("h6",{class:"text-h6"}," Öncelikli Renk ",-1),Oa={class:"d-flex app-customizer-primary-colors",style:{"column-gap":"0.75rem","margin-block-start":"2px"}},Ua=["onClick"],Ga={class:"d-flex flex-column gap-2"},Wa=h("h6",{class:"text-h6"}," Tema ",-1),Ya={class:"text-sm text-medium-emphasis mt-1"},Ja={class:"customizer-skins-icon-wrapper d-flex align-center justify-center py-3 w-100",style:{"min-inline-size":"100%"}},Xa={class:"d-flex flex-column gap-2"},qa=h("h6",{class:"text-h6"}," Önyüz Görünümü ",-1),Ka={class:"text-sm text-medium-emphasis"},Qa={class:"d-flex flex-column gap-2"},Za=h("h6",{class:"text-base font-weight-medium"}," Ekran Düzeni ",-1),el={class:"text-sm text-medium-emphasis"},tl={class:"d-flex flex-column gap-2"},al=h("h6",{class:"text-base font-weight-medium"}," Yerleşim ",-1),ll={class:"text-sm text-medium-emphasis"},pl=_e({__name:"TheCustomizer",setup(e){const a=P(!1),t=nt(),r=ct(),f=[{main:B,darken:Q},{main:"#0D9394",darken:"#0C8485"},{main:"#FFB400",darken:"#E6A200"},{main:"#FF4C51",darken:"#E64449"},{main:"#16B1FF",darken:"#149FE6"}],o=P("#663131");V(()=>t.theme,()=>{const c=$(`${r.name.value}ThemePrimaryColor`,null).value;c&&!f.some(s=>s.main===c)&&(o.value=c)},{immediate:!0});const d=st(c=>{r.themes.value[r.name.value].colors.primary=c.main,r.themes.value[r.name.value].colors["primary-darken-1"]=c.darken,$(`${r.name.value}ThemePrimaryColor`,null).value=c.main,$(`${r.name.value}ThemePrimaryDarkenColor`,null).value=c.darken,de(ue("initial-loader-color"),null).value=c.main},100),g=w(()=>[{bgImage:"tabler-sun",value:oe.Light,label:"Light"},{bgImage:"tabler-moon-stars",value:oe.Dark,label:"Dark"}]),m=w(()=>[{bgImage:ge,value:ie.Default,label:"Default"},{bgImage:pa,value:ie.Bordered,label:"Bordered"}]),v=P(t.isVerticalNavCollapsed?"collapsed":t.appContentLayoutNav),_=w(()=>[{bgImage:ge,value:ne.Vertical,label:"Vertical"},{bgImage:Ca,value:ne.Collapsed,label:"Collapsed"}]);V(v,()=>{v.value==="collapsed"?(t.isVerticalNavCollapsed=!0,t.appContentLayoutNav=ce.Vertical):(t.isVerticalNavCollapsed=!1,t.appContentLayoutNav=v.value)}),V(()=>t.isVerticalNavCollapsed,()=>{v.value=t.isVerticalNavCollapsed?"collapsed":t.appContentLayoutNav});const z=w(()=>[{bgImage:Pa,value:se.Boxed,label:"Compact"},{bgImage:Ta,value:se.Fluid,label:"Wide"}]),S=P(t.isAppRTL?"rtl":"ltr");V(S,()=>{S.value==="rtl"?t.isAppRTL=!0:t.isAppRTL=!1});const k=P(!1),{locale:L}=dt({useScope:"global"}),R=w(()=>{const c=b.app.i18n.langConfig.find(s=>s.i18nLang===L.value);return(c==null?void 0:c.isRTL)??!1});V([()=>r.current.value.colors.primary,t.$state,L],()=>{const c=[B,B,b.app.theme,b.app.skin,b.verticalNav.isVerticalNavSemiDark,b.verticalNav.isVerticalNavCollapsed,b.app.contentWidth,R.value,b.app.contentLayoutNav],s=[r.themes.value.light.colors.primary,r.themes.value.dark.colors.primary,t.theme,t.skin,t.isVerticalNavSemiDark,t.isVerticalNavCollapsed,t.appContentWidth,t.isAppRTL,t.appContentLayoutNav];S.value=t.isAppRTL?"rtl":"ltr",k.value=JSON.stringify(s)!==JSON.stringify(c)},{deep:!0,immediate:!0});const u=async()=>{k.value&&(r.themes.value.light.colors.primary=B,r.themes.value.dark.colors.primary=B,r.themes.value.light.colors["primary-darken-1"]=Q,r.themes.value.dark.colors["primary-darken-1"]=Q,t.theme=b.app.theme,t.skin=b.app.skin,t.isVerticalNavSemiDark=b.verticalNav.isVerticalNavSemiDark,t.appContentLayoutNav=b.app.contentLayoutNav,t.appContentWidth=b.app.contentWidth,t.isAppRTL=R.value,t.isVerticalNavCollapsed=b.verticalNav.isVerticalNavCollapsed,de(ue("initial-loader-color"),null).value=B,v.value=b.app.contentLayoutNav,$("lightThemePrimaryColor",null).value=null,$("darkThemePrimaryColor",null).value=null,$("lightThemePrimaryDarkenColor",null).value=null,$("darkThemePrimaryDarkenColor",null).value=null,await gt(),k.value=!1,o.value="#ffffff")};return(c,s)=>{const y=pt,C=ha;return x(),N("div",Ea,[l(T,{icon:"",class:"app-customizer-toggler rounded-s-lg rounded-0",style:{"z-index":"1001"},onClick:s[0]||(s[0]=i=>a.value=!0)},{default:p(()=>[l(H,{size:"22",icon:"tabler-settings"})]),_:1}),l(Vt,{modelValue:n(a),"onUpdate:modelValue":s[9]||(s[9]=i=>K(a)?a.value=i:null),temporary:"",touchless:"",border:"none",location:"end",width:"400",elevation:"10",scrim:!1,class:"app-customizer"},{default:p(()=>[h("div",Aa,[Ma,h("div",Fa,[l(T,{icon:"",variant:"text",size:"small",color:"medium-emphasis",onClick:u},{default:p(()=>[ut(l(bt,{dot:"",color:"error","offset-x":"-29","offset-y":"-14"},null,512),[[ht,n(k)]]),l(H,{size:"24",color:"high-emphasis",icon:"tabler-refresh"})]),_:1}),l(T,{icon:"",variant:"text",color:"medium-emphasis",size:"small",onClick:s[1]||(s[1]=i=>a.value=!1)},{default:p(()=>[l(H,{icon:"tabler-x",color:"high-emphasis",size:"24"})]),_:1})])]),l(Se),l(n(yt),{tag:"ul",options:{wheelPropagation:!1}},{default:p(()=>[l(C,{title:"Tema Özelleştir",divider:!1},{default:p(()=>[h("div",Ia,[ja,h("div",Oa,[(x(),N(Ve,null,ft(f,i=>h("div",{key:i.main,style:X([{"border-radius":"0.375rem",outline:"1px solid rgba(var(--v-border-color), var(--v-border-opacity))","padding-block":"0.5rem","padding-inline":"0.625rem"},n(r).current.value.colors.primary===i.main?`outline-color: ${i.main}; outline-width:2px;`:`--v-color:${i.main}`]),class:q(["primary-color-wrapper cursor-pointer",n(r).current.value.colors.primary===i.main?"active":""]),onClick:ae=>n(d)(i)},[h("div",{style:X([{"border-radius":"0.375rem","block-size":"2.125rem","inline-size":"1.8938rem"},{backgroundColor:i.main}])},null,4)],14,Ua)),64)),h("div",{class:q(["primary-color-wrapper cursor-pointer d-flex align-center",n(r).current.value.colors.primary===n(o)?"active":""]),style:X([{"border-radius":"0.375rem",outline:"1px solid rgba(var(--v-border-color), var(--v-border-opacity))","padding-block":"0.5rem","padding-inline":"0.625rem"},n(r).current.value.colors.primary===n(o)?`outline-color: ${n(o)}; outline-width:2px;`:""])},[l(T,{icon:"",size:"30",color:n(r).current.value.colors.primary===n(o)?n(o):c.$vuetify.theme.current.dark?"#8692d029":"#4b465c29",variant:"flat",style:{"border-radius":"0.375rem"}},{default:p(()=>[l(H,{size:"20",icon:"tabler-color-picker",color:n(r).current.value.colors.primary===n(o)?"rgb(var(--v-theme-on-primary))":""},null,8,["color"])]),_:1},8,["color"]),l(kt,{activator:"parent","close-on-content-click":!1},{default:p(()=>[l(xt,null,{default:p(()=>[l(Ct,null,{default:p(()=>[l(sa,{modelValue:n(o),"onUpdate:modelValue":[s[2]||(s[2]=i=>K(o)?o.value=i:null),s[3]||(s[3]=i=>n(d)({main:n(o),darken:n(o)}))],mode:"hex",modes:["hex"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],6)])]),h("div",Ga,[Wa,(x(),I(y,{key:n(t).theme,"selected-radio":n(t).theme,"onUpdate:selectedRadio":s[4]||(s[4]=i=>n(t).theme=i),"radio-content":n(g),"grid-column":{cols:"4"},class:"customizer-skins"},{label:p(i=>[h("span",Ya,j(i==null?void 0:i.label),1)]),content:p(({item:i})=>[h("div",Ja,[l(H,{size:"30",icon:i.bgImage,color:"high-emphasis"},null,8,["icon"])])]),_:1},8,["selected-radio","radio-content"]))]),h("div",Xa,[qa,(x(),I(y,{key:n(t).skin,"selected-radio":n(t).skin,"onUpdate:selectedRadio":s[5]||(s[5]=i=>n(t).skin=i),"radio-content":n(m),"grid-column":{cols:"4"}},{label:p(i=>[h("span",Ka,j(i==null?void 0:i.label),1)]),_:1},8,["selected-radio","radio-content"]))]),h("div",{class:q(["align-center justify-space-between",n(r).global.name.value==="light"&&n(t).appContentLayoutNav===n(ce).Vertical?"d-flex":"d-none"])},[l(wt,{for:"customizer-semi-dark",class:"text-h6 text-high-emphasis"},{default:p(()=>[mt(" Yarı Karanlık Menü ")]),_:1}),h("div",null,[l(_t,{id:"customizer-semi-dark",modelValue:n(t).isVerticalNavSemiDark,"onUpdate:modelValue":s[6]||(s[6]=i=>n(t).isVerticalNavSemiDark=i),class:"ms-2"},null,8,["modelValue"])])],2)]),_:1}),l(C,{title:"Layout"},{default:p(()=>[h("div",Qa,[Za,(x(),I(y,{key:n(v),"selected-radio":n(v),"onUpdate:selectedRadio":s[7]||(s[7]=i=>K(v)?v.value=i:null),"radio-content":n(_),"grid-column":{cols:"4"}},{label:p(i=>[h("span",el,j(i.label),1)]),_:1},8,["selected-radio","radio-content"]))]),h("div",tl,[al,(x(),I(y,{key:n(t).appContentWidth,"selected-radio":n(t).appContentWidth,"onUpdate:selectedRadio":s[8]||(s[8]=i=>n(t).appContentWidth=i),"radio-content":n(z),"grid-column":{cols:"4"}},{label:p(i=>[h("span",ll,j(i.label),1)]),_:1},8,["selected-radio","radio-content"]))])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}});export{pl as _,fe as a,vl as c};
