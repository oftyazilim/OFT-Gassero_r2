import{a as d}from"./axios-CCb-kr4I.js";import x from"./CardIstasyon-Dnt9HyO9.js";import T from"./CardGenelDurum-B6RD2Z5X.js";import{u as z}from"./pageTitle-BB4Xy5Fv.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as G}from"./VRow-qTTVFZ4i.js";import{V as M}from"./VCol-Dzvr-cnK.js";import{c as p,b as m,f as c,e as f,v as I,F as k,a as y,o as h,i as b,g as D}from"./main-CXefX_qh.js";import"./VCard-pJfFDOSH.js";import"./VAvatar-a73hCTk3.js";import"./VImg-Db788kHt.js";import"./index-DT3SyRRd.js";import"./VCardText-BW9gFSa-.js";import"./VContainer-CMlCIO4q.js";/* empty css              */const g=z();document.title="OFT - ESD Dashboard";const v={components:{CardIstasyon:x,CardGenelDurum:T},data(){return{cards:[{title:"YER TİPİ",plan:0,uretilen:{h:0,g:0},uretim:0,kalan:0,yuzde:0,ilerleme:0},{title:"DUVAR TİPİ",plan:0,uretilen:{h:0,g:0},uretim:0,kalan:0,yuzde:0,ilerleme:0}],intervalId:null,baslik:"...",durumYuzde:0,uretilenGorunur:!0,index:0,texts:["0","..."],textsBaslik:["(gunluk)","(haftalık)"],textsMiktar1:["0","0"],textsMiktar2:["0","0"],sureler:["0","0"],miktarTexts:{"Yer Tipi":["0","0"],"Duvar Tipi":["0","0"]},currentTextIndex:0,genelPlan:0,genelUretim:0,hedefGenel:0,oran:0,durumYuzde:"0",altMesaj:"...",formatliTarihSaat:"...",yuzdelik:0}},computed:{currentText(){return this.texts[this.currentTextIndex]}},mounted(){g.setTitle("ESD Dashboard"),g.setToplam(" "),this.zamanAl(),this.mesajAl(),this.updateMiktar(),this.updateTextsPeriodically()},unmounted(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),console.log("Dashboard bileşeni yok edildi ve tüm zamanlayıcılar temizlendi.")},methods:{async zamanAl(){try{const a=await d.get("/api/dashboards/zamanal_esd");if(a.data.KAYITTARIH){const e=new Date(a.data.KAYITTARIH);this.formatliTarihSaat=`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()} - ${e.getHours()}:${e.getMinutes()}`}}catch{this.formatliTarihSaat="..."}},async mesajAl(){try{const a=await d.get("/api/dashboards/mesajal");this.altMesaj=a.data.mesaj.DEGER||"Mesaj alınamadı"}catch(a){console.error("Mesaj çekme hatası:",a)}},async miktarAl(a){try{const t=(await d.get("/api/dashboards/miktaral_esd",{params:{param1:a}})).data;let s=t.planHafta.toplam_planlanan||0,r=t.planHafta.toplam_uretim||0,u=t.urtGun.toplam_uretim||0,l=t.urtHafta.toplam_uretim||0;this.genelPlan+=parseInt(s),this.genelUretim+=parseInt(l);const o=s,i=s-r;let n=0;switch(l>0&&o>0&&(n=Math.round(l/o*100)),a){case"Yer Tipi":this.cards[0].plan=s,this.cards[0].kalan=i,this.cards[0].yuzde=n,this.cards[0].ilerleme=n,this.cards[0].uretilen[0]=u,this.cards[0].uretilen[1]=l;break;case"Duvar Tipi":this.cards[1].plan=s,this.cards[1].kalan=i,this.cards[1].yuzde=n,this.cards[1].ilerleme=n,this.cards[1].uretilen[0]=u,this.cards[1].uretilen[1]=l;break}}catch(e){console.error("Plan çekme hatası:",e)}},async updateMiktar(){this.genelPlan=0,this.genelUretim=0,this.hedefGenel=0;const a=["Yer Tipi","Duvar Tipi"];await Promise.all(a.map(s=>this.miktarAl(s))),this.hedefGenel=this.genelPlan;let e=0;this.genelPlan>0?e=Math.round(this.genelUretim/this.hedefGenel*100):e=0;let t="";e<=20?t="...":e>20&&e<=40?t="kötü":e>40&&e<=50?t="sıkıntılı":e>50&&e<=65?t="eh işte":e>65&&e<=80?t="iyi":e>80&&e<=90?t="çok iyi":e>90&&e<=99?t="harika":e>=99&&(t="süper"),this.yuzdelik=e,this.texts[0]="%"+e,this.texts[1]=t},updateTextsPeriodically(){this.intervalId=setInterval(()=>{this.zamanAl(),this.mesajAl(),this.updateMiktar(),this.uretilenGorunur=!1,setTimeout(()=>{this.index=(this.index+1)%this.texts.length,this.baslik=this.textsBaslik[this.index],this.cards[0].uretim=Math.floor(this.cards[0].uretilen[this.index]),this.cards[1].uretim=Math.floor(this.cards[1].uretilen[this.index]),this.durumYuzde=this.texts[0],this.uretilenGorunur=!0},1e3)},3e3)}}},A={style:{color:"orange",fontFamily:"Montserrat"}};function P(a,e,t,s,r,u){const l=y("CardIstasyon"),o=y("CardGenelDurum");return h(),p(k,null,[m(G,{"no-gutters":""},{default:c(()=>[(h(!0),p(k,null,b(r.cards,i=>(h(),D(M,{md:"4",lg:"",sm:"6",key:i.title},{default:c(()=>[m(l,{uretilenGorunur:r.uretilenGorunur,title:i.title,plan:i.plan,baslik:r.baslik,uretilen:i.uretim,kalan:i.kalan,yuzde:i.yuzde,ilerleme:i.ilerleme},null,8,["uretilenGorunur","title","plan","baslik","uretilen","kalan","yuzde","ilerleme"])]),_:2},1024))),128))]),_:1}),m(o,{class:"mt-5",uretilenGorunur:r.uretilenGorunur,durumYuzde:r.durumYuzde,altMesaj:r.altMesaj,yuzdelik:r.yuzdelik},null,8,["uretilenGorunur","durumYuzde","altMesaj","yuzdelik"]),f("div",null,[f("h3",A,"Son veri girişi: "+I(r.formatliTarihSaat),1)])],64)}const O=_(v,[["render",P]]);export{O as default};
