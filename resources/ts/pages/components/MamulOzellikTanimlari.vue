<template>
  <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
    <VBtn class="me-4" :disabled="filtre === 'ÖZELLİK 1'" :class="{ 'active-button': filtre === 'ÖZELLİK 1' }"
      @click="filtre = 'ÖZELLİK 1'">
      ÖZELLİK 1
    </VBtn>

    <VBtn class="me-4" :disabled="filtre === 'ÖZELLİK 2'" :class="{ 'active-button': filtre === 'ÖZELLİK 2' }"
      @click="filtre = 'ÖZELLİK 2'">
      ÖZELLİK 2
    </VBtn>

    <VBtn class="me-4" :disabled="filtre === 'ÖZELLİK 3'" :class="{ 'active-button': filtre === 'ÖZELLİK 3' }"
      @click="filtre = 'ÖZELLİK 3'">
      ÖZELLİK 3
    </VBtn>

    <VBtn class="me-4" :disabled="filtre === 'GRUP KODU'" :class="{ 'active-button': filtre === 'GRUP KODU' }"
      @click="filtre = 'GRUP KODU'">
      GRUP KODU
    </VBtn>

    <VBtn class="me-4" :disabled="filtre === 'SINIF'" :class="{ 'active-button': filtre === 'SINIF' }"
      @click="filtre = 'SINIF'">
      SINIF
    </VBtn>
  </VCardText>

  <div class="grid m-2">
    <DxContextMenu :data-source="menuItems" :width="200" target="#grid-container" @item-click="itemClick" />

    <DxDataGrid id="grid-container" :data-source="data" :columns="gridColumns" key-expr="ID" :show-borders="true"
      :editing-options="editingOptions" @rowUpdating="onRowUpdating" @rowInserting="onRowInserting"
      @rowRemoving="onRowRemoving" :row-alternation-enabled="true" @exporting="onExporting"
      @editor-preparing="onEditorPreparing" @init-new-row="onInitNewRow" height="100%">

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

} from 'devextreme-vue/data-grid';
import { DxTextBoxTypes } from "devextreme-vue/text-box";
import axios from 'axios';
import notify from 'devextreme/ui/notify';
import DxContextMenu, { DxContextMenuTypes } from 'devextreme-vue/context-menu';
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";
import { ref, watch } from 'vue';

const apiUrl = '/api/mamultanimlari'; // Backend API rotası
const data = ref([]);
const filtre = ref('');

const onRowUpdating = (e: any) => {
  handleRowUpdating(e);
};

const onRowInserting = (e: any) => {
  handleRowInserting(e);
};

const onRowRemoving = (e: any) => {
  handleRowRemoving(e);
};

const onInitNewRow = (e: any) => {
  // Yeni satır eklerken "TANIM" sütununa doğru değeri manuel olarak yansıt
  e.data.TANIM = filtre.value; // Varsayılan değer ata
};

const editingOptions = {
  allowUpdating: true,
  allowAdding: true,
  allowDeleting: true,
  mode: 'form', // Popup veya Batch moduna geçilebilir
  useIcons: true,
};

const editorOptions: DxTextBoxTypes.Properties = { placeholder: "Sütun ara" };

const gridColumns = [
  { dataField: 'ID', caption: 'ID', allowEditing: false, visible: false },
  { dataField: 'TANIM', caption: 'TANIM', validationRules: [{ type: 'required' }] },
  { dataField: 'DEGER', caption: 'DEĞER', validationRules: [{ type: 'required' }] },
];

const getData = async (filtre: String) => {
  try {
    const response = await axios.get(apiUrl, { params: { filter: filtre } });
    data.value = response.data;
    // notify(`Veriler Yenilendi`, 'success', 1500)

  } catch (error) {
    console.error('Error fetching data:', error);
    notify(`Veriler Alınamadı`, 'error', 1500)

  } finally {
  }
};

const handleRowUpdating = (e: any) => {
  e.promise = new Promise<void>(async (resolve, reject) => {
    try {
      if (!e.newData.TANIM) {
        e.newData.TANIM = filtre.value; // Varsayılan değer ata
      }
      const updatedRow = { ...e.oldData, ...e.newData }; // Eski ve yeni veriyi birleştir

      await axios.put(`${apiUrl}/${e.key}`, updatedRow); // API çağrısı
      await getData(filtre.value); // Veriyi tekrar yenile
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
      await getData(filtre.value); // Veriyi tekrar yenile
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
      await getData(filtre.value); // Veriyi tekrar yenile
      e.component.cancelEditData(); // Edit modundan çık
      resolve(); // İşlemi başarıyla tamamla
    } catch (error) {
      console.error('Error deleting data:', error);
      reject(); // İşlemi başarısız olarak bildir
    }
  });
};

onMounted(async () => {
  filtre.value = 'ÖZELLİK 1';
});

const menuItems = [
  { text: 'Yenile' },
];
function itemClick({ itemData }: DxContextMenuTypes.ItemClickEvent) {
  if (!itemData?.items) {
    switch (itemData?.text) {
      case 'Yenile':
        getData(filtre.value)
        break;
      default:
        break;
    }
  }
}

const onExporting = (e: DxDataGridTypes.ExportingEvent) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("MamulTanimlari");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "MamulTanimlari.xlsx"
      );
    });
  });

  e.cancel = true;
};

watch(filtre, async (newFilter, oldFilter) => {
  await getData(newFilter);
});

const onEditorPreparing = (e: any) => {
  if (e.dataField === "TANIM" && e.parentType === "dataRow") {
    e.editorOptions.disabled = true; // Düzenlemeyi devre dışı bırak
    e.editorOptions.value = filtre.value; // Varsayılan değer ata
  }
}

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

.active-button {
  background-color: #156633 !important;
  color: white;
  font-weight: bold;
}
</style>
