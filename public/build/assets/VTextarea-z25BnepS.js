import{a2 as Z,ay as ee,aI as te,$ as y,r as v,a5 as ae,bU as ne,E as le,w as m,ba as oe,a9 as ie,bP as ue,b as l,q as k,F as R,I as T,bI as re,eb as se,a_ as S,cy as ce,a7 as de,a6 as fe}from"./main-CXefX_qh.js";/* empty css                   */import{V as ve}from"./VCounter-Cxc0KNa-.js";import{m as me,f as xe,V as ge}from"./VField-CeCYSswt.js";import{m as he,V as E}from"./VInput-BI9uJ0Ce.js";import{u as we}from"./form-ClP579eF.js";import{f as Ve}from"./forwardRefs-C-GTDzx5.js";import{I as ye}from"./index-DT3SyRRd.js";const Fe=Z({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...he(),...me()},"VTextarea"),Be=ee()({name:"VTextarea",directives:{Intersect:ye},inheritAttrs:!1,props:Fe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,G){let{attrs:F,emit:M,slots:u}=G;const o=te(e,"modelValue"),{isFocused:f,focus:U,blur:D}=we(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=y(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function p(t,n){var a,i;!e.autofocus||!t||(i=(a=n[0].target)==null?void 0:a.focus)==null||i.call(a)}const B=v(),x=v(),H=ae(""),g=v(),j=y(()=>e.persistentPlaceholder||f.value||e.active);function P(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||U()}function q(t){P(),M("click:control",t)}function J(t){M("mousedown:control",t)}function K(t){t.stopPropagation(),P(),S(()=>{o.value="",ce(e["onClick:clear"],t)})}function L(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const i=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=i[0],n.selectionEnd=i[1]})}}const c=v(),h=v(+e.rows),C=y(()=>["plain","underlined"].includes(e.variant));ne(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!x.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(x.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=c.value.scrollHeight,w=parseFloat(t.lineHeight),I=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),b=parseFloat(e.maxRows)*w+a||1/0,s=fe(i??0,I,b);h.value=Math.floor((s-a)/w),H.value=de(s)})}le(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),oe(()=>{r==null||r.disconnect()}),ie(()=>{const t=!!(u.counter||e.counter||e.counterValue),n=!!(t||u.details),[a,i]=ue(F),{modelValue:w,...I}=E.filterProps(e),b=xe(e);return l(E,k({ref:B,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":C.value},e.class],style:e.style},a,I,{centerAffix:h.value===1&&!C.value,focused:f.value}),{...u,default:s=>{let{id:V,isDisabled:N,isDirty:_,isReadonly:Q,isValid:W}=s;return l(ge,k({ref:x,style:{"--v-textarea-control-height":H.value},onClick:q,onMousedown:J,"onClick:clear":K,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},b,{id:V.value,active:j.value||_.value,centerAffix:h.value===1&&!C.value,dirty:_.value||e.dirty,disabled:N.value,focused:f.value,error:W.value===!1}),{...u,default:X=>{let{props:{class:z,...A}}=X;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),T(l("textarea",k({ref:g,class:z,value:o.value,onInput:L,autofocus:e.autofocus,readonly:Q.value,disabled:N.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:P,onBlur:D},A,i),null),[[re("intersect"),{handler:p},null,{once:!0}]]),e.autoGrow&&T(l("textarea",{class:[z,"v-textarea__sizer"],id:`${A.id}-sizer`,"onUpdate:modelValue":Y=>o.value=Y,ref:c,readonly:!0,"aria-hidden":"true"},null),[[se,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(R,null,[(V=u.details)==null?void 0:V.call(u,s),t&&l(R,null,[l("span",null,null),l(ve,{active:e.persistentCounter||f.value,value:O.value,max:$.value,disabled:e.disabled},u.counter)])])}:void 0})}),Ve({},B,x,g)}});export{Be as V};
