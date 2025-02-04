<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import ChangePasswordModal from "@/components/dialogs/ChangePasswordModal.vue";

const router = useRouter()
const ability = useAbility()

// TODO: Get type from backend
const userData = useCookie<any>('userData')

// Modal referansı
const changePasswordModal = ref(null);
const isUserInfoEditDialogVisible = ref(false)

// Şifre değiştirme modalını açma fonksiyonu
const openPasswordModal = () => {
  isUserInfoEditDialogVisible.value = !isUserInfoEditDialogVisible.value;

  // if (changePasswordModal.value && typeof changePasswordModal.value.openDialog === "function") {
  //   changePasswordModal.value.openDialog();
  // } else {
  //   console.error("Şifre değiştirme modalı bulunamadı veya 'openDialog' metodu tanımlı değil.");
  // }
};

const logout = async () => {
  // Remove "accessToken" from cookie
  useCookie('accessToken').value = null

  // Remove "userData" from cookie
  userData.value = null

  // Redirect to login page
  await router.push('/login')

  // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page
  // Remove "userAbilities" from cookie
  useCookie('userAbilityRules').value = null

  // Reset ability to initial ability
  ability.update([])
}

const userProfileList = [
  { type: 'divider' },
  // { type: 'navItem', icon: 'tabler-user', title: 'Profil', to: { name: 'apps-user-view-id', params: { id: 21 } } },
  // { type: 'navItem', icon: 'tabler-settings', title: 'Settings', to: { name: 'pages-account-settings-tab', params: { tab: 'account' } } },
  // { type: 'navItem', icon: 'tabler-file-dollar', title: 'Billing Plan', to: { name: 'pages-account-settings-tab', params: { tab: 'billing-plans' } }, badgeProps: { color: 'error', content: '4' } },
  // { type: 'divider' },
  // { type: 'navItem', icon: 'tabler-currency-dollar', title: 'Pricing', to: { name: 'pages-pricing' } },
  // { type: 'navItem', icon: 'tabler-question-mark', title: 'FAQ', to: { name: 'pages-faq' } },
]
</script>

<template>


  <VBadge v-if="userData" dot bordered location="bottom right" offset-x="-142" offset-y="-14" color="success">
    <VAvatar size="38" class="cursor-pointer mt-3" :color="!(userData && userData.avatar) ? 'primary' : undefined"
      :variant="!(userData && userData.avatar) ? 'tonal' : undefined">
      <VImg v-if="userData && userData.avatar" :src="userData.avatar" />
      <VIcon v-else icon="tabler-user" />

      <!-- SECTION Menu -->
      <VMenu activator="parent" width="240" location="bottom end" offset="12px">
        <VList>
          <VListItem>
            <div class="d-flex gap-2 align-center">
              <VListItemAction>
                <VBadge dot location="bottom right" offset-x="3" offset-y="3" color="success" bordered>
                  <VAvatar :color="!(userData && userData.avatar) ? 'primary' : undefined"
                    :variant="!(userData && userData.avatar) ? 'tonal' : undefined">
                    <VImg v-if="userData && userData.avatar" :src="userData.avatar" />
                    <VIcon v-else icon="tabler-user" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>

              <div>
                <h6 class="text-h6 font-weight-medium">
                  {{ userData.name || userData.email }}
                </h6>
                <VListItemSubtitle class="text-capitalize text-disabled">
                  {{ userData.unvan }}
                </VListItemSubtitle>
              </div>
            </div>
          </VListItem>

          <PerfectScrollbar :options="{ wheelPropagation: false }">
            <template v-for="item in userProfileList" :key="item.title">
              <VListItem v-if="item.type === 'navItem'" :to="item.to">
                <template #prepend>
                  <VIcon :icon="item.icon" size="22" />
                </template>

                <VListItemTitle>{{ item.title }}</VListItemTitle>

                <template v-if="item.badgeProps" #append>
                  <VBadge rounded="sm" class="me-3" v-bind="item.badgeProps" />
                </template>
              </VListItem>

              
              <VDivider v-else class="my-2" />

            <div class="px-2 py-2">
              <VListItem @click="openPasswordModal">Şifre Değiştir</VListItem>
            </div>

            </template>
            
            <div class="px-4 py-2">
              <VBtn block size="small" color="error" append-icon="tabler-logout" @click="logout">
                Güvenli Çıkış
              </VBtn>
            </div>
          </PerfectScrollbar>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
    <div class="ms-4">
      <p style="margin-block-start: 18px;"> {{ userData.name }}</p>
      <p style="margin-block-start: -15px;">{{ userData.unvan }}</p>
    </div>
    
    
  </VBadge>
  
  
  <ChangePasswordModal v-model:isDialogVisible="isUserInfoEditDialogVisible"/>



</template>
