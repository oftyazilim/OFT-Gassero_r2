import{a5 as B,$ as w,a7 as te,E as U,w as I,bb as G,bT as ae,bU as L,bV as ne,bW as oe,a2 as le,aq as ue,a3 as ie,bX as re,as as se,bY as ce,av as ve,aw as de,ax as me,ay as fe,aJ as he,az as ge,aB as ye,aA as z,a0 as q,aD as we,b9 as be,aG as Se,bZ as ke,aI as pe,r as Ee,b_ as Te,aK as Me,a9 as xe,b$ as Pe,b as T,q as A,bs as Ve,T as Be,F as Ce,a_ as De}from"./main-C8N3ebfR.js";import{m as Re,u as Ie}from"./delay-CiPbFjzB.js";import{u as He}from"./scopeId-Cdi8TwQm.js";import{u as Ye}from"./ssrBoot-CMdykAJT.js";import{V as Le}from"./VImg-BEBs2K_P.js";function Ne(e){let{rootEl:s,isSticky:i,layoutItemStyles:E}=e;const t=B(!1),r=B(0),a=w(()=>{const b=typeof t.value=="boolean"?"top":t.value;return[i.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[b]:te(r.value)}:{top:E.value.top}]});U(()=>{I(i,b=>{b?window.addEventListener("scroll",p,{passive:!0}):window.removeEventListener("scroll",p)},{immediate:!0})}),G(()=>{window.removeEventListener("scroll",p)});let g=0;function p(){const b=g>window.scrollY?"up":"down",v=s.value.getBoundingClientRect(),d=parseFloat(E.value.top??0),c=window.scrollY-Math.max(0,r.value-d),f=v.height+Math.max(r.value,d)-window.scrollY-window.innerHeight,y=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;v.height<window.innerHeight-d?(t.value="top",r.value=d):b==="up"&&t.value==="bottom"||b==="down"&&t.value==="top"?(r.value=window.scrollY+v.top-y,t.value=!0):b==="down"&&f<=0?(r.value=0,t.value="bottom"):b==="up"&&c<=0&&(y?t.value!=="top"&&(r.value=-c+y+d,t.value="top"):(r.value=v.top+c,t.value="top")),g=window.scrollY}return{isStuck:t,stickyStyles:a}}const We=100,_e=20;function F(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Z(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let i=e.length-1;i>0;i--){if(e[i].t===e[i-1].t)continue;const E=F(s),t=(e[i].d-e[i-1].d)/(e[i].t-e[i-1].t);s+=(t-E)*Math.abs(t),i===e.length-1&&(s*=.5)}return F(s)*1e3}function Oe(){const e={};function s(t){Array.from(t.changedTouches).forEach(r=>{(e[r.identifier]??(e[r.identifier]=new ae(_e))).push([t.timeStamp,r])})}function i(t){Array.from(t.changedTouches).forEach(r=>{delete e[r.identifier]})}function E(t){var b;const r=(b=e[t])==null?void 0:b.values().reverse();if(!r)throw new Error(`No samples for touch id ${t}`);const a=r[0],g=[],p=[];for(const v of r){if(a[0]-v[0]>We)break;g.push({t:v[0],d:v[1].clientX}),p.push({t:v[0],d:v[1].clientY})}return{x:Z(g),y:Z(p),get direction(){const{x:v,y:d}=this,[c,f]=[Math.abs(v),Math.abs(d)];return c>f&&v>=0?"right":c>f&&v<=0?"left":f>c&&d>=0?"down":f>c&&d<=0?"up":Xe()}}}return{addMovement:s,endTouch:i,getVelocity:E}}function Xe(){throw new Error}function $e(e){let{el:s,isActive:i,isTemporary:E,width:t,touchless:r,position:a}=e;U(()=>{window.addEventListener("touchstart",x,{passive:!0}),window.addEventListener("touchmove",M,{passive:!1}),window.addEventListener("touchend",H,{passive:!0})}),G(()=>{window.removeEventListener("touchstart",x),window.removeEventListener("touchmove",M),window.removeEventListener("touchend",H)});const g=w(()=>["left","right"].includes(a.value)),{addMovement:p,endTouch:b,getVelocity:v}=Oe();let d=!1;const c=B(!1),f=B(0),y=B(0);let k;function C(n,o){return(a.value==="left"?n:a.value==="right"?document.documentElement.clientWidth-n:a.value==="top"?n:a.value==="bottom"?document.documentElement.clientHeight-n:V())-(o?t.value:0)}function D(n){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const l=a.value==="left"?(n-y.value)/t.value:a.value==="right"?(document.documentElement.clientWidth-n-y.value)/t.value:a.value==="top"?(n-y.value)/t.value:a.value==="bottom"?(document.documentElement.clientHeight-n-y.value)/t.value:V();return o?Math.max(0,Math.min(1,l)):l}function x(n){if(r.value)return;const o=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY,u=25,h=a.value==="left"?o<u:a.value==="right"?o>document.documentElement.clientWidth-u:a.value==="top"?l<u:a.value==="bottom"?l>document.documentElement.clientHeight-u:V(),m=i.value&&(a.value==="left"?o<t.value:a.value==="right"?o>document.documentElement.clientWidth-t.value:a.value==="top"?l<t.value:a.value==="bottom"?l>document.documentElement.clientHeight-t.value:V());(h||m||i.value&&E.value)&&(k=[o,l],y.value=C(g.value?o:l,i.value),f.value=D(g.value?o:l),d=y.value>-20&&y.value<80,b(n),p(n))}function M(n){const o=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY;if(d){if(!n.cancelable){d=!1;return}const h=Math.abs(o-k[0]),m=Math.abs(l-k[1]);(g.value?h>m&&h>3:m>h&&m>3)?(c.value=!0,d=!1):(g.value?m:h)>3&&(d=!1)}if(!c.value)return;n.preventDefault(),p(n);const u=D(g.value?o:l,!1);f.value=Math.max(0,Math.min(1,u)),u>1?y.value=C(g.value?o:l,!0):u<0&&(y.value=C(g.value?o:l,!1))}function H(n){if(d=!1,!c.value)return;p(n),c.value=!1;const o=v(n.changedTouches[0].identifier),l=Math.abs(o.x),u=Math.abs(o.y);(g.value?l>u&&l>400:u>l&&u>3)?i.value=o.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||V()):i.value=f.value>.5}const R=w(()=>c.value?{transform:a.value==="left"?`translateX(calc(-100% + ${f.value*t.value}px))`:a.value==="right"?`translateX(calc(100% - ${f.value*t.value}px))`:a.value==="top"?`translateY(calc(-100% + ${f.value*t.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${f.value*t.value}px))`:V(),transition:"none"}:void 0);return L(c,()=>{var l,u;const n=((l=s.value)==null?void 0:l.style.transform)??null,o=((u=s.value)==null?void 0:u.style.transition)??null;ne(()=>{var h,m,P,Y;(m=s.value)==null||m.style.setProperty("transform",((h=R.value)==null?void 0:h.transform)||"none"),(Y=s.value)==null||Y.style.setProperty("transition",((P=R.value)==null?void 0:P.transition)||null)}),oe(()=>{var h,m;(h=s.value)==null||h.style.setProperty("transform",n),(m=s.value)==null||m.style.setProperty("transition",o)})}),{isDragging:c,dragProgress:f,dragStyles:R}}function V(){throw new Error}const ze=["start","end","left","right","top","bottom"],qe=le({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ze.includes(e)},sticky:Boolean,...ue(),...ie(),...Re(),...re({mobile:null}),...se(),...ce(),...ve(),...de({tag:"nav"}),...me()},"VNavigationDrawer"),Je=fe()({name:"VNavigationDrawer",props:qe(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:i,emit:E,slots:t}=s;const{isRtl:r}=he(),{themeClasses:a}=ge(e),{borderClasses:g}=ye(e),{backgroundColorClasses:p,backgroundColorStyles:b}=z(q(e,"color")),{elevationClasses:v}=we(e),{displayClasses:d,mobile:c}=be(e),{roundedClasses:f}=Se(e),y=ke(),k=pe(e,"modelValue",null,S=>!!S),{ssrBootStyles:C}=Ye(),{scopeId:D}=He(),x=Ee(),M=B(!1),{runOpenDelay:H,runCloseDelay:R}=Ie(e,S=>{M.value=S}),n=w(()=>e.rail&&e.expandOnHover&&M.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),o=w(()=>Pe(e.location,r.value)),l=w(()=>e.persistent),u=w(()=>!e.permanent&&(c.value||e.temporary)),h=w(()=>e.sticky&&!u.value&&o.value!=="bottom");L(()=>e.expandOnHover&&e.rail!=null,()=>{I(M,S=>E("update:rail",!S))}),L(()=>!e.disableResizeWatcher,()=>{I(u,S=>!e.permanent&&De(()=>k.value=!S))}),L(()=>!e.disableRouteWatcher&&!!y,()=>{I(y.currentRoute,()=>u.value&&(k.value=!1))}),I(()=>e.permanent,S=>{S&&(k.value=!0)}),e.modelValue==null&&!u.value&&(k.value=e.permanent||!c.value);const{isDragging:m,dragProgress:P}=$e({el:x,isActive:k,isTemporary:u,width:n,touchless:q(e,"touchless"),position:o}),Y=w(()=>{const S=u.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):n.value;return m.value?S*P.value:S}),J=w(()=>["top","bottom"].includes(e.location)?0:n.value),{layoutItemStyles:N,layoutItemScrimStyles:K,layoutIsReady:j}=Te({id:e.name,order:w(()=>parseInt(e.order,10)),position:o,layoutSize:Y,elementSize:J,active:w(()=>k.value||m.value),disableTransitions:w(()=>m.value),absolute:w(()=>e.absolute||h.value&&typeof W.value!="string")}),{isStuck:W,stickyStyles:Q}=Ne({rootEl:x,isSticky:h,layoutItemStyles:N}),_=z(w(()=>typeof e.scrim=="string"?e.scrim:null)),ee=w(()=>({...m.value?{opacity:P.value*.2,transition:"none"}:void 0,...K.value}));return Me({VList:{bgColor:"transparent"}}),xe(()=>{const S=t.image||e.image;return T(Ce,null,[T(e.tag,A({ref:x,onMouseenter:H,onMouseleave:R,class:["v-navigation-drawer",`v-navigation-drawer--${o.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":M.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":u.value,"v-navigation-drawer--persistent":l.value,"v-navigation-drawer--active":k.value,"v-navigation-drawer--sticky":h.value},a.value,p.value,g.value,d.value,v.value,f.value,e.class],style:[b.value,N.value,C.value,Q.value,e.style,["top","bottom"].includes(o.value)?{height:"auto"}:{}]},D,i),{default:()=>{var O,X,$;return[S&&T("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?T(Ve,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):T(Le,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&T("div",{class:"v-navigation-drawer__prepend"},[(O=t.prepend)==null?void 0:O.call(t)]),T("div",{class:"v-navigation-drawer__content"},[(X=t.default)==null?void 0:X.call(t)]),t.append&&T("div",{class:"v-navigation-drawer__append"},[($=t.append)==null?void 0:$.call(t)])]}}),T(Be,{name:"fade-transition"},{default:()=>[u.value&&(m.value||k.value)&&!!e.scrim&&T("div",A({class:["v-navigation-drawer__scrim",_.backgroundColorClasses.value],style:[ee.value,_.backgroundColorStyles.value],onClick:()=>{l.value||(k.value=!1)}},D),null)]})])}),j.then(()=>({isStuck:W}))}});export{Je as V};
