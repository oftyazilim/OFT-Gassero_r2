<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import type { VForm } from 'vuetify/components/VForm'
import axios from 'axios';
import { ref, watch } from 'vue';

const roller = ref<{ name: string }[]>([]);
const requiredValidator = (value: any) => !!value || 'Bu alan gereklidir'
const emailValidator = (value: string) => /.+@.+\..+/.test(value) || 'Geçerli bir email adresi girin'

const isFormValid = ref(false)
const refForm = ref<VForm>()
const name = ref('')
const email = ref('')
const unvan = ref('')
const proses = ref('')
const tip = ref('')
const roles = ref('AclDemo')

interface Emit {
  (e: 'submit', value: Details): void
  (e: 'update:isDrawerOpen', value: boolean): void
}

interface Details {
  id: number;
  name: string;
  email: string;
  roles: string;
  proses: string;
  tip: string;
  unvan: string;
}

interface Props {
  isDrawerOpen: boolean
  userData?: Details
}

const props = withDefaults(defineProps<Props>(), {
  userData: () => ({
    id: 0,
    name: '',
    email: '',
    roles: '',
    proses: '',
    tip: '',
    unvan: '',
  }),
})

// props.userData değiştiğinde userData'i güncelle
watch(() => props.userData, (newVal) => {
  Object.assign(userData, newVal)
})

// watch(
//   () => props.isDrawerOpen,
//   (isOpen) => {
//     if (isOpen) {
//       nextTick(() => {
//         // refForm.value?.reset(); // Formu temizler
//         refForm.value?.resetValidation(); // Doğrulamayı sıfırlar
//       });
//     }
//   }
// );

const emit = defineEmits<Emit>()
const userData = reactive({ ...props.userData })

onMounted(() => {
  fetchRoles();
})

const fetchRoles = () => {
  axios.get('/api/roles')
    .then(response => {
      roller.value = response.data;
    })
    .catch(error => {
      console.error('Roller alınırken hata oluştu:', error)
    })
}

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)

  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const onSubmit = async () => {
  const isValid = await refForm.value?.validate();
  if (isValid) {
    saveUser();
    closeNavigationDrawer();
  } else {
    console.error('Form doğrulama hataları:', refForm.value?.errors);
  }
};

const createUser = async () => {
  try {
    const response = await axios.post('/api/kullanicilar', {
      name: name.value,
      email: email.value,
      password: password.value,
      roles: value.value,
      unvan: unvan.value,
      proses: proses.value != null ? proses.value : '',
      tip: kademe.value,
    });
    console.log('Kullanıcı başarıyla oluşturuldu:', response.data);
  } catch (error) {
    console.error('Kullanıcı oluşturulurken hata oluştu:', error);
  }
};

// Kaydetme işlemi
const saveUser = () => {
  const userPayload = {
    name: name.value,
    email: email.value,
    roles: roles.value,
    proses: proses.value,
    tip: tip.value,
    unvan: unvan.value,
  };

  if (props.userData?.id) {
    console.log(`Kullanıcı düzenleniyor: ${props.userData.id}`, userPayload);
    // PUT isteğiyle kullanıcıyı düzenleyin
  } else {
    console.log('Yeni kullanıcı ekleniyor:', userPayload);
    // POST isteğiyle yeni kullanıcıyı oluşturun
  }

  emit('update:isDrawerOpen', false);
};

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}

// Props değerlerini form alanlarına bağlamak için watch
watch(
  () => props.userData,
  (newData) => {
    if (newData) {
      console.log(newData.id, newData.name);
      name.value = newData.name || '';
      email.value = newData.email || '';
      roles.value = newData.roles || '';
      proses.value = newData.proses || '';
      tip.value = newData.tip || '';
      unvan.value = newData.unvan || '';
    } else {
      // Yeni kullanıcı için tüm alanları temizle
      name.value = '';
      email.value = '';
      roles.value = '';
      proses.value = '';
      tip.value = '';
      unvan.value = '';
    }
  },
  { immediate: true } // İlk yüklemede props değerlerini form alanlarına ata
);
</script>

<template>
  <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection :title="props.userData.id != 0 ? 'Kullanıcı Düzenle' : 'Yeni Kullanıcı Ekle'" @cancel="closeNavigationDrawer" />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 Full name -->
              <VCol cols="12">
                <AppTextField v-model="name" :rules="[requiredValidator]" label="Adı Soyadı" placeholder="Ali VELİ" />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12">
                <AppTextField v-model="email" :rules="[requiredValidator, emailValidator]" label="Email"
                  placeholder="aliveli@email.com" />
              </VCol>

              <!-- 👉 Şifre -->
              <!-- <VCol cols="12">
                <AppTextField v-if="isPasswordVisible" v-model="password" type="password"
                  :rules="[requiredValidator, passwordValidator]" label="Şifre" />
              </VCol> -->

              <!-- 👉 ünvan -->
              <VCol cols="12">
                <AppTextField v-model="unvan" :rules="[requiredValidator]" label="Ünvan" placeholder="Yönetici" />
              </VCol>


              <!-- 👉 Proses -->
              <VCol cols="12">
                <AppSelect v-model="proses" :rules="[requiredValidator]" label="Görev Yeri (Proses)"
                  :items="['GENEL', 'SERPANTİN BÜKÜM', 'UÇ AÇMA', 'YIKAMAVE SIZDIRMAZLIK', 'SİPİR AÇMA', 'EŞANJÖR MONTAJ']" />
              </VCol>

              <!-- 👉 tip -->
              <VCol cols="12">
                <AppSelect v-model="tip" :rules="[requiredValidator]" label="Kademe"
                  :items="['YÖNETİM', 'ÜRETİM']" />
              </VCol>

              <!-- 👉 Roller -->
              <VCol cols="12">
                <AppSelect v-model="roles" :rules="[requiredValidator]" :items="roller"
                  :menu-props="{ maxHeight: '400' }" label="Roller" multiple persistent-hint
                  placeholder="Rol seçiniz..." />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn type="submit" class="me-3">
                  Submit
                </VBtn>
                <VBtn type="reset" variant="tonal" color="error" @click="closeNavigationDrawer">
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
