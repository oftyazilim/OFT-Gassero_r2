<template>

  <DxResponsiveBox :screen-by-width="screen" single-column-screen="sm">
    <DxRow :ratio="1" />
    <DxRow :ratio="1" />
    <DxRow :ratio="1" />
    <DxRow :ratio="1" />
    <DxCol :ratio="4" />
    <DxCol :ratio="3" />
    <DxCol :ratio="8" />

    <DxItem>
      <DxLocation :row="0" :col="0" :colspan="2" />
      <VCard class="pa-8 text-center mb-2 me-2" style="width: 100%;">

        <v-row class="h-200">
          <!-- <v-col cols="1" class="d-flex flex-column align-center justify-center pa-0">
            <h2 class="rotated-text">SAYAÇ</h2>
          </v-col> -->
          <v-col cols="5" class="d-flex flex-column align-left justify-center ps-0">
            <VCard class="mantar-buton text-center d-flex align-center justify-center position-relative" :style="{
              transform: isPressed ? 'scale(0.95)' : 'scale(1)',
              transition: 'transform 0.1s ease',
              cursor: isCooldown ? 'not-allowed' : 'pointer',
            }" height="200" width="200" style="border-radius: 100px;" @mousedown="handlePress" @mouseup="handleRelease"
              @mouseleave="handleRelease" @touchstart.prevent="handlePress" @touchend="handleRelease"
              @touchcancel="handleRelease">
              <img :src="isCooldown ? cooldownImage : defaultImage" alt="Buton Simge" class="button-icon" />
            </VCard>
          </v-col>

          <v-col cols="3" class="d-flex flex-column align-center justify-center pt-0">
            <h2>GERİ AL</h2>
            <VCard class="mantar-buton text-center mt-2 d-flex align-center justify-center position-relative" :style="{
              transform: isPressedg ? 'scale(0.95)' : 'scale(1)',
              transition: 'transform 0.1s ease',
              cursor: isCooldowng ? 'not-allowed1' : 'pointer1',
            }" height="100" width="100" style="border-radius: 75px;" @mousedown="handlePressg"
              @mouseup="handleReleaseg" @mouseleave="handleReleaseg" @touchstart.prevent="handlePressg"
              @touchend="handleReleaseg" @touchcancel="handleReleaseg">
              <img :src="isCooldown ? cooldownTime == 0 ? cooldownImage : defaultImage : cooldownImage"
                alt="Buton Simge" class="button-icon" />
            </VCard>
          </v-col>

          <v-col cols="4" class="d-flex flex-column align-center justify-center pt-0 pe-0">
            <h2>ISKARTA</h2>
            <VCard class="mantar-buton text-center mt-2 d-flex align-center justify-center position-relative" :style="{
              transform: isPressed1 ? 'scale(0.95)' : 'scale(1)',
              transition: 'transform 0.1s ease',
              cursor: isCooldown1 ? 'not-allowed1' : 'pointer1',
            }" height="150" width="150" style="border-radius: 75px;" @mousedown="handlePress1"
              @mouseup="handleRelease1" @mouseleave="handleRelease1" @touchstart.prevent="handlePress1"
              @touchend="handleRelease1" @touchcancel="handleRelease1">
              <img :src="isCooldown1 ? cooldownImage : cooldownImage1" alt="Buton Simge" class="button-icon" />
            </VCard>
          </v-col>
        </v-row>
      </VCard>
    </DxItem>


    <DxItem>
      <DxLocation :row="1" :col="0" :colspan="2" />
      <VCard class="d-flex flex-column align-center justify-start text-center pb-0 me-2"
        style="width: 100%; height: 90px;">
        <div class=" text-center align-center justify-center pt-0">
          <h1 :key="currentDate" class="date-time mb-0">{{ currentDate }}</h1>
          <h4 :key="currentTime" class="date-time" style="font-size: 40px; margin-top: -10px;">{{ currentTime }}</h4>
        </div>
      </VCard>
    </DxItem>

    <DxItem>
      <DxLocation :row="2" :col="0" :rowspan="2" />
      <VCard class="uygun text-center  ">
        <transition name="spin" mode="out-in">
          <h2 :key="uygun" class="animated-number pa-0" style="color: green;">
            {{ formatNumber(uygun) }}
          </h2>
        </transition>
      </VCard>
    </DxItem>

    <DxItem>
      <DxLocation :row="2" :col="1" :rowspan="2" />
      <VCard class="iskarta   text-center  ">
        <transition name="spin" mode="out-in">
          <h2 :key="iskarta" class="animated-number pa-0" style="color: red;">
            {{ formatNumber(iskarta) }}
          </h2>
        </transition>
      </VCard>
    </DxItem>


    <DxItem> <!-- ******** Sıradakiler  -->
      <DxLocation :row="0" :col="2" />
      <VCard class="pa-1 text-center mb-2" height="264" outlined max-width="100%">
        <VRow>
          <VCol cols="1" class="ma-0 pa-0 text-wrap">
            <h3 class="rotated-text" style="margin-block-start: 265px;">SIRADAKİ YARI MAMULLER - {{ toplamListe }}</h3>
          </VCol>
          <VCol cols="11">
            <div style="margin-inline-start: -20px;">
              <DxDataGrid id="grdSiradakiler" ref="dataGrid" :data-source="veriListe" key-expr="ID" :height="260"
                :show-borders="true">
                <DxColumn data-field="ID" caption="ID" data-type="number" :visible="true" :width="60" />
                <DxColumn data-field="ISEMRIID" caption="İŞ EMRİ" data-type="number" :visible="true" :width="80" />
                <DxColumn data-field="URUNKODU" caption="ÜRÜN KODU" data-type="string" :visible="true" :width="140" />
                <DxColumn data-field="URUNADI" caption="ÜRÜN ADI" data-type="string" :visible="true" />

                <DxSorting mode="none" />
                <DxScrolling mode="virtual" row-rendering-mode="virtual" />

              </DxDataGrid>
            </div>
          </VCol>
        </VRow>
      </VCard>
    </DxItem>

    <DxItem> <!-- ******** İş Emirleri  -->
      <DxLocation :row="1" :col="2" :rowspan="2" />

      <VCard class="pa-1 mt-0" height="145">
        <VRow>
          <VCol cols="1" class="ma-0 pa-0 text-wrap">
            <h3 class="rotated-text" style="margin-block-start: 125px;">İŞ EMRİ - {{ toplamEmir }}</h3>
          </VCol>
          <VCol cols="11">
            <div style="margin-inline-start: -20px;">
              <DxDataGrid id="grdEmirler" :data-source="veriEmirler" key-expr="ID" :height="141" :show-borders="true">
                <DxColumn data-field="ID" caption="ID" data-type="number" :visible="true" :width="40" />
                <DxColumn data-field="KOD" caption="ÜRÜN KODU" data-type="string" :visible="true" :width="120" />
                <DxColumn data-field="TANIM" caption="ÜRÜN ADI" data-type="string" :visible="true" />
                <DxColumn data-field="PLANLANANMIKTAR" caption="PLAN" data-type="number" :visible="true" :width="70" />
                <DxColumn data-field="URETIMMIKTAR" caption="ÜRETİM" data-type="number" :visible="true" :width="70" />

                <DxSorting mode="none" />
                <DxScrolling mode="virtual" row-rendering-mode="virtual" />
                <!-- <DxSummary>
                  <DxTotalItem column="TANIM" show-in-column="ID" summary-type="count" display-format="Toplam: {0}"/>
                </DxSummary> -->
              </DxDataGrid>
            </div>
          </VCol>
        </VRow>
      </VCard>
    </DxItem>

    <DxItem> <!-- ******** Iskartalar  -->
      <DxLocation :row="3" :col="2" />
      <VCard class="pa-1 mt-2" height="164">
        <VRow>
          <VCol cols="1" class="ma-0 pa-0 text-wrap">
            <h3 class="rotated-text" style="margin-block-start: 140px;">ISKARTALAR</h3>
          </VCol>
          <VCol cols="11">
            <div style="margin-inline-start: -20px;">
              <DxDataGrid id="grdIskartalar" :data-source="veriIskartalar" key-expr="ID" :height="161"
                :show-borders="true">
                <DxColumn data-field="ID" caption="ID" data-type="number" :visible="false" :width="60" />
                <DxColumn data-field="ESANJORID" caption="EŞ.ID" data-type="number" :visible="true" :width="60" />
                <DxColumn data-field="ISEMRIID" caption="İŞ EMRİ" data-type="number" :visible="true" :width="80" />
                <DxColumn data-field="URUNKODU" caption="ÜRÜN KODU" data-type="string" :visible="true" :width="120" />
                <DxColumn data-field="URUNADI" caption="ÜRÜN ADI" data-type="string" :visible="true" />
                <DxColumn data-field="SEBEP" caption="SEBEP" data-type="string" :visible="true" />

                <DxSorting mode="none" />
                <DxScrolling mode="virtual" row-rendering-mode="virtual" />
                <!-- <DxSummary>
                  <DxTotalItem column="URUNADI" summary-type="count" display-format="Toplam: {0}"/>
                </DxSummary> -->
              </DxDataGrid>
            </div>
          </VCol>
        </VRow>
      </VCard>
    </DxItem>


  </DxResponsiveBox>

