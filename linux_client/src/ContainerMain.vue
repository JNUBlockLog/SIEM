<template id="container-main">
    <v-container>
      <h1>개요</h1>
      <hr>
      <br>
      <device-list-table></device-list-table>
      <device-movement-table></device-movement-table>
      <!-- <v-layout row wrap>
      <card-bar-chart></card-bar-chart>
      <card-line-chart></card-line-chart>
      </v-layout> -->
    </v-container>
</template>

<script>
import DeviceListTable from './components/DeviceListTable.vue'
import DeviceMovementTable from './components/DeviceMovementTable.vue'
import CardTable from './components/CardTable.vue'
import CardBarChart from './components/CardBarChart.vue'
import CardLineChart from './components/CardLineChart.vue'

export default{
    name: "mainPage",
    components : {CardTable, CardBarChart, CardLineChart, DeviceListTable, DeviceMovementTable, }
}
</script>

<style>

</style>
