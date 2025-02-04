import{r as E,cN as q,a2 as K,bn as L,aq as W,a3 as G,bB as J,as as O,av as U,c6 as X,aw as j,ax as H,bD as Q,ay as Y,aI as Z,bo as aa,aJ as ea,az as ta,b9 as la,a5 as ia,aK as S,a8 as na,$ as b,cz as k,a0 as f,a9 as sa,b as o,ai as P,q as h,cA as R,a_ as B}from"./main-C8N3ebfR.js";function ua(){const a=E([]);q(()=>a.value=[]);function V(n,_){a.value[_]=n}return{refs:a,updateRef:V}}const ra=K({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:a=>a.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:a=>a%1===0},totalVisible:[Number,String],firstIcon:{type:L,default:"$first"},prevIcon:{type:L,default:"$prev"},nextIcon:{type:L,default:"$next"},lastIcon:{type:L,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...W(),...G(),...J(),...O(),...U(),...X(),...j({tag:"nav"}),...H(),...Q({variant:"text"})},"VPagination"),va=Y()({name:"VPagination",props:ra(),emits:{"update:modelValue":a=>!0,first:a=>!0,prev:a=>!0,next:a=>!0,last:a=>!0},setup(a,V){let{slots:n,emit:_}=V;const i=Z(a,"modelValue"),{t:g,n:$}=aa(),{isRtl:x}=ea(),{themeClasses:w}=ta(a),{width:C}=la(),I=ia(-1);S(void 0,{scoped:!0});const{resizeRef:F}=na(e=>{if(!e.length)return;const{target:t,contentRect:l}=e[0],r=t.querySelector(".v-pagination__list > *");if(!r)return;const v=l.width,m=r.offsetWidth+parseFloat(getComputedStyle(r).marginRight)*2;I.value=p(v,m)}),s=b(()=>parseInt(a.length,10)),u=b(()=>parseInt(a.start,10)),c=b(()=>a.totalVisible!=null?parseInt(a.totalVisible,10):I.value>=0?I.value:p(C.value,58));function p(e,t){const l=a.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((e-t*l)/t).toFixed(2)))}const N=b(()=>{if(s.value<=0||isNaN(s.value)||s.value>Number.MAX_SAFE_INTEGER)return[];if(c.value<=0)return[];if(c.value===1)return[i.value];if(s.value<=c.value)return k(s.value,u.value);const e=c.value%2===0,t=e?c.value/2:Math.floor(c.value/2),l=e?t:t+1,r=s.value-t;if(l-i.value>=0)return[...k(Math.max(1,c.value-1),u.value),a.ellipsis,s.value];if(i.value-r>=(e?1:0)){const v=c.value-1,m=s.value-v+u.value;return[u.value,a.ellipsis,...k(v,m)]}else{const v=Math.max(1,c.value-3),m=v===1?i.value:i.value-Math.ceil(v/2)+u.value;return[u.value,a.ellipsis,...k(v,m),a.ellipsis,s.value]}});function y(e,t,l){e.preventDefault(),i.value=t,l&&_(l,t)}const{refs:M,updateRef:z}=ua();S({VPaginationBtn:{color:f(a,"color"),border:f(a,"border"),density:f(a,"density"),size:f(a,"size"),variant:f(a,"variant"),rounded:f(a,"rounded"),elevation:f(a,"elevation")}});const D=b(()=>N.value.map((e,t)=>{const l=r=>z(r,t);if(typeof e=="string")return{isActive:!1,key:`ellipsis-${t}`,page:e,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}};{const r=e===i.value;return{isActive:r,key:e,page:$(e),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!a.disabled||+a.length<2,color:r?a.activeColor:a.color,"aria-current":r,"aria-label":g(r?a.currentPageAriaLabel:a.pageAriaLabel,e),onClick:v=>y(v,e)}}}})),d=b(()=>{const e=!!a.disabled||i.value<=u.value,t=!!a.disabled||i.value>=u.value+s.value-1;return{first:a.showFirstLastPage?{icon:x.value?a.lastIcon:a.firstIcon,onClick:l=>y(l,u.value,"first"),disabled:e,"aria-label":g(a.firstAriaLabel),"aria-disabled":e}:void 0,prev:{icon:x.value?a.nextIcon:a.prevIcon,onClick:l=>y(l,i.value-1,"prev"),disabled:e,"aria-label":g(a.previousAriaLabel),"aria-disabled":e},next:{icon:x.value?a.prevIcon:a.nextIcon,onClick:l=>y(l,i.value+1,"next"),disabled:t,"aria-label":g(a.nextAriaLabel),"aria-disabled":t},last:a.showFirstLastPage?{icon:x.value?a.firstIcon:a.lastIcon,onClick:l=>y(l,u.value+s.value-1,"last"),disabled:t,"aria-label":g(a.lastAriaLabel),"aria-disabled":t}:void 0}});function A(){var t;const e=i.value-u.value;(t=M.value[e])==null||t.$el.focus()}function T(e){e.key===R.left&&!a.disabled&&i.value>+a.start?(i.value=i.value-1,B(A)):e.key===R.right&&!a.disabled&&i.value<u.value+s.value-1&&(i.value=i.value+1,B(A))}return sa(()=>o(a.tag,{ref:F,class:["v-pagination",w.value,a.class],style:a.style,role:"navigation","aria-label":g(a.ariaLabel),onKeydown:T,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[a.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[n.first?n.first(d.value.first):o(P,h({_as:"VPaginationBtn"},d.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[n.prev?n.prev(d.value.prev):o(P,h({_as:"VPaginationBtn"},d.value.prev),null)]),D.value.map((e,t)=>o("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[n.item?n.item(e):o(P,h({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[n.next?n.next(d.value.next):o(P,h({_as:"VPaginationBtn"},d.value.next),null)]),a.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[n.last?n.last(d.value.last):o(P,h({_as:"VPaginationBtn"},d.value.last),null)])])]})),{}}});export{va as V};
