<template>
    <v-card>
        <v-card-title>
            <h2>Overview</h2>
        </v-card-title>
        <v-divider/>
        <v-card-text>
            <v-data-table
            :headers="headers"
            :items="desserts"
            :pagination.sync="pagination"
            select-all
            item-key="name"
            class="elevation-1"
            >
            <template slot="headers" slot-scope="props">
            <tr>
            <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
            >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
            </th>
            </tr>
            </template>
            <template slot="items" slot-scope="props">
            <tr :active="props.selected" @click="props.selected = !props.selected">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.startDate }}</td>
            <td class="text-xs-right">{{ props.item.startTime }}</td>
            <td class="text-xs-right">{{ props.item.endDate }}</td>
            <td class="text-xs-right">{{ props.item.endTime }}</td>
            </tr>
            </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
export default {

    data: () => ({
      pagination: {
        sortBy: 'name'
      },
      headers: [
        {
          text: 'Schedule',
          align: 'left',
          value: 'name'
        },
        { text: 'Start Date', value: 'startDate' },
        { text: 'Start Time', value: 'startTime' },
        { text: 'End Date', value: 'endDate' },
        { text: 'End Time', value: 'endTime' },
      ],
      desserts: [
        {
          value: false,
          name: 'Frozen Yogurt',
          startDate : "5/10",
          startTime : "10:00",
          endDate : "5/10",
          endTime : "12:00"
        },
      ]
    }),

    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.desserts.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
}
</script>

<style>

</style>
