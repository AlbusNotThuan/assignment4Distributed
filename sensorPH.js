var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org");
var nodeToConnect = "sensor/light";

client.on("connect", () => {
  setInterval(() => {
    var value = Math.random() * (7 - 5) + 5;
    client.publish(nodeToConnect, "pH: " + value + "");
  }, 1000);
});
