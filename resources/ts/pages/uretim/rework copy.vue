<template>
  <VCard class="pa-2">

                <!-- <DxDataGrid id="gridContainer" ref="dataGridRef" @content-ready="onContentReady" :data-source="gridData"

      :show-borders="true" key-expr="ID" :show-column-lines="false" :show-row-lines="true"
      :row-alternation-enabled="true" :allow-column-reordering="true" :focused-row-enabled="true"
      :allow-column-resizing="true" @exporting="onExporting" @cell-prepared="onCellPrepared">

      <DxEditing :use-icons="true" mode="row" />

      <DxColumn type="buttons" :width="140">
        <DxButton hint="Clone" icon="login"  :disabled="false" :visible="true"/>
      </DxColumn>

      <DxColumn data-field="DURUM" caption="DURUM" data-type="string" :visible="true" :width="40"
        :cell-template="getIconType" />

      <DxColumn data-field="ID" data-type="number" caption="ID" :visible="false" sort-order="desc" :width="80" />

      <DxColumn data-field="URUNID" caption="URUN ID" :visible="false" data-type="number" :width="110" />
      <DxColumn data-field="ESANJORID" caption="ESANJÖR ID" data-type="number" :visible="true" :width="120" />
      <DxColumn data-field="BARKOD" caption="BARKOD" data-type="string" :width="120" />
      <DxColumn data-field="KARANTINASEBEP" caption="KARANTİNA SEBEP" data-type="string" :min-width="150" />
      <DxColumn data-field="OPERASYON" caption="OPERASYON" data-type="number" :visible="false" />
      <DxColumn data-field="KARANTINATARIH" caption="TARİH" data-type="date" :width="130" :visible="true" :format="{
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
      <DxColumn data-field="REWORKTARIH" caption="REWORK TARİH" data-type="date" :width="130" :visible="true" :format="{
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



      <DxStateStoring :enabled="true" type="localStorage" storage-key="storageIsEmirleri" />
      <DxGroupPanel :visible="true" emptyPanelText="Gruplanacak sütunlar buraya..." />
      <DxGrouping :auto-expand-all="expandAll" />
      <DxLoadPanel :enabled="true" />
      <DxScrolling mode="virtual" column-rendering-mode="virtual" />
      <DxFilterBuilderPopup :position="filterBuilderPopupPosition" />
      <DxHeaderFilter :visible="true" />
     <DxSearchPanel :visible="true" :width="240" placeholder="Ara..." />
      <DxExport :enabled="true" :allow-export-selected-data="true" />
      <DxColumnChooser height="540px" :enabled="true" title="Sütun Seçici">
        <DxPosition my="right top" at="right bottom" of=".dx-datagrid-column-chooser-button" />

        <DxColumnChooserSearch :enabled="true" :editor-options="editorOptions" />
        <DxColumnChooserSelection :allow-select-all="true" :select-by-click="true" :recursive="true" />
      </DxColumnChooser>

      <DxSummary>
        <DxTotalItem column="TANIM" summary-type="count" display-format="{0} adet" />
        <DxGroupItem :show-in-group-footer="false" :align-by-column="true" column="TANIM" summary-type="count"
          display-format="{0} adet" />
      </DxSummary>

      <DxToolbar>
        <DxItem location="before" template="groupingTemplate" />
        <DxItem location="before" template="collapseTemplate" />
        <DxItem location="before" template="emirlerTemplate" />
        <DxItem location="after" template="refreshTemplate" />
        <DxItem name="columnChooserButton" />
        <DxItem name="exportButton" />
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

      <template #groupingTemplate>
        <DxSelectBox width="200" :items="groupingValues" :input-attr="{ 'aria-label': 'Group' }" display-expr="text"
          value-expr="value" value="" @value-changed="toggleGroupColumn" />
      </template>

      <template #collapseTemplate>
        <DxButton :text="expandAll ? 'Grupları Daralt' : 'Grupları Aç'" width="136" @click="toggleExpandAll" />
      </template>

      <template #emirlerTemplate>
        <DxSelectBox width="140" :items="emirlerValues" :input-attr="{ 'aria-label': 'DURUMU' }" display-expr="text"
          value-expr="value" value="0" @value-changed="toggleEmirler" />
      </template>

      <template #refreshTemplate>
        <DxButton icon="refresh" @click="refreshDataGrid" />
      </template>
    </DxDataGrid> -->
  </VCard>

  <DxPopup v-model:visible="popupUretimVisible" :width="280" :height="320" :hide-on-outside-click="false"
    :show-close-button="false" :title="'Üretim Girişi ' + tur">
    <template #content>
      <VRow>
        <VCol cols="12">
          <h6 class="text-h6 mb-2 ms-3 pt-2 mt-1">
            Üretim
          </h6>
          <AppTextField ref="inputRef" v-model="uretimMiktari" type="number" :max="planMiktar - uretilenMiktar"
            :min="0" />
        </VCol>
        <VCol cols="12">
          <h6 class="text-h6 mb-2 ms-3">
            Iskarta
          </h6>
          <AppTextField ref="inputRef1" v-model="iskartaMiktari" type="number" />
        </VCol>
      </VRow>
    </template>
    <DxToolbarItem widget="dxButton" toolbar="bottom" location="center" :options="kaydetOptions"
      @click="UretimKaydet()" />
    <DxToolbarItem widget="dxButton" toolbar="bottom" location="center" :options="vazgecOptions" />
  </DxPopup>
