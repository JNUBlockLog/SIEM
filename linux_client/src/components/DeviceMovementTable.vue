<template>
    <v-card>
        <v-card-title>
            <h2>장비 이동 현황</h2>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="검색"
              single-line
              hide-details
            ></v-text-field>
            <v-btn icon @click="fetchData">
              <v-icon>refresh</v-icon>
            </v-btn>
        </v-card-title>
        <v-divider/>
        <v-card-text>
            <v-data-table
            :headers="headers"
            :items="transactionList"
            :pagination.sync="pagination"
            select-all
            item-key="name"
            class="elevation-1"
            :search="search"
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
            <td>{{ props.item.$class }}</td>
            <td class="text-xs-right">{{ props.item.timestamp }}</td>
            <td class="text-xs-right">{{ props.item.deviceFrom }}</td>
            <td class="text-xs-right">{{ props.item.deviceTo }}</td>
            <td class="text-xs-right">{{ props.item.transactionId }}</td>
            </tr>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import CONF from "../Config.js";
import eventBus from "../EventBus.js";
export default {
  data: () => ({
    search:'',
    pagination: {
      sortBy: "name"
    },
    headers: [
      {
        text: "트랜잭션 종류",
        align: "left",
        value: "name"
      },
      { text: "이동 시각", value: "DeviceDesc" },
      { text: "해당 장비", value: "MACAddress" },
      { text: "대상 장비", value: "Processes" },
      { text: "트랜잭션 ID", value: "DeviceType" },
    ],
    transactionList: [
      {
        $class: "org.factory.Device",
        DeviceID: "Device:1527217396",
        name: "IoT Machine 1",
        CPUInfomation: "Intel®Core™ i3-4160 3.60GHz",
        MACAddress: "00:0c:29:5a:d9:71",
        DeviceType: "IoT Machine 1",
        DeviceDesc: "Make Logistics Happy",
        currentDepartment: "resource:org.factory.Department#2",
        DeviceUser: "resource:org.factory.Worker#1",
        DeviceManager: "resource:org.factory.DeviceManager#1",
        Processes: "All: 338, Running: 1"
      }
    ]
  }),
  mounted: function() {
    console.log("[INFO] : ON MOUNT :");
    this.fetchData();
  },
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.transactionList.slice();
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },

    fetchData: function() {
      console.log(`[INFO] : fetching data at ${CONF.DeviceList}`);
      this.transactionList = CONF.Transactions;
      // this.$axios.get(CONF.DeviceList).then(response => {
      //   this.transactionList = response.data;
      //   console.log("Fetch Result:");
      //   console.log(response);
      // });
    },

    sortTx: function(some, other) {
      var t1 = new Date(some.timestamp).getTime();
      var t2 = new Date(other.timestamp).getTime();
      if (t1 < t2) return 1;
      if (t1 == t2) return 0;
      return -1;
    }
  }
};
</script>

<style>
</style>
