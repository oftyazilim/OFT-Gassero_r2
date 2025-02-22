<template>
  <VCard class="pa-1 ps-0 ma-0">

    <VTabs v-model="currentTab" class="v-tabs-pill" fixed-tabs>
      <VTab>
        Girdiler
      </VTab>
      <VTab>
        Çıktılar
      </VTab>
    </VTabs>

    <VWindow v-model="currentTab">
      <VWindowItem value="tab-1">
        <VCardText class="tab pa-0">
          <DxDataGrid class="grid" ref="dataGridRef" :data-source="gridData" key-expr="ID" :show-borders="true"
            :focused-row-enabled="true" :allow-column-resizing="true" column-resizing-mode="widget"
            :selected-rows-keys="selectedRows" @selection-changed="onSelectionChanged">

            <DxColumn data-field="DURUM" caption="DURUM" data-type="string" :visible="false" :width="300"
              :cell-template="getIconType" sort-order="asc" />
            <DxColumn data-field="ID" data-type="number" caption="ID" :visible="false" sort-order="desc" :width="80" />
            <DxColumn data-field="OPERASYON" caption="OPERASYON ADI" data-type="string" :visible="false"
              :min-width="130" />
            <DxColumn data-field="OPERASYON_TANIMI" caption="OPERASYON" data-type="string" :visible="true"
              :min-width="200" :group-index="0" />
            <DxColumn data-field="URUNID" caption="ÜRÜN ID" :visible="true" data-type="number" :width="110" />
            <DxColumn data-field="URUNKODU" caption="ÜRÜN KODU" :visible="true" data-type="number" :width="150" />
            <DxColumn data-field="URUNADI" caption="ÜRÜN ADI" :visible="true" data-type="string" :width="200" />
            <DxColumn data-field="ESANJORID" caption="EŞJ ID" data-type="number" :visible="false" :width="120" />
            <DxColumn data-field="BARKOD" caption="BARKOD" data-type="string" :width="120" />
            <DxColumn data-field="KARANTINASEBEP" caption="KARANTİNA SEBEP" data-type="string" :min-width="150" />
            <DxColumn data-field="KARANTINATARIH" caption="KARANTİNA TARİH" data-type="date" :width="180"
              :visible="true" :format="{
                formatter: (date) => {
                  const formattedDate = new Intl.DateTimeFormat('tr-TR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  }).format(new Date(date));

                  return formattedDate.replace(/\//g, '.');
                },
              }" />

            <DxSelection mode="multiple" select-all-mode="page" show-check-boxes-mode="onClick" />
            <DxGroupPanel :visible="true" />
            <DxGrouping :auto-expand-all="expandAll" />
            <DxLoadPanel :enabled="loadingVisible" />
            <DxScrolling mode="virtual" column-rendering-mode="virtual" />
            <DxHeaderFilter :visible="true" />
            <DxSearchPanel :visible="true" :width="240" placeholder="Ara..." />
            <DxColumnChooser height="540px" :enabled="true">
              <DxPosition my="right top" at="right bottom" of=".dx-datagrid-column-chooser-button" />
              <DxColumnChooserSelection :allow-select-all="true" :select-by-click="true" :recursive="true" />
            </DxColumnChooser>

            <DxSummary>
              <DxTotalItem column="BARKOD" summary-type="count" display-format="{0} adet" />
              <DxGroupItem :show-in-group-footer="false" :align-by-column="true" column="BARKOD" summary-type="count"
                display-format="{0} adet" />
            </DxSummary>

            <DxToolbar>
              <DxItem name="groupPanel" />
              <DxItem location="before" locate-in-menu="auto" template="collapseTemplate" />
              <DxItem location="before" locate-in-menu="auto" template="sonuclandirTemplate" />
              <DxItem name="columnChooserButton" />
              <DxItem name="searchPanel" />
            </DxToolbar>

            <template #aktifTemplate="{ data }">
              <template v-if="data.value === '0' || data.value === 0">
                <VIcon size="24" icon="tabler-x" />
              </template>
              <template v-else>
                <VIcon size="24" icon="tabler-check" />
              </template>
            </template>

            <template #sonuclandirTemplate>
              <DxButton icon="optionsgear" hint="sonuçlandır" width="150" text="Sonuçlandır" height="40"
                styling-mode="text" @click="SonucGir" />
            </template>

            <template #collapseTemplate>
              <DxButton :icon="expandAll ? 'collapse' : 'expand'" hint="expandAll ? 'Daralt' : 'Genişlet'" width="40"
                height="40" styling-mode="text" @click="toggleExpandAll" />
            </template>
          </DxDataGrid>
        </VCardText>
      </VWindowItem>
      <VWindowItem value="tab-2">
        <VCardText class="tab pa-0">
          <DxDataGrid class="grid" ref="dataGridRef1" :data-source="gridData1" key-expr="ID" :show-borders="true"
            :focused-row-enabled="true" :allow-column-resizing="true" @exporting="onExporting"
            column-resizing-mode="widget">

            <DxColumn data-field="DURUM" caption="DURUM" data-type="string" :visible="true" :width="130"
              :cell-template="getIconType" sort-order="asc" />

            <DxColumn data-field="ID" data-type="number" caption="ID" :visible="false" sort-order="desc" :width="80" />

            <DxColumn data-field="OPERASYON" caption="OPERASYON ADI" data-type="string" :visible="false"
              :min-width="130" />
            <DxColumn data-field="OPERASYON_TANIMI" caption="OPERASYON" data-type="string" :visible="true"
              :min-width="130" />
            <DxColumn data-field="URUNID" caption="URUN ID" :visible="false" data-type="number" :width="110" />
            <DxColumn data-field="ESANJORID" caption="EŞJ ID" data-type="number" :visible="false" :width="120" />
            <DxColumn data-field="BARKOD" caption="BARKOD" data-type="string" :width="120" />
            <DxColumn data-field="KARANTINASEBEP" caption="KARANTİNA SEBEP" data-type="string" :min-width="150" />
            <DxColumn data-field="KARANTINATARIH" caption="KRNTNA TARİH" data-type="date" :width="150" :visible="true"
              :format="{
                formatter: (date) => {
                  const formattedDate = new Intl.DateTimeFormat('tr-TR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  }).format(new Date(date));

                  return formattedDate.replace(/\//g, '.');
                },
              }" />
            <DxColumn data-field="REWORKTARIH" caption="REWORK TARİH" data-type="date" :width="150" sort-order="desc"
              :visible="true" :format="{
                formatter: (date) => {
                  const formattedDate = new Intl.DateTimeFormat('tr-TR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  }).format(new Date(date));

                  return formattedDate.replace(/\//g, '.');
                },
              }" />
            <DxColumn data-field="ISKARTASEBEP" caption="ISKARTA SEBEP" data-type="string" :min-width="150" />


            <DxGroupPanel :visible="true" />
            <DxGrouping :auto-expand-all="expandAll" />
            <DxLoadPanel :enabled="loadingVisible" />
            <DxScrolling mode="virtual" column-rendering-mode="virtual" />
            <DxHeaderFilter :visible="true" />
            <DxSearchPanel :visible="true" :width="240" placeholder="Ara..." />
            <DxExport :enabled="true" />

            <DxSummary>
              <DxTotalItem column="BARKOD" summary-type="count" display-format="{0} adet" />
              <DxGroupItem :show-in-group-footer="false" :align-by-column="true" column="BARKOD" summary-type="count"
                display-format="{0} adet" />
            </DxSummary>

            <DxToolbar>
              <DxItem name="groupPanel" />
              <DxItem location="before" locate-in-menu="auto" template="collapseTemplate1" />
              <DxItem name="columnChooserButton" />
              <DxItem name="exportButton" />
              <DxItem name="searchPanel" />
            </DxToolbar>

            <template #collapseTemplate1>
              <DxButton :icon="expandAll ? 'collapse' : 'expand'" hint="expandAll ? 'Daralt' : 'Genişlet'" width="40"
                height="40" styling-mode="text" @click="toggleExpandAll" />
            </template>
          </DxDataGrid>
        </VCardText>
      </VWindowItem>
    </VWindow>

  </VCard>

  <DxPopup v-model:visible="popupHurdaVisible" :width="450" :height="300" :hide-on-outside-click="false"
    :show-close-button="false" title="Sonucu Giriniz">
    <template #content>
      <VCol cols="12">
        <div class="popup-center">
          <h2 class="mr-4">Hurda</h2>
          <DxSwitch v-model:value="uretimeIade" />
          <h2 class="ml-4">Üretime İade</h2>
        </div>
      </VCol>
      <VCol cols="12" class="mt-2">
        <AppSelect v-model="hurdaSebebi" :disabled="uretimeIade" placeholder="Sebep Giriniz..." :items="sebepOptions" />
      </VCol>
    </template>
    <DxToolbarItem widget="dxButton" toolbar="bottom" location="center" :options="kaydetOptions"
      @click="HurdaKaydet()" />
    <DxToolbarItem widget="dxButton" toolbar="bottom" location="center" :options="vazgecOptions" />
  </DxPopup>

</template>


<script setup lang="ts">

import { usePageTitleStore } from "@/stores/pageTitle";
import axios from "axios";
import {
  DxColumnChooser,
  DxColumnChooserSelection,
  DxColumn,
  DxDataGrid,
  DxSummary,
  DxEditing,
  DxDataGridTypes,
  DxLoadPanel,
  DxScrolling,
  DxSorting,
  DxSelection,
  DxGrouping,
  DxHeaderFilter,
  DxSearchPanel,
  DxPosition,
  DxExport,
  DxTotalItem,
  DxGroupItem,
  DxToolbar,
  DxToolbarItem,
  DxItem,
  DxGroupPanel,
} from "devextreme-vue/data-grid";
import { DxButton } from 'devextreme-vue/button';
import { DxPopup } from 'devextreme-vue/popup';
import { DxSwitch } from 'devextreme-vue/switch'
import { ref } from "vue";
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";
import notify from 'devextreme/ui/notify'

const popupHurdaVisible = ref(false);
const pageTitleStore = usePageTitleStore();
const userData = useCookie<any>("userData");
const gridData = ref([]);
const gridData1 = ref([]);
const dataGridRef = ref<DxDataGrid | null>(null);
const dataGridRef1 = ref<DxDataGrid | null>(null);
const selectedRows = ref([])
var mesaj = "Bekleyen Eşanjör: ";
const expandAll = ref(true);
const loadingVisible = ref(true);
const uretimeIade = ref(true);
const tur = ref("");
const currentTab = ref('tab-1')
const hurdaSebebi = ref("");
const sebepOptions = ref<string[]>([])

const dongu = ref<ReturnType<typeof setInterval> | null>(null);

onMounted(() => {
  pageTitleStore.setTitle(mesaj);
  getData();
  dongu.value = setInterval(() => {
    getData();
  }, 5000);
});

onBeforeUnmount(() => {
  if (dongu.value) {
    clearInterval(dongu.value);
  }
});

const SonucGir = async () => {
  if (selectedRows.value.length === 0) {
    notify('Önce iş emrini seçmelisiniz...', 'warning', 1500)
    return
  }
  try {
    const response = await axios.get('/api/sebep-list', {
      params: {
        tur: 'h',
      },
    })
    sebepOptions.value = response.data.map((item: { SEBEP: string }) => item.SEBEP)
  } catch (error) {
    console.error('Sebep listesi yüklenirken hata oluştu:', error)
  }
  hurdaSebebi.value = '';
  uretimeIade.value = true; 
  popupHurdaVisible.value = true;
}

const kaydetOptions = {
  width: 100,
  type: 'success',
  text: 'Kaydet',
  stylingMode: 'contained',
}

const vazgecOptions = {
  width: 100,
  type: 'normal',
  text: 'Vazgeç',
  stylingMode: 'contained',
  onClick: () => {
    popupHurdaVisible.value = false
  },
}

const onSelectionChanged = (e: any) => {
  selectedRows.value = e.selectedRowsData
}

const HurdaKaydet = async () => {
  if (uretimeIade.value) tur.value = 'u';
  else tur.value = 'h';

  const updateData = selectedRows.value.map((row: any) => {
    return {
      tur: tur.value,
      id: Number(row.ID),
      esanjorID: row.ESANJORID,
      urunID: Number(row.URUNID),
      isemriID: Number(row.ISEMRIID),
      barkod: String(row.BARKOD),
      sebep: hurdaSebebi.value,
      operasyon: row.OPERASYON,
      userID: userData.value.id,
    }
  })

  try {
    const response = await axios.post('/api/reworksSonuc', { updateData })

    getData();
    selectedRows.value = [];
    clearSelection();
    popupHurdaVisible.value = false;
    notify('Kayıt başarıyla güncellendi...', 'success', 1500);
  }
  catch (error) {
    console.error('Güncelleme sırasında hata oluştu:', error)
  }
}

const clearSelection = () => {
  const dataGrid = dataGridRef.value!.instance!
  dataGrid.clearSelection()
}

const getData = () => {
  axios
    .get("/api/getReworks")
    .then((response) => {
      gridData.value = response.data.reworks;
      gridData1.value = response.data.ciktilar;
      let spaces = "     ";
      const mesaj1 = formatNumber(response.data.toplamGirdi).toString();
      pageTitleStore.setToplam(mesaj1);
      loadingVisible.value = false;
    })
    .catch((error) => {
      console.error("Veri çekilirken hata oluştu: ", error);
    });
};

const getIconType = (cellElement: HTMLElement, cellInfo: any): void => {
  const durum = cellInfo.data.DURUM

  const createIcon = (color: string, dolu: boolean) => {
    const icon = document.createElement('span')

    icon.className = dolu ? 'dx-icon dx-icon-isnotblank' : 'dx-icon dx-icon-isblank'
    icon.style.marginRight = '8px' // İkon ile metin arasına boşluk ekle
    icon.style.marginTop = '8px' // İkon ile metin arasına boşluk ekle
    icon.style.color = color // İkon rengi
    icon.style.fontSize = '16' // Ana span'ı etkisizleştir
    icon.style.display = 'inline-flex'

    return icon
  }

  cellElement.innerText = cellInfo.text

  if (durum === "Beklemede") {
    const orangeIcon = createIcon('orange', true)
    cellElement.insertBefore(orangeIcon, cellElement.firstChild)
  }
  else if (durum === "Uygun") {
    const greenIcon = createIcon('limegreen', true)
    cellElement.insertBefore(greenIcon, cellElement.firstChild)
  }
  else {
    const redIcon = createIcon('red', true)
    cellElement.insertBefore(redIcon, cellElement.firstChild)
  }
}

const onExporting = (e: DxDataGridTypes.ExportingEvent) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("EsanjorReworks");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "EsanjorReworks.xlsx"
      );
    });
  });

  e.cancel = true;
};

const toggleExpandAll = () => {
  expandAll.value = !expandAll.value
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("tr-TR").format(value);
}

</script>



<style>
.dx-datagrid .dx-row>td {
  padding: 5px 6px !important;
  font-size: 16px !important;
  line-height: 24px !important;
}

.tab {
  margin-top: -10px;
}

html,
body {
  margin: 0;
  block: 90%;
}

.grid {
  display: flex;
  flex-direction: column;
  margin: 10px;
  block-size: 80vh;
}

.dx-filterbuilder-overlay .dx-scrollable-container {
  max-block-size: 400px;
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
