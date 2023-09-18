# Simuler des capteurs

## Objectifs

Ici nous allons voir le minimum pour simuler les objets connectés.

* Installation d'un broker MQTT
* Configuration du broker afin d'activer les websockets
* Développement d'un script python de simulation

  Dans tous les cas, lisez bbien la documentation !

## Installation de Mosquitto

``` bash
sudo apt-get install mosquitto mosquitto-clients
```

## Utilisation de la ligne de commande afin de valider

Utilisez les commandes [mosquitto_pub](https://mosquitto.org/man/mosquitto_pub-1.html) et [mosquitto_sub](https://mosquitto.org/man/mosquitto_sub-1.html) afin de valider la bonne configuration du logiciel.

Par exemple, dans votre terminal :

``` bash
mosquitto_sub -v -t "#" -h IP_VM
```

Dans un autre terminal :

``` bash
mosquitto_pub -t "test" -m "hello" -h IP_VM
```

!!! warning "Attention"

    Remplacez bien IP_VM par l'adresse IP de votre machine virtuelle !

!!! info "Astuce"

    Le projet mosquitto met à votre disposition un service de test : [test.mosquitto.org](https://test.mosquitto.org/)

## Activation des websockets

Prenez connaissance des documentation de Mosquitto :

[Documentation du démon](https://mosquitto.org/man/mosquitto-8.html)

[Documentation de la configuration](https://mosquitto.org/man/mosquitto-conf-5.html)

Utilisez ces documentation afin d'obtenir les fonctionnalités suivantes :

* Activation d'un listener MQTT sur tcp sans TLS sur le port 1883
* Activation d'un listener MQTT sur websocket sans TLS sur le port 9001

Ajoutez les lignes suivantes dans le fichier de configuration /etc/mosquitto/conf.d/mosquitto.conf :

``` bash
listener 1883
listener 9001
protocol websockets
allow_anonymous true
```

Redémarrage de mosquitto afin d'appliquer la configuration :

``` bash
systemctl restart mosquitto
```

## Développement d'un script python de simulation

A l'aide de la [librairie paho-mqtt](https://pypi.org/project/paho-mqtt/), développez un script python de simulation de l'objet connecté de votre application.

``` bash
apt-get install python3-paho-mqtt
```

Modifiez le script d'exemple afin de créer le squelette de base des trois scripts python que vous allez devoir créer :

``` python
import paho.mqtt.client as mqtt

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe("$SYS/#")

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("mqtt.eclipseprojects.io", 1883, 60)

# Blocking call that processes network traffic, dispatches callbacks and
# handles reconnecting.
# Other loop*() functions are available that give a threaded interface and a
# manual interface.
client.loop_forever()
```
