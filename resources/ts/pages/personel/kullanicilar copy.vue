<template>
  <div class="mb-4">
    <DxContextMenu :data-source="menuItems" :width="200" target="#grid-users" @item-click="itemClick" />

    <DxDataGrid id="grid-users" :data-source="gridData" key-expr="id" :show-borders="true" @rowUpdating="onRowUpdating"
      @rowRemoving="onRowRemoving" :focused-row-enabled="true" :row-alternation-enabled="true" @exporting="onExporting"
      @contextMenuPreparing="onContextMenuPreparing">

      <DxColumn data-field="id" caption="ID" :allow-editing="false" :visible="true" width="70" />
      <DxColumn data-field="name" caption="İSİM" :allow-editing="true" :visible="true"
        :validation-rules="[{ type: 'required' }]" width="170" />
      <DxColumn data-field="email" caption="E-POSTA" :allow-editing="false" :visible="true" width="150" />
      <DxColumn data-field="email_verified_at" caption="ONAY TARİHİ" data-type="date" :allow-editing="false"
        :width="150" :visible="true" alignment="center" :format="{
          formatter: (date) => {
            const formattedDate = new Intl.DateTimeFormat('tr-TR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            }).format(new Date(date));

            return formattedDate.replace(/\//g, '.');
          },
        }" />
      <DxColumn data-field="unvan" caption="ÜNVAN" :validation-rules="[{ type: 'required' }]" width="150" />
      <DxColumn data-field="roles" caption="ROLLER" :cell-template="cellTemplate">
        <!-- <template #cellTemplate="{ data }">
          <span>{{ data.roles }}</span>
        </template> -->
      </DxColumn>
      <DxColumn data-field="proses" caption="PROSES" width="200" />
      <DxColumn data-field="tip" caption="KADEME" :validation-rules="[{ type: 'required' }]">
        <DxLookup :data-source="kademeler" display-expr="tip" value-expr="tip" width="150" />
      </DxColumn>

      <DxEditing :allow-updating="true" :allow-adding="false" :allow-deleting="true" mode="row" :use-icons="true" />
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

    <AddNewUserDrawer :isDrawerOpen="isAddNewUserDrawerVisible" :userData="selectedUser" />
    <!-- <AddNewUserDrawer v-model:isDrawerOpen="isAddNewUserDrawerVisible" :userData="modalParametre" /> -->

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
import AddNewUserDrawer from '@/views/apps/user/list/AddNewUserDrawer.vue'
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";
import { usePageTitleStore } from "@/stores/pageTitle";

const pageTitleStore = usePageTitleStore();
pageTitleStore.setTitle('Kullanıcılar');
pageTitleStore.setToplam('');
document.title = "OFT - Kullanıcılar";

const apiUrl = '/api/kullanicilar'; // Backend API rotası
const gridData = ref([]);
const kademeler = ref([]);
const isAddNewUserDrawerVisible = ref(false);
const selectedRow = ref<any | null>(null);

const selectedUser = ref({
  id: 0,
  name: '',
  email: '',
  unvan: '',
  proses: '',
  tip: '',
  roles: ''
}); // Seçili kullanıcı bilgileri

const openAddNewUserDrawer = () => {
  isAddNewUserDrawerVisible.value = true
}

const onRowUpdating = (e: any) => {
  handleRowUpdating(e);
};

const onRowRemoving = (e: any) => {
  handleRowRemoving(e);
};

const editorOptions: DxTextBoxTypes.Properties = { placeholder: "Sütun ara" };

const getData = async () => {
  try {
    const response = await axios.get(apiUrl);
    gridData.value = response.data.data;
    kademeler.value = response.data.kademeler;
  } catch (error) {
    console.error('Error fetching data:', error);
    notify(`Kullanıcılar verisi alınamadı`, 'error', 1500)

  } finally {
  }
};

const cellTemplate = (container: HTMLElement, options: any) => {
  // Hücre verisini alın
  const roles = (options.data.roles || "").split("|");
  container.className = "d-flex gap-2";

  roles.forEach((role: string) => {
    const trimmedRole = role.trim();
    const roleData = colors[trimmedRole] || {};

    const span = document.createElement("span");
    span.textContent = roleData.text || trimmedRole;
    span.style.display = "inline-block";
    span.style.padding = "2px 8px";
    span.style.borderRadius = "8px";
    span.style.backgroundColor = roleData.color || "#ccc";
    span.style.color = "#fff";
    span.style.fontSize = "12px";

    container.appendChild(span);
  });
};

const colors: any = {
  'SuperAdmin': { color: 'red', text: 'SuperAdmin' },
  'AclDemo': { color: '#28a745', text: 'AclDemo' },
  'admin': { color: '#ffc107', text: 'admin' },
  'writer': { color: '#ffc107', text: 'writer' },
  'Dashboard': { color: '#007bff', text: 'Dashboard' },
  'all': { color: '#ac3545', text: 'all' },
}

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

watch(isAddNewUserDrawerVisible, (newValue, oldValue) => {
  if (!newValue && oldValue) {
    if (!isAddNewUserDrawerVisible.value) getData();
  }
});

function onContextMenuPreparing(e: any) {
  selectedRow.value = {
    id: e.row.data.id,
    name: e.row.data.name,
    email: e.row.data.email,
    unvan: e.row.data.unvan,
    proses: e.row.data.proses,
    tip: e.row.data.tip,
    roles: e.row.data.roles,
  };
}

const modalParametre = computed(() => {
  const selected = selectedRow.value || {};
  return {
    id: selected.id || 0,
    name: selected.name || '',
    email: selected.email || '',
    unvan: selected.unvan || '',
    proses: selected.proses || '',
    tip: selected.tip || '',
    roles: selected.roles || '',
  };
});

const menuItems = [
  { text: 'Yenile' },
  { text: 'Kullanıcı Ekle' },
  { text: 'Kullanıcı Düzenle' },
];

function itemClick({ itemData }: DxContextMenuTypes.ItemClickEvent) {
  if (!itemData?.items) {
    switch (itemData?.text) {
      case 'Yenile':
        getData()
        break;
      case 'Kullanıcı Ekle':
        selectedRow.value = "{ id: 0, name: '', email: '', roles: '', proses: '', tip: '', unvan: '' }" ;
        openAddNewUserDrawer();
        break;
      case 'Kullanıcı Düzenle':
        openAddNewUserDrawer();
        break;
      default:
        break;
    }
  }
}

const onExporting = (e: DxDataGridTypes.ExportingEvent) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("Kullanicilar");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "Kullanicilar.xlsx"
      );
    });
  });

  e.cancel = true;
};

</script>


<style>
#grid-mydatagrid {
  display: flex;
  flex-direction: column;
  margin: 10px;
  block-size: 100%;
}
</style>
