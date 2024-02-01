<script lang="ts" setup>
import apexchart from 'vue3-apexcharts'
import { reactive } from 'vue'

const props = defineProps({
  series: {
    type: Object,
    requred: true
  },
  palette: {
    type: Object,
    requred: true
  }
})

const options = reactive({
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return '$' + value
      },
      style: {
        colors: ['#707581'],
        fontSize: '12px',
        fontWeight: 400
      }
    }
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        const date = new Date(value)
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
      },
      style: {
        colors: ['#707581'],
        fontSize: '12px',
        fontWeight: 400
      }
    },
    categories: ['2023-10-19T00:00:00.000Z', '2023-10-19T01:30:00.000Z', '2023-10-19T02:30:00.000Z']
  },
  tooltip: {
    x: {
      format: 'MM/dd/yy HH:mm'
    },
    style: {
      fontSize: '12px',
      fontFamily: 'Inter'
    },
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="font-medium  text-white bg-black rounded-lg border-none px-[6px] py-[2px]">' +
        '<span>$' +
        series[seriesIndex][dataPointIndex] +
        '</span>' +
        '</div>'
      )
    }
  },
  ...props.palette,
  legend: {
    show: false
  }
})
</script>

<template>
  <div class="-ml-3">
    <apexchart type="area" height="350" :options="options" :series="series"></apexchart>
  </div>
</template>
