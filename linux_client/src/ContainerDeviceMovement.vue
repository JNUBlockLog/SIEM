<template id="container-schedule">
    <v-container>
        <h1>장비 이동 기록</h1>
        <hr>
        <device-movement-table></device-movement-table>
    </v-container>
</template>

<script>
import DeviceMovementTable from './components/DeviceMovementTable.vue'
export default{
    name: "DeviceMovementPage",
    components : {DeviceMovementTable, }
}
</script>

<style>

</style>
