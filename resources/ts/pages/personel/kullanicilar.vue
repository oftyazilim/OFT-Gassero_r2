<template>
  <div>
    <DxContextMenu :data-source="menuItems" :width="200" target="#grid-users" @item-click="itemClick" />

    <DxDataGrid id="grid-users" :data-source="gridData" key-expr="id" :show-borders="true" @rowUpdating="onRowUpdating"
      @rowRemoving="onRowRemoving" :focused-row-enabled="true" :row-alternation-enabled="true" @exporting="onExporting"
      @contextMenuPreparing="onContextMenuPreparing" @focused-row-changed="onFocusedRowChanged">

      <DxColumn data-field="AKTIF" caption="AKTİF" data-type="boolean" :visible="true" :width="100"
        cell-template="aktifTemplate" />
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
      <DxColumn data-field="tip" caption="KADEME" :validation-rules="[{ type: 'required' }]" width="150">
        <DxLookup :data-source="kademeler" display-expr="tip" value-expr="tip" width="150" />
      </DxColumn>
      <!-- Özelleştirilmiş butonlar -->
      <!-- <DxColumn type="buttons" :fixed="true" :width="50" :visible="false"/> -->

      <DxEditing :allow-updating="false" :allow-adding="false" :allow-deleting="false" mode="row" :use-icons="true" />
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

      <template #aktifTemplate="{ data }">
        <template v-if="data.value === '0' || data.value === 0">
          <VIcon size="20" icon="tabler-x" />
        </template>
        <template v-else>
          <VIcon size="20" icon="tabler-check" />
        </template>
      </template>

    </DxDataGrid>



    <div class="grids">

      <div class="list-container">
        <VCard class="pa-2">
          <VCardTitle>Atanmış Roller</VCardTitle>
          <hr>
          <DxList :data-source="users">
            <template #item="{ data }">
              <div>
                <div>{{ data.name }}</div>
              </div>
            </template>
          </DxList>
        </VCard>
      </div>

      <DxDataGrid :data-source="availablePermissions" :show-borders="true">
        <DxRowDragging group="permissionsGroup" :on-add="removePermission" />
        <DxColumn data-field="name" caption="Atanmamış İzinler" />
      </DxDataGrid>

      <DxDataGrid :data-source="assignedPermissions" :show-borders="true">
        <DxRowDragging group="permissionsGroup" :on-add="assignPermission" />
        <DxColumn data-field="name" caption="Atanmış İzinler" />
      </DxDataGrid>
    </div>
  </div>

  <AddNewUserDrawer v-model:isDrawerOpen="isAddNewUserDrawerVisible" :userData="modalParametre" />

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
  DxLookup,
  DxButton,
  DxRowDragging,
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
import Swal from "sweetalert2";
import DxList from 'devextreme-vue/list';

const pageTitleStore = usePageTitleStore();
pageTitleStore.setTitle('Kullanıcılar');
pageTitleStore.setToplam('');
document.title = "OFT - Kullanıcılar";

const apiUrl = '/api/kullanicilar'; // Backend API rotası
const gridData = ref([]);
const kademeler = ref([]);
const isAddNewUserDrawerVisible = ref(false);
const selectedRow = ref<any | null>(null);
const roles = ref([]);
const users = ref<any[]>([]);
const availablePermissions = ref([]);
const assignedPermissions = ref([]);

const onFocusedRowChanged = (e: any) => {
  const data = e.row!.data!;
  selectedRow.value = data;
  let tempData: any[] = [];
  const roles = (selectedRow.value.roles || "").split(",");
  roles.forEach((role: string) => {
    tempData.push({
      name: role.trim()
    });
  });
  users.value = tempData;
  loadPermissions();
};

// İzinleri yükle
const loadPermissions = async () => {
  if (!selectedRow.value) return;
  const { data } = await axios.get(`/api/users/${selectedRow.value.id}/permissions`);
  assignedPermissions.value = data.assigned;
  availablePermissions.value = data.available;
};

// İzin atama
const assignPermission = async (e: any) => {
  try {
    const permission = e.itemData;
    if (!selectedRow.value || !permission) return;

    assignedPermissions.value.push(permission);
    availablePermissions.value = availablePermissions.value.filter((p) => p.id !== permission.id);
    assignedPermissions.value = [...assignedPermissions.value];
    availablePermissions.value = [...availablePermissions.value];
    axios.post(`/api/users/${selectedRow.value.id}/permissions/${permission.id}`);
  }
  catch (error) {
    console.error("İzin atama işlemi başarısız oldu:", error);
  }
};

