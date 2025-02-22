<template>
  <VCard class="pa-2">
    <DxContextMenu :data-source="menuItems" :width="200" target="#gridContainer" @item-click="itemClick" />
    <DxDataGrid id="gridContainer" ref="dataGridRef" @content-ready="onContentReady" :data-source="gridData"
      :show-borders="true" key-expr="ID" @editor-preparing="onEditorPreparing" :show-column-lines="false"
      :show-row-lines="true" :row-alternation-enabled="true" :allow-column-reordering="true" :focused-row-enabled="true"
      @row-removing="onRowRemoving" :allow-column-resizing="true" @exporting="onExporting" :show-indicator="true"
      @cell-prepared="onCellPrepared" :repaint-changes-only="true" @contextMenuPreparing="onContextMenuPreparing">

      <DxColumn data-field="ID" caption="ID" data-type="number" :width="90" alignment="center" />
      <DxColumn data-field="ISEMRIID" caption="İŞ EMRİ ID" :width="120" data-type="number"/>
      <DxColumn data-field="OPERASYON" caption="OPERASYON" data-type="string" :visible="false" :width="160" />
      <DxColumn data-field="OPERASYON_TANIMI" caption="OPERASYON" data-type="string" :visible="true" :width="200"/>
      <DxColumn data-field="URUNID" data-type="number" caption="URUN ID" :visible="true" :width="100" />
      <DxColumn data-field="ESANJORID" caption="EŞANJÖR ID" data-type="number" />
      <DxColumn data-field="URETIMTARIH" caption="ÜRT. TARİH" data-type="date" :width="200" :visible="true"
        alignment="center" :format="{
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
      <DxColumn data-field="BARKOD" caption="BARKOD" data-type="string" :visible="true" :width="130" />
      <DxColumn data-field="URUNADI" caption="ÜRÜN ADI" data-type="string" />

      <!-- <DxStateStoring :enabled="true" type="localStorage" storage-key="storageIsEmirleri" /> -->
      <DxGroupPanel :visible="true" />
      <DxGrouping :auto-expand-all="expandAll" />
      <DxFilterPanel :visible="true" />
      <DxLoadPanel :enabled="true" />
      <DxScrolling mode="virtual" column-rendering-mode="virtual" />
      <DxFilterRow :visible="true" />
      <DxFilterBuilderPopup :position="filterBuilderPopupPosition" />
      <DxHeaderFilter :visible="true" />
      <DxSearchPanel :visible="true" :width="240" placeholder="Ara..." />
      <DxExport :enabled="true" :allow-export-selected-data="true" />
      <DxSelection mode="single" />
      <DxColumnFixing :enabled="true" />
      <DxColumnChooser height="540px" :enabled="true" title="Sütun Seçici">
        <DxPosition my="right top" at="right bottom" of=".dx-datagrid-column-chooser-button" />

        <DxColumnChooserSearch :enabled="true" :editor-options="editorOptions" />
        <DxColumnChooserSelection :allow-select-all="true" :select-by-click="true" :recursive="true" />
      </DxColumnChooser>

      <DxSummary>
        <DxGroupItem :align-by-column="true" column="ISEMRIID" summary-type="count" display-format="{0} adet"
        :alignment="right" />
          <DxTotalItem column="BARKOD" summary-type="count" display-format="{0}" />
      </DxSummary>

      <DxToolbar>
        <DxItem name="groupPanel" />
        <DxItem location="before" locate-in-menu="auto" template="collapseTemplate" />
        <DxItem location="after" template="refreshTemplate" />
        <DxItem location="after" name="columnChooserButton" />
        <DxItem location="after" name="exportButton" />
        <DxItem location="after" name="searchPanel" />
      </DxToolbar>

      <template #refreshTemplate>
        <DxButton icon="refresh" @click="refreshDataGrid" />
      </template>

      <template #collapseTemplate>
              <DxButton :icon="expandAll ? 'collapse' : 'expand'" hint="expandAll ? 'Daralt' : 'Genişlet'" width="40"
                height="40" styling-mode="text" @click="toggleExpandAll" />
            </template>
    </DxDataGrid>
  </VCard>

</template>

<script setup lang="ts">
// *********** İzinler *****************************************************
import type { Rule } from "./ability";

