<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'

// Tip tanımlamaları
interface Permission {
  name: string
  view: boolean // Görüntüle
  add: boolean  // Ekle
  edit: boolean // Düzenle
  delete: boolean // Sil
}


interface Roles {
  name: string
  permissions: Permission[]
}

interface Props {
  rolePermissions?: Roles
  isDialogVisible: boolean
}
interface Emit {
  (e: 'update:isDialogVisible', value: boolean): void
  (e: 'update:rolePermissions', value: Roles): void
}

// Varsayılan değerlerle props tanımı
const props = withDefaults(defineProps<Props>(), {
  rolePermissions: () => ({
    name: '',
    permissions: [],
  }),
})

// emit tanımı
const emit = defineEmits<Emit>()

// Tüm izinlerin listesi
const permissions = ref<Permission[]>([
  { name: 'Dashboards', view: false, add: false, edit: false, delete: false },
  { name: 'YTK Dashboard', view: false, add: false, edit: false, delete: false },
  { name: 'DTK Dashboard', view: false, add: false, edit: false, delete: false },
  { name: 'ESD Dashboard', view: false, add: false, edit: false, delete: false },
  { name: 'Ayarlar', view: false, add: false, edit: false, delete: false },
  { name: 'Kullanıcılar', view: false, add: false, edit: false, delete: false },
  { name: 'Roller', view: false, add: false, edit: false, delete: false },
  { name: 'İzinler', view: false, add: false, edit: false, delete: false },
])


// Rol adı ve seçili tüm izinler
const role = ref('')
const isSelectAll = ref(false)
const refPermissionForm = ref<VForm>()

// İzinlerin seçili durumlarını kontrol etmek için sayımlar
const checkedCount = computed(() => {
  return permissions.value.reduce((count, permission) => {
    return count + +permission.read + +permission.write + +permission.create
  }, 0)
})

const isIndeterminate = computed(() =>
  checkedCount.value > 0 && checkedCount.value < permissions.value.length * 3
)

// Tüm izinleri seç/deselect yap
watch(isSelectAll, val => {
  permissions.value.forEach(permission => {
    permission.view = val
    permission.add = val
    permission.edit = val
    permission.delete = val
  })
})


// `rolePermissions` değiştiğinde izinleri güncelle
watch(() => props.rolePermissions, (newRole) => {
  if (newRole) {
    role.value = newRole.name
    permissions.value = permissions.value.map(permission => {
      const rolePermission = newRole.permissions.find(p => p.name === permission.name)
      return rolePermission
        ? { ...permission, ...rolePermission }
        : { ...permission, view: false, add: false, edit: false, delete: false }
    })
  }
}, { immediate: true })


// Form gönderimi
const onSubmit = () => {
  const rolePermissions = {
    name: role.value,
    permissions: permissions.value,
  }

  emit('update:rolePermissions', rolePermissions)
  emit('update:isDialogVisible', false)
  isSelectAll.value = false
  refPermissionForm.value?.reset()
}


// Form sıfırlama
const onReset = () => {
  emit('update:isDialogVisible', false)
  isSelectAll.value = false
  refPermissionForm.value?.reset()
}


// Form verilerini kaydet
const savePermissions = () => {
  const rolePermissions = {
    name: role.value,
    permissions: permissions.value.map(permission => ({
      name: permission.name,
      view: permission.view,
      add: permission.add,
      edit: permission.edit,
      delete: permission.delete,
    })),
  }

  emit('update:rolePermissions', rolePermissions)
  emit('update:isDialogVisible', false)
}


// Dialog sıfırlama işlemi
const resetDialog = () => {
  isSelectAll.value = false
  permissions.value = permissions.value.map(permission => ({
    ...permission,
    view: false,
    add: false,
    edit: false,
    delete: false,
  }))
  refPermissionForm.value?.reset()
}
// İzinleri dinamik olarak API'den getirme
const fetchPermissionsForRole = async (roleName: string) => {
  try {
    const { data } = await axios.get(`/api/permissions?role=${roleName}`)
    permissions.value = permissions.value.map(permission => {
      const matched = data.find((p: Permission) => p.name === permission.name)
      return matched
        ? { ...permission, ...matched }
        : { ...permission, view: false, add: false, edit: false, delete: false }
    })
  } catch (error) {
    console.error('İzinler alınırken hata oluştu:', error.message || error)
  }
}

// Dialog açıldığında izinleri yükle
watch(
  () => props.rolePermissions,
  (newRole) => {
    if (newRole?.name) {
      role.value = newRole.name
      fetchPermissionsForRole(newRole.name)
    }
  },
  { immediate: true }
)
</script>

<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 900" :model-value="props.isDialogVisible"
    @update:model-value="onReset">
    <DialogCloseBtn @click="onReset" />

    <VCard class="pa-sm-10 pa-2">
      <VCardText>
        <h4 class="text-h4 text-center mb-2">
          {{ role ? 'Rol Düzenle' : 'Yeni Rol Ekle' }}
        </h4>
        <p class="text-body-1 text-center mb-6">Rol izinlerini ayarla...</p>

        <VForm ref="refPermissionForm">
          <AppTextField v-model="role" label="Rol Adı" />

          <h5 class="text-h5 my-6">Rol İzinleri</h5>

          <VTable class="permission-table text-no-wrap mb-6">
            <tr>
              <td>
                <h6 class="text-h6">Yönetici Erişimi</h6>
              </td>
              <td colspan="3">
                <div class="d-flex justify-end">
                  <VCheckbox v-model="isSelectAll" v-model:indeterminate="isIndeterminate" label="Tümünü Seç" />
                </div>
              </td>
            </tr>

            <template v-for="permission in permissions" :key="permission.name">
              <tr>
                <td>
                  <h6 class="text-h6">{{ permission.name }}</h6>
                </td>
                <td>
                  <div class="d-flex justify-end">
                    <VCheckbox v-model="permission.view" label="Görüntüle" />
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-end">
                    <VCheckbox v-model="permission.add" label="Ekle" />
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-end">
                    <VCheckbox v-model="permission.edit" label="Düzenle" />
                  </div>
                </td>
                <td>
                  <div class="d-flex justify-end">
                    <VCheckbox v-model="permission.delete" label="Sil" />
                  </div>
                </td>
              </tr>
            </template>

          </VTable>

          <div class="d-flex align-center justify-center gap-4">
            <VBtn @click="onSubmit">{{ role ? 'Güncelle' : 'Kaydet' }}</VBtn>
            <VBtn color="secondary" variant="tonal" @click="onReset">
              İptal
            </VBtn>
          </div>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.permission-table {
  td {
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    padding-block: 0.5rem;

    .v-checkbox {
      min-inline-size: 4.75rem;
    }

    &:not(:first-child) {
      padding-inline: 0.5rem;
    }

    .v-label {
      white-space: nowrap;
    }
  }
}
</style>