// İzin kaldırma
const removePermission = async (e: any) => {
  const permission = e.itemData;
  if (!selectedRow.value || !permission) return;

  availablePermissions.value.push(permission);
  assignedPermissions.value = assignedPermissions.value.filter((p) => p.id !== permission.id);
  assignedPermissions.value = [...assignedPermissions.value];
  availablePermissions.value = [...availablePermissions.value];
  await axios.delete(`/api/users/${selectedRow.value.id}/permissions/${permission.id}`);
};

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
  const roles = (options.data.roles || "").split(",");
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
    aktif: e.row.data.AKTIF,
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
  { text: 'Aktif/Pasif Yap' },
  { text: 'Şifreyi Sıfırla' },
];

const sifreSifirla = async (id: any) => {
  console.log(id);
  try {
    const response = await axios.put(`/api/sifresifirla/${id}`);
  }
  catch (error) {
    console.error("Veri silinirken hata oluştu: ", error);
  }
};

function itemClick({ itemData }: DxContextMenuTypes.ItemClickEvent) {
  if (!itemData?.items) {
    switch (itemData?.text) {
      case 'Yenile':
        getData()
        break;
      case 'Kullanıcı Ekle':
        selectedRow.value = null;
        openAddNewUserDrawer();
        break;
      case 'Kullanıcı Düzenle':
        openAddNewUserDrawer();
        break;
      case 'Aktif/Pasif Yap':
        // if (parseInt(selectedRow.value.AKTIF) === 0) {
        //   Swal.fire({
        //     title: "Olamaz...",
        //     confirmButtonColor: "#88efb3",
        //     text: "Zaten Pasif!",
        //     icon: "error",
        //   });
        //   return;
        // }
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
            text: "İstersen sonra yine değiştirirsin :)",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#88efb3",
            cancelButtonColor: "#ed9595",
            reverseButtons: true,
            confirmButtonText: "Evet, yap gitsin!",
            cancelButtonText: "Hayır, vazcaydım!",
          })
          .then((result) => {
            if (result.isConfirmed) {
              durumDegistir(selectedRow.value.id, selectedRow.value.aktif);
              swalWithBootstrapButtons.fire({
                confirmButtonColor: "#88efb3",
                title: "Durum değiştirildi!",
                text: "Yoksa pişman mı oldun :)",
                icon: "success",
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                confirmButtonColor: "#88efb3",
                title: "Vazgeçildi",
                text: "Birşey yapmadım merak etmeyin :)",
                icon: "error",
              });
            }
          });

        break;
      case 'Şifreyi Sıfırla':
        const swalWithBootstrapButtons1 = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-error",
          },
          buttonsStyling: true,
        });
        swalWithBootstrapButtons1
          .fire({
            title: "Emin misiniz?",
            text: "Şifre sıfırlanacak!!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#88efb3",
            cancelButtonColor: "#ed9595",
            reverseButtons: true,
            confirmButtonText: "Evet, yap gitsin!",
            cancelButtonText: "Hayır, vazcaydım!",
          })
          .then((result) => {
            if (result.isConfirmed) {
              sifreSifirla(selectedRow.value.id);
              swalWithBootstrapButtons1.fire({
                confirmButtonColor: "#88efb3",
                title: "Şifre Sıfırlandı!",
                text: "pass1234",
                icon: "success",
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons1.fire({
                confirmButtonColor: "#88efb3",
                title: "Vazgeçildi",
                text: "Birşey yapmadım merak etmeyin :)",
                icon: "error",
              });
            }
          });
        break;
      default:
        break;
    }
  }
}

const userData = useCookie<any>("userData");

const durumDegistir = async (id: any, aktif: any) => {
  console.log(aktif);
  try {
    const response = await axios.put(`/api/userdurumdegistir/${id}`, {
      userID: userData.value.id,
      aktif: parseInt(aktif),
    });
    // console.log("Veri başarıyla silindi", response);
    getData();
  }
  catch (error) {
    console.error("Veri silinirken hata oluştu: ", error);
  }
};

const aktifYap = async (id: any) => {
  console.log(userData.value.id);
  console.log(id);
  try {
    const response = await axios.put(`/api/userpasif/${id}`, {
      userID: userData.value.id,
    });
    // console.log("Veri başarıyla silindi", response);
    getData();
  }
  catch (error) {
    console.error("Veri silinirken hata oluştu: ", error);
  }
};
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
#grid-users {
  display: flex;
  flex-direction: column;
  /* margin: 10px; */
  margin-top: -20px;
  margin-bottom: 20px;
  block-size: 40vh;
}

.grids {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  block-size: 40vh;
}

.dx-list-item-content>div {
  padding: 5px;
  font-size: 15px;
}
</style>
