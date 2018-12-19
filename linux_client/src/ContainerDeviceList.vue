<template id="container-device">
  <v-container>
    <h1>장비 목록</h1>
    <hr>
    <device-list-table></device-list-table>
  </v-container>
</template>

<script>
import DeviceListTable from "./components/DeviceListTable.vue";
export default {
  name: "DeviceListPage",
  components: { DeviceListTable }
};
</script>

<style>
</style>
