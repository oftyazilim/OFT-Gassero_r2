<script>
import axios from 'axios';
import CardIstasyon from '../components/CardIstasyon.vue';
import CardGenelDurum from '../components/CardGenelDurum.vue';
import { usePageTitleStore } from '@/stores/pageTitle';

const pageTitleStore = usePageTitleStore();
document.title = "OFT - YTK Dashboard";

export default {
  components: {
    CardIstasyon,
    CardGenelDurum,
  },
  data() {
    return {
      cards: [
        { title: "BORU", plan: 0, uretilen: { h: 0, g: 0 }, uretim: 0, kalan: 0, yuzde: 0, ilerleme: 0 },
        { title: "POMPA", plan: 0, uretilen: { h: 0, g: 0 }, uretim: 0, kalan: 0, yuzde: 0, ilerleme: 0 },
        { title: "ŞASE", plan: 0, uretilen: { h: 0, g: 0 }, uretim: 0, kalan: 0, yuzde: 0, ilerleme: 0 },
        { title: "SİFON", plan: 0, uretilen: { h: 0, g: 0 }, uretim: 0, kalan: 0, yuzde: 0, ilerleme: 0 },
        { title: "VENTURİ", plan: 0, uretilen: { h: 0, g: 0 }, uretim: 0, kalan: 0, yuzde: 0, ilerleme: 0 },
        { title: "GALVANİZ", plan: 0, uretilen: { h: 0, g: 0 }, uretim: 0, kalan: 0, yuzde: 0, ilerleme: 0 },
      ],
      intervalId: null, // Zamanlayıcı ID'si
      baslik: '...',
      durumYuzde: 0,
      uretilenGorunur: true, 
      index: 0,
      texts: ['0', '...'],
      textsBaslik: ['(gunluk)', '(haftalık)'],
      formatliTarihSaat: '...',
      yuzdelik: 0,
    };
  },
  mounted() {
    pageTitleStore.setTitle("YTK Dashboard");
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
        const response = await axios.get('/api/dashboards/zamanal_ytk');
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
    async updateMiktar() {
      // API çağrıları ile ilgili işlemler
      console.log('Miktar güncelleniyor...');
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
          this.durumYuzde = this.texts[0];
          this.uretilenGorunur = true;
        }, 1000);
      }, 3000);
    },
  },
};
</script>
