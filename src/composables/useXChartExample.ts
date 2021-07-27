import { ref } from 'vue';

export default function () { 
    const barData = ref({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1,
          }
        ]
    })

    const lineData = ref({
        labels: ['one', 'two', 'three', 'four', 'five', 'six', 'seven' ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
    })

    const bubbleData = ref<any>({
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    })
    const chartType = ref('bar')

    const options = ref([
        { text: 'bar', value: 'bar' },
        { text: 'line', value: 'line' },
        { text: 'bubble', value: 'bubble' }
      ])

    const hdlChartData = () => {

      let otherBarData = {
          labels: ['Green', 'Purple', 'LightBlue', 'Orange', 'Red', 'Yellow'],
          datasets: [
            {
              label: '',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: ['Green', 'Purple', 'LightBlue', 'Orange', 'Red', 'Yellow'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
              borderWidth: 1,
            }
          ],
      }

      let otherLineData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
        datasets: [{
          label: 'My First Dataset',
          data: [0, 50, 20, 91, 20, 60, 20],
          fill: false,
          borderColor: 'blue',
          tension: 0.1
        }]
      }

      let otherBubbleData = {
        datasets: [{
          label: 'Second Dataset',
          data: [{
            x: 26,
            y: 20,
            r: 30
          }, 
          {
            x: 30,
            y: 31,
            r: 40
          },
          {
            x: 36,
            y: 10,
            r: 15
          }
          ],
          backgroundColor: ['red', 'blue', 'green']
        }]
      }

      if(chartType.value == "bar"){
       barData.value = otherBarData
      }
      else if(chartType.value == "line"){
       lineData.value = otherLineData
      }
      else if(chartType.value == "bubble"){
       bubbleData.value = otherBubbleData
      } 
    }

    return {lineData,barData, bubbleData, hdlChartData, chartType, options}
}