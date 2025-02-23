import{d as ee,r as at,o as R,c as N,e as pe,F as K,i as J,v as yt,n as $,b as O,f as X,t as Me,a$ as Ce,ai as Pe,V as Gt,g as si}from"./main-CXefX_qh.js";import{V as re}from"./VImg-Db788kHt.js";import{_ as je}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Ht}from"./VCardText-BW9gFSa-.js";import{V as Rt}from"./VCard-pJfFDOSH.js";import{_ as ri}from"./AppCardCode.vue_vue_type_style_index_0_lang-ksOfkbnl.js";import{V as te}from"./VCol-Dzvr-cnK.js";import{V as ni}from"./VRow-qTTVFZ4i.js";import"./index-DT3SyRRd.js";import"./VAvatar-a73hCTk3.js";import"./vue3-perfect-scrollbar-BT2Ou4oR.js";import"./VDivider-B8BIZrEP.js";/* empty css              */function _t(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function St(i,e){i===void 0&&(i={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof i[t]>"u"?i[t]=e[t]:_t(e[t])&&_t(i[t])&&Object.keys(e[t]).length>0&&St(i[t],e[t])})}const Nt={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Q(){const i=typeof document<"u"?document:{};return St(i,Nt),i}const ai={document:Nt,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function U(){const i=typeof window<"u"?window:{};return St(i,ai),i}function fe(i){return i===void 0&&(i=""),i.trim().split(" ").filter(e=>!!e.trim())}function oi(i){const e=i;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function ge(i,e){return e===void 0&&(e=0),setTimeout(i,e)}function le(){return Date.now()}function li(i){const e=U();let t;return e.getComputedStyle&&(t=e.getComputedStyle(i,null)),!t&&i.currentStyle&&(t=i.currentStyle),t||(t=i.style),t}function mt(i,e){e===void 0&&(e="x");const t=U();let s,r,n;const d=li(i);return t.WebKitCSSMatrix?(r=d.transform||d.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(p=>p.replace(",",".")).join(", ")),n=new t.WebKitCSSMatrix(r==="none"?"":r)):(n=d.MozTransform||d.OTransform||d.MsTransform||d.msTransform||d.transform||d.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=n.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=n.m41:s.length===16?r=parseFloat(s[12]):r=parseFloat(s[4])),e==="y"&&(t.WebKitCSSMatrix?r=n.m42:s.length===16?r=parseFloat(s[13]):r=parseFloat(s[5])),r||0}function Ie(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function pi(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function ae(){const i=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const s=t<0||arguments.length<=t?void 0:arguments[t];if(s!=null&&!pi(s)){const r=Object.keys(Object(s)).filter(n=>e.indexOf(n)<0);for(let n=0,d=r.length;n<d;n+=1){const p=r[n],a=Object.getOwnPropertyDescriptor(s,p);a!==void 0&&a.enumerable&&(Ie(i[p])&&Ie(s[p])?s[p].__swiper__?i[p]=s[p]:ae(i[p],s[p]):!Ie(i[p])&&Ie(s[p])?(i[p]={},s[p].__swiper__?i[p]=s[p]:ae(i[p],s[p])):i[p]=s[p])}}}return i}function _e(i,e,t){i.style.setProperty(e,t)}function Ft(i){let{swiper:e,targetPosition:t,side:s}=i;const r=U(),n=-e.translate;let d=null,p;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const f=t>n?"next":"prev",o=(c,m)=>f==="next"&&c>=m||f==="prev"&&c<=m,l=()=>{p=new Date().getTime(),d===null&&(d=p);const c=Math.max(Math.min((p-d)/a,1),0),m=.5-Math.cos(c*Math.PI)/2;let w=n+m*(t-n);if(o(w,t)&&(w=t),e.wrapperEl.scrollTo({[s]:w}),o(w,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:w})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(l)};l()}function he(i){return i.querySelector(".swiper-slide-transform")||i.shadowRoot&&i.shadowRoot.querySelector(".swiper-slide-transform")||i}function Z(i,e){e===void 0&&(e="");const t=[...i.children];return i instanceof HTMLSlotElement&&t.push(...i.assignedElements()),e?t.filter(s=>s.matches(e)):t}function di(i,e){const t=e.contains(i);return!t&&e instanceof HTMLSlotElement?[...e.assignedElements()].includes(i):t}function Fe(i){try{console.warn(i);return}catch{}}function oe(i,e){e===void 0&&(e=[]);const t=document.createElement(i);return t.classList.add(...Array.isArray(e)?e:fe(e)),t}function Xe(i){const e=U(),t=Q(),s=i.getBoundingClientRect(),r=t.body,n=i.clientTop||r.clientTop||0,d=i.clientLeft||r.clientLeft||0,p=i===e?e.scrollY:i.scrollTop,a=i===e?e.scrollX:i.scrollLeft;return{top:s.top+p-n,left:s.left+a-d}}function ci(i,e){const t=[];for(;i.previousElementSibling;){const s=i.previousElementSibling;e?s.matches(e)&&t.push(s):t.push(s),i=s}return t}function fi(i,e){const t=[];for(;i.nextElementSibling;){const s=i.nextElementSibling;e?s.matches(e)&&t.push(s):t.push(s),i=s}return t}function ue(i,e){return U().getComputedStyle(i,null).getPropertyValue(e)}function Ae(i){let e=i,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function we(i,e){const t=[];let s=i.parentElement;for(;s;)e?s.matches(e)&&t.push(s):t.push(s),s=s.parentElement;return t}function $e(i,e){function t(s){s.target===i&&(e.call(i,s),i.removeEventListener("transitionend",t))}e&&i.addEventListener("transitionend",t)}function wt(i,e,t){const s=U();return i[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function Y(i){return(Array.isArray(i)?i:[i]).filter(e=>!!e)}function We(i){return e=>Math.abs(e)>0&&i.browser&&i.browser.need3dFix&&Math.abs(e)%90===0?e+.001:e}let ot;function ui(){const i=U(),e=Q();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch)}}function Xt(){return ot||(ot=ui()),ot}let lt;function mi(i){let{userAgent:e}=i===void 0?{}:i;const t=Xt(),s=U(),r=s.navigator.platform,n=e||s.navigator.userAgent,d={ios:!1,android:!1},p=s.screen.width,a=s.screen.height,f=n.match(/(Android);?[\s\/]+([\d.]+)?/);let o=n.match(/(iPad).*OS\s([\d_]+)/);const l=n.match(/(iPod)(.*OS\s([\d_]+))?/),c=!o&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let w=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!o&&w&&t.touch&&g.indexOf(`${p}x${a}`)>=0&&(o=n.match(/(Version)\/([\d.]+)/),o||(o=[0,1,"13_0_0"]),w=!1),f&&!m&&(d.os="android",d.android=!0),(o||c||l)&&(d.os="ios",d.ios=!0),d}function Yt(i){return i===void 0&&(i={}),lt||(lt=mi(i)),lt}let pt;function wi(){const i=U(),e=Yt();let t=!1;function s(){const p=i.navigator.userAgent.toLowerCase();return p.indexOf("safari")>=0&&p.indexOf("chrome")<0&&p.indexOf("android")<0}if(s()){const p=String(i.navigator.userAgent);if(p.includes("Version/")){const[a,f]=p.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));t=a<16||a===16&&f<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),n=s(),d=n||r&&e.ios;return{isSafari:t||n,needPerspectiveFix:t,need3dFix:d,isWebView:r}}function gi(){return pt||(pt=wi()),pt}function hi(i){let{swiper:e,on:t,emit:s}=i;const r=U();let n=null,d=null;const p=()=>{!e||e.destroyed||!e.initialized||(s("beforeResize"),s("resize"))},a=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(l=>{d=r.requestAnimationFrame(()=>{const{width:c,height:m}=e;let w=c,g=m;l.forEach(v=>{let{contentBoxSize:u,contentRect:b,target:h}=v;h&&h!==e.el||(w=b?b.width:(u[0]||u).inlineSize,g=b?b.height:(u[0]||u).blockSize)}),(w!==c||g!==m)&&p()})}),n.observe(e.el))},f=()=>{d&&r.cancelAnimationFrame(d),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},o=()=>{!e||e.destroyed||!e.initialized||s("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){a();return}r.addEventListener("resize",p),r.addEventListener("orientationchange",o)}),t("destroy",()=>{f(),r.removeEventListener("resize",p),r.removeEventListener("orientationchange",o)})}function bi(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n=[],d=U(),p=function(o,l){l===void 0&&(l={});const c=d.MutationObserver||d.WebkitMutationObserver,m=new c(w=>{if(e.__preventObserver__)return;if(w.length===1){r("observerUpdate",w[0]);return}const g=function(){r("observerUpdate",w[0])};d.requestAnimationFrame?d.requestAnimationFrame(g):d.setTimeout(g,0)});m.observe(o,{attributes:typeof l.attributes>"u"?!0:l.attributes,childList:e.isElement||(typeof l.childList>"u"?!0:l).childList,characterData:typeof l.characterData>"u"?!0:l.characterData}),n.push(m)},a=()=>{if(e.params.observer){if(e.params.observeParents){const o=we(e.hostEl);for(let l=0;l<o.length;l+=1)p(o[l])}p(e.hostEl,{childList:e.params.observeSlideChildren}),p(e.wrapperEl,{attributes:!1})}},f=()=>{n.forEach(o=>{o.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",a),s("destroy",f)}var vi={on(i,e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const r=t?"unshift":"push";return i.split(" ").forEach(n=>{s.eventsListeners[n]||(s.eventsListeners[n]=[]),s.eventsListeners[n][r](e)}),s},once(i,e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;function r(){s.off(i,r),r.__emitterProxy&&delete r.__emitterProxy;for(var n=arguments.length,d=new Array(n),p=0;p<n;p++)d[p]=arguments[p];e.apply(s,d)}return r.__emitterProxy=e,s.on(i,r,t)},onAny(i,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof i!="function")return t;const s=e?"unshift":"push";return t.eventsAnyListeners.indexOf(i)<0&&t.eventsAnyListeners[s](i),t},offAny(i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(i);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(i,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||i.split(" ").forEach(s=>{typeof e>"u"?t.eventsListeners[s]=[]:t.eventsListeners[s]&&t.eventsListeners[s].forEach((r,n)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[s].splice(n,1)})}),t},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let e,t,s;for(var r=arguments.length,n=new Array(r),d=0;d<r;d++)n[d]=arguments[d];return typeof n[0]=="string"||Array.isArray(n[0])?(e=n[0],t=n.slice(1,n.length),s=i):(e=n[0].events,t=n[0].data,s=n[0].context||i),t.unshift(s),(Array.isArray(e)?e:e.split(" ")).forEach(a=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(f=>{f.apply(s,[a,...t])}),i.eventsListeners&&i.eventsListeners[a]&&i.eventsListeners[a].forEach(f=>{f.apply(s,t)})}),i}};function yi(){const i=this;let e,t;const s=i.el;typeof i.params.width<"u"&&i.params.width!==null?e=i.params.width:e=s.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?t=i.params.height:t=s.clientHeight,!(e===0&&i.isHorizontal()||t===0&&i.isVertical())&&(e=e-parseInt(ue(s,"padding-left")||0,10)-parseInt(ue(s,"padding-right")||0,10),t=t-parseInt(ue(s,"padding-top")||0,10)-parseInt(ue(s,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(i,{width:e,height:t,size:i.isHorizontal()?e:t}))}function Si(){const i=this;function e(M,z){return parseFloat(M.getPropertyValue(i.getDirectionLabel(z))||0)}const t=i.params,{wrapperEl:s,slidesEl:r,size:n,rtlTranslate:d,wrongRTL:p}=i,a=i.virtual&&t.virtual.enabled,f=a?i.virtual.slides.length:i.slides.length,o=Z(r,`.${i.params.slideClass}, swiper-slide`),l=a?i.virtual.slides.length:o.length;let c=[];const m=[],w=[];let g=t.slidesOffsetBefore;typeof g=="function"&&(g=t.slidesOffsetBefore.call(i));let v=t.slidesOffsetAfter;typeof v=="function"&&(v=t.slidesOffsetAfter.call(i));const u=i.snapGrid.length,b=i.slidesGrid.length;let h=t.spaceBetween,y=-g,T=0,L=0;if(typeof n>"u")return;typeof h=="string"&&h.indexOf("%")>=0?h=parseFloat(h.replace("%",""))/100*n:typeof h=="string"&&(h=parseFloat(h)),i.virtualSize=-h,o.forEach(M=>{d?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(_e(s,"--swiper-centered-offset-before",""),_e(s,"--swiper-centered-offset-after",""));const A=t.grid&&t.grid.rows>1&&i.grid;A?i.grid.initSlides(o):i.grid&&i.grid.unsetSlides();let _;const S=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(M=>typeof t.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<l;M+=1){_=0;let z;if(o[M]&&(z=o[M]),A&&i.grid.updateSlide(M,z,o),!(o[M]&&ue(z,"display")==="none")){if(t.slidesPerView==="auto"){S&&(o[M].style[i.getDirectionLabel("width")]="");const E=getComputedStyle(z),x=z.style.transform,C=z.style.webkitTransform;if(x&&(z.style.transform="none"),C&&(z.style.webkitTransform="none"),t.roundLengths)_=i.isHorizontal()?wt(z,"width"):wt(z,"height");else{const k=e(E,"width"),G=e(E,"padding-left"),P=e(E,"padding-right"),I=e(E,"margin-left"),V=e(E,"margin-right"),F=E.getPropertyValue("box-sizing");if(F&&F==="border-box")_=k+I+V;else{const{clientWidth:j,offsetWidth:D}=z;_=k+G+P+I+V+(D-j)}}x&&(z.style.transform=x),C&&(z.style.webkitTransform=C),t.roundLengths&&(_=Math.floor(_))}else _=(n-(t.slidesPerView-1)*h)/t.slidesPerView,t.roundLengths&&(_=Math.floor(_)),o[M]&&(o[M].style[i.getDirectionLabel("width")]=`${_}px`);o[M]&&(o[M].swiperSlideSize=_),w.push(_),t.centeredSlides?(y=y+_/2+T/2+h,T===0&&M!==0&&(y=y-n/2-h),M===0&&(y=y-n/2-h),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),L%t.slidesPerGroup===0&&c.push(y),m.push(y)):(t.roundLengths&&(y=Math.floor(y)),(L-Math.min(i.params.slidesPerGroupSkip,L))%i.params.slidesPerGroup===0&&c.push(y),m.push(y),y=y+_+h),i.virtualSize+=_+h,T=_,L+=1}}if(i.virtualSize=Math.max(i.virtualSize,n)+v,d&&p&&(t.effect==="slide"||t.effect==="coverflow")&&(s.style.width=`${i.virtualSize+h}px`),t.setWrapperSize&&(s.style[i.getDirectionLabel("width")]=`${i.virtualSize+h}px`),A&&i.grid.updateWrapperSize(_,c),!t.centeredSlides){const M=[];for(let z=0;z<c.length;z+=1){let E=c[z];t.roundLengths&&(E=Math.floor(E)),c[z]<=i.virtualSize-n&&M.push(E)}c=M,Math.floor(i.virtualSize-n)-Math.floor(c[c.length-1])>1&&c.push(i.virtualSize-n)}if(a&&t.loop){const M=w[0]+h;if(t.slidesPerGroup>1){const z=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/t.slidesPerGroup),E=M*t.slidesPerGroup;for(let x=0;x<z;x+=1)c.push(c[c.length-1]+E)}for(let z=0;z<i.virtual.slidesBefore+i.virtual.slidesAfter;z+=1)t.slidesPerGroup===1&&c.push(c[c.length-1]+M),m.push(m[m.length-1]+M),i.virtualSize+=M}if(c.length===0&&(c=[0]),h!==0){const M=i.isHorizontal()&&d?"marginLeft":i.getDirectionLabel("marginRight");o.filter((z,E)=>!t.cssMode||t.loop?!0:E!==o.length-1).forEach(z=>{z.style[M]=`${h}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let M=0;w.forEach(E=>{M+=E+(h||0)}),M-=h;const z=M-n;c=c.map(E=>E<=0?-g:E>z?z+v:E)}if(t.centerInsufficientSlides){let M=0;w.forEach(E=>{M+=E+(h||0)}),M-=h;const z=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(M+z<n){const E=(n-M-z)/2;c.forEach((x,C)=>{c[C]=x-E}),m.forEach((x,C)=>{m[C]=x+E})}}if(Object.assign(i,{slides:o,snapGrid:c,slidesGrid:m,slidesSizesGrid:w}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){_e(s,"--swiper-centered-offset-before",`${-c[0]}px`),_e(s,"--swiper-centered-offset-after",`${i.size/2-w[w.length-1]/2}px`);const M=-i.snapGrid[0],z=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(E=>E+M),i.slidesGrid=i.slidesGrid.map(E=>E+z)}if(l!==f&&i.emit("slidesLengthChange"),c.length!==u&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),m.length!==b&&i.emit("slidesGridLengthChange"),t.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!a&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const M=`${t.containerModifierClass}backface-hidden`,z=i.el.classList.contains(M);l<=t.maxBackfaceHiddenSlides?z||i.el.classList.add(M):z&&i.el.classList.remove(M)}}function xi(i){const e=this,t=[],s=e.virtual&&e.params.virtual.enabled;let r=0,n;typeof i=="number"?e.setTransition(i):i===!0&&e.setTransition(e.params.speed);const d=p=>s?e.slides[e.getSlideIndexByData(p)]:e.slides[p];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(p=>{t.push(p)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){const p=e.activeIndex+n;if(p>e.slides.length&&!s)break;t.push(d(p))}else t.push(d(e.activeIndex));for(n=0;n<t.length;n+=1)if(typeof t[n]<"u"){const p=t[n].offsetHeight;r=p>r?p:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function Ei(){const i=this,e=i.slides,t=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let s=0;s<e.length;s+=1)e[s].swiperSlideOffset=(i.isHorizontal()?e[s].offsetLeft:e[s].offsetTop)-t-i.cssOverflowAdjustment()}const zt=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function Ti(i){i===void 0&&(i=this&&this.translate||0);const e=this,t=e.params,{slides:s,rtlTranslate:r,snapGrid:n}=e;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let d=-i;r&&(d=i),e.visibleSlidesIndexes=[],e.visibleSlides=[];let p=t.spaceBetween;typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*e.size:typeof p=="string"&&(p=parseFloat(p));for(let a=0;a<s.length;a+=1){const f=s[a];let o=f.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(o-=s[0].swiperSlideOffset);const l=(d+(t.centeredSlides?e.minTranslate():0)-o)/(f.swiperSlideSize+p),c=(d-n[0]+(t.centeredSlides?e.minTranslate():0)-o)/(f.swiperSlideSize+p),m=-(d-o),w=m+e.slidesSizesGrid[a],g=m>=0&&m<=e.size-e.slidesSizesGrid[a],v=m>=0&&m<e.size-1||w>1&&w<=e.size||m<=0&&w>=e.size;v&&(e.visibleSlides.push(f),e.visibleSlidesIndexes.push(a)),zt(f,v,t.slideVisibleClass),zt(f,g,t.slideFullyVisibleClass),f.progress=r?-l:l,f.originalProgress=r?-c:c}}function Mi(i){const e=this;if(typeof i>"u"){const o=e.rtlTranslate?-1:1;i=e&&e.translate&&e.translate*o||0}const t=e.params,s=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:n,isEnd:d,progressLoop:p}=e;const a=n,f=d;if(s===0)r=0,n=!0,d=!0;else{r=(i-e.minTranslate())/s;const o=Math.abs(i-e.minTranslate())<1,l=Math.abs(i-e.maxTranslate())<1;n=o||r<=0,d=l||r>=1,o&&(r=0),l&&(r=1)}if(t.loop){const o=e.getSlideIndexByData(0),l=e.getSlideIndexByData(e.slides.length-1),c=e.slidesGrid[o],m=e.slidesGrid[l],w=e.slidesGrid[e.slidesGrid.length-1],g=Math.abs(i);g>=c?p=(g-c)/w:p=(g+w-m)/w,p>1&&(p-=1)}Object.assign(e,{progress:r,progressLoop:p,isBeginning:n,isEnd:d}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(i),n&&!a&&e.emit("reachBeginning toEdge"),d&&!f&&e.emit("reachEnd toEdge"),(a&&!n||f&&!d)&&e.emit("fromEdge"),e.emit("progress",r)}const dt=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function Ci(){const i=this,{slides:e,params:t,slidesEl:s,activeIndex:r}=i,n=i.virtual&&t.virtual.enabled,d=i.grid&&t.grid&&t.grid.rows>1,p=l=>Z(s,`.${t.slideClass}${l}, swiper-slide${l}`)[0];let a,f,o;if(n)if(t.loop){let l=r-i.virtual.slidesBefore;l<0&&(l=i.virtual.slides.length+l),l>=i.virtual.slides.length&&(l-=i.virtual.slides.length),a=p(`[data-swiper-slide-index="${l}"]`)}else a=p(`[data-swiper-slide-index="${r}"]`);else d?(a=e.filter(l=>l.column===r)[0],o=e.filter(l=>l.column===r+1)[0],f=e.filter(l=>l.column===r-1)[0]):a=e[r];a&&(d||(o=fi(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!o&&(o=e[0]),f=ci(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f===0&&(f=e[e.length-1]))),e.forEach(l=>{dt(l,l===a,t.slideActiveClass),dt(l,l===o,t.slideNextClass),dt(l,l===f,t.slidePrevClass)}),i.emitSlidesClasses()}const Re=(i,e)=>{if(!i||i.destroyed||!i.params)return;const t=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,s=e.closest(t());if(s){let r=s.querySelector(`.${i.params.lazyPreloaderClass}`);!r&&i.isElement&&(s.shadowRoot?r=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(r=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},ct=(i,e)=>{if(!i.slides[e])return;const t=i.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},gt=i=>{if(!i||i.destroyed||!i.params)return;let e=i.params.lazyPreloadPrevNext;const t=i.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const s=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),r=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const d=r,p=[d-e];p.push(...Array.from({length:e}).map((a,f)=>d+s+f)),i.slides.forEach((a,f)=>{p.includes(a.column)&&ct(i,f)});return}const n=r+s-1;if(i.params.rewind||i.params.loop)for(let d=r-e;d<=n+e;d+=1){const p=(d%t+t)%t;(p<r||p>n)&&ct(i,p)}else for(let d=Math.max(r-e,0);d<=Math.min(n+e,t-1);d+=1)d!==r&&(d>n||d<r)&&ct(i,d)};function Pi(i){const{slidesGrid:e,params:t}=i,s=i.rtlTranslate?i.translate:-i.translate;let r;for(let n=0;n<e.length;n+=1)typeof e[n+1]<"u"?s>=e[n]&&s<e[n+1]-(e[n+1]-e[n])/2?r=n:s>=e[n]&&s<e[n+1]&&(r=n+1):s>=e[n]&&(r=n);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function Ii(i){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:s,params:r,activeIndex:n,realIndex:d,snapIndex:p}=e;let a=i,f;const o=m=>{let w=m-e.virtual.slidesBefore;return w<0&&(w=e.virtual.slides.length+w),w>=e.virtual.slides.length&&(w-=e.virtual.slides.length),w};if(typeof a>"u"&&(a=Pi(e)),s.indexOf(t)>=0)f=s.indexOf(t);else{const m=Math.min(r.slidesPerGroupSkip,a);f=m+Math.floor((a-m)/r.slidesPerGroup)}if(f>=s.length&&(f=s.length-1),a===n&&!e.params.loop){f!==p&&(e.snapIndex=f,e.emit("snapIndexChange"));return}if(a===n&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=o(a);return}const l=e.grid&&r.grid&&r.grid.rows>1;let c;if(e.virtual&&r.virtual.enabled&&r.loop)c=o(a);else if(l){const m=e.slides.filter(g=>g.column===a)[0];let w=parseInt(m.getAttribute("data-swiper-slide-index"),10);Number.isNaN(w)&&(w=Math.max(e.slides.indexOf(m),0)),c=Math.floor(w/r.grid.rows)}else if(e.slides[a]){const m=e.slides[a].getAttribute("data-swiper-slide-index");m?c=parseInt(m,10):c=a}else c=a;Object.assign(e,{previousSnapIndex:p,snapIndex:f,previousRealIndex:d,realIndex:c,previousIndex:n,activeIndex:a}),e.initialized&&gt(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(d!==c&&e.emit("realIndexChange"),e.emit("slideChange"))}function _i(i,e){const t=this,s=t.params;let r=i.closest(`.${s.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(i)&&[...e.slice(e.indexOf(i)+1,e.length)].forEach(p=>{!r&&p.matches&&p.matches(`.${s.slideClass}, swiper-slide`)&&(r=p)});let n=!1,d;if(r){for(let p=0;p<t.slides.length;p+=1)if(t.slides[p]===r){n=!0,d=p;break}}if(r&&n)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=d;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}s.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var zi={updateSize:yi,updateSlides:Si,updateAutoHeight:xi,updateSlidesOffset:Ei,updateSlidesProgress:Ti,updateProgress:Mi,updateSlidesClasses:Ci,updateActiveIndex:Ii,updateClickedSlide:_i};function Li(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:s,translate:r,wrapperEl:n}=e;if(t.virtualTranslate)return s?-r:r;if(t.cssMode)return r;let d=mt(n,i);return d+=e.cssOverflowAdjustment(),s&&(d=-d),d||0}function ki(i,e){const t=this,{rtlTranslate:s,params:r,wrapperEl:n,progress:d}=t;let p=0,a=0;const f=0;t.isHorizontal()?p=s?-i:i:a=i,r.roundLengths&&(p=Math.floor(p),a=Math.floor(a)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?p:a,r.cssMode?n[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-p:-a:r.virtualTranslate||(t.isHorizontal()?p-=t.cssOverflowAdjustment():a-=t.cssOverflowAdjustment(),n.style.transform=`translate3d(${p}px, ${a}px, ${f}px)`);let o;const l=t.maxTranslate()-t.minTranslate();l===0?o=0:o=(i-t.minTranslate())/l,o!==d&&t.updateProgress(i),t.emit("setTranslate",t.translate,e)}function $i(){return-this.snapGrid[0]}function Ai(){return-this.snapGrid[this.snapGrid.length-1]}function ji(i,e,t,s,r){i===void 0&&(i=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),s===void 0&&(s=!0);const n=this,{params:d,wrapperEl:p}=n;if(n.animating&&d.preventInteractionOnTransition)return!1;const a=n.minTranslate(),f=n.maxTranslate();let o;if(s&&i>a?o=a:s&&i<f?o=f:o=i,n.updateProgress(o),d.cssMode){const l=n.isHorizontal();if(e===0)p[l?"scrollLeft":"scrollTop"]=-o;else{if(!n.support.smoothScroll)return Ft({swiper:n,targetPosition:-o,side:l?"left":"top"}),!0;p.scrollTo({[l?"left":"top"]:-o,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(o),t&&(n.emit("beforeTransitionStart",e,r),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(o),t&&(n.emit("beforeTransitionStart",e,r),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(c){!n||n.destroyed||c.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,t&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Di={getTranslate:Li,setTranslate:ki,minTranslate:$i,maxTranslate:Ai,translateTo:ji};function Oi(i,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${i}ms`,t.wrapperEl.style.transitionDelay=i===0?"0ms":""),t.emit("setTransition",i,e)}function Wt(i){let{swiper:e,runCallbacks:t,direction:s,step:r}=i;const{activeIndex:n,previousIndex:d}=e;let p=s;if(p||(n>d?p="next":n<d?p="prev":p="reset"),e.emit(`transition${r}`),t&&n!==d){if(p==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),p==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function Vi(i,e){i===void 0&&(i=!0);const t=this,{params:s}=t;s.cssMode||(s.autoHeight&&t.updateAutoHeight(),Wt({swiper:t,runCallbacks:i,direction:e,step:"Start"}))}function Bi(i,e){i===void 0&&(i=!0);const t=this,{params:s}=t;t.animating=!1,!s.cssMode&&(t.setTransition(0),Wt({swiper:t,runCallbacks:i,direction:e,step:"End"}))}var Gi={setTransition:Oi,transitionStart:Vi,transitionEnd:Bi};function Hi(i,e,t,s,r){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const n=this;let d=i;d<0&&(d=0);const{params:p,snapGrid:a,slidesGrid:f,previousIndex:o,activeIndex:l,rtlTranslate:c,wrapperEl:m,enabled:w}=n;if(!w&&!s&&!r||n.destroyed||n.animating&&p.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=n.params.speed);const g=Math.min(n.params.slidesPerGroupSkip,d);let v=g+Math.floor((d-g)/n.params.slidesPerGroup);v>=a.length&&(v=a.length-1);const u=-a[v];if(p.normalizeSlideIndex)for(let h=0;h<f.length;h+=1){const y=-Math.floor(u*100),T=Math.floor(f[h]*100),L=Math.floor(f[h+1]*100);typeof f[h+1]<"u"?y>=T&&y<L-(L-T)/2?d=h:y>=T&&y<L&&(d=h+1):y>=T&&(d=h)}if(n.initialized&&d!==l&&(!n.allowSlideNext&&(c?u>n.translate&&u>n.minTranslate():u<n.translate&&u<n.minTranslate())||!n.allowSlidePrev&&u>n.translate&&u>n.maxTranslate()&&(l||0)!==d))return!1;d!==(o||0)&&t&&n.emit("beforeSlideChangeStart"),n.updateProgress(u);let b;if(d>l?b="next":d<l?b="prev":b="reset",c&&-u===n.translate||!c&&u===n.translate)return n.updateActiveIndex(d),p.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),p.effect!=="slide"&&n.setTranslate(u),b!=="reset"&&(n.transitionStart(t,b),n.transitionEnd(t,b)),!1;if(p.cssMode){const h=n.isHorizontal(),y=c?u:-u;if(e===0){const T=n.virtual&&n.params.virtual.enabled;T&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),T&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[h?"scrollLeft":"scrollTop"]=y})):m[h?"scrollLeft":"scrollTop"]=y,T&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1})}else{if(!n.support.smoothScroll)return Ft({swiper:n,targetPosition:y,side:h?"left":"top"}),!0;m.scrollTo({[h?"left":"top"]:y,behavior:"smooth"})}return!0}return n.setTransition(e),n.setTranslate(u),n.updateActiveIndex(d),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,s),n.transitionStart(t,b),e===0?n.transitionEnd(t,b):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(y){!n||n.destroyed||y.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(t,b))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function Ri(i,e,t,s){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const n=r.grid&&r.params.grid&&r.params.grid.rows>1;let d=i;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)d=d+r.virtual.slidesBefore;else{let p;if(n){const c=d*r.params.grid.rows;p=r.slides.filter(m=>m.getAttribute("data-swiper-slide-index")*1===c)[0].column}else p=r.getSlideIndexByData(d);const a=n?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:f}=r.params;let o=r.params.slidesPerView;o==="auto"?o=r.slidesPerViewDynamic():(o=Math.ceil(parseFloat(r.params.slidesPerView,10)),f&&o%2===0&&(o=o+1));let l=a-p<o;if(f&&(l=l||p<Math.ceil(o/2)),s&&f&&r.params.slidesPerView!=="auto"&&!n&&(l=!1),l){const c=f?p<r.activeIndex?"prev":"next":p-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:c,slideTo:!0,activeSlideIndex:c==="next"?p+1:p-a+1,slideRealIndex:c==="next"?r.realIndex:void 0})}if(n){const c=d*r.params.grid.rows;d=r.slides.filter(m=>m.getAttribute("data-swiper-slide-index")*1===c)[0].column}else d=r.getSlideIndexByData(d)}return requestAnimationFrame(()=>{r.slideTo(d,e,t,s)}),r}function Ni(i,e,t){e===void 0&&(e=!0);const s=this,{enabled:r,params:n,animating:d}=s;if(!r||s.destroyed)return s;typeof i>"u"&&(i=s.params.speed);let p=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(p=Math.max(s.slidesPerViewDynamic("current",!0),1));const a=s.activeIndex<n.slidesPerGroupSkip?1:p,f=s.virtual&&n.virtual.enabled;if(n.loop){if(d&&!f&&n.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+a,i,e,t)}),!0}return n.rewind&&s.isEnd?s.slideTo(0,i,e,t):s.slideTo(s.activeIndex+a,i,e,t)}function Fi(i,e,t){e===void 0&&(e=!0);const s=this,{params:r,snapGrid:n,slidesGrid:d,rtlTranslate:p,enabled:a,animating:f}=s;if(!a||s.destroyed)return s;typeof i>"u"&&(i=s.params.speed);const o=s.virtual&&r.virtual.enabled;if(r.loop){if(f&&!o&&r.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const l=p?s.translate:-s.translate;function c(u){return u<0?-Math.floor(Math.abs(u)):Math.floor(u)}const m=c(l),w=n.map(u=>c(u));let g=n[w.indexOf(m)-1];if(typeof g>"u"&&r.cssMode){let u;n.forEach((b,h)=>{m>=b&&(u=h)}),typeof u<"u"&&(g=n[u>0?u-1:u])}let v=0;if(typeof g<"u"&&(v=d.indexOf(g),v<0&&(v=s.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(v=v-s.slidesPerViewDynamic("previous",!0)+1,v=Math.max(v,0))),r.rewind&&s.isBeginning){const u=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(u,i,e,t)}else if(r.loop&&s.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{s.slideTo(v,i,e,t)}),!0;return s.slideTo(v,i,e,t)}function Xi(i,e,t){e===void 0&&(e=!0);const s=this;if(!s.destroyed)return typeof i>"u"&&(i=s.params.speed),s.slideTo(s.activeIndex,i,e,t)}function Yi(i,e,t,s){e===void 0&&(e=!0),s===void 0&&(s=.5);const r=this;if(r.destroyed)return;typeof i>"u"&&(i=r.params.speed);let n=r.activeIndex;const d=Math.min(r.params.slidesPerGroupSkip,n),p=d+Math.floor((n-d)/r.params.slidesPerGroup),a=r.rtlTranslate?r.translate:-r.translate;if(a>=r.snapGrid[p]){const f=r.snapGrid[p],o=r.snapGrid[p+1];a-f>(o-f)*s&&(n+=r.params.slidesPerGroup)}else{const f=r.snapGrid[p-1],o=r.snapGrid[p];a-f<=(o-f)*s&&(n-=r.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,r.slidesGrid.length-1),r.slideTo(n,i,e,t)}function Wi(){const i=this;if(i.destroyed)return;const{params:e,slidesEl:t}=i,s=e.slidesPerView==="auto"?i.slidesPerViewDynamic():e.slidesPerView;let r=i.clickedIndex,n;const d=i.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(i.animating)return;n=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<i.loopedSlides-s/2||r>i.slides.length-i.loopedSlides+s/2?(i.loopFix(),r=i.getSlideIndex(Z(t,`${d}[data-swiper-slide-index="${n}"]`)[0]),ge(()=>{i.slideTo(r)})):i.slideTo(r):r>i.slides.length-s?(i.loopFix(),r=i.getSlideIndex(Z(t,`${d}[data-swiper-slide-index="${n}"]`)[0]),ge(()=>{i.slideTo(r)})):i.slideTo(r)}else i.slideTo(r)}var qi={slideTo:Hi,slideToLoop:Ri,slideNext:Ni,slidePrev:Fi,slideReset:Xi,slideToClosest:Yi,slideToClickedSlide:Wi};function Ui(i){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{Z(s,`.${t.slideClass}, swiper-slide`).forEach((l,c)=>{l.setAttribute("data-swiper-slide-index",c)})},n=e.grid&&t.grid&&t.grid.rows>1,d=t.slidesPerGroup*(n?t.grid.rows:1),p=e.slides.length%d!==0,a=n&&e.slides.length%t.grid.rows!==0,f=o=>{for(let l=0;l<o;l+=1){const c=e.isElement?oe("swiper-slide",[t.slideBlankClass]):oe("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(c)}};if(p){if(t.loopAddBlankSlides){const o=d-e.slides.length%d;f(o),e.recalcSlides(),e.updateSlides()}else Fe("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(a){if(t.loopAddBlankSlides){const o=t.grid.rows-e.slides.length%t.grid.rows;f(o),e.recalcSlides(),e.updateSlides()}else Fe("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:i,direction:t.centeredSlides?void 0:"next"})}function Ki(i){let{slideRealIndex:e,slideTo:t=!0,direction:s,setTranslate:r,activeSlideIndex:n,byController:d,byMousewheel:p}=i===void 0?{}:i;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:f,allowSlidePrev:o,allowSlideNext:l,slidesEl:c,params:m}=a,{centeredSlides:w}=m;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&m.virtual.enabled){t&&(!m.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):m.centeredSlides&&a.snapIndex<m.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=o,a.allowSlideNext=l,a.emit("loopFix");return}let g=m.slidesPerView;g==="auto"?g=a.slidesPerViewDynamic():(g=Math.ceil(parseFloat(m.slidesPerView,10)),w&&g%2===0&&(g=g+1));const v=m.slidesPerGroupAuto?g:m.slidesPerGroup;let u=v;u%v!==0&&(u+=v-u%v),u+=m.loopAdditionalSlides,a.loopedSlides=u;const b=a.grid&&m.grid&&m.grid.rows>1;f.length<g+u?Fe("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):b&&m.grid.fill==="row"&&Fe("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const h=[],y=[];let T=a.activeIndex;typeof n>"u"?n=a.getSlideIndex(f.filter(x=>x.classList.contains(m.slideActiveClass))[0]):T=n;const L=s==="next"||!s,A=s==="prev"||!s;let _=0,S=0;const M=b?Math.ceil(f.length/m.grid.rows):f.length,E=(b?f[n].column:n)+(w&&typeof r>"u"?-g/2+.5:0);if(E<u){_=Math.max(u-E,v);for(let x=0;x<u-E;x+=1){const C=x-Math.floor(x/M)*M;if(b){const k=M-C-1;for(let G=f.length-1;G>=0;G-=1)f[G].column===k&&h.push(G)}else h.push(M-C-1)}}else if(E+g>M-u){S=Math.max(E-(M-u*2),v);for(let x=0;x<S;x+=1){const C=x-Math.floor(x/M)*M;b?f.forEach((k,G)=>{k.column===C&&y.push(G)}):y.push(C)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),A&&h.forEach(x=>{f[x].swiperLoopMoveDOM=!0,c.prepend(f[x]),f[x].swiperLoopMoveDOM=!1}),L&&y.forEach(x=>{f[x].swiperLoopMoveDOM=!0,c.append(f[x]),f[x].swiperLoopMoveDOM=!1}),a.recalcSlides(),m.slidesPerView==="auto"?a.updateSlides():b&&(h.length>0&&A||y.length>0&&L)&&a.slides.forEach((x,C)=>{a.grid.updateSlide(C,x,a.slides)}),m.watchSlidesProgress&&a.updateSlidesOffset(),t){if(h.length>0&&A){if(typeof e>"u"){const x=a.slidesGrid[T],k=a.slidesGrid[T+_]-x;p?a.setTranslate(a.translate-k):(a.slideTo(T+Math.ceil(_),0,!1,!0),r&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-k,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-k))}else if(r){const x=b?h.length/m.grid.rows:h.length;a.slideTo(a.activeIndex+x,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(y.length>0&&L)if(typeof e>"u"){const x=a.slidesGrid[T],k=a.slidesGrid[T-S]-x;p?a.setTranslate(a.translate-k):(a.slideTo(T-S,0,!1,!0),r&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-k,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-k))}else{const x=b?y.length/m.grid.rows:y.length;a.slideTo(a.activeIndex-x,0,!1,!0)}}if(a.allowSlidePrev=o,a.allowSlideNext=l,a.controller&&a.controller.control&&!d){const x={slideRealIndex:e,direction:s,setTranslate:r,activeSlideIndex:n,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(C=>{!C.destroyed&&C.params.loop&&C.loopFix({...x,slideTo:C.params.slidesPerView===m.slidesPerView?t:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...x,slideTo:a.controller.control.params.slidesPerView===m.slidesPerView?t:!1})}a.emit("loopFix")}function Zi(){const i=this,{params:e,slidesEl:t}=i;if(!e.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const s=[];i.slides.forEach(r=>{const n=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;s[n]=r}),i.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),s.forEach(r=>{t.append(r)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var Qi={loopCreate:Ui,loopFix:Ki,loopDestroy:Zi};function Ji(i){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=i?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function es(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var ts={setGrabCursor:Ji,unsetGrabCursor:es};function is(i,e){e===void 0&&(e=this);function t(s){if(!s||s===Q()||s===U())return null;s.assignedSlot&&(s=s.assignedSlot);const r=s.closest(i);return!r&&!s.getRootNode?null:r||t(s.getRootNode().host)}return t(e)}function Lt(i,e,t){const s=U(),{params:r}=i,n=r.edgeSwipeDetection,d=r.edgeSwipeThreshold;return n&&(t<=d||t>=s.innerWidth-d)?n==="prevent"?(e.preventDefault(),!0):!1:!0}function ss(i){const e=this,t=Q();let s=i;s.originalEvent&&(s=s.originalEvent);const r=e.touchEventsData;if(s.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==s.pointerId)return;r.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(r.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){Lt(e,s,s.targetTouches[0].pageX);return}const{params:n,touches:d,enabled:p}=e;if(!p||!n.simulateTouch&&s.pointerType==="mouse"||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let a=s.target;if(n.touchEventsTarget==="wrapper"&&!di(a,e.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||r.isTouched&&r.isMoved)return;const f=!!n.noSwipingClass&&n.noSwipingClass!=="",o=s.composedPath?s.composedPath():s.path;f&&s.target&&s.target.shadowRoot&&o&&(a=o[0]);const l=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,c=!!(s.target&&s.target.shadowRoot);if(n.noSwiping&&(c?is(l,a):a.closest(l))){e.allowClick=!0;return}if(n.swipeHandler&&!a.closest(n.swipeHandler))return;d.currentX=s.pageX,d.currentY=s.pageY;const m=d.currentX,w=d.currentY;if(!Lt(e,s,m))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=m,d.startY=w,r.touchStartTime=le(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(r.allowThresholdMove=!1);let g=!0;a.matches(r.focusableElements)&&(g=!1,a.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==a&&t.activeElement.blur();const v=g&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||v)&&!a.isContentEditable&&s.preventDefault(),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",s)}function rs(i){const e=Q(),t=this,s=t.touchEventsData,{params:r,touches:n,rtlTranslate:d,enabled:p}=t;if(!p||!r.simulateTouch&&i.pointerType==="mouse")return;let a=i;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(s.touchId!==null||a.pointerId!==s.pointerId))return;let f;if(a.type==="touchmove"){if(f=[...a.changedTouches].filter(L=>L.identifier===s.touchId)[0],!f||f.identifier!==s.touchId)return}else f=a;if(!s.isTouched){s.startMoving&&s.isScrolling&&t.emit("touchMoveOpposite",a);return}const o=f.pageX,l=f.pageY;if(a.preventedByNestedSwiper){n.startX=o,n.startY=l;return}if(!t.allowTouchMove){a.target.matches(s.focusableElements)||(t.allowClick=!1),s.isTouched&&(Object.assign(n,{startX:o,startY:l,currentX:o,currentY:l}),s.touchStartTime=le());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(l<n.startY&&t.translate<=t.maxTranslate()||l>n.startY&&t.translate>=t.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(o<n.startX&&t.translate<=t.maxTranslate()||o>n.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&a.target===e.activeElement&&a.target.matches(s.focusableElements)){s.isMoved=!0,t.allowClick=!1;return}s.allowTouchCallbacks&&t.emit("touchMove",a),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=o,n.currentY=l;const c=n.currentX-n.startX,m=n.currentY-n.startY;if(t.params.threshold&&Math.sqrt(c**2+m**2)<t.params.threshold)return;if(typeof s.isScrolling>"u"){let L;t.isHorizontal()&&n.currentY===n.startY||t.isVertical()&&n.currentX===n.startX?s.isScrolling=!1:c*c+m*m>=25&&(L=Math.atan2(Math.abs(m),Math.abs(c))*180/Math.PI,s.isScrolling=t.isHorizontal()?L>r.touchAngle:90-L>r.touchAngle)}if(s.isScrolling&&t.emit("touchMoveOpposite",a),typeof s.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(s.startMoving=!0),s.isScrolling||a.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;t.allowClick=!1,!r.cssMode&&a.cancelable&&a.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&a.stopPropagation();let w=t.isHorizontal()?c:m,g=t.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(w=Math.abs(w)*(d?1:-1),g=Math.abs(g)*(d?1:-1)),n.diff=w,w*=r.touchRatio,d&&(w=-w,g=-g);const v=t.touchesDirection;t.swipeDirection=w>0?"prev":"next",t.touchesDirection=g>0?"prev":"next";const u=t.params.loop&&!r.cssMode,b=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!s.isMoved){if(u&&b&&t.loopFix({direction:t.swipeDirection}),s.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const L=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(L)}s.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",a)}let h;if(new Date().getTime(),s.isMoved&&s.allowThresholdMove&&v!==t.touchesDirection&&u&&b&&Math.abs(w)>=1){Object.assign(n,{startX:o,startY:l,currentX:o,currentY:l,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}t.emit("sliderMove",a),s.isMoved=!0,s.currentTranslate=w+s.startTranslate;let y=!0,T=r.resistanceRatio;if(r.touchReleaseOnEdges&&(T=0),w>0?(u&&b&&!h&&s.allowThresholdMove&&s.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>t.minTranslate()&&(y=!1,r.resistance&&(s.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+s.startTranslate+w)**T))):w<0&&(u&&b&&!h&&s.allowThresholdMove&&s.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),s.currentTranslate<t.maxTranslate()&&(y=!1,r.resistance&&(s.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-s.startTranslate-w)**T))),y&&(a.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(s.currentTranslate=s.startTranslate),r.threshold>0)if(Math.abs(w)>r.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,s.currentTranslate=s.startTranslate,n.diff=t.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{s.currentTranslate=s.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(s.currentTranslate),t.setTranslate(s.currentTranslate))}function ns(i){const e=this,t=e.touchEventsData;let s=i;s.originalEvent&&(s=s.originalEvent);let r;if(s.type==="touchend"||s.type==="touchcancel"){if(r=[...s.changedTouches].filter(T=>T.identifier===t.touchId)[0],!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||s.pointerId!==t.pointerId)return;r=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:d,touches:p,rtlTranslate:a,slidesGrid:f,enabled:o}=e;if(!o||!d.simulateTouch&&s.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",s),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&d.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}d.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const l=le(),c=l-t.touchStartTime;if(e.allowClick){const T=s.path||s.composedPath&&s.composedPath();e.updateClickedSlide(T&&T[0]||s.target,T),e.emit("tap click",s),c<300&&l-t.lastClickTime<300&&e.emit("doubleTap doubleClick",s)}if(t.lastClickTime=le(),ge(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||p.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let m;if(d.followFinger?m=a?e.translate:-e.translate:m=-t.currentTranslate,d.cssMode)return;if(d.freeMode&&d.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:m});return}const w=m>=-e.maxTranslate()&&!e.params.loop;let g=0,v=e.slidesSizesGrid[0];for(let T=0;T<f.length;T+=T<d.slidesPerGroupSkip?1:d.slidesPerGroup){const L=T<d.slidesPerGroupSkip-1?1:d.slidesPerGroup;typeof f[T+L]<"u"?(w||m>=f[T]&&m<f[T+L])&&(g=T,v=f[T+L]-f[T]):(w||m>=f[T])&&(g=T,v=f[f.length-1]-f[f.length-2])}let u=null,b=null;d.rewind&&(e.isBeginning?b=d.virtual&&d.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(u=0));const h=(m-f[g])/v,y=g<d.slidesPerGroupSkip-1?1:d.slidesPerGroup;if(c>d.longSwipesMs){if(!d.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(h>=d.longSwipesRatio?e.slideTo(d.rewind&&e.isEnd?u:g+y):e.slideTo(g)),e.swipeDirection==="prev"&&(h>1-d.longSwipesRatio?e.slideTo(g+y):b!==null&&h<0&&Math.abs(h)>d.longSwipesRatio?e.slideTo(b):e.slideTo(g))}else{if(!d.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(s.target===e.navigation.nextEl||s.target===e.navigation.prevEl)?s.target===e.navigation.nextEl?e.slideTo(g+y):e.slideTo(g):(e.swipeDirection==="next"&&e.slideTo(u!==null?u:g+y),e.swipeDirection==="prev"&&e.slideTo(b!==null?b:g))}}function kt(){const i=this,{params:e,el:t}=i;if(t&&t.offsetWidth===0)return;e.breakpoints&&i.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:r,snapGrid:n}=i,d=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const p=d&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!p?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!d?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=r,i.allowSlideNext=s,i.params.watchOverflow&&n!==i.snapGrid&&i.checkOverflow()}function as(i){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&i.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function os(){const i=this,{wrapperEl:e,rtlTranslate:t,enabled:s}=i;if(!s)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-e.scrollLeft:i.translate=-e.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let r;const n=i.maxTranslate()-i.minTranslate();n===0?r=0:r=(i.translate-i.minTranslate())/n,r!==i.progress&&i.updateProgress(t?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function ls(i){const e=this;Re(e,i.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function ps(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const qt=(i,e)=>{const t=Q(),{params:s,el:r,wrapperEl:n,device:d}=i,p=!!s.nested,a=e==="on"?"addEventListener":"removeEventListener",f=e;!r||typeof r=="string"||(t[a]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:p}),r[a]("touchstart",i.onTouchStart,{passive:!1}),r[a]("pointerdown",i.onTouchStart,{passive:!1}),t[a]("touchmove",i.onTouchMove,{passive:!1,capture:p}),t[a]("pointermove",i.onTouchMove,{passive:!1,capture:p}),t[a]("touchend",i.onTouchEnd,{passive:!0}),t[a]("pointerup",i.onTouchEnd,{passive:!0}),t[a]("pointercancel",i.onTouchEnd,{passive:!0}),t[a]("touchcancel",i.onTouchEnd,{passive:!0}),t[a]("pointerout",i.onTouchEnd,{passive:!0}),t[a]("pointerleave",i.onTouchEnd,{passive:!0}),t[a]("contextmenu",i.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&r[a]("click",i.onClick,!0),s.cssMode&&n[a]("scroll",i.onScroll),s.updateOnWindowResize?i[f](d.ios||d.android?"resize orientationchange observerUpdate":"resize observerUpdate",kt,!0):i[f]("observerUpdate",kt,!0),r[a]("load",i.onLoad,{capture:!0}))};function ds(){const i=this,{params:e}=i;i.onTouchStart=ss.bind(i),i.onTouchMove=rs.bind(i),i.onTouchEnd=ns.bind(i),i.onDocumentTouchStart=ps.bind(i),e.cssMode&&(i.onScroll=os.bind(i)),i.onClick=as.bind(i),i.onLoad=ls.bind(i),qt(i,"on")}function cs(){qt(this,"off")}var fs={attachEvents:ds,detachEvents:cs};const $t=(i,e)=>i.grid&&e.grid&&e.grid.rows>1;function us(){const i=this,{realIndex:e,initialized:t,params:s,el:r}=i,n=s.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const d=i.getBreakpoint(n,i.params.breakpointsBase,i.el);if(!d||i.currentBreakpoint===d)return;const a=(d in n?n[d]:void 0)||i.originalParams,f=$t(i,s),o=$t(i,a),l=i.params.grabCursor,c=a.grabCursor,m=s.enabled;f&&!o?(r.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),i.emitContainerClasses()):!f&&o&&(r.classList.add(`${s.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&s.grid.fill==="column")&&r.classList.add(`${s.containerModifierClass}grid-column`),i.emitContainerClasses()),l&&!c?i.unsetGrabCursor():!l&&c&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(h=>{if(typeof a[h]>"u")return;const y=s[h]&&s[h].enabled,T=a[h]&&a[h].enabled;y&&!T&&i[h].disable(),!y&&T&&i[h].enable()});const w=a.direction&&a.direction!==s.direction,g=s.loop&&(a.slidesPerView!==s.slidesPerView||w),v=s.loop;w&&t&&i.changeDirection(),ae(i.params,a);const u=i.params.enabled,b=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),m&&!u?i.disable():!m&&u&&i.enable(),i.currentBreakpoint=d,i.emit("_beforeBreakpoint",a),t&&(g?(i.loopDestroy(),i.loopCreate(e),i.updateSlides()):!v&&b?(i.loopCreate(e),i.updateSlides()):v&&!b&&i.loopDestroy()),i.emit("breakpoint",a)}function ms(i,e,t){if(e===void 0&&(e="window"),!i||e==="container"&&!t)return;let s=!1;const r=U(),n=e==="window"?r.innerHeight:t.clientHeight,d=Object.keys(i).map(p=>{if(typeof p=="string"&&p.indexOf("@")===0){const a=parseFloat(p.substr(1));return{value:n*a,point:p}}return{value:p,point:p}});d.sort((p,a)=>parseInt(p.value,10)-parseInt(a.value,10));for(let p=0;p<d.length;p+=1){const{point:a,value:f}=d[p];e==="window"?r.matchMedia(`(min-width: ${f}px)`).matches&&(s=a):f<=t.clientWidth&&(s=a)}return s||"max"}var ws={setBreakpoint:us,getBreakpoint:ms};function gs(i,e){const t=[];return i.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(r=>{s[r]&&t.push(e+r)}):typeof s=="string"&&t.push(e+s)}),t}function hs(){const i=this,{classNames:e,params:t,rtl:s,el:r,device:n}=i,d=gs(["initialized",t.direction,{"free-mode":i.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:s},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...d),r.classList.add(...e),i.emitContainerClasses()}function bs(){const i=this,{el:e,classNames:t}=i;!e||typeof e=="string"||(e.classList.remove(...t),i.emitContainerClasses())}var vs={addClasses:hs,removeClasses:bs};function ys(){const i=this,{isLocked:e,params:t}=i,{slidesOffsetBefore:s}=t;if(s){const r=i.slides.length-1,n=i.slidesGrid[r]+i.slidesSizesGrid[r]+s*2;i.isLocked=i.size>n}else i.isLocked=i.snapGrid.length===1;t.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),t.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),e&&e!==i.isLocked&&(i.isEnd=!1),e!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var Ss={checkOverflow:ys},ht={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function xs(i,e){return function(s){s===void 0&&(s={});const r=Object.keys(s)[0],n=s[r];if(typeof n!="object"||n===null){ae(e,s);return}if(i[r]===!0&&(i[r]={enabled:!0}),r==="navigation"&&i[r]&&i[r].enabled&&!i[r].prevEl&&!i[r].nextEl&&(i[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&i[r]&&i[r].enabled&&!i[r].el&&(i[r].auto=!0),!(r in i&&"enabled"in n)){ae(e,s);return}typeof i[r]=="object"&&!("enabled"in i[r])&&(i[r].enabled=!0),i[r]||(i[r]={enabled:!1}),ae(e,s)}}const ft={eventsEmitter:vi,update:zi,translate:Di,transition:Gi,slide:qi,loop:Qi,grabCursor:ts,events:fs,breakpoints:ws,checkOverflow:Ss,classes:vs},ut={};class ne{constructor(){let e,t;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=ae({},t),e&&!t.el&&(t.el=e);const d=Q();if(t.el&&typeof t.el=="string"&&d.querySelectorAll(t.el).length>1){const o=[];return d.querySelectorAll(t.el).forEach(l=>{const c=ae({},t,{el:l});o.push(new ne(c))}),o}const p=this;p.__swiper__=!0,p.support=Xt(),p.device=Yt({userAgent:t.userAgent}),p.browser=gi(),p.eventsListeners={},p.eventsAnyListeners=[],p.modules=[...p.__modules__],t.modules&&Array.isArray(t.modules)&&p.modules.push(...t.modules);const a={};p.modules.forEach(o=>{o({params:t,swiper:p,extendParams:xs(t,a),on:p.on.bind(p),once:p.once.bind(p),off:p.off.bind(p),emit:p.emit.bind(p)})});const f=ae({},ht,a);return p.params=ae({},f,ut,t),p.originalParams=ae({},p.params),p.passedParams=ae({},t),p.params&&p.params.on&&Object.keys(p.params.on).forEach(o=>{p.on(o,p.params.on[o])}),p.params&&p.params.onAny&&p.onAny(p.params.onAny),Object.assign(p,{enabled:p.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return p.params.direction==="horizontal"},isVertical(){return p.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:p.params.allowSlideNext,allowSlidePrev:p.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:p.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:p.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),p.emit("_swiper"),p.params.init&&p.init(),p}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:s}=this,r=Z(t,`.${s.slideClass}, swiper-slide`),n=Ae(r[0]);return Ae(e)-n}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:s}=e;e.slides=Z(t,`.${s.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const r=s.minTranslate(),d=(s.maxTranslate()-r)*e+r;s.translateTo(d,typeof t>"u"?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(s=>{const r=e.getSlideClasses(s);t.push({slideEl:s,classNames:r}),e.emit("_slideClass",s,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const s=this,{params:r,slides:n,slidesGrid:d,slidesSizesGrid:p,size:a,activeIndex:f}=s;let o=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let l=n[f]?Math.ceil(n[f].swiperSlideSize):0,c;for(let m=f+1;m<n.length;m+=1)n[m]&&!c&&(l+=Math.ceil(n[m].swiperSlideSize),o+=1,l>a&&(c=!0));for(let m=f-1;m>=0;m-=1)n[m]&&!c&&(l+=n[m].swiperSlideSize,o+=1,l>a&&(c=!0))}else if(e==="current")for(let l=f+1;l<n.length;l+=1)(t?d[l]+p[l]-d[f]<a:d[l]-d[f]<a)&&(o+=1);else for(let l=f-1;l>=0;l-=1)d[f]-d[l]<a&&(o+=1);return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(d=>{d.complete&&Re(e,d)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const d=e.rtlTranslate?e.translate*-1:e.translate,p=Math.min(Math.max(d,e.maxTranslate()),e.minTranslate());e.setTranslate(p),e.updateActiveIndex(),e.updateSlidesClasses()}let n;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)r(),s.autoHeight&&e.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const d=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;n=e.slideTo(d.length-1,0,!1,!0)}else n=e.slideTo(e.activeIndex,0,!1,!0);n||r()}s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const s=this,r=s.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${r}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach(n=>{e==="vertical"?n.style.width="":n.style.height=""}),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let s=e||t.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let d=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(r()):Z(s,r())[0];return!d&&t.params.createElements&&(d=oe("div",t.params.wrapperClass),s.append(d),Z(s,`.${t.params.slideClass}`).forEach(p=>{d.append(p)})),Object.assign(t,{el:s,wrapperEl:d,slidesEl:t.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:d,hostEl:t.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||ue(s,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||ue(s,"direction")==="rtl"),wrongRTL:ue(d,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(n=>{n.complete?Re(t,n):n.addEventListener("load",d=>{Re(t,d.target)})}),gt(t),t.initialized=!0,gt(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const s=this,{params:r,el:n,wrapperEl:d,slides:p}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),r.loop&&s.loopDestroy(),t&&(s.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),d&&d.removeAttribute("style"),p&&p.length&&p.forEach(a=>{a.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(a=>{s.off(a)}),e!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),oi(s)),s.destroyed=!0),null}static extendDefaults(e){ae(ut,e)}static get extendedDefaults(){return ut}static get defaults(){return ht}static installModule(e){ne.prototype.__modules__||(ne.prototype.__modules__=[]);const t=ne.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>ne.installModule(t)),ne):(ne.installModule(e),ne)}}Object.keys(ft).forEach(i=>{Object.keys(ft[i]).forEach(e=>{ne.prototype[e]=ft[i][e]})});ne.use([hi,bi]);function Es(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let n;const d=Q();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const p=d.createElement("div");function a(w,g){const v=e.params.virtual;if(v.cache&&e.virtual.cache[g])return e.virtual.cache[g];let u;return v.renderSlide?(u=v.renderSlide.call(e,w,g),typeof u=="string"&&(p.innerHTML=u,u=p.children[0])):e.isElement?u=oe("swiper-slide"):u=oe("div",e.params.slideClass),u.setAttribute("data-swiper-slide-index",g),v.renderSlide||(u.innerHTML=w),v.cache&&(e.virtual.cache[g]=u),u}function f(w,g){const{slidesPerView:v,slidesPerGroup:u,centeredSlides:b,loop:h,initialSlide:y}=e.params;if(g&&!h&&y>0)return;const{addSlidesBefore:T,addSlidesAfter:L}=e.params.virtual,{from:A,to:_,slides:S,slidesGrid:M,offset:z}=e.virtual;e.params.cssMode||e.updateActiveIndex();const E=e.activeIndex||0;let x;e.rtlTranslate?x="right":x=e.isHorizontal()?"left":"top";let C,k;b?(C=Math.floor(v/2)+u+L,k=Math.floor(v/2)+u+T):(C=v+(u-1)+L,k=(h?v:u)+T);let G=E-k,P=E+C;h||(G=Math.max(G,0),P=Math.min(P,S.length-1));let I=(e.slidesGrid[G]||0)-(e.slidesGrid[0]||0);h&&E>=k?(G-=k,b||(I+=e.slidesGrid[0])):h&&E<k&&(G=-k,b&&(I+=e.slidesGrid[0])),Object.assign(e.virtual,{from:G,to:P,offset:I,slidesGrid:e.slidesGrid,slidesBefore:k,slidesAfter:C});function V(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),r("virtualUpdate")}if(A===G&&_===P&&!w){e.slidesGrid!==M&&I!==z&&e.slides.forEach(H=>{H.style[x]=`${I-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),r("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:I,from:G,to:P,slides:function(){const W=[];for(let se=G;se<=P;se+=1)W.push(S[se]);return W}()}),e.params.virtual.renderExternalUpdate?V():r("virtualUpdate");return}const F=[],j=[],D=H=>{let W=H;return H<0?W=S.length+H:W>=S.length&&(W=W-S.length),W};if(w)e.slides.filter(H=>H.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(H=>{H.remove()});else for(let H=A;H<=_;H+=1)if(H<G||H>P){const W=D(H);e.slides.filter(se=>se.matches(`.${e.params.slideClass}[data-swiper-slide-index="${W}"], swiper-slide[data-swiper-slide-index="${W}"]`)).forEach(se=>{se.remove()})}const B=h?-S.length:0,q=h?S.length*2:S.length;for(let H=B;H<q;H+=1)if(H>=G&&H<=P){const W=D(H);typeof _>"u"||w?j.push(W):(H>_&&j.push(W),H<A&&F.push(W))}if(j.forEach(H=>{e.slidesEl.append(a(S[H],H))}),h)for(let H=F.length-1;H>=0;H-=1){const W=F[H];e.slidesEl.prepend(a(S[W],W))}else F.sort((H,W)=>W-H),F.forEach(H=>{e.slidesEl.prepend(a(S[H],H))});Z(e.slidesEl,".swiper-slide, swiper-slide").forEach(H=>{H.style[x]=`${I-Math.abs(e.cssOverflowAdjustment())}px`}),V()}function o(w){if(typeof w=="object"&&"length"in w)for(let g=0;g<w.length;g+=1)w[g]&&e.virtual.slides.push(w[g]);else e.virtual.slides.push(w);f(!0)}function l(w){const g=e.activeIndex;let v=g+1,u=1;if(Array.isArray(w)){for(let b=0;b<w.length;b+=1)w[b]&&e.virtual.slides.unshift(w[b]);v=g+w.length,u=w.length}else e.virtual.slides.unshift(w);if(e.params.virtual.cache){const b=e.virtual.cache,h={};Object.keys(b).forEach(y=>{const T=b[y],L=T.getAttribute("data-swiper-slide-index");L&&T.setAttribute("data-swiper-slide-index",parseInt(L,10)+u),h[parseInt(y,10)+u]=T}),e.virtual.cache=h}f(!0),e.slideTo(v,0)}function c(w){if(typeof w>"u"||w===null)return;let g=e.activeIndex;if(Array.isArray(w))for(let v=w.length-1;v>=0;v-=1)e.params.virtual.cache&&(delete e.virtual.cache[w[v]],Object.keys(e.virtual.cache).forEach(u=>{u>w&&(e.virtual.cache[u-1]=e.virtual.cache[u],e.virtual.cache[u-1].setAttribute("data-swiper-slide-index",u-1),delete e.virtual.cache[u])})),e.virtual.slides.splice(w[v],1),w[v]<g&&(g-=1),g=Math.max(g,0);else e.params.virtual.cache&&(delete e.virtual.cache[w],Object.keys(e.virtual.cache).forEach(v=>{v>w&&(e.virtual.cache[v-1]=e.virtual.cache[v],e.virtual.cache[v-1].setAttribute("data-swiper-slide-index",v-1),delete e.virtual.cache[v])})),e.virtual.slides.splice(w,1),w<g&&(g-=1),g=Math.max(g,0);f(!0),e.slideTo(g,0)}function m(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),f(!0),e.slideTo(0,0)}s("beforeInit",()=>{if(!e.params.virtual.enabled)return;let w;if(typeof e.passedParams.virtual.slides>"u"){const g=[...e.slidesEl.children].filter(v=>v.matches(`.${e.params.slideClass}, swiper-slide`));g&&g.length&&(e.virtual.slides=[...g],w=!0,g.forEach((v,u)=>{v.setAttribute("data-swiper-slide-index",u),e.virtual.cache[u]=v,v.remove()}))}w||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,f(!1,!0)}),s("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(n),n=setTimeout(()=>{f()},100)):f())}),s("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&_e(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:o,prependSlide:l,removeSlide:c,removeAllSlides:m,update:f})}function Ts(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n=Q(),d=U();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function p(o){if(!e.enabled)return;const{rtlTranslate:l}=e;let c=o;c.originalEvent&&(c=c.originalEvent);const m=c.keyCode||c.charCode,w=e.params.keyboard.pageUpDown,g=w&&m===33,v=w&&m===34,u=m===37,b=m===39,h=m===38,y=m===40;if(!e.allowSlideNext&&(e.isHorizontal()&&b||e.isVertical()&&y||v)||!e.allowSlidePrev&&(e.isHorizontal()&&u||e.isVertical()&&h||g))return!1;if(!(c.shiftKey||c.altKey||c.ctrlKey||c.metaKey)&&!(n.activeElement&&n.activeElement.nodeName&&(n.activeElement.nodeName.toLowerCase()==="input"||n.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(g||v||u||b||h||y)){let T=!1;if(we(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&we(e.el,`.${e.params.slideActiveClass}`).length===0)return;const L=e.el,A=L.clientWidth,_=L.clientHeight,S=d.innerWidth,M=d.innerHeight,z=Xe(L);l&&(z.left-=L.scrollLeft);const E=[[z.left,z.top],[z.left+A,z.top],[z.left,z.top+_],[z.left+A,z.top+_]];for(let x=0;x<E.length;x+=1){const C=E[x];if(C[0]>=0&&C[0]<=S&&C[1]>=0&&C[1]<=M){if(C[0]===0&&C[1]===0)continue;T=!0}}if(!T)return}e.isHorizontal()?((g||v||u||b)&&(c.preventDefault?c.preventDefault():c.returnValue=!1),((v||b)&&!l||(g||u)&&l)&&e.slideNext(),((g||u)&&!l||(v||b)&&l)&&e.slidePrev()):((g||v||h||y)&&(c.preventDefault?c.preventDefault():c.returnValue=!1),(v||y)&&e.slideNext(),(g||h)&&e.slidePrev()),r("keyPress",m)}}function a(){e.keyboard.enabled||(n.addEventListener("keydown",p),e.keyboard.enabled=!0)}function f(){e.keyboard.enabled&&(n.removeEventListener("keydown",p),e.keyboard.enabled=!1)}s("init",()=>{e.params.keyboard.enabled&&a()}),s("destroy",()=>{e.keyboard.enabled&&f()}),Object.assign(e.keyboard,{enable:a,disable:f})}function Ms(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n=U();t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let d,p=le(),a;const f=[];function o(h){let A=0,_=0,S=0,M=0;return"detail"in h&&(_=h.detail),"wheelDelta"in h&&(_=-h.wheelDelta/120),"wheelDeltaY"in h&&(_=-h.wheelDeltaY/120),"wheelDeltaX"in h&&(A=-h.wheelDeltaX/120),"axis"in h&&h.axis===h.HORIZONTAL_AXIS&&(A=_,_=0),S=A*10,M=_*10,"deltaY"in h&&(M=h.deltaY),"deltaX"in h&&(S=h.deltaX),h.shiftKey&&!S&&(S=M,M=0),(S||M)&&h.deltaMode&&(h.deltaMode===1?(S*=40,M*=40):(S*=800,M*=800)),S&&!A&&(A=S<1?-1:1),M&&!_&&(_=M<1?-1:1),{spinX:A,spinY:_,pixelX:S,pixelY:M}}function l(){e.enabled&&(e.mouseEntered=!0)}function c(){e.enabled&&(e.mouseEntered=!1)}function m(h){return e.params.mousewheel.thresholdDelta&&h.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&le()-p<e.params.mousewheel.thresholdTime?!1:h.delta>=6&&le()-p<60?!0:(h.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),r("scroll",h.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),r("scroll",h.raw)),p=new n.Date().getTime(),!1)}function w(h){const y=e.params.mousewheel;if(h.direction<0){if(e.isEnd&&!e.params.loop&&y.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&y.releaseOnEdges)return!0;return!1}function g(h){let y=h,T=!0;if(!e.enabled||h.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const L=e.params.mousewheel;e.params.cssMode&&y.preventDefault();let A=e.el;e.params.mousewheel.eventsTarget!=="container"&&(A=document.querySelector(e.params.mousewheel.eventsTarget));const _=A&&A.contains(y.target);if(!e.mouseEntered&&!_&&!L.releaseOnEdges)return!0;y.originalEvent&&(y=y.originalEvent);let S=0;const M=e.rtlTranslate?-1:1,z=o(y);if(L.forceToAxis)if(e.isHorizontal())if(Math.abs(z.pixelX)>Math.abs(z.pixelY))S=-z.pixelX*M;else return!0;else if(Math.abs(z.pixelY)>Math.abs(z.pixelX))S=-z.pixelY;else return!0;else S=Math.abs(z.pixelX)>Math.abs(z.pixelY)?-z.pixelX*M:-z.pixelY;if(S===0)return!0;L.invert&&(S=-S);let E=e.getTranslate()+S*L.sensitivity;if(E>=e.minTranslate()&&(E=e.minTranslate()),E<=e.maxTranslate()&&(E=e.maxTranslate()),T=e.params.loop?!0:!(E===e.minTranslate()||E===e.maxTranslate()),T&&e.params.nested&&y.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const x={time:le(),delta:Math.abs(S),direction:Math.sign(S),raw:h};f.length>=2&&f.shift();const C=f.length?f[f.length-1]:void 0;if(f.push(x),C?(x.direction!==C.direction||x.delta>C.delta||x.time>C.time+150)&&m(x):m(x),w(x))return!0}else{const x={time:le(),delta:Math.abs(S),direction:Math.sign(S)},C=a&&x.time<a.time+500&&x.delta<=a.delta&&x.direction===a.direction;if(!C){a=void 0;let k=e.getTranslate()+S*L.sensitivity;const G=e.isBeginning,P=e.isEnd;if(k>=e.minTranslate()&&(k=e.minTranslate()),k<=e.maxTranslate()&&(k=e.maxTranslate()),e.setTransition(0),e.setTranslate(k),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!G&&e.isBeginning||!P&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:x.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(d),d=void 0,f.length>=15&&f.shift();const I=f.length?f[f.length-1]:void 0,V=f[0];if(f.push(x),I&&(x.delta>I.delta||x.direction!==I.direction))f.splice(0);else if(f.length>=15&&x.time-V.time<500&&V.delta-x.delta>=1&&x.delta<=6){const F=S>0?.8:.2;a=x,f.splice(0),d=ge(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,F)},0)}d||(d=ge(()=>{if(e.destroyed||!e.params)return;const F=.5;a=x,f.splice(0),e.slideToClosest(e.params.speed,!0,void 0,F)},500))}if(C||r("scroll",y),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),L.releaseOnEdges&&(k===e.minTranslate()||k===e.maxTranslate()))return!0}}return y.preventDefault?y.preventDefault():y.returnValue=!1,!1}function v(h){let y=e.el;e.params.mousewheel.eventsTarget!=="container"&&(y=document.querySelector(e.params.mousewheel.eventsTarget)),y[h]("mouseenter",l),y[h]("mouseleave",c),y[h]("wheel",g)}function u(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",g),!0):e.mousewheel.enabled?!1:(v("addEventListener"),e.mousewheel.enabled=!0,!0)}function b(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,g),!0):e.mousewheel.enabled?(v("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}s("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&b(),e.params.mousewheel.enabled&&u()}),s("destroy",()=>{e.params.cssMode&&u(),e.mousewheel.enabled&&b()}),Object.assign(e.mousewheel,{enable:u,disable:b})}function xt(i,e,t,s){return i.params.createElements&&Object.keys(s).forEach(r=>{if(!t[r]&&t.auto===!0){let n=Z(i.el,`.${s[r]}`)[0];n||(n=oe("div",s[r]),n.className=s[r],i.el.append(n)),t[r]=n,e[r]=n}}),t}function Cs(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function n(w){let g;return w&&typeof w=="string"&&e.isElement&&(g=e.el.querySelector(w),g)?g:(w&&(typeof w=="string"&&(g=[...document.querySelectorAll(w)]),e.params.uniqueNavElements&&typeof w=="string"&&g&&g.length>1&&e.el.querySelectorAll(w).length===1?g=e.el.querySelector(w):g&&g.length===1&&(g=g[0])),w&&!g?w:g)}function d(w,g){const v=e.params.navigation;w=Y(w),w.forEach(u=>{u&&(u.classList[g?"add":"remove"](...v.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=g),e.params.watchOverflow&&e.enabled&&u.classList[e.isLocked?"add":"remove"](v.lockClass))})}function p(){const{nextEl:w,prevEl:g}=e.navigation;if(e.params.loop){d(g,!1),d(w,!1);return}d(g,e.isBeginning&&!e.params.rewind),d(w,e.isEnd&&!e.params.rewind)}function a(w){w.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function f(w){w.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function o(){const w=e.params.navigation;if(e.params.navigation=xt(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(w.nextEl||w.prevEl))return;let g=n(w.nextEl),v=n(w.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:v}),g=Y(g),v=Y(v);const u=(b,h)=>{b&&b.addEventListener("click",h==="next"?f:a),!e.enabled&&b&&b.classList.add(...w.lockClass.split(" "))};g.forEach(b=>u(b,"next")),v.forEach(b=>u(b,"prev"))}function l(){let{nextEl:w,prevEl:g}=e.navigation;w=Y(w),g=Y(g);const v=(u,b)=>{u.removeEventListener("click",b==="next"?f:a),u.classList.remove(...e.params.navigation.disabledClass.split(" "))};w.forEach(u=>v(u,"next")),g.forEach(u=>v(u,"prev"))}s("init",()=>{e.params.navigation.enabled===!1?m():(o(),p())}),s("toEdge fromEdge lock unlock",()=>{p()}),s("destroy",()=>{l()}),s("enable disable",()=>{let{nextEl:w,prevEl:g}=e.navigation;if(w=Y(w),g=Y(g),e.enabled){p();return}[...w,...g].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),s("click",(w,g)=>{let{nextEl:v,prevEl:u}=e.navigation;v=Y(v),u=Y(u);const b=g.target;let h=u.includes(b)||v.includes(b);if(e.isElement&&!h){const y=g.path||g.composedPath&&g.composedPath();y&&(h=y.find(T=>v.includes(T)||u.includes(T)))}if(e.params.navigation.hideOnClick&&!h){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===b||e.pagination.el.contains(b)))return;let y;v.length?y=v[0].classList.contains(e.params.navigation.hiddenClass):u.length&&(y=u[0].classList.contains(e.params.navigation.hiddenClass)),r(y===!0?"navigationShow":"navigationHide"),[...v,...u].filter(T=>!!T).forEach(T=>T.classList.toggle(e.params.navigation.hiddenClass))}});const c=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),o(),p()},m=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),l()};Object.assign(e.navigation,{enable:c,disable:m,update:p,init:o,destroy:l})}function ce(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Ps(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let d,p=0;function a(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function f(u,b){const{bulletActiveClass:h}=e.params.pagination;u&&(u=u[`${b==="prev"?"previous":"next"}ElementSibling`],u&&(u.classList.add(`${h}-${b}`),u=u[`${b==="prev"?"previous":"next"}ElementSibling`],u&&u.classList.add(`${h}-${b}-${b}`)))}function o(u){const b=u.target.closest(ce(e.params.pagination.bulletClass));if(!b)return;u.preventDefault();const h=Ae(b)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===h)return;e.slideToLoop(h)}else e.slideTo(h)}function l(){const u=e.rtl,b=e.params.pagination;if(a())return;let h=e.pagination.el;h=Y(h);let y,T;const L=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,A=e.params.loop?Math.ceil(L/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(T=e.previousRealIndex||0,y=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(y=e.snapIndex,T=e.previousSnapIndex):(T=e.previousIndex||0,y=e.activeIndex||0),b.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let S,M,z;if(b.dynamicBullets&&(d=wt(_[0],e.isHorizontal()?"width":"height"),h.forEach(E=>{E.style[e.isHorizontal()?"width":"height"]=`${d*(b.dynamicMainBullets+4)}px`}),b.dynamicMainBullets>1&&T!==void 0&&(p+=y-(T||0),p>b.dynamicMainBullets-1?p=b.dynamicMainBullets-1:p<0&&(p=0)),S=Math.max(y-p,0),M=S+(Math.min(_.length,b.dynamicMainBullets)-1),z=(M+S)/2),_.forEach(E=>{const x=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(C=>`${b.bulletActiveClass}${C}`)].map(C=>typeof C=="string"&&C.includes(" ")?C.split(" "):C).flat();E.classList.remove(...x)}),h.length>1)_.forEach(E=>{const x=Ae(E);x===y?E.classList.add(...b.bulletActiveClass.split(" ")):e.isElement&&E.setAttribute("part","bullet"),b.dynamicBullets&&(x>=S&&x<=M&&E.classList.add(...`${b.bulletActiveClass}-main`.split(" ")),x===S&&f(E,"prev"),x===M&&f(E,"next"))});else{const E=_[y];if(E&&E.classList.add(...b.bulletActiveClass.split(" ")),e.isElement&&_.forEach((x,C)=>{x.setAttribute("part",C===y?"bullet-active":"bullet")}),b.dynamicBullets){const x=_[S],C=_[M];for(let k=S;k<=M;k+=1)_[k]&&_[k].classList.add(...`${b.bulletActiveClass}-main`.split(" "));f(x,"prev"),f(C,"next")}}if(b.dynamicBullets){const E=Math.min(_.length,b.dynamicMainBullets+4),x=(d*E-d)/2-z*d,C=u?"right":"left";_.forEach(k=>{k.style[e.isHorizontal()?C:"top"]=`${x}px`})}}h.forEach((_,S)=>{if(b.type==="fraction"&&(_.querySelectorAll(ce(b.currentClass)).forEach(M=>{M.textContent=b.formatFractionCurrent(y+1)}),_.querySelectorAll(ce(b.totalClass)).forEach(M=>{M.textContent=b.formatFractionTotal(A)})),b.type==="progressbar"){let M;b.progressbarOpposite?M=e.isHorizontal()?"vertical":"horizontal":M=e.isHorizontal()?"horizontal":"vertical";const z=(y+1)/A;let E=1,x=1;M==="horizontal"?E=z:x=z,_.querySelectorAll(ce(b.progressbarFillClass)).forEach(C=>{C.style.transform=`translate3d(0,0,0) scaleX(${E}) scaleY(${x})`,C.style.transitionDuration=`${e.params.speed}ms`})}b.type==="custom"&&b.renderCustom?(_.innerHTML=b.renderCustom(e,y+1,A),S===0&&r("paginationRender",_)):(S===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](b.lockClass)})}function c(){const u=e.params.pagination;if(a())return;const b=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let h=e.pagination.el;h=Y(h);let y="";if(u.type==="bullets"){let T=e.params.loop?Math.ceil(b/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&T>b&&(T=b);for(let L=0;L<T;L+=1)u.renderBullet?y+=u.renderBullet.call(e,L,u.bulletClass):y+=`<${u.bulletElement} ${e.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?y=u.renderFraction.call(e,u.currentClass,u.totalClass):y=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?y=u.renderProgressbar.call(e,u.progressbarFillClass):y=`<span class="${u.progressbarFillClass}"></span>`),e.pagination.bullets=[],h.forEach(T=>{u.type!=="custom"&&(T.innerHTML=y||""),u.type==="bullets"&&e.pagination.bullets.push(...T.querySelectorAll(ce(u.bulletClass)))}),u.type!=="custom"&&r("paginationRender",h[0])}function m(){e.params.pagination=xt(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const u=e.params.pagination;if(!u.el)return;let b;typeof u.el=="string"&&e.isElement&&(b=e.el.querySelector(u.el)),!b&&typeof u.el=="string"&&(b=[...document.querySelectorAll(u.el)]),b||(b=u.el),!(!b||b.length===0)&&(e.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(b)&&b.length>1&&(b=[...e.el.querySelectorAll(u.el)],b.length>1&&(b=b.filter(h=>we(h,".swiper")[0]===e.el)[0])),Array.isArray(b)&&b.length===1&&(b=b[0]),Object.assign(e.pagination,{el:b}),b=Y(b),b.forEach(h=>{u.type==="bullets"&&u.clickable&&h.classList.add(...(u.clickableClass||"").split(" ")),h.classList.add(u.modifierClass+u.type),h.classList.add(e.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(h.classList.add(`${u.modifierClass}${u.type}-dynamic`),p=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&h.classList.add(u.progressbarOppositeClass),u.clickable&&h.addEventListener("click",o),e.enabled||h.classList.add(u.lockClass)}))}function w(){const u=e.params.pagination;if(a())return;let b=e.pagination.el;b&&(b=Y(b),b.forEach(h=>{h.classList.remove(u.hiddenClass),h.classList.remove(u.modifierClass+u.type),h.classList.remove(e.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(h.classList.remove(...(u.clickableClass||"").split(" ")),h.removeEventListener("click",o))})),e.pagination.bullets&&e.pagination.bullets.forEach(h=>h.classList.remove(...u.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const u=e.params.pagination;let{el:b}=e.pagination;b=Y(b),b.forEach(h=>{h.classList.remove(u.horizontalClass,u.verticalClass),h.classList.add(e.isHorizontal()?u.horizontalClass:u.verticalClass)})}),s("init",()=>{e.params.pagination.enabled===!1?v():(m(),c(),l())}),s("activeIndexChange",()=>{typeof e.snapIndex>"u"&&l()}),s("snapIndexChange",()=>{l()}),s("snapGridLengthChange",()=>{c(),l()}),s("destroy",()=>{w()}),s("enable disable",()=>{let{el:u}=e.pagination;u&&(u=Y(u),u.forEach(b=>b.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),s("lock unlock",()=>{l()}),s("click",(u,b)=>{const h=b.target,y=Y(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&y&&y.length>0&&!h.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&h===e.navigation.nextEl||e.navigation.prevEl&&h===e.navigation.prevEl))return;const T=y[0].classList.contains(e.params.pagination.hiddenClass);r(T===!0?"paginationShow":"paginationHide"),y.forEach(L=>L.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:u}=e.pagination;u&&(u=Y(u),u.forEach(b=>b.classList.remove(e.params.pagination.paginationDisabledClass))),m(),c(),l()},v=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:u}=e.pagination;u&&(u=Y(u),u.forEach(b=>b.classList.add(e.params.pagination.paginationDisabledClass))),w()};Object.assign(e.pagination,{enable:g,disable:v,render:c,update:l,init:m,destroy:w})}function Is(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n=Q();let d=!1,p=null,a=null,f,o,l,c;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function m(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E,rtlTranslate:x}=e,{dragEl:C,el:k}=E,G=e.params.scrollbar,P=e.params.loop?e.progressLoop:e.progress;let I=o,V=(l-o)*P;x?(V=-V,V>0?(I=o-V,V=0):-V+o>l&&(I=l+V)):V<0?(I=o+V,V=0):V+o>l&&(I=l-V),e.isHorizontal()?(C.style.transform=`translate3d(${V}px, 0, 0)`,C.style.width=`${I}px`):(C.style.transform=`translate3d(0px, ${V}px, 0)`,C.style.height=`${I}px`),G.hide&&(clearTimeout(p),k.style.opacity=1,p=setTimeout(()=>{k.style.opacity=0,k.style.transitionDuration="400ms"},1e3))}function w(E){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${E}ms`)}function g(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E}=e,{dragEl:x,el:C}=E;x.style.width="",x.style.height="",l=e.isHorizontal()?C.offsetWidth:C.offsetHeight,c=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?o=l*c:o=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?x.style.width=`${o}px`:x.style.height=`${o}px`,c>=1?C.style.display="none":C.style.display="",e.params.scrollbar.hide&&(C.style.opacity=0),e.params.watchOverflow&&e.enabled&&E.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function v(E){return e.isHorizontal()?E.clientX:E.clientY}function u(E){const{scrollbar:x,rtlTranslate:C}=e,{el:k}=x;let G;G=(v(E)-Xe(k)[e.isHorizontal()?"left":"top"]-(f!==null?f:o/2))/(l-o),G=Math.max(Math.min(G,1),0),C&&(G=1-G);const P=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*G;e.updateProgress(P),e.setTranslate(P),e.updateActiveIndex(),e.updateSlidesClasses()}function b(E){const x=e.params.scrollbar,{scrollbar:C,wrapperEl:k}=e,{el:G,dragEl:P}=C;d=!0,f=E.target===P?v(E)-E.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,E.preventDefault(),E.stopPropagation(),k.style.transitionDuration="100ms",P.style.transitionDuration="100ms",u(E),clearTimeout(a),G.style.transitionDuration="0ms",x.hide&&(G.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",E)}function h(E){const{scrollbar:x,wrapperEl:C}=e,{el:k,dragEl:G}=x;d&&(E.preventDefault&&E.cancelable?E.preventDefault():E.returnValue=!1,u(E),C.style.transitionDuration="0ms",k.style.transitionDuration="0ms",G.style.transitionDuration="0ms",r("scrollbarDragMove",E))}function y(E){const x=e.params.scrollbar,{scrollbar:C,wrapperEl:k}=e,{el:G}=C;d&&(d=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",k.style.transitionDuration=""),x.hide&&(clearTimeout(a),a=ge(()=>{G.style.opacity=0,G.style.transitionDuration="400ms"},1e3)),r("scrollbarDragEnd",E),x.snapOnRelease&&e.slideToClosest())}function T(E){const{scrollbar:x,params:C}=e,k=x.el;if(!k)return;const G=k,P=C.passiveListeners?{passive:!1,capture:!1}:!1,I=C.passiveListeners?{passive:!0,capture:!1}:!1;if(!G)return;const V=E==="on"?"addEventListener":"removeEventListener";G[V]("pointerdown",b,P),n[V]("pointermove",h,P),n[V]("pointerup",y,I)}function L(){!e.params.scrollbar.el||!e.scrollbar.el||T("on")}function A(){!e.params.scrollbar.el||!e.scrollbar.el||T("off")}function _(){const{scrollbar:E,el:x}=e;e.params.scrollbar=xt(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const C=e.params.scrollbar;if(!C.el)return;let k;if(typeof C.el=="string"&&e.isElement&&(k=e.el.querySelector(C.el)),!k&&typeof C.el=="string"){if(k=n.querySelectorAll(C.el),!k.length)return}else k||(k=C.el);e.params.uniqueNavElements&&typeof C.el=="string"&&k.length>1&&x.querySelectorAll(C.el).length===1&&(k=x.querySelector(C.el)),k.length>0&&(k=k[0]),k.classList.add(e.isHorizontal()?C.horizontalClass:C.verticalClass);let G;k&&(G=k.querySelector(ce(e.params.scrollbar.dragClass)),G||(G=oe("div",e.params.scrollbar.dragClass),k.append(G))),Object.assign(E,{el:k,dragEl:G}),C.draggable&&L(),k&&k.classList[e.enabled?"remove":"add"](...fe(e.params.scrollbar.lockClass))}function S(){const E=e.params.scrollbar,x=e.scrollbar.el;x&&x.classList.remove(...fe(e.isHorizontal()?E.horizontalClass:E.verticalClass)),A()}s("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const E=e.params.scrollbar;let{el:x}=e.scrollbar;x=Y(x),x.forEach(C=>{C.classList.remove(E.horizontalClass,E.verticalClass),C.classList.add(e.isHorizontal()?E.horizontalClass:E.verticalClass)})}),s("init",()=>{e.params.scrollbar.enabled===!1?z():(_(),g(),m())}),s("update resize observerUpdate lock unlock changeDirection",()=>{g()}),s("setTranslate",()=>{m()}),s("setTransition",(E,x)=>{w(x)}),s("enable disable",()=>{const{el:E}=e.scrollbar;E&&E.classList[e.enabled?"remove":"add"](...fe(e.params.scrollbar.lockClass))}),s("destroy",()=>{S()});const M=()=>{e.el.classList.remove(...fe(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...fe(e.params.scrollbar.scrollbarDisabledClass)),_(),g(),m()},z=()=>{e.el.classList.add(...fe(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...fe(e.params.scrollbar.scrollbarDisabledClass)),S()};Object.assign(e.scrollbar,{enable:M,disable:z,updateSize:g,setTranslate:m,init:_,destroy:S})}function _s(i){let{swiper:e,extendParams:t,on:s}=i;t({parallax:{enabled:!1}});const r="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",n=(a,f)=>{const{rtl:o}=e,l=o?-1:1,c=a.getAttribute("data-swiper-parallax")||"0";let m=a.getAttribute("data-swiper-parallax-x"),w=a.getAttribute("data-swiper-parallax-y");const g=a.getAttribute("data-swiper-parallax-scale"),v=a.getAttribute("data-swiper-parallax-opacity"),u=a.getAttribute("data-swiper-parallax-rotate");if(m||w?(m=m||"0",w=w||"0"):e.isHorizontal()?(m=c,w="0"):(w=c,m="0"),m.indexOf("%")>=0?m=`${parseInt(m,10)*f*l}%`:m=`${m*f*l}px`,w.indexOf("%")>=0?w=`${parseInt(w,10)*f}%`:w=`${w*f}px`,typeof v<"u"&&v!==null){const h=v-(v-1)*(1-Math.abs(f));a.style.opacity=h}let b=`translate3d(${m}, ${w}, 0px)`;if(typeof g<"u"&&g!==null){const h=g-(g-1)*(1-Math.abs(f));b+=` scale(${h})`}if(u&&typeof u<"u"&&u!==null){const h=u*f*-1;b+=` rotate(${h}deg)`}a.style.transform=b},d=()=>{const{el:a,slides:f,progress:o,snapGrid:l,isElement:c}=e,m=Z(a,r);e.isElement&&m.push(...Z(e.hostEl,r)),m.forEach(w=>{n(w,o)}),f.forEach((w,g)=>{let v=w.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(v+=Math.ceil(g/2)-o*(l.length-1)),v=Math.min(Math.max(v,-1),1),w.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach(u=>{n(u,v)})})},p=function(a){a===void 0&&(a=e.params.speed);const{el:f,hostEl:o}=e,l=[...f.querySelectorAll(r)];e.isElement&&l.push(...o.querySelectorAll(r)),l.forEach(c=>{let m=parseInt(c.getAttribute("data-swiper-parallax-duration"),10)||a;a===0&&(m=0),c.style.transitionDuration=`${m}ms`})};s("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),s("init",()=>{e.params.parallax.enabled&&d()}),s("setTranslate",()=>{e.params.parallax.enabled&&d()}),s("setTransition",(a,f)=>{e.params.parallax.enabled&&p(f)})}function zs(i){let{swiper:e,extendParams:t,on:s,emit:r}=i;const n=U();t({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let d=1,p=!1,a,f;const o=[],l={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},c={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},m={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let w=1;Object.defineProperty(e.zoom,"scale",{get(){return w},set(j){if(w!==j){const D=l.imageEl,B=l.slideEl;r("zoomChange",j,D,B)}w=j}});function g(){if(o.length<2)return 1;const j=o[0].pageX,D=o[0].pageY,B=o[1].pageX,q=o[1].pageY;return Math.sqrt((B-j)**2+(q-D)**2)}function v(){const j=e.params.zoom,D=l.imageWrapEl.getAttribute("data-swiper-zoom")||j.maxRatio;if(j.limitToOriginalSize&&l.imageEl&&l.imageEl.naturalWidth){const B=l.imageEl.naturalWidth/l.imageEl.offsetWidth;return Math.min(B,D)}return D}function u(){if(o.length<2)return{x:null,y:null};const j=l.imageEl.getBoundingClientRect();return[(o[0].pageX+(o[1].pageX-o[0].pageX)/2-j.x-n.scrollX)/d,(o[0].pageY+(o[1].pageY-o[0].pageY)/2-j.y-n.scrollY)/d]}function b(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function h(j){const D=b();return!!(j.target.matches(D)||e.slides.filter(B=>B.contains(j.target)).length>0)}function y(j){const D=`.${e.params.zoom.containerClass}`;return!!(j.target.matches(D)||[...e.hostEl.querySelectorAll(D)].filter(B=>B.contains(j.target)).length>0)}function T(j){if(j.pointerType==="mouse"&&o.splice(0,o.length),!h(j))return;const D=e.params.zoom;if(a=!1,f=!1,o.push(j),!(o.length<2)){if(a=!0,l.scaleStart=g(),!l.slideEl){l.slideEl=j.target.closest(`.${e.params.slideClass}, swiper-slide`),l.slideEl||(l.slideEl=e.slides[e.activeIndex]);let B=l.slideEl.querySelector(`.${D.containerClass}`);if(B&&(B=B.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),l.imageEl=B,B?l.imageWrapEl=we(l.imageEl,`.${D.containerClass}`)[0]:l.imageWrapEl=void 0,!l.imageWrapEl){l.imageEl=void 0;return}l.maxRatio=v()}if(l.imageEl){const[B,q]=u();l.originX=B,l.originY=q,l.imageEl.style.transitionDuration="0ms"}p=!0}}function L(j){if(!h(j))return;const D=e.params.zoom,B=e.zoom,q=o.findIndex(H=>H.pointerId===j.pointerId);q>=0&&(o[q]=j),!(o.length<2)&&(f=!0,l.scaleMove=g(),l.imageEl&&(B.scale=l.scaleMove/l.scaleStart*d,B.scale>l.maxRatio&&(B.scale=l.maxRatio-1+(B.scale-l.maxRatio+1)**.5),B.scale<D.minRatio&&(B.scale=D.minRatio+1-(D.minRatio-B.scale+1)**.5),l.imageEl.style.transform=`translate3d(0,0,0) scale(${B.scale})`))}function A(j){if(!h(j)||j.pointerType==="mouse"&&j.type==="pointerout")return;const D=e.params.zoom,B=e.zoom,q=o.findIndex(H=>H.pointerId===j.pointerId);q>=0&&o.splice(q,1),!(!a||!f)&&(a=!1,f=!1,l.imageEl&&(B.scale=Math.max(Math.min(B.scale,l.maxRatio),D.minRatio),l.imageEl.style.transitionDuration=`${e.params.speed}ms`,l.imageEl.style.transform=`translate3d(0,0,0) scale(${B.scale})`,d=B.scale,p=!1,B.scale>1&&l.slideEl?l.slideEl.classList.add(`${D.zoomedSlideClass}`):B.scale<=1&&l.slideEl&&l.slideEl.classList.remove(`${D.zoomedSlideClass}`),B.scale===1&&(l.originX=0,l.originY=0,l.slideEl=void 0)))}let _;function S(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function M(){clearTimeout(_),e.touchEventsData.preventTouchMoveFromPointerMove=!0,_=setTimeout(()=>{S()})}function z(j){const D=e.device;if(!l.imageEl||c.isTouched)return;D.android&&j.cancelable&&j.preventDefault(),c.isTouched=!0;const B=o.length>0?o[0]:j;c.touchesStart.x=B.pageX,c.touchesStart.y=B.pageY}function E(j){if(!h(j)||!y(j))return;const D=e.zoom;if(!l.imageEl||!c.isTouched||!l.slideEl)return;c.isMoved||(c.width=l.imageEl.offsetWidth||l.imageEl.clientWidth,c.height=l.imageEl.offsetHeight||l.imageEl.clientHeight,c.startX=mt(l.imageWrapEl,"x")||0,c.startY=mt(l.imageWrapEl,"y")||0,l.slideWidth=l.slideEl.offsetWidth,l.slideHeight=l.slideEl.offsetHeight,l.imageWrapEl.style.transitionDuration="0ms");const B=c.width*D.scale,q=c.height*D.scale;if(c.minX=Math.min(l.slideWidth/2-B/2,0),c.maxX=-c.minX,c.minY=Math.min(l.slideHeight/2-q/2,0),c.maxY=-c.minY,c.touchesCurrent.x=o.length>0?o[0].pageX:j.pageX,c.touchesCurrent.y=o.length>0?o[0].pageY:j.pageY,Math.max(Math.abs(c.touchesCurrent.x-c.touchesStart.x),Math.abs(c.touchesCurrent.y-c.touchesStart.y))>5&&(e.allowClick=!1),!c.isMoved&&!p){if(e.isHorizontal()&&(Math.floor(c.minX)===Math.floor(c.startX)&&c.touchesCurrent.x<c.touchesStart.x||Math.floor(c.maxX)===Math.floor(c.startX)&&c.touchesCurrent.x>c.touchesStart.x)){c.isTouched=!1,S();return}if(!e.isHorizontal()&&(Math.floor(c.minY)===Math.floor(c.startY)&&c.touchesCurrent.y<c.touchesStart.y||Math.floor(c.maxY)===Math.floor(c.startY)&&c.touchesCurrent.y>c.touchesStart.y)){c.isTouched=!1,S();return}}j.cancelable&&j.preventDefault(),j.stopPropagation(),M(),c.isMoved=!0;const W=(D.scale-d)/(l.maxRatio-e.params.zoom.minRatio),{originX:se,originY:be}=l;c.currentX=c.touchesCurrent.x-c.touchesStart.x+c.startX+W*(c.width-se*2),c.currentY=c.touchesCurrent.y-c.touchesStart.y+c.startY+W*(c.height-be*2),c.currentX<c.minX&&(c.currentX=c.minX+1-(c.minX-c.currentX+1)**.8),c.currentX>c.maxX&&(c.currentX=c.maxX-1+(c.currentX-c.maxX+1)**.8),c.currentY<c.minY&&(c.currentY=c.minY+1-(c.minY-c.currentY+1)**.8),c.currentY>c.maxY&&(c.currentY=c.maxY-1+(c.currentY-c.maxY+1)**.8),m.prevPositionX||(m.prevPositionX=c.touchesCurrent.x),m.prevPositionY||(m.prevPositionY=c.touchesCurrent.y),m.prevTime||(m.prevTime=Date.now()),m.x=(c.touchesCurrent.x-m.prevPositionX)/(Date.now()-m.prevTime)/2,m.y=(c.touchesCurrent.y-m.prevPositionY)/(Date.now()-m.prevTime)/2,Math.abs(c.touchesCurrent.x-m.prevPositionX)<2&&(m.x=0),Math.abs(c.touchesCurrent.y-m.prevPositionY)<2&&(m.y=0),m.prevPositionX=c.touchesCurrent.x,m.prevPositionY=c.touchesCurrent.y,m.prevTime=Date.now(),l.imageWrapEl.style.transform=`translate3d(${c.currentX}px, ${c.currentY}px,0)`}function x(){const j=e.zoom;if(!l.imageEl)return;if(!c.isTouched||!c.isMoved){c.isTouched=!1,c.isMoved=!1;return}c.isTouched=!1,c.isMoved=!1;let D=300,B=300;const q=m.x*D,H=c.currentX+q,W=m.y*B,se=c.currentY+W;m.x!==0&&(D=Math.abs((H-c.currentX)/m.x)),m.y!==0&&(B=Math.abs((se-c.currentY)/m.y));const be=Math.max(D,B);c.currentX=H,c.currentY=se;const Be=c.width*j.scale,de=c.height*j.scale;c.minX=Math.min(l.slideWidth/2-Be/2,0),c.maxX=-c.minX,c.minY=Math.min(l.slideHeight/2-de/2,0),c.maxY=-c.minY,c.currentX=Math.max(Math.min(c.currentX,c.maxX),c.minX),c.currentY=Math.max(Math.min(c.currentY,c.maxY),c.minY),l.imageWrapEl.style.transitionDuration=`${be}ms`,l.imageWrapEl.style.transform=`translate3d(${c.currentX}px, ${c.currentY}px,0)`}function C(){const j=e.zoom;l.slideEl&&e.activeIndex!==e.slides.indexOf(l.slideEl)&&(l.imageEl&&(l.imageEl.style.transform="translate3d(0,0,0) scale(1)"),l.imageWrapEl&&(l.imageWrapEl.style.transform="translate3d(0,0,0)"),l.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),j.scale=1,d=1,l.slideEl=void 0,l.imageEl=void 0,l.imageWrapEl=void 0,l.originX=0,l.originY=0)}function k(j){const D=e.zoom,B=e.params.zoom;if(!l.slideEl){j&&j.target&&(l.slideEl=j.target.closest(`.${e.params.slideClass}, swiper-slide`)),l.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?l.slideEl=Z(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:l.slideEl=e.slides[e.activeIndex]);let Te=l.slideEl.querySelector(`.${B.containerClass}`);Te&&(Te=Te.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),l.imageEl=Te,Te?l.imageWrapEl=we(l.imageEl,`.${B.containerClass}`)[0]:l.imageWrapEl=void 0}if(!l.imageEl||!l.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),l.slideEl.classList.add(`${B.zoomedSlideClass}`);let q,H,W,se,be,Be,de,me,Tt,Mt,Ct,Pt,Ge,He,it,st,rt,nt;typeof c.touchesStart.x>"u"&&j?(q=j.pageX,H=j.pageY):(q=c.touchesStart.x,H=c.touchesStart.y);const Ee=typeof j=="number"?j:null;d===1&&Ee&&(q=void 0,H=void 0);const It=v();D.scale=Ee||It,d=Ee||It,j&&!(d===1&&Ee)?(rt=l.slideEl.offsetWidth,nt=l.slideEl.offsetHeight,W=Xe(l.slideEl).left+n.scrollX,se=Xe(l.slideEl).top+n.scrollY,be=W+rt/2-q,Be=se+nt/2-H,Tt=l.imageEl.offsetWidth||l.imageEl.clientWidth,Mt=l.imageEl.offsetHeight||l.imageEl.clientHeight,Ct=Tt*D.scale,Pt=Mt*D.scale,Ge=Math.min(rt/2-Ct/2,0),He=Math.min(nt/2-Pt/2,0),it=-Ge,st=-He,de=be*D.scale,me=Be*D.scale,de<Ge&&(de=Ge),de>it&&(de=it),me<He&&(me=He),me>st&&(me=st)):(de=0,me=0),Ee&&D.scale===1&&(l.originX=0,l.originY=0),l.imageWrapEl.style.transitionDuration="300ms",l.imageWrapEl.style.transform=`translate3d(${de}px, ${me}px,0)`,l.imageEl.style.transitionDuration="300ms",l.imageEl.style.transform=`translate3d(0,0,0) scale(${D.scale})`}function G(){const j=e.zoom,D=e.params.zoom;if(!l.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?l.slideEl=Z(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:l.slideEl=e.slides[e.activeIndex];let B=l.slideEl.querySelector(`.${D.containerClass}`);B&&(B=B.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),l.imageEl=B,B?l.imageWrapEl=we(l.imageEl,`.${D.containerClass}`)[0]:l.imageWrapEl=void 0}!l.imageEl||!l.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),j.scale=1,d=1,l.imageWrapEl.style.transitionDuration="300ms",l.imageWrapEl.style.transform="translate3d(0,0,0)",l.imageEl.style.transitionDuration="300ms",l.imageEl.style.transform="translate3d(0,0,0) scale(1)",l.slideEl.classList.remove(`${D.zoomedSlideClass}`),l.slideEl=void 0,l.originX=0,l.originY=0)}function P(j){const D=e.zoom;D.scale&&D.scale!==1?G():k(j)}function I(){const j=e.params.passiveListeners?{passive:!0,capture:!1}:!1,D=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:j,activeListenerWithCapture:D}}function V(){const j=e.zoom;if(j.enabled)return;j.enabled=!0;const{passiveListener:D,activeListenerWithCapture:B}=I();e.wrapperEl.addEventListener("pointerdown",T,D),e.wrapperEl.addEventListener("pointermove",L,B),["pointerup","pointercancel","pointerout"].forEach(q=>{e.wrapperEl.addEventListener(q,A,D)}),e.wrapperEl.addEventListener("pointermove",E,B)}function F(){const j=e.zoom;if(!j.enabled)return;j.enabled=!1;const{passiveListener:D,activeListenerWithCapture:B}=I();e.wrapperEl.removeEventListener("pointerdown",T,D),e.wrapperEl.removeEventListener("pointermove",L,B),["pointerup","pointercancel","pointerout"].forEach(q=>{e.wrapperEl.removeEventListener(q,A,D)}),e.wrapperEl.removeEventListener("pointermove",E,B)}s("init",()=>{e.params.zoom.enabled&&V()}),s("destroy",()=>{F()}),s("touchStart",(j,D)=>{e.zoom.enabled&&z(D)}),s("touchEnd",(j,D)=>{e.zoom.enabled&&x()}),s("doubleTap",(j,D)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&P(D)}),s("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&C()}),s("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&C()}),Object.assign(e.zoom,{enable:V,disable:F,in:k,out:G,toggle:P})}function Ls(i){let{swiper:e,extendParams:t,on:s}=i;t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function r(f,o){const l=function(){let g,v,u;return(b,h)=>{for(v=-1,g=b.length;g-v>1;)u=g+v>>1,b[u]<=h?v=u:g=u;return g}}();this.x=f,this.y=o,this.lastIndex=f.length-1;let c,m;return this.interpolate=function(g){return g?(m=l(this.x,g),c=m-1,(g-this.x[c])*(this.y[m]-this.y[c])/(this.x[m]-this.x[c])+this.y[c]):0},this}function n(f){e.controller.spline=e.params.loop?new r(e.slidesGrid,f.slidesGrid):new r(e.snapGrid,f.snapGrid)}function d(f,o){const l=e.controller.control;let c,m;const w=e.constructor;function g(v){if(v.destroyed)return;const u=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(n(v),m=-e.controller.spline.interpolate(-u)),(!m||e.params.controller.by==="container")&&(c=(v.maxTranslate()-v.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(c)||!Number.isFinite(c))&&(c=1),m=(u-e.minTranslate())*c+v.minTranslate()),e.params.controller.inverse&&(m=v.maxTranslate()-m),v.updateProgress(m),v.setTranslate(m,e),v.updateActiveIndex(),v.updateSlidesClasses()}if(Array.isArray(l))for(let v=0;v<l.length;v+=1)l[v]!==o&&l[v]instanceof w&&g(l[v]);else l instanceof w&&o!==l&&g(l)}function p(f,o){const l=e.constructor,c=e.controller.control;let m;function w(g){g.destroyed||(g.setTransition(f,e),f!==0&&(g.transitionStart(),g.params.autoHeight&&ge(()=>{g.updateAutoHeight()}),$e(g.wrapperEl,()=>{c&&g.transitionEnd()})))}if(Array.isArray(c))for(m=0;m<c.length;m+=1)c[m]!==o&&c[m]instanceof l&&w(c[m]);else c instanceof l&&o!==c&&w(c)}function a(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}s("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){(typeof e.params.controller.control=="string"?[...document.querySelectorAll(e.params.controller.control)]:[e.params.controller.control]).forEach(o=>{if(e.controller.control||(e.controller.control=[]),o&&o.swiper)e.controller.control.push(o.swiper);else if(o){const l=`${e.params.eventsPrefix}init`,c=m=>{e.controller.control.push(m.detail[0]),e.update(),o.removeEventListener(l,c)};o.addEventListener(l,c)}});return}e.controller.control=e.params.controller.control}),s("update",()=>{a()}),s("resize",()=>{a()}),s("observerUpdate",()=>{a()}),s("setTranslate",(f,o,l)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(o,l)}),s("setTransition",(f,o,l)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(o,l)}),Object.assign(e.controller,{setTranslate:d,setTransition:p})}function ks(i){let{swiper:e,extendParams:t,on:s}=i;t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let r=null,n,d,p=new Date().getTime();function a(P){const I=r;I.length!==0&&(I.innerHTML="",I.innerHTML=P)}function f(P){const I=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(P).replace(/x/g,I)}function o(P){P=Y(P),P.forEach(I=>{I.setAttribute("tabIndex","0")})}function l(P){P=Y(P),P.forEach(I=>{I.setAttribute("tabIndex","-1")})}function c(P,I){P=Y(P),P.forEach(V=>{V.setAttribute("role",I)})}function m(P,I){P=Y(P),P.forEach(V=>{V.setAttribute("aria-roledescription",I)})}function w(P,I){P=Y(P),P.forEach(V=>{V.setAttribute("aria-controls",I)})}function g(P,I){P=Y(P),P.forEach(V=>{V.setAttribute("aria-label",I)})}function v(P,I){P=Y(P),P.forEach(V=>{V.setAttribute("id",I)})}function u(P,I){P=Y(P),P.forEach(V=>{V.setAttribute("aria-live",I)})}function b(P){P=Y(P),P.forEach(I=>{I.setAttribute("aria-disabled",!0)})}function h(P){P=Y(P),P.forEach(I=>{I.setAttribute("aria-disabled",!1)})}function y(P){if(P.keyCode!==13&&P.keyCode!==32)return;const I=e.params.a11y,V=P.target;if(!(e.pagination&&e.pagination.el&&(V===e.pagination.el||e.pagination.el.contains(P.target))&&!P.target.matches(ce(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const F=Y(e.navigation.prevEl);Y(e.navigation.nextEl).includes(V)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?a(I.lastSlideMessage):a(I.nextSlideMessage)),F.includes(V)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?a(I.firstSlideMessage):a(I.prevSlideMessage))}e.pagination&&V.matches(ce(e.params.pagination.bulletClass))&&V.click()}}function T(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:P,prevEl:I}=e.navigation;I&&(e.isBeginning?(b(I),l(I)):(h(I),o(I))),P&&(e.isEnd?(b(P),l(P)):(h(P),o(P)))}function L(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function A(){return L()&&e.params.pagination.clickable}function _(){const P=e.params.a11y;L()&&e.pagination.bullets.forEach(I=>{e.params.pagination.clickable&&(o(I),e.params.pagination.renderBullet||(c(I,"button"),g(I,P.paginationBulletMessage.replace(/\{\{index\}\}/,Ae(I)+1)))),I.matches(ce(e.params.pagination.bulletActiveClass))?I.setAttribute("aria-current","true"):I.removeAttribute("aria-current")})}const S=(P,I,V)=>{o(P),P.tagName!=="BUTTON"&&(c(P,"button"),P.addEventListener("keydown",y)),g(P,V),w(P,I)},M=P=>{d&&d!==P.target&&!d.contains(P.target)&&(n=!0),e.a11y.clicked=!0},z=()=>{n=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},E=P=>{p=new Date().getTime()},x=P=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-p<100)return;const I=P.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!I||!e.slides.includes(I))return;d=I;const V=e.slides.indexOf(I)===e.activeIndex,F=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(I);V||F||P.sourceCapabilities&&P.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{n||(e.params.loop?e.slideToLoop(parseInt(I.getAttribute("data-swiper-slide-index")),0):e.slideTo(e.slides.indexOf(I),0),n=!1)}))},C=()=>{const P=e.params.a11y;P.itemRoleDescriptionMessage&&m(e.slides,P.itemRoleDescriptionMessage),P.slideRole&&c(e.slides,P.slideRole);const I=e.slides.length;P.slideLabelMessage&&e.slides.forEach((V,F)=>{const j=e.params.loop?parseInt(V.getAttribute("data-swiper-slide-index"),10):F,D=P.slideLabelMessage.replace(/\{\{index\}\}/,j+1).replace(/\{\{slidesLength\}\}/,I);g(V,D)})},k=()=>{const P=e.params.a11y;e.el.append(r);const I=e.el;P.containerRoleDescriptionMessage&&m(I,P.containerRoleDescriptionMessage),P.containerMessage&&g(I,P.containerMessage);const V=e.wrapperEl,F=P.id||V.getAttribute("id")||`swiper-wrapper-${f(16)}`,j=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";v(V,F),u(V,j),C();let{nextEl:D,prevEl:B}=e.navigation?e.navigation:{};D=Y(D),B=Y(B),D&&D.forEach(H=>S(H,F,P.nextSlideMessage)),B&&B.forEach(H=>S(H,F,P.prevSlideMessage)),A()&&Y(e.pagination.el).forEach(W=>{W.addEventListener("keydown",y)}),Q().addEventListener("visibilitychange",E),e.el.addEventListener("focus",x,!0),e.el.addEventListener("focus",x,!0),e.el.addEventListener("pointerdown",M,!0),e.el.addEventListener("pointerup",z,!0)};function G(){r&&r.remove();let{nextEl:P,prevEl:I}=e.navigation?e.navigation:{};P=Y(P),I=Y(I),P&&P.forEach(F=>F.removeEventListener("keydown",y)),I&&I.forEach(F=>F.removeEventListener("keydown",y)),A()&&Y(e.pagination.el).forEach(j=>{j.removeEventListener("keydown",y)}),Q().removeEventListener("visibilitychange",E),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",x,!0),e.el.removeEventListener("pointerdown",M,!0),e.el.removeEventListener("pointerup",z,!0))}s("beforeInit",()=>{r=oe("span",e.params.a11y.notificationClass),r.setAttribute("aria-live","assertive"),r.setAttribute("aria-atomic","true")}),s("afterInit",()=>{e.params.a11y.enabled&&k()}),s("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&C()}),s("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&T()}),s("paginationUpdate",()=>{e.params.a11y.enabled&&_()}),s("destroy",()=>{e.params.a11y.enabled&&G()})}function $s(i){let{swiper:e,extendParams:t,on:s}=i;t({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let r=!1,n={};const d=m=>m.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),p=m=>{const w=U();let g;m?g=new URL(m):g=w.location;const v=g.pathname.slice(1).split("/").filter(y=>y!==""),u=v.length,b=v[u-2],h=v[u-1];return{key:b,value:h}},a=(m,w)=>{const g=U();if(!r||!e.params.history.enabled)return;let v;e.params.url?v=new URL(e.params.url):v=g.location;const u=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${w}"]`):e.slides[w];let b=d(u.getAttribute("data-history"));if(e.params.history.root.length>0){let y=e.params.history.root;y[y.length-1]==="/"&&(y=y.slice(0,y.length-1)),b=`${y}/${m?`${m}/`:""}${b}`}else v.pathname.includes(m)||(b=`${m?`${m}/`:""}${b}`);e.params.history.keepQuery&&(b+=v.search);const h=g.history.state;h&&h.value===b||(e.params.history.replaceState?g.history.replaceState({value:b},null,b):g.history.pushState({value:b},null,b))},f=(m,w,g)=>{if(w)for(let v=0,u=e.slides.length;v<u;v+=1){const b=e.slides[v];if(d(b.getAttribute("data-history"))===w){const y=e.getSlideIndex(b);e.slideTo(y,m,g)}}else e.slideTo(0,m,g)},o=()=>{n=p(e.params.url),f(e.params.speed,n.value,!1)},l=()=>{const m=U();if(e.params.history){if(!m.history||!m.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}if(r=!0,n=p(e.params.url),!n.key&&!n.value){e.params.history.replaceState||m.addEventListener("popstate",o);return}f(0,n.value,e.params.runCallbacksOnInit),e.params.history.replaceState||m.addEventListener("popstate",o)}},c=()=>{const m=U();e.params.history.replaceState||m.removeEventListener("popstate",o)};s("init",()=>{e.params.history.enabled&&l()}),s("destroy",()=>{e.params.history.enabled&&c()}),s("transitionEnd _freeModeNoMomentumRelease",()=>{r&&a(e.params.history.key,e.activeIndex)}),s("slideChange",()=>{r&&e.params.cssMode&&a(e.params.history.key,e.activeIndex)})}function As(i){let{swiper:e,extendParams:t,emit:s,on:r}=i,n=!1;const d=Q(),p=U();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(c,m){if(e.virtual&&e.params.virtual.enabled){const w=e.slides.filter(v=>v.getAttribute("data-hash")===m)[0];return w?parseInt(w.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(Z(e.slidesEl,`.${e.params.slideClass}[data-hash="${m}"], swiper-slide[data-hash="${m}"]`)[0])}}});const a=()=>{s("hashChange");const c=d.location.hash.replace("#",""),m=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],w=m?m.getAttribute("data-hash"):"";if(c!==w){const g=e.params.hashNavigation.getSlideIndex(e,c);if(typeof g>"u"||Number.isNaN(g))return;e.slideTo(g)}},f=()=>{if(!n||!e.params.hashNavigation.enabled)return;const c=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],m=c?c.getAttribute("data-hash")||c.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&p.history&&p.history.replaceState?(p.history.replaceState(null,null,`#${m}`||""),s("hashSet")):(d.location.hash=m||"",s("hashSet"))},o=()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;n=!0;const c=d.location.hash.replace("#","");if(c){const w=e.params.hashNavigation.getSlideIndex(e,c);e.slideTo(w||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&p.addEventListener("hashchange",a)},l=()=>{e.params.hashNavigation.watchState&&p.removeEventListener("hashchange",a)};r("init",()=>{e.params.hashNavigation.enabled&&o()}),r("destroy",()=>{e.params.hashNavigation.enabled&&l()}),r("transitionEnd _freeModeNoMomentumRelease",()=>{n&&f()}),r("slideChange",()=>{n&&e.params.cssMode&&f()})}function js(i){let{swiper:e,extendParams:t,on:s,emit:r,params:n}=i;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,p,a=n&&n.autoplay?n.autoplay.delay:3e3,f=n&&n.autoplay?n.autoplay.delay:3e3,o,l=new Date().getTime(),c,m,w,g,v,u,b;function h(I){!e||e.destroyed||!e.wrapperEl||I.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(b||I.detail&&I.detail.bySwiperTouchMove)&&M())}const y=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(f=o,c=!1);const I=e.autoplay.paused?o:l+f-new Date().getTime();e.autoplay.timeLeft=I,r("autoplayTimeLeft",I,I/a),p=requestAnimationFrame(()=>{y()})},T=()=>{let I;return e.virtual&&e.params.virtual.enabled?I=e.slides.filter(F=>F.classList.contains("swiper-slide-active"))[0]:I=e.slides[e.activeIndex],I?parseInt(I.getAttribute("data-swiper-autoplay"),10):void 0},L=I=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(p),y();let V=typeof I>"u"?e.params.autoplay.delay:I;a=e.params.autoplay.delay,f=e.params.autoplay.delay;const F=T();!Number.isNaN(F)&&F>0&&typeof I>"u"&&(V=F,a=F,f=F),o=V;const j=e.params.speed,D=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(j,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,j,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(j,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,j,!0,!0),r("autoplay")),e.params.cssMode&&(l=new Date().getTime(),requestAnimationFrame(()=>{L()})))};return V>0?(clearTimeout(d),d=setTimeout(()=>{D()},V)):requestAnimationFrame(()=>{D()}),V},A=()=>{l=new Date().getTime(),e.autoplay.running=!0,L(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(d),cancelAnimationFrame(p),r("autoplayStop")},S=(I,V)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(d),I||(u=!0);const F=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):M()};if(e.autoplay.paused=!0,V){v&&(o=e.params.autoplay.delay),v=!1,F();return}o=(o||e.params.autoplay.delay)-(new Date().getTime()-l),!(e.isEnd&&o<0&&!e.params.loop)&&(o<0&&(o=0),F())},M=()=>{e.isEnd&&o<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(l=new Date().getTime(),u?(u=!1,L(o)):L(),e.autoplay.paused=!1,r("autoplayResume"))},z=()=>{if(e.destroyed||!e.autoplay.running)return;const I=Q();I.visibilityState==="hidden"&&(u=!0,S(!0)),I.visibilityState==="visible"&&M()},E=I=>{I.pointerType==="mouse"&&(u=!0,b=!0,!(e.animating||e.autoplay.paused)&&S(!0))},x=I=>{I.pointerType==="mouse"&&(b=!1,e.autoplay.paused&&M())},C=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",E),e.el.addEventListener("pointerleave",x))},k=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",E),e.el.removeEventListener("pointerleave",x))},G=()=>{Q().addEventListener("visibilitychange",z)},P=()=>{Q().removeEventListener("visibilitychange",z)};s("init",()=>{e.params.autoplay.enabled&&(C(),G(),A())}),s("destroy",()=>{k(),P(),e.autoplay.running&&_()}),s("_freeModeStaticRelease",()=>{(w||u)&&M()}),s("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():S(!0,!0)}),s("beforeTransitionStart",(I,V,F)=>{e.destroyed||!e.autoplay.running||(F||!e.params.autoplay.disableOnInteraction?S(!0,!0):_())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}m=!0,w=!1,u=!1,g=setTimeout(()=>{u=!0,w=!0,S(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!m)){if(clearTimeout(g),clearTimeout(d),e.params.autoplay.disableOnInteraction){w=!1,m=!1;return}w&&e.params.cssMode&&M(),w=!1,m=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||(v=!0)}),Object.assign(e.autoplay,{start:A,stop:_,pause:S,resume:M})}function Ds(i){let{swiper:e,extendParams:t,on:s}=i;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,n=!1;e.thumbs={swiper:null};function d(){const f=e.thumbs.swiper;if(!f||f.destroyed)return;const o=f.clickedIndex,l=f.clickedSlide;if(l&&l.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof o>"u"||o===null)return;let c;f.params.loop?c=parseInt(f.clickedSlide.getAttribute("data-swiper-slide-index"),10):c=o,e.params.loop?e.slideToLoop(c):e.slideTo(c)}function p(){const{thumbs:f}=e.params;if(r)return!1;r=!0;const o=e.constructor;if(f.swiper instanceof o)e.thumbs.swiper=f.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(Ie(f.swiper)){const l=Object.assign({},f.swiper);Object.assign(l,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new o(l),n=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",d),!0}function a(f){const o=e.thumbs.swiper;if(!o||o.destroyed)return;const l=o.params.slidesPerView==="auto"?o.slidesPerViewDynamic():o.params.slidesPerView;let c=1;const m=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(c=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(c=1),c=Math.floor(c),o.slides.forEach(v=>v.classList.remove(m)),o.params.loop||o.params.virtual&&o.params.virtual.enabled)for(let v=0;v<c;v+=1)Z(o.slidesEl,`[data-swiper-slide-index="${e.realIndex+v}"]`).forEach(u=>{u.classList.add(m)});else for(let v=0;v<c;v+=1)o.slides[e.realIndex+v]&&o.slides[e.realIndex+v].classList.add(m);const w=e.params.thumbs.autoScrollOffset,g=w&&!o.params.loop;if(e.realIndex!==o.realIndex||g){const v=o.activeIndex;let u,b;if(o.params.loop){const h=o.slides.filter(y=>y.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];u=o.slides.indexOf(h),b=e.activeIndex>e.previousIndex?"next":"prev"}else u=e.realIndex,b=u>e.previousIndex?"next":"prev";g&&(u+=b==="next"?w:-1*w),o.visibleSlidesIndexes&&o.visibleSlidesIndexes.indexOf(u)<0&&(o.params.centeredSlides?u>v?u=u-Math.floor(l/2)+1:u=u+Math.floor(l/2)-1:u>v&&o.params.slidesPerGroup,o.slideTo(u,f?0:void 0))}}s("beforeInit",()=>{const{thumbs:f}=e.params;if(!(!f||!f.swiper))if(typeof f.swiper=="string"||f.swiper instanceof HTMLElement){const o=Q(),l=()=>{const m=typeof f.swiper=="string"?o.querySelector(f.swiper):f.swiper;if(m&&m.swiper)f.swiper=m.swiper,p(),a(!0);else if(m){const w=`${e.params.eventsPrefix}init`,g=v=>{f.swiper=v.detail[0],m.removeEventListener(w,g),p(),a(!0),f.swiper.update(),e.update()};m.addEventListener(w,g)}return m},c=()=>{if(e.destroyed)return;l()||requestAnimationFrame(c)};requestAnimationFrame(c)}else p(),a(!0)}),s("slideChange update resize observerUpdate",()=>{a()}),s("setTransition",(f,o)=>{const l=e.thumbs.swiper;!l||l.destroyed||l.setTransition(o)}),s("beforeDestroy",()=>{const f=e.thumbs.swiper;!f||f.destroyed||n&&f.destroy()}),Object.assign(e.thumbs,{init:p,update:a})}function Os(i){let{swiper:e,extendParams:t,emit:s,once:r}=i;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function n(){if(e.params.cssMode)return;const a=e.getTranslate();e.setTranslate(a),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function d(){if(e.params.cssMode)return;const{touchEventsData:a,touches:f}=e;a.velocities.length===0&&a.velocities.push({position:f[e.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:f[e.isHorizontal()?"currentX":"currentY"],time:le()})}function p(a){let{currentPos:f}=a;if(e.params.cssMode)return;const{params:o,wrapperEl:l,rtlTranslate:c,snapGrid:m,touchEventsData:w}=e,v=le()-w.touchStartTime;if(f<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(f>-e.maxTranslate()){e.slides.length<m.length?e.slideTo(m.length-1):e.slideTo(e.slides.length-1);return}if(o.freeMode.momentum){if(w.velocities.length>1){const _=w.velocities.pop(),S=w.velocities.pop(),M=_.position-S.position,z=_.time-S.time;e.velocity=M/z,e.velocity/=2,Math.abs(e.velocity)<o.freeMode.minimumVelocity&&(e.velocity=0),(z>150||le()-_.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=o.freeMode.momentumVelocityRatio,w.velocities.length=0;let u=1e3*o.freeMode.momentumRatio;const b=e.velocity*u;let h=e.translate+b;c&&(h=-h);let y=!1,T;const L=Math.abs(e.velocity)*20*o.freeMode.momentumBounceRatio;let A;if(h<e.maxTranslate())o.freeMode.momentumBounce?(h+e.maxTranslate()<-L&&(h=e.maxTranslate()-L),T=e.maxTranslate(),y=!0,w.allowMomentumBounce=!0):h=e.maxTranslate(),o.loop&&o.centeredSlides&&(A=!0);else if(h>e.minTranslate())o.freeMode.momentumBounce?(h-e.minTranslate()>L&&(h=e.minTranslate()+L),T=e.minTranslate(),y=!0,w.allowMomentumBounce=!0):h=e.minTranslate(),o.loop&&o.centeredSlides&&(A=!0);else if(o.freeMode.sticky){let _;for(let S=0;S<m.length;S+=1)if(m[S]>-h){_=S;break}Math.abs(m[_]-h)<Math.abs(m[_-1]-h)||e.swipeDirection==="next"?h=m[_]:h=m[_-1],h=-h}if(A&&r("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(c?u=Math.abs((-h-e.translate)/e.velocity):u=Math.abs((h-e.translate)/e.velocity),o.freeMode.sticky){const _=Math.abs((c?-h:h)-e.translate),S=e.slidesSizesGrid[e.activeIndex];_<S?u=o.speed:_<2*S?u=o.speed*1.5:u=o.speed*2.5}}else if(o.freeMode.sticky){e.slideToClosest();return}o.freeMode.momentumBounce&&y?(e.updateProgress(T),e.setTransition(u),e.setTranslate(h),e.transitionStart(!0,e.swipeDirection),e.animating=!0,$e(l,()=>{!e||e.destroyed||!w.allowMomentumBounce||(s("momentumBounce"),e.setTransition(o.speed),setTimeout(()=>{e.setTranslate(T),$e(l,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(h),e.setTransition(u),e.setTranslate(h),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,$e(l,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(h),e.updateActiveIndex(),e.updateSlidesClasses()}else if(o.freeMode.sticky){e.slideToClosest();return}else o.freeMode&&s("_freeModeNoMomentumRelease");(!o.freeMode.momentum||v>=o.longSwipesMs)&&(s("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:n,onTouchMove:d,onTouchEnd:p}})}function Vs(i){let{swiper:e,extendParams:t,on:s}=i;t({grid:{rows:1,fill:"column"}});let r,n,d,p;const a=()=>{let g=e.params.spaceBetween;return typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*e.size:typeof g=="string"&&(g=parseFloat(g)),g},f=g=>{const{slidesPerView:v}=e.params,{rows:u,fill:b}=e.params.grid,h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:g.length;d=Math.floor(h/u),Math.floor(h/u)===h/u?r=h:r=Math.ceil(h/u)*u,v!=="auto"&&b==="row"&&(r=Math.max(r,v*u)),n=r/u},o=()=>{e.slides&&e.slides.forEach(g=>{g.swiperSlideGridSet&&(g.style.height="",g.style[e.getDirectionLabel("margin-top")]="")})},l=(g,v,u)=>{const{slidesPerGroup:b}=e.params,h=a(),{rows:y,fill:T}=e.params.grid,L=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:u.length;let A,_,S;if(T==="row"&&b>1){const M=Math.floor(g/(b*y)),z=g-y*b*M,E=M===0?b:Math.min(Math.ceil((L-M*y*b)/y),b);S=Math.floor(z/E),_=z-S*E+M*b,A=_+S*r/y,v.style.order=A}else T==="column"?(_=Math.floor(g/y),S=g-_*y,(_>d||_===d&&S===y-1)&&(S+=1,S>=y&&(S=0,_+=1))):(S=Math.floor(g/n),_=g-S*n);v.row=S,v.column=_,v.style.height=`calc((100% - ${(y-1)*h}px) / ${y})`,v.style[e.getDirectionLabel("margin-top")]=S!==0?h&&`${h}px`:"",v.swiperSlideGridSet=!0},c=(g,v)=>{const{centeredSlides:u,roundLengths:b}=e.params,h=a(),{rows:y}=e.params.grid;if(e.virtualSize=(g+h)*r,e.virtualSize=Math.ceil(e.virtualSize/y)-h,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+h}px`),u){const T=[];for(let L=0;L<v.length;L+=1){let A=v[L];b&&(A=Math.floor(A)),v[L]<e.virtualSize+v[0]&&T.push(A)}v.splice(0,v.length),v.push(...T)}},m=()=>{p=e.params.grid&&e.params.grid.rows>1},w=()=>{const{params:g,el:v}=e,u=g.grid&&g.grid.rows>1;p&&!u?(v.classList.remove(`${g.containerModifierClass}grid`,`${g.containerModifierClass}grid-column`),d=1,e.emitContainerClasses()):!p&&u&&(v.classList.add(`${g.containerModifierClass}grid`),g.grid.fill==="column"&&v.classList.add(`${g.containerModifierClass}grid-column`),e.emitContainerClasses()),p=u};s("init",m),s("update",w),e.grid={initSlides:f,unsetSlides:o,updateSlide:l,updateWrapperSize:c}}function Bs(i){const e=this,{params:t,slidesEl:s}=e;t.loop&&e.loopDestroy();const r=n=>{if(typeof n=="string"){const d=document.createElement("div");d.innerHTML=n,s.append(d.children[0]),d.innerHTML=""}else s.append(n)};if(typeof i=="object"&&"length"in i)for(let n=0;n<i.length;n+=1)i[n]&&r(i[n]);else r(i);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update()}function Gs(i){const e=this,{params:t,activeIndex:s,slidesEl:r}=e;t.loop&&e.loopDestroy();let n=s+1;const d=p=>{if(typeof p=="string"){const a=document.createElement("div");a.innerHTML=p,r.prepend(a.children[0]),a.innerHTML=""}else r.prepend(p)};if(typeof i=="object"&&"length"in i){for(let p=0;p<i.length;p+=1)i[p]&&d(i[p]);n=s+i.length}else d(i);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),e.slideTo(n,0,!1)}function Hs(i,e){const t=this,{params:s,activeIndex:r,slidesEl:n}=t;let d=r;s.loop&&(d-=t.loopedSlides,t.loopDestroy(),t.recalcSlides());const p=t.slides.length;if(i<=0){t.prependSlide(e);return}if(i>=p){t.appendSlide(e);return}let a=d>i?d+1:d;const f=[];for(let o=p-1;o>=i;o-=1){const l=t.slides[o];l.remove(),f.unshift(l)}if(typeof e=="object"&&"length"in e){for(let o=0;o<e.length;o+=1)e[o]&&n.append(e[o]);a=d>i?d+e.length:d}else n.append(e);for(let o=0;o<f.length;o+=1)n.append(f[o]);t.recalcSlides(),s.loop&&t.loopCreate(),(!s.observer||t.isElement)&&t.update(),s.loop?t.slideTo(a+t.loopedSlides,0,!1):t.slideTo(a,0,!1)}function Rs(i){const e=this,{params:t,activeIndex:s}=e;let r=s;t.loop&&(r-=e.loopedSlides,e.loopDestroy());let n=r,d;if(typeof i=="object"&&"length"in i){for(let p=0;p<i.length;p+=1)d=i[p],e.slides[d]&&e.slides[d].remove(),d<n&&(n-=1);n=Math.max(n,0)}else d=i,e.slides[d]&&e.slides[d].remove(),d<n&&(n-=1),n=Math.max(n,0);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),t.loop?e.slideTo(n+e.loopedSlides,0,!1):e.slideTo(n,0,!1)}function Ns(){const i=this,e=[];for(let t=0;t<i.slides.length;t+=1)e.push(t);i.removeSlide(e)}function Fs(i){let{swiper:e}=i;Object.assign(e,{appendSlide:Bs.bind(e),prependSlide:Gs.bind(e),addSlide:Hs.bind(e),removeSlide:Rs.bind(e),removeAllSlides:Ns.bind(e)})}function Se(i){const{effect:e,swiper:t,on:s,setTranslate:r,setTransition:n,overwriteParams:d,perspective:p,recreateShadows:a,getEffectParams:f}=i;s("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),p&&p()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const l=d?d():{};Object.assign(t.params,l),Object.assign(t.originalParams,l)}),s("setTranslate",()=>{t.params.effect===e&&r()}),s("setTransition",(l,c)=>{t.params.effect===e&&n(c)}),s("transitionEnd",()=>{if(t.params.effect===e&&a){if(!f||!f().slideShadows)return;t.slides.forEach(l=>{l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>c.remove())}),a()}});let o;s("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(o=!0),requestAnimationFrame(()=>{o&&t.slides&&t.slides.length&&(r(),o=!1)}))})}function De(i,e){const t=he(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function qe(i){let{swiper:e,duration:t,transformElements:s,allSlides:r}=i;const{activeIndex:n}=e,d=p=>p.parentElement?p.parentElement:e.slides.filter(f=>f.shadowRoot&&f.shadowRoot===p.parentNode)[0];if(e.params.virtualTranslate&&t!==0){let p=!1,a;r?a=s:a=s.filter(f=>{const o=f.classList.contains("swiper-slide-transform")?d(f):f;return e.getSlideIndex(o)===n}),a.forEach(f=>{$e(f,()=>{if(p||!e||e.destroyed)return;p=!0,e.animating=!1;const o=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(o)})})}}function Xs(i){let{swiper:e,extendParams:t,on:s}=i;t({fadeEffect:{crossFade:!1}}),Se({effect:"fade",swiper:e,on:s,setTranslate:()=>{const{slides:d}=e,p=e.params.fadeEffect;for(let a=0;a<d.length;a+=1){const f=e.slides[a];let l=-f.swiperSlideOffset;e.params.virtualTranslate||(l-=e.translate);let c=0;e.isHorizontal()||(c=l,l=0);const m=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(f.progress),0):1+Math.min(Math.max(f.progress,-1),0),w=De(p,f);w.style.opacity=m,w.style.transform=`translate3d(${l}px, ${c}px, 0px)`}},setTransition:d=>{const p=e.slides.map(a=>he(a));p.forEach(a=>{a.style.transitionDuration=`${d}ms`}),qe({swiper:e,duration:d,transformElements:p,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Ys(i){let{swiper:e,extendParams:t,on:s}=i;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const r=(a,f,o)=>{let l=o?a.querySelector(".swiper-slide-shadow-left"):a.querySelector(".swiper-slide-shadow-top"),c=o?a.querySelector(".swiper-slide-shadow-right"):a.querySelector(".swiper-slide-shadow-bottom");l||(l=oe("div",`swiper-slide-shadow-cube swiper-slide-shadow-${o?"left":"top"}`.split(" ")),a.append(l)),c||(c=oe("div",`swiper-slide-shadow-cube swiper-slide-shadow-${o?"right":"bottom"}`.split(" ")),a.append(c)),l&&(l.style.opacity=Math.max(-f,0)),c&&(c.style.opacity=Math.max(f,0))};Se({effect:"cube",swiper:e,on:s,setTranslate:()=>{const{el:a,wrapperEl:f,slides:o,width:l,height:c,rtlTranslate:m,size:w,browser:g}=e,v=We(e),u=e.params.cubeEffect,b=e.isHorizontal(),h=e.virtual&&e.params.virtual.enabled;let y=0,T;u.shadow&&(b?(T=e.wrapperEl.querySelector(".swiper-cube-shadow"),T||(T=oe("div","swiper-cube-shadow"),e.wrapperEl.append(T)),T.style.height=`${l}px`):(T=a.querySelector(".swiper-cube-shadow"),T||(T=oe("div","swiper-cube-shadow"),a.append(T))));for(let A=0;A<o.length;A+=1){const _=o[A];let S=A;h&&(S=parseInt(_.getAttribute("data-swiper-slide-index"),10));let M=S*90,z=Math.floor(M/360);m&&(M=-M,z=Math.floor(-M/360));const E=Math.max(Math.min(_.progress,1),-1);let x=0,C=0,k=0;S%4===0?(x=-z*4*w,k=0):(S-1)%4===0?(x=0,k=-z*4*w):(S-2)%4===0?(x=w+z*4*w,k=w):(S-3)%4===0&&(x=-w,k=3*w+w*4*z),m&&(x=-x),b||(C=x,x=0);const G=`rotateX(${v(b?0:-M)}deg) rotateY(${v(b?M:0)}deg) translate3d(${x}px, ${C}px, ${k}px)`;E<=1&&E>-1&&(y=S*90+E*90,m&&(y=-S*90-E*90)),_.style.transform=G,u.slideShadows&&r(_,E,b)}if(f.style.transformOrigin=`50% 50% -${w/2}px`,f.style["-webkit-transform-origin"]=`50% 50% -${w/2}px`,u.shadow)if(b)T.style.transform=`translate3d(0px, ${l/2+u.shadowOffset}px, ${-l/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${u.shadowScale})`;else{const A=Math.abs(y)-Math.floor(Math.abs(y)/90)*90,_=1.5-(Math.sin(A*2*Math.PI/360)/2+Math.cos(A*2*Math.PI/360)/2),S=u.shadowScale,M=u.shadowScale/_,z=u.shadowOffset;T.style.transform=`scale3d(${S}, 1, ${M}) translate3d(0px, ${c/2+z}px, ${-c/2/M}px) rotateX(-89.99deg)`}const L=(g.isSafari||g.isWebView)&&g.needPerspectiveFix?-w/2:0;f.style.transform=`translate3d(0px,0,${L}px) rotateX(${v(e.isHorizontal()?0:y)}deg) rotateY(${v(e.isHorizontal()?-y:0)}deg)`,f.style.setProperty("--swiper-cube-translate-z",`${L}px`)},setTransition:a=>{const{el:f,slides:o}=e;if(o.forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${a}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const l=f.querySelector(".swiper-cube-shadow");l&&(l.style.transitionDuration=`${a}ms`)}},recreateShadows:()=>{const a=e.isHorizontal();e.slides.forEach(f=>{const o=Math.max(Math.min(f.progress,1),-1);r(f,o,a)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function ve(i,e,t){const s=`swiper-slide-shadow${t?`-${t}`:""}${i?` swiper-slide-shadow-${i}`:""}`,r=he(e);let n=r.querySelector(`.${s.split(" ").join(".")}`);return n||(n=oe("div",s.split(" ")),r.append(n)),n}function Ws(i){let{swiper:e,extendParams:t,on:s}=i;t({flipEffect:{slideShadows:!0,limitRotation:!0}});const r=(a,f)=>{let o=e.isHorizontal()?a.querySelector(".swiper-slide-shadow-left"):a.querySelector(".swiper-slide-shadow-top"),l=e.isHorizontal()?a.querySelector(".swiper-slide-shadow-right"):a.querySelector(".swiper-slide-shadow-bottom");o||(o=ve("flip",a,e.isHorizontal()?"left":"top")),l||(l=ve("flip",a,e.isHorizontal()?"right":"bottom")),o&&(o.style.opacity=Math.max(-f,0)),l&&(l.style.opacity=Math.max(f,0))};Se({effect:"flip",swiper:e,on:s,setTranslate:()=>{const{slides:a,rtlTranslate:f}=e,o=e.params.flipEffect,l=We(e);for(let c=0;c<a.length;c+=1){const m=a[c];let w=m.progress;e.params.flipEffect.limitRotation&&(w=Math.max(Math.min(m.progress,1),-1));const g=m.swiperSlideOffset;let u=-180*w,b=0,h=e.params.cssMode?-g-e.translate:-g,y=0;e.isHorizontal()?f&&(u=-u):(y=h,h=0,b=-u,u=0),m.style.zIndex=-Math.abs(Math.round(w))+a.length,o.slideShadows&&r(m,w);const T=`translate3d(${h}px, ${y}px, 0px) rotateX(${l(b)}deg) rotateY(${l(u)}deg)`,L=De(o,m);L.style.transform=T}},setTransition:a=>{const f=e.slides.map(o=>he(o));f.forEach(o=>{o.style.transitionDuration=`${a}ms`,o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(l=>{l.style.transitionDuration=`${a}ms`})}),qe({swiper:e,duration:a,transformElements:f})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(a=>{let f=a.progress;e.params.flipEffect.limitRotation&&(f=Math.max(Math.min(a.progress,1),-1)),r(a,f)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function qs(i){let{swiper:e,extendParams:t,on:s}=i;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Se({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:d,height:p,slides:a,slidesSizesGrid:f}=e,o=e.params.coverflowEffect,l=e.isHorizontal(),c=e.translate,m=l?-c+d/2:-c+p/2,w=l?o.rotate:-o.rotate,g=o.depth,v=We(e);for(let u=0,b=a.length;u<b;u+=1){const h=a[u],y=f[u],T=h.swiperSlideOffset,L=(m-T-y/2)/y,A=typeof o.modifier=="function"?o.modifier(L):L*o.modifier;let _=l?w*A:0,S=l?0:w*A,M=-g*Math.abs(A),z=o.stretch;typeof z=="string"&&z.indexOf("%")!==-1&&(z=parseFloat(o.stretch)/100*y);let E=l?0:z*A,x=l?z*A:0,C=1-(1-o.scale)*Math.abs(A);Math.abs(x)<.001&&(x=0),Math.abs(E)<.001&&(E=0),Math.abs(M)<.001&&(M=0),Math.abs(_)<.001&&(_=0),Math.abs(S)<.001&&(S=0),Math.abs(C)<.001&&(C=0);const k=`translate3d(${x}px,${E}px,${M}px)  rotateX(${v(S)}deg) rotateY(${v(_)}deg) scale(${C})`,G=De(o,h);if(G.style.transform=k,h.style.zIndex=-Math.abs(Math.round(A))+1,o.slideShadows){let P=l?h.querySelector(".swiper-slide-shadow-left"):h.querySelector(".swiper-slide-shadow-top"),I=l?h.querySelector(".swiper-slide-shadow-right"):h.querySelector(".swiper-slide-shadow-bottom");P||(P=ve("coverflow",h,l?"left":"top")),I||(I=ve("coverflow",h,l?"right":"bottom")),P&&(P.style.opacity=A>0?A:0),I&&(I.style.opacity=-A>0?-A:0)}}},setTransition:d=>{e.slides.map(a=>he(a)).forEach(a=>{a.style.transitionDuration=`${d}ms`,a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>{f.style.transitionDuration=`${d}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Us(i){let{swiper:e,extendParams:t,on:s}=i;t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const r=p=>typeof p=="string"?p:`${p}px`;Se({effect:"creative",swiper:e,on:s,setTranslate:()=>{const{slides:p,wrapperEl:a,slidesSizesGrid:f}=e,o=e.params.creativeEffect,{progressMultiplier:l}=o,c=e.params.centeredSlides,m=We(e);if(c){const w=f[0]/2-e.params.slidesOffsetBefore||0;a.style.transform=`translateX(calc(50% - ${w}px))`}for(let w=0;w<p.length;w+=1){const g=p[w],v=g.progress,u=Math.min(Math.max(g.progress,-o.limitProgress),o.limitProgress);let b=u;c||(b=Math.min(Math.max(g.originalProgress,-o.limitProgress),o.limitProgress));const h=g.swiperSlideOffset,y=[e.params.cssMode?-h-e.translate:-h,0,0],T=[0,0,0];let L=!1;e.isHorizontal()||(y[1]=y[0],y[0]=0);let A={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};u<0?(A=o.next,L=!0):u>0&&(A=o.prev,L=!0),y.forEach((C,k)=>{y[k]=`calc(${C}px + (${r(A.translate[k])} * ${Math.abs(u*l)}))`}),T.forEach((C,k)=>{let G=A.rotate[k]*Math.abs(u*l);T[k]=G}),g.style.zIndex=-Math.abs(Math.round(v))+p.length;const _=y.join(", "),S=`rotateX(${m(T[0])}deg) rotateY(${m(T[1])}deg) rotateZ(${m(T[2])}deg)`,M=b<0?`scale(${1+(1-A.scale)*b*l})`:`scale(${1-(1-A.scale)*b*l})`,z=b<0?1+(1-A.opacity)*b*l:1-(1-A.opacity)*b*l,E=`translate3d(${_}) ${S} ${M}`;if(L&&A.shadow||!L){let C=g.querySelector(".swiper-slide-shadow");if(!C&&A.shadow&&(C=ve("creative",g)),C){const k=o.shadowPerProgress?u*(1/o.limitProgress):u;C.style.opacity=Math.min(Math.max(Math.abs(k),0),1)}}const x=De(o,g);x.style.transform=E,x.style.opacity=z,A.origin&&(x.style.transformOrigin=A.origin)}},setTransition:p=>{const a=e.slides.map(f=>he(f));a.forEach(f=>{f.style.transitionDuration=`${p}ms`,f.querySelectorAll(".swiper-slide-shadow").forEach(o=>{o.style.transitionDuration=`${p}ms`})}),qe({swiper:e,duration:p,transformElements:a,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function Ks(i){let{swiper:e,extendParams:t,on:s}=i;t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),Se({effect:"cards",swiper:e,on:s,setTranslate:()=>{const{slides:d,activeIndex:p,rtlTranslate:a}=e,f=e.params.cardsEffect,{startTranslate:o,isTouched:l}=e.touchEventsData,c=a?-e.translate:e.translate;for(let m=0;m<d.length;m+=1){const w=d[m],g=w.progress,v=Math.min(Math.max(g,-4),4);let u=w.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(u-=d[0].swiperSlideOffset);let b=e.params.cssMode?-u-e.translate:-u,h=0;const y=-100*Math.abs(v);let T=1,L=-f.perSlideRotate*v,A=f.perSlideOffset-Math.abs(v)*.75;const _=e.virtual&&e.params.virtual.enabled?e.virtual.from+m:m,S=(_===p||_===p-1)&&v>0&&v<1&&(l||e.params.cssMode)&&c<o,M=(_===p||_===p+1)&&v<0&&v>-1&&(l||e.params.cssMode)&&c>o;if(S||M){const C=(1-Math.abs((Math.abs(v)-.5)/.5))**.5;L+=-28*v*C,T+=-.5*C,A+=96*C,h=`${-25*C*Math.abs(v)}%`}if(v<0?b=`calc(${b}px ${a?"-":"+"} (${A*Math.abs(v)}%))`:v>0?b=`calc(${b}px ${a?"-":"+"} (-${A*Math.abs(v)}%))`:b=`${b}px`,!e.isHorizontal()){const C=h;h=b,b=C}const z=v<0?`${1+(1-T)*v}`:`${1-(1-T)*v}`,E=`
        translate3d(${b}, ${h}, ${y}px)
        rotateZ(${f.rotate?a?-L:L:0}deg)
        scale(${z})
      `;if(f.slideShadows){let C=w.querySelector(".swiper-slide-shadow");C||(C=ve("cards",w)),C&&(C.style.opacity=Math.min(Math.max((Math.abs(v)-.5)/.5,0),1))}w.style.zIndex=-Math.abs(Math.round(g))+d.length;const x=De(f,w);x.style.transform=E}},setTransition:d=>{const p=e.slides.map(a=>he(a));p.forEach(a=>{a.style.transitionDuration=`${d}ms`,a.querySelectorAll(".swiper-slide-shadow").forEach(f=>{f.style.transitionDuration=`${d}ms`})}),qe({swiper:e,duration:d,transformElements:p})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const Zs=[Es,Ts,Ms,Cs,Ps,Is,_s,zs,Ls,ks,$s,As,js,Ds,Os,Vs,Fs,Xs,Ys,Ws,qs,Us,Ks];ne.use(Zs);const Ue=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ye(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"&&!i.__swiper__}function bt(i,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(s=>t.indexOf(s)<0).forEach(s=>{typeof i[s]>"u"?i[s]=e[s]:ye(e[s])&&ye(i[s])&&Object.keys(e[s]).length>0?e[s].__swiper__?i[s]=e[s]:bt(i[s],e[s]):i[s]=e[s]})}function Qs(i){return i===void 0&&(i={}),i.navigation&&typeof i.navigation.nextEl>"u"&&typeof i.navigation.prevEl>"u"}function Js(i){return i===void 0&&(i={}),i.pagination&&typeof i.pagination.el>"u"}function er(i){return i===void 0&&(i={}),i.scrollbar&&typeof i.scrollbar.el>"u"}function Ne(i){return i===void 0&&(i=""),i.replace(/-[a-z]/g,e=>e.toUpperCase().replace("-",""))}function tr(i){let{swiper:e,slides:t,passedParams:s,changedParams:r,nextEl:n,prevEl:d,scrollbarEl:p,paginationEl:a}=i;const f=r.filter(S=>S!=="children"&&S!=="direction"&&S!=="wrapperClass"),{params:o,pagination:l,navigation:c,scrollbar:m,virtual:w,thumbs:g}=e;let v,u,b,h,y,T,L,A;r.includes("thumbs")&&s.thumbs&&s.thumbs.swiper&&o.thumbs&&!o.thumbs.swiper&&(v=!0),r.includes("controller")&&s.controller&&s.controller.control&&o.controller&&!o.controller.control&&(u=!0),r.includes("pagination")&&s.pagination&&(s.pagination.el||a)&&(o.pagination||o.pagination===!1)&&l&&!l.el&&(b=!0),r.includes("scrollbar")&&s.scrollbar&&(s.scrollbar.el||p)&&(o.scrollbar||o.scrollbar===!1)&&m&&!m.el&&(h=!0),r.includes("navigation")&&s.navigation&&(s.navigation.prevEl||d)&&(s.navigation.nextEl||n)&&(o.navigation||o.navigation===!1)&&c&&!c.prevEl&&!c.nextEl&&(y=!0);const _=S=>{e[S]&&(e[S].destroy(),S==="navigation"?(e.isElement&&(e[S].prevEl.remove(),e[S].nextEl.remove()),o[S].prevEl=void 0,o[S].nextEl=void 0,e[S].prevEl=void 0,e[S].nextEl=void 0):(e.isElement&&e[S].el.remove(),o[S].el=void 0,e[S].el=void 0))};r.includes("loop")&&e.isElement&&(o.loop&&!s.loop?T=!0:!o.loop&&s.loop?L=!0:A=!0),f.forEach(S=>{if(ye(o[S])&&ye(s[S]))Object.assign(o[S],s[S]),(S==="navigation"||S==="pagination"||S==="scrollbar")&&"enabled"in s[S]&&!s[S].enabled&&_(S);else{const M=s[S];(M===!0||M===!1)&&(S==="navigation"||S==="pagination"||S==="scrollbar")?M===!1&&_(S):o[S]=s[S]}}),f.includes("controller")&&!u&&e.controller&&e.controller.control&&o.controller&&o.controller.control&&(e.controller.control=o.controller.control),r.includes("children")&&t&&w&&o.virtual.enabled?(w.slides=t,w.update(!0)):r.includes("virtual")&&w&&o.virtual.enabled&&(t&&(w.slides=t),w.update(!0)),r.includes("children")&&t&&o.loop&&(A=!0),v&&g.init()&&g.update(!0),u&&(e.controller.control=o.controller.control),b&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),e.el.appendChild(a)),a&&(o.pagination.el=a),l.init(),l.render(),l.update()),h&&(e.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-scrollbar"),p.part.add("scrollbar"),e.el.appendChild(p)),p&&(o.scrollbar.el=p),m.init(),m.updateSize(),m.setTranslate()),y&&(e.isElement&&((!n||typeof n=="string")&&(n=document.createElement("div"),n.classList.add("swiper-button-next"),n.innerHTML=e.hostEl.constructor.nextButtonSvg,n.part.add("button-next"),e.el.appendChild(n)),(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-button-prev"),d.innerHTML=e.hostEl.constructor.prevButtonSvg,d.part.add("button-prev"),e.el.appendChild(d))),n&&(o.navigation.nextEl=n),d&&(o.navigation.prevEl=d),c.init(),c.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=s.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=s.allowSlidePrev),r.includes("direction")&&e.changeDirection(s.direction,!1),(T||A)&&e.loopDestroy(),(L||A)&&e.loopCreate(),e.update()}const At=i=>{if(parseFloat(i)===Number(i))return Number(i);if(i==="true"||i==="")return!0;if(i==="false")return!1;if(i==="null")return null;if(i!=="undefined"){if(typeof i=="string"&&i.includes("{")&&i.includes("}")&&i.includes('"')){let e;try{e=JSON.parse(i)}catch{e=i}return e}return i}},jt=["a11y","autoplay","controller","cards-effect","coverflow-effect","creative-effect","cube-effect","fade-effect","flip-effect","free-mode","grid","hash-navigation","history","keyboard","mousewheel","navigation","pagination","parallax","scrollbar","thumbs","virtual","zoom"];function Dt(i,e,t){const s={},r={};bt(s,ht);const n=[...Ue,"on"],d=n.map(a=>a.replace(/_/,""));n.forEach(a=>{a=a.replace("_",""),typeof i[a]<"u"&&(r[a]=i[a])});const p=[...i.attributes];return typeof e=="string"&&typeof t<"u"&&p.push({name:e,value:ye(t)?{...t}:t}),p.forEach(a=>{const f=jt.filter(o=>a.name.indexOf(`${o}-`)===0)[0];if(f){const o=Ne(f),l=Ne(a.name.split(`${f}-`)[1]);typeof r[o]>"u"&&(r[o]={}),r[o]===!0&&(r[o]={enabled:!0}),r[o][l]=At(a.value)}else{const o=Ne(a.name);if(!d.includes(o))return;const l=At(a.value);r[o]&&jt.includes(a.name)&&!ye(l)?(r[o].constructor!==Object&&(r[o]={}),r[o].enabled=!!l):r[o]=l}}),bt(s,r),s.navigation?s.navigation={prevEl:".swiper-button-prev",nextEl:".swiper-button-next",...s.navigation!==!0?s.navigation:{}}:s.navigation===!1&&delete s.navigation,s.scrollbar?s.scrollbar={el:".swiper-scrollbar",...s.scrollbar!==!0?s.scrollbar:{}}:s.scrollbar===!1&&delete s.scrollbar,s.pagination?s.pagination={el:".swiper-pagination",...s.pagination!==!0?s.pagination:{}}:s.pagination===!1&&delete s.pagination,{params:s,passedParams:r}}const ir=":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}",sr="::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";class rr{}const Ut=typeof window>"u"||typeof HTMLElement>"u"?rr:HTMLElement,Ot=`<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `,Kt=(i,e)=>{if(typeof CSSStyleSheet<"u"&&i.adoptedStyleSheets){const t=new CSSStyleSheet;t.replaceSync(e),i.adoptedStyleSheets=[t]}else{const t=document.createElement("style");t.rel="stylesheet",t.textContent=e,i.appendChild(t)}};class Zt extends Ut{constructor(){super(),this.attachShadow({mode:"open"})}static get nextButtonSvg(){return Ot}static get prevButtonSvg(){return Ot.replace("/></svg>",' transform-origin="center" transform="rotate(180)"/></svg>')}cssStyles(){return[ir,...this.injectStyles&&Array.isArray(this.injectStyles)?this.injectStyles:[]].join(`
`)}cssLinks(){return this.injectStylesUrls||[]}calcSlideSlots(){const e=this.slideSlots||0,t=[...this.querySelectorAll("[slot^=slide-]")].map(s=>parseInt(s.getAttribute("slot").split("slide-")[1],10));if(this.slideSlots=t.length?Math.max(...t)+1:0,!!this.rendered){if(this.slideSlots>e)for(let s=e;s<this.slideSlots;s+=1){const r=document.createElement("swiper-slide");r.setAttribute("part",`slide slide-${s+1}`);const n=document.createElement("slot");n.setAttribute("name",`slide-${s+1}`),r.appendChild(n),this.shadowRoot.querySelector(".swiper-wrapper").appendChild(r)}else if(this.slideSlots<e){const s=this.swiper.slides;for(let r=s.length-1;r>=0;r-=1)r>this.slideSlots&&s[r].remove()}}}render(){if(this.rendered)return;this.calcSlideSlots();let e=this.cssStyles();this.slideSlots>0&&(e=e.replace(/::slotted\(([a-z-0-9.]*)\)/g,"$1")),e.length&&Kt(this.shadowRoot,e),this.cssLinks().forEach(s=>{if(this.shadowRoot.querySelector(`link[href="${s}"]`))return;const n=document.createElement("link");n.rel="stylesheet",n.href=s,this.shadowRoot.appendChild(n)});const t=document.createElement("div");t.classList.add("swiper"),t.part="container",t.innerHTML=`
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({length:this.slideSlots}).map((s,r)=>`
        <swiper-slide part="slide slide-${r}">
          <slot name="slide-${r}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${Qs(this.passedParams)?`
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      `:""}
      ${Js(this.passedParams)?`
        <div part="pagination" class="swiper-pagination"></div>
      `:""}
      ${er(this.passedParams)?`
        <div part="scrollbar" class="swiper-scrollbar"></div>
      `:""}
    `,this.shadowRoot.appendChild(t),this.rendered=!0}initialize(){var e=this;if(this.initialized)return;this.initialized=!0;const{params:t,passedParams:s}=Dt(this);this.swiperParams=t,this.passedParams=s,delete this.swiperParams.init,this.render(),this.swiper=new ne(this.shadowRoot.querySelector(".swiper"),{...t.virtual?{}:{observer:!0},...t,touchEventsTarget:"container",onAny:function(r){r==="observerUpdate"&&e.calcSlideSlots();const n=t.eventsPrefix?`${t.eventsPrefix}${r.toLowerCase()}`:r.toLowerCase();for(var d=arguments.length,p=new Array(d>1?d-1:0),a=1;a<d;a++)p[a-1]=arguments[a];const f=new CustomEvent(n,{detail:p,bubbles:r!=="hashChange",cancelable:!0});e.dispatchEvent(f)}})}connectedCallback(){this.initialized&&this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||this.init===!1||this.getAttribute("init")==="false"||this.initialize()}disconnectedCallback(){this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||(this.swiper&&this.swiper.destroy&&this.swiper.destroy(),this.initialized=!1)}updateSwiperOnPropChange(e,t){const{params:s,passedParams:r}=Dt(this,e,t);this.passedParams=r,this.swiperParams=s,!(this.swiper&&this.swiper.params[e]===t)&&tr({swiper:this.swiper,passedParams:this.passedParams,changedParams:[Ne(e)],...e==="navigation"&&r[e]?{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}:{},...e==="pagination"&&r[e]?{paginationEl:".swiper-pagination"}:{},...e==="scrollbar"&&r[e]?{scrollbarEl:".swiper-scrollbar"}:{}})}attributeChangedCallback(e,t,s){this.initialized&&(t==="true"&&s===null&&(s=!1),this.updateSwiperOnPropChange(e,s))}static get observedAttributes(){return Ue.filter(t=>t.includes("_")).map(t=>t.replace(/[A-Z]/g,s=>`-${s}`).replace("_","").toLowerCase())}}Ue.forEach(i=>{i!=="init"&&(i=i.replace("_",""),Object.defineProperty(Zt.prototype,i,{configurable:!0,get(){return(this.passedParams||{})[i]},set(e){this.passedParams||(this.passedParams={}),this.passedParams[i]=e,this.initialized&&this.updateSwiperOnPropChange(i,e)}}))});class nr extends Ut{constructor(){super(),this.attachShadow({mode:"open"})}render(){const e=this.lazy||this.getAttribute("lazy")===""||this.getAttribute("lazy")==="true";if(Kt(this.shadowRoot,sr),this.shadowRoot.appendChild(document.createElement("slot")),e){const t=document.createElement("div");t.classList.add("swiper-lazy-preloader"),t.part.add("preloader"),this.shadowRoot.appendChild(t)}}initialize(){this.render()}connectedCallback(){this.initialize()}}const ie=()=>{typeof window>"u"||(window.customElements.get("swiper-container")||window.customElements.define("swiper-container",Zt),window.customElements.get("swiper-slide")||window.customElements.define("swiper-slide",nr))};typeof window<"u"&&(window.SwiperElementRegisterParams=i=>{Ue.push(...i)});const ar={class:"swiper-virtual"},or=["slides"],lr={class:"text-secondary"},pr={class:"d-flex justify-center gap-4 flex-wrap"},dr=ee({__name:"DemoSwiperVirtualSlides",setup(i){ie();const e=Array.from({length:500},(a,f)=>`Slides ${f+1}`),t=at(null),s=at(1),r=at(500),n=a=>{var f;(f=t.value)==null||f.swiper.slideTo(a-1)},d=()=>{var a;(a=t.value)==null||a.swiper.prependSlide([`<swiper-slide>Slide ${--s.value} </swiper-slide>`,`<swiper-slide>Slide ${--s.value} </swiper-slide>`])},p=()=>{var a;(a=t.value)==null||a.swiper.appendSlide([`<swiper-slide>Slide ${++r.value} </swiper-slide>`])};return(a,f)=>(R(),N("section",ar,[pe("swiper-container",{ref_key:"swiperEl",ref:t,virtual:"true",slides:$(e),navigation:"true","slides-per-view":"5","space-between":"50","free-mode":"true","events-prefix":"swiper-",breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},[(R(!0),N(K,null,J($(e),(o,l)=>(R(),N("swiper-slide",{key:l},[pe("div",lr,yt(o),1)]))),128))],8,or),pe("div",pr,[O(Pe,{variant:"outlined",color:"primary",onClick:Ce(d,["prevent"])},{default:X(()=>[Me(" Prepend 2 Slides ")]),_:1}),O(Pe,{variant:"outlined",color:"primary",onClick:f[0]||(f[0]=Ce(o=>n(1),["prevent"]))},{default:X(()=>[Me(" Slide 1 ")]),_:1}),O(Pe,{variant:"outlined",color:"primary",onClick:f[1]||(f[1]=Ce(o=>n(250),["prevent"]))},{default:X(()=>[Me(" Slide 250 ")]),_:1}),O(Pe,{variant:"outlined",color:"primary",onClick:f[2]||(f[2]=Ce(o=>n(500),["prevent"]))},{default:X(()=>[Me(" Slide 500 ")]),_:1}),O(Pe,{variant:"outlined",color:"primary",onClick:Ce(p,["prevent"])},{default:X(()=>[Me(" Append Slide ")]),_:1})])]))}}),Ke="/build/assets/banner-31-D6mS0gQn.jpg",Oe="/build/assets/banner-32-B8kg_gZc.jpg",Ze="/build/assets/banner-33-DfQ0Urdo.jpg",Qe="/build/assets/banner-34-CMWn1p69.jpg",Je="/build/assets/banner-35-avrf_yoA.jpg",Qt="/build/assets/banner-36-BiLQv0qP.jpg",Jt="/build/assets/banner-37-CxyHDUrj.jpg",ei="/build/assets/5-CFPERer_.jpg",Ye="/build/assets/banner-39-D9mpewKd.jpg",cr={"pagination-clickable":"true","slides-per-view":"5","space-between":"50","events-prefix":"swiper-",breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},fr=ee({__name:"DemoSwiperResponsiveBreakpoints",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",cr,[(R(!0),N(K,null,J([$(Ke),$(Oe),$(Ze),$(Qe),$(Je),$(Qt),$(Jt),$(ei),$(Ye)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s},null,8,["src"])]))),128))]))}}),Ve="/build/assets/banner-20-D60huBoA.jpg",et="/build/assets/banner-4-EPycabrm.jpg",ti="/build/assets/banner-5-DVgdLDIC.jpg",xe="/build/assets/banner-7-C3Ec249A.jpg",tt="/build/assets/banner-8-CS7lrdd8.jpg",Et="/build/assets/banner-9-CN54Uf8b.jpg",ur={"pagination-clickable":"true",autoplay:"true",navigation:"true","events-prefix":"swiper-"},mr=ee({__name:"DemoSwiperLazyLoading",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",ur,[(R(!0),N(K,null,J([$(et),$(ti),$(Et),$(xe),$(tt),$(Ve)],s=>(R(),N("swiper-slide",{key:s,lazy:"true"},[O(re,{src:s,cover:"",loading:"lazy"},null,8,["src"])]))),128))]))}}),ze="/build/assets/banner-11-ClWmypCi.jpg",Le="/build/assets/6-C2cDgitj.jpg",ke="/build/assets/banner-13-Cforbb5S.jpg",Vt="/build/assets/banner-15-DVoX7is_.jpg",vt="/build/assets/banner-16-BBt3y7wv.jpg",wr={class:"mySwiper","thumbs-swiper":".mySwiper2",loop:"true","space-between":"10",navigation:"true","centered-slides":"true","events-prefix":"swiper-"},gr={class:"mySwiper2",loop:"true","free-mode":"true","events-prefix":"swiper-","slides-per-view":"4"},hr=ee({__name:"DemoSwiperGallery",setup(i){return ie(),(e,t)=>(R(),N(K,null,[pe("swiper-container",wr,[(R(!0),N(K,null,J([$(ze),$(Le),$(ke),$(Vt),$(vt),$(ze),$(Le),$(ke)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s,cover:""},null,8,["src"])]))),128))]),pe("swiper-container",gr,[(R(!0),N(K,null,J([$(ze),$(Le),$(ke),$(Vt),$(vt),$(ze),$(Le),$(ke)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s,cover:""},null,8,["src"])]))),128))])],64))}}),br=je(hr,[["__scopeId","data-v-c40556ae"]]),vr="/build/assets/banner-10-C2w4rcW8.jpg",yr={pagination:"true",navigation:"true",autoplay:"true","centered-slides":"true","events-prefix":"swiper-"},Sr=ee({__name:"DemoSwiperAutoplay",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",yr,[(R(!0),N(K,null,J([$(xe),$(tt),$(Et),$(vr),$(ze),$(Ve)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s,cover:""},null,8,["src"])]))),128))]))}}),xr={pagination:"true",effect:"coverflow","grab-cursor":"true","centered-slides":"true","slides-per-view":"auto","coverflow-effect-rotate":"50","coverflow-effect-stretch":"0","coverflow-effect-depth":"100","coverflow-effect-modifier":"1","coverflow-effect-slide-shadows":"true","events-prefix":"swiper-"},Er=ee({__name:"DemoSwiperCoverflowEffect",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",xr,[(R(!0),N(K,null,J([$(Ke),$(Oe),$(Ze),$(Qe),$(Je),$(Qt),$(Jt),$(ei),$(Ye)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s},null,8,["src"])]))),128))]))}}),Tr=je(Er,[["__scopeId","data-v-7101afac"]]),Mr="/build/assets/banner-21-BbDBzY5j.jpg",Cr="/build/assets/banner-23-eu_41WqH.jpg",Pr="/build/assets/banner-24-BNOF4zrU.jpg",Ir={pagination:"true","centered-slides":"true",effect:"cube","grab-cursor":"true","cube-effect-shadow":"true","cube-effect-slide-shadows":"true","cube-effect-shadow-scale":"0.94","events-prefix":"swiper-"},_r=ee({__name:"DemoSwiperCubeEffect",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",Ir,[(R(!0),N(K,null,J([$(Mr),$(Oe),$(Cr),$(Pr)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s},null,8,["src"])]))),128))]))}}),zr=je(_r,[["__scopeId","data-v-9cdf68f6"]]),Lr="/build/assets/banner-17-vuA5wUeU.jpg",kr="/build/assets/banner-18-rnuWLp8J.jpg",$r="/build/assets/banner-19-DKrHObKZ.jpg",Ar={"space-between":"30",pagination:"true",navigation:"true",effect:"fade","events-prefix":"swiper-"},jr=ee({__name:"DemoSwiperFade",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",Ar,[(R(!0),N(K,null,J([$(Ve),$($r),$(kr),$(Lr),$(vt)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s},null,8,["src"])]))),128))]))}}),Dr={"centered-slides":"true","space-between":"30","slides-per-view":"1","events-prefix":"swiper-",breakpoints:{992:{slidesPerView:4,spaceBetween:30},780:{slidesPerView:3,spaceBetween:30},460:{slidesPerView:2,spaceBetween:20}}},Or={class:"d-flex align-center gap-x-3"},Vr={class:"font-weight-medium"},Br=ee({__name:"DemoSwiperCenteredSlidesOption2",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",Dr,[(R(),N(K,null,J([{icon:"tabler-brand-github",text:"Getting Started"},{icon:"tabler-brand-facebook",text:"Pricing & Plans"},{icon:"tabler-brand-twitter",text:"Sales Question"},{icon:"tabler-brand-instagram",text:"Usage Guidelines"},{icon:"tabler-brand-gitlab",text:"General Guide"}],({icon:s,text:r})=>pe("swiper-slide",{key:r},[O(Rt,{class:"bg-default"},{default:X(()=>[O(Ht,null,{default:X(()=>[pe("div",Or,[O(Gt,{icon:s,size:"28"},null,8,["icon"]),pe("span",Vr,yt(r),1)])]),_:2},1024)]),_:2},1024)])),64))]))}}),Gr=je(Br,[["__scopeId","data-v-44f355ae"]]),Hr={class:"swiper-centered-slide"},Rr={navigation:"true","centered-slides":"true","space-between":"30","slides-per-view":"1","events-prefix":"swiper-",injectStyles:[`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        `],breakpoints:{992:{slidesPerView:4,spaceBetween:30},780:{slidesPerView:3,spaceBetween:30},460:{slidesPerView:2,spaceBetween:20}}},Nr={class:"d-flex flex-column align-center gap-y-3"},Fr={class:"text-high-emphasis"},Xr=ee({__name:"DemoSwiperCenteredSlidesOption1",setup(i){return ie(),(e,t)=>(R(),N("div",Hr,[pe("swiper-container",Rr,[(R(),N(K,null,J([{icon:"tabler-brand-github",text:"Getting Started"},{icon:"tabler-brand-facebook",text:"Pricing & Plans"},{icon:"tabler-brand-twitter",text:"Sales Question"},{icon:"tabler-brand-instagram",text:"Usage Guidelines"},{icon:"tabler-brand-gitlab",text:"General Guide"}],({icon:s,text:r})=>pe("swiper-slide",{key:r},[O(Rt,null,{default:X(()=>[O(Ht,null,{default:X(()=>[pe("div",Nr,[O(Gt,{icon:s,size:"28"},null,8,["icon"]),pe("span",Fr,yt(r),1)])]),_:2},1024)]),_:2},1024)])),64))])]))}}),Yr=je(Xr,[["__scopeId","data-v-b68182c5"]]),Bt="/build/assets/banner-26-Co29d348.jpg",Wr="/build/assets/banner-28-BavDZX16.jpg",qr="/build/assets/banner-29-Bw5q4Gpe.jpg",Ur="/build/assets/banner-30-BcnSNmsG.jpg",Kr={"slides-per-view":"4","grid-fill":"rows","space-between":"30","grid-rows":"2","pagination-clickable":"true","events-prefix":"swiper-"},Zr=ee({__name:"DemoSwiperGrid",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",Kr,[(R(!0),N(K,null,J([$(Bt),$(Ye),$(Wr),$(qr),$(Ur),$(Ke),$(Oe),$(Ze),$(Qe),$(Je),$(Bt),$(Ye)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s},null,8,["src"])]))),128))]))}}),Qr={pagination:"true","slides-per-view":"3","space-between":"25","events-prefix":"swiper-"},Jr=ee({__name:"DemoSwiperMultipleSlidesPerView",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",Qr,[(R(!0),N(K,null,J([$(Ke),$(Oe),$(Ze),$(Qe),$(Je)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s},null,8,["src"])]))),128))]))}}),en={navigation:"true","pagination-type":"progressbar","events-prefix":"swiper-"},tn=ee({__name:"DemoSwiperProgress",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",en,[(R(!0),N(K,null,J([$(tt),$(xe),$(Ve),$(et),$(ti)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s},null,8,["src"])]))),128))]))}}),sn={pagination:"true","events-prefix":"swiper-"},rn=ee({__name:"DemoSwiperPagination",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",sn,[(R(!0),N(K,null,J([$(Le),$(Et),$(tt),$(xe),$(Ve)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s},null,8,["src"])]))),128))]))}}),nn="/build/assets/banner-14-bNfFS-GU.jpg",ii="/build/assets/banner-2-SWMk04gr.jpg",an="/build/assets/banner-3-S5UpPGOJ.jpg",on={navigation:"true","events-prefix":"swiper-"},ln=ee({__name:"DemoSwiperNavigation",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",on,[(R(!0),N(K,null,J([$(xe),$(et),$(nn),$(an),$(ii)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s},null,8,["src"])]))),128))]))}}),pn="/build/assets/banner-1-rgqr7rAW.jpg",dn={"events-prefix":"swiper-"},cn=ee({__name:"DemoSwiperBasic",setup(i){return ie(),(e,t)=>(R(),N("swiper-container",dn,[(R(!0),N(K,null,J([$(pn),$(ii),$(et),$(xe),$(ke)],s=>(R(),N("swiper-slide",{key:s},[O(re,{src:s},null,8,["src"])]))),128))]))}}),fn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper10 from '@images/banner/banner-10.jpg'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    navigation="true"
    autoplay="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in
        [
          swiper7,
          swiper8,
          swiper9,
          swiper10,
          swiper11,
          swiper20,
        ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper10 from '@images/banner/banner-10.jpg'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    navigation="true"
    autoplay="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in
        [
          swiper7,
          swiper8,
          swiper9,
          swiper10,
          swiper11,
          swiper20,
        ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>
`},un={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper1 from '@images/banner/banner-1.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container events-prefix="swiper-">
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper4,
        swiper7,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper1 from '@images/banner/banner-1.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container events-prefix="swiper-">
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper4,
        swiper7,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},mn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="swiper-centered-slide">
    <swiper-container
      navigation="true"
      centered-slides="true"
      space-between="30"
      slides-per-view="1"
      events-prefix="swiper-"
      :injectStyles="[
        \`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        \`,
      ]"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        v-for="{ icon, text } in [
          { icon: 'tabler-brand-github', text: 'Getting Started' },
          { icon: 'tabler-brand-facebook', text: 'Pricing & Plans' },
          { icon: 'tabler-brand-twitter', text: 'Sales Question' },
          { icon: 'tabler-brand-instagram', text: 'Usage Guidelines' },
          { icon: 'tabler-brand-gitlab', text: 'General Guide' },
        ]"
        :key="text"
      >
        <VCard>
          <VCardText>
            <div class="d-flex flex-column align-center gap-y-3">
              <VIcon
                :icon="icon"
                size="28"
              />
              <span class="text-high-emphasis">{{ text }}</span>
            </div>
          </VCardText>
        </VCard>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));

      .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="swiper-centered-slide">
    <swiper-container
      navigation="true"
      centered-slides="true"
      space-between="30"
      slides-per-view="1"
      events-prefix="swiper-"
      :injectStyles="[
        \`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        \`,
      ]"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        v-for="{ icon, text } in [
          { icon: 'tabler-brand-github', text: 'Getting Started' },
          { icon: 'tabler-brand-facebook', text: 'Pricing & Plans' },
          { icon: 'tabler-brand-twitter', text: 'Sales Question' },
          { icon: 'tabler-brand-instagram', text: 'Usage Guidelines' },
          { icon: 'tabler-brand-gitlab', text: 'General Guide' },
        ]"
        :key="text"
      >
        <VCard>
          <VCardText>
            <div class="d-flex flex-column align-center gap-y-3">
              <VIcon
                :icon="icon"
                size="28"
              />
              <span class="text-high-emphasis">{{ text }}</span>
            </div>
          </VCardText>
        </VCard>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));

      .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }
}
</style>
`},wn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <swiper-container
    centered-slides="true"
    space-between="30"
    slides-per-view="1"
    events-prefix="swiper-"
    :breakpoints="{
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }"
  >
    <swiper-slide
      v-for="{ icon, text } in [
        { icon: 'tabler-brand-github', text: 'Getting Started' },
        { icon: 'tabler-brand-facebook', text: 'Pricing & Plans' },
        { icon: 'tabler-brand-twitter', text: 'Sales Question' },
        { icon: 'tabler-brand-instagram', text: 'Usage Guidelines' },
        { icon: 'tabler-brand-gitlab', text: 'General Guide' },
      ]"
      :key="text"
    >
      <VCard class="bg-default">
        <VCardText>
          <div class="d-flex align-center gap-x-3">
            <VIcon
              :icon="icon"
              size="28"
            />
            <span class="font-weight-medium">{{ text }}</span>
          </div>
        </VCardText>
      </VCard>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <swiper-container
    centered-slides="true"
    space-between="30"
    slides-per-view="1"
    events-prefix="swiper-"
    :breakpoints="{
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }"
  >
    <swiper-slide
      v-for="{ icon, text } in [
        { icon: 'tabler-brand-github', text: 'Getting Started' },
        { icon: 'tabler-brand-facebook', text: 'Pricing & Plans' },
        { icon: 'tabler-brand-twitter', text: 'Sales Question' },
        { icon: 'tabler-brand-instagram', text: 'Usage Guidelines' },
        { icon: 'tabler-brand-gitlab', text: 'General Guide' },
      ]"
      :key="text"
    >
      <VCard class="bg-default">
        <VCardText>
          <div class="d-flex align-center gap-x-3">
            <VIcon
              :icon="icon"
              size="28"
            />
            <span class="font-weight-medium">{{ text }}</span>
          </div>
        </VCardText>
      </VCard>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }
  }
}
</style>
`},gn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    effect="coverflow"
    grab-cursor="true"
    centered-slides="true"
    slides-per-view="auto"
    coverflow-effect-rotate="50"
    coverflow-effect-stretch="0"
    coverflow-effect-depth="100"
    coverflow-effect-modifier="1"
    coverflow-effect-slide-shadows="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 300px;
  inline-size: 300px;
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    effect="coverflow"
    grab-cursor="true"
    centered-slides="true"
    slides-per-view="auto"
    coverflow-effect-rotate="50"
    coverflow-effect-stretch="0"
    coverflow-effect-depth="100"
    coverflow-effect-modifier="1"
    coverflow-effect-slide-shadows="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 300px;
  inline-size: 300px;
}
</style>
`},hn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper21 from '@images/banner/banner-21.jpg'
import swiper23 from '@images/banner/banner-23.jpg'
import swiper24 from '@images/banner/banner-24.jpg'
import swiper32 from '@images/banner/banner-32.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    centered-slides="true"
    effect="cube"
    grab-cursor="true"
    cube-effect-shadow="true"
    cube-effect-slide-shadows="true"
    cube-effect-shadow-scale="0.94"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper21,
        swiper32,
        swiper23,
        swiper24,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 250px;
  inline-size: 250px;
}