</template>

<script setup lang="ts">

import {
  DxResponsiveBox, DxItem, DxLocation, DxCol, DxRow,
} from 'devextreme-vue/responsive-box';
import { usePageTitleStore } from "@/stores/pageTitle";
import {
  DxColumn,
  DxDataGrid,
  DxScrolling,
  DxSorting,
  // DxLoadPanel,
  // DxDataGridTypes,
  // DxSummary,
  // DxTotalItem,
} from "devextreme-vue/data-grid";
import { Ref, ref } from "vue";
import butonyesil from '@images/buton-yesil1.png'
import butonkirmizi from '@images/buton-kirmizi1.png'
import butonmavi from '@images/buton-mavi1.png'
import axios from "axios";
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router';


const screen = (width) => ((width < 700) ? 'sm' : 'lg');

// Görseller
const defaultImage = butonyesil;
const cooldownImage = butonkirmizi; // Bekleme süresindeyken
const cooldownImage1 = butonmavi; // Bekleme süresindeyken

// Buton için durumlar
const counter = ref(0);
const isPressed = ref(false);
const isCooldown = ref(false);
const cooldownTime = ref(0);
const counterg = ref(0);
const isPressedg = ref(false);
const isCooldowng = ref(false);
const cooldownTimeg = ref(0);
const counter1 = ref(0);
const isPressed1 = ref(false);
const isCooldown1 = ref(false);
const cooldownTime1 = ref(0);
const tempID = ref<number | 0>(0);

