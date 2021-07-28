<template>
  <h3>Chart.js component Example</h3>
  <button @click="hdlChartData">Change to second data</button> 
  <select v-model="chartType">
    <option v-for="option in options" :value="option.value" :key="option.text">
      {{ option.text }}
    </option>
  </select>
  <x-chart v-if="chartType == 'bar'" chartType="bar" :data="barData" :chartOptions="chartOptions" />
  <x-chart v-else-if="chartType == 'line'" chartType="line" :data="lineData" :chartOptions="chartOptions" />
  <x-chart v-else chartType="bubble" :data="bubbleData" :chartOptions="chartOptions"/>
  
  <h3>Thumbnails</h3>
  <div style="display: flex; justify-content: space-between;">
    <x-chart style='width: 300px; position: relative;' chartType="bar" :data="barData" :chartOptions="thumbnailOption" />
    <x-chart style='width: 300px; position: relative;' chartType="line" :data="lineData" :chartOptions="thumbnailOption" />
    <x-chart style='width: 300px; position: relative;' chartType="bubble" :data="bubbleData" :chartOptions="thumbnailBubbleOpt"/>
  </div>  
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import XChart from './components/XChart.vue'
import useXChartExample from './composables/useXChartExample'

export default defineComponent({
  name: 'App',
  components: {
    XChart
  },
  setup() {
    const{lineData,barData, bubbleData, hdlChartData, chartType, options, chartOptions, thumbnailOption, thumbnailBubbleOpt} = useXChartExample()

    return {lineData,barData, bubbleData, hdlChartData, chartType, options , chartOptions, thumbnailOption, thumbnailBubbleOpt}
  },
  
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
