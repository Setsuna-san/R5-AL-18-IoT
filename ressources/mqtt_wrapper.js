var mqtt;
var reconnectTimeout = 2000;

var host = "iot.eclipse.org";
var port = 443;
var path = "/mqtt/";

var useTLS = true;
var username = null;
var password = null;
var cleansession = true;

function MQTTconnect() {
	mqtt = new Paho.MQTT.Client(
			host,
			port,
			path,
			"web_" + parseInt(Math.random() * 100, 10)
	);

	var options = {
		timeout: 3,
		useSSL: useTLS,
		cleanSession: cleansession,
		onSuccess: onConnect,
		onFailure: onFailure,
	};

	mqtt.onConnectionLost = onConnectionLost;
	mqtt.onMessageArrived = onMessageArrived;
	mqtt.connect(options);
}

function onConnect() {
	console.log("Connected to " + host);
	mqtt.subscribe("apsio/test/#");
}

function onConnectionLost(response) {
	setTimeout(MQTTconnect, reconnectTimeout);
}

function onFailure(message) {
	setTimeout(MQTTconnect, reconnectTimeout);
}

function onMessageArrived(message) {
	console.log(message.payloadString);
}
