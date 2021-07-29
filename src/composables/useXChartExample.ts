import { ref, computed } from 'vue';

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
        backgroundColor: 'rgb(255, 99, 132)',       
      }]
    })
    const chartType = ref('bar')

    const barOption = {
                      scales: {
                        yAxes: {beginAtZero: true}                    
                      },
                      plugins: {
                        legend: {
                          display: false
                        }
                      },
                    }
    const thumbnailOption = {
      scales: {
        // xAxes: {ticks: {display: false}},
        // yAxes: {beginAtZero: true,ticks: {display: false}}
        x: {display: false},
        y: {beginAtZero: true,display: false},
        // // grid:{display: true},
        // // pointLabels: {display: false}    
      },
      elements: {
        point:{
            radius: 0
        }
    },
      plugins: {
        legend: {
          display: false
        }
      },
      responsive: false,
      // maintainAspectRatio: false,
      aspectRatio: 2,
      events: [] // remove hover events
    }
    const thumbnailBubbleOpt = {
      scales: {
        // xAxis: [
        //   { 
        //     display: false,
        //     ticks: {               
        //           min: -20,
        //           max: 100
        //     },
        //     grid: { display: false}
        //   }],
        x: {display: false,},
        y: {beginAtZero: true,display: false}, 
      },
      plugins: {
        legend: {
          display: false
        }
      },
      responsive: false,
      aspectRatio: 2,
      events: [] // remove hover events
    }
    const chartOptions = computed(() => { return chartType.value == "bar" ? barOption : { scales: {y:{beginAtZero: false}},plugins: {legend: {display: false}} } })

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
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021' ],
        datasets: [{
          label: 'Second Data set',
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
            //r: 30
            size: 2
          }, 
          {
            x: 30,
            y: 31,
            // r: 40
            size: 3
          },
          {
            x: 36,
            y: 10,
            // r: 15
            size: 1
          }
          ],
          backgroundColor: ['red', 'blue', 'green'],
          radius(context:any) {
            var scale = context.chart.scales.y;
            var zero = scale.getPixelForValue(0);
            var value = scale.getPixelForValue(context.dataset.data[context.dataIndex].size);
            return Math.abs(value - zero);
          },          
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

    return {lineData,barData, bubbleData, hdlChartData, chartType, options , chartOptions, thumbnailOption , thumbnailBubbleOpt}
}