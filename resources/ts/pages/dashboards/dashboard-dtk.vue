<template>
  <VRow class="match-height">
    <VCol cols="12" lg="7">
      <VRow>
        <VCol cols="12" lg="6" md="4" sm="6">
          <Hedef :baslik="baslikHedef" :deger="hedef" :yaziRengi="hedefRengi" :gosterHedef="true"
            :baslikArkaRenk="hBaslikArkaRenk" :style="{ fontSize: fontHedef + 'px' }" />
        </VCol>

        <VCol cols="12" lg="6" md="4" sm="6">
          <Hedef :baslik="baslikKalan" :deger="kalan" :yaziRengi="kalanRengi" :gosterHedef="true"
            :baslikArkaRenk="kBaslikArkaRenk" :baslikOnRenk="kBaslikOnRenk" :style="{ fontSize: fontHedef + 'px' }" />
        </VCol>

        <VCol cols="12" md="6" lg="8">
          <Hedef :baslik="baslikGerceklesen" :deger="gerceklesen" :yaziRengi="gerceklesenRengi" :gosterHedef="true"
            :baslikArkaRenk="gBaslikArkaRenk" :baslikOnRenk="gBaslikOnRenk"
            :style="{ fontSize: fontGerceklesen + 'px' }" />
        </VCol>
        <VCol cols="12" md="6" lg="4">
          <Hedef :baslik="baslikHatali" :yaziRengi="hataliRengi" :gosterHatali="true" :deger="hatali"
            :baslikArkaRenk="xBaslikArkaRenk" :baslikOnRenk="xBaslikOnRenk" :style="{ fontSize: fontHatali + 'px' }" />
        </VCol>
      </VRow>
    </VCol>

    <VCol cols="12" lg="5" md="4" sm="6">
      <VRow cols="12">
        <VCol cols="12">
          <Grafik :baslik="baslikGrafik" :barData="barVeri" :verimData="verimData" :height="390" />
        </VCol>
        <VCol cols="12">
          <Haftalik :baslik="baslikHaftalik" :hftData="hftVeri" />
        </VCol>
        <VCol cols="12">
          <VCard>
            <VCardTitle class="pt-5 mt-2 me-1 text-center mx-1 pb-3 rounded" :style="{
              fontFamily: 'Montserrat', color: '#FF9F43', fontWeight: 'bold', fontSize: '30px'
            }">
              {{ model }}
            </VCardTitle>
            <VCardTitle class="pt-4 mt-1 me-1 text-center mx-1 pb-5 rounded" :style="{
              fontFamily: 'Montserrat', color: '#FF9F43', fontWeight: 'bold', fontSize: '30px'
            }">
              {{ personel }}
            </VCardTitle>
          </VCard>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
  <h3 class="altYazi" :style="{ color: 'orange', fontFamily: 'Montserrat' }">Son Test Zamanı: {{ formatliTarihSaat }}
  </h3>
</template>


<script lang="ts">
import axios from 'axios';
import { usePageTitleStore } from '@/stores/pageTitle';
import { VCol } from 'vuetify/components';
import Hedef from '@/views/dashboards/dtk/Hedef.vue';
import Grafik from '@/views/dashboards/dtk/Grafik.vue';
import Haftalik from '@/views/dashboards/dtk/Haftalik.vue';
import { staticPrimaryColor, staticPrimaryDarkenColor } from '@/plugins/vuetify/theme';
import { ref, defineComponent } from 'vue';
import { height } from '@/views/demos/forms/tables/simple-table/demoCodeSimpleTable';

const pageTitleStore = usePageTitleStore();
document.title = "OFT - DTK Dashboard";

