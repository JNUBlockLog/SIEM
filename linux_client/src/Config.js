var BASE_URL = "http://localhost:3000/api";

export default {
    DeviceList : BASE_URL + "/org.factory.Device",
    APList : BASE_URL + "/org.factory.WiFiAP",
    Device : BASE_URL + "/net.ap.Device",
    Devices : [
        {
          $class: "net.ap.Device",
          DeviceID: "1527217396",
          name: "IoT Machine 1",
          CPUInfomation: "Intel®Core™ i3-4160 3.60GHz",
          MACAddress: "00:0c:29:5a:d9:71",
          DeviceType: "AP",
          DeviceDesc: "AP 장비 1",
          Processes: "All: 338, Running: 1"
        }
      ]
}