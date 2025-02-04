<script setup lang="ts">
import Verim from '@/views/dashboards/dtk/Verim.vue';
import VueApexCharts from 'vue3-apexcharts';
import { defineProps, watch, ref } from 'vue';

// Reaktif tema renk değişkenleri ve grafik ayarları
const borderColor = 'rgba(var(--v-border-color), var(--v-border-opacity))';

// Props tanımı: barData ve verimData dizileri olarak bekleniyor
const props = defineProps<{
  baslik: string;
  barData: number[];
  verimData: number[];
}>();

// Grafik seçenekleri
const topicsChartConfig = ref({
  chart: {
    height: 170,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      barHeight: '70%',
      distributed: true,
      borderRadius: 7,
      borderRadiusApplication: 'end',
    },
  },
  colors: [
    'rgba(var(--v-theme-primary),1)', 'rgba(var(--v-theme-warning),1)', 'rgba(var(--v-theme-error),1)',
  ],
  grid: {
    borderColor,
    strokeDashArray: 10,
    xaxis: {
      lines: { show: true },
    },
    yaxis: {
      lines: { show: false },
    },
    padding: {
      top: -25,
      bottom: -12,
      left: -1,
      right: -3,
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
      fontWeight: 300,
      fontSize: '22px',
    },
    offsetX: 0,
    dropShadow: {
      enabled: false,
    },
    formatter(val: string, opt: any) {
      return `%${val}`;
    },
  },
  labels: props.barData,
  xaxis: {
    categories: ['Kullanılabilirlik', 'Üretkenlik', 'Kalite'],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: {
        colors: 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))',
        fontSize: '13px',
      },
    },
  },
  yaxis: {
    labels: {
      show: false,
      style: {
        colors: 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))',
        fontSize: '18px',
      },
    },
  },
  tooltip: {
    enabled: true,
    style: { fontSize: '18px' },
    onDatasetHover: {
      highlightDataSeries: false,
    },
  },
  legend: {
    show: false,
  },
});

// Serileri reaktif olarak başlat
const topicsChartSeries = ref([
  {
    data: props.barData,
  },
]);

// props.barData değişimini izleyerek grafiği güncelle
watch(
  () => props.barData,
  (newData) => {
    topicsChartSeries.value = [{ data: newData }];
  }
);

</script>

<template>
  <VCard>
    <VCardTitle class="pt-4 mt-1 me-1 text-center mx-1 pb-4 rounded" :style="{
      backgroundColor: '#336d39',
      fontFamily: 'Montserrat',
      color: '#94d19a',
      fontWeight: 'bold',
      fontSize: '40px'
    }">
      {{ baslik }}
    </VCardTitle>

    <VCardText class="pt-0 mt-2 me-1 pb-4">
      <VRow>
        <VCol cols="6">
          <VueApexCharts class="mt-3" type="bar" height="250" :options="topicsChartConfig"
            :series="topicsChartSeries" />
        </VCol>

        <VCol cols="6">
          <Verim :verimSeries="props.verimData" />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style scoped>
/* İsteğe bağlı ek stil */
</style>
