# Le module

L'Internet des objets (_Internet of Things_ ou IoT) est l'interconnexion entre l'Internet et des objets, des lieux et des environnements physiques. Il est ainsi possible de stocker et traiter de grands volumes de données et donc, générer de nouvelles connaissances et formes de savoirs.[^1]

L'objectif de ce parcours de formation est de vous apporter les connaissances et les compétences nécessaires afin d'exercer le métier d'architecte et de développeur IoT. Il vient à la suite du module IoT de S3 dans lequel vous vous êtes placé du côté de l'objet (MQTT, LoRaWAN, etc.).

Ici vous serez du côté application. Vous aurez ainsi vu toute la chaîne IoT[^2] ! 

> Vous allez développer une application complète à partir de données réelles et d'autres simulées.


## Votre projet Smart City

Ce module est un projet à réaliser par groupe de 4 ou 5 personnes. Vous êtes en mode start-up et allez construire un projet de A à Z dans le contexte IoT et Smart City.

> Avec les données en OpenData de Toulouse Métropole et les données de vos objets IoT, concevez l'application dont tout collectivité rêve !

Pour rappel, une collectivité, comme Toulouse Métropole, a pour compétences :

* Services : état civil, éducation, action sociale.
* Urbanisme : urbanisme, voirie, espaces verts.
* Économie : soutien aux entreprises, attractivité.
* Culture et loisirs : événements, équipements culturels et sportifs.
* Sécurité : police municipale, prévention.
* Environnement : gestion des déchets, protection écologique.
* Gestion des transports en commun et mobilités.


Portail open data de Toulouse Métropole :

[Site de l'open data de Toulouse Métropole](https://data.toulouse-metropole.fr/explore/?sort=modified){.md-button}

### Démarche projet

Un projet IoT met en oeuvre des compétences très diverses, de l'électronique jusqu'au développement web en passant par les réseaux et les infrastructures. Dans le cadre de ce projet, nous allons nous concentrer sur la partie protocoles de haut-niveau, infrastructure et application web.


!!! note "Travail par groupe"
    Mettez-vous par groupe afin de réfléchir à un sujet, trouver les jeux de données associés, définir à quoi vont ressembler les objets connectés dans votre application, le protocole et le format des messages qu'ils vont transmettre.

### Déroulé du projet

1. Définissez un sujet et faites la valider par l'enseignant
1. Étudiez le schéma d'architecture 
1. Commencer à rédiger le document de présentation PDF
1. Commencez la mise en oeuvre et testez !
1. Déployez sur votre conteneur Docker de production au fur et à mesure !

!!! note "Docker ?"
    Nous avons rédigé un fichier `docker-compose.yml` qui définit et permet d'instancier les services que vous allez exécuter. C'est le squelette de votre application que vous trouverez sur https://github.com/rboulle/R5-AL-18-IoT

## Compétences à acquérir

### Spécifications et conception
* Concevoir une architecture d'infrastructure IoT
* Choisir un protocole adapté
* Standardiser le format des données

### Développement
* Récupération de flux de données dans une page web
* Création d'un simulateur de flux en python
* Développement d'une application IoT en javascript

### Mise en oeuvre
* Installation et configuration d'un broker MQTT
* Installation et configuration d'un serveur web
* Installation et configuration de services IoT (influxdb, grafana, nodered)

### Tests et validation
* Tester les limites de charge admissible par l'infrastructure
* Déterminer les actions à mettre en place pour améliorer la scalabilité
* Démarche cybersécurité


## Livrables attendus

Vous devez rendre :

- un compte-rendu de projet détaillant votre sujet, votre démarche de conception et de mise en oeuvre de la solution ;
- un conteneur Docker avec votre projet fonctionnel.

## Volume horaire

6 créneaux sur 5 semaines

## Remerciements

Merci à la société [OperaMetrix](https://www.operametrix.fr/) pour son aide sur ce module ! Allez voir leur site et, peut-être, postulez !

## Références
[^1]: Article wikipedia, [Internet des Objets](https://fr.wikipedia.org/wiki/Internet_des_objets)
[^2]: Livre [Internet des objets connectés](https://www.dunod.com/sciences-techniques/internet-objets-connectes-cours-exercices-et-cas-pratiques), Cours, exercices et cas pratiques, Thierry Alhalel, Adrien van den Bossche, Remi Boulle (disponible à la BU).
