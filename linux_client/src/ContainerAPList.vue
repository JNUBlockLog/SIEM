<template id="container-ap">
    <v-container>
        <h1>AP 목록</h1>
        <hr>
        <a-p-list-table></a-p-list-table>
    </v-container>
</template>

<script>
import APListTable from './components/APListTable.vue'
export default{
    name: "APListPage",
    components : {APListTable, }
}
</script>

<style>

</style>
