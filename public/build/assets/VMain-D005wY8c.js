import{b9 as L,r as S,w as b,a2 as m,a3 as y,ar as d,cF as p,ay as v,cG as k,aC as f,a9 as V,b as n,S as g,F as P,aw as B,cH as w}from"./main-CXefX_qh.js";import{u as C}from"./ssrBoot-BBXTmuIy.js";const R=(a=void 0)=>{const{mdAndDown:l,name:e}=L(),t=a||l,s=S(!0);return(()=>{s.value=!t.value})(),b(e,()=>{s.value=!t.value}),{isLeftSidebarOpen:s}},D=m({...y(),...d(),...p()},"VLayout"),_=v()({name:"VLayout",props:D(),setup(a,l){let{slots:e}=l;const{layoutClasses:t,layoutStyles:s,getLayoutItem:o,items:i,layoutRef:u}=k(a),{dimensionStyles:r}=f(a);return V(()=>n("div",{ref:u,class:[t.value,a.class],style:[r.value,s.value,a.style]},[n(g,null,{default:()=>{var c;return[n(P,null,[(c=e.default)==null?void 0:c.call(e)])]}})])),{getLayoutItem:o,items:i}}}),F=m({scrollable:Boolean,...y(),...d(),...B({tag:"main"})},"VMain"),h=v()({name:"VMain",props:F(),setup(a,l){let{slots:e}=l;const{dimensionStyles:t}=f(a),{mainStyles:s,layoutIsReady:o}=w(),{ssrBootStyles:i}=C();return V(()=>n(a.tag,{class:["v-main",{"v-main--scrollable":a.scrollable},a.class],style:[s.value,i.value,t.value,a.style]},{default:()=>{var u,r;return[a.scrollable?n("div",{class:"v-main__scroller"},[(u=e.default)==null?void 0:u.call(e)]):(r=e.default)==null?void 0:r.call(e)]}})),o}});export{h as V,_ as a,R as u};
