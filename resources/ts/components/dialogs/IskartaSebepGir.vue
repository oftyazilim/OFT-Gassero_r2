<script setup lang="ts">
import { ref, watch, nextTick, reactive } from 'vue'
import axios from 'axios'

const sebepOptions = ref<string[]>([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/sebep-list')
    sebepOptions.value = response.data.map((item: { SEBEP: string }) => item.SEBEP)
  } catch (error) {
    console.error('Sebep listesi yüklenirken hata oluştu:', error)
  }
})

interface Details {
  ID: number
  SEBEP: string
  URUNID: number
  ISEMRIID: number
  BARKOD: string
  OPERASYON: string
  USERID: number
}

interface Emit {
  (e: 'submit', value: Details): void
  (e: 'update:isDialogVisible', value: boolean): void
}

interface Props {
  sebepler?: Details
  isDialogVisible: boolean
}

const props = withDefaults(defineProps<Props>(), {
  sebepler: () => ({
    ID: 0,
    SEBEP: '',
    URUNID: 0,
    ISEMRIID: 0,
    BARKOD: '',
    OPERASYON: '',
    USERID: 0,
  }),
})

const emit = defineEmits<Emit>()

const sebepler = reactive({ ...props.sebepler })

const onFormSubmit = () => {
  addDatabase(sebepler.SEBEP)
  emit('submit', sebepler)
  emit('update:isDialogVisible', false)
}


const addDatabase = async (sebep: string) => {
if (sebepler.SEBEP === null) return
  try {
    axios
      .post("/api/iskartaEkle", {
        params: {
          id: sebepler.ID,
          urunID: sebepler.URUNID,
          isemriID: sebepler.ISEMRIID,
          barkod: sebepler.BARKOD,
          sebep: sebep,
          operasyon: sebepler.OPERASYON,
          userID: sebepler.USERID,
        },
      })
      .catch((error) => {
        console.error("Veri çekilirken hata oluştu: ", error);
      })
    resetSebepler()
  } catch (error) {
    console.error('Veri eklenirken hata oluştu:', error)
  }
}

// Card detaylarını sıfırla
const resetSebepler = () => {
  Object.assign(sebepler, {
    ID: 0,
    SEBEP: '',
  })
}

// Diyalog model değerini güncelle
const dialogModelValueUpdate = (val: boolean) => {
  resetSebepler()
  emit('update:isDialogVisible', val)
}

</script>


<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 500" :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate">
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-10 pa-2">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-2">
          Iskarta Sebebi Girişi
        </h4>
        <!-- <p class="text-body-1 text-center mb-6">
          Updating user details will receive a privacy audit.
        </p> -->

        <!-- 👉 Form -->
        <VForm class="mt-6" @submit.prevent="onFormSubmit">
          <VRow>

            <!-- 👉 Sebep -->
            <VCol cols="12">
              <AppSelect v-model="sebepler.SEBEP" label="Iskarta Sebebi" placeholder="Sebep Giriniz..."
                :items="sebepOptions" />
            </VCol>


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