swiper-container {
  margin: auto;
  block-size: 250px;
  inline-size: 250px;
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper21 from '@images/banner/banner-21.jpg'
import swiper23 from '@images/banner/banner-23.jpg'
import swiper24 from '@images/banner/banner-24.jpg'
import swiper32 from '@images/banner/banner-32.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    centered-slides="true"
    effect="cube"
    grab-cursor="true"
    cube-effect-shadow="true"
    cube-effect-slide-shadows="true"
    cube-effect-shadow-scale="0.94"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper21,
        swiper32,
        swiper23,
        swiper24,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 250px;
  inline-size: 250px;
}

swiper-container {
  margin: auto;
  block-size: 250px;
  inline-size: 250px;
}
</style>
`},bn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper16 from '@images/banner/banner-16.jpg'
import swiper17 from '@images/banner/banner-17.jpg'
import swiper18 from '@images/banner/banner-18.jpg'
import swiper19 from '@images/banner/banner-19.jpg'
import swiper20 from '@images/banner/banner-20.jpg'

register()
<\/script>

<template>
  <swiper-container
    space-between="30"
    pagination="true"
    navigation="true"
    effect="fade"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper20,
        swiper19,
        swiper18,
        swiper17,
        swiper16,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper16 from '@images/banner/banner-16.jpg'
import swiper17 from '@images/banner/banner-17.jpg'
import swiper18 from '@images/banner/banner-18.jpg'
import swiper19 from '@images/banner/banner-19.jpg'
import swiper20 from '@images/banner/banner-20.jpg'

register()
<\/script>

<template>
  <swiper-container
    space-between="30"
    pagination="true"
    navigation="true"
    effect="fade"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper20,
        swiper19,
        swiper18,
        swiper17,
        swiper16,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},vn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper11 from '@images/banner/banner-11.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper15 from '@images/banner/banner-15.jpg'
import swiper16 from '@images/banner/banner-16.jpg'

register()
<\/script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    loop="true"
    space-between="10"
    navigation="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,

      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    loop="true"
    free-mode="true"
    events-prefix="swiper-"
    slides-per-view="4"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: #000;
}

.mySwiper2 {
  swiper-slide {
    border: 5px solid black;
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper15 from '@images/banner/banner-15.jpg'
import swiper16 from '@images/banner/banner-16.jpg'

register()
<\/script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    loop="true"
    space-between="10"
    navigation="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,

      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    loop="true"
    free-mode="true"
    events-prefix="swiper-"
    slides-per-view="4"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: #000;
}

.mySwiper2 {
  swiper-slide {
    border: 5px solid black;
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
`},yn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper26 from '@images/banner/banner-26.jpg'
import swiper28 from '@images/banner/banner-28.jpg'
import swiper29 from '@images/banner/banner-29.jpg'
import swiper30 from '@images/banner/banner-30.jpg'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    slides-per-view="4"
    grid-fill="rows"
    space-between="30"
    grid-rows="2"
    pagination-clickable="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper26,
        swiper39,
        swiper28,
        swiper29,
        swiper30,
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper26,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper26 from '@images/banner/banner-26.jpg'
import swiper28 from '@images/banner/banner-28.jpg'
import swiper29 from '@images/banner/banner-29.jpg'
import swiper30 from '@images/banner/banner-30.jpg'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    slides-per-view="4"
    grid-fill="rows"
    space-between="30"
    grid-rows="2"
    pagination-clickable="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper26,
        swiper39,
        swiper28,
        swiper29,
        swiper30,
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper26,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Sn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    autoplay="true"
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper4,
        swiper5,
        swiper9,
        swiper7,
        swiper8,
        swiper20,
      ]"
      :key="swiperImg"
      lazy="true"
    >
      <VImg
        :src="swiperImg"
        cover
        loading="lazy"
      />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    autoplay="true"
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper4,
        swiper5,
        swiper9,
        swiper7,
        swiper8,
        swiper20,
      ]"
      :key="swiperImg"
      lazy="true"
    >
      <VImg
        :src="swiperImg"
        cover
        loading="lazy"
      />
    </swiper-slide>
  </swiper-container>
