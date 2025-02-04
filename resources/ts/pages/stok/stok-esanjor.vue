<template>
  <VCard class="pa-2">
    <DxDataGrid id="gridContainer" ref="dataGridRef" @content-ready="onContentReady" :data-source="gridData"
      :show-borders="true" key-expr="ID" :show-column-lines="false" :show-row-lines="true"
      :row-alternation-enabled="true" :allow-column-reordering="true" :focused-row-enabled="true"
      :allow-column-resizing="true" @exporting="onExporting" :show-indicator="true" @cell-prepared="onCellPrepared"
      :repaint-changes-only="true">

      <DxColumn data-field="ID" caption="ID" data-type="number" :width="80" alignment="center" />
      <DxColumn data-field="ISEMRIID" caption="İŞ EMRİ ID" :width="80" data-type="number" />
      <DxColumn data-field="URUNID" data-type="number" caption="URUN ID" :visible="true" :width="80" />
      <DxColumn data-field="BARKOD" caption="BARKOD" data-type="string" :visible="true" :width="130"  alignment="center"/>
      <DxColumn data-field="URETIMTARIH" caption="ÜRT. TARİH" data-type="date" :width="150" :visible="true"
        alignment="center" :format="{
          formatter: (date) => {
            const formattedDate = new Intl.DateTimeFormat('tr-TR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            }).format(new Date(date));

            return formattedDate.replace(/\//g, '.');
          },
        }" />
      <DxColumn data-field="OPERASYON2" caption="O2" :visible="true" :width="90"
        cell-template="operasyonTemplate"  alignment="center"/>
      <DxColumn data-field="OPERASYON3" caption="O3" :visible="true" :width="90"
        cell-template="operasyonTemplate"  alignment="center"/>
      <DxColumn data-field="OPERASYON4" caption="O4" :visible="true" :width="90"
        cell-template="operasyonTemplate"  alignment="center"/>
      <DxColumn data-field="OPERASYON5" caption="O5" :visible="true" :width="90"
        cell-template="operasyonTemplate"  alignment="center"/>
      <DxColumn data-field="MAMULFINAL" caption="FN" :visible="true" :width="90"
        cell-template="operasyonTemplate"  alignment="center"/>
      <DxColumn data-field="HURDA" caption="HR" :visible="true" :width="90"
        cell-template="hurdaTemplate"  alignment="center"/>
      <DxColumn data-field="URUNKODU" caption="ÜRÜN KODU" data-type="string" />
      <DxColumn data-field="URUNADI" caption="ÜRÜN ADI" data-type="string" />

      <!-- <DxStateStoring :enabled="true" type="localStorage" storage-key="storageIsEmirleri" /> -->
      <DxGroupPanel :visible="false" />
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
        <DxColumnChooserSearch :enabled="true" />
        <DxColumnChooserSelection :allow-select-all="true" :select-by-click="true" :recursive="true" />
      </DxColumnChooser>

      <DxSummary :calculate-custom-summary="calculateCustomSummary" >
        <DxTotalItem column="OPERASYON2" summary-type="custom" name="customTrueCount2"
          display-format="{0}"  alignment="center"/>
        <DxTotalItem column="OPERASYON3" summary-type="custom" name="customTrueCount3"
          display-format="{0}"   alignment="center"/>
        <DxTotalItem column="OPERASYON4" summary-type="custom" name="customTrueCount4"
          display-format="{0}"  alignment="center"/>
        <DxTotalItem column="OPERASYON5" summary-type="custom" name="customTrueCount5"
          display-format="{0}"  alignment="center"/>
        <DxTotalItem column="MAMULFINAL" summary-type="custom" name="customTrueCountF"
          display-format="{0}"  alignment="center"/>
        <DxTotalItem column="HURDA" summary-type="custom" name="customTrueCountH"
          display-format="{0}"  alignment="center"/>
        <DxTotalItem column="BARKOD" summary-type="count" display-format="{0} adet" alignment="center"/>
      </DxSummary>

      <DxToolbar>
        <!-- <DxItem name="groupPanel" /> -->
        <DxItem location="after" template="refreshTemplate" />
        <DxItem location="after" name="columnChooserButton" />
        <DxItem location="after" name="exportButton" />
        <DxItem location="after" name="searchPanel" />
      </DxToolbar>

      <template #refreshTemplate>
        <DxButton icon="refresh" @click="refreshDataGrid" />
      </template>

      <template #operasyonTemplate="{ data }">
        <template v-if="data.value === '1' || data.value === 1">
          <i :class="['dx-icon', 'dx-icon-check']" :style="{ fontSize: '20px', color: 'green' }"></i>
        </template>
        <template v-else>
          <i :class="['dx-icon', 'dx-icon-clock']" :style="{ fontSize: '20px', color: 'orange' }"></i>
        </template>
      </template>
      <template #hurdaTemplate="{ data }">
        <template v-if="data.value === '1' || data.value === 1">
          <i :class="['dx-icon', 'dx-icon-trash']" :style="{ fontSize: '20px', color: 'green' }"></i>
        </template>
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

const pageTitleStore = usePageTitleStore();
const userData = useCookie<any>("userData");
const gridData = ref([]);
const dataGridRef = ref<DxDataGrid | null>(null);
const selectedRow = ref<any | null>(null);
var mesaj = "Stok -> Eşanjörler: ";
const expandAll = ref(true);
var durum = "0";

const calculateCustomSummary = (options: any) => {
  if (options.name === "customTrueCount2") {
    if (options.summaryProcess === "start") {
      options.totalValue = 0;
    }
    if (options.summaryProcess === "calculate") {
      if (options.value === 1) {
        console.log(options.value);
        options.totalValue += 1;
      }
    }
  }
  if (options.name === "customTrueCount3") {
    if (options.summaryProcess === "start") {
      options.totalValue = 0;
    }
    if (options.summaryProcess === "calculate") {
      if (options.value === 1) {
        console.log(options.value);
        options.totalValue += 1;
      }
    }
  }
  if (options.name === "customTrueCount4") {
    if (options.summaryProcess === "start") {
      options.totalValue = 0;
    }
    if (options.summaryProcess === "calculate") {
      if (options.value === 1) {
        console.log(options.value);
        options.totalValue += 1;
      }
    }
  }
  if (options.name === "customTrueCount5") {
    if (options.summaryProcess === "start") {
      options.totalValue = 0;
    }
    if (options.summaryProcess === "calculate") {
      if (options.value === 1) {
        console.log(options.value);
        options.totalValue += 1;
      }
    }
  }
  if (options.name === "customTrueCountF") {
    if (options.summaryProcess === "start") {
      options.totalValue = 0;
    }
    if (options.summaryProcess === "calculate") {
      if (options.value === 1) {
        console.log(options.value);
        options.totalValue += 1;
      }
    }
  }
  if (options.name === "customTrueCountH") {
    if (options.summaryProcess === "start") {
      options.totalValue = 0;
    }
    if (options.summaryProcess === "calculate") {
      if (options.value === 1) {
        console.log(options.value);
        options.totalValue += 1;
      }
    }
  }
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
    .get("/api/stokEsanjor")
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
  const worksheet = workbook.addWorksheet("StokEsanjorler");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "StokEsanjorler.xlsx"
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
