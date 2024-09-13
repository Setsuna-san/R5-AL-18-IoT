# Ressource R5-AL-18 : IoT 

## Pour l'enseignant

* Récupérer la dernière debian (11 ici car bug affichage avec virtualbox...)
* installer dans une VM sous virtualbox avec user/resu comme compte
* configurer réseau en connexion par pont
* dans paramètres, choisir FR pour le clavier
* installer openssh-server
* Dans /etc/ssh/sshd_config :
   * décommentez pour avoir : PasswordAuthentication yes
   * décommentez et augmentez la valeur de : MaxAuthTries
* systemctl restart ssh

## Pour le visualiser

* Télécharger et décompresser l'archive *.zip
* $cd R5-AL-18-IoT-master
* $mkdocs serve

## Pre-requis éventuels

sudo apt-get update

pip install mkdocs

pip install mkdocs-material-extensions

pip install pymdown-extensions

pip install mkdocs-material

pip install mkdocs-macros-plugin


