<template>
  <VCard class="pa-2">
    <DxContextMenu :data-source="menuItems" :width="200" target="#gridContainer" @item-click="itemClick" />
    <DxDataGrid id="gridContainer" ref="dataGridRef" @content-ready="onContentReady" :data-source="gridData"
      :show-borders="true" key-expr="ID" @editor-preparing="onEditorPreparing" :show-column-lines="false"
      :show-row-lines="true" :row-alternation-enabled="true" :allow-column-reordering="true" :focused-row-enabled="true"
      @row-removed="onRowRemoved" @row-removing="onRowRemoving" :column-width="100" :allow-column-resizing="true"
      @exporting="onExporting" :show-indicator="true" @row-updated="onRowUpdated" @row-inserted="onRowInserted"
      @init-new-row="initNewRow" @cell-prepared="onCellPrepared" :repaint-changes-only="true"
      @contextMenuPreparing="onContextMenuPreparing">
      <DxEditing :allow-updating="true" :allow-adding="true" :allow-deleting="true" :use-icons="true" mode="popup">
        <DxPopup :show-title="true" :shading="true" :width="800" :height="580" title="İş Emri" />
        <DxForm>
          <DxItem :col-count="2" :col-span="2" item-type="group">
            <DxItem data-field="URUNID" :visible="false" />
            <DxItem data-field="ISTASYONID" />
            <DxItem data-field="OZELLIKKOD1" />
            <DxItem data-field="MMLGRPKOD" />
            <DxItem data-field="OZELLIKKOD2" />
            <DxItem data-field="OZELLIKKOD3" />
            <DxItem data-field="KOD" />
            <DxItem data-field="TANIM" :col-span="2" />
            <DxItem data-field="NOTLAR" :col-span="2" />
            <DxItem data-field="PLANLANANMIKTAR" editor-type="dxNumberBox" :editor-options="{
              showSpinButtons: true,
              format: '#,##0',
              step: 1,
              min: 0,
            }" />
            <DxItem data-field="DURUM" editor-type="dxSelectBox" :editor-options="{
              dataSource: ['Beklemede', 'Üretimde', 'Üretildi', 'İptal'],
            }" />
          </DxItem>
        </DxForm>
      </DxEditing>

      <!-- Özelleştirilmiş butonlar -->
      <DxColumn type="buttons" :fixed="true" :width="50">
        <DxButton name="edit" icon="edit" />
        <!-- <DxButton name="delete" icon="trash" /> -->
        <!-- <DxButton hint="Üretim" icon="optionsgear" @click="onUretimClick" /> -->
      </DxColumn>

      <DxColumn data-field="DURUM" caption="DURUM" data-type="string" cell-template="durumTemplate" :width="60"
        alignment="center" />
      <DxColumn data-field="AKTIF" caption="AKTİF" data-type="boolean" :visible="true" :width="60"
        cell-template="aktifTemplate" />
      <DxColumn data-field="ID" data-type="number" caption="İE NO" :visible="true" sort-order="desc" :width="80" />
      <DxColumn :set-cell-value="setIstValue" data-field="ISTASYONID" caption="İSTASYON" :width="150"
        data-type="string">
        <DxLookup :data-source="gridIstasyon" display-expr="TANIM" value-expr="ID" />
      </DxColumn>
      <DxColumn data-field="URUNID" caption="URUN ID" :visible="false" data-type="number" />
      <DxColumn :set-cell-value="setKodValue" data-field="KOD" caption="STOK KODU" data-type="string" :visible="true"
        :width="120">
        <DxLookup :data-source="getFilteredKod" display-expr="KOD" value-expr="KOD" />
      </DxColumn>
      <DxColumn :set-cell-value="setTanimValue" data-field="TANIM" caption="STOK ADI" data-type="string" :width="300">
        <DxLookup :data-source="getFilteredTanim" display-expr="TANIM" value-expr="TANIM" />
      </DxColumn>
      <DxColumn :set-cell-value="setGrupValue" data-field="MMLGRPKOD" :width="250" caption="GRUP KODU"
        data-type="string">
        <DxLookup :data-source="getFilteredGrup" display-expr="MMLGRPKOD" value-expr="MMLGRPKOD" />
      </DxColumn>
      <DxColumn data-field="PLANLANANMIKTAR" caption="PL. MKTR" data-type="number" :visible="true" :width="110" />
      <DxColumn data-field="URETIMMIKTAR" caption="ÜR. MKTR" data-type="number" :width="110" />
      <DxColumn data-field="HURDAMIKTAR" caption="ISK MKTR" data-type="number" :width="110" />
      <DxColumn data-field="URETIMSIRA" caption="ÜRETİM SIRA" data-type="number" :visible="false" />
      <DxColumn data-field="KAYITTARIH" caption="TARİH" data-type="date" :width="100" :visible="true" :format="{
        formatter: (date) => {
          const formattedDate = new Intl.DateTimeFormat('tr-TR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date(date));

          return formattedDate.replace(/\//g, '.');
        },
      }" />
      <DxColumn data-field="NOTLAR" caption="NOTLAR" data-type="string" />
      <DxColumn data-field="PROSESNOT" caption="PROSES NOTU" width="100" data-type="string" :visible="true" />
      <DxColumn :set-cell-value="setOz1Value" data-field="OZELLIKKOD1" caption="ÖZELLİK 1" data-type="string">
        <DxLookup :data-source="getFilteredOz1" display-expr="OZELLIKKOD1" value-expr="OZELLIKKOD1" />
      </DxColumn>
      <DxColumn :set-cell-value="setOz2Value" data-field="OZELLIKKOD2" caption="ÖZELLİK 2" data-type="string">
        <DxLookup :data-source="getFilteredOz2" display-expr="OZELLIKKOD2" value-expr="OZELLIKKOD2" />
      </DxColumn>
      <DxColumn :set-cell-value="setOz3Value" data-field="OZELLIKKOD3" caption="ÖZELLİK 3" data-type="string">
        <DxLookup :data-source="getFilteredOz3" display-expr="OZELLIKKOD3" value-expr="OZELLIKKOD3" />
      </DxColumn>
      <DxColumn data-field="ISTKOD" caption="İSTASYON KODU" data-type="string" />

      <!-- <DxStateStoring :enabled="true" type="localStorage" storage-key="storageIsEmirleri" /> -->
      <DxGroupPanel :visible="true" emptyPanelText="Gruplanacak sütunlar buraya..." />
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
        <DxTotalItem column="TANIM" summary-type="count" display-format="{0} adet" />
        <DxGroupItem :show-in-group-footer="false" :align-by-column="true" column="TANIM" summary-type="count"
          display-format="{0} adet" />
      </DxSummary>

      <DxToolbar>
        <DxItem location="before" template="groupingTemplate" />
        <DxItem location="before" template="collapseTemplate" />
        <DxItem location="before" template="emirlerTemplate" />
        <DxItem location="after" template="refreshTemplate" />
        <DxItem v-if="olusturmaIzni" name="addRowButton" />
        <DxItem name="columnChooserButton" />
        <DxItem name="searchPanel" />
        <DxItem name="exportButton" />
      </DxToolbar>

      <template #aktifTemplate="{ data }">
        <template v-if="data.value === '0' || data.value === 0">
          <VIcon size="24" icon="tabler-x" />
        </template>
        <template v-else>
          <VIcon size="24" icon="tabler-check" />
        </template>
      </template>

      <template #durumTemplate="{ data }">
        <template v-if="data.value === 'Üretimde'">
          <VIcon size="20" icon="tabler-bolt" />
        </template>
        <template v-else-if="data.value === 'Üretildi'">
          <VIcon size="20" icon="tabler-check" />
        </template>
        <template v-else-if="data.value === 'Beklemede'">
          <VIcon size="20" icon="tabler-clock" />
        </template>
        <template v-else>
          <VIcon size="20" icon="tabler-x" />
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
    </DxDataGrid>
  </VCard>

  <UretimGir v-model:isDialogVisible="isUretimGirisDialogVisible" :userData="modalParametre" />
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
//import { DxButton } from 'devextreme-vue/button';
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
  DxButton,
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
import UretimGir from "@/components/dialogs/UretimGir.vue";

const isUretimGirisDialogVisible = ref(false);
const pageTitleStore = usePageTitleStore();
const userData = useCookie<any>("userData");
const gridData = ref<GridData[]>([]);
const gridKod = ref<KodData[]>([]);
const gridGrup = ref<GrupData[]>([]);
const gridOz1 = ref<Oz1Data[]>([]);
const gridOz2 = ref<Oz2Data[]>([]);
const gridOz3 = ref<Oz3Data[]>([]);
const gridIstasyon = ref<IstasyonData[]>([]);
const dataGridRef = ref<DxDataGrid | null>(null);
const selectedRow = ref<any | null>(null);
var mesaj = "Aktif İş Emri Sayısı: ";
const expandAll = ref(true);
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
  getVeri();
  getData();
});

