<template>
  <VRow no-gutters>
    <VCol md="4" lg sm="6" v-for="card in cards" :key="card.title">
      <CardIstasyon :uretilenGorunur="uretilenGorunur" :title="card.title" :plan="card.plan" :baslik="baslik"
        :uretilen="card.uretim" :kalan="card.kalan" :yuzde="card.yuzde" :ilerleme="card.ilerleme" />
    </VCol>
  </VRow>

  <CardGenelDurum class="mt-5" :uretilenGorunur :durumYuzde="durumYuzde" :altMesaj="altMesaj" :yuzdelik="yuzdelik" />
  <div>
    <h3 :style="{ color: 'orange', fontFamily: 'Montserrat' }">Son veri girişi: {{ formatliTarihSaat }} </h3>
  </div>
</template>

<script>
import axios from 'axios';
import CardIstasyon from '../components/CardIstasyon.vue';
import CardGenelDurum from '../components/CardGenelDurum.vue';
import { usePageTitleStore } from '@/stores/pageTitle';

const pageTitleStore = usePageTitleStore();
document.title = "OFT - ESD Dashboard";

export default {
  components: {
    CardIstasyon,
    CardGenelDurum,
  },
  data() {
    return {
      cards: [
        { title: "YER TİPİ", plan: 0, uretilen: { h: 0, g: 0 }, uretim: 0, kalan: 0, yuzde: 0, ilerleme: 0 },
        { title: "DUVAR TİPİ", plan: 0, uretilen: { h: 0, g: 0 }, uretim: 0, kalan: 0, yuzde: 0, ilerleme: 0 },
      ],
      intervalId: null, // Zamanlayıcı ID'si
      baslik: '...',
      durumYuzde: 0,
      uretilenGorunur: true, // Başlangıçta görünür
      index: 0,
      texts: ['0', '...'],
      textsBaslik: ['(gunluk)', '(haftalık)'],
      textsMiktar1: ['0', '0'],
      textsMiktar2: ['0', '0'],
      sureler: ['0', '0'],
      miktarTexts: {
        'Yer Tipi': ['0', '0'],
        'Duvar Tipi': ['0', '0'],
      },
      currentTextIndex: 0,
      genelPlan: 0,
      genelUretim: 0,
      hedefGenel: 0,
      oran: 0,
      durumYuzde: '0',
      altMesaj: '...',
      formatliTarihSaat: '...',
      yuzdelik: 0,
    };
  },
  computed: {
    currentText() {
      return this.texts[this.currentTextIndex];
    },
  },
  mounted() {
    pageTitleStore.setTitle("ESD Dashboard");
    pageTitleStore.setToplam(" ");
    this.zamanAl();
    this.mesajAl();
    this.updateMiktar();
    this.updateTextsPeriodically();
  },
  unmounted() {
    // Zamanlayıcıları temizle
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    console.log('Dashboard bileşeni yok edildi ve tüm zamanlayıcılar temizlendi.');
  },
  methods: {
    async zamanAl() {
      try {
        const response = await axios.get('/api/dashboards/zamanal_esd');
        if (response.data.KAYITTARIH) {
          const tarih = new Date(response.data.KAYITTARIH);
          this.formatliTarihSaat = `${tarih.getDate()}.${tarih.getMonth() + 1}.${tarih.getFullYear()} - ${tarih.getHours()}:${tarih.getMinutes()}`;
        }
      } catch (error) {
        this.formatliTarihSaat = '...';
      }
    },
    async mesajAl() {
      try {
        const response = await axios.get('/api/dashboards/mesajal');
        this.altMesaj = response.data.mesaj.DEGER || 'Mesaj alınamadı';
      } catch (error) {
        console.error('Mesaj çekme hatası:', error);
      }
    },
    async miktarAl(ist) {
      try {
        const response = await axios.get('/api/dashboards/miktaral_esd', {
          params: {
            param1: ist
          }
        });

        const plan = response.data;
        let plnPlnHafta = plan.planHafta.toplam_planlanan || 0;
        let plnUrtHafta = plan.planHafta.toplam_uretim || 0;
        let urtGun = plan.urtGun.toplam_uretim || 0;
        let urtHafta = plan.urtHafta.toplam_uretim || 0;

        this.genelPlan += parseInt(plnPlnHafta);
        this.genelUretim += parseInt(urtHafta);

        const hedef = plnPlnHafta; // * (oran / 100);
        const kalan = plnPlnHafta - plnUrtHafta;
        let yuzde = 0;
        if (urtHafta > 0 && hedef > 0) yuzde = Math.round((urtHafta / hedef) * 100);

        switch (ist) {
          case 'Yer Tipi':
            this.cards[0].plan = plnPlnHafta;
            this.cards[0].kalan = kalan;
            this.cards[0].yuzde = yuzde;
            this.cards[0].ilerleme = yuzde;
            this.cards[0].uretilen[0] = urtGun;
            this.cards[0].uretilen[1] = urtHafta;
            break;
          case 'Duvar Tipi':
            this.cards[1].plan = plnPlnHafta;
            this.cards[1].kalan = kalan;
            this.cards[1].yuzde = yuzde;
            this.cards[1].ilerleme = yuzde;
            this.cards[1].uretilen[0] = urtGun;
            this.cards[1].uretilen[1] = urtHafta;
            break;

        }
      } catch (error) {
        console.error('Plan çekme hatası:', error);
      }
    },
    async updateMiktar() {
      this.genelPlan = 0;
      this.genelUretim = 0;
      this.hedefGenel = 0;

      const grupKodlari = ['Yer Tipi', 'Duvar Tipi'];

      // Tüm grupKodlari için miktarAl fonksiyonunu çağırıyoruz ve sonuçları bekliyoruz
      await Promise.all(grupKodlari.map(kod => this.miktarAl(kod)));

      this.hedefGenel = this.genelPlan; // * (oran / 100);
      let yuzde = 0;
      if (this.genelPlan > 0) yuzde = Math.round((this.genelUretim / this.hedefGenel) * 100);
      else yuzde = 0;
      let yorum = '';
      if (yuzde <= 20) yorum = '...';
      else if (yuzde > 20 && yuzde <= 40) yorum = 'kötü';
      else if (yuzde > 40 && yuzde <= 50) yorum = 'sıkıntılı';
      else if (yuzde > 50 && yuzde <= 65) yorum = 'eh işte';
      else if (yuzde > 65 && yuzde <= 80) yorum = 'iyi';
      else if (yuzde > 80 && yuzde <= 90) yorum = 'çok iyi';
      else if (yuzde > 90 && yuzde <= 99) yorum = 'harika';
      else if (yuzde >= 99) yorum = 'süper';

      this.yuzdelik = yuzde;
      this.texts[0] = '%' + yuzde;
      this.texts[1] = yorum;
    },
    updateTextsPeriodically() {
      // Zamanlayıcı başlatılıyor
      this.intervalId = setInterval(() => {
        this.zamanAl();
        this.mesajAl();
        this.updateMiktar();
        this.uretilenGorunur = false;

        setTimeout(() => {
          this.index = (this.index + 1) % this.texts.length;

          this.baslik = this.textsBaslik[this.index];
          this.cards[0].uretim = Math.floor(this.cards[0].uretilen[this.index]);
          this.cards[1].uretim = Math.floor(this.cards[1].uretilen[this.index]);
          this.durumYuzde = this.texts[0]; //this.texts[this.index];
          this.uretilenGorunur = true;
        }, 1000);
      }, 3000);
    },
  },
};
</script>