// Sayılar için durum
const uygun = ref(0);
const iskarta = ref(0);

// Tarih ve Saat
const currentDate = ref("");
const currentTime = ref("");

const veriListe = ref<VeriListe[]>([]);
const veriEmirler = ref<VeriEmirler[]>([]);
const veriIskartalar = ref<VeriIskartalar[]>([]);

const toplamListe = ref(0);
const toplamEmir = ref(0);
const toplamIskarta = ref(0);

const userData = useCookie<any>("userData");
const pageTitleStore = usePageTitleStore();
const dataGrid = ref<DxDataGrid | null>(null);

interface VeriListe {
  ID?: number | null;
  ISEMRIID?: number | null;
  URUNID?: number | null;
  URUNKODU?: string | null;
  URUNADI?: string | null;
  URETIMTARIH?: Date | null;
  BARKOD?: string | null;
}

interface VeriIskartalar {
  ID?: number | null;
  ESANJORID?: number | null;
  ISEMRIID?: number | null;
  URUNKODU?: string | null;
  URUNADI?: string | null;
  SEBEP?: string | null;
}

interface VeriEmirler {
  ID?: number | null;
  KOD?: string | null;
  TANIM?: string | null;
  PLANLANANMIKTAR?: number | null;
  URETIMMIKTAR?: number | null;
}

const getData = () => {
  axios
    .get("/api/listeEsanjor")
    .then((response) => {
      veriListe.value = response.data.liste;
      veriEmirler.value = response.data.emirler;
      veriIskartalar.value = response.data.iskartalar;
      toplamListe.value = response.data.toplamListe;
      toplamEmir.value = response.data.toplamEmir;
      iskarta.value = response.data.toplamIskarta;
      uygun.value = response.data.toplamUretim;
    })
    .catch((error) => {
      console.error("Veri çekilirken hata oluştu: ", error);
    });
};