// Kullanıcı kurallarını al
const userAbilityRules = useCookie<Rule[]>("userAbilityRules").value || [];
document.title = "OFT - İş Emirleri";

let okumaIzni = false;
let olusturmaIzni = false;
let guncellemeIzni = false;
let silmeIzni = false;

// İzinleri kontrol edip konsola yazdır
userAbilityRules.forEach((rule, index) => {
  if (rule.action === "read" && rule.subject === "Dashboard") okumaIzni = true;
  if (rule.action === "isemri_rea") olusturmaIzni = true;
  if (rule.action === "update" && rule.subject === "SuperAdmin")
    guncellemeIzni = true;
  if (rule.action === "delete" && rule.subject === "SuperAdmin")
    silmeIzni = true;
});

// userAbilityRules.forEach((rule, index) => {
//   if (rule.action === "read" && rule.subject === "SuperAdmin") okumaIzni = true;
//   if (rule.action === "create" && rule.subject === "SuperAdmin")
//     olusturmaIzni = true;
//   if (rule.action === "update" && rule.subject === "SuperAdmin")
//     guncellemeIzni = true;
//   if (rule.action === "delete" && rule.subject === "SuperAdmin")
//     silmeIzni = true;
// });

console.log("okuma = " + okumaIzni);
console.log("olusturma = " + olusturmaIzni);
console.log("guncelleme = " + guncellemeIzni);
console.log("silme = " + silmeIzni);

import axios from "axios";
import { DxTextBoxTypes } from "devextreme-vue/text-box";
import { DxSelectBox, DxSelectBoxTypes } from "devextreme-vue/select-box";
import { DxButton } from 'devextreme-vue/button';
import query from "devextreme/data/query";
import { PositionConfig } from "devextreme/animation/position";
import { onMounted, defineComponent, ref, computed } from "vue";
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";
import DxContextMenu, { DxContextMenuTypes } from "devextreme-vue/context-menu";
import notify from "devextreme/ui/notify";
import { usePageTitleStore } from "@/stores/pageTitle";
import Swal from "sweetalert2";

import {
  DxColumn,
  DxDataGrid,
  DxDataGridTypes,
  DxLookup,
  DxEditing,
  DxPopup,
  DxForm,
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

const isUretimGirisDialogVisible = ref(false);
const pageTitleStore = usePageTitleStore();
const userData = useCookie<any>("userData");
const gridData = ref<GridData[]>([]);
const dataGridRef = ref<DxDataGrid | null>(null);
const selectedRow = ref<any | null>(null);
var mesaj = "Eşanjörler: ";
const expandAll = ref(false);
var durum = "0";

const groupingValues = [
  {
    value: "",
    text: "Gruplama Yok",
  },
  {
    value: "ISTASYONID",
    text: "İstasyona Göre Grupla",
  },
  {
    value: "MMLGRPKOD",
    text: "Modele Göre Grupla",
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
    .get("/api/esanjoruretim")
    .then((response) => {
      gridData.value = response.data.data;
      pageTitleStore.setTitle(mesaj);
      pageTitleStore.setToplam(formatNumber(response.data.toplam).toString());
    })
    .catch((error) => {
      console.error("Veri çekilirken hata oluştu: ", error);
    });
};

const onCellPrepared = (e: any) => {

};

interface GridData {
  ID?: number | null;
  ISTASYONID?: number | null;
  URUNID?: number | null;
  KOD?: string | null;
  TANIM?: string | null;
  MMLGRPKOD?: string | null;
  OZELLIKKOD1?: string | null;
  OZELLIKKOD2?: string | null;
  OZELLIKKOD3?: string | null;
}

const formatNumber = (number) => {
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(
    number
  );
};

const filterBuilderPopupPosition: PositionConfig = {
  of: window,
  at: "top",
  my: "top",
  offset: { y: 10 },
};

const onContentReady = (e: DxDataGridTypes.ContentReadyEvent) => {
  e.component.option("loadPanel.enabled", false);
};

const onExporting = (e: DxDataGridTypes.ExportingEvent) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("Esanjorler");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "Esanjorler.xlsx"
      );
    });
  });

  e.cancel = true;
};

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
