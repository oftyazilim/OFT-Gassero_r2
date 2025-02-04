<script>
import { hidden } from '@/views/demos/forms/form-elements/otp-input/demoCodeOtpInput';


export default {
  props: {
    baslik: String,
    deger: Number,
    gosterHedef: Boolean,
    gosterHatali: Boolean,
    hatali: Number,
    fontSize: String,
    yaziRengi: String,
    baslikArkaRenk: String,
    baslikOnRenk: String,
    marginT: String,
  },
};
</script>

<template>
  <VCard>
    <VCardTitle class="pt-4 mt-1 me-1 text-center mx-1 pb-4 rounded"
      :style="{ backgroundColor: baslikArkaRenk, color: baslikOnRenk, fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '40px' }">
      {{ baslik }}
    </VCardTitle>
    <h2 class="hedef" v-show="gosterHedef" :style="{ color: yaziRengi, fonstSize: fontSize, marginTop: marginT + 'px'}">{{ deger }}</h2>
    <h2 class="hatali" v-show="gosterHatali" :style="{ color: yaziRengi, fonstSize: fontSize}">{{ deger }}</h2>
  </VCard>
</template>


<style>
.hedef {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  margin-top: -50px;
  margin-bottom: -50px;
}

.hatali  {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
  font-family: 'Montserrat', sans-serif;
}

</style>
