<template>
  <v-card>
    <v-card-title>
      <h2>장비 목록</h2>
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
        :items="deviceList"
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
            <td class="text-xs-right">{{ props.item.DeviceType }}</td>
            <td class="text-xs-right">{{ props.item.DeviceDesc }}</td>
            <td class="text-xs-right">{{ props.item.DeviceID }}</td>
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
    <v-layout align-end justify-end>
        <v-dialog v-model="dialog" persistent max-width="500px">
          <v-btn slot="activator" color="primary" dark>AP 추가</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">AP 추가</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <!-- <v-select
            v-model="select"
            :items="['물류', '자재', '조립', '보안']"
            :rules="[v=>!! v ||'부서를 선택해야 합니다']"
            label="부서"
            required
          >
                </v-select>-->
                <v-text-field v-model="form_data.apname" label="AP 이름" :rules="namerules" required></v-text-field>
                <v-text-field v-model="form_data.devicetype" label="장비 종류" :rules="typerules" required></v-text-field>
                <v-text-field
                  v-model="form_data.macaddress"
                  label="MAC 주소"
                  :rules="macrules"
                  required
                  hint="00:00:00:00:00:00"
                ></v-text-field>
                <v-text-field v-model="form_data.devicedesc" label="장비 설명"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click.native="postData">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
  </v-card>
</template>

<script>
import CONF from "../Config.js";
import eventBus from "../EventBus.js";
export default {
  data: () => ({
    dialog: false,
    valid: false,
    select: null,
    namerules: [v => !!v || "AP 이름을 입력하세요!"],
    typerules: [v => !!v || "종류을 입력하세요!"],
    macrules: [
      v => !!v || "MAC 주소를 입력하세요!",
      v =>
        /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(v) ||
        "올바른 형식이 아닙니다"
    ],
    form_data: {
      apname: "",
      devicetype: "",
      macaddress: "",
      devicedesc: ""
    },
    search: "",
    pagination: {
      sortBy: "name"
    },
    headers: [
      {
        text: "장비 이름",
        align: "left",
        value: "name"
      },
      { text: "MAC 주소", value: "MACAddress" },
      { text: "장비 종류", value: "DeviceType" },
      { text: "장비 설명", value: "DeviceDesc" },
      { text: "장비 ID", value: "DeviceID" }
    ],
    deviceList: [
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
      else this.selected = this.deviceList.slice();
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
      this.deviceList = CONF.Devices;
      // this.$axios.get(CONF.DeviceList).then(response => {
      //   this.deviceList = response.data;
      //   console.log("Fetch Result:");
      //   console.log(response);
      // });
    },
    postData: function() {
      CONF.Devices.push({
            $class: "net.ap.Device",
            DeviceID: new Date().getTime(),
            name: this.form_data.apname,
            CPUInfomation: "",
            MACAddress: this.form_data.macaddress,
            DeviceType: this.form_data.devicetype,
            DeviceDesc: this.form_data.devicedesc,
        });
      this.fetchData();
    }
  }
};
</script>

<style>
</style>
