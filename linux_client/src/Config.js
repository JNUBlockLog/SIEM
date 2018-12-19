var BASE_URL = "http://localhost:3000/api";

export default {
    DeviceList: BASE_URL + "/org.factory.Device",
    APList: BASE_URL + "/org.factory.WiFiAP",
    Device: BASE_URL + "/net.ap.Device",
    Devices: [
        {
            $class: "net.ap.Device",
            DeviceID: "1527217396",
            name: "IoT Machine 1",
            CPUInfomation: "Intel®Core™ i3-4160 3.60GHz",
            MACAddress: "00:0c:29:5a:d9:71",
            DeviceType: "AP",
            DeviceDesc: "AP 장비 1",
        },
        {
            $class: "net.ap.Device",
            DeviceID: "1527217396",
            name: "IoT Machine 1",
            CPUInfomation: "Intel®Core™ i3-4160 3.60GHz",
            MACAddress: "00:0c:29:5a:d9:71",
            DeviceType: "Computer",
            DeviceDesc: "관리자 컴퓨터",
        },
        {
            $class: "net.ap.Device",
            DeviceID: "1527217396",
            name: "IoT Machine 1",
            CPUInfomation: "Intel®Core™ i3-4160 3.60GHz",
            MACAddress: "00:0c:29:5a:d9:71",
            DeviceType: "Drone",
            DeviceDesc: "AP 장비 1",
        },
    ],
    Transactions: [
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "01387adaea78bb8043846bec7a3294e9d49754281c23bfdb9910388e8c0354ac",
          "timestamp": "2018-12-18T04:41:48.563Z"
        },
        {
          "$class": "net.ap.disconnectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "1dbade955eff7c9435c0652e8265a36b9f990901a19a2fcee9880b005df33651",
          "timestamp": "2018-12-19T04:28:23.077Z"
        },
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "1dbade955eff7c9435c0652e8265a36b9f990901a19a2fcee9880b005df33651",
          "timestamp": "2018-12-19T04:28:23.077Z"
        },
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "1dbade955eff7c9435c0652e8265a36b9f990901a19a2fcee9880b005df33651",
          "timestamp": "2018-12-19T04:28:23.077Z"
        },
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "1dbade955eff7c9435c0652e8265a36b9f990901a19a2fcee9880b005df33651",
          "timestamp": "2018-12-19T04:28:23.077Z"
        },
        {
          "$class": "net.ap.disconnectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "22514ce6daa14dbc53678b4730637d5ccb03ea9dbd20bb04533dbcf6689ff829",
          "timestamp": "2018-12-19T04:28:48.489Z"
        },
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "39f8a121cad41123ef8542d0119f93c5a8d555d1c22071f60cd378606f33af4b",
          "timestamp": "2018-12-19T04:28:37.987Z"
        },
        {
          "$class": "net.ap.disconnectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "4264974289ae475232895058b7e57e3e1fa15120e5210948ab78fa0674a86fea",
          "timestamp": "2018-12-19T04:28:45.833Z"
        },
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "6135effdd49e8bd9bc9292f898f9c6715f9d7c16c1fc357158c50a63aa655cec",
          "timestamp": "2018-12-19T04:28:29.860Z"
        },
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "6e2a2d8c086d2b2cc8dd0acc01239101b626267eaebe14a0cf17f1aa159d86e7",
          "timestamp": "2018-12-19T04:28:40.623Z"
        },
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "8f332c403649a4c499b0b94567f6966843f58223ace7cf8f0ae28c5dbdbf190b",
          "timestamp": "2018-12-19T04:28:43.247Z"
        },
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "9a599d17c1e40cc0cc7cfa96ae480b621a7755a01205aba0ba2098621943861e",
          "timestamp": "2018-12-19T04:28:32.522Z"
        },
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "a3ed13c37053c0d95e869da02a9412343d3420840b0ef6da0d9710b1761acea5",
          "timestamp": "2018-12-19T04:28:27.115Z"
        },
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "acebab28c7e857b5227bc76062e62e7977b0899ad56a881b77fab1af97b887d9",
          "timestamp": "2018-12-19T04:28:35.269Z"
        },
        {
          "$class": "net.ap.connectDevice",
          "deviceFrom": "string",
          "deviceTo": "string",
          "transactionId": "dd85512151bb0776680b34eaaa68d1ad011a0801158e90042b6bcba0dc3502d9",
          "timestamp": "2018-12-18T04:24:23.001Z"
        }
      ]
}