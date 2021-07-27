<template>
  <canvas ref="xchart" ></canvas>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, PropType, watch, computed } from 'vue'

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
    let config = {
        scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false
            }
          }
    }
    
    const chartData = ref<Chart>({
      type: props.chartType,
      data: props.data,
      options: computed(() =>{return props.chartType == 'bar' ? config : {plugins: {legend: {display: false}}} })
    })

    //ref
    const xchart = ref<HTMLCanvasElement>()
    
    watch(()=> props.data , ()=>{
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
  };
}
</script>

<style scoped>
canvas{
  width: 100%
}
</style>