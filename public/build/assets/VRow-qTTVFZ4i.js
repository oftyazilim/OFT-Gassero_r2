/* empty css              */import{a2 as v,a3 as w,aw as S,ay as V,$ as k,L,c1 as b,c2 as N}from"./main-CXefX_qh.js";const o=["start","end","center"],g=["space-between","space-around","space-evenly"];function i(t,s){return b.reduce((e,a)=>{const n=t+N(a);return e[n]=s(),e},{})}const P=[...o,"baseline","stretch"],d=t=>P.includes(t),f=i("align",()=>({type:String,default:null,validator:d})),A=[...o,...g],y=t=>A.includes(t),C=i("justify",()=>({type:String,default:null,validator:y})),E=[...o,...g,"stretch"],j=t=>E.includes(t),m=i("alignContent",()=>({type:String,default:null,validator:j})),u={align:Object.keys(f),justify:Object.keys(C),alignContent:Object.keys(m)},h={align:"align",justify:"justify",alignContent:"align-content"};function $(t,s,e){let a=h[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const G=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...f,justify:{type:String,default:null,validator:y},...C,alignContent:{type:String,default:null,validator:j},...m,...w(),...S()},"VRow"),I=V()({name:"VRow",props:G(),setup(t,s){let{slots:e}=s;const a=k(()=>{const n=[];let l;for(l in u)u[l].forEach(c=>{const p=t[c],r=$(l,c,p);r&&n.push(r)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return L(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{I as V};
