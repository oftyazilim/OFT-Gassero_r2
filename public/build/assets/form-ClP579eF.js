import{a2 as v,bz as b,a3 as I,ax as M,ay as P,a9 as L,b as V,bn as R,V as $,bL as w,aI as g,$ as m,a5 as x,r as p,w as B,N as A,bM as E,a0 as N,R as O}from"./main-CXefX_qh.js";const S=v({text:String,onClick:b(),...I(),...M()},"VLabel"),j=P()({name:"VLabel",props:S(),setup(a,r){let{slots:s}=r;return L(()=>{var i;return V("label",{class:["v-label",{"v-label--clickable":!!a.onClick},a.class],style:a.style,onClick:a.onClick},[a.text,(i=s.default)==null?void 0:i.call(s)])}),{}}});function z(a){const{t:r}=R();function s(i){let{name:o}=i;const e={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],c=a[`onClick:${o}`],d=c&&e?r(`$vuetify.input.${e}`,a.label??""):void 0;return V($,{icon:a[`${o}Icon`],"aria-label":d,onClick:c},null)}return{InputIcon:s}}const D=v({focused:Boolean,"onUpdate:focused":b()},"focus");function T(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();const s=g(a,"focused"),i=m(()=>({[`${r}--focused`]:s.value}));function o(){s.value=!0}function e(){s.value=!1}return{focusClasses:i,isFocused:s,focus:o,blur:e}}const y=Symbol.for("vuetify:form"),U=v({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function q(a){const r=g(a,"modelValue"),s=m(()=>a.disabled),i=m(()=>a.readonly),o=x(!1),e=p([]),c=p([]);async function d(){const n=[];let t=!0;c.value=[],o.value=!0;for(const u of e.value){const l=await u.validate();if(l.length>0&&(t=!1,n.push({id:u.id,errorMessages:l})),!t&&a.fastFail)break}return c.value=n,o.value=!1,{valid:t,errors:c.value}}function k(){e.value.forEach(n=>n.reset())}function h(){e.value.forEach(n=>n.resetValidation())}return B(e,()=>{let n=0,t=0;const u=[];for(const l of e.value)l.isValid===!1?(t++,u.push({id:l.id,errorMessages:l.errorMessages})):l.isValid===!0&&n++;c.value=u,r.value=t>0?!1:n===e.value.length?!0:null},{deep:!0,flush:"post"}),A(y,{register:n=>{let{id:t,vm:u,validate:l,reset:f,resetValidation:C}=n;e.value.some(F=>F.id===t),e.value.push({id:t,validate:l,reset:f,resetValidation:C,vm:E(u),isValid:null,errorMessages:[]})},unregister:n=>{e.value=e.value.filter(t=>t.id!==n)},update:(n,t,u)=>{const l=e.value.find(f=>f.id===n);l&&(l.isValid=t,l.errorMessages=u)},isDisabled:s,isReadonly:i,isValidating:o,isValid:r,items:e,validateOn:N(a,"validateOn")}),{errors:c,isDisabled:s,isReadonly:i,isValidating:o,isValid:r,items:e,validate:d,reset:k,resetValidation:h}}function G(){return O(y,null)}export{j as V,G as a,z as b,U as c,q as d,D as m,T as u};
