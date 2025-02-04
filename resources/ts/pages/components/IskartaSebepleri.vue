<template>
  <div class="grid mb-2">
    <DxContextMenu :data-source="menuItems" :width="200" target="#grid-mydatagrid" @item-click="itemClick" />

    <DxDataGrid id="grid-mydatagrid" :data-source="data" key-expr="ID" :show-borders="true"
      :editing-options="editingOptions" @rowUpdating="onRowUpdating" @rowInserting="onRowInserting"
      @rowRemoving="onRowRemoving" :customize-columns="customizeColumns" :form-options="formOptions"
      :row-alternation-enabled="true" @exporting="onExporting" height="100%">

      <DxColumn data-field="ID" caption="ID" :allow-editing="false" :visible="false" />
      <DxColumn data-field="SEBEP" caption="SEBEP" :allow-editing="true" :visible="true"
        :validation-rules="[{ type: 'required' }]" />
      <DxColumn data-field="TIP" caption="TİP" :allow-editing="false" :visible="false" />
      <DxColumn data-field="SINIF" caption="SINIF" :allow-editing="false" :visible="false" />
      <DxColumn data-field="TUR" caption="TÜR" :allow-editing="false" :visible="false" />
      <DxColumn data-field="PERFORMANS" caption="PERFORMANS" :allow-editing="false" :visible="false" />
      <DxColumn data-field="PROSES" caption="PROSES" :allow-editing="true" :visible="true"
        :validation-rules="[{ type: 'required' }]" />
      <DxColumn data-field="ISTASYONID" caption="İSTASYON" :allow-editing="true" :visible="true"
        :validation-rules="[{ type: 'required' }]"> 
        <DxLookup :data-source="istasyonlar" display-expr="KISATANIM" value-expr="ID" />
      </DxColumn>

      <DxEditing :allow-updating="true" :allow-adding="true" :allow-deleting="true" mode="row" :use-icons="true" />
      <DxHeaderFilter :visible="true" />
      <DxSearchPanel :visible="true" :width="240" placeholder="Ara..." />
      <DxLoadPanel :enabled="true" />
      <DxScrolling mode="virtual" />
      <DxExport :enabled="true" :allow-export-selected-data="false" />
      <DxColumnChooser height="540px" :enabled="true" mode="select" title="Sütun Seçici">
        <DxPosition my="right top" at="right bottom" of=".dx-datagrid-column-chooser-button" />
        <DxColumnChooserSearch :enabled="true" :editor-options="editorOptions" />
        <DxColumnChooserSelection :allow-select-all="true" :select-by-click="true" :recursive="true" />
      </DxColumnChooser>
    </DxDataGrid>
  </div>
</template>

<script setup lang="ts">
import {
  DxDataGrid,
  DxScrolling,
  DxSorting,
  DxLoadPanel,
  DxEditing,
  DxFilterPanel,
  DxHeaderFilter,
  DxSearchPanel,
  DxFilterRow,
  DxFilterBuilderPopup,
  DxColumnChooser,
  DxPosition,
  DxColumnChooserSearch,
  DxColumnChooserSelection,
  DxSelection,
  DxGroupPanel,
  DxExport,
  DxDataGridTypes,
  DxColumn,
  DxLookup
} from 'devextreme-vue/data-grid';
import { DxTextBoxTypes } from "devextreme-vue/text-box";
import axios from 'axios';
import notify from 'devextreme/ui/notify';
import DxContextMenu, { DxContextMenuTypes } from 'devextreme-vue/context-menu';
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";

const apiUrl = '/api/iskartasebepleri'; // Backend API rotası
const data = ref([]);

const onRowUpdating = (e: any) => {
  handleRowUpdating(e);
};

const onRowInserting = (e: any) => {
  handleRowInserting(e);
};

const onRowRemoving = (e: any) => {
  handleRowRemoving(e);
};

const editingOptions = {
  allowUpdating: true,
  allowAdding: true,
  allowDeleting: true,
  mode: 'form', // Popup veya Batch moduna geçilebilir
  useIcons: true,
};

const editorOptions: DxTextBoxTypes.Properties = { placeholder: "Sütun ara" };

