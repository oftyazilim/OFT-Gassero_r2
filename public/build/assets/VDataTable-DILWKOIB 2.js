import{cf as ut,a2 as I,aI as G,$ as x,bV as Ie,N as j,bz as Te,w as Ve,R as M,a6 as ne,bn as H,ay as W,bo as te,a9 as Q,b as u,q as B,cO as it,a7 as $,r as N,c3 as dt,cP as ct,ao as Fe,by as re,a0 as _,cQ as Z,cR as X,bX as ue,cv as ft,bO as mt,aA as vt,b9 as ie,bS as gt,F as L,V as he,ai as Ce,t as ye,bA as oe,a$ as pe,v as bt,bL as Y,cJ as ht,aK as yt}from"./main-C8N3ebfR.js";import{V as Se}from"./VPagination-B8QiYJDB.js";import{V as _e}from"./VSelect-DDLGMKRV.js";import{V as de}from"./VCheckboxBtn-B_RYkhur.js";import{V as pt}from"./VChip-BABOvncP.js";import{m as St,V as xe}from"./VTable-CMU1SrvJ.js";import{m as xt,u as Pt}from"./filter-BtZk6vEi.js";import{V as wt}from"./VDivider-BSW7EtyF.js";function Pe(e,l,a){return Object.keys(e).filter(t=>ut(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}const kt=I({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Be=Symbol.for("vuetify:data-table-pagination");function Dt(e){const l=G(e,"page",void 0,t=>+(t??1)),a=G(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function It(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=x(()=>a.value===-1?0:a.value*(l.value-1)),r=x(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),o=x(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));Ie(()=>{l.value>o.value&&(l.value=o.value)});function s(g){a.value=g,l.value=1}function d(){l.value=ne(l.value+1,1,o.value)}function c(){l.value=ne(l.value-1,1,o.value)}function m(g){l.value=ne(g,1,o.value)}const v={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:o,itemsLength:t,nextPage:d,prevPage:c,setPage:m,setItemsPerPage:s};return j(Be,v),v}function Tt(){const e=M(Be);if(!e)throw new Error("Missing pagination!");return e}function Vt(e){const l=Te("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:r}=e,o=x(()=>r.value<=0?a.value:a.value.slice(t.value,n.value));return Ve(o,s=>{l.emit("update:currentItems",s)}),{paginatedItems:o}}const Oe=I({prevIcon:{type:H,default:"$prev"},nextIcon:{type:H,default:"$next"},firstIcon:{type:H,default:"$first"},lastIcon:{type:H,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),we=W()({name:"VDataTableFooter",props:Oe(),setup(e,l){let{slots:a}=l;const{t}=te(),{page:n,pageCount:r,startIndex:o,stopIndex:s,itemsLength:d,itemsPerPage:c,setItemsPerPage:m}=Tt(),v=x(()=>e.itemsPerPageOptions.map(g=>typeof g=="number"?{value:g,title:g===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(g)}:{...g,title:isNaN(Number(g.title))?t(g.title):g.title}));return Q(()=>{var S;const g=Se.filterProps(e);return u("div",{class:"v-data-table-footer"},[(S=a.prepend)==null?void 0:S.call(a),u("div",{class:"v-data-table-footer__items-per-page"},[u("span",null,[t(e.itemsPerPageText)]),u(_e,{items:v.value,modelValue:c.value,"onUpdate:modelValue":b=>m(Number(b)),density:"compact",variant:"outlined","hide-details":!0},null)]),u("div",{class:"v-data-table-footer__info"},[u("div",null,[t(e.pageText,d.value?o.value+1:0,s.value,d.value)])]),u("div",{class:"v-data-table-footer__pagination"},[u(Se,B({modelValue:n.value,"onUpdate:modelValue":b=>n.value=b,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},g),null)])])}),{}}}),ee=it({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return u(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:$(e.height),width:$(e.width),maxWidth:$(e.maxWidth),left:$(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),Ft=I({headers:Array},"DataTable-header"),Ae=Symbol.for("vuetify:data-table-headers"),$e={title:"",sortable:!1},Ct={...$e,width:48};function _t(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function se(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)se(a,l);return l}function Re(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&Re(a.children,l);return l}function Bt(e){if(e.key){if(e.key==="data-table-group")return $e;if(["data-table-expand","data-table-select"].includes(e.key))return Ct}}function ce(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>ce(a,l+1))):l}function Ot(e){let l=!1;function a(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(o&&(r.fixed=!0),r.fixed)if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s],!0);else l?isNaN(+r.width)&&ct(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return o;if(r.children){r.fixedOffset=o;for(const s of r.children)o=t(s,o)}else r.fixed&&(r.fixedOffset=o,o+=parseFloat(r.width||"0")||0);return o}let n=0;for(const r of e)n=t(r,n)}function At(e,l){const a=[];let t=0;const n=_t(e);for(;n.size()>0;){let o=n.count();const s=[];let d=1;for(;o>0;){const{element:c,priority:m}=n.dequeue(),v=l-t-ce(c);if(s.push({...c,rowspan:v??1,colspan:c.children?se(c).length:1}),c.children)for(const g of c.children){const S=m%1+d/Math.pow(10,t+2);n.enqueue(g,t+v+S)}d+=1,o-=1}t+=1,a.push(s)}return{columns:e.map(o=>se(o)).flat(),headers:a}}function Ee(e){const l=[];for(const a of e){const t={...Bt(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,o={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?Ee(t.children):void 0};l.push(o)}return l}function $t(e,l){const a=N([]),t=N([]),n=N({}),r=N({}),o=N({});Ie(()=>{var p,f,h;const c=(e.headers||Object.keys(e.items[0]??{}).map(i=>({key:i,title:dt(i)}))).slice(),m=Re(c);(p=l==null?void 0:l.groupBy)!=null&&p.value.length&&!m.has("data-table-group")&&c.unshift({key:"data-table-group",title:"Group"}),(f=l==null?void 0:l.showSelect)!=null&&f.value&&!m.has("data-table-select")&&c.unshift({key:"data-table-select"}),(h=l==null?void 0:l.showExpand)!=null&&h.value&&!m.has("data-table-expand")&&c.push({key:"data-table-expand"});const v=Ee(c);Ot(v);const g=Math.max(...v.map(i=>ce(i)))+1,S=At(v,g);a.value=S.headers,t.value=S.columns;const b=S.headers.flat(1);for(const i of b)i.key&&(i.sortable&&(i.sort&&(n.value[i.key]=i.sort),i.sortRaw&&(r.value[i.key]=i.sortRaw)),i.filter&&(o.value[i.key]=i.filter))});const s={headers:a,columns:t,sortFunctions:n,sortRawFunctions:r,filterFunctions:o};return j(Ae,s),s}function ae(){const e=M(Ae);if(!e)throw new Error("Missing headers!");return e}const Rt={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Ne={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return Ne.select({items:a,value:l,selected:t})}},He={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return He.select({items:a,value:l,selected:t})}},Et=I({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Fe}},"DataTable-select"),Ge=Symbol.for("vuetify:data-table-selection");function Nt(e,l){let{allItems:a,currentPage:t}=l;const n=G(e,"modelValue",e.modelValue,h=>new Set(re(h).map(i=>{var k;return((k=a.value.find(F=>e.valueComparator(i,F.value)))==null?void 0:k.value)??i})),h=>[...h.values()]),r=x(()=>a.value.filter(h=>h.selectable)),o=x(()=>t.value.filter(h=>h.selectable)),s=x(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Rt;case"all":return He;case"page":default:return Ne}});function d(h){return re(h).every(i=>n.value.has(i.value))}function c(h){return re(h).some(i=>n.value.has(i.value))}function m(h,i){const k=s.value.select({items:h,value:i,selected:new Set(n.value)});n.value=k}function v(h){m([h],!d([h]))}function g(h){const i=s.value.selectAll({value:h,allItems:r.value,currentPage:o.value,selected:new Set(n.value)});n.value=i}const S=x(()=>n.value.size>0),b=x(()=>{const h=s.value.allSelected({allItems:r.value,currentPage:o.value});return!!h.length&&d(h)}),p=x(()=>s.value.showSelectAll),f={toggleSelect:v,select:m,selectAll:g,isSelected:d,isSomeSelected:c,someSelected:S,allSelected:b,showSelectAll:p};return j(Ge,f),f}function le(){const e=M(Ge);if(!e)throw new Error("Missing selection!");return e}const Ht=I({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Le=Symbol.for("vuetify:data-table-sort");function Gt(e){const l=G(e,"sortBy"),a=_(e,"mustSort"),t=_(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function Lt(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=d=>{if(d.key==null)return;let c=l.value.map(v=>({...v}))??[];const m=c.find(v=>v.key===d.key);m?m.order==="desc"?a.value?m.order="asc":c=c.filter(v=>v.key!==d.key):m.order="desc":t.value?c=[...c,{key:d.key,order:"asc"}]:c=[{key:d.key,order:"asc"}],l.value=c,n&&(n.value=1)};function o(d){return!!l.value.find(c=>c.key===d.key)}const s={sortBy:l,toggleSort:r,isSorted:o};return j(Le,s),s}function je(){const e=M(Le);if(!e)throw new Error("Missing sort!");return e}function jt(e,l,a,t){const n=te();return{sortedItems:x(()=>{var o,s;return a.value.length?Mt(l.value,a.value,n.current.value,{transform:t==null?void 0:t.transform,sortFunctions:{...e.customKeySort,...(o=t==null?void 0:t.sortFunctions)==null?void 0:o.value},sortRawFunctions:(s=t==null?void 0:t.sortRawFunctions)==null?void 0:s.value}):l.value})}}function Mt(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return e.map(o=>[o,t!=null&&t.transform?t.transform(o):o]).sort((o,s)=>{var d,c;for(let m=0;m<l.length;m++){let v=!1;const g=l[m].key,S=l[m].order??"asc";if(S===!1)continue;let b=Z(o[1],g),p=Z(s[1],g),f=o[0].raw,h=s[0].raw;if(S==="desc"&&([b,p]=[p,b],[f,h]=[h,f]),(d=t==null?void 0:t.sortRawFunctions)!=null&&d[g]){const i=t.sortRawFunctions[g](f,h);if(i==null)continue;if(v=!0,i)return i}if((c=t==null?void 0:t.sortFunctions)!=null&&c[g]){const i=t.sortFunctions[g](b,p);if(i==null)continue;if(v=!0,i)return i}if(!v){if(b instanceof Date&&p instanceof Date)return b.getTime()-p.getTime();if([b,p]=[b,p].map(i=>i!=null?i.toString().toLocaleLowerCase():i),b!==p)return X(b)&&X(p)?0:X(b)?-1:X(p)?1:!isNaN(b)&&!isNaN(p)?Number(b)-Number(p):n.compare(b,p)}}return 0}).map(o=>{let[s]=o;return s})}const Me=I({color:String,sticky:Boolean,disableSort:Boolean,multiSort:Boolean,sortAscIcon:{type:H,default:"$sortAsc"},sortDescIcon:{type:H,default:"$sortDesc"},headerProps:{type:Object},...ue(),...ft()},"VDataTableHeaders"),ke=W()({name:"VDataTableHeaders",props:Me(),setup(e,l){let{slots:a}=l;const{t}=te(),{toggleSort:n,sortBy:r,isSorted:o}=je(),{someSelected:s,allSelected:d,selectAll:c,showSelectAll:m}=le(),{columns:v,headers:g}=ae(),{loaderClasses:S}=mt(e);function b(D,y){if(!(!e.sticky&&!D.fixed))return{position:"sticky",left:D.fixed?$(D.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${y})`:void 0}}function p(D){const y=r.value.find(T=>T.key===D.key);return y?y.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:f,backgroundColorStyles:h}=vt(e,"color"),{displayClasses:i,mobile:k}=ie(e),F=x(()=>({headers:g.value,columns:v.value,toggleSort:n,isSorted:o,sortBy:r.value,someSelected:s.value,allSelected:d.value,selectAll:c,getSortIcon:p})),P=x(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},i.value,S.value]),q=D=>{let{column:y,x:T,y:w}=D;const V=y.key==="data-table-select"||y.key==="data-table-expand",O=B(e.headerProps??{},y.headerProps??{});return u(ee,B({tag:"th",align:y.align,class:[{"v-data-table__th--sortable":y.sortable&&!e.disableSort,"v-data-table__th--sorted":o(y),"v-data-table__th--fixed":y.fixed},...P.value],style:{width:$(y.width),minWidth:$(y.minWidth),maxWidth:$(y.maxWidth),...b(y,w)},colspan:y.colspan,rowspan:y.rowspan,onClick:y.sortable?()=>n(y):void 0,fixed:y.fixed,nowrap:y.nowrap,lastFixed:y.lastFixed,noPadding:V},O),{default:()=>{var E;const R=`header.${y.key}`,J={column:y,selectAll:c,isSorted:o,toggleSort:n,sortBy:r.value,someSelected:s.value,allSelected:d.value,getSortIcon:p};return a[R]?a[R](J):y.key==="data-table-select"?((E=a["header.data-table-select"])==null?void 0:E.call(a,J))??(m.value&&u(de,{modelValue:d.value,indeterminate:s.value&&!d.value,"onUpdate:modelValue":c},null)):u("div",{class:"v-data-table-header__content"},[u("span",null,[y.title]),y.sortable&&!e.disableSort&&u(he,{key:"icon",class:"v-data-table-header__sort-icon",icon:p(y)},null),e.multiSort&&o(y)&&u("div",{key:"badge",class:["v-data-table-header__sort-badge",...f.value],style:h.value},[r.value.findIndex(K=>K.key===y.key)+1])])}})},z=()=>{const D=B(e.headerProps??{}??{}),y=x(()=>v.value.filter(w=>(w==null?void 0:w.sortable)&&!e.disableSort)),T=x(()=>{if(v.value.find(V=>V.key==="data-table-select")!=null)return d.value?"$checkboxOn":s.value?"$checkboxIndeterminate":"$checkboxOff"});return u(ee,B({tag:"th",class:[...P.value],colspan:g.value.length+1},D),{default:()=>[u("div",{class:"v-data-table-header__content"},[u(_e,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:y.value,label:t("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:T.value,"onClick:append":()=>c(!d.value)},{...a,chip:w=>{var V;return u(pt,{onClick:(V=w.item.raw)!=null&&V.sortable?()=>n(w.item.raw):void 0,onMousedown:O=>{O.preventDefault(),O.stopPropagation()}},{default:()=>[w.item.title,u(he,{class:["v-data-table__td-sort-icon",o(w.item.raw)&&"v-data-table__td-sort-icon-active"],icon:p(w.item.raw),size:"small"},null)]})}})])]})};Q(()=>k.value?u("tr",null,[u(z,null,null)]):u(L,null,[a.headers?a.headers(F.value):g.value.map((D,y)=>u("tr",null,[D.map((T,w)=>u(q,{column:T,x:w,y},null))])),e.loading&&u("tr",{class:"v-data-table-progress"},[u("th",{colspan:v.value.length},[u(gt,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),Wt=I({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),We=Symbol.for("vuetify:data-table-group");function qt(e){return{groupBy:G(e,"groupBy")}}function zt(e){const{disableSort:l,groupBy:a,sortBy:t}=e,n=N(new Set),r=x(()=>a.value.map(m=>({...m,order:m.order??!1})).concat(l!=null&&l.value?[]:t.value));function o(m){return n.value.has(m.id)}function s(m){const v=new Set(n.value);o(m)?v.delete(m.id):v.add(m.id),n.value=v}function d(m){function v(g){const S=[];for(const b of g.items)"type"in b&&b.type==="group"?S.push(...v(b)):S.push(b);return S}return v({type:"group",items:m,id:"dummy",key:"dummy",value:"dummy",depth:0})}const c={sortByWithGroups:r,toggleGroup:s,opened:n,groupBy:a,extractRows:d,isGroupOpen:o};return j(We,c),c}function qe(){const e=M(We);if(!e)throw new Error("Missing group!");return e}function Kt(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=Z(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function ze(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=Kt(e,l[0]),r=[],o=l.slice(1);return n.forEach((s,d)=>{const c=l[0],m=`${t}_${c}_${d}`;r.push({depth:a,id:m,key:c,value:d,items:o.length?ze(s,o,a+1,m):s,type:"group"})}),r}function Ke(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...Ke(t.items,l))):a.push(t);return a}function Ut(e,l,a){return{flatItems:x(()=>{if(!l.value.length)return e.value;const n=ze(e.value,l.value.map(r=>r.key));return Ke(n,a.value)})}}const Qt=I({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Jt=W()({name:"VDataTableGroupHeaderRow",props:Qt(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=qe(),{isSelected:o,isSomeSelected:s,select:d}=le(),{columns:c}=ae(),m=x(()=>r([e.item]));return()=>u("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map(v=>{var g,S;if(v.key==="data-table-group"){const b=t(e.item)?"$expand":"$next",p=()=>n(e.item);return((g=a["data-table-group"])==null?void 0:g.call(a,{item:e.item,count:m.value.length,props:{icon:b,onClick:p}}))??u(ee,{class:"v-data-table-group-header-row__column"},{default:()=>[u(Ce,{size:"small",variant:"text",icon:b,onClick:p},null),u("span",null,[e.item.value]),u("span",null,[ye("("),m.value.length,ye(")")])]})}if(v.key==="data-table-select"){const b=o(m.value),p=s(m.value)&&!b,f=h=>d(m.value,h);return((S=a["data-table-select"])==null?void 0:S.call(a,{props:{modelValue:b,indeterminate:p,"onUpdate:modelValue":f}}))??u("td",null,[u(de,{modelValue:b,indeterminate:p,"onUpdate:modelValue":f},null)])}return u("td",null,null)})])}}),Xt=I({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Ue=Symbol.for("vuetify:datatable:expanded");function Yt(e){const l=_(e,"expandOnClick"),a=G(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function t(s,d){const c=new Set(a.value);d?c.add(s.value):c.delete(s.value),a.value=c}function n(s){return a.value.has(s.value)}function r(s){t(s,!n(s))}const o={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return j(Ue,o),o}function Qe(){const e=M(Ue);if(!e)throw new Error("foo");return e}const Zt=I({index:Number,item:Object,cellProps:[Object,Function],onClick:oe(),onContextmenu:oe(),onDblclick:oe(),...ue()},"VDataTableRow"),ea=W()({name:"VDataTableRow",props:Zt(),setup(e,l){let{slots:a}=l;const{displayClasses:t,mobile:n}=ie(e,"v-data-table__tr"),{isSelected:r,toggleSelect:o,someSelected:s,allSelected:d,selectAll:c}=le(),{isExpanded:m,toggleExpand:v}=Qe(),{toggleSort:g,sortBy:S,isSorted:b}=je(),{columns:p}=ae();Q(()=>u("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},t.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&p.value.map((f,h)=>{const i=e.item,k=`item.${f.key}`,F=`header.${f.key}`,P={index:e.index,item:i.raw,internalItem:i,value:Z(i.columns,f.key),column:f,isSelected:r,toggleSelect:o,isExpanded:m,toggleExpand:v},q={column:f,selectAll:c,isSorted:b,toggleSort:g,sortBy:S.value,someSelected:s.value,allSelected:d.value,getSortIcon:()=>""},z=typeof e.cellProps=="function"?e.cellProps({index:P.index,item:P.item,internalItem:P.internalItem,value:P.value,column:f}):e.cellProps,D=typeof f.cellProps=="function"?f.cellProps({index:P.index,item:P.item,internalItem:P.internalItem,value:P.value}):f.cellProps;return u(ee,B({align:f.align,class:{"v-data-table__td--expanded-row":f.key==="data-table-expand","v-data-table__td--select-row":f.key==="data-table-select"},fixed:f.fixed,fixedOffset:f.fixedOffset,lastFixed:f.lastFixed,maxWidth:n.value?void 0:f.maxWidth,noPadding:f.key==="data-table-select"||f.key==="data-table-expand",nowrap:f.nowrap,width:n.value?void 0:f.width},z,D),{default:()=>{var T,w,V,O,R;if(a[k]&&!n.value)return(T=a[k])==null?void 0:T.call(a,P);if(f.key==="data-table-select")return((w=a["item.data-table-select"])==null?void 0:w.call(a,P))??u(de,{disabled:!i.selectable,modelValue:r([i]),onClick:pe(()=>o(i),["stop"])},null);if(f.key==="data-table-expand")return((V=a["item.data-table-expand"])==null?void 0:V.call(a,P))??u(Ce,{icon:m(i)?"$collapse":"$expand",size:"small",variant:"text",onClick:pe(()=>v(i),["stop"])},null);const y=bt(P.value);return n.value?u(L,null,[u("div",{class:"v-data-table__td-title"},[((O=a[F])==null?void 0:O.call(a,q))??f.title]),u("div",{class:"v-data-table__td-value"},[((R=a[k])==null?void 0:R.call(a,P))??y])]):y}})})]))}}),Je=I({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...ue()},"VDataTableRows"),De=W()({name:"VDataTableRows",inheritAttrs:!1,props:Je(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=ae(),{expandOnClick:r,toggleExpand:o,isExpanded:s}=Qe(),{isSelected:d,toggleSelect:c}=le(),{toggleGroup:m,isGroupOpen:v}=qe(),{t:g}=te(),{mobile:S}=ie(e);return Q(()=>{var b,p;return e.loading&&(!e.items.length||t.loading)?u("tr",{class:"v-data-table-rows-loading",key:"loading"},[u("td",{colspan:n.value.length},[((b=t.loading)==null?void 0:b.call(t))??g(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?u("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[u("td",{colspan:n.value.length},[((p=t["no-data"])==null?void 0:p.call(t))??g(e.noDataText)])]):u(L,null,[e.items.map((f,h)=>{var F;if(f.type==="group"){const P={index:h,item:f,columns:n.value,isExpanded:s,toggleExpand:o,isSelected:d,toggleSelect:c,toggleGroup:m,isGroupOpen:v};return t["group-header"]?t["group-header"](P):u(Jt,B({key:`group-header_${f.id}`,item:f},Pe(a,":group-header",()=>P)),t)}const i={index:h,item:f.raw,internalItem:f,columns:n.value,isExpanded:s,toggleExpand:o,isSelected:d,toggleSelect:c},k={...i,props:B({key:`item_${f.key??f.index}`,onClick:r.value?()=>{o(f)}:void 0,index:h,item:f,cellProps:e.cellProps,mobile:S.value},Pe(a,":row",()=>i),typeof e.rowProps=="function"?e.rowProps({item:i.item,index:i.index,internalItem:i.internalItem}):e.rowProps)};return u(L,{key:k.props.key},[t.item?t.item(k):u(ea,k.props,t),s(f)&&((F=t["expanded-row"])==null?void 0:F.call(t,i))])})])}),{}}}),ta=I({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function aa(e,l,a,t){const n=e.returnObject?l:Y(l,e.itemValue),r=Y(l,e.itemSelectable,!0),o=t.reduce((s,d)=>(d.key!=null&&(s[d.key]=Y(l,d.value)),s),{});return{type:"item",key:e.returnObject?Y(l,e.itemValue):n,index:a,value:n,selectable:r,columns:o,raw:l}}function la(e,l,a){return l.map((t,n)=>aa(e,t,n,a))}function na(e,l){return{items:x(()=>la(e,e.items,l.value))}}function ra(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const o=Te("VDataTable"),s=x(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let d=null;Ve(s,()=>{Fe(d,s.value)||(d&&d.search!==s.value.search&&(l.value=1),o.emit("update:options",s.value),d=s.value)},{deep:!0,immediate:!0})}const oa=I({...Je(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...Xt(),...Wt(),...Ft(),...ta(),...Et(),...Ht(),...Me(),...St()},"DataTable"),sa=I({...kt(),...oa(),...xt(),...Oe()},"VDataTable"),ba=W()({name:"VDataTable",props:sa(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=qt(e),{sortBy:r,multiSort:o,mustSort:s}=Gt(e),{page:d,itemsPerPage:c}=Dt(e),{disableSort:m}=ht(e),{columns:v,headers:g,sortFunctions:S,sortRawFunctions:b,filterFunctions:p}=$t(e,{groupBy:n,showSelect:_(e,"showSelect"),showExpand:_(e,"showExpand")}),{items:f}=na(e,v),h=_(e,"search"),{filteredItems:i}=Pt(e,f,h,{transform:A=>A.columns,customKeyFilter:p}),{toggleSort:k}=Lt({sortBy:r,multiSort:o,mustSort:s,page:d}),{sortByWithGroups:F,opened:P,extractRows:q,isGroupOpen:z,toggleGroup:D}=zt({groupBy:n,sortBy:r,disableSort:m}),{sortedItems:y}=jt(e,i,F,{transform:A=>({...A.raw,...A.columns}),sortFunctions:S,sortRawFunctions:b}),{flatItems:T}=Ut(y,n,P),w=x(()=>T.value.length),{startIndex:V,stopIndex:O,pageCount:R,setItemsPerPage:J}=It({page:d,itemsPerPage:c,itemsLength:w}),{paginatedItems:E}=Vt({items:T,startIndex:V,stopIndex:O,itemsPerPage:c}),K=x(()=>q(E.value)),{isSelected:Xe,select:Ye,selectAll:Ze,toggleSelect:et,someSelected:tt,allSelected:at}=Nt(e,{allItems:f,currentPage:K}),{isExpanded:lt,toggleExpand:nt}=Yt(e);ra({page:d,itemsPerPage:c,sortBy:r,groupBy:n,search:h}),yt({VDataTableRows:{hideNoData:_(e,"hideNoData"),noDataText:_(e,"noDataText"),loading:_(e,"loading"),loadingText:_(e,"loadingText")}});const C=x(()=>({page:d.value,itemsPerPage:c.value,sortBy:r.value,pageCount:R.value,toggleSort:k,setItemsPerPage:J,someSelected:tt.value,allSelected:at.value,isSelected:Xe,select:Ye,selectAll:Ze,toggleSelect:et,isExpanded:lt,toggleExpand:nt,isGroupOpen:z,toggleGroup:D,items:K.value.map(A=>A.raw),internalItems:K.value,groupedItems:E.value,columns:v.value,headers:g.value}));return Q(()=>{const A=we.filterProps(e),rt=ke.filterProps(e),ot=De.filterProps(e),st=xe.filterProps(e);return u(xe,B({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},st),{top:()=>{var U;return(U=t.top)==null?void 0:U.call(t,C.value)},default:()=>{var U,fe,me,ve,ge,be;return t.default?t.default(C.value):u(L,null,[(U=t.colgroup)==null?void 0:U.call(t,C.value),!e.hideDefaultHeader&&u("thead",{key:"thead"},[u(ke,rt,t)]),(fe=t.thead)==null?void 0:fe.call(t,C.value),!e.hideDefaultBody&&u("tbody",null,[(me=t["body.prepend"])==null?void 0:me.call(t,C.value),t.body?t.body(C.value):u(De,B(a,ot,{items:E.value}),t),(ve=t["body.append"])==null?void 0:ve.call(t,C.value)]),(ge=t.tbody)==null?void 0:ge.call(t,C.value),(be=t.tfoot)==null?void 0:be.call(t,C.value)])},bottom:()=>t.bottom?t.bottom(C.value):!e.hideDefaultFooter&&u(L,null,[u(wt,null,null),u(we,A,{prepend:t["footer.prepend"]})])})}),{}}});export{ba as V,oa as a,Oe as b,qt as c,Gt as d,Dt as e,$t as f,It as g,Ut as h,Nt as i,Yt as j,ra as k,Lt as l,kt as m,we as n,ke as o,zt as p,De as q,na as u};
