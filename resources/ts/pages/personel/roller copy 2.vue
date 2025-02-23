<template>
  <div>
    <!-- 
    <AppSelect v-model="selectedRole" :hint="`${selectedRole.id}, ${selectedRole.name}`" :items="roles"
      item-title="name" item-value="id" label="Rol Seç" persistent-hint return-object single-line
      placeholder="Bir rol seçiniz..." @update:modelValue="loadPermissions" /> -->

    <div class="grids">
      <DxDataGrid :data-source="roles" :key="rolesKey" key-expr="id" :show-borders="true" width="400"
        :columns-auto-width="true" :row-alternation-enabled="true" :focused-row-enabled="true" :show-indicator="true"
        @focused-row-changed="onFocusedRowChanged">
        <DxEditing :allow-updating="isUpdateIconVisible" :allow-adding="true" :allow-deleting="isDeleteIconVisible"
          :use-icons="true" mode="form" />

        <DxColumn data-field="id" caption="Rol ID" width="60" :allow-editing="false" />
        <DxColumn data-field="name" caption="Rol Adı" width="120" />
        <DxColumn data-field="users_count" caption="Kullanıcı Sayısı" width="120" />

        <DxScrolling mode="virtual" column-rendering-mode="virtual" />
        <DxSearchPanel :visible="true" :width="240" placeholder="Ara..." />
        <DxSorting mode="none" />
      </DxDataGrid>

      <DxDataGrid :data-source="users" :key="usersKey" key-expr="id" :show-borders="true" width="300"
        title="Atanmış İzinler" :columns-auto-width="true" :row-alternation-enabled="false" :focused-row-enabled="true"
        :show-indicator="true" :allow-column-reordering="true" :width="'100%'">
        <DxColumn caption="Atanmış Kullanıcılar" alignment="center">
          <DxColumn data-field="id" caption="ID" width="60" :allow-editing="false" />
          <DxColumn data-field="name" caption="Kullanıcı Adı" width="200" />
        </DxColumn>

        <DxScrolling mode="virtual" column-rendering-mode="virtual" />
        <DxSorting mode="none" />
      </DxDataGrid>

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
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  DxDataGrid,
  DxColumn,
  DxRowDragging,
  DxEditing,
  DxScrolling,
  DxSearchPanel,
  DxSorting,
  DxDataGridTypes
} from "devextreme-vue/data-grid";
import axios from "axios";
import { usePageTitleStore } from "@/stores/pageTitle";

const pageTitleStore = usePageTitleStore();
pageTitleStore.setTitle('Kullanıcı Rolleri');
pageTitleStore.setToplam('');
document.title = "OFT - Roller";

const roles = ref([]);
const users = ref([]);
const selectedRole = ref([]);
const availablePermissions = ref([]);
const assignedPermissions = ref([]);
const rolesKey = ref(0); // Grid yeniden yüklemek için key
const usersKey = ref(0); // Grid yeniden yüklemek için key

const isSabit = (name: string) => name && ['ALL'].indexOf(name.trim().toUpperCase()) >= 0;
const isDeleteIconVisible = (e: { row: DxDataGridTypes.Row }) => !isSabit(e.row.data.name);
const isUpdateIconVisible = (e: { row: DxDataGridTypes.Row }) => !isSabit(e.row.data.name);

// Rolleri yükle
const loadRoles = async () => {
  const { data } = await axios.get("/api/roles-count");
  roles.value = data;
};

// Kullanıcıları yükle
const loadUsers = async () => {
  const response = await axios.get(`/api/roles-users/${selectedRole.value.name}`);
  users.value = response.data;
};

// Seçili role ait izinleri yükle
const loadPermissions = async () => {
  if (!selectedRole.value) return;
  const { data } = await axios.get(
    `/api/roles/${selectedRole.value.id}/permissions`
  );
  assignedPermissions.value = data.assigned;
  availablePermissions.value = data.available;
};

// İzin atama
const assignPermission = async (e: any) => {
  try {
    const permission = e.itemData;
    if (!selectedRole.value || !permission) return;

    assignedPermissions.value.push(permission);
    availablePermissions.value = availablePermissions.value.filter(
      (p) => p.id !== permission.id
    );
    assignedPermissions.value = [...assignedPermissions.value];
    availablePermissions.value = [...availablePermissions.value];
    await axios.post(`/api/roles/${selectedRole.value.id}/permissions`, {
      permission_id: permission.id,
    });
  } catch (error) {
    console.error("İzin atama işlemi başarısız oldu:", error);
  }
};

// İzin kaldırma
const removePermission = async (e: any) => {
  const permission = e.itemData;
  if (!selectedRole.value || !permission) return;

  availablePermissions.value.push(permission);
  assignedPermissions.value = assignedPermissions.value.filter(
    (p) => p.id !== permission.id
  );
  assignedPermissions.value = [...assignedPermissions.value];
  availablePermissions.value = [...availablePermissions.value];
  await axios.delete(
    `/api/roles/${selectedRole.value.id}/permissions/${permission.id}`
  );
};

// İlk yüklemede rolleri çek
loadRoles();

const onFocusedRowChanged = (e: any) => {
  const data = e.row!.data!;
  selectedRole.value = data;
  loadPermissions();
  loadUsers();
};
</script>

<style lang="scss">
.grids {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  block-size: 80vh;
}

.dx-datagrid {
  width: 100%;
}
</style>