// const gridColumns = [
//   { dataField: 'ID', caption: 'ID', allowEditing: false, visible: false },
//   { dataField: 'SEBEP', caption: 'SEBEP', validationRules: [{ type: 'required' }] },
//   { dataField: 'TIP', caption: 'TİP', visible: false },
//   { dataField: 'SINIF', caption: 'SINIF', visible: false },
//   { dataField: 'TUR', caption: 'TÜR', visible: false },
//   { dataField: 'PERFORMANS', caption: 'PERFORMANS', visible: false },
//   { dataField: 'PROSES', caption: 'PROSES', validationRules: [{ type: 'required' }] },
//   { dataField: 'ISTASYONID', caption: 'ISTASYONID', validationRules: [{ type: 'required' }] },
// ];

// Kolon özelleştirme
const customizeColumns = (columns: any[]) => {
  columns.forEach((column) => {
    if (column.dataField === 'ISTASYONID') {
      column.alignment = 'center';
    }
  });
};

// Form düzenleme seçenekleri
const formOptions = {
  items: [
    { dataField: 'SEBEP', editorOptions: { placeholder: 'Sebep giriniz...' } },
    {
      dataField: 'PROSES',
      editorOptions: { placeholder: 'Proses giriniz...' },
    },
    { dataField: 'ISTASYONID', editorOptions: { placeholder: 'İstasyon seçiniz...', min: 0, max: 120 } },
  ],
};

const istasyonlar = ref([]);

const getData = async () => {
  try {
    const response = await axios.get(apiUrl);
    data.value = response.data.data;
    istasyonlar.value = response.data.istasyonlar;
    // notify(`Veriler Yenilendi`, 'success', 1500)

  } catch (error) {
    console.error('Error fetching data:', error);
    notify(`Iskarta Sebepleri verisi alınamadı`, 'error', 1500)

  } finally {
  }
};

const handleRowUpdating = (e: any) => {
  e.promise = new Promise<void>(async (resolve, reject) => {
    try {
      const updatedRow = { ...e.oldData, ...e.newData }; // Eski ve yeni veriyi birleştir
      await axios.put(`${apiUrl}/${e.key}`, updatedRow); // API çağrısı
      await getData(); // Veriyi tekrar yenile
      e.component.cancelEditData(); // Edit modundan çık
      resolve(); // İşlemi başarıyla tamamla
    } catch (error) {
      console.error('Error updating data:', error);
      reject(); // İşlemi başarısız olarak bildir
    }
  });
};

const handleRowInserting = (e: any) => {
  e.promise = new Promise<void>(async (resolve, reject) => {
    try {
      await axios.post(apiUrl, e.data); // Yeni veri ekle
      await getData(); // Veriyi tekrar yenile
      e.component.cancelEditData(); // Edit modundan çık
      resolve(); // İşlemi başarıyla tamamla
    } catch (error) {
      console.error('Error adding data:', error);
      reject(); // İşlemi başarısız olarak bildir
    }
  });
};

const handleRowRemoving = (e: any) => {
  e.promise = new Promise<void>(async (resolve, reject) => {
    try {
      await axios.delete(`${apiUrl}/${e.key}`); // Veriyi sil
      await getData(); // Veriyi tekrar yenile
      e.component.cancelEditData(); // Edit modundan çık
      resolve(); // İşlemi başarıyla tamamla
    } catch (error) {
      console.error('Error deleting data:', error);
      reject(); // İşlemi başarısız olarak bildir
    }
  });
};

onMounted(getData);

const menuItems = [
  { text: 'Yenile' },
];
function itemClick({ itemData }: DxContextMenuTypes.ItemClickEvent) {
  if (!itemData?.items) {
    switch (itemData?.text) {
      case 'Yenile':
        getData()
        break;
      default:
        break;
    }
  }
}

const onExporting = (e: DxDataGridTypes.ExportingEvent) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("IskartaSebepleri");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "IskartaSebepleri.xlsx"
      );
    });
  });

  e.cancel = true;
};

</script>


<style>
#grid-container {
  display: flex;
  overflow: hidden; /* Taşmayı önlemek için */
  flex-direction: column;
  flex-grow: 1;
  block-size: 100%;
}

.grid {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  block-size: calc(80vh - 130px); /* Üstteki alanları hesaba katın */
  margin-block-end: 200px;
}
</style>