const getData = () => {
  axios
    .get("/api/data", {
      params: {
        param: durum,
      },
    })
    .then((response) => {
      gridData.value = response.data.data;
      pageTitleStore.setTitle(mesaj);
      pageTitleStore.setToplam(formatNumber(response.data.toplam).toString());
    })
    .catch((error) => {
      console.error("Veri çekilirken hata oluştu: ", error);
    });
};
const getVeri = () => {
  axios
    .get("/api/veri")
    .then((response) => {
      gridIstasyon.value = response.data.istasyon;
      gridGrup.value = response.data.mamulGrup;
      gridOz1.value = response.data.mamulOz1;
      gridOz2.value = response.data.mamulOz2;
      gridOz3.value = response.data.mamulOz3;
      gridKod.value = response.data.kod;
    })
    .catch((error) => {
      console.error("Mamul verileri çekilirken hata oluştu: ", error);
    });
};

const onEditorPreparing = (e: any) => {
  if (e.parentType === "dataRow" && e.dataField === "OZELLIKKOD1") {
    const isStateNotSet = e.row!.data.ISTASYONID === undefined;
    e.editorOptions.disabled = isStateNotSet;
  }
  if (e.parentType === "dataRow" && e.dataField === "MMLGRPKOD") {
    const isStateNotSet = e.row!.data.OZELLIKKOD1 === undefined;
    e.editorOptions.disabled = isStateNotSet;
  }
  if (e.parentType === "dataRow" && e.dataField === "OZELLIKKOD2") {
    const isStateNotSet = e.row!.data.OZELLIKKOD2 === undefined;
    e.editorOptions.disabled = isStateNotSet;
  }
  if (e.parentType === "dataRow" && e.dataField === "OZELLIKKOD3") {
    const isStateNotSet = e.row!.data.OZELLIKKOD3 === undefined;
    e.editorOptions.disabled = isStateNotSet;
  }
  if (e.parentType === "dataRow" && e.dataField === "KOD") {
    const isStateNotSet = e.row!.data.KOD === undefined;
    e.editorOptions.disabled = isStateNotSet;
  }
  if (e.parentType === "dataRow" && e.dataField === "TANIM") {
    const isStateNotSet = e.row!.data.TANIM === undefined;
    e.editorOptions.disabled = isStateNotSet;
  }
};
const onRowRemoving = (e: any) => {
  if (e.data.URETIMMIKTAR > 0) {
    notify(`Üretim girilmiş iş emri silinemez!`, "success", 1500);
    e.cancel = true;
  }
};
const onRowRemoved = (e: any) => {
  axios.get("/sanctum/csrf-cookie").then(() => {
    axios
      .put(`/api/datasil/${e.key}`, e.data, {
        headers: {
          userID: userData.value.ID,
        },
      })
      .then((response) => {
        // console.log("Veri başarıyla silindi", response);
        getData();
      })
      .catch((error) => {
        console.error("Veri silinirken hata oluştu: ", error);
      });
  });
};
const onRowUpdated = (e: any) => {
  axios
    .put(`/api/data/emir-duzelt/${e.key}`, e.data, {
      headers: {
        userID: userData.value.id,
      },
    })
    .then((response) => {
      // console.log("Veri başarıyla güncellendi", response);
      getData();
    })
    .catch((error) => {
      console.error("Veri güncellenirken hata oluştu: ", error);
    });
};
const onRowInserted = (e: any) => {
  axios
    .post("/api/data/emir-kaydet", e.data, {
      headers: {
        userID: userData.value.id,
      },
    })
    .then((response) => {
      // console.log("Veri başarıyla eklendi", response);
      getData();
    })
    .catch((error) => {
      console.error("Veri eklenirken hata oluştu: ", error);
    });
};
const initNewRow = (e: any) => {
  e.data.PLANLANANMIKTAR = 0;
  e.data.NOTLAR = "";
  e.data.DURUM = "Beklemede";
  e.data.AKTIF = true;
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
interface KodData {
  ID?: number | null;
  KOD?: string | null;
  TANIM?: string | null;
  MMLGRPKOD?: string | null;
  OZELLIKKOD1?: string | null;
  OZELLIKKOD2?: string | null;
  OZELLIKKOD3?: string | null;
  ISTASYONID?: number | null;
}
interface IstasyonData {
  ID?: number | null;
  KOD?: string | null;
  TANIM?: string | null;
}
interface Oz1Data {
  OZELLIKKOD1?: string | null;
  ISTASYONID?: number | null;
}
interface GrupData {
  MMLGRPKOD?: string | null;
  ISTASYONID?: number | null;
  OZELLIKKOD1?: number | null;
}
interface Oz2Data {
  MMLGRPKOD?: string | null;
  OZELLIKKOD1?: string | null;
  OZELLIKKOD2?: string | null;
  ISTASYONID?: number | null;
}
interface Oz3Data {
  MMLGRPKOD?: string | null;
  OZELLIKKOD1?: string | null;
  OZELLIKKOD2?: string | null;
  OZELLIKKOD3?: string | null;
  ISTASYONID?: number | null;
}

const getFilteredOz1 = (options: { data: Oz1Data }) => ({
  store: gridOz1.value,
  filter: options.data ? ["ISTASYONID", "=", options.data.ISTASYONID] : null,
});
const getFilteredGrup = (options: { data: GrupData }) => ({
  store: gridGrup.value,
  filter: options.data
    ? [
      ["ISTASYONID", "=", options.data.ISTASYONID],
      "and",
      ["OZELLIKKOD1", "=", options.data.OZELLIKKOD1],
    ]
    : null,
});
const getFilteredOz2 = (options: { data: Oz2Data }) => ({
  store: gridOz2.value,
  filter: options.data
    ? [
      ["ISTASYONID", "=", options.data.ISTASYONID],
      "and",
      ["OZELLIKKOD1", "=", options.data.OZELLIKKOD1],
      "and",
      ["MMLGRPKOD", "=", options.data.MMLGRPKOD],
    ]
    : null,
});
const getFilteredOz3 = (options: { data: Oz3Data }) => ({
  store: gridOz3.value,
  filter: options.data
    ? [
      ["ISTASYONID", "=", options.data.ISTASYONID],
      "and",
      ["OZELLIKKOD1", "=", options.data.OZELLIKKOD1],
      "and",
      ["MMLGRPKOD", "=", options.data.MMLGRPKOD],
      "and",
      ["OZELLIKKOD2", "=", options.data.OZELLIKKOD2],
    ]
    : null,
});
const getFilteredKod = (options: { data: KodData }) => ({
  store: gridKod.value,
  filter: options.data
    ? [
      ["ISTASYONID", "=", options.data.ISTASYONID],
      "and",
      ["OZELLIKKOD1", "=", options.data.OZELLIKKOD1],
      "and",
      ["MMLGRPKOD", "=", options.data.MMLGRPKOD],
      "and",
      ["OZELLIKKOD2", "=", options.data.OZELLIKKOD2],
      "and",
      ["OZELLIKKOD3", "=", options.data.OZELLIKKOD3],
    ]
    : null,
});
const getFilteredTanim = (options: { data: KodData }) => ({
  store: gridKod.value,
  filter: options.data
    ? [
      ["ISTASYONID", "=", options.data.ISTASYONID],
      "and",
      ["OZELLIKKOD1", "=", options.data.OZELLIKKOD1],
      "and",
      ["MMLGRPKOD", "=", options.data.MMLGRPKOD],
      "and",
      ["OZELLIKKOD2", "=", options.data.OZELLIKKOD2],
      "and",
      ["OZELLIKKOD3", "=", options.data.OZELLIKKOD3],
    ]
    : null,
});

function setKodValue(
  this: DxDataGridTypes.Column,
  newData: GridData,
  value: string,
  currentRowData: GridData
) {
  const kodDataArray = [];
  kodDataArray.push(...gridKod.value);
  const filteredKodData = kodDataArray.find(
    (kodItem) =>
      kodItem.KOD === value && kodItem.ISTASYONID === currentRowData.ISTASYONID
  );
  newData.TANIM = filteredKodData ? filteredKodData.TANIM : null;
  newData.URUNID = filteredKodData ? filteredKodData.ID : null;
  this.defaultSetCellValue!(newData, value, currentRowData);
}
function setTanimValue(
  this: DxDataGridTypes.Column,
  newData: GridData,
  value: string,
  currentRowData: GridData
) {
  const kodDataArray = [];
  kodDataArray.push(...gridKod.value);
  const filteredKodData = kodDataArray.find(
    (kodItem) =>
      kodItem.TANIM === value &&
      kodItem.ISTASYONID === currentRowData.ISTASYONID
  );
  newData.KOD = filteredKodData ? filteredKodData.KOD : null;
  newData.URUNID = filteredKodData ? filteredKodData.ID : null;
  this.defaultSetCellValue!(newData, value, currentRowData);
}
function setIstValue(
  this: DxDataGridTypes.Column,
  newData: GridData,
  value: string,
  currentRowData: GridData
) {
  newData.OZELLIKKOD1 = null;
  newData.MMLGRPKOD = null;
  newData.OZELLIKKOD2 = null;
  newData.OZELLIKKOD3 = null;
  newData.KOD = null;
  newData.TANIM = null;
  this.defaultSetCellValue!(newData, value, currentRowData);
}
function setOz1Value(
  this: DxDataGridTypes.Column,
  newData: GridData,
  value: string,
  currentRowData: GridData
) {
  newData.MMLGRPKOD = null;
  newData.OZELLIKKOD2 = null;
  newData.OZELLIKKOD3 = null;
  newData.KOD = null;
  newData.TANIM = null;
  this.defaultSetCellValue!(newData, value, currentRowData);
}
function setGrupValue(
  this: DxDataGridTypes.Column,
  newData: GridData,
  value: string,
  currentRowData: GridData
) {
  newData.OZELLIKKOD2 = null;
  newData.OZELLIKKOD3 = null;
  newData.KOD = null;
  newData.TANIM = null;
  this.defaultSetCellValue!(newData, value, currentRowData);
}
function setOz2Value(
  this: DxDataGridTypes.Column,
  newData: GridData,
  value: string,
  currentRowData: GridData
) {
  newData.OZELLIKKOD3 = null;
  newData.KOD = null;
  newData.TANIM = null;
  this.defaultSetCellValue!(newData, value, currentRowData);
}
function setOz3Value(
  this: DxDataGridTypes.Column,
  newData: GridData,
  value: string,
  currentRowData: GridData
) {
  newData.KOD = null;
  newData.TANIM = null;
  this.defaultSetCellValue!(newData, value, currentRowData);
}
const selectedCardDetails = ref({
  conn: "ddd",
});

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

const editorOptions: DxTextBoxTypes.Properties = { placeholder: "Sütun ara" };

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

function onContextMenuPreparing(e: any) {
  // if (e.row && e.row.rowType === 'data') {
  //   const rowData = e.row.data; // Sağ tıklanan satırın bilgileri

  //   // Menü öğelerini dinamik olarak satır bilgisiyle genişlet
  //   e.items = menuItems.map((item) => ({
  //     ...item,
  //     rowData // Satır bilgilerini menü öğesine ekle
  //   }));
  // }

  selectedRow.value = {
    ID: e.row.data.ID,
    URETIMMIKTAR: e.row.data.URETIMMIKTAR,
    ISEMRIID: e.row.data.ISEMRIID,
    PLANLANANMIKTAR: e.row.data.PLANLANANMIKTAR,
  };
}

const menuItems = [
  { text: "Yenile" },
  { text: "Üretim Gir", visible: olusturmaIzni },
  { text: "Sil", visible: silmeIzni },
  {
    text: "Durum Değiştir",
    visible: guncellemeIzni,
    items: [
      { text: "Üretimde" },
      { text: "Beklemede" },
      { text: "Tamamlandı" },
      { text: "İptal" },
    ],
  },
  { text: "Grid Düzenini Sıfırla" },
];

function itemClick({ itemData }: DxContextMenuTypes.ItemClickEvent) {
  if (!itemData?.items) {
    switch (itemData?.text) {
      case "Yenile":
        getData();
        notify(`Veriler Yenilendi`, "success", 1500);
        break;
      case "Üretim Gir":
        if (
          parseInt(selectedRow.value.PLANLANANMIKTAR) <=
          parseInt(selectedRow.value.URETIMMIKTAR)
        ) {
          Swal.fire({
            title: "Olamaz....",
            confirmButtonColor: "#88efb3",
            text: "Gereken üretim zaten yapılmış!",
            icon: "error",
          });
          return;
        }
        onUretimClick(selectedRow.value.ID);
        notify(`Veriler Yenilendi`, "success", 1500);
        break;
      case "Üretimde":
        durumDegistir(selectedRow.value.ID, "Üretimde");
        getData();
        notify(`Durum değiştirildi`, "success", 1500);
        break;
      case "Beklemede":
        durumDegistir(selectedRow.value.ID, "Beklemede");
        getData();
        notify(`Durum değiştirildi`, "success", 1500);
        break;
      case "Tamamlandı":
        const uyari = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-error",
          },
          buttonsStyling: true,
        });
        if (
          parseInt(selectedRow.value.URETIMMIKTAR) <
          parseInt(selectedRow.value.PLANLANANMIKTAR)
        ) {
          uyari
            .fire({
              title: "Aaaaaaa...",
              text: "Üretim tamamlanmamış! Emin misiniz?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#88efb3",
              cancelButtonColor: "#ed9595",
              reverseButtons: true,
              confirmButtonText: "Evet, kapat gitsin!",
              cancelButtonText: "Hayır, şaka yaptım :)",
            })
            .then((result) => {
              if (result.isConfirmed) {
                durumDegistir(selectedRow.value.ID, "Tamamlandı");
                getData();
                notify(`İş Emri kapatıldı!`, "success", 1500);
              }
            });
        } else {
          durumDegistir(selectedRow.value.ID, "Tamamlandı");
          getData();
          notify(`İş Emri kapatıldı!`, "success", 1500);
        }
        break;
      case "İptal":
        if (parseInt(selectedRow.value.URETIMMIKTAR) > 0) {
          Swal.fire({
            title: "Olamaz...",
            confirmButtonColor: "#88efb3",
            text: "Üretim yapılmış iş emri İptal edilemez!",
            icon: "error",
            footer: "Ama Tamamlandı yapabilirsiniz :)",
          });
          return;
        }
        durumDegistir(selectedRow.value.ID, "İptal");
        getData();
        notify(`Durum değiştirildi`, "success", 1500);
        break;
      case "Sil":
        if (parseInt(selectedRow.value.URETIMMIKTAR) > 0) {
          Swal.fire({
            title: "Olamaz...",
            confirmButtonColor: "#88efb3",
            text: "Üretim yapılmış iş emri silinemez!",
            icon: "error",
          });
          return;
        }
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-error",
          },
          buttonsStyling: true,
        });
        swalWithBootstrapButtons
          .fire({
            title: "Emin misiniz?",
            text: "Geri alınamaz!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#88efb3",
            cancelButtonColor: "#ed9595",
            reverseButtons: true,
            confirmButtonText: "Evet, sil gitsin!",
            cancelButtonText: "Hayır, kıyamam!",
          })
          .then((result) => {
            if (result.isConfirmed) {
              kayitSil(selectedRow.value.ID);
              swalWithBootstrapButtons.fire({
                confirmButtonColor: "#88efb3",
                title: "Silindi!",
                text: "Kayıt silindi maalesef.",
                icon: "success",
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                confirmButtonColor: "#88efb3",
                title: "Vazgeçildi",
                text: "Kayıt güvende merak etmeyin :)",
                icon: "error",
              });
            }
          });
        break;
      case "Grid Düzenini Sıfırla":
        onStateResetClick();
        notify(`Düzen Sıfırlandı`, "success", 1500);
        break;
      default:
        break;
    }
  }
}

