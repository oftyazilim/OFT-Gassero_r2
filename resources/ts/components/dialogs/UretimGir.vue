<script setup lang="ts">
import { ref, watch, nextTick, reactive } from 'vue'
import axios from 'axios'

interface Details {
  planMiktar: number
  miktar: number
  miktarTemp: number
  id: number
  ieId: number
  userId: number
  tur: string
  iskarta: number
}

interface Emit {
  (e: 'submit', value: Details): void
  (e: 'update:isDialogVisible', value: boolean): void
}

interface Props {
  cardDetails?: Details
  isDialogVisible: boolean
}

const props = withDefaults(defineProps<Props>(), {
  cardDetails: () => ({
    planMiktar: 0,
    miktar: 0,
    miktarTemp: 0,
    id: 0,
    ieId: 0,
    userId: 0,
    tur: '',
    iskarta: 0,
  }),
})

const emit = defineEmits<Emit>()

// Reaktif cardDetails nesnesi
const cardDetails = reactive({ ...props.cardDetails })

// props.cardDetails değiştiğinde cardDetails'i güncelle
watch(() => props.cardDetails, (newVal) => {
  Object.assign(cardDetails, newVal)
})

// Referanslar
const inputRef = ref<any>(null)
const inputRef1 = ref<any>(null)

// Diyalog görünürlüğü değiştiğinde input'u odakla
watch(
  () => props.isDialogVisible,
  async (newVal) => {
    if (newVal) {
      await nextTick();
      inputRef.value?.focus(); // Vuetify bileşeninin focus metodu
    }
  }
);

// Formu gönder
const formSubmit = () => {
  if (cardDetails.miktar === null || cardDetails.miktar === 0) return
  if (cardDetails.tur !== ' (düzeltme)') {
    addDatabase(cardDetails.miktar, cardDetails.iskarta)
  } else {
    updateDatabase(cardDetails.miktar, cardDetails.miktarTemp, cardDetails.ieId, cardDetails.iskarta)
  }
  emit('submit', cardDetails)
  emit('update:isDialogVisible', false)
}

// Veritabanına yeni veri ekle
const addDatabase = async (miktar: number, iskarta: number) => {
  try {
    await axios.put(`/api/uretimekle`, {
      userId: cardDetails.userId,
      kayitID: cardDetails.id,
      miktar,
      miktarTemp: cardDetails.miktarTemp,
      planMiktar: cardDetails.planMiktar,
      iskarta,
    })
    resetCardDetails()
  } catch (error) {
    console.error('Veri eklenirken hata oluştu:', error)
  }
}

// Veritabanını güncelle
const updateDatabase = async (miktar: number, miktarTemp: number, ieId: number, iskarta: number) => {
  try {
    await axios.put(`/api/uretimduzelt`, {
      userID: cardDetails.userId,
      kayitID: cardDetails.id,
      ieId,
      miktar,
      miktarTemp,
      iskarta,
    })
    resetCardDetails()
  } catch (error) {
    console.error('Veri güncellenirken hata oluştu:', error)
  }
}

// Card detaylarını sıfırla
const resetCardDetails = () => {
  Object.assign(cardDetails, {
    miktar: 0,
    miktarTemp: 0,
    iskarta: 0,
  })
}

// Diyalog model değerini güncelle
const dialogModelValueUpdate = (val: boolean) => {
  resetCardDetails()
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 500" :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate">
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />
    <VCard class="pa-2 pa-sm-10">
      <VCardItem class="text-center">
        <VCardTitle>
          <h4 class="text-h4 mb-2">
            Üretim Girişi {{ cardDetails.tur }}
          </h4>
        </VCardTitle>
        <p class="text-body-1 mb-0">
          Üretim ve Iskarta miktarlarını giriniz...
        </p>
      </VCardItem>
      <VCardText class="pt-6">
        <VForm @submit.prevent="() => { }">
          <VRow>
            <VCol cols="12">
              <h6 class="text-h6 mb-2 ms-3">
                Üretim
              </h6>
              <AppTextField ref="inputRef" v-model="cardDetails.miktar" type="number"
                :max="cardDetails.planMiktar - cardDetails.miktarTemp" :min="0" />
            </VCol>
            <VCol cols="12">
              <h6 class="text-h6 mb-2 ms-3">
                Iskarta
              </h6>
              <AppTextField ref="inputRef1" v-model="cardDetails.iskarta" type="number" />
            </VCol>
            <VCol cols="12" class="text-center">
              <VBtn class="me-4" type="submit" @click="formSubmit">
                Kaydet
              </VBtn>
              <VBtn color="warning" variant="tonal" @click="dialogModelValueUpdate(false)">
                Vazgeç
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
