import{m as q,a as G,b as K}from"./form-5pC8GpCN.js";import{a2 as z,a3 as N,cs as L,ay as U,$ as s,by as w,bp as Q,a9 as W,b as r,bM as X,br as J,aI as Z,r as ee,a5 as E,bz as ae,n as ne,c9 as te,bb as se,E as le,bU as O,w as P,a_ as ie,bn as F,bA as H,bB as ue,ct as re,ar as oe,ax as de,bH as ce,aC as ve,az as ge,aJ as me}from"./main-C8N3ebfR.js";import{m as ye,M as fe}from"./VImg-BEBs2K_P.js";const he=z({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...N(),...ye({transition:{component:L,leaveAbsolute:!0,group:!0}})},"VMessages"),be=U()({name:"VMessages",props:he(),setup(e,d){let{slots:h}=d;const a=s(()=>w(e.messages)),{textColorClasses:c,textColorStyles:n}=Q(s(()=>e.color));return W(()=>r(fe,{transition:e.transition,tag:"div",class:["v-messages",c.value,e.class],style:[n.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&a.value.map((i,v)=>r("div",{class:"v-messages__message",key:`${v}-${a.value}`},[h.message?h.message({message:i}):i]))]})),{}}}),pe=z({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...q()},"validation");function Ve(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X(),h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:J();const a=Z(e,"modelValue"),c=s(()=>e.validationValue===void 0?a.value:e.validationValue),n=G(),i=ee([]),v=E(!0),k=s(()=>!!(w(a.value===""?null:a.value).length||w(c.value===""?null:c.value).length)),b=s(()=>!!(e.disabled??(n==null?void 0:n.isDisabled.value))),C=s(()=>!!(e.readonly??(n==null?void 0:n.isReadonly.value))),g=s(()=>{var t;return(t=e.errorMessages)!=null&&t.length?w(e.errorMessages).concat(i.value).slice(0,Math.max(0,+e.maxErrors)):i.value}),m=s(()=>{let t=(e.validateOn??(n==null?void 0:n.validateOn.value))||"input";t==="lazy"&&(t="input lazy");const l=new Set((t==null?void 0:t.split(" "))??[]);return{blur:l.has("blur")||l.has("input"),input:l.has("input"),submit:l.has("submit"),lazy:l.has("lazy")}}),o=s(()=>{var t;return e.error||(t=e.errorMessages)!=null&&t.length?!1:e.rules.length?v.value?i.value.length||m.value.lazy?null:!0:!i.value.length:!0}),p=E(!1),B=s(()=>({[`${d}--error`]:o.value===!1,[`${d}--dirty`]:k.value,[`${d}--disabled`]:b.value,[`${d}--readonly`]:C.value})),D=ae("validation"),f=s(()=>e.name??ne(h));te(()=>{n==null||n.register({id:f.value,vm:D,validate:u,reset:V,resetValidation:M})}),se(()=>{n==null||n.unregister(f.value)}),le(async()=>{m.value.lazy||await u(!0),n==null||n.update(f.value,o.value,g.value)}),O(()=>m.value.input,()=>{P(c,()=>{if(c.value!=null)u();else if(e.focused){const t=P(()=>e.focused,l=>{l||u(),t()})}})}),O(()=>m.value.blur,()=>{P(()=>e.focused,t=>{t||u()})}),P([o,g],()=>{n==null||n.update(f.value,o.value,g.value)});async function V(){a.value=null,await ie(),await M()}async function M(){v.value=!0,m.value.lazy?i.value=[]:await u(!0)}async function u(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const l=[];p.value=!0;for(const I of e.rules){if(l.length>=+(e.maxErrors??1))break;const y=await(typeof I=="function"?I:()=>I)(c.value);if(y!==!0){if(y!==!1&&typeof y!="string"){console.warn(`${y} is not a valid value. Rule functions must return boolean true or a string.`);continue}l.push(y||"")}}return i.value=l,p.value=!1,v.value=t,i.value}return{errorMessages:g,isDirty:k,isDisabled:b,isReadonly:C,isPristine:v,isValid:o,isValidating:p,reset:V,resetValidation:M,validate:u,validationClasses:B}}const Me=z({id:String,appendIcon:F,centerAffix:{type:Boolean,default:!0},prependIcon:F,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":H(),"onClick:append":H(),...N(),...ue(),...re(oe(),["maxWidth","minWidth","width"]),...de(),...pe()},"VInput"),Ce=U()({name:"VInput",props:{...Me()},emits:{"update:modelValue":e=>!0},setup(e,d){let{attrs:h,slots:a,emit:c}=d;const{densityClasses:n}=ce(e),{dimensionStyles:i}=ve(e),{themeClasses:v}=ge(e),{rtlClasses:k}=me(),{InputIcon:b}=K(e),C=J(),g=s(()=>e.id||`input-${C}`),m=s(()=>`${g.value}-messages`),{errorMessages:o,isDirty:p,isDisabled:B,isReadonly:D,isPristine:f,isValid:V,isValidating:M,reset:u,resetValidation:t,validate:l,validationClasses:I}=Ve(e,"v-input",g),S=s(()=>({id:g,messagesId:m,isDirty:p,isDisabled:B,isReadonly:D,isPristine:f,isValid:V,isValidating:M,reset:u,resetValidation:t,validate:l})),y=s(()=>{var x;return(x=e.errorMessages)!=null&&x.length||!f.value&&o.value.length?o.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return W(()=>{var $,A,T,R;const x=!!(a.prepend||e.prependIcon),Y=!!(a.append||e.appendIcon),_=y.value.length>0,j=!e.hideDetails||e.hideDetails==="auto"&&(_||!!a.details);return r("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},n.value,v.value,k.value,I.value,e.class],style:[i.value,e.style]},[x&&r("div",{key:"prepend",class:"v-input__prepend"},[($=a.prepend)==null?void 0:$.call(a,S.value),e.prependIcon&&r(b,{key:"prepend-icon",name:"prepend"},null)]),a.default&&r("div",{class:"v-input__control"},[(A=a.default)==null?void 0:A.call(a,S.value)]),Y&&r("div",{key:"append",class:"v-input__append"},[e.appendIcon&&r(b,{key:"append-icon",name:"append"},null),(T=a.append)==null?void 0:T.call(a,S.value)]),j&&r("div",{class:"v-input__details"},[r(be,{id:m.value,active:_,messages:y.value},{message:a.message}),(R=a.details)==null?void 0:R.call(a,S.value)])])}),{reset:u,resetValidation:t,validate:l,isValid:V,errorMessages:o}}});export{Ce as V,Me as m};
