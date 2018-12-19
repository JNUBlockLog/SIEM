<template>
  <v-card>
    <v-card-title>
      <h2>AP 목록</h2>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="검색" single-line hide-details></v-text-field>
      <v-btn icon @click="fetchData">
        <v-icon>refresh</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider/>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="APList"
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
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.MACAddress }}</td>
          </tr>
        </template>
        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
        >Your search for "{{ search }}" found no results.</v-alert>
      </v-data-table>
      
    </v-card-text>
  </v-card>
</template>

<script>
import CONF from "../Config.js";
import eventBus from "../EventBus.js";
export default {
  data: () => ({
    dialog: false,
    valid: false,
    apname: "",
    select: null,
    namerules: [v => !!v || "AP 이름을 입력하세요!"],
    department: null,
    macaddress: "",
    macrules: [
      v => !!v || "MAC 주소를 입력하세요!",
      v =>
        /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(v) ||
        "올바른 형식이 아닙니다"
    ],
    search: "",
    pagination: {
      sortBy: "name"
    },
    headers: [
      {
        text: "AP 이름",
        align: "left",
        value: "name"
      },
      { text: "MAC 주소", value: "WiFiAP" }
    ],
    APList: [
      {
        $class: "org.factory.WiFiAP",
        APID: "00:0c:29:5a:d9:71",
        name: "물류1"
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
      else this.selected = this.APList.slice();
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
      console.log(`[INFO] : fetching data at ${CONF.APList}`);
      // this.$axios.get(CONF.APList).then(response => {
      //   this.APList = response.data;
      //   console.log("Fetch Result:");
      //   console.log(response);
      // });
      this.APList = CONF.Devices.filter(this.findAP);
    },
    postData: function() {
      if (this.$refs.form.validate()) {
        console.log(`${this.department}, ${this.apname}, ${this.macaddress}`);
        this.dialog = false;
        //   this.$axios.post(CONF.APList, {
        //     $class: "org.factory.WiFiAP",
        //     APID: this.macaddress,
        //     department: "org.factory.Department#1",
        //     name: this.apname
        // });
        this.$refs.form.reset();
      }
    },
    findAP: function(device) {
      return device.DeviceType == "AP";
    }
  }
};
</script>

<style>
</style>