function durumDegistir(isemrino: number, durumu: string) {
  console.log(isemrino, durumu);
  axios
    .put(
      `/api/isemri/durum/${isemrino}`,
      { durum: durumu },
      {
        headers: {
          userID: userData.value.id,
        },
      }
    )
    .catch((error) => {
      console.error("Veri güncellenirken hata oluştu: ", error);
    });
}

function onUretimClick(id: any) {
  isUretimGirisDialogVisible.value = !isUretimGirisDialogVisible.value;
}

const rowId = ref(null);

const modalParametre = computed(() => {
  const selected = selectedRow.value || {};
  const user = userData.value || {};

  return {
    id: selected.ID || 0,
    userId: user.id || 0,
    miktarTemp: selected.URETIMMIKTAR || 0,
    planMiktar: selected.PLANLANANMIKTAR || 0,
    tur: " (yeni)",
  };
});

watch(isUretimGirisDialogVisible, (newValue, oldValue) => {
  if (!newValue && oldValue) {
    getData();
  }
});

const kayitSil = (id: any) => {
  axios.get("/sanctum/csrf-cookie").then(() => {
    axios
      .put(`/api/datasil/${id}`, {
        headers: {
          userID: userData.value.id,
        },
      })
      .then((response) => {
        // console.log("Veri başarıyla silindi", response);
        getData();
      })
      .catch((error) => {
        console.error("Veri silinirken hata oluştu: ", error);
      });
  });
};

const onStateResetClick = () => {
  dataGridRef.value!.instance!.state(null);
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
