<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import IskartaSebepleri from '../components/IskartaSebepleri.vue';
import MamulOzellikTanimlari from '../components/MamulOzellikTanimlari.vue';
import { usePageTitleStore } from "@/stores/pageTitle";

const pageTitleStore = usePageTitleStore();
pageTitleStore.setTitle('Tanımlar');
pageTitleStore.setToplam('');
document.title = "OFT - Tanımlar";

const currentTab = ref('tab-2')
</script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs v-model="currentTab" direction="vertical">
          <VTab>
            <VIcon start icon="tabler-egg-cracked" />
            Iskarta Sebepleri
          </VTab>

          <VTab>
            <VIcon start icon="tabler-lock" />
            Mamül Özellik Tanımları
          </VTab>

          <VTab>
            <VIcon start icon="tabler-access-point" />
            Hedef Tanımları
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow v-model="currentTab" class="tanim ms-1">
          <VWindowItem value="tab-1">
            <IskartaSebepleri />
          </VWindowItem>



          <VWindowItem value="tab-2">
            <MamulOzellikTanimlari />
          </VWindowItem>




          <VWindowItem value="tab-3">
            <p class="mb-0">
              Şimdilik Aktif Değil ...
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>



<style scoped>
.d-flex {
  block-size: 80vh;
}

.grid {
  block-size: 75vh;
}
</style>
