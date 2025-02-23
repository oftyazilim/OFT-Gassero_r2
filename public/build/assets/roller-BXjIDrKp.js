import{a as V,b as i,e as D,i as F,d as R,D as w,t as _}from"./data-grid-BLmUHH6D.js";import{a as d}from"./axios-CCb-kr4I.js";import{u as L}from"./pageTitle-BB4Xy5Fv.js";import{d as N,r as u,E as O,o as v,c as M,e as j,g as b,f as m,b as t,n as a}from"./main-CXefX_qh.js";import"./index-xGAhBz7B.js";const q={class:"grids"},Z=N({__name:"roller",setup(H){const g=L();g.setTitle("Kullanıcı Rolleri"),g.setToplam(""),document.title="OFT - Roller";const f=u([]),h=u([]),l=u([]),r=u([]),n=u([]),x=u(0),k=u(0),y=e=>e&&["ALL"].indexOf(e.trim().toUpperCase())>=0,E=e=>!y(e.row.data.name),P=e=>!y(e.row.data.name),A=e=>{$(e)},I=e=>{K(e)},S=e=>{z(e)},$=e=>{e.promise=new Promise(async(o,s)=>{try{const c={...e.oldData,...e.newData};await d.put(`/api/rolGuncelle/${e.key}`,c),await p(),e.component.cancelEditData(),o()}catch(c){console.error("Error updating data:",c),s()}})},K=e=>{e.promise=new Promise(async(o,s)=>{try{await d.post("/api/rolEkle",{name:e.data.name}),await p(),e.component.cancelEditData(),o()}catch(c){console.error("Error adding data:",c),s()}})},z=e=>{e.promise=new Promise(async(o,s)=>{try{await d.delete(`/api/rolSil/${e.key}`),await p(),e.component.cancelEditData(),o()}catch(c){console.error("Error deleting data:",c),s()}})},p=async()=>{const{data:e}=await d.get("/api/roles-count");f.value=e},C=async()=>{const e=await d.get(`/api/roles-users/${l.value.name}`);h.value=e.data},G=async()=>{if(!l.value)return;const{data:e}=await d.get(`/api/roles/${l.value.id}/permissions`);n.value=e.assigned,r.value=e.available},T=async e=>{try{const o=e.itemData;if(!l.value||!o)return;n.value.push(o),r.value=r.value.filter(s=>s.id!==o.id),n.value=[...n.value],r.value=[...r.value],await d.post(`/api/roles/${l.value.id}/permissions`,{permission_id:o.id})}catch(o){console.error("İzin atama işlemi başarısız oldu:",o)}},U=async e=>{const o=e.itemData;!l.value||!o||(r.value.push(o),n.value=n.value.filter(s=>s.id!==o.id),n.value=[...n.value],r.value=[...r.value],await d.delete(`/api/roles/${l.value.id}/permissions/${o.id}`))};O(async()=>{p()});const B=e=>{const o=e.row.data;l.value=o,G(),C()};return(e,o)=>(v(),M("div",null,[j("div",q,[(v(),b(a(w),{"data-source":f.value,key:x.value,"key-expr":"id","show-borders":!0,width:"400","columns-auto-width":!0,"row-alternation-enabled":!0,"focused-row-enabled":!0,"show-indicator":!0,onFocusedRowChanged:B,onRowUpdating:A,onRowInserting:I,onRowRemoving:S},{default:m(()=>[t(a(V),{"allow-updating":P,"allow-adding":!0,"allow-deleting":E,"use-icons":!0,mode:"row"}),t(a(i),{"data-field":"id",caption:"Rol ID",width:"60","allow-editing":!1}),t(a(i),{"data-field":"name",caption:"Rol Adı",width:"120"}),t(a(i),{"data-field":"guard_name",caption:"Guard",width:"70"}),t(a(i),{"data-field":"users_count",caption:"KllAd",width:"60"}),t(a(D),{mode:"virtual","column-rendering-mode":"virtual"}),t(a(F),{visible:!0,width:240,placeholder:"Ara..."}),t(a(R),{mode:"none"})]),_:1},8,["data-source"])),(v(),b(a(w),{"data-source":h.value,key:k.value,"key-expr":"id","show-borders":!0,width:"300",title:"Atanmış İzinler","columns-auto-width":!0,"row-alternation-enabled":!1,"focused-row-enabled":!0,"show-indicator":!0,"allow-column-reordering":!0},{default:m(()=>[t(a(i),{caption:"Atanmış Kullanıcılar",alignment:"center"},{default:m(()=>[t(a(i),{"data-field":"id",caption:"ID",width:"60","allow-editing":!1}),t(a(i),{"data-field":"name",caption:"Kullanıcı Adı",width:"200"})]),_:1}),t(a(D),{mode:"virtual","column-rendering-mode":"virtual"}),t(a(R),{mode:"none"})]),_:1},8,["data-source"])),t(a(w),{"data-source":r.value,"show-borders":!0},{default:m(()=>[t(a(_),{group:"permissionsGroup","on-add":U}),t(a(i),{"data-field":"name",caption:"Atanmamış İzinler"})]),_:1},8,["data-source"]),t(a(w),{"data-source":n.value,"show-borders":!0},{default:m(()=>[t(a(_),{group:"permissionsGroup","on-add":T}),t(a(i),{"data-field":"name",caption:"Atanmış İzinler"})]),_:1},8,["data-source"])])]))}});export{Z as default};
