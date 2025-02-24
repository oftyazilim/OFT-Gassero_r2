<template>
  <VCard class="mt-0 pa-0 pt-2">
    <VCardText class="mt-0 pa-2">
      <VCol cols="12" class="mt-2 pa-1 pe-2">
        <div id="liste" style="margin-block-end: -10px;">
          <DxContextMenu :data-source="menuItems" :width="200" target="#grid" @item-click="itemClick" />

          <DxDataGrid id="grid" ref="dataGridRef" :key="gridKey" :data-source="gridData" key-expr="ID"
            :show-borders="true" :focused-row-enabled="true" :row-alternation-enabled="true" :min-width="200"
            @exporting="onExporting" :allow-column-reordering="true" :column-auto-width="false"
            :allow-column-resizing="true" column-resizing-mode="widget" :auto-navigate-to-focused-row="true"
            v-model:focused-row-key="focusedRowKey">

            <!-- <DxColumn type="selection" :fixed="true" fixedPosition="left" /> -->
            <DxColumn data-field="ID" caption="ID" :visible="false" :min-width="90" />
            <DxColumn data-field="ISTASYON" caption="İST. ADI" :visible="true" :width="80" />
            <DxColumn data-field="OPERATOR" caption="OPERATÖR" :visible="true" :width="130" />
            <DxColumn data-field="URUN_KODU" caption="ÜRÜN KODU" :visible="true" :width="130" />
            <DxColumn data-field="URUN_ADI" caption="ÜRÜN ADI" :min-width="250" />
            <DxColumn data-field="SERI_NO" caption="SERİ NO" :width="150" :visible="true" />
            <DxColumn data-field="BASLAMA_ZAMANI" caption="TARİH" data-type="date" :width="140" :visible="true" :format="{
              formatter: (date: any) => {
                const formattedDate = new Intl.DateTimeFormat('tr-TR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }).format(new Date(date));
                return formattedDate.replace(/\//g, '.');
              },
            }" />
            <DxColumn data-field="BASLAMA_ZAMANI" caption="SAAT" data-type="date" :width="90" :visible="true" :format="{
              formatter: (date: any) => {
                const formattedDate = new Intl.DateTimeFormat('tr-TR', {
                  hour: '2-digit',
                  minute: '2-digit',
                }).format(new Date(date));

                return formattedDate.replace(/\//g, '.');
              },
            }" />
            <DxColumn data-field="TEST_SURESI" caption="SÜRE (dk)" :width="120" :visible="true"
              cell-template="surecCellTemplate" />
            <DxColumn data-field="TEST_SONUCU" caption="SONUÇ" data-type="string" :width="100" :visible="true"
              :cell-template="getIconType" />
            <DxColumn data-field="IE_ID" caption="İŞ EMRİ ID" data-type="number" :width="60" :visible="false" />
            <DxColumn data-field="ESANJOR_KODU" caption="EŞANJÖR KODU" :min-width="120" :width="140" />
            <DxColumn data-field="FAN_KODU" caption="FAN KODU" :min-width="120" :width="140" />
            <DxColumn data-field="KART_KODU" caption="KART KODU" :min-width="120" :width="140" />
            <DxColumn data-field="POMPA_KODU" caption="POMPA KODU" :min-width="120" :width="140" />
            <DxColumn data-field="GAZ_KODU" caption="GAZ KODU" :min-width="120" :width="140" />
            <DxColumn data-field="BARKOD_ESANJOR" caption="BARKOD EŞANJÖR" :min-width="120" :width="140" />
            <DxColumn data-field="BARKOD_FAN" caption="BARKOD FAN" :min-width="120" :width="140" />
            <DxColumn data-field="BARKOD_POMPA" caption="BARKOD POMPA" :min-width="120" :width="140" />

            <DxLoadPanel :key="loadingVisible" v-model:visible="loadingVisible" :show-indicator="true" :show-pane="true"
              :shading="true" />
            <DxSelection mode="multiple" select-all-mode="page" show-check-boxes-mode="onClick" />
            <DxGrouping :auto-expand-all="expandAll" />
            <DxGroupPanel :visible="true" />
            <DxHeaderFilter :visible="true" />
            <DxFilterPanel :visible="false" />
            <DxFilterRow :visible="goster" />
            <DxSearchPanel :visible="true" :width="240" />
            <DxScrolling mode="virtual" row-rendering-mode="virtual" show-scrollbar="always" />
            <DxSorting mode="multiple" />
            <DxExport :enabled="true" :allow-export-selected-data="false" />

            <DxColumnChooser height="540px" :enabled="true" mode="select" :position="position">
              <DxColumnChooserSearch :enabled="true" />
              <DxColumnChooserSelection :allow-select-all="true" :select-by-click="true" :recursive="true" />
            </DxColumnChooser>
            <hr>
            <br>
            <DxToolbar>
              <DxItem location="before" name="groupPanel" />
              <DxItem location="before" locate-in-menu="auto" template="collapseTemplate" />
              <DxItem location="before" locate-in-menu="auto" template="filtreTarih" />
              <DxItem location="before" locate-in-menu="auto" template="yenileTemplate"
                menu-item-template="menuYenileTemplate" @click="Yenile" />

              <DxItem location="before" locate-in-menu="auto" template="filtreGun" menu-item-template="menufiltreGun"
                @click="Filtrele('g')" />

              <DxItem location="before" locate-in-menu="auto" template="filtreAy" menu-item-template="menufiltreAy"
                @click="Filtrele('a')" />

              <DxItem location="before" locate-in-menu="auto" template="filtreYil" menu-item-template="menufiltreYil"
                @click="Filtrele('y')" />

              <DxItem location="after" locate-in-menu="auto" template="filtreTemizleTemplate"
                menu-item-template="menuFiltreTemizleTemplate" @click="FiltreTemizle" />
              <DxItem location="after" locate-in-menu="auto" template="filtreGosterTemplate"
                menu-item-template="menuFiltreGosterTemplate" @click="toggleGoster" />
              <DxItem name="exportButton" />
              <DxItem name="columnChooserButton" />
              <DxItem name="searchPanel" />
            </DxToolbar>

            <DxSummary>
              <DxGroupItem :align-by-column="true" column="isemri_no" summary-type="count" display-format="{0} adet"
                :alignment="right" />
              <DxTotalItem :align-by-column="true" column="isemri_no" summary-type="count" display-format="{0} adet"
                :alignment="right" />
            </DxSummary>

            <template #filtreGun>
              <DxButton icon="filter" styling-mode="text" text="Gün" hint="Günlük" id="gun" />
            </template>
            <template #menufiltreGun>
              <div style="display: flex; align-items: center">
                <i class="dx-icon dx-icon-filter"></i>
                <span style="margin-inline-start: 8px">Günlük</span>
              </div>
            </template>

            <template #filtreAy>
              <DxButton icon="filter" styling-mode="text" text="Ay" hint="Aylık" id="ay" />
            </template>
            <template #menufiltreAy>
              <div style="display: flex; align-items: center">
                <i class="dx-icon dx-icon-filter"></i>
                <span style="margin-inline-start: 8px">Aylık</span>
              </div>
            </template>

            <template #filtreYil>
              <DxButton icon="filter" styling-mode="text" text="Yıl" hint="Yıllık" id="yil" />
            </template>
            <template #menufiltreYil>
              <div style="display: flex; align-items: center">
                <i class="dx-icon dx-icon-filter"></i>
                <span style="margin-inline-start: 8px">Yıllık</span>
              </div>
            </template>

            <template #filtreTarih>
              <div style="
              inline-size: 280px;
              margin-block: -10px;
              margin-block-end: 20px;">
                <DxDateRangeBox :value="selectedDateRange" :min="min" :max="max" @value-changed="onDateRangeChanged"
                  style="inline-size: 100%" />
              </div>
            </template>


            <template #filtreTemizleTemplate>
              <DxButton icon="notequal" styling-mode="text" hint="Filtre Temizle" id="filtretemizle" />
              <!-- <VIcon size="24" icon="tabler-x" /> -->
            </template>
            <template #menuFiltreTemizleTemplate>
              <div style="display: flex; align-items: center;">
                <i class="dx-icon dx-icon-undo"></i>
                <span style="margin-inline-start: 8px;">Filtre Temizle</span>
              </div>
            </template>

            <template #yenileTemplate>
              <DxButton icon="refresh" styling-mode="text" hint="Yenile" id="sayim" />
            </template>
            <template #menuYenileTemplate>
              <div style="display: flex; align-items: center;">
                <i class="dx-icon dx-icon-refresh"></i>
                <span style="margin-inline-start: 8px;">Yenile</span>
              </div>
            </template>

            <template #filtreGosterTemplate>
              <DxButton icon="filter" styling-mode="text" hint="Filtre Goster" />
            </template>
            <template #menuFiltreGosterTemplate>
              <div style="display: flex; align-items: center;">
                <i class="dx-icon dx-icon-filter"></i>
                <span style="margin-inline-start: 8px;">Filtre Göster</span>
              </div>
            </template>

            <template #collapseTemplate>
              <DxButton :icon="expandAll ? 'collapse' : 'expand'" hint="expandAll ? 'Daralt' : 'Genişlet'" width="40"
                height="40" styling-mode="text" @click="toggleExpandAll" />
            </template>

            <template #surecCellTemplate="{ data: cellData }">

              <SurecCell :cell-data="cellData" :max-deger="maxSure" />
            </template>

          </DxDataGrid>
        </div>
      </VCol>
    </VCardText>
  </VCard>
</template>

<script setup lang="ts">


import { onMounted, ref } from "vue";
import { usePageTitleStore } from "@/stores/pageTitle";
import axios from "axios";
import { DxButton } from "devextreme-vue/button";
import DxContextMenu, { DxContextMenuTypes } from 'devextreme-vue/context-menu';
import {
  DxColumn,
  DxColumnChooser,
  DxColumnChooserSearch,
  DxColumnChooserSelection,
  DxDataGrid,
  DxDataGridTypes,
  DxExport,
  DxFilterPanel,
  DxFilterRow,
  DxGrouping,
  DxGroupItem,
  DxGroupPanel,
  DxHeaderFilter,
  DxItem,
  DxScrolling,
  DxSearchPanel,
  DxSelection,
  DxSummary,
  DxToolbar,
  DxSorting,
  DxRowDragging,
  DxStateStoring,
} from "devextreme-vue/data-grid";
import { DxLoadPanel } from 'devextreme-vue/load-panel';
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";
import SurecCell from "./SurecCell.vue";
import DxDateRangeBox from "devextreme-vue/date-range-box";

// Tarihi yyyy-MM-dd formatına dönüştüren fonksiyon
const formatDate = (date) => {
  if (!date) return null;
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Ayları 0 tabanlı olduğu için +1
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const pageTitleStore = usePageTitleStore();
const expandAll = ref(false);
const gridData = ref([]);
const goster = ref(false);
const maxSure = ref(0);
const dataGridRef = ref<DxDataGrid | null>(null);
const loadingVisible = ref<boolean>(false);
const position = { of: 'window' };
const gridKey = ref(Date.now());
const focusedRowKey = ref(0);
const toplamUygun = ref(0);
const toplamHatali = ref(0);

const now = new Date();
const initialDates = [new Date(now.getTime()), new Date(now.getTime())];
const initialDatesMonth = [
  new Date(now.getFullYear(), now.getMonth(), 1), // Ayın ilk günü
  new Date(now.getTime()), // Geçerli gün
];

const initialDatesYear = [
  new Date(now.getFullYear(), 0, 1), // Yılın ilk günü
  new Date(now.getTime()), // Geçerli gün
];

const selectedDateRange = ref(initialDates);
const filterValue = ref(formatDate(selectedDateRange.value[0])); // Formatlanmış başlangıç tarihi
const filterValue1 = ref(formatDate(selectedDateRange.value[1])); // Formatlanmış bitiş tarihi

// Durumu localStorage'dan yükle
const loadGridState = () => {
  const savedState = localStorage.getItem("DTTestleri");
  if (savedState) {
    dataGridRef.value?.instance.state(JSON.parse(savedState));
    // console.log("Grid durumu yüklendi:", savedState);
  }
};
const onStateResetClick = () => {
  localStorage.removeItem("DTTestleri");
  dataGridRef.value!.instance!.state(null);
};
const saveGridState = () => {
  const state = dataGridRef.value?.instance.state();
  localStorage.setItem("DTTestleri", JSON.stringify(state));
  // console.log("Grid durumu kaydedildi:", state);
};

const onDateRangeChanged = (newValue) => {
  if (!newValue || !newValue.value || newValue.value.length !== 2) {
    console.warn("Geçersiz tarih aralığı");
    selectedDateRange.value = initialDates;
    filterValue.value = formatDate(selectedDateRange.value[0]);
    filterValue1.value = formatDate(selectedDateRange.value[1]);
    return;
  }
  const [startDate, endDate] = newValue.value;
  selectedDateRange.value = [startDate, endDate];
  filterValue.value = formatDate(startDate);
  filterValue1.value = formatDate(endDate);
  //getData();
};

const Filtrele = (e: string) => {
  switch (e) {
    case "g":
      selectedDateRange.value = initialDates;
      filterValue.value = formatDate(initialDates[0]);
      filterValue1.value = formatDate(initialDates[1]);
      break;
    case "a":
      selectedDateRange.value = initialDatesMonth;
      filterValue.value = formatDate(initialDatesMonth[0]);
      filterValue1.value = formatDate(initialDatesMonth[1]);
      break;
    case "y":
      selectedDateRange.value = initialDatesYear;
      filterValue.value = formatDate(initialDatesYear[0]);
      filterValue1.value = formatDate(initialDatesYear[1]);
      break;
  }
  getData();
};

const getIconType = (cellElement: HTMLElement, cellInfo: any): void => {
  const sonuc = cellInfo.data.TEST_SONUCU;

  cellElement.innerText = cellInfo.text;

  const createIcon = (color: string, dolu: boolean) => {
    const icon = document.createElement("span");
    icon.className = dolu ? "dx-icon dx-icon-isnotblank" : "dx-icon dx-icon-isblank";
    icon.style.marginRight = "8px"; // İkon ile metin arasına boşluk ekle
    icon.style.color = color; // İkon rengi
    icon.style.fontSize = "16"; // Ana span'ı etkisizleştir
    icon.style.display = "inline-flex";
    return icon;
  };

  if (sonuc === "HATALI") {
    const redIcon = createIcon("red", true);
    if (cellElement.firstChild) {
      cellElement.insertBefore(redIcon, cellElement.firstChild);
    } else {
      cellElement.appendChild(redIcon); // İlk çocuk yoksa sona ekle
    }
  } else {
    const greenIcon = createIcon("limegreen", true);
    if (cellElement.firstChild) {
      cellElement.insertBefore(greenIcon, cellElement.firstChild);
    } else {
      cellElement.appendChild(greenIcon); // İlk çocuk yoksa sona ekle
    }
  }
};

const FiltreTemizle = () => {
  dataGridRef.value?.instance.clearFilter();
};

const toggleGoster = () => {
  goster.value = !goster.value;
};

const getData = async () => {
  try {
    loadingVisible.value = true;
    const response = await axios.get("/api/getdtkazantest", {
      params: {
        filterValue: filterValue.value,
        filterValue1: filterValue1.value,
      },
    });
    gridData.value = response.data.data;
    maxSure.value = parseInt(response.data.max);
    toplamUygun.value = parseInt(response.data.uygun);
    toplamHatali.value = parseInt(response.data.hatali);
    pageTitleStore.setToplam(formatNumber(response.data.toplam).toString());
    pageTitleStore.setEk1("Uygun: " + formatNumber(response.data.uygun).toString());
    pageTitleStore.setEk2("Hatalı: " + formatNumber(response.data.hatali).toString());
    pageTitleStore.setEk3("Başarı Oranı: %" + formatNumber(response.data.uygun / response.data.toplam * 100).toString());

  } catch (error) {
    console.error("Veri çekilirken hata oluştu: ", error);
  } finally {
    loadingVisible.value = false;
  }
};

onMounted(async () => {
  filterValue.value = formatDate(selectedDateRange.value[0]);
  filterValue1.value = formatDate(selectedDateRange.value[1]);
  pageTitleStore.setTitle("Duvar Tipi Kazan Testleri: ");

  loadGridState();
  nextTick(() => {
    dataGridRef.value?.instance.clearSelection();
  });
});

onBeforeUnmount(() => {

  pageTitleStore.setToplam("");
  pageTitleStore.setEk1("");
  pageTitleStore.setEk2("");
  pageTitleStore.setEk3("");
});

const Yenile = async () => {
  await getData(); // Veri çekme işlemi
};

const toggleExpandAll = () => {
  expandAll.value = !expandAll.value;
};

const userData = useCookie<any>("userData");

const onExporting = (e: DxDataGridTypes.ExportingEvent) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("KazanTestleri");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "KazanTestleri.xlsx"
      );
    });
  });

  e.cancel = true;
};

