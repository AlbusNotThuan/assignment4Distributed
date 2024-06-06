var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org");
var nodeToConnect = "sensor/light";

client.on("connect", () => {
  setInterval(() => {
    var value = Math.floor(Math.random() * (100 - 70 + 1)) + 70;
    client.publish(nodeToConnect, "Air Humidity: " + value + " %");
  }, 1000);
});
