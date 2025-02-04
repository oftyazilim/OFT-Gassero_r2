import{a2 as v,bn as S,a3 as m,av as k,c6 as T,as as V,ay as C,c7 as b,aA as D,a0 as l,aG as I,aD as P,a9 as y,b as t,V as B,bs as R,ar as $,aw as z,aC as w,a5 as O,r as j,w as N,a7 as u,ct as x,bB as E,ax as L,az as q,bH as A,aJ as F,aK as G,$ as h}from"./main-C8N3ebfR.js";const H=v({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:S,iconColor:String,lineColor:String,...m(),...k(),...T(),...V()},"VTimelineDivider"),J=C()({name:"VTimelineDivider",props:H(),setup(e,c){let{slots:i}=c;const{sizeClasses:r,sizeStyles:o}=b(e,"v-timeline-divider__dot"),{backgroundColorStyles:d,backgroundColorClasses:a}=D(l(e,"dotColor")),{roundedClasses:n}=I(e,"v-timeline-divider__dot"),{elevationClasses:s}=P(e),{backgroundColorClasses:f,backgroundColorStyles:g}=D(l(e,"lineColor"));return y(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",f.value],style:g.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",s.value,n.value,r.value],style:o.value},[t("div",{class:["v-timeline-divider__inner-dot",a.value,n.value],style:d.value},[i.default?t(R,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},i.default):t(B,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",f.value],style:g.value},null)])),{}}}),_=v({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:S,iconColor:String,lineInset:[Number,String],...m(),...$(),...V(),...k(),...T(),...z()},"VTimelineItem"),M=C()({name:"VTimelineItem",props:_(),setup(e,c){let{slots:i}=c;const{dimensionStyles:r}=w(e),o=O(0),d=j();return N(d,a=>{var n;a&&(o.value=((n=a.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:n.getBoundingClientRect().width)??0)},{flush:"post"}),y(()=>{var a,n;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":u(o.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${u(e.lineInset)})`:u(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:r.value},[(a=i.default)==null?void 0:a.call(i)]),t(J,{ref:d,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:i.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((n=i.opposite)==null?void 0:n.call(i))])])}),{}}}),K=v({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...x(_({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...m(),...E(),...z(),...L()},"VTimeline"),Q=C()({name:"VTimeline",props:K(),setup(e,c){let{slots:i}=c;const{themeClasses:r}=q(e),{densityClasses:o}=A(e),{rtlClasses:d}=F();G({VTimelineDivider:{lineColor:l(e,"lineColor")},VTimelineItem:{density:l(e,"density"),dotColor:l(e,"dotColor"),fillDot:l(e,"fillDot"),hideOpposite:l(e,"hideOpposite"),iconColor:l(e,"iconColor"),lineColor:l(e,"lineColor"),lineInset:l(e,"lineInset"),size:l(e,"size")}});const a=h(()=>{const s=e.side?e.side:e.density!=="default"?"end":null;return s&&`v-timeline--side-${s}`}),n=h(()=>{const s=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return s;case"start":return s[0];case"end":return s[1];default:return null}});return y(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,n.value,{"v-timeline--inset-line":!!e.lineInset},r.value,o.value,a.value,d.value,e.class],style:[{"--v-timeline-line-thickness":u(e.lineThickness)},e.style]},i)),{}}});export{Q as V,M as a};
