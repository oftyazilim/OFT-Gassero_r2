<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import type { VForm } from 'vuetify/components/VForm'
import type { UserProperties } from '@db/apps/users/types'
import { ref } from 'vue'
import axios, { AxiosResponse } from 'axios';

const rolesList = ref<string[]>([]) // Backend'den gelen roller
const atanmisRoller = ref<string[]>([]) // Kullanıcının atadığı roller
const seciliRol = ref<string | null>(null) // Dropdown'daki seçili rol
const roller = ref<{ name: string }[]>([]);

const fetchRoles = () => {
  axios.get('/api/roles')
    .then(response => {
      roller.value = response.data;
      seciliRol.value = rolesList.value[0] || null // İlk rol varsayılan olarak seçili olsun
    })
    .catch(error => {
      console.error('Roller alınırken hata oluştu:', error)
    })
}

onMounted(() => {
  fetchRoles()
  emit('userData', updateForm);
})


const updateForm = (userData: UserProperties) => {
  name.value = userData.name;
  email.value = userData.email;
  // Parola genelde doldurulmaz; ancak gerekiyorsa burada işlenebilir
  password.value = ''; // Parolayı boş bırakın
};


interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
  (e: 'userData', value: UserProperties): void
}


interface UserResponse {
  id: number;
  name: string;
  password: string;
  email: string;
  // role: string;
  // Diğer alanlar...
}

interface Props {
  userID: number | 0;
  isDrawerOpen: boolean;
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const requiredValidator = (value: any) => !!value || 'Bu alan gereklidir'
const emailValidator = (value: string) => /.+@.+\..+/.test(value) || 'Geçerli bir email adresi girin'
const passwordValidator = (value: string) => {
  const minLength = 8;
  const hasNumber = /\d/.test(value);

  if (!value) return 'Parola gereklidir';
  if (value.length < minLength) return `Parola en az ${minLength} karakter olmalıdır`;
  if (!hasNumber) return 'Parola en az bir rakam içermelidir';

  return true; // Doğrulama başarılı
};

const isFormValid = ref(false)
const refForm = ref<VForm>()
const name = ref('')
const password = ref('')
const email = ref('')
// const role = ref('')

const value = ref(['AclDemo'])

const isPasswordVisible = ref(false)

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)

  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}


const createUser = async () => {
  try {
    const response = await axios.post('/api/kullanicilar', {
      name: name.value,
      email: email.value,
      password: password.value,
      roles: value.value,
    });
    console.log('Kullanıcı başarıyla oluşturuldu:', response.data);
  } catch (error) {
    console.error('Kullanıcı oluşturulurken hata oluştu:', error);
  }
};


const onSubmit = () => {
  refForm.value?.validate().then((result) => {
    if (result) {
      createUser();
      emit('update:isDrawerOpen', false)
    } else {
      console.error('Form doğrulama hataları:', refForm.value?.errors);
    }
  });
};

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}

const role = ref('')
</script>

<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <!-- <AppDrawerHeaderSection title="" @cancel="closeNavigationDrawer" > -->
      <h4 class="text-h4 mt-4 text-center mb-2"> {{ props.userID }}
          {{ role ? 'Rol Düzenle' : 'Yeni Rol Ekle' }}
        </h4>
    <!-- </AppDrawerHeaderSection> -->

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 Username -->
              <VCol cols="12">
                <AppTextField v-model="name" :rules="[requiredValidator]" label="Kullanıcı Adı"
                  placeholder="Ömer Faruk" />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12">
                <AppTextField v-model="email" :rules="[requiredValidator, emailValidator]" label="Email"
                  placeholder="oft@oft.com" />
              </VCol>
              <!-- 👉 Password -->
              <VCol cols="12">
                <AppTextField v-model="password" :rules="[requiredValidator, passwordValidator]" label="Password"
                  placeholder="············" :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible" />
              </VCol>

              <VCol cols="12">
                <AppSelect v-model="value" :items="roller" :menu-props="{ maxHeight: '400' }" label="Roller" multiple
                  persistent-hint placeholder="Rol seçiniz..." />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn type="submit" class="me-3">
                  Ekle
                </VBtn>
                <VBtn type="reset" variant="tonal" color="error" @click="closeNavigationDrawer">
                  Vazgeç
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>


<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.bg-danger {
  background-color: #dc3545 !important;
}

.text-white {
  color: white !important;
}

.item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
