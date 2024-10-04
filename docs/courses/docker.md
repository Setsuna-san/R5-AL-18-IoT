# Site Hello World !

Pour rendre votre projet final, vous allez utiliser Docker.

!!! info "Docker"
    Docker est un outil qui permet de créer, déployer et exécuter des applications dans un conteneur. Un conteneur est un environnement isolé qui contient tout ce dont une application complète a besoin pour fonctionner (code, bibliothèques, dépendances, etc). Un conteneur est une instance en cours d'exécution d'une image. Les images sont "composées" entre elles dans un fichier docker-compose.yml

## docker-compose.yml

Le fichier docker-compose.yml suivant permet d'instancier un conteneur avec un broker MQTT.


```yaml
services:
  mqtt-broker:
    image: eclipse-mosquitto
    container_name: mon_broker_mqtt
    ports:
      - "1884:1883"  # MQTT -> hôte:1884
      - "9002:9001"  # WebSockets -> hôte:9002
    volumes:
      - ./mosquitto_config:/mosquitto/config:rw
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    container_name: mon_serveur_nginx
    ports:
      - "8080:80"   # HTTP -> hôte:8080
      - "4443:443"  # HTTPS -> hôte:4443
    volumes:
      - ./nginx_html:/usr/share/nginx/html  # Fichiers statiques
```

On lancera ces conteneurs avec la commande :

 docker compose up

Comme on peut le voir, le broker MQTT sera accessible sur le port 1884 (9002 avec websocket). On pourra le configurer en modifiant le fichier dans le répertoire `./mosquitto_config`

Le serveur nginx servira les fichiers présents dans le répertoire `./nginx_html`

## Squelette du site

Vous trouverez dans https://github.com/rboulle/R5-AL-18-IoT un répertoire `squelette-site-iot-s5-docker`.

Il contient une application minimaliste que vous allez faire évoluer pour mener à bien votre projet.

En l'état :

* elle affiche une page web avec une carte centrée sur l'IUT
* un script python publie sur le topic MQTT `test`une valeur
* la page contient un script qui s'abonne au flux MQTT, récupère cette valeur et l'utilise pour modifier la rayon d'une cercle sur la carte.