// mounted() {


// // İki ayrı API isteği yapalım
// const planDataRequest = axios.get('https://api.example.com/plan-data');
// const uretilenDataRequest = axios.get('https://api.example.com/uretilen-data');

// // Promise.all ile iki isteği aynı anda yapıyoruz
// Promise.all([planDataRequest, uretilenDataRequest])
// .then(([planResponse, uretilenResponse]) => {
// const planData = planResponse.data;
// const uretilenData = uretilenResponse.data;

// // plan ve uretilen verilerini cards dizisine atayın
// this.cards = [
// {
// title: "BORU",
// plan: planData.boru.plan,
// uretilen: uretilenData.boru.uretilen,
// kalan: planData.boru.kalan,
// yuzde: planData.boru.yuzde
// },
// {
// title: "POMPA",
// plan: planData.pompa.plan,
// uretilen: uretilenData.pompa.uretilen,
// kalan: planData.pompa.kalan,
// yuzde: planData.pompa.yuzde
// },
// // Diğer kart verilerini de burada atayın
// ];

// // Diğer genel bilgileri ayarlayın
// this.genelDurum = planData.genelDurum;
// this.altMesaj = planData.altMesaj;
// })
// .catch(error => {
// console.error("Veriler alınırken hata oluştu:", error);
// });
// }
