<template>
  <div>
     <canvas ref="xchart" ></canvas>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, PropType, watch, onUnmounted } from 'vue'

export interface BarData {
  label: string,
  data: number[],
  backgroundColor: string[],
  borderColor: string[],
  borderWidth: number
}

export interface LineData {
  label: string,
  data: number[],
  fill: boolean,
  borderColor: string,
  tension: number
}
export interface BubbleData {
  data: { x: number, y: number, r: number}[],
  backgroundColor: string[] | string
}

export interface ChartData{
  labels?: string[],
  datasets: BubbleData[] | LineData[] | BarData[] 
}

export type ChartType = 'bar' | 'line' | 'bubble'

export interface ChartOptions {
    scales?: {
      y: {
        beginAtZero: boolean
      }
    }
    plugins:{
      legend:{
        display: boolean
      }
    }
}

export interface Chart{
 type: ChartType,
 data: ChartData,
 options: any
}

export default defineComponent({
 props: propsXChart(),
 setup(props, context){
    let Chart = (window as { [key: string]: any })['Chart']
    let myChart: any;
  
    const chartData = ref<Chart>({
      type: props.chartType,
      data: props.data,
      options: props.chartOptions
    })

    //ref
    const xchart = ref<HTMLCanvasElement>()
     
    onUnmounted(() => {
      myChart.options = props.chartOptions
      myChart.update()
    })

    watch(() => props.data , ()=>{
      chartData.value.data = props.data
      myChart.update()
    })

    onMounted(() => {
      myChart= new Chart(xchart.value!, chartData.value)
    });

    return { xchart, chartData}

  }
})
export function propsXChart() {
  return {
    chartType: { type: String as PropType<ChartType>, default: 'bar'},
    data: { type: Object as PropType<ChartData>, default: () => {} },
    chartOptions: {type: Object  , default: () => {} } 
  };
}
</script>

<style scoped>
canvas{
  width: 100%
}
</style>