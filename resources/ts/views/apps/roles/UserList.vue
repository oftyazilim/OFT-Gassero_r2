<script setup lang="ts">
import AddNewUserDrawer from '@/views/apps/user/list/AddNewUserDrawer.vue'
import type { UserProperties } from '@db/apps/users/types'
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import axios from 'axios';
import { ref, onMounted } from 'vue';
// 👉 Store
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const selectedRows = ref([])

// Update data table options
const updateOptions = (options: any) => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// Headers
const headers = [
  { title: 'User', key: 'user' },
  { title: 'Role', key: 'role' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

const colors: any = {
  'SuperAdmin': { color: 'info', text: 'SuperAdmin' },
  'admin': { color: 'success', text: 'admin' },
  'writer': { color: 'warning', text: 'writer' },
  'Editor': { color: 'primary', text: 'Editor' },
  'restricted-user': { color: 'error', text: 'Restricted User' },
}
const fetchUsersWithRoles = async () => {
  try {
    const response = await axios.get('/api/kullanicilar'); // API endpoint'i
    console.log(response.data.users); // Kullanıcılar ve roller burada olacak
    // response.data.users, yukarıdaki JSON formatında olacak
  } catch (error) {
    console.error('Kullanıcılar ve roller alınamadı:', error);
  }
};

// 👉 Fetching users
const { data: usersData, execute: fetchUsers } = await (createUrl('api/kullanicilar', {
  query: {
    q: searchQuery,
    status: selectedStatus,
    plan: selectedPlan,
    role: selectedRole,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const users = computed((): UserProperties[] => usersData.value.users)
const totalUsers = computed(() => usersData.value.totalUsers)
interface Permission {
  name: string
  read: boolean
  write: boolean
  create: boolean
}

interface RoleDetails {
  name: string
  permissions: Permission[]
}
interface Roles {
  role: string;
  users: string[];
  details: RoleDetails;
}
const roleDetail = ref<RoleDetails | null>(null);
const rolesList = ref<string[]>([]) // Backend'den gelen roller
const atanmisRoller = ref<string[]>([]) // Kullanıcının atadığı roller
const seciliRol = ref<string | null>(null) // Dropdown'daki seçili rol
const roles = ref<Roles[]>([]); // Başlangıçta boş bir dizi


const resolveUserRoleVariant = (role: string) => {
  const roleLowerCase = role.toLowerCase()

  if (roleLowerCase === 'subscriber')
    return { color: 'primary', icon: 'tabler-user' }
  if (roleLowerCase === 'author')
    return { color: 'warning', icon: 'tabler-settings' }
  if (roleLowerCase === 'maintainer')
    return { color: 'success', icon: 'tabler-chart-donut' }
  if (roleLowerCase === 'editor')
    return { color: 'info', icon: 'tabler-pencil' }
  if (roleLowerCase === 'admin')
    return { color: 'error', icon: 'tabler-device-laptop' }

  return { color: 'primary', icon: 'tabler-user' }
}

const resolveUserStatusVariant = (stat: string) => {
  const statLowerCase = stat.toLowerCase()
  if (statLowerCase === 'pending')
    return 'warning'
  if (statLowerCase === 'active')
    return 'success'
  if (statLowerCase === 'inactive')
    return 'secondary'

  return 'primary'
}

const isAddNewUserDrawerVisible = ref(false)

// 👉 Add new user
const addNewUser = async (userData: UserProperties) => {
  await $api('/apps/users', {
    method: 'POST',
    body: userData,
  })

  // refetch User
  fetchUsers()
}



// 👉 Delete user
const deleteUser = async (id: number) => {
  await $api(`/apps/users/${id}`, {
    method: 'DELETE',
  })

  // Delete from selectedRows
  const index = selectedRows.value.findIndex(row => row === id)
  if (index !== -1)
    selectedRows.value.splice(index, 1)

  // refetch User
  // TODO: Make this async
  fetchUsers()
}
</script>

<template>
  <section>
    <VCard>
      <VCardText class="d-flex flex-wrap gap-4">
        <div class="d-flex gap-2 align-center">
          <p class="text-body-1 mb-0">
            Göster
          </p>
          <AppSelect :model-value="itemsPerPage" :items="[
            { value: 10, title: '10' },
            { value: 25, title: '25' },
            { value: 50, title: '50' },
            { value: 100, title: '100' },
            { value: -1, title: 'All' },
          ]" style="inline-size: 5.5rem;" @update:model-value="itemsPerPage = parseInt($event, 10)" />
        </div>

        <VSpacer />

        <div class="d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->
          <AppTextField v-model="searchQuery" placeholder="Kullanıcı Ara" style="inline-size: 15.625rem;" />

          <!-- 👉 Add user button -->
          <AppSelect v-model="seciliRol" placeholder="Rol Seçiniz..." :items="rolesList" clearable clear-icon="tabler-x"
            item-text="name" item-value="name" style="inline-size: 10rem;" />


        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION datatable -->
      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:model-value="selectedRows" v-model:page="page"
        :items-per-page-options="[
          { value: 10, title: '10' },
          { value: 20, title: '20' },
          { value: 50, title: '50' },
          { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
        ]" :items="users" :items-length="totalUsers" :headers="headers" class="text-no-wrap" show-select
        @update:options="updateOptions">
        <!-- User -->
        <template #item.user="{ item }">
          <div class="d-flex align-center gap-x-4">
            <VAvatar size="34" :variant="!item.avatar ? 'tonal' : undefined"
              :color="!item.avatar ? resolveUserRoleVariant(item.role).color : undefined">
              <VImg v-if="item.avatar" :src="item.avatar" />
              <span v-else>{{ avatarText(item.name) }}</span>
            </VAvatar>
            <div class="d-flex flex-column">
              <h6 class="text-base">
                <RouterLink :to="{ name: 'apps-user-view-id', params: { id: item.id } }"
                  class="font-weight-medium text-link">
                  {{ item.name }}
                </RouterLink>
              </h6>
              <div class="text-sm">
                {{ item.email }}
              </div>
            </div>
          </div>
        </template>

        <!-- 👉 Role -->
        <template #item.role="{ item }">
          <div class="d-flex align-center gap-x-2">
            <!-- İkon -->
            <VIcon :size="22" :icon="resolveUserRoleVariant(item.role).icon"
              :color="resolveUserRoleVariant(item.role).color" />

            <!-- Rol adı -->
            <div class="text-capitalize text-high-emphasis text-body-1">

              <div class="d-flex flex-column">
                <h6 class="text-base">
                  <RouterLink :to="{ name: 'apps-user-view-id', params: { id: item.id } }"
                    class="font-weight-medium text-link">
                    <div class="d-flex gap-2">
                      <VChip v-for="(role, index) in item.role.split(',')" :key="index" label size="small"
                        :color="colors[role.trim()]?.color || 'default'" class="font-weight-medium">
                        {{ colors[role.trim()]?.text || role.trim() }}
                      </VChip>
                    </div>
                  </RouterLink>
                </h6>
              </div>
            </div>
          </div>
        </template>
        <template #item.rol="{ item }">

        </template>



        <!-- Status -->
        <template #item.status="{ item }">
          <VChip :color="resolveUserStatusVariant(item.status)" size="small" label class="text-capitalize">
            {{ item.status }}
          </VChip>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn @click="deleteUser(item.id)">
            <VIcon icon="tabler-trash" />
          </IconBtn>

          <IconBtn>
            <VIcon icon="tabler-eye" />
          </IconBtn>

          <VBtn icon variant="text" color="medium-emphasis">
            <VIcon icon="tabler-dots-vertical" />
            <VMenu activator="parent">
              <VList>
                <VListItem :to="{ name: 'apps-user-view-id', params: { id: item.id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>

                  <VListItemTitle>View</VListItemTitle>
                </VListItem>

                <VListItem link>
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem @click="deleteUser(item.id)">
                  <template #prepend>
                    <VIcon icon="tabler-trash" />
                  </template>
                  <VListItemTitle>Delete</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn>
        </template>

        <template #bottom>
          <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="totalUsers" />
        </template>
      </VDataTableServer>
      <!-- SECTION -->
    </VCard>

    <!-- 👉 Add New User -->
    <AddNewUserDrawer v-model:isDrawerOpen="isAddNewUserDrawerVisible" @user-data="addNewUser" />
  </section>
</template>

<style lang="scss">
.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
}

.badge {
  border-radius: 12px;
  font-size: 0.875rem;
  text-transform: capitalize;
}

.swal2-confirm {
  background-color: red !important;
  color: white !important;
}

.swal2-cancel {
  color: white !important;
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
