var mqtt;
var host="localhost"; // URL du broker
var port=9002; // port WebSocket du broker

function onFailure(message) {
	console.log("Échec de connexion à "+host);
	setTimeout(MQTTconnect, 2000);
}

function onMessageArrived(msg){
	var newRadius = parseFloat(msg.payloadString); 
	if (!isNaN(newRadius) && newRadius > 0) { // Vérification que le message est un nombre valide et positif
		circle.setRadius(newRadius); // Mettre à jour le rayon du cercle
	}
	document.getElementById("data").innerHTML = "Nouveau rayon du cercle : " + newRadius;
}

function onConnect() {
mqtt.subscribe("test/#"); // topic
document.getElementById("data").innerHTML ="Connecté à "+ host;
document.getElementById("port").innerHTML ="Lecture du port "+ port;
}

function MQTTconnect() {
	// Comme la connexion est persistante,
	// il faut préciser un identifiant client
	mqtt = new Paho.MQTT.Client(host, port, "nom_client");
	mqtt.onMessageArrived = onMessageArrived
	var options = {timeout: 3, onSuccess: onConnect, onFailure: onFailure,};
	mqtt.connect(options); 
} 