// *********** Üretim ****************
async function handlePress() {
  if (isCooldown.value) return;

  isPressed.value = true;
  isPressedg.value = true;
  uygun.value = uygun.value + 1;

  tempID.value = Number(veriListe.value[0].ID);
  axios
    .post("/api/operasyonKaydet", {
      params: {
        id: veriListe.value[0].ID,
        urunID: veriListe.value[0].URUNID,
        isemriID: veriListe.value[0].ISEMRIID,
        barkod: veriListe.value[0].BARKOD,
        operasyon: 'OPERASYON1',
        userID: userData.value.id,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Veri çekilirken hata oluştu: ", error);
    });

  isCooldown.value = true;

  cooldownTime.value = 5;

  const interval = setInterval(() => {
    cooldownTime.value -= 1;
    if (cooldownTime.value <= 0) {
      tempID.value = 0;
      isCooldown.value = toplamListe.value > 0 ? false : true;
      clearInterval(interval);
    }
  }, 1000);

  // setTimeout(() => {
  //   isCooldown.value = toplamListe.value > 0 ? true : false;
  // }, 5000);
}
async function handlePressg() {
  if (!isCooldown.value || !isPressedg.value) return;


  axios
    .post("/api/geriAl", {
      params: {
        id: tempID.value,
        userID: userData.value.id,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Veri çekilirken hata oluştu: ", error);
    });

  isPressedg.value = false;

  // Soğuma süresi
  isCooldowng.value = true;
  cooldownTimeg.value = 5;

  const interval1 = setInterval(() => {
    cooldownTimeg.value -= 1;
    if (cooldownTimeg.value <= 0) clearInterval(interval1);
  }, 1000);

  setTimeout(() => {
    isPressedg.value = false;
  }, 5000);
}

// *********** Geri Al ****************
function handleReleaseg() {
  isPressed.value = false;
}
function handleRelease() {
  isPressed.value = false;
}

// *********** Iskarta ****************
async function handlePress1() {
  if (isCooldown1.value || toplamListe.value == 0) return;


  const { value: sebep } = await Swal.fire({
    title: "Iskarta Girişi",
    input: "select",
    inputOptions: {
      "Tipini beğenmedim": "Tipini beğenmedim",
      "Gıcık oldum": "Gıcık oldum",
      "Böyle şey mi olur": "Olmadı yaa",
    },
    inputPlaceholder: "Iskarta sebebini seçiniz",
    showCancelButton: true,
  });
  if (sebep) {
    iskarta.value = iskarta.value + 1;
    axios
      .post("/api/iskartaEkle", {
        params: {
          id: veriListe.value[0].ID,
          urunID: veriListe.value[0].URUNID,
          isemriID: veriListe.value[0].ISEMRIID,
          barkod: veriListe.value[0].BARKOD,
          sebep: sebep,
          operasyon: 'OPERASYON1',
          userID: userData.value.id,
        },
      })
      .then((response) => {
        getData();
      })
      .catch((error) => {
        console.error("Veri çekilirken hata oluştu: ", error);
      });

    isPressed1.value = true;

    isCooldown1.value = true;
    cooldownTime1.value = 5;

    const interval = setInterval(() => {
      cooldownTime1.value -= 1;
      if (cooldownTime1.value <= 0) {
        isCooldown1.value = toplamListe.value > 0 ? false : true;
        clearInterval(interval);
      }
    }, 1000);

  }
  else return;

  // setTimeout(() => {
  //   isCooldown1.value = false;
  // }, 5000);
}
function handleRelease1() {
  isPressed1.value = false;
}

// Sayıları formatlamak için
function formatNumber(value: number): string {
  return new Intl.NumberFormat("tr-TR").format(value);
}

const dongu = ref<ReturnType<typeof setInterval> | null>(null);
type RouteParams = {
  mesaj: string; // Rota parametreleri her zaman string olarak gelir
};

const route = useRoute();
const mesaj = route.meta.title;

onMounted(() => {
  pageTitleStore.setTitle(mesaj);
  pageTitleStore.setToplam('');
  getData();

  dongu.value = setInterval(() => {
    const now = new Date();
    currentDate.value = now.toLocaleDateString("tr-TR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    currentTime.value = now.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      // second: "2-digit",
    });
    isCooldown.value = toplamListe.value == 0 ? true : cooldownTime.value == 0 ? false : true;

    // her 5 saniyede bir veri çek
    getData();
  }, 3000);
});

// Component destroyed (cleanup interval)
onBeforeUnmount(() => {
  if (dongu.value) {
    clearInterval(dongu.value);
  }
});

</script>






<style scoped>
.demo-container,
#app,
#page {
  height: 100%;
  min-height: 300px;
}

.item {
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.mantar-buton {
  position: relative;
  background: linear-gradient(145deg, #f7bcbc, #e86165);
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.6) !important;
}

.button-icon {
  block-size: auto;
  inline-size: 100%;
}


.sari {
  background-color: #e7f368;
}

.mavi {
  background-color: #8d88ed;
}

.yesil {
  background-color: #88ed8f;
}

.kirmizi {
  background-color: #ed8888;
}

#page p {
  font-size: 20px;
  padding-block-start: 10px;
  text-align: center;
}

.rotated-text {
  display: inline-block;
  margin-block-start: 110px;
  margin-inline-start: 15px;
  transform: rotate(-90deg);
  transform-origin: left top;
  white-space: nowrap;
}

.spin-enter-active,
.spin-leave-active {
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.spin-enter-from {
  opacity: 0;
  transform: rotateX(-90deg);
}

.spin-enter-to {
  opacity: 1;
  transform: rotateX(0);
}

.spin-leave-from {
  opacity: 1;
  transform: rotateX(0);
}

.spin-leave-to {
  opacity: 0.5;
  transform: rotateX(90deg);
}

.animated-number {
  animation: fadeIn 1s ease;
  font-family: 'Montserrat';
  font-size: 9.6rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.uygun {
  margin-block-start: 10px !important;
  margin-inline-end: 10px;
}

.iskarta {
  margin-block-start: 10px !important;
  margin-inline-end: 10px;
}

td {
  height: 12px !important;
}

th {
  background-color: #c1bfe5 !important;
  height: 40px !important;
  font-size: 18px;
  font-weight: bold !important;
  text-align: center;
}
</style>
