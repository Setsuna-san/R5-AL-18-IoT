# Traiter les données

Ici nous allons voir le nécessaire pour traiter les données en temps réel. Cela peut consister en calculer une moyenne glissante, faire un calcul sur une zone géographique, etc.

Le résultat de ce traitement temps réel sera ensuite publié sur le broker MQTT.

## Script de traitement temps-réel

Modifiez le script d'exemple ou reparter du squelette de script que vous avez créé afin de réaliser le traitement temps-réel :

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

## Geofencing

Si vous voulez réaliser une moyenne par quartier, vous allez devoir faire du geofencing, c'est à dire savoir si un point est inclus dans un polygon.

Afin de réaliser cette fonction, vous pouvez vous aider de la librairie géométrique Shapely :

``` python
from shapely.geometry import Polygon, Point

hyde_park_coordinates = [
    (51.509764, -0.189529),
    (51.512819, -0.159570),
    (51.504451, -0.152143),
    (51.502639, -0.187329),
    (51.509764, -0.189529),
]
hyde_park = Polygon(hyde_park_coordinates)
someone_inside = Point(51.505278, -0.159479)
someone_outside = Point(51.496443, -0.176218)

hyde_park.contains(someone_inside)  # returns True
hyde_park.contains(someone_outside)  # returns False
```

## Node-RED

Une fois votre projet terminé, vous pourrez à la place des scripts utiliser NodeRed.

[Node-RED](https://nodered.org/) is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways.

It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click.

<div class="video-wrapper">
  <iframe width="600" height="400" src="https://www.youtube.com/embed/ksGeUD26Mw0?si=z7TfqhILpUl_hobG" frameborder="0" allowfullscreen></iframe>
</div>

Vous pouvez utiliser le logiciel Node-RED en complément de votre script python afin de réaliser d'autres traitements.
