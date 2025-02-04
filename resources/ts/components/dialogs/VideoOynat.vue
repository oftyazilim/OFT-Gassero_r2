<script setup lang="ts">


onMounted(async () => {

})

interface Details {
  url: string
}

interface Emit {
  (e: 'submit', value: Details): void
  (e: 'update:isDialogVisible', value: boolean): void
}

interface Props {
  url?: Details
  isDialogVisible: boolean
}

const props = withDefaults(defineProps<Props>(), {
  url: () => ({
    url: '',
  }),
})

const emit = defineEmits<Emit>()

const url = reactive({ ...props.url })

const onFormSubmit = () => {
  emit('submit', url)
  emit('update:isDialogVisible', false)
}

// Diyalog model değerini güncelle
const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

</script>


<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 1200" :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate">
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-1 pa-1">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-2">
          Iskarta Sebebi Girişi
        </h4>

        <VCardText cols="12" v-model="url.url" label="Iskarta Sebebi" placeholder="Sebep Giriniz...">
          <div class="responsive-iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/NNAaLyoapnw?si=Z3Cd0eCUtqOl4az7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   
            
            
            <!-- <iframe
            :src="props.url.url"
            title="OFT Üretim Takip Eğitim"
            frameborder="0"
            allowfullscreen
          ></iframe> -->
          </div>
        </VCardText>

        <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
          <VBtn @click="dialogModelValueUpdate(false)">
            Kapat
          </VBtn>
        </VCol>
      </VCardText>
    </VCard>
  </VDialog>
</template>


<style scoped>
.responsive-iframe-container {
  position: relative;
  overflow: hidden;
  inline-size: 100%;
  /* Takes the full width of the parent container */
  padding-block-start: 56.25%;
  /* Aspect ratio: 16:9 */
}

.responsive-iframe-container iframe {
  position: absolute;
  border: none;
  block-size: 100%;
  /* Full height */
  inline-size: 100%;
  /* Full width */
  inset-block-start: 0;
  inset-inline-start: 0;
}
</style>