</template>

<script setup lang="ts">

import axios from "axios";
import { DxTextBoxTypes } from "devextreme-vue/text-box";
import { DxSelectBox, DxSelectBoxTypes } from "devextreme-vue/select-box";
//import { DxButton } from 'devextreme-vue/button';
import query from "devextreme/data/query";
import { PositionConfig } from "devextreme/animation/position";
import { onMounted, defineComponent, ref, computed } from "vue";
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";
import notify from "devextreme/ui/notify";
import { usePageTitleStore } from "@/stores/pageTitle";
import { DxPopup, DxToolbarItem } from 'devextreme-vue/popup';
import { DxButton } from 'devextreme-vue/button';

import {
  DxEditing,
  //DxButton,
  DxColumn,
  DxDataGrid,
  DxForm,
  DxLookup,
  DxItem,
  DxColumnChooser,
  DxColumnChooserSearch,
  DxColumnChooserSelection,
  DxExport,
  DxFilterBuilderPopup,
  DxFilterPanel,
  DxFilterRow,
  DxGrouping,
  DxGroupItem,
  DxGroupPanel,
  DxHeaderFilter,
  DxLoadPanel,
  DxPosition,
  DxScrolling,
  DxSearchPanel,
  DxSelection,
  DxStateStoring,
  DxSummary,
  DxToolbar,
  DxTotalItem,
  DxColumnFixing,
} from "devextreme-vue/data-grid";





import {
  DxDataGridTypes,
  DxSorting
} from "devextreme-vue/data-grid";



const popupUretimVisible = ref(false);
const isUretimGirisDialogVisible = ref(false);
const pageTitleStore = usePageTitleStore();
const userData = useCookie<any>("userData");
const gridData = ref([]);
const dataGridRef = ref<DxDataGrid | null>(null);
const selectedRow = ref<any | null>(null);
var mesaj = "Aktif İş Emri Sayısı: ";
const expandAll = ref(true);
const tur = ref("");

var durum = "0";

const groupingValues = [
  {
    value: "",
    text: "Gruplama Yok",
  },
  {
    value: "OPERASYON",
    text: "Operasyona Göre",
  },
  {
    value: "KARANTINATARIH",
    text: "Karantina Tarihine Göre",
  },
];
const emirlerValues = [
  {
    value: "0",
    text: "Açıklar",
  },
  {
    value: "1",
    text: "Kapanmışlar",
  },
  {
    value: "2",
    text: "Tümü",
  },
];