export default defineComponent({
  components: {
    Hedef,
    Grafik,
    Haftalik,
  },
  setup() {
    const intervalId = ref<ReturnType<typeof setInterval> | null>(null);
    const baslikHedef = ref("HEDEF");
    const baslikKalan = ref("KALAN");
    const baslikGerceklesen = ref("UYGUN TESTLER");
    const baslikHatali = ref("HATALI");
    const baslikGrafik = "VERİMLİLİK";
    const baslikHaftalik = "HAFTALIK ÜRETİMLER";

    const hedef = ref(0);
    const kalan = ref(0);
    const gerceklesen = ref(0);
    const hatali = ref(0);

    const fontHedef = ref(190);
    const fontGerceklesen = ref(230);
    const fontHatali = ref(130);

    const hedefRengi = ref(staticPrimaryColor);
    const kalanRengi = ref('#FF9F43');
    const gerceklesenRengi = ref('#78db8a');
    const hataliRengi = ref('#ff6666');

    const hBaslikArkaRenk = ref(staticPrimaryDarkenColor);
    const kBaslikArkaRenk = ref('#ce8037');
    const gBaslikArkaRenk = ref('#336d39');
    const xBaslikArkaRenk = ref('#b52b2b');

    const hBaslikOnRenk = ref('#aba7ef');
    const kBaslikOnRenk = ref('#f9d0a9');
    const gBaslikOnRenk = ref('#94d19a');
    const xBaslikOnRenk = ref('#f2aeae');

    const personel = ref('...');
    const formatliTarihSaat = ref('...');
    const model = ref('...');

    const verimData = ref<number[]>([0]);
    const barVeri = ref<number[]>([0, 0, 0]);
    const hftVeri = ref<number[]>([0, 0, 0, 0, 0, 0, 0]);

    onUnmounted(() => {
      if (intervalId.value !== null) {
        clearInterval(intervalId.value);
        intervalId.value = null;
      }
    });

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
          formatliTarihSaat.value = `${tarih.getDate()}.${tarih.getMonth() + 1}.${tarih.getFullYear()} - ${tarih.getHours()}:${tarih.getMinutes()}`;
          hedef.value = response.data.hedef.DEGER1;
          kalan.value = response.data.hedef.DEGER1 - response.data.veri.ADET;
          gerceklesen.value = response.data.veri.ADET;

          const startTime = new Date();
          startTime.setHours(7, 30, 0, 0); // Başlangıç saati 03:30
          const partInterval = parseInt(response.data.veri.TADET); // Her parça için süre
          gerekenParca = islenmesiGerekenParcaHesapla(startTime, partInterval);

          hatali.value = response.data.veri.HATALI;
          model.value = response.data.veri.URUN_ADI;
          personel.value = response.data.veri.OPR;
          kullanilabilirlik = 1;
          uretkenlik = gerceklesen.value > 0 ? gerceklesen.value / gerekenParca : 0;
          kalite = hatali.value > 0 ? 1 - hatali.value / (gerceklesen.value + hatali.value) : 1;
          barVeri.value = [Math.round(kullanilabilirlik * 100), Math.round(uretkenlik * 100), Math.round(kalite * 100)];
          verimData.value = [(kullanilabilirlik * uretkenlik * kalite * 100).toFixed(0) as unknown as number];

          if (gerceklesen.value != grckTemp || hatali.value != htliTemp) haftaAl();
        }
      } catch (error) {
        formatliTarihSaat.value = '...';
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
      intervalId.value = setInterval(() => {
        veriAl();
      }, 3000);
    };

    return {
      intervalId,
      baslikHedef,
      baslikKalan,
      baslikGerceklesen,
      baslikHatali,
      baslikGrafik,
      baslikHaftalik,
      hedef,
      kalan,
      gerceklesen,
      hatali,
      fontHedef,
      fontGerceklesen,
      fontHatali,
      hedefRengi,
      kalanRengi,
      gerceklesenRengi,
      hataliRengi,
      hBaslikArkaRenk,
      kBaslikArkaRenk,
      gBaslikArkaRenk,
      xBaslikArkaRenk,
      hBaslikOnRenk,
      kBaslikOnRenk,
      gBaslikOnRenk,
      xBaslikOnRenk,
      personel,
      formatliTarihSaat,
      model,
      verimData,
      barVeri,
      hftVeri,
      veriAl,
      haftaAl,
      updateTextsPeriodically,
    };
  },
  mounted() {
    pageTitleStore.setTitle("DTK Dashboard");
    pageTitleStore.setToplam(" ");
    this.veriAl();
    this.haftaAl();
    this.updateTextsPeriodically();
  },
});
</script>
