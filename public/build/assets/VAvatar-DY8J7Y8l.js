import{ay as c,c3 as g,c5 as f,a3 as i,L as y,a2 as V,bn as k,bB as P,av as b,c6 as C,aw as S,ax as z,bD as h,az as I,bG as x,bH as A,aG as D,c7 as B,a9 as R,b as l,V as T,bs as F,bK as G}from"./main-C8N3ebfR.js";import{V as _}from"./VImg-BEBs2K_P.js";function L(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",s=arguments.length>2?arguments[2]:void 0;return c()({name:s??g(f(a.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...i()},setup(e,u){let{slots:t}=u;return()=>{var n;return y(e.tag,{class:[a,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}})}const w=V({start:Boolean,end:Boolean,icon:k,image:String,text:String,...i(),...P(),...b(),...C(),...S(),...z(),...h({variant:"flat"})},"VAvatar"),N=c()({name:"VAvatar",props:w(),setup(a,r){let{slots:s}=r;const{themeClasses:e}=I(a),{colorClasses:u,colorStyles:t,variantClasses:n}=x(a),{densityClasses:o}=A(a),{roundedClasses:m}=D(a),{sizeClasses:v,sizeStyles:d}=B(a);return R(()=>l(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},e.value,u.value,o.value,m.value,v.value,n.value,a.class],style:[t.value,d.value,a.style]},{default:()=>[s.default?l(F,{key:"content-defaults",defaults:{VImg:{cover:!0,image:a.image},VIcon:{icon:a.icon}}},{default:()=>[s.default()]}):a.image?l(_,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?l(T,{key:"icon",icon:a.icon},null):a.text,G(!1,"v-avatar")]})),{}}});export{N as V,L as c};