const getIconType = (cellElement: HTMLElement, cellInfo: any): void => {
  const durum = cellInfo.data.DURUM

  const createIcon = (color: string, dolu: boolean) => {
    const icon = document.createElement('span')

    icon.className = dolu ? 'dx-icon dx-icon-isnotblank' : 'dx-icon dx-icon-isblank'
    icon.style.marginRight = '8px' // İkon ile metin arasına boşluk ekle
    icon.style.color = color // İkon rengi
    icon.style.fontSize = '16' // Ana span'ı etkisizleştir
    icon.style.display = 'inline-flex'

    return icon
  }

  if (durum === "BEKLEMEDE") {
    const orangeIcon = createIcon('orange', true)
    cellElement.insertBefore(orangeIcon, cellElement.firstChild)
  }
  else if (durum === "UYGUN") {
    const greenIcon = createIcon('limegreen', true)
    cellElement.insertBefore(greenIcon, cellElement.firstChild)
  }
  else {
    const redIcon = createIcon('red', true)
    cellElement.insertBefore(redIcon, cellElement.firstChild)
  }
}

const toggleGroupColumn = (e: DxSelectBoxTypes.ValueChangedEvent) => {
  dataGridRef.value!.instance!.clearGrouping();
  dataGridRef.value!.instance!.columnOption(e.value, "groupIndex", 0);
};

const toggleEmirler = (e: DxSelectBoxTypes.ValueChangedEvent) => {
  durum = e.value;
  getData();
};

const toggleExpandAll = () => {
  expandAll.value = !expandAll.value;
};

const refreshDataGrid = () => {
  getData();
  notify(`Veriler Yenilendi`, "success", 1500);
};

onMounted(() => {
  getData();
});

const getData = () => {
  axios
    .get("/api/getReworks")
    .then((response) => {
      gridData.value = response.data.reworks;
      pageTitleStore.setTitle(mesaj);
      // pageTitleStore.setToplam(formatNumber(response.data.toplam).toString());
    })
    .catch((error) => {
      console.error("Veri çekilirken hata oluştu: ", error);
    });
};

const onCellPrepared = (e: any) => {
  if (e.rowType === "data" && e.column.dataField === "DURUM") {
    if (e.data.DURUM == "Üretildi") {
      e.cellElement.style.color = "white";
      e.cellElement.style.fontWeight = "bold";
      e.cellElement.style.backgroundColor = "#65b687";
    }
    if (e.data.DURUM == "İptal") {
      e.cellElement.style.color = "white";
      e.cellElement.style.fontWeight = "bold";
      e.cellElement.style.backgroundColor = "#c15353";
    }
    if (e.data.DURUM == "Üretimde") {
      e.cellElement.style.color = "white";
      e.cellElement.style.fontWeight = "bold";
      e.cellElement.style.backgroundColor = "#7167e8";
    }
    if (e.data.DURUM == "Beklemede") {
      e.cellElement.style.color = "white";
      e.cellElement.style.fontWeight = "bold";
      e.cellElement.style.backgroundColor = "#e2c044";
    }
  }
};

const formatNumber = (number) => {
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(
    number
  );
};

const onContentReady = (e: DxDataGridTypes.ContentReadyEvent) => {
  e.component.option("loadPanel.enabled", false);
};

const onExporting = (e: DxDataGridTypes.ExportingEvent) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("IsEmirleri");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "IsEmirleri.xlsx"
      );
    });
  });

  e.cancel = true;
};

function onUretimClick(id: any) {
  tur.value = " (yeni)";
  uretilenMiktar.value = selectedRow.value.URETIMMIKTAR || 0;
  planMiktar.value = selectedRow.value.PLANLANANMIKTAR || 0;
  popupUretimVisible.value = true;
  // isUretimGirisDialogVisible.value = !isUretimGirisDialogVisible.value;
}

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
    popupUretimVisible.value = false;
    iskartaMiktari.value = 0;
    uretimMiktari.value = 0;
  },
};

const UretimKaydet = async () => {
  try {
    await axios.put(`/api/uretimekle`, {
      userId: userData.value.id,
      kayitID: selectedRow.value.ID,
      miktar: uretimMiktari.value,
      miktarTemp: uretilenMiktar.value,
      planMiktar: planMiktar.value,
      iskarta: iskartaMiktari.value
    })
    popupUretimVisible.value = false;
    getData();
  } catch (error) {
    console.error('Veri eklenirken hata oluştu:', error)
  }
}

</script>

<style>
html,
body {
  margin: 0;
  block: 90%;
}

#gridContainer {
  display: flex;
  flex-direction: column;
  margin: 10px;
  block-size: 80vh;
}

.dx-filterbuilder-overlay .dx-scrollable-container {
  max-block-size: 400px;
}
</style>
