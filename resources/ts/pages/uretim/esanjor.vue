<template>
  <router-view :key="$route.fullPath" />
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
            <h2>HURDA</h2>
            <VCard class="mantar-buton text-center mt-2 d-flex align-center justify-center position-relative" :style="{
              transform: isPressed1 ? 'scale(0.95)' : 'scale(1)',
              transition: 'transform 0.1s ease',
              cursor: isCooldown1 ? 'not-allowed1' : 'pointer1',
            }" height="100" width="100" style="border-radius: 75px;" @mousedown="handlePress1"
              @mouseup="handleRelease1" @mouseleave="handleRelease1" @touchstart.prevent="handlePress1"
              @touchend="handleRelease1" @touchcancel="handleRelease1">
              <img :src="isCooldown ? cooldownImage : cooldownImage1" alt="Buton Simge" class="button-icon" />
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




    <DxItem>
      <DxLocation :row="0" :col="2" :rowspan="4" />
      <div>
        <VExpansionPanels v-model="panel" class="no-icon-rotate">
          <VExpansionPanel>
            <VExpansionPanelTitle disable-icon-rotate>
              SIRADAKİ YARI MAMULLER - <h3> &nbsp; &nbsp; {{ toplamListe
                }} &nbsp;</h3> adet
              <template #actions>
                <VIcon size="18" icon="tabler-list-numbers" color="primary" />
              </template>
            </VExpansionPanelTitle>
            <VExpansionPanelText>
              <div style="margin-block-end: -10px; margin-inline: -10px;">
                <DxDataGrid id="grdSiradakiler" ref="dataGrid" :data-source="veriListe" key-expr="ID" :height="427"
                  :show-borders="true" :allow-column-resizing="true" width="100%">
                  <DxColumn data-field="ID" caption="ID" data-type="number" :visible="true" :width="60" />
                  <DxColumn data-field="ISEMRIID" caption="İŞ EMRİ" data-type="number" :visible="true" :width="80" />
                  <DxColumn data-field="URUNKODU" caption="ÜRÜN KODU" data-type="string" :visible="true" :width="140" />
                  <DxColumn data-field="URUNADI" caption="ÜRÜN ADI" data-type="string" :visible="true" />
                  <DxColumn data-field="BARKOD" caption="BARKOD" data-type="string" :visible="true" />
                  <DxLoadPanel :key="loadingVisible" v-model:visible="loadingVisible" :show-indicator="true"
                    :show-pane="true" :shading="true" />
                  <DxSorting mode="none" />
                  <DxScrolling mode="virtual" row-rendering-mode="virtual" />

                </DxDataGrid>
              </div>
            </VExpansionPanelText>
          </VExpansionPanel>

          <VExpansionPanel>
            <VExpansionPanelTitle disable-icon-rotate>
              İş Emirleri
              <template #actions>
                <VIcon size="18" icon="tabler-calendar-cog" color="success" />
              </template>
            </VExpansionPanelTitle>
            <VExpansionPanelText>
              <!-- <VCard class="pa-1 mt-0" height="145">
                <VRow>
                  <VCol cols="1" class="ma-0 pa-0 text-wrap">
                    <h3 class="rotated-text" style="margin-block-start: 125px;">İŞ EMRİ - {{ toplamEmir }}</h3>
                  </VCol>
                  <VCol cols="11">-->
              <div style="margin-block-end: -10px; margin-inline: -10px;">
                <DxDataGrid id="grdEmirler" :data-source="veriEmirler" key-expr="ID" :height="427" :show-borders="true"
                  :focused-row-enabled="true" :allow-column-resizing="true" width="100%" @row-dbl-click="onRowDblClick">
                  <DxEditing :use-icons="true" mode="row" />
                  <DxColumn type="buttons" :width="40">
                    <DxButton hint="Clone" icon="login" :visible="true" :disabled="false" @click="UretimeAl" />
                  </DxColumn>
                  <DxColumn data-field="ID" caption="ID" data-type="number" :visible="true" :width="40" />
                  <DxColumn data-field="KOD" caption="ÜRÜN KODU" data-type="string" :visible="true" :width="120" />
                  <DxColumn data-field="TANIM" caption="ÜRÜN ADI" data-type="string" :visible="true" />
                  <DxColumn data-field="PLANLANANMIKTAR" caption="PLAN" data-type="number" :visible="true"
                    :width="70" />
                  <DxColumn data-field="URETIMMIKTAR" caption="ÜRETİM" data-type="number" :visible="true" :width="70" />

                  <DxSorting mode="none" />
                  <DxScrolling mode="virtual" row-rendering-mode="virtual" />
                </DxDataGrid>
              </div>
              <!--  </VCol>
                </VRow>
              </VCard> -->
            </VExpansionPanelText>
          </VExpansionPanel>

          <VExpansionPanel>
            <VExpansionPanelTitle disable-icon-rotate>
              Hurdalar
              <template #actions>
                <VIcon size="18" icon="tabler-alert-triangle" color="warning" />
              </template>
            </VExpansionPanelTitle>
            <VExpansionPanelText>
              <!-- <VCard class="pa-1 mt-2" height="164">
                <VRow>
                  <VCol cols="1" class="ma-0 pa-0 text-wrap">
                    <h3 class="rotated-text" style="margin-block-start: 140px;">ISKARTALAR</h3>
                  </VCol>
                  <VCol cols="11">-->
              <div style="margin-block-end: -10px; margin-inline: -10px;">
                <DxDataGrid id="grdIskartalar" :data-source="veriIskartalar" key-expr="ID" :height="427"
                  :show-borders="true">
                  <DxColumn data-field="ID" caption="ID" data-type="number" :visible="false" :width="60" />
                  <DxColumn data-field="ESANJORID" caption="EŞ.ID" data-type="number" :visible="true" :width="60" />
                  <DxColumn data-field="ISEMRIID" caption="İŞ EMRİ" data-type="number" :visible="true" :width="80" />
                  <DxColumn data-field="URUNKODU" caption="ÜRÜN KODU" data-type="string" :visible="true" :width="120" />
                  <DxColumn data-field="URUNADI" caption="ÜRÜN ADI" data-type="string" :visible="true" />
                  <DxColumn data-field="SEBEP" caption="SEBEP" data-type="string" :visible="true" />

                  <DxSorting mode="none" />
                  <DxScrolling mode="virtual" row-rendering-mode="virtual" />
                </DxDataGrid>
              </div>
              <!--   </VCol>
                </VRow>
              </VCard> -->
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </div>
    </DxItem>



  </DxResponsiveBox>


  <DxPopup v-model:visible="popupHurdaVisible" :width="400" :height="230" :hide-on-outside-click="false"
    :show-close-button="false" title="Hurda Sebebini Giriniz">
    <template #content>
      <VCol cols="12" class="mt-2">
        <AppSelect v-model="durusSebebi" placeholder="Sebep Giriniz..." :items="sebepOptions" />
      </VCol>
    </template>
    <DxToolbarItem widget="dxButton" toolbar="bottom" location="center" :options="kaydetOptions"
      @click="HurdaKaydet()" />
    <DxToolbarItem widget="dxButton" toolbar="bottom" location="center" :options="vazgecOptions" />
  </DxPopup>

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
  DxEditing,
  DxButton,
  DxLoadPanel,
  DxDataGridTypes,
  // DxSummary,
  // DxTotalItem,
} from "devextreme-vue/data-grid";
import { Ref, ref, toRaw } from "vue";
import butonyesil from '@images/buton-yesil1.png'
import butonkirmizi from '@images/buton-kirmizi1.png'
import butonmavi from '@images/buton-mavi1.png'
import axios from "axios";
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router';
import notify from "devextreme/ui/notify";
import { DxPopup, DxToolbarItem } from 'devextreme-vue/popup';
import DxSelectBox from "devextreme-vue/cjs/select-box";

