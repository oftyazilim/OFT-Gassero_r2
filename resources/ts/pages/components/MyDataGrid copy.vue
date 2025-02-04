<template>
  <div class="mb-4">
    <DxDataGrid id="grid-container" :data-source="dataSource" :columns="columns" key-expr="ID" :show-borders="true"
      @rowUpdating="onRowUpdating" @rowInserting="onRowInserting" @rowRemoving="onRowRemoving">
      <DxEditing :allow-updating="true" :allow-adding="true" :allow-deleting="true" mode="row" :use-icons="true" />
      <DxFilterPanel :visible="filterPanel" />
      <DxHeaderFilter :visible="headerFilter" />
      <DxSearchPanel :visible="true" :width="240" placeholder="Ara..." />
      <DxLoadPanel :enabled="loading" />
      <DxFilterRow :visible="filterRow" />
      <DxFilterBuilderPopup :position="filterBuilderPopupPosition" />
      <DxScrolling mode="virtual" />
      <!-- <DxSorting mode="none" /> -->
      <DxColumnChooser height="540px" :enabled="true"  :mode="mode" title="Sütun Seçici">
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
  DxColumnChooserSelection
} from 'devextreme-vue/data-grid';
import { PositionConfig } from "devextreme/animation/position";
import { DxTextBoxTypes } from "devextreme-vue/text-box";

// Tanımlanan props
defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  filterRow: {
    type: Boolean,
    default: false,
  },
  headerFilter: {
    type: Boolean,
    default: false,
  },
  filterPanel: {
    type: Boolean,
    default: false,
  },
  mode: {
    type: String,
    default: "dragAndDrop",
  },
});

// Eventleri tanımlıyoruz
const emit = defineEmits(['rowUpdating', 'rowInserting', 'rowRemoving']);

const onRowUpdating = (e: any) => {
  e.cancel = true; // Varsayılan işlemi iptal et
  emit('rowUpdating', e); // Eventi parent'a gönder
};

const onRowInserting = (e: any) => {
  e.cancel = true; // Varsayılan işlemi iptal et
  emit('rowInserting', e); // Eventi parent'a gönder
};

const onRowRemoving = (e: any) => {
  e.cancel = true; // Varsayılan işlemi iptal et
  emit('rowRemoving', e); // Eventi parent'a gönder
};

const filterBuilderPopupPosition: PositionConfig = {
  of: window,
  at: "top",
  my: "top",
  offset: { y: 10 },
};

const editorOptions: DxTextBoxTypes.Properties = { placeholder: "Sütun ara" };


</script>


<<style>
#grid-container {
  display: flex;
  flex-direction: column;
  margin: 10px;
  block-size: 100%;
}
</style>
