# Architecture de l'application

## Présentation de l'architecture

Voici l'architecture cible finale que nous allons mettre en oeuvre dans le cadre de ce module.

![Architecture de l'infrastructure](/images/archi_TP.png)

### 1 - Mosquitto

Comme vu dans le ressource IoT de S3 : "Eclipse Mosquitto is an open source (EPL/EDL licensed) message broker that implements the MQTT protocol. The MQTT protocol provides a lightweight method of carrying out messaging using a publish/subscribe model. This makes it suitable for Internet of Things messaging such as with low power sensors or mobile devices such as phones, embedded computers or microcontrollers."

### 2 - Script python de simulation

Le script python de simulation doit permettre d'émuler une flotte de capteurs au format de votre application. À partir des données de l'open data de Toulouse Métropole, vous allez pouvoir simuler cette flotte de capteurs avec des métadonnées réalistes.

### 3 - Script python de traitement temps-réel

Le script de traitement temps-réel doit permettre de réaliser un traitement sur les données "à la volée". L'idée est de faire un traitement mathématique (calcul moyenne glissante, max, min, autre) sur un flux temps-réel ou sur plusieurs flux temps-réel.

Par exemple, à l'aide du polygon d'un quartier de Toulouse, vous pouvez calculer la moyenne par quartier et venir publier ce nouveau flux en MQTT.

### 4 - Serveur web nginx

Le serveur web nginx va servir via le protocole HTTP le site web que vous allons développer.

### 5 - Application web javascript

Nous vous fournissons des fichiers (HTML, JS et Python) afin d'avoir un squelette de base. A vous de les améliorer et de les faire évoluer en fonction de votre cas d'usage.

### 6 - Script python d'historisation

Le script d'historisation doit s'abonner à des flux temps-réel et venir faire des insertions en base de donnée Influxdb. Il faudra bien sûr modifier le fichier `docker-compose.yml` en conséquence afin d'y ajouter l'image du service Influxdb.

### 7 - Base de donnée timeseries : Influxdb

Nous allons stocker dans cette base de donnée timeseries, les données qui proviennent de flux temps réel MQTT.

### 8 - Interface de visualisation : Grafana

Grafana est une interface web qui permet de créer des tableaux de bord à partir des données de Influxdb. Libre à vous de créer un tableau de bord pertinent en fonction de votre cas d'usage. Ici aussi, il faudra modifier le fichier `docker-compose.yml` en conséquence.

## Travail à faire 

Comme vu en introduction, définissez un projet IoT qui pourrait intéresser Toulouse Métropole et faites le valider par l'enseignant. Il faut aussi que vous définissiez le format de _payload_ que votre objet va renvoyer.