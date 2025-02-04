<script setup lang="ts">
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'
import { computed, defineProps } from 'vue'

const vuetifyTheme = useTheme()

const props = defineProps({
  verimSeries: {
    type: Array as () => number[],
    default: () => [25],
  },
})

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  return {
    labels: ['Verim'],
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 10,
        startAngle: -140,
        endAngle: 130,
        hollow: {
          size: '55%',
        },
        track: {
          background: currentTheme.surface,
          strokeWidth: '100%',
        },
        dataLabels: {
          name: {
            offsetY: -40,
            color: `rgba(${hexToRgb(currentTheme['on-surface'])},${variableTheme['disabled-opacity']})`,
            fontSize: '23px',
            fontWeight: '400',
            fontFamily: 'Montserrat',
          },
          value: {
            offsetY: 10,
            color: `rgba(${hexToRgb(currentTheme['on-background'])},${variableTheme['high-emphasis-opacity']})`,
            fontSize: '58px',
            fontWeight: '500',
            fontFamily: 'Public Sans',
            formatter(val: string, opt: any) {
              return `%${val}`
            },
          },
        },
      },
    },
    colors: [currentTheme.primary],
    fill: {
      type: 'solid',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.5,
        gradientToColors: [currentTheme.primary],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.6,
        stops: [30, 70, 100],
      },
    },
    stroke: {
      dashArray: 5,
    },
    grid: {
      padding: {
        top: -20,
        bottom: 5,
        left: -2,
        right: -5,
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        filter: {
          type: 'none',
        },
      },
    },
    responsive: [
      {
        breakpoint: 960,
        options: {
          chart: {
            height: 280,
          },
        },
      },
    ],
  }
})
</script>

<template>
  <VueApexCharts :options="chartOptions" :series="verimSeries" height="360" />
</template>
