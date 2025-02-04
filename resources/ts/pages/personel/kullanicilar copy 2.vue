<template>
  <section>
    <VCard>
      <VCardText class="d-flex flex-wrap gap-4">
        <div class="d-flex gap-2 align-center"></div>

        <VSpacer />

        <div class="d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search -->
          <AppTextField v-model="searchQuery" placeholder="Search User" style="inline-size: 15.625rem;" />

          <!-- Add New User Button -->
          <VBtn color="primary" @click="openAddNewUserDrawer" class="ml-4">
            + Kullanıcı Ekle
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION datatable -->
      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :items="users"
        :items-length="totalUsers" :headers="headers" class="text-no-wrap" @update:options="updateOptions">
        <!-- Name -->
        <template #item.name="{ item }">
          <div class="d-flex flex-column">
            <h6 class="text-base">
              <RouterLink :to="{ name: 'apps-user-view-id', params: { id: item.id } }"
                class="font-weight-medium text-link">
                {{ item.name }}
              </RouterLink>
            </h6>
          </div>
        </template>

        <!-- Rol -->
        <template #item.roles="{ item }">
          <div class="d-flex flex-column">
            <h6 class="text-base">
              <RouterLink :to="{ name: 'apps-user-view-id', params: { id: item.id } }"
                class="font-weight-medium text-link">
                <div class="d-flex gap-2">
                  <VChip v-for="(roles, index) in item.roles.split('|')" :key="index" label size="small"
                    :color="colors[roles.trim()]?.color || 'default'" class="font-weight-medium">
                    {{ colors[roles.trim()]?.text || roles.trim() }}
                  </VChip>
                </div>
              </RouterLink>
            </h6>
          </div>
        </template>



        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn @click="deleteUser(item.id)" :style="{ color: 'red !important' }">
            <VIcon icon="tabler-trash" />
          </IconBtn>
          <IconBtn :style="{ color: 'blue !important' }" @click="isUserDrawerVisible">
            <VIcon icon="tabler-eye" />
          </IconBtn>
        </template>
      </VDataTableServer>
    </VCard>

    <!-- 👉 Add New User -->
    <!-- <AddNewUserDrawer v-model:isDrawerOpen="isAddNewUserDrawerVisible" :user-id="userID" @user-data="addNewUser" /> -->
    <AddNewUserDrawer v-model:isDrawerOpen="isUserDrawerVisible" :cardDetails="modalParametre" />
  </section>

  <!-- Modal -->
  <VDialog v-model="isModalVisible" max-width="600px">
    <VCard>
      <VCardTitle>
        Kullanıcı Bilgileri
      </VCardTitle>
      <VCardText>
        <div class="d-flex flex-column gap-4">
          <VTextField label="Kullanıcı Adı" v-model="userData.name" class="my-2" />
          <VTextField label="Email" v-model="userData.email" class="my-2" />
          <!-- <VCol cols="12"> -->
            <!-- AppSelect bileşeni içinde v-model ve items kullanımını doğru şekilde bağlayalım -->
            <AppSelect v-model="seciliRol" label="Rol" placeholder="Rol Seçiniz..." :items="rolesList" item-text="name"
              item-value="name" />
          <!-- </VCol> -->

          <!-- 👉 Rol Ata Butonu -->
          <VCol cols="12" class="text-center mt-3">
            <VBtn color="primary" @click="rolAta">Rol Ata</VBtn>
          </VCol>

          <!-- 👉 Atanmış Roller -->
          <VCol cols="12" class="mt-3">
            <div class="d-flex flex-wrap gap-2">
              <div v-for="rol in atanmisRoller" :key="rol"
                class="bg-danger text-white px-3 py-2 rounded-pill cursor-pointer" @click="rolSil(rol)">
                {{ rol }}
              </div>
            </div>
          </VCol>

        </div>
      </VCardText>
      <VCardActions>
        <VBtn @click="closeModal">Vazgeç</VBtn>
        <VBtn @click="saveData" color="primary">Kaydet</VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

</template>


