<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Console } from 'console';

const sebepOptions = ref<string[]>([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/sebep-list')
    sebepOptions.value = response.data.map((item: { SEBEP: string }) => item.SEBEP)
  } catch (error) {
    console.error('Sebep listesi yüklenirken hata oluştu:', error)
  }
  console.log(props.sebepData.ID);
  
})

interface Details {
  ID: number
  SEBEP: string
  USERID: number
}

interface Props {
  sebepler?: Details
  isDialogVisible: boolean
}

interface Emit {
  (e: 'submit', value: Details): void
  (e: 'update:isDialogVisible', val: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  sebepler: () => ({
    ID: 0,
    SEBEP: '',
    USERID: 0,
  }),
})

const emit = defineEmits<Emit>()

const sebepler = reactive({ ...props.sebepler })
// const sebepData = ref<SebepData>(structuredClone(toRaw(props.sebepData)))

watch(() => props, () => {
  sebepler.value = structuredClone(toRaw(props.sebepler))
})

const onFormSubmit = () => {
  if (sebepler.SEBEP === null) return
  emit('update:isDialogVisible', false)
  emit('submit', sebepler.value)
}

const onFormReset = () => {
  sebepler.value = structuredClone(toRaw(props.sebepler))

  emit('update:isDialogVisible', false)
}

const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 500"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
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
        <VForm
          class="mt-6"
          @submit.prevent="onFormSubmit"
        >
          <VRow>
           
            <!-- 👉 Sebep -->
            <VCol
              cols="12"
            >
              <AppSelect
                v-model="sebepler.SEBEP"
                label="Iskarta Sebebi"
                placeholder="Sebep Giriniz..."
                :items="sebepOptions"
              />
            </VCol>

           
            <!-- 👉 Submit and Cancel -->
            <VCol
              cols="12"
              class="d-flex flex-wrap justify-center gap-4"
            >
              <VBtn type="submit">
                Kaydet {{ sebepler.USERID }}
              </VBtn>

              <VBtn
                color="secondary"
                variant="tonal"
                @click="onFormReset"
              >
                Vazgeç {{ props.sebepler.ID }}
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
