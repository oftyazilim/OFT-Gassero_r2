<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const userData = useCookie<any>("userData");

const passwordRequirements = [
  'Minimum 8 characters long - the more, the better',
  'At least one lowercase character',
  'At least one number, symbol, or whitespace character',
]


interface Emit {
  (e: 'update:isDialogVisible', value: boolean): void
}

interface Props {
  isDialogVisible: boolean
}

const emit = defineEmits<Emit>()
const props = defineProps<Props>()

const onFormSubmit = async () => {
  try {
    console.log(currentPassword.value);
    await axios.post("/api/change-password", {
      userId: userData.value.id,
      current_password: currentPassword.value,
      new_password: newPassword.value,
      new_password_confirmation: confirmPassword.value,
    });
    alert("Şifreniz başarıyla değiştirildi.");
    emit('update:isDialogVisible', false)
  } catch (error: any) {
    console.error("Şifre değiştirilirken hata oluştu:", error.response.data);
    alert(error.response.data.error || "Bir hata oluştu.");
  }
}

// Diyalog model değerini güncelle
const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

</script>


<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 700" :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate">
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-10 pa-2">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-2">
          Şifre Değiştir
        </h4>

        <!-- 👉 Form -->
        <VForm class="mt-6" @submit.prevent="onFormSubmit">
          <VRow>

            <VCardText class="pt-0">
              <!-- 👉 Current Password -->
              <VRow>
                <VCol cols="12" md="6">
                  <!-- 👉 current password -->
                  <AppTextField v-model="currentPassword" :type="isCurrentPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isCurrentPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'" label="Mevcut Şifre"
                    autocomplete="on" placeholder="············"
                    @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible" />
                </VCol>
              </VRow>

              <!-- 👉 New Password -->
              <VRow>
                <VCol cols="12" md="6">
                  <!-- 👉 new password -->
                  <AppTextField v-model="newPassword" :type="isNewPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isNewPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'" label="Yeni Şifre"
                    autocomplete="on" placeholder="············"
                    @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible" />
                </VCol>

                <VCol cols="12" md="6">
                  <!-- 👉 confirm password -->
                  <AppTextField v-model="confirmPassword" :type="isConfirmPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                    label="Yeni Şifre (Tekrar)" autocomplete="on" placeholder="············"
                    @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible" />
                </VCol>
              </VRow>
            </VCardText>

            <!-- 👉 Password Requirements -->
            <!-- <VCardText>
            <h6 class="text-h6 text-medium-emphasis mb-4">
              Password Requirements:
            </h6>

            <VList class="card-list">
              <VListItem
                v-for="item in passwordRequirements"
                :key="item"
                :title="item"
                class="text-medium-emphasis"
              >
                <template #prepend>
                  <VIcon
                    size="10"
                    icon="tabler-circle-filled"
                  />
                </template>
</VListItem>
</VList>
</VCardText> -->


            <!-- 👉 Submit and Cancel -->
            <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
              <VBtn type="submit">
                Kaydet
              </VBtn>

              <VBtn color="secondary" variant="tonal" @click="dialogModelValueUpdate(false)">
                Vazgeç
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