<script setup lang="ts">
import AddNewUserDrawer from '@/views/apps/user/list/AddNewUserDrawer.vue'
import { ref, onMounted, computed } from 'vue';
import { VDialog, VCard, VCardTitle, VCardText, VCardActions, VTextField, VBtn, VCol, VSpacer, VDivider, VDataTableServer } from 'vuetify/components';
import axios, { AxiosResponse } from 'axios';
import Swal from 'sweetalert2';

const colors: any = {
  'SuperAdmin': { color: 'info', text: 'SuperAdmin' },
  'all': { color: 'success', text: 'all' },
  'admin': { color: 'success', text: 'admin' },
  'writer': { color: 'warning', text: 'writer' },
  'Editor': { color: 'primary', text: 'Editor' },
  'restricted-user': { color: 'error', text: 'Restricted User' },
}

const fetchRoles = async () => {
  try {
    const response = await axios.get('/api/roles');
    rolesList.value = response.data;
  } catch (error) {
    console.error('Roller alınamadı:', error);
  }
};

const name = ref('')
const email = ref('')
const role = ref('')
const roles = ref([]);

const searchQuery = ref('')
const itemsPerPage = ref(10)
const page = ref(1)
const isModalVisible = ref(false);

const updateOptions = (options: any) => {
  // Gelecekte eklenebilecek sıralama vb. için ayırdım
}

const rolesList = ref<string[]>([]) // Backend'den gelen roller
const atanmisRoller = ref<string[]>([]) // Kullanıcının atadığı roller
const seciliRol = ref<string | null>(null) // Dropdown'daki seçili rol

onMounted(() => {
  fetchRoles()
})

// Headers
const headers = [
  { title: 'ID', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Roles', key: 'roles' },
  { title: 'Actions', key: 'actions' },
]

// Kullanıcı verilerini tutacak model
const userData = ref({
  id: 0,
  name: '',
  email: '',
  role: []
});

// Fetching users
const { data: usersData, execute: fetchUsers } = await useApi<any>('/kullanicilar');

const users = computed(() => usersData.value.users);
const totalUsers = computed(() => usersData.value.totalUsers);

// Drawer Visibility
const isUserDrawerVisible = ref(false);

// Function to open the drawer for adding a new user
const openAddNewUserDrawer = () => {
  isUserDrawerVisible.value = true
}

// Kaydetme fonksiyonu
const saveData = () => {
  console.log('Saved user data:', userData.value);
  closeModal();
};

// Modal'ı kapatan fonksiyon
const closeModal = () => {
  isModalVisible.value = false;
};

// Kullanıcıyı silme fonksiyonu
const deleteUser = async (id: number) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to delete this user?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
  });

  if (result.isConfirmed) {
    try {
      await $api(`/users/${id}`, { method: 'DELETE' });
      fetchUsers();
      Swal.fire('Deleted!', 'The user has been deleted.', 'success');
    } catch (error) {
      console.error('Error deleting user:', error);
      Swal.fire('Error!', 'There was a problem deleting the user.', 'error');
    }
  }
};

const userID = ref<string | null>(null); 

const modalParametre = computed((item: any) => {
  const user = userData.value || {};

  return {
    userId: user.id || 0,
    userName: user.name || '',
    userEmail: user.email || '',
    userRoles: [],
  };
});

// Modal'ı açan fonksiyon
// const openModal = (item: any) => {
//   userData.value = {
//     name: item.name,
//     email: item.email,
//     role: item.role
//   };
//   isModalVisible.value = true;
// };
</script>



<style lang="scss">
.text-capitalize {
  text-transform: capitalize;
}

.badge {
  border-radius: 12px;
  font-size: 0.875rem;
  text-transform: capitalize;
}

.swal2-confirm {
  background-color: red !important;
  /* Buton rengi */
  color: white !important;
  /* Yazı rengi beyaz */
}

.swal2-cancel {
  color: white !important;
  /* Yazı rengi beyaz */
}

.cursor-pointer {
  cursor: pointer;
}

.bg-danger {
  background-color: #dc3545 !important;
}

.text-white {
  color: white !important;
}

.user-container {
  margin-bottom: 20px;
}
</style>
