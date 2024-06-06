var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org");
var nodeToConnect = "sensor/light";

client.on("connect", () => {
  setInterval(() => {
    var lightValue = Math.floor(Math.random() * 30);
    client.publish(nodeToConnect, "Light: " + lightValue + " lux");
  }, 1000);
});