const screen = (width) => ((width < 700) ? 'sm' : 'lg');

// Görseller
const defaultImage = butonyesil;
const cooldownImage = butonkirmizi; // Bekleme süresindeyken
const cooldownImage1 = butonmavi; // Bekleme süresindeyken
const isUserInfoEditDialogVisible = ref(false)
const popupHurdaVisible = ref(false);

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
const tempURUNID = ref<number | 0>(0);
const tempISEMRIID = ref<number | 0>(0);
const tempBARKOD = ref<string | ''>('');
const uygun = ref(0);
const iskarta = ref(0);
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
const panel = ref(0)
const aktifIsemriID = ref(0);
const durusSebebi = ref("");
const sebepOptions = ref<string[]>([])


const kaydetOptions = {
  width: 100,
  type: 'success',
  text: 'Kaydet',
  stylingMode: 'contained',
};

const vazgecOptions = {
  width: 100,
  type: 'normal',
  text: 'Vazgeç',
  stylingMode: 'contained',
  onClick: () => {
    popupHurdaVisible.value = false;
    durusSebebi.value = "";
  },
};

let operasyon1 = ref("");
let operasyon2 = ref("");

const UretimeAl = (e: DxDataGridTypes.ColumnButtonClickEvent<VeriEmirler>) => {
  aktifIsemriID.value = e.row!.data.ID || 0;
  getData();
};
const onRowDblClick = (e: any) => {
  aktifIsemriID.value = e.data.ID || 0;
  getData();
};

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
  BARKOD?: number | null;
}

const getData = async () => {
  try {
    pageTitleStore.setToplam(" ( " + (aktifIsemriID.value > 0 ? "Aktif İş Emri ID: " + aktifIsemriID.value : "İş emri seçiniz...") + " )");
    const response = await axios.get("/api/listeEsanjor", {
      params: {
        isemriID: aktifIsemriID.value,
        operasyon1: operasyon1.value,
        operasyon2: operasyon2.value
      }
    });

    veriListe.value = response.data.liste;
    veriEmirler.value = response.data.emirler;
    veriIskartalar.value = response.data.iskartalar;
    toplamListe.value = response.data.toplamListe;
    toplamEmir.value = response.data.toplamEmir;
    iskarta.value = response.data.toplamIskarta;
    uygun.value = response.data.toplamUretim;
  } catch (error) {
    console.error("Veri çekilirken hata oluştu: ", error);
  } finally {
  }
};

