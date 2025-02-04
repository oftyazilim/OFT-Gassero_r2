<template>
  <VRow>
    <VCol cols=12 lg=6 md=6>
      <Grafik :baslik="baslikGrafik" :barData="barVeri" :verimData="verimData" />
    </VCol>
    <VCol cols=12 lg=6 md=6>
      <Haftalik :baslik="baslikHaftalik" :hftData="hftVeri" :height="367"/>
    </VCol>
  </VRow>

</template>


<script  lang="ts">
import axios from 'axios';
import { usePageTitleStore } from '@/stores/pageTitle';
import { VCol } from 'vuetify/components';
import Hedef from '@/views/dashboards/dtk/Hedef.vue';
import Grafik from '@/views/dashboards/dtk/Grafik.vue';
import Haftalik from '@/views/dashboards/dtk/Haftalik.vue';
import { staticPrimaryColor, staticPrimaryDarkenColor } from '@/plugins/vuetify/theme';
import { ref, defineComponent } from 'vue';

const pageTitleStore = usePageTitleStore();

document.title = "OFT - Ana Sayfa";

export default defineComponent({
    components: {
        Hedef,
        Grafik,
        Haftalik,
    },
    setup() {

        const hedef = ref(0);
        const kalan = ref(0);
        const gerceklesen = ref(0);
        const hatali = ref(0);
    const baslikGrafik = "DTK VERİMLİLİK";
    const baslikHaftalik = "DTK HAFTALIK ÜRETİMLER";

        const verimData = ref<number[]>([0]);
        const barVeri = ref<number[]>([0, 0, 0]);
        const hftVeri = ref<number[]>([0, 0, 0, 0, 0, 0, 0]);

        const veriAl = async () => {
            var kullanilabilirlik = 1;
            var uretkenlik = 0;
            var kalite = 1;
            var gerekenParca = 0;
            var grckTemp = gerceklesen.value;
            var htliTemp = hatali.value;
            try {
              const response = await axios.get('/api/dashboards/zamanal_dtk');
              if (response.data) {
                const tarih = new Date(response.data.zaman.BASLAMA_ZAMANI);
                hedef.value = response.data.hedef.DEGER1;
                kalan.value = response.data.hedef.DEGER1 - response.data.veri.ADET;
                gerceklesen.value = response.data.veri.ADET;
                
                const startTime = new Date();
                startTime.setHours(7, 30, 0, 0); // Başlangıç saati 03:30
                const partInterval = parseInt(response.data.veri.TADET); // Her parça için süre
                gerekenParca = islenmesiGerekenParcaHesapla(startTime, partInterval);

                    hatali.value = response.data.veri.HATALI;
                    kullanilabilirlik = 1;
                    uretkenlik = gerceklesen.value > 0 ? gerceklesen.value / gerekenParca : 0;
                    kalite = hatali.value > 0 ? 1 - hatali.value / (gerceklesen.value + hatali.value) : 1;
                    barVeri.value = [Math.round(kullanilabilirlik * 100), Math.round(uretkenlik * 100), Math.round(kalite * 100)];
                    verimData.value = [(kullanilabilirlik * uretkenlik * kalite * 100).toFixed(0) as unknown as number];

                    if (gerceklesen.value != grckTemp || hatali.value != htliTemp) haftaAl();
                }
            } catch (error) {
            }
        };

        const haftaAl = async () => {
            const response = await axios.get('/api/weekly-data');
            if (response.data && response.data.data) {
                hftVeri.value = response.data.data.map(item => item.ADET); // Doğrudan atayın
            }
        };

        const islenmesiGerekenParcaHesapla = (startTime: Date, partInterval: number): number => {
            const currentTime = new Date(); // Şimdiki zamanı al

            // Şimdiki saat, başlangıç saatinden küçükse işlemi yapma
            if (currentTime < startTime) {
                return 0;
            }

            const timeDifference = (currentTime.getTime() - startTime.getTime()) / (1000 * 60); // Dakika cinsinden

            if (timeDifference < 0) {
                return 0; // Henüz başlamamışsa 0 döner
            }
            return Math.floor(timeDifference / partInterval);
        };

        const updateTextsPeriodically = () => {
            setInterval(() => {
                veriAl();
            }, 3000);
        };

        return {
            hedef,
            baslikGrafik,
            baslikHaftalik,
            kalan,
            gerceklesen,
            hatali,
            verimData,
            barVeri,
            hftVeri,
            veriAl,
            haftaAl,
            updateTextsPeriodically,
        };
    },
    mounted() {
      pageTitleStore.setTitle("Ana Sayfa");
      pageTitleStore.setToplam(" ");
        this.veriAl();
        this.haftaAl();
        this.updateTextsPeriodically();
    },
});

</script>