const menuItems = [
  { text: 'Yenile' },
  { text: 'Düzen Yükle' },
  { text: 'Düzen Kaydet' },
  { text: 'Düzen Sıfırla' },
];

function itemClick({ itemData }: DxContextMenuTypes.ItemClickEvent) {
  if (!itemData?.items) {
    switch (itemData?.text) {
      case 'Yenile':
        getData()
        break;
      case 'Düzen Yükle':
        loadGridState();
        break;
      case 'Düzen Kaydet':
        saveGridState();
        break;
      case 'Düzen Sıfırla':
        onStateResetClick();
        break;
      default:
        break;
    }
  }
}

const formatNumber = (number) => {
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(
    number
  );
};
</script>


<style>
.v-progress-linear {
  inline-size: 100% !important;
}

#grid {
  display: flex;
  flex-direction: column;
  block-size: 85vh;
  margin-block: -20px 20px;
}

#grid .informer {
  display: grid;
  grid-template-columns: 100%;
  inline-size: 120px;
  padding-inline-end: 20px;
  text-align: center;
}

#grid .count {
  font-size: 18px;
  font-weight: 500;
}

#grid .dx-toolbar-items-container {
  min-block-size: 44px;
}

.custom-col {
  flex: 0 0 12.5%;

  /* 1.5 sütun genişliği */
  max-inline-size: 12.5%;
}

.custom-textarea textarea {
  block-size: 80px !important;

  /* Yüksekliği azaltmak için */
}

.kalin input {
  font-weight: bold !important;
}

.kalin label {
  font-weight: normal !important;
}

/* .label {
  font-size: 12px;
} */

.demo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  block-size: 450px;
  gap: 40px;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.dx-popup-content {
  font-size: 12px;
}

.caption {
  font-weight: 500;
  padding-block-end: 8px;
}

.content {
  display: flex;
  justify-content: space-between;
}

/* İkonların boyutunu özelleştirmek isterseniz */
.dx-icon-info {
  font-size: 16px;
}

.popup-center {
  display: flex;
  align-items: center;

  /* Dikeyde ortalama */
  justify-content: center;

  /* Yatayda ortalama */
  block-size: 100%;

  /* Popup içeriğinin tamamını kaplasın */
}
</style>