// *********** Üretim ****************
async function handlePress() {
  if (isCooldown.value) return;

  isPressed.value = true;
  isPressedg.value = true;
  // uygun.value = uygun.value + 1;

  tempID.value = Number(veriListe.value[0].ID);
  axios
    .post("/api/operasyonKaydet", {
      params: {
        id: veriListe.value[0].ID,
        urunID: veriListe.value[0].URUNID,
        isemriID: veriEmirler.value[0].ID,
        barkod: veriListe.value[0].BARKOD,
        operasyon1: operasyon1.value,
        operasyon2: operasyon2.value,
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

  cooldownTime.value = 7;

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
function handleRelease() {
  isPressed.value = false;
}

// *********** Geri Al ****************
async function handlePressg() {
  if (!isCooldown.value || !isPressedg.value) return;

  // alert(operasyon2.value);
  axios
    .post("/api/geriAl", {
      params: {
        id: tempID.value,
        userID: userData.value.id,
        operasyon2: operasyon2.value,
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

  // setTimeout(() => {
  //   isPressedg.value = false;
  // }, 5000);
}
function handleReleaseg() {
  isPressed.value = false;
}

// *********** Iskarta ****************
const sebepGir = computed(() => {
  return {
    ID: Number(tempID),
    SEBEP: String(''),
    URUNID: Number(tempURUNID),
    ISEMRIID: Number(tempISEMRIID),
    BARKOD: String(tempBARKOD),
    OPERASYON: String(operasyon2),
    USERID: Number(userData.value.id),
  };
});

async function handlePress1() {
  if (isCooldown1.value || toplamListe.value == 0) return;

  popupHurdaVisible.value = true;
  // isUserInfoEditDialogVisible.value = !isUserInfoEditDialogVisible.value;

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

  // setTimeout(() => {
  //   isCooldown1.value = false;
  // }, 5000);
}
function handleRelease1() {
  isPressed1.value = false;
}


const HurdaKaydet = async () => {
  try {
    axios
      .post("/api/iskartaEkle", {
        params: {
          id: Number(veriListe.value[0].ID),
          urunID: Number(veriListe.value[0].URUNID),
          isemriID: Number(veriListe.value[0].ISEMRIID),
          barkod: String(veriListe.value[0].BARKOD),
          sebep: durusSebebi.value,
          operasyon: operasyon2.value,
          userID: userData.value.id,
        },
      })
      .catch((error) => {
        console.error("Veri çekilirken hata oluştu: ", error);
      })
  } catch (error) {
    console.error('Veri eklenirken hata oluştu:', error)
  } finally {
    popupHurdaVisible.value = false;
    durusSebebi.value = "";
  }
}

// Sayıları formatlamak için
function formatNumber(value: number): string {
  return new Intl.NumberFormat("tr-TR").format(value);
}

const dongu = ref<ReturnType<typeof setInterval> | null>(null);

onMounted(async () => {
  try {
    const response = await axios.get('/api/sebep-list')
    sebepOptions.value = response.data.map((item: { SEBEP: string }) => item.SEBEP)
  } catch (error) {
    console.error('Sebep listesi yüklenirken hata oluştu:', error)
  }

  pageTitleStore.setToplam(" (İş Emri seçiniz...)");
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

    getData();
  }, 2000);
});

onBeforeUnmount(() => {
  if (dongu.value) {
    clearInterval(dongu.value);
  }
});


const route = useRoute();

watch(
  () => route.meta.title,
  (newTitle) => {
    const mesaj = route.meta.title;

    switch (mesaj) {
      case "SERPANTİN BÜKÜM":
        operasyon1.value = "OPERASYON1";
        operasyon2.value = "OPERASYON2";
        break;
      case "SERPANTİN END-FORMING":
        operasyon1.value = "OPERASYON2";
        operasyon2.value = "OPERASYON3";
        break;
      case "YIKAMA - SIZDIRMAZLIK":
        operasyon1.value = "OPERASYON3";
        operasyon2.value = "OPERASYON4";
        break;
      case "SERPANTİN AÇMA - TARAK":
        operasyon1.value = "OPERASYON4";
        operasyon2.value = "OPERASYON5";
        break;
      case "EŞANJÖR MONTAJ":
        operasyon1.value = "OPERASYON5";
        operasyon2.value = "MAMULFINAL";
        break;
      default:
        break;
    }
    document.title = "OFT Yazılım - " + String(mesaj);
    pageTitleStore.setTitle(mesaj);
    pageTitleStore.setToplam('');
  },
  { immediate: true } // İlk değer için de çalışsın
);
</script>





<style scoped>
.demo-container,
#app,
#page {
  block-size: 100%;
  min-block-size: 300px;
}

.item {
  align-items: center;
  justify-content: center;
  padding: 10px;
  block-size: 100%;
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
  block-size: 12px !important;
}

th {
  background-color: #c1bfe5 !important;
  block-size: 40px !important;
  font-size: 18px;
  font-weight: bold !important;
  text-align: center;
}
</style>
