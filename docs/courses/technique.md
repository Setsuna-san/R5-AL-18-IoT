# Éléments techniques

## MQTT

Le broker MQTT est instancié par les conteneur docker.

La méthode console.log() en javascript permet d'afficher les messages reçus via MQTT dans la console de développeur de votre navigateur.

### Test de validation

Utilisez les commandes [mosquitto_pub](https://mosquitto.org/man/mosquitto_pub-1.html) et [mosquitto_sub](https://mosquitto.org/man/mosquitto_sub-1.html) afin de valider la bonne configuration du logiciel.

Par exemple, dans votre terminal :

``` bash
mosquitto_sub -v -t "#" -h IP_du_broker_MQTT
```

Dans un autre terminal :

``` bash
mosquitto_pub -t "test" -m "hello" -h IP_du_broker_MQTT

```

!!! info "Astuce"
    Vous pouvez aussi utiliser le client graphique [MQTT-explorer](https://mqtt-explorer.com/) comme vu en S3.


!!! info "Astuce"
    Le projet mosquitto met à votre disposition un service de test : [test.mosquitto.org](https://test.mosquitto.org/)

### Websockets

Prenez connaissance de la documentation de Mosquitto :

[Documentation du démon](https://mosquitto.org/man/mosquitto-8.html)

[Documentation de la configuration](https://mosquitto.org/man/mosquitto-conf-5.html)

On donne le fichier de configuration suivant :

``` bash
allow_anonymous true
listener 1883
listener 9001
protocol websockets
persistence true
```

Assurez-vous de bien comprendre ce qu'il fait...

## Simulation en Python

À l'aide de la [librairie paho-mqtt](https://pypi.org/project/paho-mqtt/), développez un script python de simulation de l'objet connecté de votre application. Pour l'installer :

``` bash
apt install python3-paho-mqtt
```

Modifiez le script d'exemple afin de créer le squelette de base des trois scripts python
## Geofencing

Si vous voulez réaliser une moyenne par quartier, vous allez devoir faire du geofencing, c'est à dire savoir si un point est inclus dans un polygone.

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

## Influxdb et Grafana

Dans votre fichier `docker-compose.yml`, vous allez devoir ajouter le service Grafana et Influxdb. Voir la documentation ici : 

* [https://grafana.com/docs/grafana/latest/](https://grafana.com/docs/grafana/latest/)
* [https://docs.influxdata.com/influxdb/v2/](https://docs.influxdata.com/influxdb/v2/)

### Paramétrer 

Dans Grafana, ajouter la source de donnée et créer votre premier tableau de bord.


## Script d'historisation

En vous aidant du lien ci-dessous, repartez du squelette de script python afin d'enregistrer les données des flux MQTT dans la base de données Influxdb :

[https://www.influxdata.com/blog/getting-started-with-python-and-influxdb-v2-0/](https://www.influxdata.com/blog/getting-started-with-python-and-influxdb-v2-0/)
