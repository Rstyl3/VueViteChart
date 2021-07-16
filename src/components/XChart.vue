<template>
  <button @click="hdlData">Change second data</button> 
  <canvas ref="xchart" width="400" height="400"></canvas>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'

export interface BarData {
  labels: string[],
  datasets: [
    {
    label: string,
    data: number[],
    backgroundColor: string[],
    borderColor: string[],
    borderWidth: number
    }
  ]
}
export interface ChartData{
 type: string,
 data: BarData,
 options: {
    scales: {
      y: {
        beginAtZero: boolean
      }
    }
 }
}

export default defineComponent({
 setup(){
    let Chart = (window as { [key: string]: any })['Chart']
    let myChart: any;

    const barData = ref<ChartData>({
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })
    //ref
    const xchart = ref<HTMLCanvasElement>()
  
    const hdlData = () => {
      barData.value.data.datasets[0].data[1] = 10
      myChart.update()
    }

    onMounted(() => {
      myChart= new Chart(xchart.value!, barData.value)
    });

    return { hdlData, xchart, barData}

  }
})
</script>

<style>

</style>