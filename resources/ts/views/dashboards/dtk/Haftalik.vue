<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts';
import { defineProps, watch, ref } from 'vue';

const borderColor = 'rgba(var(--v-border-color), var(--v-border-opacity))'

const props = defineProps<{
  baslik: string;
  hftData: number[];
}>();

// Topics Charts config
const topicsChartConfig = {
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
    '#5c995e',
  ],

  grid: {
    borderColor,
    strokeDashArray: 10,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: -25,
      bottom: -12,
    },
  },

  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
      fontWeight: 150,
      fontSize: '23px',

    },
    offsetX: 0,
    dropShadow: {
      enabled: false,
    },
    formatter(val: string, opt: any) {
      return `${val}`
    },
  },
  labels: props.hftData,

  xaxis: {
    categories: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
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
    style: {
      fontSize: '18px',
    },
    onDatasetHover: {
      highlightDataSeries: false,
    },
  },
  legend: {
    show: false,
  },

}

const topicsChartSeries = ref([
  {
    data: props.hftData,
  },
]);

watch(
  () => props.hftData,
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

    <VCardText class="pt-0 mt-2 me-1 pb-1">
      <VRow>
        <VCol cols="12">
            <VueApexCharts class="mt-3" type="bar" height="220" :options="topicsChartConfig" :series="topicsChartSeries" />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
  
</template>