</template>
`},xn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    slides-per-view="3"
    space-between="25"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    slides-per-view="3"
    space-between="25"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},En={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper14 from '@images/banner/banner-14.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper3 from '@images/banner/banner-3.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper7,
        swiper4,
        swiper14,
        swiper3,
        swiper2,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper14 from '@images/banner/banner-14.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper3 from '@images/banner/banner-3.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper7,
        swiper4,
        swiper14,
        swiper3,
        swiper2,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Tn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

import swiper12 from '@images/banner/banner-12.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper12,
        swiper9,
        swiper8,
        swiper7,
        swiper20,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper12,
        swiper9,
        swiper8,
        swiper7,
        swiper20,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Mn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper8 from '@images/banner/banner-8.jpg'

import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    pagination-type="progressbar"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper8,
        swiper7,
        swiper20,
        swiper4,
        swiper5,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    pagination-type="progressbar"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper8,
        swiper7,
        swiper20,
        swiper4,
        swiper5,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Cn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    slides-per-view="5"
    space-between="50"
    events-prefix="swiper-"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    slides-per-view="5"
    space-between="50"
    events-prefix="swiper-"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Pn={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()

const slides = Array.from({ length: 500 }, (_, index) => \`Slides \${index + 1}\`)
const swiperEl = ref<any>(null)
const prependNumber = ref(1)
const appendNumber = ref(500)

const toSlide = (index: number) => {
  swiperEl.value?.swiper.slideTo(index - 1)
}

const prependSlide = () => {
  swiperEl.value?.swiper.prependSlide([
    \`<swiper-slide>Slide \${(--prependNumber.value)} </swiper-slide>\`,
    \`<swiper-slide>Slide \${(--prependNumber.value)} </swiper-slide>\`,
  ])
}

const appendSlide = () => {
  swiperEl.value?.swiper.appendSlide([
    \`<swiper-slide>Slide \${(++appendNumber.value)} </swiper-slide>\`,
  ])
}
<\/script>

<template>
  <section class="swiper-virtual">
    <swiper-container
      ref="swiperEl"
      virtual="true"
      :slides="slides"
      navigation="true"
      slides-per-view="5"
      space-between="50"
      free-mode="true"
      events-prefix="swiper-"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
      >
        <div class="text-secondary">
          {{ item }}
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="d-flex justify-center gap-4 flex-wrap">
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="prependSlide"
      >
        Prepend 2 Slides
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(1)"
      >
        Slide 1
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="appendSlide"
      >
        Append Slide
      </VBtn>
    </div>
  </section>
</template>

<style lang="scss">
.swiper-virtual {
  swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 18px;
    text-align: center;
  }

  swiper-container {
    block-size: 300px;
    inline-size: 100%;
    margin-block: 20px;
    margin-inline: auto;
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()

const slides = Array.from({ length: 500 }, (_, index) => \`Slides \${ index + 1 }\`)
const swiperEl = ref(null)
const prependNumber = ref(1)
const appendNumber = ref(500)

const toSlide = index => {
  swiperEl.value?.swiper.slideTo(index - 1)
}

const prependSlide = () => {
  swiperEl.value?.swiper.prependSlide([
    \`<swiper-slide>Slide \${ --prependNumber.value } </swiper-slide>\`,
    \`<swiper-slide>Slide \${ --prependNumber.value } </swiper-slide>\`,
  ])
}

const appendSlide = () => {
  swiperEl.value?.swiper.appendSlide([\`<swiper-slide>Slide \${ ++appendNumber.value } </swiper-slide>\`])
}
<\/script>

<template>
  <section class="swiper-virtual">
    <swiper-container
      ref="swiperEl"
      virtual="true"
      :slides="slides"
      navigation="true"
      slides-per-view="5"
      space-between="50"
      free-mode="true"
      events-prefix="swiper-"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
      >
        <div class="text-secondary">
          {{ item }}
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="d-flex justify-center gap-4 flex-wrap">
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="prependSlide"
      >
        Prepend 2 Slides
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(1)"
      >
        Slide 1
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="appendSlide"
      >
        Append Slide
      </VBtn>
    </div>
  </section>
</template>

<style lang="scss">
.swiper-virtual {
  swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 18px;
    text-align: center;
  }

  swiper-container {
    block-size: 300px;
    inline-size: 100%;
    margin-block: 20px;
    margin-inline: auto;
  }
}
</style>
`},Hn=ee({__name:"swiper",setup(i){return(e,t)=>{const s=cn,r=ri,n=ln,d=rn,p=tn,a=Jr,f=Zr,o=Yr,l=Gr,c=jr,m=zr,w=Tr,g=Sr,v=br,u=mr,b=fr,h=dr;return R(),si(ni,null,{default:X(()=>[O(te,null,{default:X(()=>[O(r,{title:"Basic",code:un},{default:X(()=>[O(s)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Navigation",code:En},{default:X(()=>[O(n)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Pagination",code:Tn},{default:X(()=>[O(d)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Progress",code:Mn},{default:X(()=>[O(p)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Multiple Slides Per View",code:xn},{default:X(()=>[O(a)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Grid",code:yn},{default:X(()=>[O(f)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{variant:"text",title:"Centered Slides Option 1",code:mn},{default:X(()=>[O(o)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Centered Slides Option 2",code:wn},{default:X(()=>[O(l)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Fade",code:bn},{default:X(()=>[O(c)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Cube Effect",code:hn},{default:X(()=>[O(m)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Coverflow Effect",code:gn},{default:X(()=>[O(w)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Autoplay",code:fn},{default:X(()=>[O(g)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Gallery",code:vn},{default:X(()=>[O(v)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Lazy Loading",code:Sn},{default:X(()=>[O(u)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Responsive Breakpoints",code:Cn},{default:X(()=>[O(b)]),_:1},8,["code"])]),_:1}),O(te,null,{default:X(()=>[O(r,{title:"Virtual Slides",code:Pn},{default:X(()=>[O(h)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Hn as default};
