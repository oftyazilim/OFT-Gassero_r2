import{a2 as h,bm as D,ao as K,a3 as R,bA as O,ax as z,ay as U,aI as _,bq as q,$ as n,N as J,aK as Q,a0 as u,a9 as N,b as v,bV as W,bD as X,a5 as w,r as Y,bP as Z,q as T,I as p,bI as ee,F as le,V as ae,R as te,bG as oe,bx as I,bo as ne,aA as ue,co as ie,a_ as re}from"./main-CXefX_qh.js";import{V as ce}from"./form-ClP579eF.js";const $=Symbol.for("vuetify:selection-control-group"),j=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:D,trueIcon:D,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:K},...R(),...O(),...z()},"SelectionControlGroup"),se=h({...j({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),be=U()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:f}=i;const l=_(e,"modelValue"),t=q(),y=n(()=>e.id||`v-selection-control-group-${t}`),c=n(()=>e.name||y.value),a=new Set;return J($,{modelValue:l,forceUpdate:()=>{a.forEach(o=>o())},onForceUpdate:o=>{a.add(o),W(()=>{a.delete(o)})}}),Q({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:n(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),N(()=>{var o;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(o=f.default)==null?void 0:o.call(f)])}),{}}}),de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...R(),...j()},"VSelectionControl");function ve(e){const i=te($,void 0),{densityClasses:f}=oe(e),l=_(e,"modelValue"),t=n(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),y=n(()=>e.falseValue!==void 0?e.falseValue:!1),c=n(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=n({get(){const m=i?i.modelValue.value:l.value;return c.value?I(m).some(r=>e.valueComparator(r,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const r=m?t.value:y.value;let b=r;c.value&&(b=m?[...I(l.value),r]:I(l.value).filter(s=>!e.valueComparator(s,t.value))),i?i.modelValue.value=b:l.value=b}}),{textColorClasses:o,textColorStyles:C}=ne(n(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:S}=ue(n(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),k=n(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:f,trueValue:t,falseValue:y,model:a,textColorClasses:o,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,icon:k}}const ye=U()({name:"VSelectionControl",directives:{Ripple:X},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:f,slots:l}=i;const{group:t,densityClasses:y,icon:c,model:a,textColorClasses:o,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,trueValue:k}=ve(e),m=q(),r=w(!1),b=w(!1),s=Y(),g=n(()=>e.id||`input-${m}`),x=n(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{s.value&&(s.value.checked=a.value)});function A(d){x.value&&(r.value=!0,ie(d.target,":focus-visible")!==!1&&(b.value=!0))}function F(){r.value=!1,b.value=!1}function E(d){d.stopPropagation()}function L(d){if(!x.value){s.value&&(s.value.checked=a.value);return}e.readonly&&t&&re(()=>t.forceUpdate()),a.value=d.target.checked}return N(()=>{var B,G;const d=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[M,H]=Z(f),P=v("input",T({ref:s,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:F,onFocus:A,onInput:L,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},H),null);return v("div",T({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":b.value,"v-selection-control--inline":e.inline},y.value,e.class]},M,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",o.value],style:C.value},[(B=l.default)==null?void 0:B.call(l,{backgroundColorClasses:V,backgroundColorStyles:S}),p(v("div",{class:["v-selection-control__input"]},[((G=l.input)==null?void 0:G.call(l,{model:a,textColorClasses:o,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,inputNode:P,icon:c.value,props:{onFocus:A,onBlur:F,id:g.value}}))??v(le,null,[c.value&&v(ae,{key:"icon",icon:c.value},null),P])]),[[ee("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),d&&v(ce,{for:g.value,onClick:E},{default:()=>[d]})])}),{isFocused:r,input:s}}});export{ye as V,j as a,be as b,de as m};
