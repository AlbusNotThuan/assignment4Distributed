var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org");
var nodeToConnect = "sensor/light";

client.on("connect", () => {
  setInterval(() => {
    var value = Math.floor(Math.random() * (30 - 27 + 1)) + 27;
    client.publish(nodeToConnect, "Temperature: " + value + " Celcius");
  }, 1000);
});
