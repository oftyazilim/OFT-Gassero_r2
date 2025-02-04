<template>





  <!-- 

  <v-container>
    <v-card>
      <iframe width="480" height="330" src="https://www.youtube.com/embed/t-aR1Yh0RsE?si=ovLw8vZ4jUUFAIKq"
        title="OFT Üretim Takip Eğitim" frameborder="0" allowfullscreen></iframe>
    </v-card>
  </v-container> -->
</template>

<script setup lang="ts">
import VideoOynat from '@/components/dialogs/VideoOynat.vue';
import { usePageTitleStore } from "@/stores/pageTitle";


const isCardAddDialogVisible = ref(false)
const isPricingPlanDialogVisible = ref(false)
const isEditAddressDialogVisible = ref(false)
const isTwoFactorDialogOpen = ref(false)
const isUserInfoEditDialogVisible = ref(false)
const isVideoOynatDialogVisible = ref(false)
const isReferAndEarnDialogVisible = ref(false)
const isPaymentProvidersDialogVisible = ref(false)
const isAddPaymentMethodsDialogVisible = ref(false)
const isCreateAppVisible = ref(false)
const pageTitleStore = usePageTitleStore();

const youtubeUrl: { url: string } = {
  url: 'https://www.youtube.com/embed/izOJjvIGlYI?si=634Uq4dFucR3_c2i',
};

const mesaj = "Ana Ekran";

document.title = "OFT Yazılım - " + String(mesaj);
pageTitleStore.setTitle(mesaj);
pageTitleStore.setToplam('');
</script>
