<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import axios from 'axios';
import type { VForm } from 'vuetify/components/VForm'
import { ref, watch, nextTick, reactive } from 'vue'

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
  (e: 'submit', value: Details): void

  // (e: 'userData', value: UserProperties): void
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
const emit = defineEmits<Emit>()

const roller = ref<{ name: string }[]>([]);
const isFormValid = ref(false)
const refForm = ref<VForm>()
const name = ref('')
const email = ref<any>(null)
const unvan = ref<any>(null)
const proses = ref<any>(null)
const tip = ref<any>(null)
const roles = ref('')
const selectedRoles = ref<string[]>([]);

// Reaktif userData nesnesi
const userData = reactive({ ...props.userData })

// props.userData değiştiğinde userData'i güncelle
watch(() => props.userData, (newVal) => {
  Object.assign(userData, newVal)
})

watch(
  () => props.userData,
  (newData) => {
    if (newData && newData.id > 0) {
      name.value = newData.name || '';
      email.value = newData.email || '';      
      selectedRoles.value = newData.roles != '' ? newData.roles.split(',').map(role => role.trim()) : [];
      proses.value = newData.proses || '';
      tip.value = newData.tip || '';
      unvan.value = newData.unvan || '';
      // Object.assign(userData, newData); // Düzenleme modunda gelen verileri atayın
    } else {
      // Yeni kullanıcı için varsayılan değerleri temizle
      selectedRoles.value = [];
      Object.assign(userData, {
        id: 0,
        name: '',
        email: '',
        roles: null,
        proses: '',
        tip: '',
        unvan: '',
      });
    }
  },
  { immediate: true } // İlk başta da çalıştır
);


onMounted(() => {
  fetchRoles();
})

const fetchRoles = () => {
  axios.get('/api/roles')
    .then(response => {
      roller.value = response.data.map((name: string) => ( name ));
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

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {


      if (props.userData?.id) {
        console.log(`Kullanıcı düzenleniyor: ${props.userData.id}`);
        // PUT isteğiyle kullanıcıyı düzenleyin
        updateUser();
      } else {
        console.log('Yeni kullanıcı ekleniyor:');
        // POST isteğiyle yeni kullanıcıyı oluşturun
        saveUser();
      }



      emit('update:isDrawerOpen', false)
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}

// Kaydetme işlemi
const saveUser = async () => {
  try {
    const response = await axios.post('/api/kullanicilar', {
      name: userData.name,
      email: userData.email,
      password: 'pass1234',
      roles: selectedRoles.value,
      proses: userData.proses,
      tip: userData.tip,
      unvan: userData.unvan,
    });
    console.log('Kullanıcı başarıyla oluşturuldu:', response.data);
  } catch (error) {
    if (error.response && error.response.data.errors) {
      console.error('Doğrulama hataları:', error.response.data.errors);
    } else {
      console.error('Beklenmeyen hata:', error);
    }
  }

  emit('update:isDrawerOpen', false);
};

// Kullanıcıyı güncelleme işlemi
const updateUser = async () => {
  try {
    const response = await axios.put(`/api/kullanicilar/${userData.id}`, {
      name: userData.name,
      email: userData.email,
      roles: selectedRoles.value,
      proses: userData.proses,
      tip: userData.tip,
      unvan: userData.unvan,
    });
    console.log("Kullanıcı başarıyla güncellendi:", response.data);
  } catch (error) {
    console.error("Kullanıcı güncellenirken hata oluştu:", error.response.data);
  }
};

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VDialog temporary :width="500" location="end" class="scrollable-content" :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <!-- <AppDrawerHeaderSection :title="props.userData.id > 0 ? 'Kullanıcı Düzenle' : 'Yeni Kullanıcı Ekle'"
      @cancel="closeNavigationDrawer" /> -->
    <VCard class="pa-2 pa-sm-10">

      <VCardItem class="text-center">
        <VCardTitle>
          <h4 class="text-h4 mb-2">
            {{ props.userData.id > 0 ? 'Kullanıcı Düzenle' : 'Yeni Kullanıcı Ekle' }}
          </h4>
        </VCardTitle>
      </VCardItem>

      <VDivider />

      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <!-- <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit"> -->
          <VForm ref="refForm" lazy-validation @submit.prevent="onSubmit">
            <VRow>
              <!-- 👉 Full name -->
              <VCol cols="12">
                <AppTextField v-model="userData.name" :rules="[requiredValidator]" label="Adı Soyadı"
                  placeholder="Ali VELİ" />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12">
                <AppTextField v-model="userData.email" :rules="[requiredValidator, emailValidator]" label="Email"
                  placeholder="aliveli@email.com" />
              </VCol>

              <!-- 👉 ünvan -->
              <VCol cols="12">
                <AppTextField v-model="userData.unvan" :rules="[requiredValidator]" label="Ünvan"
                  placeholder="Yönetici" />
              </VCol>


              <!-- 👉 Proses -->
              <VCol cols="12">
                <AppSelect v-model="userData.proses" :rules="[requiredValidator]" label="Görev Yeri (Proses)"
                  :items="['GENEL', 'SERPANTİN BÜKÜM', 'UÇ AÇMA', 'YIKAMAVE SIZDIRMAZLIK', 'SİPİR AÇMA', 'EŞANJÖR MONTAJ']" />
              </VCol>

              <!-- 👉 tip -->
              <VCol cols="12">
                <AppSelect v-model="userData.tip" :rules="[requiredValidator]" label="Kademe"
                  :items="['YÖNETİM', 'ÜRETİM']" />
              </VCol>

              <!-- 👉 Roller -->
              <VCol cols="12">
                <AppSelect v-model="selectedRoles" :rules="[requiredValidator]" :items="roller" item-title="name"
                  :menu-props="{ maxHeight: '400' }" label="Roller" multiple persistent-hint
                  placeholder="Rol seçiniz..." />

              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12" class="text-center mt-2">
                <VBtn type="submit" class="me-3">
                  Kaydet
                </VBtn>
                <VBtn type="reset" variant="tonal" color="error" @click="closeNavigationDrawer">
                  Vazgeç
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCard>

  </VDialog>
</template>
