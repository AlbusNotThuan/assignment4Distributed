var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org");
var nodeToConnect = "sensor/light";

client.on("connect", () => {
  setInterval(() => {
    var value = Math.floor(Math.random() * (60 - 50 + 1)) + 50;
    client.publish(nodeToConnect, "Soil Humidity: " + value + " %");
  }, 1000);
});
